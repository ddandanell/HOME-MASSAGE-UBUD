#!/usr/bin/env python3
"""
Auto Image Inserter - No API Keys Required
Scrapes Google Images and inserts into your website
"""

import requests
from bs4 import BeautifulSoup
import urllib.parse
import urllib.request
import re
import time
from pathlib import Path
from collections import Counter

class ImageScraper:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    
    def google_image_search(self, query, num_images=5):
        """Scrape images from Google Images"""
        search_url = f"https://www.google.com/search?q={urllib.parse.quote(query)}&tbm=isch"
        
        try:
            response = requests.get(search_url, headers=self.headers, timeout=10)
            
            # Handle HTTP errors
            if response.status_code == 403:
                print(f"Access forbidden (403) - Google may be blocking requests")
                return []
            elif response.status_code == 429:
                print(f"Rate limited (429) - Too many requests, try again later")
                return []
            elif response.status_code >= 400:
                print(f"HTTP error {response.status_code}")
                return []
                
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            
            images = []
            
            # Method 1: Find image tags
            for img in soup.find_all('img'):
                src = img.get('src') or img.get('data-src')
                if src and src.startswith('http'):
                    images.append(src)
                    if len(images) >= num_images:
                        break
            
            # Method 2: Parse JavaScript data
            scripts = soup.find_all('script')
            for script in scripts:
                if script.string and 'AF_initDataCallback' in script.string:
                    matches = re.findall(r'https://[^"]*\.(?:jpg|jpeg|png|webp)', script.string)
                    for match in matches:
                        if match not in images:
                            images.append(match)
                            if len(images) >= num_images:
                                break
            
            return images[:num_images]
        except Exception as e:
            print(f"Error scraping Google Images: {e}")
            return []
    
    def pexels_scrape(self, query, num_images=3):
        """Scrape Pexels (no API needed)"""
        search_url = f"https://www.pexels.com/search/{urllib.parse.quote(query)}/"
        
        try:
            response = requests.get(search_url, headers=self.headers, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            images = []
            for img in soup.find_all('img', {'class': 'photo-item__img'}):
                src = img.get('src')
                if src and 'images.pexels.com' in src:
                    images.append(src)
                    if len(images) >= num_images:
                        break
            
            return images
        except Exception as e:
            print(f"Error scraping Pexels: {e}")
            return []
    
    def unsplash_scrape(self, query, num_images=3):
        """Scrape Unsplash (no API needed)"""
        search_url = f"https://unsplash.com/s/photos/{urllib.parse.quote(query)}"
        
        try:
            response = requests.get(search_url, headers=self.headers, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            images = []
            for img in soup.find_all('img', {'srcset': True}):
                srcset = img.get('srcset')
                if srcset and 'images.unsplash.com' in srcset:
                    # Get highest quality URL
                    urls = srcset.split(',')
                    if urls:
                        image_url = urls[-1].strip().split(' ')[0]
                        images.append(image_url)
                        if len(images) >= num_images:
                            break
            
            return images
        except Exception as e:
            print(f"Error scraping Unsplash: {e}")
            return []
    
    def download_image(self, url, save_path):
        """Download image to local folder with size and type validation"""
        try:
            # Fetch with stream to check headers first
            response = requests.get(url, headers=self.headers, stream=True, timeout=10)
            response.raise_for_status()
            
            # Validate content type
            content_type = response.headers.get('content-type', '').lower()
            if not any(img_type in content_type for img_type in ['image/jpeg', 'image/png', 'image/webp']):
                print(f"Invalid content type: {content_type}")
                return False
            
            # Check file size (limit to 10MB)
            content_length = response.headers.get('content-length')
            if content_length and int(content_length) > 10 * 1024 * 1024:
                print(f"File too large: {int(content_length) / 1024 / 1024:.1f}MB")
                return False
            
            # Download the file
            with open(save_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            return True
        except Exception as e:
            print(f"Failed to download {url}: {e}")
            return False

class WebsiteImageEnhancer:
    # Common words to skip in keyword extraction
    SKIP_WORDS = {'the', 'and', 'for', 'with', 'this', 'that', 'from', 'have', 
                  'are', 'your', 'about', 'more', 'our', 'their', 'than', 'can', 
                  'will', 'also', 'all', 'into', 'but', 'they', 'what', 'when'}
    
    # Supported image file extensions
    SUPPORTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp']
    
    def __init__(self, website_dir):
        self.website_dir = Path(website_dir)
        self.scraper = ImageScraper()
        self.images_dir = self.website_dir / 'images'
        self.images_dir.mkdir(exist_ok=True)
    
    def analyze_html_content(self, html_content):
        """Simple keyword extraction without AI API"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Get title
        title = soup.find('title')
        title_text = title.get_text() if title else ""
        
        # Get headings
        headings = []
        for h in soup.find_all(['h1', 'h2', 'h3']):
            headings.append(h.get_text().strip())
        
        # Get meta description
        meta = soup.find('meta', {'name': 'description'})
        description = meta.get('content') if meta else ""
        
        # Combine and extract keywords
        text = f"{title_text} {' '.join(headings)} {description}".lower()
        
        words = re.findall(r'\b\w{4,}\b', text)
        keywords = [w for w in words if w not in self.SKIP_WORDS]
        
        # Get top keywords by frequency
        top_keywords = Counter(keywords).most_common(5)
        
        return [word for word, count in top_keywords]
    
    def find_image_locations(self, soup):
        """Find where to insert images"""
        locations = []
        
        # Check for hero section
        hero = soup.find(['section', 'div'], {'class': re.compile(r'hero|banner|jumbotron', re.I)})
        if hero and not hero.find('img'):
            locations.append(('hero', hero))
        
        # Check main sections without images
        sections = soup.find_all(['section', 'article', 'div'], {'class': True})
        for section in sections:
            if not section.find('img') and len(section.get_text().strip()) > 100:
                locations.append(('section', section))
        
        return locations[:5]  # Max 5 images per page
    
    def process_html_file(self, html_path):
        """Process single HTML file"""
        print(f"\n{'='*60}")
        print(f"Processing: {html_path.name}")
        print(f"{'='*60}")
        
        with open(html_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Analyze content
        keywords = self.analyze_html_content(html_content)
        print(f"Keywords found: {', '.join(keywords)}")
        
        # Find where to add images
        locations = self.find_image_locations(soup)
        print(f"Found {len(locations)} locations for images")
        
        if not locations or not keywords:
            print("No suitable locations or keywords found")
            return
        
        # Get images for main keyword
        search_query = ' '.join(keywords[:2])
        print(f"Searching images for: {search_query}")
        
        # Try multiple sources
        all_images = []
        
        print("Searching Google Images...")
        all_images.extend(self.scraper.google_image_search(search_query, 3))
        time.sleep(1)
        
        print("Searching Pexels...")
        all_images.extend(self.scraper.pexels_scrape(search_query, 2))
        time.sleep(1)
        
        print("Searching Unsplash...")
        all_images.extend(self.scraper.unsplash_scrape(search_query, 2))
        
        print(f"Found {len(all_images)} images total")
        
        # Insert images
        for idx, (location_type, element) in enumerate(locations):
            if idx >= len(all_images):
                break
            
            image_url = all_images[idx]
            
            # Determine file extension from URL
            url_path = urllib.parse.urlparse(image_url).path
            ext = Path(url_path).suffix or '.jpg'
            if ext.lower() not in self.SUPPORTED_IMAGE_EXTENSIONS:
                ext = '.jpg'  # Default to jpg if unknown
            
            image_filename = f"{html_path.stem}_{idx}{ext}"
            image_path = self.images_dir / image_filename
            
            # Download image
            print(f"Downloading image {idx+1}...")
            if self.scraper.download_image(image_url, image_path):
                # Create img tag with SEO
                img_tag = soup.new_tag('img')
                img_tag['src'] = f"images/{image_filename}"
                img_tag['alt'] = f"{search_query} - {location_type} image"
                img_tag['loading'] = 'lazy'
                img_tag['class'] = f'{location_type}-image'
                
                # Insert at beginning of element
                element.insert(0, img_tag)
                print(f"✓ Inserted image into {location_type}")
        
        # Save modified HTML
        backup_path = html_path.with_suffix('.html.backup')
        # Only create backup if it doesn't exist (preserve original)
        if not backup_path.exists():
            html_path.rename(backup_path)
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(str(soup.prettify()))
        
        print(f"✓ Saved modified HTML (backup: {backup_path.name})")
    
    def process_all_files(self):
        """Process all HTML files in directory"""
        # Get all HTML files, excluding backup files
        html_files = [f for f in self.website_dir.glob("**/*.html") if not f.name.endswith('.backup')]
        
        print(f"\n🚀 Starting Image Enhancement")
        print(f"Found {len(html_files)} HTML files\n")
        
        for html_file in html_files:
            try:
                self.process_html_file(html_file)
                time.sleep(2)  # Be nice to servers
            except Exception as e:
                print(f"❌ Error processing {html_file.name}: {e}")
        
        print(f"\n✅ Completed! Check your 'images' folder")

# Run it
if __name__ == "__main__":
    import sys
    
    # Get website directory from command line argument or use default
    if len(sys.argv) > 1:
        website_dir = sys.argv[1]
    else:
        website_dir = "./client"
    
    print(f"Processing website directory: {website_dir}")
    enhancer = WebsiteImageEnhancer(website_dir)
    enhancer.process_all_files()
