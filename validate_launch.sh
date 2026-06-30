#!/bin/bash

echo "=== El Dorado Launch Validation ==="
echo ""

# Count HTML files
HTML_COUNT=$(find . -maxdepth 1 -name "*.html" -type f | wc -l)
echo "✓ HTML Pages: $HTML_COUNT"

# Check for broken internal links
BROKEN=0
for file in *.html; do
  grep -o 'href="[^"]*"' "$file" | grep -o '[^"]*' | while read url; do
    if [[ $url != http* ]] && [[ $url != "#" ]] && [[ $url != "mailto:"* ]]; then
      if [[ ! -f "${url%.html*}.html" ]] && [[ ! -d "$url" ]]; then
        echo "  ⚠ Broken: $url in $file"
        ((BROKEN++))
      fi
    fi
  done
done

# Check for placeholder text
PLACEHOLDERS=$(grep -l "TODO\|Lorem ipsum\|PLACEHOLDER" *.html 2>/dev/null | wc -l)
echo "✓ Placeholder Issues: $PLACEHOLDERS"

# Check all pages have H1
PAGES_NO_H1=$(grep -L "<h1" *.html 2>/dev/null | wc -l)
echo "✓ Pages Without H1: $PAGES_NO_H1"

# Check all pages have title
PAGES_NO_TITLE=$(grep -L "<title" *.html 2>/dev/null | wc -l)
echo "✓ Pages Without Title: $PAGES_NO_TITLE"

# Check all pages have viewport
PAGES_NO_VIEWPORT=$(grep -L 'viewport' *.html 2>/dev/null | wc -l)
echo "✓ Pages Without Viewport Meta: $PAGES_NO_VIEWPORT"

echo ""
echo "=== READY FOR BROWSER TESTING ==="
