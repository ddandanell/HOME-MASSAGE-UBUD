# Auto Image Inserter

Automated tools to scrape images from Google Images, Pexels, and Unsplash, and insert them into your HTML files. No API keys required!

## Overview

This toolkit provides three different approaches to automatically enhance your website with relevant images:

1. **Python Scraper** (`auto-image-inserter.py`) - Most flexible, scrapes from multiple sources
2. **Selenium Scraper** (`auto-image-inserter-selenium.py`) - Most reliable, uses browser automation
3. **Bash Script** (`add-images-simple.sh`) - Simplest, uses free placeholder images

## Features

- **No API Keys Required** - All methods work without authentication
- **Multiple Image Sources** - Google Images, Pexels, Unsplash, Picsum
- **Intelligent Keyword Extraction** - Analyzes HTML content to find relevant search terms
- **SEO-Friendly** - Adds proper alt tags, lazy loading, and semantic class names
- **Automatic Backups** - Creates backup files before modifying HTML
- **Rate Limiting** - Built-in delays to avoid overwhelming servers
- **Configurable** - Easy to customize for your specific needs

## Installation

### Method 1: Python Scraper (Recommended)

**Requirements:**
- Python 3.7+
- pip

**Install Dependencies:**

```bash
pip install requests beautifulsoup4
```

Or if you have the project's package.json:

```bash
# Python dependencies are separate from npm
pip install requests beautifulsoup4
```

### Method 2: Selenium Scraper (Most Reliable)

**Requirements:**
- Python 3.7+
- Chrome browser
- ChromeDriver

**Install Dependencies:**

```bash
pip install selenium
```

**Download ChromeDriver:**
- Visit https://chromedriver.chromium.org/
- Download the version matching your Chrome browser
- Add ChromeDriver to your system PATH

### Method 3: Bash Script (Simplest)

**Requirements:**
- Bash shell
- wget (usually pre-installed on Linux/Mac)

No additional installation needed!

## Usage

### Python Scraper - Full Website Enhancement

Process all HTML files in a directory and add images from multiple sources:

```bash
# Process the client directory (default)
python3 scripts/auto-image-inserter.py

# Process a specific directory
python3 scripts/auto-image-inserter.py ./your-website-folder
```

**What it does:**
1. Scans all HTML files in the directory
2. Extracts keywords from title, headings, and meta description
3. Searches Google Images, Pexels, and Unsplash for relevant images
4. Downloads images to an `images` folder
5. Inserts `<img>` tags with proper SEO attributes
6. Creates backup files (`.html.backup`)

**Example Output:**
```
🚀 Starting Image Enhancement
Found 5 HTML files

============================================================
Processing: index.html
============================================================
Keywords found: massage, ubud, therapy, wellness
Found 3 locations for images
Searching images for: massage ubud
Searching Google Images...
Searching Pexels...
Searching Unsplash...
Found 7 images total
Downloading image 1...
✓ Inserted image into hero
✓ Saved modified HTML (backup: index.html.backup)
```

### Selenium Scraper - Test Image Search

Test image scraping with browser automation:

```bash
python3 scripts/auto-image-inserter-selenium.py "massage therapy"
```

**What it does:**
1. Opens a headless Chrome browser
2. Searches Google Images for your query
3. Downloads 5 images to `./downloaded_images/`

### Bash Script - Quick Image Addition

Add placeholder images to HTML files:

```bash
# Process current directory
./scripts/add-images-simple.sh

# Process specific directory
./scripts/add-images-simple.sh ./client
```

**What it does:**
1. Extracts title from each HTML file
2. Downloads a random placeholder image from Picsum
3. Inserts image tag after `<body>` tag
4. Creates backup files (`.html.backup`)

## Configuration

### Python Scraper Customization

Edit `scripts/auto-image-inserter.py` to customize:

**Change image sources:**
```python
# Adjust number of images from each source
all_images.extend(self.scraper.google_image_search(search_query, 5))  # More from Google
all_images.extend(self.scraper.pexels_scrape(search_query, 1))        # Fewer from Pexels
```

**Modify keyword extraction:**
```python
# Add more stop words
skip_words = {'the', 'and', 'for', 'with', 'this', 'that', 'from', 'have', 'are', 'your', 'custom', 'words'}
```

**Change image placement:**
```python
# Max images per page (currently 5)
return locations[:10]  # Increase to 10
```

**Adjust rate limiting:**
```python
time.sleep(2)  # Change delay between requests
```

### Selenium Scraper Customization

Edit `scripts/auto-image-inserter-selenium.py`:

**Change browser options:**
```python
options.add_argument('--window-size=1920,1080')  # Set window size
options.add_argument('--disable-blink-features=AutomationControlled')  # More stealth
```

**Adjust scroll behavior:**
```python
for _ in range(5):  # Scroll more times to load more images
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(2)  # Wait longer between scrolls
```

### Bash Script Customization

Edit `scripts/add-images-simple.sh`:

**Change image dimensions:**
```bash
wget -q -O "$image_file" "https://picsum.photos/1200/800?random"  # Larger images
```

**Modify image insertion location:**
```bash
sed -i "/<main/a\\    <img src=\"images/${basename_file}.jpg\" ..." "$file"  # Insert after <main> tag
```

## Pro Tips

### Avoiding Rate Limits and Blocks

1. **Use delays between requests** (already built-in)
2. **Rotate user agents** if doing bulk scraping
3. **Use proxies** for large-scale operations
4. **Cache images** - don't re-download existing images
5. **Respect robots.txt** and terms of service

### Best Practices

1. **Always backup your files** - The scripts do this automatically
2. **Test on a single file first** - Before processing your entire site
3. **Review inserted images** - Automated scraping may not always find perfect matches
4. **Optimize images** - Consider compressing downloaded images for web use
5. **Check licensing** - Ensure scraped images are appropriate for your use case

### Image Optimization

After downloading images, optimize them:

```bash
# Install ImageMagick
sudo apt-get install imagemagick  # Linux
brew install imagemagick          # Mac

# Optimize images
for img in images/*.jpg; do
  convert "$img" -quality 85 -resize 1200x800\> "$img"
done
```

### Converting to WebP

Modern browsers support WebP for better compression:

```bash
# Install cwebp
sudo apt-get install webp  # Linux

# Convert images
for img in images/*.jpg; do
  cwebp -q 80 "$img" -o "${img%.jpg}.webp"
done
```

## Troubleshooting

### Python Scraper Issues

**"No module named 'requests'"**
```bash
pip install requests beautifulsoup4
```

**"No images found"**
- Check your internet connection
- Try a different search query with more common terms
- Google may be blocking requests - try the Selenium method

**"Permission denied"**
```bash
chmod +x scripts/auto-image-inserter.py
```

### Selenium Issues

**"ChromeDriver not found"**
- Download from https://chromedriver.chromium.org/
- Add to PATH or place in the same directory as the script

**"Chrome version mismatch"**
- Update Chrome browser to match ChromeDriver version
- Or download ChromeDriver matching your Chrome version

### Bash Script Issues

**"wget: command not found"**
```bash
# Install wget
sudo apt-get install wget  # Linux
brew install wget          # Mac
```

**"Permission denied"**
```bash
chmod +x scripts/add-images-simple.sh
```

## Integration with npm Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "images:add": "python3 scripts/auto-image-inserter.py ./client",
    "images:selenium": "python3 scripts/auto-image-inserter-selenium.py",
    "images:simple": "./scripts/add-images-simple.sh ./client"
  }
}
```

Then run:
```bash
npm run images:add
```

## Security & Legal Considerations

### Copyright and Licensing

- **Google Images**: May contain copyrighted content - verify licensing
- **Pexels**: Free to use with Pexels License (attribution appreciated)
- **Unsplash**: Free to use with Unsplash License (attribution appreciated)
- **Picsum**: Placeholder images for testing (check individual photo licenses)

### Recommendations

1. **Use for development/testing** - These tools are great for prototyping
2. **Verify licensing** - Before using in production, ensure proper licensing
3. **Consider paid stock photos** - For commercial websites
4. **Use reputable APIs** - Unsplash API, Pexels API (with authentication) for production

### Web Scraping Ethics

- Respect robots.txt files
- Don't overload servers with requests
- Use rate limiting and delays
- Consider Terms of Service of each platform
- Cache results to minimize requests

## Examples

### Example 1: Add Images to All Service Pages

```bash
# Navigate to service pages directory
cd client/src/pages/services

# Run the Python scraper
python3 ../../../../scripts/auto-image-inserter.py .

# Review the changes
ls -la images/
```

### Example 2: Test Image Search Before Processing

```bash
# Test what images would be found
python3 scripts/auto-image-inserter-selenium.py "bali massage therapy"

# Review downloaded images in ./downloaded_images/

# If satisfied, run the full processor
python3 scripts/auto-image-inserter.py ./client
```

### Example 3: Quick Placeholder Images for Development

```bash
# Add placeholder images to all HTML files
./scripts/add-images-simple.sh ./client

# Start dev server to preview
npm run dev
```

## Related Documentation

- `scripts/README.md` - Overview of all scripts
- `scripts/seo-audit.ts` - SEO audit tool
- `attached_assets/` - Existing image assets

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review the script source code for inline comments
3. Test with a single HTML file first
4. Verify all dependencies are installed

## License

MIT License - Use freely in your projects!
