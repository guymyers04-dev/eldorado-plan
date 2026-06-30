# Performance Optimization Action Plan
**El Dorado Vision 2040**  
**Generated:** June 29, 2026  
**Target:** Improve Lighthouse Performance from 67.4 → 90+ in 2-3 hours

---

## Quick Wins Summary

| Task | Effort | Impact | Priority |
|------|--------|--------|----------|
| Image WebP conversion | 30min | +8 pts | 🔴 Critical |
| Minify CSS/JS | 15min | +5 pts | 🔴 Critical |
| Font optimization | 10min | +3 pts | 🔴 Critical |
| Lazy load images | 30min | +4 pts | 🟠 High |
| Critical CSS inline | 1h | +6 pts | 🟠 High |
| Code splitting JS | 1.5h | +7 pts | 🟡 Medium |
| **TOTAL** | **~3.5h** | **+33 pts** | **Target: 90+** |

---

## Phase 1: Critical Fixes (45 minutes) 🚀

### 1.1 Image Optimization to WebP (30 min)
**Impact:** +8 Performance points | Reduce LCP by ~2-3 seconds

**Step-by-step:**
```bash
cd ~/eldorado-plan

# 1. Install WebP converter
brew install webp  # or: npm install -g imagemin-cli imagemin-webp

# 2. Find all images
find . -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | head -20

# 3. Convert hero/critical images to WebP
for img in $(find . -maxdepth 1 -name "*.jpg" -o -name "*.png"); do
  cwebp "$img" -o "${img%.*}.webp"
done

# 4. Update HTML to use WebP with fallback
# Find files with <img src="..."> tags and update to:
#  <picture>
#    <source srcset="image.webp" type="image/webp">
#    <img src="image.jpg" alt="...">
#  </picture>
```

**Which images to prioritize:**
- Hero images (top 3KB each)
- Above-fold images on index, economy, housing pages
- Chart/dashboard images

**Tools:**
- `cwebp` (command line)
- ImageMagick: `convert image.jpg -quality 85 image.webp`
- Online: https://cloudconvert.com/jpg-to-webp

---

### 1.2 Minify CSS and JavaScript (15 min)
**Impact:** +5 Performance points | Reduce page load by ~200KB

**Find existing CSS/JS files:**
```bash
find ~/eldorado-plan -name "*.css" -o -name "*.js" | grep -v node_modules | head -20
```

**Minify CSS:**
```bash
# Option A: Using csso (install first)
npm install -g csso-cli
csso styles.css -o styles.min.css

# Option B: Using sed/awk (quick and dirty)
sed 's/\/\*.*\*\///g; s/  */ /g; s/: /:/g; s/; /;/g' styles.css > styles.min.css

# Option C: Online tool
# https://www.cleancss.com/ (paste CSS, download minified)
```

**Minify JavaScript:**
```bash
# Option A: Using terser
npm install -g terser
terser script.js -o script.min.js

# Option B: Online
# https://javascript-minifier.com/
```

**Update HTML references:**
```html
<!-- Replace all .css with .min.css -->
<!-- Replace all .js with .min.js -->

<!-- Example -->
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

---

### 1.3 Font Display Swap (10 min)
**Impact:** +3 Performance points | Reduce font load blocking

**Find Google Fonts link:**
```bash
grep -n "fonts.googleapis.com" ~/eldorado-plan/index.html
```

**Update font link:**
```html
<!-- BEFORE -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- AFTER - Add display=swap to force fallback font to show immediately -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Alternative: Use local font imports to reduce network calls -->
@font-face {
  font-family: 'Playfair Display';
  font-display: swap;  /* <- This is the key line */
  src: url('playfair-display-400.woff2') format('woff2');
}
```

---

## Phase 2: High-Impact Optimizations (1.5 hours) ⚙️

### 2.1 Lazy Load Images (30 min)
**Impact:** +4 Performance points | Defer below-fold image loading

**Find all images:**
```bash
grep -n "<img" ~/eldorado-plan/*.html | head -20
```

**Update pattern:**
```html
<!-- BEFORE -->
<img src="image.jpg" alt="Description">

<!-- AFTER -->
<img src="image.jpg" loading="lazy" alt="Description">
```

**Batch update for all HTML files:**
```bash
# Backup first
cp -r ~/eldorado-plan ~/eldorado-plan.backup-lazy

# Update all HTML files
find ~/eldorado-plan -name "*.html" -exec sed -i '' 's/<img \([^>]*\)>/<img \1 loading="lazy">/g' {} \;

# Verify it worked
grep -n 'loading="lazy"' ~/eldorado-plan/index.html | wc -l
```

---

### 2.2 Inline Critical CSS (1h)
**Impact:** +6 Performance points | Unblock initial render

**Identify critical CSS:**
```html
<!-- Critical CSS = styles needed for above-the-fold content only -->
<!-- This includes: nav, hero section, heading, first paragraphs -->

<!-- Inside <head> tag, create inline <style> with critical CSS:
     - Background colors
     - Typography (font-family, font-size)
     - Layout (flex, grid for nav/hero)
     - Colors
     
     Estimated: 100-200 lines
-->
```

**Example structure:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>...</title>
  
  <!-- CRITICAL CSS (inlined) - unblocks initial render -->
  <style>
    * { margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif; }
    nav { background: #000; color: #fff; padding: 1rem; }
    .hero { background: linear-gradient(...); padding: 4rem; }
    h1 { font-family: "Playfair Display"; font-size: 2.5rem; color: #333; }
    /* ... ~100 more lines of critical styles ... */
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="styles.min.css" as="style">
  <link rel="stylesheet" href="styles.min.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="styles.min.css"></noscript>
</head>
```

**Tools to identify critical CSS:**
```bash
# Option 1: PurgeCSS to auto-extract critical rules
npm install -g purgecss
purgecss --css styles.css --content "index.html" --output critical.css

# Option 2: Manual inspection - open DevTools > Coverage tab
# Load page, see which CSS rules are used
```

---

## Phase 3: Medium-Term Improvements (1.5 hours) 🔧

### 3.1 JavaScript Code Splitting (1.5h)
**Impact:** +7 Performance points | Load only needed JS per page

**Identify JavaScript:**
```bash
grep -n "<script" ~/eldorado-plan/index.html
```

**Current structure:**
```html
<script src="leaflet.js"></script>        <!-- Only used on map pages -->
<script src="chart.js"></script>          <!-- Only used on dashboard pages -->
<script src="three.js"></script>          <!-- Only used on 3D pages -->
<script src="script.js"></script>         <!-- Loaded everywhere -->
```

**Optimize:**
```html
<!-- On index.html (no maps, no charts, no 3D) -->
<script src="script.min.js"></script>
<!-- Don't load leaflet, chart, three -->

<!-- On signals-hub.html (has charts) -->
<script src="chart.min.js"></script>
<script src="dashboard.min.js"></script>

<!-- On ar-preview.html (has 3D viewer) -->
<script src="three.min.js"></script>
<script src="3d-viewer.min.js"></script>

<!-- On place-*.html (has maps) -->
<script src="leaflet.min.js"></script>
<script src="map-viewer.min.js"></script>
```

**Implementation:**
```bash
# 1. Identify which pages use which features
grep -l "leaflet" ~/eldorado-plan/*.html
grep -l "Chart" ~/eldorado-plan/*.html
grep -l "Three" ~/eldorado-plan/*.html

# 2. Create separate minified JS files
# e.g., dashboard.min.js, map-viewer.min.js, 3d-viewer.min.js

# 3. Update HTML to load only needed scripts per page
# Use this template:
```

**Template for pages:**
```html
<!-- Simple content pages (index, about, reference) -->
<script src="script.min.js"></script>

<!-- Pages with data/charts (signals-hub, dashboards) -->
<script src="chart.min.js"></script>
<script src="dashboard.min.js"></script>

<!-- Pages with maps (place details, zone maps) -->
<script src="leaflet.min.js"></script>
<script src="map-viewer.min.js"></script>

<!-- Pages with 3D (ar-preview, 3d-preview) -->
<script src="three.min.js"></script>
<script src="3d-viewer.min.js"></script>
```

---

## Implementation Order (Recommended)

### **Day 1 (Phase 1 - 45 min):**
1. Minify CSS/JS (15 min) ← **DO THIS FIRST** (lowest effort, immediate impact)
2. Font optimization (10 min)
3. Image WebP conversion (30 min)
   
**Expected improvement:** 64 → 74 points on slow pages

### **Day 2 (Phase 2 - 1.5h):**
4. Lazy load all images (30 min)
5. Inline critical CSS (1h)

**Expected improvement:** 74 → 82-85 points

### **Day 3 (Phase 3 - 1.5h):**
6. Code split JavaScript (1.5h)

**Expected improvement:** 82 → 90+ points

### **Total Time:** 3.5-4 hours for **67 → 90+ point improvement**

---

## Testing & Validation

### After each phase, re-run Lighthouse:
```bash
# Run on all test pages
for page in index economy career-pathways housing signals-hub; do
  echo "Testing $page.html..."
  lighthouse http://localhost:8000/$page.html --output=json --output-path=/tmp/lh-$page-after.json
done

# Extract and compare scores
python3 << 'PYEOF'
import json
pages = ['index', 'economy', 'career-pathways', 'housing', 'signals-hub']
for page in pages:
    with open(f'/tmp/lh-{page}-after.json') as f:
        data = json.load(f)
    perf = int(data['categories']['performance']['score'] * 100)
    print(f"{page}: {perf}/100")
PYEOF
```

### Success Criteria:
- ✅ All pages ≥ 80 Performance score (target: 90+)
- ✅ LCP < 3.0 seconds (target: < 2.5s)
- ✅ Accessibility remains ≥ 92%
- ✅ SEO remains 100%

---

## Expected Results

### Before Optimization
```
Average Performance: 67.4/100
LCP: 8-9 seconds
Page Load: 4-5 seconds
```

### After Phase 1 (Minify + WebP + Fonts)
```
Estimated Performance: 75-80/100
LCP: 4-5 seconds
Page Load: 2-3 seconds
```

### After Phase 2 (+ Lazy Load + Critical CSS)
```
Estimated Performance: 82-87/100
LCP: 2-3 seconds
Page Load: 1.5-2 seconds
```

### After Phase 3 (+ Code Splitting)
```
Estimated Performance: 90-95/100
LCP: 1.5-2.0 seconds
Page Load: 1.0-1.5 seconds
```

---

## Files to Modify

### CSS Files:
```
~/eldorado-plan/styles.css (main stylesheet)
~/eldorado-plan/[any other .css files]
```

### JavaScript Files:
```
~/eldorado-plan/script.js (main script)
~/eldorado-plan/[any other .js files]
```

### HTML Files (all 113):
```
~/eldorado-plan/*.html
- Update <img> tags (add loading="lazy")
- Update <link rel="stylesheet"> (defer non-critical)
- Update <script> tags (load only needed files)
```

### Image Files:
```
~/eldorado-plan/*.jpg
~/eldorado-plan/*.png
~/eldorado-plan/[any image subdirectories]
→ Convert to .webp format
```

---

## Tools Needed

```bash
# Install if not already available:
brew install webp            # For WebP conversion
npm install -g csso-cli      # For CSS minification
npm install -g terser        # For JS minification
npm install -g imagemin-cli  # For image optimization

# Or use online alternatives:
- https://cloudconvert.com/ (image conversion)
- https://www.cleancss.com/ (CSS minification)
- https://javascript-minifier.com/ (JS minification)
```

---

## Rollback Plan

If something breaks:
```bash
# Restore from backup
cp -r ~/eldorado-plan.backup-lazy ~/eldorado-plan

# Or git restore
cd ~/eldorado-plan
git status
git restore [filename]  # Restore specific file
git reset --hard HEAD   # Restore all to last commit
```

---

## Next Steps

1. **Backup** current working directory
2. **Execute Phase 1** (45 min) - quick wins
3. **Test & measure** - verify improvement
4. **Execute Phase 2** (1.5h) - high impact
5. **Execute Phase 3** (1.5h) - reach 90+
6. **Final QA** - browser testing, mobile, edge cases
7. **Commit changes** to git with performance notes

---

## Questions?

Review these resources while implementing:
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path)

---

**Prepared by:** Claude Code Performance Auditor  
**Ready to implement:** ✅ Yes  
**Estimated ROI:** **90+ Performance Score in 3-4 hours**
