# El Dorado Project Maintenance Action Plan
**Date:** June 30, 2026  
**Status:** In Progress

## Critical Issues & Priority

### 🚨 Issue 1: GA4 Not Configured (21 files missing)
- **Impact:** High - affects analytics tracking for 16% of pages
- **Files affected:** 21 of 128 HTML files
- **Solution:** Add GA4 snippet to header template
- **Effort:** 30 min (1 template + 21 files)
- **Status:** Not Started

### 🚨 Issue 2: Missing js/animations.js
- **Impact:** Medium - may cause JS errors in console
- **Current references:** 3 files (build-transportation.html, economy-industry.html, people-education.html)
- **Solution:** Either create stub file or remove references
- **Effort:** 15 min
- **Status:** Not Started

### ⚠️ Issue 3: CSS File Organization Bloat
- **Impact:** Medium - 872K CSS, multiple redundant versions
- **Files:** styles.original.css (168K), styles.css (149K), styles-combined.min.css (105K), styles-modern.css (36K), utilities.css (19K), + 5 more variants
- **Problem:** Unused CSS styles from merge/iteration process
- **Solution:** Consolidate to 2 files (main.css + utilities), remove originals
- **Effort:** 1.5 hours
- **Status:** Not Started

### ⚠️ Issue 4: JavaScript File Organization
- **Impact:** Low-Medium - 520K JS, some duplication in minified variants
- **Problem:** Multiple minified versions (core-only.min.js, main.min.js, etc.)
- **Solution:** Consolidate to main.js (prod) + main.min.js, remove redundant files
- **Effort:** 1 hour
- **Status:** Not Started

## Execution Plan

### Phase 1: GA4 Configuration (30 min)
1. Add GA4 script tag to all 21 missing files
2. Verify tracking in browser DevTools
3. Update GA4 dashboard

### Phase 2: Fix Missing animations.js (15 min)
1. Create stub animations.js file
2. Remove broken references or link properly
3. Test console for errors

### Phase 3: CSS Consolidation (1.5 hrs)
1. Identify unused CSS rules (use PurgeCSS/Lighthouse)
2. Consolidate styles.css as primary
3. Remove styles.original.css, styles-combined.min.css, styles-modern.css variants
4. Keep utilities.css as secondary
5. Update all HTML file references
6. Test responsive design

### Phase 4: JS Cleanup (1 hr)
1. Identify which minified files are actually used
2. Remove redundant .min.js files
3. Keep main.min.js + individual feature .min.js files
4. Update HTML references
5. Test functionality

## Total Effort: ~3 hours
## Expected Result: 
- ✅ GA4 configured on 100% of pages
- ✅ No broken JS references
- ✅ CSS reduced from 872K to ~200K (75% reduction)
- ✅ JS organized and streamlined
- ✅ Overall project size: 438M → 380M (13% improvement)

---
## Execution Log
