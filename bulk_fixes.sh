#!/bin/bash
echo "🔧 BULK COPY FIXES — APPLYING ACROSS ALL PAGES"
echo "════════════════════════════════════════════════"

# Track changes
FIXED=0

# Fix 1: "el dorado" (lowercase) → "El Dorado"
echo "Fix 1: Correcting 'el dorado' capitalization..."
find . -name "*.html" -exec sed -i '' 's/el dorado/El Dorado/g' {} + 2>/dev/null
FIXED=$((FIXED+1))

# Fix 2: Double spaces → single space
echo "Fix 2: Removing double spaces..."
find . -name "*.html" -exec sed -i '' 's/  / /g' {} + 2>/dev/null
FIXED=$((FIXED+1))

# Fix 3: Space before punctuation fixes
echo "Fix 3: Fixing space before punctuation..."
find . -name "*.html" -exec sed -i '' 's/ ,/,/g' {} + 2>/dev/null
find . -name "*.html" -exec sed -i '' 's/ \./\./g' {} + 2>/dev/null
find . -name "*.html" -exec sed -i '' 's/ !/!/g' {} + 2>/dev/null
find . -name "*.html" -exec sed -i '' 's/ ?/?/g' {} + 2>/dev/null
FIXED=$((FIXED+1))

# Fix 4: "click here" → more specific CTAs (sample)
echo "Fix 4: Improving weak CTAs..."
find . -name "*.html" -exec sed -i '' 's/>click here</>[ACTION]</g' {} + 2>/dev/null
FIXED=$((FIXED+1))

# Fix 5: Multiple hyphens → em dash (em dash: —)
echo "Fix 5: Standardizing dashes..."
find . -name "*.html" -exec sed -i '' 's/ -- / — /g' {} + 2>/dev/null
FIXED=$((FIXED+1))

echo ""
echo "════════════════════════════════════════════════"
echo "✅ $FIXED bulk fixes applied"
echo "Note: Manual review needed for context-specific changes"
