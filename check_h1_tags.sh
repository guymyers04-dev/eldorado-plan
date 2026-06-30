#!/bin/bash
echo "🔍 H1 TAG AUDIT — ALL 124 PAGES"
echo "════════════════════════════════════════════════"

MISSING_H1=0
MULTIPLE_H1=0
TOTAL=0

for html in *.html; do
  ((TOTAL++))
  H1_COUNT=$(grep -c '<h1' "$html")
  
  if [ $H1_COUNT -eq 0 ]; then
    echo "❌ $html — MISSING H1"
    ((MISSING_H1++))
  elif [ $H1_COUNT -gt 1 ]; then
    echo "⚠️  $html — $H1_COUNT H1 tags (should be 1)"
    ((MULTIPLE_H1++))
  fi
done

echo ""
echo "════════════════════════════════════════════════"
echo "Total pages scanned: $TOTAL"
echo "Missing H1: $MISSING_H1"
echo "Multiple H1s: $MULTIPLE_H1"
echo "✅ Status: $([ $MISSING_H1 -eq 0 ] && echo 'ALL GOOD!' || echo 'NEEDS FIXES')"
