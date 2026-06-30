#!/bin/bash
echo "🖼️  IMAGE ALT TEXT AUDIT"
echo "════════════════════════════════════════════════"

MISSING_ALT=0
TOTAL_IMAGES=0

for html in *.html; do
  # Count images without alt text
  IMGS_NO_ALT=$(grep -oE '<img[^>]*>' "$html" | grep -v 'alt=' | wc -l)
  TOTAL=$(grep -c '<img' "$html" 2>/dev/null || echo 0)
  
  if [ $TOTAL -gt 0 ]; then
    MISSING_ALT=$((MISSING_ALT + IMGS_NO_ALT))
    TOTAL_IMAGES=$((TOTAL_IMAGES + TOTAL))
    
    if [ $IMGS_NO_ALT -gt 0 ]; then
      echo "⚠️  $html — $IMGS_NO_ALT / $TOTAL missing alt text"
      # Show first missing img src
      grep -oE '<img[^>]*>' "$html" | grep -v 'alt=' | head -1
    fi
  fi
done

echo ""
echo "════════════════════════════════════════════════"
echo "Total images scanned: $TOTAL_IMAGES"
echo "Images missing alt: $MISSING_ALT"
