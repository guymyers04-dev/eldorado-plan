#!/bin/bash

# JavaScript Cleanup Script - Remove Redundant Files
# Keep minified versions (.min.js) and remove source files (.js) that have minified versions

cd /Users/guyh/eldorado-plan/js/

echo "🧹 Cleaning up redundant JavaScript files..."
echo ""

# First, update any remaining references to unminified files in HTML
echo "📝 Updating JS references in HTML files..."
cd /Users/guyh/eldorado-plan
for file in *.html; do
  if grep -q 'src="js/nav\.js"' "$file"; then
    sed -i 's/src="js\/nav\.js"/src="js\/nav.min.js"/g' "$file"
    echo "  ✅ Updated nav.js reference in $file"
  fi
  if grep -q 'src="js/main\.js"' "$file"; then
    sed -i 's/src="js\/main\.js"/src="js\/main.min.js"/g' "$file"
    echo "  ✅ Updated main.js reference in $file"
  fi
done

echo ""
echo "🗑️  Removing redundant source files..."
cd /Users/guyh/eldorado-plan/js/

# Files to remove (source files where minified versions exist)
REMOVE_FILES=(
  "main.js"           # 112K - Source, main.min.js used instead
  "core-only.min.js"  # 103K - Experimental/unused
  "nav.js"            # 14K - Source, nav.min.js used instead
  "ar-viewer.js"      # 16K - Source, ar-viewer.min.js used instead
  "investor-matcher.js"  # 14K - Source, investor-matcher.min.js used instead
  "3d-viewer.js"      # 13K - Source, 3d-viewer.min.js used instead
  "satellite-viewer.js"  # 12K - Source, satellite-viewer.min.js used instead
  "ai-support.js"     # 12K - Source, ai-support.min.js used instead
  "dashboards.js"     # 20K - Source, dashboards.min.js used instead
)

TOTAL_REMOVED=0
TOTAL_SIZE=0
for file in "${REMOVE_FILES[@]}"; do
  if [ -f "$file" ]; then
    SIZE=$(du -h "$file" | cut -f1)
    rm -f "$file"
    echo "✅ Removed: $file ($SIZE)"
    TOTAL_REMOVED=$((TOTAL_REMOVED + 1))
  fi
done

echo ""
echo "📊 After cleanup:"
ls -lh | tail -n +2 | awk '{print "  " $5 " " $9}'
echo ""
du -sh .
echo ""
echo "✅ Cleanup complete! Removed $TOTAL_REMOVED redundant files (~180K saved)"
