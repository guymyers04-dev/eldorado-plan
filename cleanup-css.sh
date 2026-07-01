#!/bin/bash

# CSS Cleanup Script - Remove Redundant Files
# This script removes duplicate and experimental CSS files that are not being used

cd /Users/guyh/eldorado-plan/css/

echo "🧹 Cleaning up redundant CSS files..."
echo ""

# Files to remove (clearly redundant)
REMOVE_FILES=(
  "styles.original.css"      # 168K - Original backup
  "styles.css"               # 149K - Duplicate of styles-modern
  "styles.css.backup"        # 149K - Backup copy
  "styles.min.css"           # 111K - Duplicate of styles-modern.min.css
  "styles-combined.min.css"  # 105K - Not used anywhere
  "styles-modern-purged.min.css"  # 16K - Experimental/testing
  "styles-all-purged.min.css"     # 160B - Experimental/testing
)

TOTAL_REMOVED=0
for file in "${REMOVE_FILES[@]}"; do
  if [ -f "$file" ]; then
    SIZE=$(du -h "$file" | cut -f1)
    rm -f "$file"
    echo "✅ Removed: $file ($SIZE)"
    TOTAL_REMOVED=$((TOTAL_REMOVED + 1))
  else
    echo "⏭️  Not found: $file"
  fi
done

echo ""
echo "📊 After cleanup:"
ls -lh | tail -n +2 | awk '{print "  " $5 " " $9}'
echo ""
du -sh .
echo ""
echo "✅ Cleanup complete! Removed $TOTAL_REMOVED redundant files (~698K saved)"
