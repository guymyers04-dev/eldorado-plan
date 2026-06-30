#!/bin/bash

echo "🔍 COMPLETE PROJECT AUDIT - Starting comprehensive scan"
echo "============================================================="
echo ""

# Count totals
echo "📊 PROJECT INVENTORY:"
echo "Total HTML files: $(find . -maxdepth 1 -name "*.html" -type f | wc -l)"
echo "Total lines of HTML: $(find . -maxdepth 1 -name "*.html" -type f -exec wc -l {} + | tail -1 | awk '{print $1}')"
echo "Total CSS: $(wc -l css/styles.css 2>/dev/null | awk '{print $1}') lines"
echo ""

# Check for incomplete content markers
echo "🔎 CHECKING FOR INCOMPLETE CONTENT:"
echo "Files with 'TODO': $(grep -r "TODO\|FIXME\|PLACEHOLDER\|Lorem ipsum" *.html 2>/dev/null | wc -l)"
echo "Files with broken img src: $(grep -c 'src=""' *.html 2>/dev/null || echo "0")"
echo "Files with missing alt text: $(grep -c '<img[^>]*src=[^>]*>' *.html 2>/dev/null | wc -l) img tags checked"
echo ""

# Validate structure
echo "✓ HTML STRUCTURE CHECK:"
missing_doctype=$(find . -maxdepth 1 -name "*.html" -type f ! -exec grep -q "<!DOCTYPE" {} \; -print | wc -l)
echo "Files without DOCTYPE: $missing_doctype"
echo ""

# Link verification
echo "🔗 LINK ANALYSIS:"
echo "Total href links found: $(grep -rh 'href=' *.html 2>/dev/null | wc -l)"
echo "Anchor links (#): $(grep -rh 'href="#' *.html 2>/dev/null | wc -l)"
echo "External links: $(grep -rh 'href="http' *.html 2>/dev/null | wc -l)"
echo "Relative links (.html): $(grep -rh 'href="[a-z-]*\.html' *.html 2>/dev/null | wc -l)"
echo ""

# Image check
echo "🖼️ IMAGE INVENTORY:"
echo "Total img tags: $(grep -rh '<img' *.html 2>/dev/null | wc -l)"
echo "Unsplash images: $(grep -rh 'unsplash.com' *.html 2>/dev/null | wc -l)"
echo "Local images: $(grep -rh 'src="/' *.html 2>/dev/null | wc -l)"
echo ""

# Meta tags
echo "📝 META TAGS:"
echo "Pages with title: $(grep -l '<title>' *.html 2>/dev/null | wc -l)"
echo "Pages with description: $(grep -l 'meta.*description' *.html 2>/dev/null | wc -l)"
echo "Pages with OG tags: $(grep -l 'og:' *.html 2>/dev/null | wc -l)"
echo ""

