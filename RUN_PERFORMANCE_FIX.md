# How to Run the Performance Fix Script

## Quick Start (One Command)

```bash
cd /Users/guyh/eldorado-plan
bash fix-performance.sh
```

**Estimated runtime:** 15-30 minutes  
**Files affected:** All 110 HTML files + CSS files  
**Rollback:** `git checkout .` (all changes tracked)

---

## What the Script Does

### Priority 1: Render-Blocking CSS
- Adds critical CSS inline in `<head>` (fast rendering)
- Defers full stylesheet loading (no blocking)
- Expected savings: **2,480 ms (40% improvement)**

### Priority 2: Remove Unused CSS
- Runs PurgeCSS to identify unused rules
- Removes unused styles (143 KiB = 30% smaller)
- CSS file: 5,632 lines → ~3,500 lines

### Priority 3: Optimize Images
- Prepares imagemin scripts
- Compresses JPG/PNG files
- Converts to WebP for modern browsers

### Priority 4: Minify CSS/JS
- Creates minified CSS (styles.min.css)
- Removes whitespace and comments
- Savings: 35+ KiB

### Priority 5: Accessibility Audit
- Scans for missing alt text
- Checks heading hierarchy
- Identifies unlabeled form inputs

---

## Step-by-Step Execution

### 1. Navigate to project
```bash
cd /Users/guyh/eldorado-plan
```

### 2. (Optional) Create git branch for safety
```bash
git checkout -b performance-optimization
```

### 3. Run the script
```bash
bash fix-performance.sh
```

### 4. Watch the output
- Green checkmarks = ✓ successful
- Yellow warnings = ⚠️ issues (usually non-critical)
- Red errors = ❌ stop and fix

### 5. Check results
```bash
# View the report
cat PERFORMANCE_FIX_RESULTS_*.md

# View the log
cat performance-fix.log
```

### 6. Test improvements
```bash
# Start server (if not running)
python3 -m http.server 8000 &

# Run Lighthouse
lighthouse http://localhost:8000/index.html --view

# Expected: Performance 90%+ (was 71%)
```

---

## Expected Output

```
╔════════════════════════════════════════════════════════════════╗
║  El Dorado Performance Optimization Script                    ║
╚════════════════════════════════════════════════════════════════╝

[INFO] Validating environment...
[✓] Environment validation passed
[INFO] Creating backup (safety checkpoint)...
[✓] Backup created in backups-20260629-214500
[INFO] PRIORITY 1: Adding critical CSS and deferring stylesheets...
[INFO] Processing index.html [1/110 - 1%]
[✓] Updated index.html
...
[✓] Priority 1 complete: Critical CSS added to all pages
[INFO] PRIORITY 2: Removing unused CSS rules...
[✓] CSS reduction: 150 KiB saved (29% smaller)
...
[✓] Performance optimization complete!
```

---

## If Something Goes Wrong

### Rollback all changes
```bash
cd /Users/guyh/eldorado-plan
git checkout .

# Or restore from backup
cp -r backups-20260629-214500/* .
```

### Rerun just one priority
```bash
# Edit fix-performance.sh and comment out priorities 2-5
# Then run again with priority_1_add_critical_css only
```

### Check what changed
```bash
git diff --stat
git diff css/styles.css | head -50
```

---

## Performance Improvements Expected

| Metric | Before | After |
|--------|--------|-------|
| **Performance Score** | 71% | 90%+ |
| **LCP** (largest element) | 8.9s | 2.0s |
| **FCP** (first paint) | 3.3s | 1.0s |
| **Page Load** | 5.0s | 1.3s |
| **CSS Size** | 5,632 KB | 3,500 KB |
| **Accessibility** | 92% | 96% |

---

## Next Steps After Running Script

1. **Verify in browser** ← Most important!
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000/index.html
   # Check that page loads quickly and looks correct
   ```

2. **Run Lighthouse**
   ```bash
   lighthouse http://localhost:8000/index.html --view
   ```

3. **Test a few pages**
   - index.html (main hub)
   - economy.html (strategic)
   - signals-hub.html (Phase 10)
   - investor-portal.html (interactive)

4. **Fix any issues** (if visual regressions occur)
   ```bash
   git diff
   # Review changes, fix if needed
   git add .
   git commit -m "Performance optimizations: defer CSS, remove unused styles, minify"
   ```

5. **Ready for launch!**

---

## Troubleshooting

### Script says "Not a git repository"
```bash
cd /Users/guyh/eldorado-plan
git init
git add .
git commit -m "Initial commit"
```

### PurgeCSS installation fails
```bash
# Install manually
npm install -g purgecss

# Or skip this priority and run script again
```

### CSS looks broken after running
```bash
# Rollback
git checkout css/styles.css

# Or restore from backup
cp backups-*/css/styles.original.css css/styles.css
```

### Need to see what changed
```bash
git status
git diff
```

---

## Files Created/Modified

**New Files:**
- `PERFORMANCE_FIX_RESULTS_*.md` — Results report
- `performance-fix.log` — Execution log
- `css/styles.min.css` — Minified CSS (optional)
- `css/styles.original.css` — Backup of original CSS
- `backups-*/*` — Complete backup directory

**Modified Files:**
- All 110 `*.html` files (critical CSS added, stylesheet deferred)
- `css/styles.css` (unused rules removed via PurgeCSS)

---

## Support

**Full documentation:**
- `LIGHTHOUSE_AUDIT_REPORT_2026_06_29.md` — Complete audit findings
- `PERFORMANCE_FIX_PLAN_IMMEDIATE.md` — Detailed execution guide

**Questions?**
- Check the log: `cat performance-fix.log`
- Review results: `cat PERFORMANCE_FIX_RESULTS_*.md`
- See script comments: `head -100 fix-performance.sh`

---

## Launch Timeline

- **Now:** Run fix-performance.sh (~20 min)
- **+20 min:** Test in browser (~10 min)
- **+30 min:** Run Lighthouse (~5 min)
- **+35 min:** Review results + commit (~10 min)
- **+45 min:** READY FOR LAUNCH ✓

**Total: ~45 minutes to production-ready performance!**

---

**Ready to optimize? Run:**
```bash
cd /Users/guyh/eldorado-plan && bash fix-performance.sh
```
