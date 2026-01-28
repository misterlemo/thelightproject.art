#!/bin/bash

# Create placeholder images using ImageMagick or simple colored squares
# This will let you see the website layout while preparing real images

cd "$(dirname "$0")/.."

# Create hero placeholder
convert -size 1920x1080 gradient:blue-white public/images/hero/dance-of-shadows-cover.jpg 2>/dev/null || \
echo "Install ImageMagick to generate placeholders, or add images manually"

# Create blue series placeholders
for i in {1..3}; do
  convert -size 1200x1200 xc:blue public/images/portfolio/blue/placeholder-$i.jpg 2>/dev/null
done

# Create red series placeholders
for i in {1..3}; do
  convert -size 1200x1200 xc:red public/images/portfolio/red/placeholder-$i.jpg 2>/dev/null
done

# Create yellow series placeholders
for i in {1..3}; do
  convert -size 1200x1200 xc:yellow public/images/portfolio/yellow/placeholder-$i.jpg 2>/dev/null
done

echo "Placeholder images created (if ImageMagick is installed)"
echo "Replace these with your actual artwork images"
