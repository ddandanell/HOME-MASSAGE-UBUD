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

# Counter for processed files (use temp file to avoid subshell issue)
temp_count_file="/tmp/image_inserter_count_$$"
echo "0" > "$temp_count_file"

# Find and process all HTML files
find "$HTML_DIR" -maxdepth 1 -name "*.html" -type f | while read -r file; do
    echo "=================================================="
    echo "Processing: $(basename "$file")"
    echo "=================================================="
    
    # Extract keywords from title (using basic grep for portability)
    keywords=$(grep -o '<title>[^<]*</title>' "$file" 2>/dev/null | sed 's/<title>//;s/<\/title>//' | head -1)
    
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
        
        # Create image tag HTML
        img_tag="    <img src=\"images/${basename_file}.jpg\" alt=\"${keywords}\" loading=\"lazy\" class=\"hero-image\" style=\"max-width: 100%; height: auto;\">"
        
        # Insert image after body tag (portable sed syntax)
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS (BSD sed) - needs different escape sequence
            sed -i '' "/<body/a\\
${img_tag}" "$file"
        else
            # Linux (GNU sed)
            sed -i "/<body/a\\${img_tag}" "$file"
        fi
        
        echo "✓ Inserted image into HTML"
        echo "✓ Backup saved: ${file}.backup"
    fi
    
    # Increment counter
    count=$(cat "$temp_count_file")
    count=$((count + 1))
    echo "$count" > "$temp_count_file"
    
    # Be nice to servers
    sleep 2
    echo ""
done

# Read final count
count=$(cat "$temp_count_file")
rm -f "$temp_count_file"

echo "=================================================="
echo "✅ Completed! Processed $count files"
echo "Check the '$IMAGES_DIR' folder for images"
echo "=================================================="
