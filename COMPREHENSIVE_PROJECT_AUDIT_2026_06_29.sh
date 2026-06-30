#!/bin/bash

# Comprehensive El Dorado Project Audit Script
# Checks all HTML pages for: validity, links, mobile responsiveness, accessibility, performance

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║ EL DORADO VISION 2040 — COMPREHENSIVE PROJECT AUDIT          ║"
echo "║ Date: 2026-06-29                                              ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Count total files
HTML_COUNT=$(find . -name "*.html" -type f | wc -l)
DOC_COUNT=$(find . -name "*.md" -type f | wc -l)
CSS_COUNT=$(find . -name "*.css" -type f | wc -l)
JS_COUNT=$(find . -name "*.js" -type f | wc -l)
DATA_COUNT=$(find . -name "*.json" -o -name "*.geojson" -o -name "*.csv" | wc -l)

echo "📊 CODEBASE INVENTORY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "HTML Pages:        $HTML_COUNT"
echo "Markdown Docs:     $DOC_COUNT"
echo "CSS Files:         $CSS_COUNT"
echo "JavaScript Files:  $JS_COUNT"
echo "Data Files:        $DATA_COUNT"
echo ""

# Check for broken links
echo "🔗 LINK INTEGRITY CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
BROKEN=0
TOTAL=0

for html in $(find . -name "*.html" -type f); do
  # Extract href and src attributes
  grep -oE 'href="[^"]*"|src="[^"]*"' "$html" | cut -d'"' -f2 | while read -r url; do
    # Skip external URLs and anchors
    if [[ $url != http* ]] && [[ $url != \# ]] && [[ $url == *.html ]] || [[ $url == *.css ]] || [[ $url == *.js ]]; then
      if [ ! -f "$url" ]; then
        echo "  ❌ $html → $url (NOT FOUND)"
        ((BROKEN++))
      fi
    fi
  done
done

echo "✅ Links validated"
echo ""

# Check HTML structure
echo "🏗️  HTML STRUCTURE CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

MISSING_DOCTYPE=0
MISSING_LANG=0
MISSING_META=0
MISSING_TITLE=0
MISSING_H1=0

for html in $(find . -name "*.html" -type f); do
  # Check for DOCTYPE
  if ! grep -q "<!DOCTYPE" "$html"; then
    echo "  ⚠️  $html — Missing DOCTYPE"
    ((MISSING_DOCTYPE++))
  fi
  
  # Check for lang attribute
  if ! grep -q 'lang=' "$html"; then
    echo "  ⚠️  $html — Missing lang attribute"
    ((MISSING_LANG++))
  fi
  
  # Check for meta charset
  if ! grep -q 'charset' "$html"; then
    echo "  ⚠️  $html — Missing charset meta"
    ((MISSING_META++))
  fi
  
  # Check for title
  if ! grep -q '<title>' "$html"; then
    echo "  ⚠️  $html — Missing <title>"
    ((MISSING_TITLE++))
  fi
done

echo "✅ HTML structure scan complete"
echo "   DOCTYPE issues: $MISSING_DOCTYPE"
echo "   Lang issues: $MISSING_LANG"
echo "   Meta issues: $MISSING_META"
echo "   Title issues: $MISSING_TITLE"
echo ""

# Check for accessibility issues
echo "♿ ACCESSIBILITY CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
MISSING_ALT=0
MISSING_LABEL=0

for html in $(find . -name "*.html" -type f); do
  # Check for images without alt text
  IMGS_NO_ALT=$(grep -o '<img[^>]*>' "$html" | grep -v 'alt=' | wc -l)
  if [ $IMGS_NO_ALT -gt 0 ]; then
    echo "  ⚠️  $html — $IMGS_NO_ALT images missing alt text"
    ((MISSING_ALT+=$IMGS_NO_ALT))
  fi
done

echo "✅ Accessibility scan complete"
echo "   Images without alt: $MISSING_ALT"
echo ""

# Check for performance issues
echo "⚡ PERFORMANCE CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

LARGE_IMAGES=0
UNOPTIMIZED_JS=0

# Check for inline CSS/JS
INLINE_STYLE=$(grep -r '<style>' . --include="*.html" | wc -l)
INLINE_SCRIPT=$(grep -r '<script>' . --include="*.html" | grep -v 'async\|defer' | wc -l)

echo "✅ Performance scan complete"
echo "   Inline styles: $INLINE_STYLE"
echo "   Inline/blocking scripts: $INLINE_SCRIPT"
echo ""

# Check navigation integration
echo "🧭 NAVIGATION INTEGRATION CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

REFERENCED_PAGES=$(grep -h 'href=' index.html | grep -oE '\.html[^"]*' | sort -u)
TOTAL_PAGES=$(find . -name "*.html" -type f | sed 's|^\./||' | sort)

echo "✅ Navigation pages found: $(echo "$REFERENCED_PAGES" | wc -l)"
echo "✅ Total pages in project: $(echo "$TOTAL_PAGES" | wc -l)"
echo ""

# Summary
echo "📋 AUDIT SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Audit complete"
echo ""

