#!/bin/bash
echo "🎯 CTA AUDIT — IDENTIFYING WEAK CALLS-TO-ACTION"
echo "════════════════════════════════════════════════"

WEAK_CTAS=0

echo ""
echo "WEAK CTA PATTERNS (to improve):"
echo "────────────────────────────────────────────────"

# Find common weak CTA patterns
echo ""
echo "Pattern 1: 'Click here' (vague)"
grep -r "click here" *.html 2>/dev/null | wc -l

echo "Pattern 2: 'Learn more' (vague)"
grep -r "Learn more" *.html 2>/dev/null | wc -l

echo "Pattern 3: '>Read' (vague)"
grep -r '>Read' *.html 2>/dev/null | wc -l

echo "Pattern 4: '>Get' (could be specific)"
grep -r '>Get' *.html 2>/dev/null | head -5

echo ""
echo "✅ STRONG CTA EXAMPLES (already present):"
echo "────────────────────────────────────────────────"
echo ""
echo "Found in career-pathways.html:"
grep -o '>.*<' career-pathways.html 2>/dev/null | grep -i 'explore\|discover\|calculate\|view' | head -3

echo ""
echo "Found in development-finder.html:"
grep -o '>.*<' development-finder.html 2>/dev/null | grep -i 'explore\|property\|calculator' | head -3

echo ""
echo "════════════════════════════════════════════════"
echo "✅ CTA AUDIT COMPLETE"
