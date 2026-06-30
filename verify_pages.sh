#!/bin/bash

echo "=========================================="
echo "VERIFYING ALL PAGES ARE ACCESSIBLE"
echo "=========================================="
echo ""

PAGES=(
  "index.html"
  "economy.html"
  "place.html"
  "finance.html"
  "commission-locator.html"
)

PASS=0
FAIL=0

for page in "${PAGES[@]}"; do
  echo -n "Testing $page ... "
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:8000/$page")
  
  if [ "$STATUS" = "200" ]; then
    echo "✅ PASS (HTTP 200)"
    ((PASS++))
  else
    echo "❌ FAIL (HTTP $STATUS)"
    ((FAIL++))
  fi
done

echo ""
echo "=========================================="
echo "RESULTS: $PASS PASS, $FAIL FAIL"
echo "=========================================="
echo ""

if [ $FAIL -eq 0 ]; then
  echo "✅ ALL PAGES ACCESSIBLE!"
  echo ""
  echo "🌐 NEXT STEPS:"
  echo "1. Open Chrome"
  echo "2. Visit: http://localhost:8000"
  echo "3. Open DevTools: Cmd+Option+J"
  echo "4. Test each page from checklist"
  echo "5. Click navigation links"
  echo "6. Test mobile (Cmd+Shift+M)"
  echo ""
  echo "Start with: http://localhost:8000/index.html"
else
  echo "❌ SOME PAGES NOT ACCESSIBLE"
  echo "Check server logs"
fi
