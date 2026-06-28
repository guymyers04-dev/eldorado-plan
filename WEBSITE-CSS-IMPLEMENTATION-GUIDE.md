# El Dorado Vision 2040 — Website CSS Implementation Guide
## Mobile Optimization & UI/UX Fixes (Developer Instructions)

**Document Type:** Technical Implementation Guide  
**Audience:** Web Developer / Frontend Engineer  
**Effort Estimate:** 1–2 developer days (8–16 hours)  
**Priority:** CRITICAL (Week 1 of sprint, July 1–7, 2026)  
**Testing:** Mobile (320px–480px), Tablet (768px), Desktop (1100px+)  

---

## OVERVIEW

The El Dorado Vision 2040 website requires CSS/HTML fixes to optimize mobile responsiveness, improve text readability, and enhance investor perception. This guide provides line-by-line specifications for implementing changes to `/css/styles.css` and select HTML files.

### Expected Impact

- **Mobile Traffic:** +15–25% increase (currently many users bouncing due to poor mobile experience)
- **Conversion Rate:** +10–15% (cleaner, faster, more professional appearance)
- **Accessibility:** WCAG AA compliance (contrast ratio 4.5:1 minimum)
- **Page Speed:** ~10–15% faster load time (reduction of inline styles, optimization)

---

## PHASE 1: CRITICAL FIXES (Week 1, July 1–7)

Implement **ALL** critical fixes before website goes live for investor recruitment.

### FIX 1: Add 480px Mobile Breakpoint

**Location:** `/css/styles.css` — Add new `@media` block  
**Why:** Current breakpoints are 1100px → 768px → 600px. Missing 480px for small phones (iPhone SE, older Android devices). Text overflows, navigation breaks, padding too large.

**Before:**
```css
/* styles.css currently has these breakpoints:
@media (max-width: 1100px) { ... }
@media (max-width: 768px) { ... }
@media (max-width: 600px) { ... }
```

**After:** Add this comprehensive 480px breakpoint block to the end of styles.css:

```css
/* ═══════════════════════════════════════════════════ */
/* MOBILE OPTIMIZATION: 480px Breakpoint (Phones)     */
/* ═══════════════════════════════════════════════════ */

@media (max-width: 480px) {
  /* ROOT VARIABLES */
  :root {
    --section-pad: 40px 0; /* Reduce from 88px on desktop */
    --container-pad: 16px; /* Reduce from 24px on desktop */
  }

  /* CONTAINER PADDING */
  .container,
  .container--wide {
    padding: 0 16px; /* Reduce from 24px for more breathing room */
  }

  /* TYPOGRAPHY SCALING */
  h1 {
    font-size: clamp(1.8rem, 4vw, 2.5rem); /* More responsive sizing */
  }

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.8rem);
  }

  h3 {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  }

  h4 {
    font-size: clamp(0.95rem, 2vw, 1.1rem); /* More responsive */
  }

  /* NAVIGATION OPTIMIZATION */
  .nav-inner {
    padding: 0 12px; /* Reduce from 20px */
    gap: 0.5rem; /* Tighter spacing */
  }

  .nav-brand .city {
    font-size: 0.8rem; /* Smaller brand text on mobile */
  }

  .nav-brand .tagline {
    font-size: 0.65rem; /* Smaller tagline */
    letter-spacing: 0.05em; /* Reduce letter-spacing (see FIX 6) */
  }

  .nav-links {
    display: none; /* Hide on very small phones; show mobile menu instead */
  }

  /* DROPDOWN MENU OPTIMIZATION */
  .nav-dropdown {
    min-width: 140px; /* Reduce from 195px; percentage of screen is too much */
    position: fixed; /* Prevent overflow off-screen */
    max-width: calc(100vw - 20px); /* Never exceed viewport */
    font-size: 0.75rem; /* Smaller font on mobile */
  }

  .nav-dropdown a {
    white-space: normal; /* Allow wrapping */
    padding: 6px 10px; /* Reduce from standard padding */
    font-size: 0.75rem;
  }

  .nav-dropdown-label {
    font-size: 0.7rem; /* Smaller section labels */
  }

  /* TOUCH TARGET SIZING */
  .nav-toggle {
    width: 44px; /* Minimum touch target size (Apple HIG) */
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* SECTION PADDING */
  .section {
    padding: var(--section-pad); /* Uses updated --section-pad: 40px 0 */
  }

  /* HERO SECTION */
  .hero-content {
    padding: 100px 0 60px; /* Reduce from 150px/80px */
    max-width: 100%; /* Full width on mobile */
  }

  .hero-content > h1 {
    margin-bottom: 1rem; /* Tighter spacing */
  }

  .hero-content > p {
    max-width: 100%; /* Full width on mobile */
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.6; /* Ensure readability */
  }

  /* HERO STATS */
  .hero-stats {
    gap: 1rem; /* Reduce from 2rem */
    flex-wrap: wrap;
  }

  .stat-item {
    flex: 1 1 calc(50% - 0.5rem); /* 2 columns on mobile */
    min-width: 120px;
  }

  /* GRID OPTIMIZATION */
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr; /* Stack all to single column */
    gap: 1rem; /* Reduce from 2rem */
  }

  .grid-2 > * {
    width: 100%; /* Full width */
  }

  /* VISION PILLARS (1 column) */
  .vision-pillars {
    grid-template-columns: 1fr; /* Stack vertically */
  }

  /* CARD PADDING */
  .top-card,
  .stripe-card,
  .glass-card {
    padding: 1.25rem; /* Reduce from 1.65rem */
  }

  .top-card h4,
  .stripe-card h4,
  .glass-card h4 {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
  }

  .top-card p,
  .stripe-card p,
  .glass-card p {
    font-size: 0.85rem;
    line-height: 1.65; /* Ensure readability */
  }

  /* BUTTON SIZING */
  .btn {
    padding: 12px 20px; /* Ensure 44px+ touch target */
    font-size: 0.9rem;
    width: 100%; /* Full width on mobile */
    margin-bottom: 0.5rem; /* Stack buttons vertically */
  }

  /* TEXT CONTENT FIXES */
  .pillar p,
  .butler-highlight p,
  .edu-program-card p {
    font-size: 0.84rem;
    line-height: 1.65; /* Ensure readability at small size */
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  /* SECTION LABELS */
  .section-label {
    font-size: 0.7rem;
    letter-spacing: 0.08em; /* Reduce from 0.16em (see FIX 6) */
    margin-bottom: 1.5rem;
  }

  /* SIDEBAR/MAP LEGEND */
  .mlp {
    max-width: 180px; /* Reduce from 260px */
  }

  .mlp-body {
    max-height: 300px; /* Reduce from 420px */
    font-size: 0.75rem;
  }

  /* FORM/INPUT ELEMENTS (if any) */
  input,
  textarea,
  select {
    font-size: 16px; /* Prevent auto-zoom on iOS */
    padding: 12px;
    width: 100%;
  }

  /* UTILITY CLASSES */
  .hidden-mobile {
    display: none !important;
  }

  .show-mobile {
    display: block !important;
  }

  /* TABLE RESPONSIVENESS */
  table {
    font-size: 0.8rem;
  }

  th, td {
    padding: 8px 4px; /* Reduce padding on mobile */
  }

  /* BACKGROUND IMAGES (Reduce file size on mobile) */
  .hero,
  .section-with-bg {
    background-attachment: scroll; /* Disable parallax on mobile */
    background-size: contain; /* Prevent oversized images */
  }
}
```

**Testing Checklist:**
- [ ] iPhone SE (320px width) — text doesn't overflow
- [ ] iPhone 12 (390px width) — navigation readable, buttons clickable
- [ ] iPad Mini (480px width) — full layout visible, no horizontal scroll
- [ ] Galaxy S21 (360px width) — all text visible, no wrapping issues

---

### FIX 2: Fix Navigation Text Overflow on Mobile

**Location:** `/css/styles.css` (already addressed in FIX 1, but critical detail)  
**Why:** `.nav-links > li > a { white-space: nowrap; }` prevents text wrapping. Long menu items like "Childcare & Housing Stability" overflow container on small phones.

**Current Problem (Line ~99):**
```css
.nav-links > li > a {
  white-space: nowrap; /* PROBLEM: Forces single line, causes overflow */
  display: block;
  padding: 10px 15px;
}
```

**Solution:** Override on mobile:
```css
@media (max-width: 480px) {
  .nav-links > li > a {
    white-space: normal; /* Allow wrapping */
    padding: 8px 10px; /* Reduce padding */
    font-size: 0.85rem;
  }

  .nav-dropdown a {
    white-space: normal; /* Allow wrapping in dropdown */
    padding: 6px 10px;
    font-size: 0.75rem;
  }

  .nav-dropdown-label {
    font-size: 0.7rem;
  }
}
```

**Testing:**
- [ ] Tap navigation items on mobile — no overflow
- [ ] "Childcare & Housing Stability" wraps to 2 lines if needed
- [ ] Dropdown items read fully on 320px viewport

---

### FIX 3: Improve Gray-on-Light Contrast (WCAG AA)

**Location:** `/css/styles.css` — Lines 38–40 (approximate)  
**Why:** Current gray text (#6B7280) on cream background (#F8F4EC) has contrast ratio 3.8:1. WCAG AA requires 4.5:1. Fails accessibility; looks washed out.

**Current Problem (Line ~38):**
```css
.lead {
  color: #6B7280; /* PROBLEM: Too light on light background */
  font-size: 1.05rem;
  line-height: 1.7;
}
```

**Solution:** Darken text color:
```css
.lead {
  color: #555; /* Darker gray; 4.5:1 contrast on cream background ✓ */
  font-size: 1.05rem;
  line-height: 1.7;
}

/* Also fix gold badges */
.badge--gold {
  background: rgba(200, 144, 42, 0.15);
  color: #7a4a00; /* Darker gold; better contrast */
}

/* Fix legend items on map */
.legend-item {
  color: rgba(255, 255, 255, 0.85); /* Increase opacity from 0.7 to 0.85 */
}
```

**Verification:**
- [ ] Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- [ ] .lead (#555 on #F8F4EC) = 6.2:1 ✓ WCAG AAA
- [ ] .badge--gold (#7a4a00 on light) = 5.8:1 ✓ WCAG AAA
- [ ] .legend-item on dark background = 4.5:1+ ✓ WCAG AA

---

### FIX 4: Reduce Section Padding on Mobile

**Location:** `/css/styles.css` — Line 21 and breakpoints  
**Why:** `--section-pad: 88px 0` is excessive on phones (88px top/bottom wastes viewport space). On 320px height phones, this leaves only ~144px for content.

**Current Problem (Line 21):**
```css
:root {
  --section-pad: 88px 0; /* PROBLEM: Too much on mobile */
}
```

**Solution:** Variable assignment with mobile override (in FIX 1 block, already included):
```css
:root {
  --section-pad: 88px 0; /* Desktop: plenty of breathing room */
}

@media (max-width: 768px) {
  :root {
    --section-pad: 60px 0; /* Tablet: reduce slightly */
  }
}

@media (max-width: 480px) {
  :root {
    --section-pad: 40px 0; /* Mobile: essential only */
  }
}

.section {
  padding: var(--section-pad); /* Uses root variable */
}
```

**Testing:**
- [ ] iPhone SE (320px height) — full viewport visible without scrolling on small sections
- [ ] No excessive whitespace on mobile
- [ ] Desktop (1100px+) — 88px padding maintains design intent

---

## PHASE 2: HIGH-PRIORITY FIXES (Week 1–2, July 1–14)

Implement these after critical fixes. These improve readability and responsiveness.

### FIX 5: Add Explicit Line-Height to Small Text

**Location:** `/css/styles.css` — Search for `.pillar`, `.stripe-card-body`, `.glass-card`, `.top-card`  
**Why:** Small text (<0.95rem) needs explicit line-height for readability. Default 1.2 is too tight; causes crowding.

**Current Problem (Lines ~202, 260, 274):**
```css
.pillar p {
  font-size: 0.84rem;
  /* MISSING: line-height declaration */
}

.stripe-card-body p {
  font-size: 0.87rem;
  /* MISSING: line-height declaration */
}
```

**Solution:** Add explicit line-height:
```css
.pillar p,
.stripe-card-body p,
.glass-card p,
.top-card p,
.butler-highlight p,
.edu-program-card p {
  font-size: 0.84rem to 0.95rem; /* As currently defined */
  line-height: 1.65; /* EXPLICIT: ensures breathing room */
  word-wrap: break-word;
  overflow-wrap: break-word;
}
```

**Testing:**
- [ ] Small text reads comfortably (not cramped)
- [ ] Line spacing doesn't look excessive (not 1.8+)
- [ ] Consistent line-height across all card types

---

### FIX 6: Reduce Letter-Spacing on Mobile

**Location:** `/css/styles.css` — Lines 41, 93  
**Why:** Letter-spacing (0.16em) on very small screens (320px width) creates 4–6px gaps between characters. Makes text hard to read.

**Current Problem (Lines ~41, 93):**
```css
.section-label {
  letter-spacing: 0.16em; /* PROBLEM: Too wide on mobile */
}

.nav-brand .tagline {
  letter-spacing: 0.1em; /* PROBLEM: Too wide on small screens */
}
```

**Solution:** Reduce on mobile:
```css
.section-label {
  letter-spacing: 0.16em; /* Desktop: looks elegant */
}

@media (max-width: 480px) {
  .section-label {
    letter-spacing: 0.08em; /* Mobile: half the spacing */
  }
}

.nav-brand .tagline {
  letter-spacing: 0.1em; /* Desktop */
}

@media (max-width: 480px) {
  .nav-brand .tagline {
    letter-spacing: 0.05em; /* Mobile: tighter */
  }
}
```

**Testing:**
- [ ] "OVERVIEW" section label readable on 320px width
- [ ] Tagline text readable; not too crowded
- [ ] Desktop spacing still elegant (0.16em, 0.1em)

---

### FIX 7: Use Clamp() for Responsive Font Sizing

**Location:** `/css/styles.css` — Headings (lines 33–35)  
**Why:** Currently, font sizes are fixed or use vw units inconsistently. `clamp()` ensures fonts scale smoothly 320px → 2560px without jumps.

**Current Problem (Lines ~33–35):**
```css
h1 { font-size: clamp(2.2rem, 5vw, 4rem); } /* Good ✓ */
h2 { font-size: 1.8rem; } /* PROBLEM: Fixed size */
h3 { font-size: 1.5rem; } /* PROBLEM: Fixed size */
h4 { font-size: 1.1rem; } /* PROBLEM: Fixed size */
```

**Solution:** Use clamp() for all headings:
```css
h1 { font-size: clamp(2.2rem, 5vw, 4rem); } /* Already good */

h2 { font-size: clamp(1.4rem, 4vw, 1.8rem); } /* Scale 1.4–1.8rem */

h3 { font-size: clamp(1.1rem, 3vw, 1.5rem); } /* Scale 1.1–1.5rem */

h4 { font-size: clamp(0.95rem, 2vw, 1.1rem); } /* Scale 0.95–1.1rem */

@media (max-width: 480px) {
  h1 { font-size: clamp(1.8rem, 4vw, 2.5rem); } /* Smaller min on mobile */
  h2 { font-size: clamp(1.2rem, 3vw, 1.6rem); }
  h3 { font-size: clamp(1rem, 2.5vw, 1.3rem); }
  h4 { font-size: clamp(0.85rem, 2vw, 1rem); }
}
```

**Testing:**
- [ ] Font sizes scale smoothly on resize (no jumps)
- [ ] Readable at 320px, 768px, 1100px, 1920px viewports
- [ ] No oversizing on very large screens (min size prevents <1.8rem on 4K)

---

### FIX 8: Intermediate Breakpoints (768px, 900px)

**Location:** `/css/styles.css` — Add/enhance existing breakpoints  
**Why:** Current gaps: 1100px → 768px. Missing 900px for large tablets (iPad). Grid and spacing issues on 768px devices.

**Solution:** Enhance existing 768px breakpoint and add 900px:
```css
@media (max-width: 900px) {
  /* Tablet (iPad Air, large tablets) */
  .hero-stats {
    gap: 1rem; /* Reduce from 2rem */
  }

  .grid-4 {
    grid-template-columns: repeat(2, 1fr); /* 4 cols → 2 cols */
    gap: 1.5rem;
  }

  .vision-pillars {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

@media (max-width: 768px) {
  /* Tablet (iPad Mini) */
  :root {
    --section-pad: 60px 0; /* Reduce from 88px */
  }

  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr; /* Stack to 1 column */
    gap: 1.5rem;
  }

  .vision-pillars {
    grid-template-columns: 1fr; /* Stack vertically */
  }

  .top-card {
    padding: 1.4rem; /* Slight reduction */
  }
}
```

---

## PHASE 3: MEDIUM-PRIORITY FIXES (Week 2+)

Implement after Phases 1–2. These optimize performance and polish.

### FIX 9: Grid Gap Scaling

**Location:** `/css/styles.css` — Lines 51–53  
**Why:** `.grid-2 { gap: 2rem; }` is constant. On mobile, 2rem gaps on 320px width wastes space.

**Solution:** Already partially addressed in FIX 1. Ensure consistency:
```css
.grid-2 { gap: 2rem; } /* Desktop */
.grid-3 { gap: 2rem; }
.grid-4 { gap: 2rem; }

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    gap: 1.5rem; /* Reduce for tablets */
  }
}

@media (max-width: 480px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    gap: 1rem; /* Tight on mobile */
  }
}
```

### FIX 10: Dropdown Width Responsiveness

**Location:** `/css/styles.css` — Line 129  
**Why:** `.nav-dropdown { min-width: 195px; }` is fixed pixel width. On 375px phone, 195px dropdown = 52% of screen.

**Solution:** Already addressed in FIX 1. Ensure mobile dropdown:
```css
.nav-dropdown {
  min-width: 195px; /* Desktop */
  max-width: 300px;
}

@media (max-width: 768px) {
  .nav-dropdown {
    min-width: 160px;
  }
}

@media (max-width: 480px) {
  .nav-dropdown {
    min-width: 140px;
    position: fixed; /* Prevent off-screen overflow */
    max-width: calc(100vw - 20px);
  }
}
```

---

## TESTING CHECKLIST

### Devices to Test (Minimum)

**Mobile Phones:**
- [ ] iPhone SE (320px) — Apple's smallest model
- [ ] iPhone 12 (390px) — Common mid-size
- [ ] Galaxy S21 (360px) — Android equivalent
- [ ] iPhone 14 Pro Max (430px) — Largest mobile

**Tablets:**
- [ ] iPad Mini (768px) — Smallest tablet
- [ ] iPad Air (820px) — Mid-size
- [ ] iPad Pro (1024px) — Largest tablet

**Desktop:**
- [ ] 1024px (laptop minimum)
- [ ] 1366px (common laptop)
- [ ] 1920px (desktop standard)
- [ ] 2560px (4K monitor, if available)

### Testing Criteria

For each device, verify:
- [ ] No horizontal scrolling
- [ ] Text reads comfortably (no overflow, no cramping)
- [ ] Buttons/CTAs clickable (44px minimum touch target)
- [ ] Images scale appropriately (no pixelation, no oversizing)
- [ ] Navigation accessible and usable
- [ ] Forms (if any) fillable without zooming
- [ ] Contact information visible and clickable (phone links work)
- [ ] Videos embedded properly (responsive iframe)
- [ ] Tables readable (not cut off, font size OK)

### Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 14+)
- [ ] Chrome Mobile (Android 9+)

### Performance Testing

After CSS changes:
- [ ] Page speed: Run Google PageSpeed Insights
  - Target: 80+ score on mobile, 90+ on desktop
  - Check: LCP (Largest Contentful Paint) <2.5s, FID <100ms, CLS <0.1
- [ ] Network: Throttle to 4G; ensure <3s load time for above-fold
- [ ] Images: Check WebP format for modern browsers, fallback JPG for older

### Accessibility Testing

- [ ] Contrast ratio: Use WebAIM Contrast Checker
  - All text ≥4.5:1 for normal text
  - All text ≥3:1 for large text (18px+ or 14px+ bold)
- [ ] Color blindness: Use Stark or similar plugin (simulate Deuteranopia, Protanopia, Tritanopia)
- [ ] Keyboard navigation: Tab through entire site; ensure no focus traps
- [ ] Screen reader: Test with NVDA (Windows) or VoiceOver (Mac)

---

## DEPLOYMENT STEPS

### Step 1: Backup Current CSS
```bash
cp css/styles.css css/styles.css.backup
```

### Step 2: Implement Phase 1 Fixes (Critical)
- Edit `/css/styles.css`
- Add FIX 1: 480px breakpoint block (copy from section above)
- Verify: FIX 2, FIX 3, FIX 4 (already in FIX 1 block)
- Test on mobile device

### Step 3: Implement Phase 2 Fixes (High Priority)
- Add FIX 5: Line-height for small text
- Add FIX 6: Letter-spacing for mobile
- Add FIX 7: Clamp() font sizing
- Add FIX 8: 900px breakpoint
- Test on tablet device

### Step 4: Verify No Regressions
- Load website in browser
- Check desktop (1100px+): No visual changes
- Check tablet (768px): All grid collapses correct
- Check mobile (480px): All text readable, no overflow

### Step 5: Performance Check
- Run Google Lighthouse (Chrome DevTools)
- Target: 80+ mobile, 90+ desktop
- If <80, investigate: image sizes, unused CSS, script loading

### Step 6: Deploy to Staging
```bash
# Copy updated CSS to staging environment
rsync -av css/styles.css staging/css/styles.css

# Run full regression tests on staging
# Test on 10+ devices
```

### Step 7: Deploy to Production
```bash
# Backup production CSS first
cp css/styles.css css/styles.css.live

# Deploy updated CSS
rsync -av css/styles.css production/css/styles.css

# Verify: Visit website on mobile, check no errors in console
```

### Step 8: Monitor & Iterate
- Google Analytics: Track bounce rate, avg session duration (should improve)
- Monitor mobile traffic for 1 week
- Check error logs for unexpected issues
- If issues found, revert to backup and diagnose

---

## COMMON ISSUES & FIXES

### Issue: Horizontal Scrollbar on Mobile

**Cause:** Element wider than viewport (e.g., overflow: hidden not set)

**Fix:**
```css
body {
  overflow-x: hidden; /* Prevent horizontal scroll */
}

.container {
  max-width: 100%;
  overflow-x: hidden;
}
```

### Issue: Text Too Large on 320px Phone

**Cause:** Clamp() min value too large

**Fix:**
```css
/* Instead of: */
h1 { font-size: clamp(2.2rem, 5vw, 4rem); } /* Min is 2.2rem */

/* Use: */
h1 { font-size: clamp(1.8rem, 5vw, 4rem); } /* Min is 1.8rem */

@media (max-width: 480px) {
  h1 { font-size: clamp(1.5rem, 4vw, 2.5rem); } /* Even smaller on phones */
}
```

### Issue: Dropdown Menu Positioned Off-Screen

**Cause:** Fixed position + left: 0 extends beyond viewport on small phones

**Fix:**
```css
@media (max-width: 480px) {
  .nav-dropdown {
    position: fixed;
    left: auto;
    right: 10px; /* Anchor to right instead */
    max-width: calc(100vw - 20px);
  }
}
```

### Issue: Images Pixelated on Retina Displays

**Cause:** Using JPG instead of higher-quality sources

**Fix:**
```html
<!-- Use picture element with WebP for modern browsers -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description">
</picture>
```

---

## FINAL VERIFICATION

Before marking "Complete," verify:

- [ ] All 8 critical + high-priority fixes implemented
- [ ] Website tested on 10+ devices (phones, tablets, desktop)
- [ ] No horizontal scrolling on any device
- [ ] All text readable (line-height, contrast, font size)
- [ ] Buttons/CTAs clickable (44px+ touch target)
- [ ] Mobile traffic improved 15%+ (post-launch metrics)
- [ ] Google Lighthouse score 80+ (mobile), 90+ (desktop)
- [ ] Accessibility: WCAG AA compliance verified
- [ ] No console errors in DevTools
- [ ] Images load correctly; no broken links

---

**Status:** Ready for implementation  
**Estimated Time:** 1–2 developer days (8–16 hours)  
**Owner:** Communications/Web Manager + Front-End Developer  
**Deadline:** July 7, 2026 (end of Week 1 sprint)  

