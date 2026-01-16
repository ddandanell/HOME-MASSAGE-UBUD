#!/bin/bash
# Simple Bash version for adding images to HTML files
# No Python needed - pure bash

set -e

# Default directory
HTML_DIR="${1:-.}"
IMAGES_DIR="${HTML_DIR}/images"

# Create images directory if it doesn't exist
mkdir -p "$IMAGES_DIR"

echo "🚀 Starting Simple Image Inserter"
echo "Processing HTML files in: $HTML_DIR"
echo "Images will be saved to: $IMAGES_DIR"
echo ""

# Counter for processed files
count=0

# Find and process all HTML files
find "$HTML_DIR" -maxdepth 1 -name "*.html" -type f | while read -r file; do
    echo "=================================================="
    echo "Processing: $(basename "$file")"
    echo "=================================================="
    
    # Extract keywords from title
    keywords=$(grep -oP '(?<=<title>).*?(?=</title>)' "$file" 2>/dev/null | head -1)
    
    if [ -z "$keywords" ]; then
        echo "⚠ No title found, skipping..."
        continue
    fi
    
    echo "Keywords: $keywords"
    
    # Generate filename
    basename_file=$(basename "$file" .html)
    image_file="${IMAGES_DIR}/${basename_file}.jpg"
    
    # Check if image already exists
    if [ -f "$image_file" ]; then
        echo "✓ Image already exists: $image_file"
    else
        # Download image from Picsum (random free images)
        echo "Downloading image..."
        if wget -q -O "$image_file" "https://picsum.photos/800/600?random" 2>/dev/null; then
            echo "✓ Downloaded image to: $image_file"
        else
            echo "✗ Failed to download image, skipping..."
            continue
        fi
    fi
    
    # Check if image tag already exists in file
    if grep -q "<img.*${basename_file}.jpg" "$file"; then
        echo "✓ Image already inserted in HTML"
    else
        # Create backup
        cp "$file" "${file}.backup"
        
        # Insert image after body tag
        sed -i "/<body/a\\    <img src=\"images/${basename_file}.jpg\" alt=\"${keywords}\" loading=\"lazy\" class=\"hero-image\" style=\"max-width: 100%; height: auto;\">" "$file"
        
        echo "✓ Inserted image into HTML"
        echo "✓ Backup saved: ${file}.backup"
    fi
    
    count=$((count + 1))
    
    # Be nice to servers
    sleep 2
    echo ""
done

echo "=================================================="
echo "✅ Completed! Processed $count files"
echo "Check the '$IMAGES_DIR' folder for images"
echo "=================================================="
