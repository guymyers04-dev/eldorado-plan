#!/bin/bash

echo "========================================="
echo "COMPREHENSIVE EL DORADO OPTIMIZATION AUDIT"
echo "========================================="
echo ""

# Count HTML files
TOTAL_HTML=$(find . -name "*.html" -type f | grep -v backups | wc -l)
echo "📊 TOTAL HTML FILES: $TOTAL_HTML"
echo ""

# 1. META DESCRIPTION AUDIT
echo "1️⃣  META DESCRIPTION AUDIT"
echo "---"
MISSING_META=0
for file in $(find . -name "*.html" -type f | grep -v backups | sort); do
  if ! grep -q '<meta name="description"' "$file"; then
    echo "   ❌ $file"
    ((MISSING_META++))
  fi
done
echo "   Result: $MISSING_META pages missing meta descriptions"
echo ""

# 2. H1 TAG AUDIT
echo "2️⃣  H1 TAG AUDIT"
echo "---"
MISSING_H1=0
for file in $(find . -name "*.html" -type f | grep -v backups | sort); do
  if ! grep -q '<h1' "$file"; then
    echo "   ❌ $file"
    ((MISSING_H1++))
  fi
done
echo "   Result: $MISSING_H1 pages missing H1 tags"
echo ""

# 3. HARDCODED NAV AUDIT (quick check for static nav)
echo "3️⃣  HARDCODED NAVIGATION AUDIT"
echo "---"
HARDCODED=0
for file in $(find . -name "*.html" -type f | grep -v backups | head -20); do
  if grep -q 'href=".*/index.html"' "$file"; then
    ((HARDCODED++))
  fi
done
echo "   Sampled 20 files: ~$HARDCODED likely have hardcoded nav patterns"
echo ""

# 4. BROKEN LINKS (sample 10 pages)
echo "4️⃣  BROKEN LINKS AUDIT (sample)"
echo "---"
cd /Users/guyh/eldorado-plan
for file in index.html economy.html place.html housing.html finance.html; do
  BROKEN=$(grep -o 'href="[^"]*"' "$file" | grep -v 'http' | grep -v '#' | sed 's/href="//;s/"//' | while read link; do
    target="${link##*/}"
    if [ ! -f "$target" ]; then
      echo "$target"
    fi
  done | wc -l)
  if [ $BROKEN -gt 0 ]; then
    echo "   ⚠️  $file: $BROKEN broken links"
  fi
done
echo ""

# 5. PERFORMANCE ISSUES
echo "5️⃣  QUICK PERFORMANCE CHECKS"
echo "---"
LARGE_FILES=$(find . -name "*.html" -type f ! -path "./backups*" -exec wc -c {} + | sort -rn | head -5)
echo "   Top 5 largest HTML files:"
echo "$LARGE_FILES" | while read size file; do
  SIZE_KB=$((size / 1024))
  echo "   - $file: ${SIZE_KB}KB"
done
echo ""

# 6. PAGE TITLES AUDIT
echo "6️⃣  PAGE TITLE AUDIT"
echo "---"
MISSING_TITLE=0
for file in $(find . -name "*.html" -type f | grep -v backups); do
  if ! grep -q '<title>' "$file"; then
    echo "   ❌ $file"
    ((MISSING_TITLE++))
  fi
done
echo "   Result: $MISSING_TITLE pages missing titles"
echo ""

echo "========================================="
echo "✅ AUDIT COMPLETE"
echo "========================================="
