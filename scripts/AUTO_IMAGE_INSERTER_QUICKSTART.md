# Auto Image Inserter - Quick Start Guide

This guide helps you get started with the auto-image-inserter tools quickly.

## TL;DR - Get Started in 3 Steps

```bash
# 1. Install Python dependencies
pip install -r scripts/requirements.txt

# 2. Run the auto-image-inserter
python3 scripts/auto-image-inserter.py ./client

# OR use npm script
npm run images:add
```

## What This Tool Does

Automatically:
1. 📄 Scans your HTML files
2. 🔍 Extracts keywords from titles, headings, and meta descriptions
3. 🖼️ Searches for relevant images on Google Images, Pexels, and Unsplash
4. ⬇️ Downloads images to an `images/` folder
5. ✨ Inserts `<img>` tags with proper SEO attributes (alt text, lazy loading)
6. 💾 Creates backup files (`.html.backup`)

## Prerequisites

### For Python Scripts
- Python 3.7 or higher
- pip (Python package manager)

### For Bash Script
- Bash shell
- wget (usually pre-installed)

## Installation

### Step 1: Install Python Dependencies

```bash
# Navigate to the project root
cd /path/to/HOME-MASSAGE-UBUD

# Install dependencies
pip install -r scripts/requirements.txt
```

### Step 2: Verify Installation

```bash
python3 -c "import requests; import bs4; print('✓ Ready to go!')"
```

## Usage Options

### Option 1: Python Scraper (Recommended)

**Best for:** Production use, multiple image sources, smart keyword extraction

```bash
# Process the client directory (default)
python3 scripts/auto-image-inserter.py

# Process a specific directory
python3 scripts/auto-image-inserter.py ./your-directory

# Using npm
npm run images:add
```

**Features:**
- Scrapes Google Images, Pexels, and Unsplash
- Intelligent keyword extraction
- Finds optimal image placement locations
- Rate limiting built-in
- Creates organized backups

### Option 2: Selenium Scraper (Most Reliable)

**Best for:** When Python scraper gets blocked, testing image search

**Requirements:**
```bash
pip install selenium
# Download ChromeDriver from: https://chromedriver.chromium.org/
```

**Usage:**
```bash
# Test image search
python3 scripts/auto-image-inserter-selenium.py "massage therapy bali"

# Images will be downloaded to ./downloaded_images/
```

### Option 3: Bash Script (Simplest)

**Best for:** Quick testing, development, placeholder images

```bash
# Process current directory
./scripts/add-images-simple.sh

# Process specific directory
./scripts/add-images-simple.sh ./client

# Using npm
npm run images:simple
```

**Features:**
- No Python required
- Uses free placeholder images from Picsum
- Ultra-simple, minimal dependencies
- Good for rapid prototyping

## Example Workflow

### 1. Test on a Single File First

```bash
# Create a test directory
mkdir /tmp/test-site
cp client/index.html /tmp/test-site/

# Run the script
python3 scripts/auto-image-inserter.py /tmp/test-site

# Review the results
ls -la /tmp/test-site/images/
```

### 2. Review the Changes

```bash
# Check what was modified
diff /tmp/test-site/index.html /tmp/test-site/index.html.backup

# View the modified HTML
cat /tmp/test-site/index.html
```

### 3. Run on Your Full Site

```bash
# Process all HTML files in client directory
npm run images:add

# Or directly with Python
python3 scripts/auto-image-inserter.py ./client
```

## Expected Output

```
🚀 Starting Image Enhancement
Found 5 HTML files

============================================================
Processing: index.html
============================================================
Keywords found: massage, ubud, therapy, wellness, balinese
Found 3 locations for images
Searching images for: massage ubud
Searching Google Images...
Searching Pexels...
Searching Unsplash...
Found 7 images total
Downloading image 1...
✓ Inserted image into hero
Downloading image 2...
✓ Inserted image into section
✓ Saved modified HTML (backup: index.html.backup)
```

## What Gets Created

```
your-directory/
├── index.html                    # Modified with new <img> tags
├── index.html.backup             # Original backup
├── about.html
├── about.html.backup
└── images/                       # New directory
    ├── index_0.jpg               # Downloaded images
    ├── index_1.jpg
    ├── about_0.jpg
    └── about_1.jpg
```

## Generated Image Tag Example

```html
<img 
  src="images/index_0.jpg" 
  alt="massage ubud - hero image" 
  loading="lazy" 
  class="hero-image"
>
```

## Common Issues & Solutions

### Issue: "ModuleNotFoundError: No module named 'requests'"

**Solution:**
```bash
pip install -r scripts/requirements.txt
```

### Issue: "Permission denied" when running bash script

**Solution:**
```bash
chmod +x scripts/add-images-simple.sh
```

### Issue: Script finds no images

**Possible causes:**
- Network connection issues
- Google blocking requests (use Selenium version)
- Keywords too specific or niche

**Solution:**
```bash
# Try the Selenium version
python3 scripts/auto-image-inserter-selenium.py "your search term"
```

### Issue: Images are low quality

**Solution:** Modify the script to download higher resolution images, or manually replace with better images later.

## Customization Tips

### Change Number of Images Per Page

Edit `scripts/auto-image-inserter.py` line 170:
```python
return locations[:5]  # Change 5 to desired number
```

### Adjust Search Query

Edit `scripts/auto-image-inserter.py` line 200:
```python
search_query = ' '.join(keywords[:3])  # Use 3 keywords instead of 2
```

### Add More Image Sources

Add your own scraping function in the `ImageScraper` class:
```python
def your_custom_source(self, query, num_images=3):
    # Your implementation
    pass
```

## Best Practices

1. **Always test on a copy first** - Don't run on production files immediately
2. **Review generated images** - Automated scraping isn't perfect
3. **Optimize images afterward** - Use tools like ImageMagick to compress
4. **Check licensing** - Verify images are appropriate for your use
5. **Keep backups** - The tool creates `.backup` files, but maintain your own too

## Next Steps

1. ✅ Install dependencies
2. ✅ Run on test directory
3. ✅ Review results
4. ✅ Run on production files
5. ✅ Optimize images
6. ✅ Deploy changes

## Need Help?

- Read the full documentation: [AUTO_IMAGE_INSERTER_README.md](./AUTO_IMAGE_INSERTER_README.md)
- Check the scripts directory: [scripts/README.md](./README.md)
- Review example output in `/tmp/test-site/`

## Related Scripts

- `seo-audit.ts` - SEO audit tool
- `lymphatic-drainage-content-generator.ts` - Content generator
- `indexnow-submit.ts` - IndexNow submission

## License

MIT License - Free to use and modify
