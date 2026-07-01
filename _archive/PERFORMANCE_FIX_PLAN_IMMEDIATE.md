# El Dorado Performance Fix — Immediate Action Plan
**Status:** ⏱ 6-9 hours | Launch deadline: July 4-5, 2026

---

## 🎯 Goal
Boost Lighthouse Performance from **71% → 90%+** by addressing render-blocking CSS, unused styles, and image optimization.

---

## Priority 1: Defer Render-Blocking CSS (⏱ 1-2 hours)
**Potential Savings:** 2,480 ms (40% improvement!)  
**Expected Result:** LCP 8.9s → 2.5s, Performance 71% → 82%

### Current Problem
```html
<!-- BLOCKS rendering until 5,632-line CSS loads -->
<link rel="stylesheet" href="css/styles.css" />
```

### Fix Strategy: Async CSS Loading
Implement this in ALL 110 HTML files. Template:

```html
<head>
  <!-- ... existing preconnect, fonts, meta ... -->
  
  <!-- Step 1: Inline CRITICAL CSS (above-the-fold only) -->
  <style>
    /* CRITICAL: Only styles for first 60px of viewport */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { font-size: 16px; }
    body { font-family: 'Inter', sans-serif; background: white; color: #222; }
    
    /* Nav */
    nav { position: fixed; top: 0; left: 0; right: 0; height: 60px; background: white; z-index: 1000; }
    .nav-inner { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; }
    .nav-brand { font-size: 18px; font-weight: 600; text-decoration: none; color: #222; }
    
    /* Hero section basics */
    #hero { min-height: 60vh; display: flex; align-items: center; justify-content: center; }
    
    /* Button */
    a, button { color: #d4a574; text-decoration: none; }
  </style>
  
  <!-- Step 2: Load full CSS asynchronously (doesn't block render) -->
  <link rel="preload" href="css/styles.css" as="style">
  <link rel="stylesheet" href="css/styles.css" media="print" onload="this.media='all'">
  
  <!-- Step 3: Fallback for older browsers (no JavaScript) -->
  <noscript>
    <link rel="stylesheet" href="css/styles.css">
  </noscript>
  
  <!-- Existing Google Fonts, Leaflet, Chart.js, GA ... -->
</head>
```

### Implementation Steps
1. **Create critical CSS file** (`css/critical.css` — 50-100 lines)
   - Copy only nav, hero, button, text styles
   - Inline in `<style>` tag in each HTML head

2. **Update ALL 110 HTML files** (use script below)
   ```bash
   # Option A: Manual (for 5-10 key pages first, then batch rest)
   # Edit index.html, economy.html, signals-hub.html, etc.
   # Copy <style> block from template above
   
   # Option B: Automated (using sed/replace)
   for file in *.html; do
     sed -i '/<link rel="stylesheet" href="css\/styles.css" \/>/i\    <style>\n    /* CRITICAL CSS */\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    html { font-size: 16px; }\n    body { font-family: '\''Inter'\'', sans-serif; background: white; color: #222; }\n    nav { position: fixed; top: 0; left: 0; right: 0; height: 60px; background: white; z-index: 1000; }\n    .nav-inner { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; }\n    .nav-brand { font-size: 18px; font-weight: 600; text-decoration: none; color: #222; }\n    #hero { min-height: 60vh; display: flex; align-items: center; justify-content: center; }\n    a, button { color: #d4a574; text-decoration: none; }\n    </style>' "$file"
   done
   ```

3. **Update CSS link tag:**
   ```html
   <!-- Old -->
   <link rel="stylesheet" href="css/styles.css" />
   
   <!-- New -->
   <link rel="preload" href="css/styles.css" as="style">
   <link rel="stylesheet" href="css/styles.css" media="print" onload="this.media='all'">
   <noscript><link rel="stylesheet" href="css/styles.css"></noscript>
   ```

4. **Test on index.html FIRST**
   ```bash
   lighthouse http://localhost:8000/index.html --view
   # Check: LCP should improve to 3-4s (not 8.9s)
   ```

5. **Rollout to remaining 109 files** (once confirmed working)

### Expected Result
- LCP: 8.9s → 3.5s (60% improvement)
- Performance: 71% → 82%
- Render time: 2,480ms savings confirmed

### Verification
```bash
lighthouse http://localhost:8000/index.html --output json | jq '.audits."largest-contentful-paint".displayValue'
# Should show ~3.5s instead of 8.9s
```

---

## Priority 2: Remove Unused CSS (⏱ 2-3 hours)
**Potential Savings:** 143 KiB (30% of CSS file)  
**Expected Result:** Performance 82% → 88%

### Quick Option: PurgeCSS (Automated)
```bash
# Install
npm install -g purgecss

# Run (removes unused styles)
cd /Users/guyh/eldorado-plan
purgecss --css css/styles.css --content "*.html" "playbooks/*.html" --output css/styles.purged.css

# Rename
mv css/styles.css css/styles.backup.css
mv css/styles.purged.css css/styles.css

# Update HTML (replace 5,632-line file with purged version)
# Test: lighthouse http://localhost:8000/index.html
```

**Expected file size:** 5,632 lines → 3,500 lines (38% smaller)

### Manual Option: CSS Splitting
If PurgeCSS causes issues, split CSS into sections:

**Structure:**
- `css/critical.css` (150 lines) — nav, layout, typography
- `css/components.css` (1,200 lines) — buttons, cards, forms
- `css/layouts.css` (1,500 lines) — grid, sections, hero
- `css/tools.css` (1,200 lines) — maps, charts, 3D viewer
- `css/utilities.css` (300 lines) — margins, padding, display

Load only what's needed per page:
```html
<!-- All pages -->
<link rel="stylesheet" href="css/critical.css" />
<link rel="stylesheet" href="css/components.css" />

<!-- Index/Hub only -->
<link rel="stylesheet" href="css/layouts.css" />

<!-- Maps only (region.html, zone-*.html, etc.) -->
<link rel="stylesheet" href="css/tools.css" />
```

### Testing
```bash
# Before
du -h css/styles.css  # Should be ~150-180 KB

# After PurgeCSS
du -h css/styles.purged.css  # Should be ~90-100 KB (40% smaller)

# Lighthouse
lighthouse http://localhost:8000/index.html
# Check: Performance 82% → 88% (Page Load 4.0s → 2.5s)
```

---

## Priority 3: Image Optimization (⏱ 1-2 hours)
**Potential Savings:** 200-400 KiB  
**Expected Result:** Performance 88% → 92%

### Step 1: Identify Large Images
```bash
find . -name "*.jpg" -o -name "*.png" | xargs du -h | sort -h | tail -20
```

### Step 2: Compress with ImageOptim
```bash
# Install
brew install imageoptim

# Or use online tool: https://imageoptim.com/

# Or command-line
npm install -g imagemin-cli imagemin-jpegoptim imagemin-pngquant

imagemin "*.jpg" --plugin=jpegoptim --plugin=pngquant --out-dir=optimized/
```

### Step 3: Add Modern Format Support (WebP/AVIF)
For images used in multiple places:

```html
<!-- Example: Lake photo -->
<picture>
  <source srcset="images/lake.avif" type="image/avif">
  <source srcset="images/lake.webp" type="image/webp">
  <img src="images/lake.jpg" alt="El Dorado Lake" loading="lazy" width="1200" height="600">
</picture>
```

### Step 4: Lazy-Load Images Below Fold
```html
<img src="image.jpg" alt="..." loading="lazy">
```

### Quick Win: Online Compression
For immediate results:
1. Go to https://tinypng.com/ or https://imagecompressor.com/
2. Upload 5-10 largest images
3. Batch compress all JPG/PNG files
4. Replace in project

---

## Priority 4: Minify CSS/JS (⏱ 30 minutes)
**Savings:** 35 KiB CSS + 5 KiB JS

```bash
# Install minifier
npm install -g csso-cli minify

# Minify CSS
csso css/styles.css --output css/styles.min.css

# Update all HTML files
# OLD: <link rel="stylesheet" href="css/styles.css" />
# NEW: <link rel="stylesheet" href="css/styles.min.css" />

# Test
du -h css/styles.min.css  # Should be ~120-140 KB (30% smaller)
```

---

## Priority 5: Fix Accessibility (⏱ 1-2 hours)
**Target:** 92% → 96%+

### Quick Fixes
1. **Form labels:** Add `<label>` tags to all form inputs (investor-portal.html, comment-generator.html)
2. **Heading hierarchy:** Ensure no skipped levels (H1 → H2 → H3)
3. **Color contrast:** Use contrast checker on critical text
4. **Image alt text:** Add descriptive alts or use `alt=""` for decorative images

```bash
# Check heading hierarchy
grep -n "^<h[1-6]" *.html | grep -E "h1.*h3|h2.*h4"  # Reports skipped levels

# Find missing alt text
grep -E '<img[^>]*src=' *.html | grep -v alt=  # Reports images without alt
```

---

## 📋 Implementation Checklist

### Day 1: Priority 1 (Render-Blocking CSS)
- [ ] Create critical CSS template (50 lines)
- [ ] Add to index.html and test
- [ ] Verify LCP improvement (8.9s → 3.5s)
- [ ] Rollout to economy.html, signals-hub.html (test key pages)
- [ ] Batch-update remaining 107 files
- [ ] Re-run Lighthouse on sample pages

### Day 2: Priority 2 (Unused CSS)
- [ ] Install PurgeCSS
- [ ] Generate purged CSS file
- [ ] Test with all HTML files
- [ ] Verify no visual regressions
- [ ] Check file size (5,632 → 3,500 lines)
- [ ] Re-run Lighthouse

### Day 3: Priorities 3-5
- [ ] Compress images (TinyPNG or ImageOptim)
- [ ] Add WebP/AVIF versions for key images
- [ ] Minify CSS/JS
- [ ] Fix form labels + heading hierarchy
- [ ] Final Lighthouse audit

### Day 4: Validation
- [ ] Run Lighthouse on all 5 sample pages
- [ ] Verify performance ≥90%
- [ ] Mobile test on real device
- [ ] Sign off on launch readiness

---

## 🚀 Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Performance | 71% | 92%+ | ✅ +21 pts |
| LCP | 8.9s | 1.8s | ✅ 80% faster |
| FCP | 3.3s | 1.0s | ✅ 70% faster |
| Page Load | 5.0s | 1.3s | ✅ 74% faster |
| Accessibility | 92% | 96% | ✅ Better |
| Launch Readiness | ⚠️ Needs fixes | ✅ A+ Grade | Ready to go! |

---

## ⚠️ Rollback Plan

If something breaks after changes:
```bash
# Restore from git
git checkout css/styles.css
git checkout *.html

# Or restore from backup
cp css/styles.backup.css css/styles.css
```

---

## 👉 Next Steps

1. **Pick a pilot page:** Start with index.html
2. **Implement Priority 1:** Add critical CSS + defer CSS loading
3. **Test:** Run Lighthouse, verify LCP improves
4. **Rollout:** If successful, apply to all 110 pages
5. **Continue:** Priorities 2-5 in sequence

**Estimated total time:** 6-9 hours spread over 3-4 days  
**Launch readiness:** After all 5 priorities, Lighthouse ≥90%

---

## 📞 Questions?

- **CSS structure unclear?** Check `LIGHTHOUSE_AUDIT_REPORT_2026_06_29.md` for detailed explanations
- **PurgeCSS not working?** Use manual CSS splitting option instead
- **Unsure about rollout?** Start with index.html, test thoroughly, then do batch update
- **Image compression?** Use TinyPNG for quick wins, ImageOptim for batch processing

---

**Prepared by:** Claude Code  
**Date:** June 29, 2026  
**Version:** 1.0  
**Status:** Ready to execute
