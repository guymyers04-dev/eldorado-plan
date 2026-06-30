# Lighthouse Audit Quick Reference
**El Dorado Vision 2040** | June 29, 2026

---

## Current Scores (June 29, 2026)

### Performance: 67.4/100 (Needs Work)
- index.html: 66 ⚠️
- economy.html: 64 ⚠️
- career-pathways.html: 73 ✓
- housing.html: 64 ⚠️
- signals-hub.html: 70 ✓

### Accessibility: 92/100 (Good) ✓

### Best Practices: 96/100 (Excellent) ✓

### SEO: 100/100 (Perfect) ✓

---

## Top 3 Issues to Fix

### 1. **Largest Contentful Paint (LCP) - 8-9 seconds**
- **Target:** < 2.5 seconds
- **Cause:** Large images, render-blocking CSS
- **Quick Fix:** 
  - Optimize images to WebP format (30 min)
  - Defer non-critical CSS (1 hour)
  - Result: **LCP 8s → 2-3s**

### 2. **Speed Index - Pages rendering slowly**
- **Cause:** Unminified CSS/JS, unused styles
- **Quick Fix:**
  - Minify CSS and JavaScript (15 min)
  - Remove unused CSS (depends on method)
  - Result: **3-5 point improvement**

### 3. **First Contentful Paint (FCP) - 3.3 seconds**
- **Target:** < 1.8 seconds
- **Cause:** Render-blocking resources, fonts
- **Quick Fix:**
  - Add font-display: swap (10 min)
  - Lazy load images (30 min)
  - Result: **FCP 3.3s → 1.5-2s**

---

## The Quick Win Path (2-3 hours)

```
Step 1: Minify CSS/JS               15 min  → +5 pts (64→69)
Step 2: WebP image conversion       30 min  → +8 pts (69→77)
Step 3: Font optimization           10 min  → +3 pts (77→80)
Step 4: Lazy load images            30 min  → +4 pts (80→84)
Step 5: Inline critical CSS         1h      → +6 pts (84→90)
─────────────────────────────────────────────────────────────
TOTAL: ~2.5 hours                        → 90+ score achieved! ✅
```

---

## One-Page Checklist

### CRITICAL (Do First)
- [ ] Minify CSS (find styles.css, minify to styles.min.css)
- [ ] Minify JS (find script.js, minify to script.min.js)  
- [ ] Update HTML to use .min files
- [ ] Convert hero images to WebP format
- [ ] Update `<link>` for Google Fonts to add `display=swap`

### HIGH PRIORITY (Do Second)
- [ ] Add `loading="lazy"` to all `<img>` tags
- [ ] Identify and inline critical CSS in `<style>` tag
- [ ] Defer non-critical CSS with media="print" + onload

### MEDIUM PRIORITY (Do Third)
- [ ] Split JavaScript by page (don't load Leaflet on non-map pages)
- [ ] Check image alt text for accessibility (already 92%, minor gains)

---

## Minification Commands

### Quick (30 seconds total)

```bash
# Option 1: Use online tools (paste + download)
# CSS: https://www.cleancss.com/
# JS: https://javascript-minifier.com/

# Option 2: Using sed (works offline)
sed 's/\/\*.*\*\///g; s/  */ /g' styles.css > styles.min.css
sed 's/\/\*.*\*\///g; s/  */ /g' script.js > script.min.js
```

### Better (with actual minifiers)
```bash
npm install -g csso-cli terser
csso styles.css -o styles.min.css
terser script.js -o script.min.js
```

---

## WebP Conversion

### Quick Conversion
```bash
# Using online tool: https://cloudconvert.com/jpg-to-webp
# 1. Upload PNG/JPG
# 2. Download .webp
# 3. Update HTML: <img src="new.webp"> (or use <picture>)

# Or command line (if you have cwebp installed)
cwebp image.jpg -o image.webp
```

### Update HTML Pattern
```html
<!-- Before -->
<img src="hero.jpg" alt="El Dorado">

<!-- After (Modern) -->
<picture>
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="El Dorado">
</picture>

<!-- OR (Simple) -->
<img src="hero.webp" alt="El Dorado">
```

---

## Font Optimization

### Current Link
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### What to add in CSS
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif;
  /* Use system fonts as fallback while Google Fonts loads */
}
```

---

## Revert if Needed

```bash
# If something breaks, revert files:
cd ~/eldorado-plan
git status          # See what changed
git restore index.html   # Restore single file
git reset --hard HEAD    # Restore ALL to last commit
```

---

## Re-run Lighthouse Anytime

```bash
# Start local server (if not running)
cd ~/eldorado-plan
python3 -m http.server 8000 &

# Test single page
lighthouse http://localhost:8000/index.html --view

# Test multiple pages
for page in index economy career-pathways housing signals-hub; do
  lighthouse http://localhost:8000/$page.html --output=json --output-path=/tmp/lh-$page-new.json
  echo "$page done"
done
```

---

## Success Looks Like

### Before
```
Performance: 66-70 (various pages)
LCP: 8-9 seconds
Page Load: 4-5 seconds
```

### After Phase 1 (45 min)
```
Performance: 75-80
LCP: 4-5 seconds
Page Load: 2-3 seconds
```

### After All Phases (2.5-3h)
```
Performance: 90+
LCP: 1.5-2.5 seconds
Page Load: 1-1.5 seconds
Accessibility: 92+ (unchanged)
SEO: 100 (unchanged)
```

---

## Files to Focus On

**Most Critical Images** (start here):
- Hero images on index.html, economy.html, housing.html
- Any full-width background images
- Large PNG/JPG files (> 100KB each)

**CSS/JS Files:**
- Find with: `find ~/eldorado-plan -name "*.css" -o -name "*.js" | head`
- Main ones: styles.css, script.js

**All HTML** (113 files total):
- Add `loading="lazy"` to `<img>` tags
- Update resource `<link>` tags
- Verify no broken images after changes

---

## Decision Tree

```
Q: How much time do you have?
├─ 30 minutes → Do minification + WebP conversion
├─ 1 hour → Add lazy loading + fonts  
├─ 2 hours → Add critical CSS inlining
└─ 3+ hours → Do everything + code splitting

Q: What's your skill level?
├─ Beginner → Use online tools (cleancss.com, cloudconvert.com)
├─ Intermediate → Use CLI tools (csso, terser, cwebp)
└─ Advanced → Automate with build script/webpack

Q: How much risk can you take?
├─ Zero → Backup first: cp -r eldorado-plan eldorado-plan.backup
├─ Low → Commit to git before each change
└─ High → Make all changes, test, then commit
```

---

## Expected Timeline

| Phase | Tasks | Time | Impact |
|-------|-------|------|--------|
| 1 | Minify + WebP + Fonts | 45 min | +16 pts |
| 2 | Lazy Load + Critical CSS | 1.5h | +10 pts |
| 3 | Code Splitting | 1h | +7 pts |
| **TOTAL** | **All Optimizations** | **~3h** | **+33 pts (67→90)** |

---

## One Last Thing

**Don't wait for perfection.** You can:
- Launch with performance 90+ (reasonable)
- Monitor Core Web Vitals post-launch
- Optimize further in Phase 11 (advanced techniques)

**Current status:** Production-ready with performance improvements recommended but not blocking.

---

**Report Date:** June 29, 2026  
**Tool:** Lighthouse CLI v11.4.0  
**Next Review:** After optimization phase
