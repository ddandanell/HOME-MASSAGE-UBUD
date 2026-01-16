#!/usr/bin/env python3
"""
Using Selenium to scrape images (more reliable)
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import WebDriverException
import time
import urllib.request
from pathlib import Path

def setup_browser():
    """Setup headless Chrome"""
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-extensions')
    options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
    
    try:
        driver = webdriver.Chrome(options=options)
        return driver
    except WebDriverException as e:
        print(f"Error setting up Chrome driver: {e}")
        print("\nChrome and ChromeDriver installation guide:")
        print("1. Check your Chrome version: chrome://version")
        print("2. Download matching ChromeDriver from: https://chromedriver.chromium.org/downloads")
        print("   OR for Chrome 115+: https://googlechromelabs.github.io/chrome-for-testing/")
        print("3. Add ChromeDriver to your system PATH")
        print("4. Verify: chromedriver --version")
        return None

def scrape_google_images_selenium(query, num_images=5):
    """More reliable Google Images scraping"""
    driver = setup_browser()
    if not driver:
        return []
    
    try:
        search_url = f"https://www.google.com/search?q={query}&tbm=isch"
        driver.get(search_url)
        
        # Scroll to load images
        for _ in range(3):
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(1)
        
        # Get image URLs
        images = driver.find_elements(By.CSS_SELECTOR, "img")
        image_urls = []
        
        for img in images:
            src = img.get_attribute('src')
            if src and src.startswith('http') and 'gstatic' not in src:
                image_urls.append(src)
                if len(image_urls) >= num_images:
                    break
        
        return image_urls
    except Exception as e:
        print(f"Error scraping images: {e}")
        return []
    finally:
        driver.quit()

def download_image(url, save_path):
    """Download image to local folder"""
    try:
        urllib.request.urlretrieve(url, save_path)
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def main():
    """Main function to test Selenium scraper"""
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: python auto-image-inserter-selenium.py <search_query>")
        print("Example: python auto-image-inserter-selenium.py 'massage therapy'")
        sys.exit(1)
    
    query = ' '.join(sys.argv[1:])
    print(f"Searching for: {query}")
    
    images = scrape_google_images_selenium(query, 5)
    print(f"Found {len(images)} images")
    
    # Create output directory
    output_dir = Path("./downloaded_images")
    output_dir.mkdir(exist_ok=True)
    
    # Download images
    for idx, url in enumerate(images):
        filename = f"{query.replace(' ', '_')}_{idx}.jpg"
        filepath = output_dir / filename
        print(f"Downloading image {idx+1}...")
        if download_image(url, filepath):
            print(f"✓ Saved to {filepath}")
        else:
            print(f"✗ Failed to download image {idx+1}")

if __name__ == "__main__":
    main()
