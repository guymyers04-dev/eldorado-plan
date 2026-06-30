#!/bin/bash
echo "✨ IMPROVING 4 'LEARN MORE' CTAs → SPECIFIC ACTIONS"
echo "════════════════════════════════════════════════"

# signals-hub.html: "Learn more" → "Explore Live Signals"
sed -i '' 's/>Learn more about</>Explore</g' signals-hub.html
echo "✅ signals-hub.html — Updated CTA to 'Explore'"

# tax-base-growth-strategy.html: "Learn more" → "View Strategy"
sed -i '' 's/Learn more/Review Strategy/g' tax-base-growth-strategy.html
echo "✅ tax-base-growth-strategy.html — Updated CTA to 'Review Strategy'"

# tourism-visitor-economy.html: "Learn more" → specific to tourism
sed -i '' 's/Learn more/Explore Opportunities/g' tourism-visitor-economy.html
echo "✅ tourism-visitor-economy.html — Updated CTA to 'Explore Opportunities'"

# usd-490-economic-engine.html: "Learn more" → specific to education
sed -i '' 's/Learn more/Discover Economic Impact/g' usd-490-economic-engine.html
echo "✅ usd-490-economic-engine.html — Updated CTA to 'Discover Economic Impact'"

echo ""
echo "════════════════════════════════════════════════"
echo "✅ 4 WEAK CTÁS IMPROVED"
echo "Status: Ready for verification"
