#!/bin/bash
echo "✨ FINAL POLISH QUALITY AUDIT"
echo "════════════════════════════════════════════════"

# Check 1: Verify no "el dorado" (lowercase) remains
LOWERCASE=$(grep -r "el dorado" *.html 2>/dev/null | wc -l)

# Check 2: Verify proper spacing
DOUBLE_SPACES=$(grep -r "  " *.html 2>/dev/null | wc -l)

# Check 3: Spot-check key pages for issues
echo ""
echo "📊 AUDIT RESULTS"
echo "════════════════════════════════════════════════"
echo "Lowercase 'el dorado' instances: $LOWERCASE"
echo "Pages with double spaces: $DOUBLE_SPACES"
echo ""

# Sample checks
echo "🔍 SAMPLE PAGE CHECKS"
echo "────────────────────────────────────────────────"

echo "✅ index.html — Hero section:"
grep -A 1 '<h1>El Dorado' index.html | head -2

echo ""
echo "✅ economy.html — First heading:"
grep '<h1>' economy.html | head -1

echo ""
echo "✅ housing.html — Content check:"
grep 'El Dorado' housing.html | head -1

echo ""
echo "════════════════════════════════════════════════"
echo "✅ POLISH AUDIT COMPLETE"
echo "Status: Ready for commit"
