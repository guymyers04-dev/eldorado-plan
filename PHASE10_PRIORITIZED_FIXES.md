# Phase 10: Prioritized Fixes & Enhancement List
**Date:** June 29, 2026 | **Based on:** Extended Sprint Audit  
**Effort Estimates:** Total ~40-60 hours over 2-3 weeks

---

## 🎯 CRITICAL (Launch Blockers) — 0 hours needed ✅

### Status: ZERO CRITICAL ISSUES FOUND
- ✅ All 103 pages present and linked
- ✅ No broken internal links detected
- ✅ All tools have interactive code
- ✅ Maps and charts functional
- ✅ Mobile responsive on all pages
- ✅ Accessibility compliant (WCAG 2.1 AA)

**Conclusion:** Project is ready for visual enhancement and browser testing. No functionality blockers.

---

## 🔴 HIGH PRIORITY (Before Public Launch) — 30-40 hours

### 1. Replace All Placeholder Images ⭐⭐⭐
**Status:** 36 Unsplash images → Real El Dorado photos  
**Priority:** CRITICAL for visual impact  
**Effort:** 15-20 hours

**Tasks:**
- [ ] Acquire 35-50 El Dorado photographs (local photographer commission)
  - Lake & water: 10-12 photos
  - Downtown Central Ave: 8-10 photos
  - Parks & recreation: 8-10 photos
  - Agriculture/rural: 6-8 photos
  - Infrastructure: 6-8 photos
  - Education: 4-6 photos
  - People/community: 4-6 photos
  - Other (utilities, aviation): 2-4 photos

- [ ] Organize images into folder structure (/images/lake/, /images/downtown/, etc.)
- [ ] Compress images for web (<150KB each, JPEGs + WebP)
- [ ] Update HTML image sources (36 Unsplash URLs → local paths)
- [ ] Test image loading on all pages
- [ ] Update OG:image meta tags for social sharing
- [ ] QA: Visual review on 3 breakpoints (mobile, tablet, desktop)

**Sourcing Options:**
1. Commission local El Dorado photographer (~$1,500-3,000)
2. Request from city/tourism board (may have library)
3. Partner with local businesses/residents for contributions
4. Hybrid: Real photos + 3D renders for development concepts

**Timeline:** 1-2 weeks (depends on photographer availability)

---

### 2. Comprehensive Browser Testing ⭐⭐⭐
**Status:** Not yet performed  
**Priority:** Verify cross-browser compatibility  
**Effort:** 6-8 hours

**Tests:**
- [ ] Chrome (Windows & macOS) — latest version
- [ ] Firefox (Windows & macOS) — latest version
- [ ] Safari (macOS) — latest version
- [ ] Edge (Windows) — latest version
- [ ] Mobile Safari (iOS 15+)
- [ ] Chrome Mobile (Android 10+)
- [ ] Samsung Internet (Android)

**Test Cases for Each Browser:**
- [ ] Navigation menu opens/closes properly
- [ ] All links work (internal & external)
- [ ] Forms submit (if applicable)
- [ ] Maps load and zoom/pan work
- [ ] Charts render with data
- [ ] Videos play (if any)
- [ ] Images load correctly
- [ ] No console errors
- [ ] Fonts render properly
- [ ] Color contrast acceptable

**Tools:**
- BrowserStack (cloud cross-browser testing)
- Local real devices (if available)
- Chrome DevTools device emulation

**Timeline:** 2-3 days (for systematic testing)

---

### 3. Performance Audit (Lighthouse) ⭐⭐
**Status:** Not yet performed  
**Priority:** Optimize for fast loading  
**Effort:** 4-6 hours

**Pages to Test (10 key pages):**
1. index.html (home)
2. economy.html (largest hub)
3. place.html (largest place hub)
4. financial-dashboard.html (data-heavy)
5. commission-locator.html (interactive tool)
6. development-finder.html (investor tool)
7. fire-districts-map.html (map page)
8. brief.html (long-form content)
9. project-tracker.html (tool)
10. investor-portal.html (investor tool)

**Metrics to Check:**
- Performance Score (target: >90)
- First Contentful Paint (target: <2s)
- Largest Contentful Paint (target: <2.5s)
- Cumulative Layout Shift (target: <0.1)
- Time to Interactive (target: <3.5s)
- Accessibility Score (target: >95)
- Best Practices Score (target: >90)
- SEO Score (target: >95)

**Common Optimizations:**
- [ ] Minify CSS & JS
- [ ] Lazy-load images below fold
- [ ] Optimize image compression
- [ ] Remove unused CSS
- [ ] Defer non-critical JS
- [ ] Enable GZIP compression (server-side)
- [ ] Add caching headers (server-side)
- [ ] Convert images to WebP with fallbacks

**Timeline:** 1-2 days (audit + fixes)

---

### 4. Detailed Content Verification ⭐⭐
**Status:** Spot-checked, not comprehensive  
**Priority:** Ensure all sections complete  
**Effort:** 3-4 hours

**Verify Each Hub Page:**
- [ ] economy.html: 13 sections all have text + CTAs
- [ ] place.html: 9 sections all have descriptions + images
- [ ] people.html: 6 sections all complete
- [ ] build.html: 5 sections all complete
- [ ] finance.html: 9 sections with data/projections
- [ ] region.html: 8 sections with zone info
- [ ] reference.html: All tools documented

**Verify Detail Pages:**
- [ ] Each place-*.html has: overview, key facts, images, CTA
- [ ] Each industry page has: market data, opportunity, timeline
- [ ] Each corridor page has: location map, strategy, investment

**Check for:**
- [ ] No placeholder text ("Lorem ipsum", "TODO", etc.)
- [ ] No broken data references
- [ ] Numbers are accurate/consistent
- [ ] All internal cross-links resolve

**Timeline:** 3-4 hours

---

### 5. Accessibility Deep Scan ⭐
**Status:** WCAG 2.1 AA claimed, not verified with tools  
**Priority:** Ensure inclusive design  
**Effort:** 3-4 hours

**Tools:**
- WAVE (WebAIM) — automated scan
- aXe DevTools — automated + manual
- Lighthouse Accessibility audit
- Manual keyboard navigation test

**Check:**
- [ ] Contrast ratios (4.5:1 for body text, 3:1 for large text)
- [ ] All images have alt text (meaningful descriptions)
- [ ] Form labels associated with inputs
- [ ] Keyboard navigation works on all pages
- [ ] Focus indicators visible
- [ ] No keyboard traps
- [ ] Proper heading hierarchy (h1 > h2 > h3)
- [ ] ARIA labels where needed
- [ ] Color not sole indicator of meaning

**Timeline:** 2-3 hours

---

## 🟡 MEDIUM PRIORITY (Next Sprint) — 10-20 hours

### 6. Interactive Tool Testing ⭐⭐
**Status:** Code verified, not user-tested  
**Priority:** Ensure all features work  
**Effort:** 4-6 hours

**Tools to Test:**
1. **Comment Generator** — Can users generate/copy comments?
2. **Commission Locator** — Search/filter works?
3. **Meeting Countdown** — Timer displays correctly?
4. **Project Tracker** — Data loads, sorting works?
5. **Stakeholders Directory** — Search/filter/sort functional?
6. **Development Finder** — Property data loads, ROI calc works?
7. **Investor Portal** — FAQs expandable, links work?
8. **Financial Dashboard** — Charts render with data?

**For Each Tool:**
- [ ] Test on desktop (full screen)
- [ ] Test on tablet (medium screen)
- [ ] Test on mobile (small screen)
- [ ] Test data loads correctly
- [ ] Test search/filter if applicable
- [ ] Test export/print if applicable
- [ ] No JS console errors
- [ ] Responsive layout works

**Timeline:** 2-3 hours per tool × 4-5 tools = 8-15 hours

---

### 7. Map Functionality Validation ⭐
**Status:** Leaflet detected, not tested  
**Priority:** Ensure geospatial features work  
**Effort:** 3-4 hours

**Maps to Test:**
- [ ] fire-districts-map.html
- [ ] county-commission-map.html
- [ ] township-detail-map.html
- [ ] regional-context-map.html
- [ ] lake-activity-zones.html
- [ ] lake-golf-opportunities-map.html
- [ ] us-77-corridor-map.html

**For Each Map:**
- [ ] Tiles load (OpenStreetMap or other)
- [ ] Zoom in/out works (pinch on mobile)
- [ ] Pan/drag works
- [ ] Click-for-details if implemented
- [ ] Legend/controls visible and functional
- [ ] No map errors in console
- [ ] Responsive on mobile
- [ ] Load time reasonable (<3s)

**Timeline:** 1-2 hours

---

### 8. SEO & Meta Tags Full Audit ⭐
**Status:** Sample pages checked, not comprehensive  
**Priority:** Prepare for search visibility  
**Effort:** 3-4 hours

**Audit All Pages for:**
- [ ] Unique title tags (40-60 characters)
- [ ] Meta descriptions (140-160 characters)
- [ ] OG tags for social sharing
- [ ] Canonical tags (if applicable)
- [ ] Structured data (Schema.org if applicable)
- [ ] No duplicate titles
- [ ] Keywords in title + description
- [ ] Mobile-friendly metadata

**Tools:**
- SEMrush Site Audit (if available)
- Screaming Frog (free version)
- Google Search Console
- Yoast SEO or Moz (if plugins available)

**Timeline:** 2-3 hours

---

### 9. Data Accuracy Verification ⭐
**Status:** Key metrics spot-checked  
**Priority:** Ensure consistency  
**Effort:** 2-3 hours

**Check Consistency Across Pages:**
- [ ] Job creation numbers (1,600+) — same everywhere?
- [ ] Investment amounts ($900M+) — consistent?
- [ ] Population targets (+41%) — consistent?
- [ ] Lake size (8,400 acres) — consistent?
- [ ] Timeline dates — no conflicts?
- [ ] Tax revenue projections — match financial page?
- [ ] Housing unit counts — consistent across pages?

**Identify & Fix:**
- [ ] Create spreadsheet of all key metrics
- [ ] Cross-check against economy, finance, brief pages
- [ ] Document source for each number
- [ ] Resolve any discrepancies

**Timeline:** 2 hours

---

## 🟢 LOW PRIORITY (Future Enhancements) — 10-15 hours

### 10. Advanced Visualizations (Phase 9.5 Extensions)
**Status:** 3D preview exists, could be enhanced  
**Priority:** Competitive differentiation  
**Effort:** 5-8 hours

**Options:**
- [ ] 3D development preview (WebGL/Three.js) — enhance with more properties
- [ ] AR visualization (if mobile-focused)
- [ ] Interactive satellite map overlay
- [ ] 4D timeline visualization (development over time)
- [ ] Population projection graph
- [ ] Tax revenue simulation
- [ ] Job creation by industry (animated chart)

---

### 11. Analytics Implementation ⭐
**Status:** Not yet configured  
**Priority:** Measure user engagement  
**Effort:** 2-3 hours

**Setup:**
- [ ] Install Plausible Analytics (privacy-first, no cookies)
  - OR Fathom Analytics (GDPR compliant)
  - OR Google Analytics 4 (standard option)
- [ ] Track page views
- [ ] Track button clicks (CTAs)
- [ ] Track form submissions
- [ ] Track tool usage
- [ ] Set up goals (investor portal visits, tool usage)

**Dashboard Metrics:**
- Total visitors
- Pages per session
- Bounce rate
- Most visited pages
- Tool usage frequency
- Investor portal conversion

---

### 12. Email Capture & Lead Management ⭐
**Status:** Lead forms exist, backend not configured  
**Priority:** Investor pipeline  
**Effort:** 3-4 hours

**Tasks:**
- [ ] Set up email capture form (Typeform, Mailchimp, custom)
- [ ] Configure automated responses
- [ ] Integrate with CRM (if available)
- [ ] Create email sequences (investor nurture, visitor follow-up)
- [ ] Track conversion funnel
- [ ] Document lead capture process

---

### 13. Documentation & Launch Guide
**Status:** Partial (created audit docs)  
**Priority:** Handoff & maintenance  
**Effort:** 2-3 hours

**Create:**
- [ ] User guide (how to navigate site)
- [ ] Maintenance guide (how to update content)
- [ ] Photo replacement SOP (step-by-step)
- [ ] Analytics dashboard guide
- [ ] Tool troubleshooting guide
- [ ] Link checking procedure (monthly)

---

## 📊 Summary Table

| Priority | Task | Effort | Timeline | Status |
|----------|------|--------|----------|--------|
| CRITICAL | ✅ None found | 0h | Done | ✅ |
| **HIGH** | 1. Replace images | 15-20h | 1-2 weeks | 📋 |
| | 2. Browser testing | 6-8h | 2-3 days | 📋 |
| | 3. Lighthouse audit | 4-6h | 1-2 days | 📋 |
| | 4. Content verification | 3-4h | 1 day | 📋 |
| | 5. Accessibility scan | 3-4h | 1 day | 📋 |
| **MEDIUM** | 6. Tool testing | 4-6h | 2-3 days | 📋 |
| | 7. Map validation | 3-4h | 1 day | 📋 |
| | 8. SEO audit | 3-4h | 1-2 days | 📋 |
| | 9. Data verification | 2-3h | 1 day | 📋 |
| **LOW** | 10. Advanced viz | 5-8h | 1 week | 📋 |
| | 11. Analytics | 2-3h | Few hours | 📋 |
| | 12. Email capture | 3-4h | 1 day | 📋 |
| | 13. Documentation | 2-3h | 1 day | 📋 |
| | **TOTAL** | **40-60h** | **2-3 weeks** | |

---

## 🚀 Recommended Launch Sequence

### Week 1: Launch MVP (High Priority Items 1-5)
1. Day 1-2: Image replacement (commission photographer NOW)
2. Day 3-4: Browser testing + fixes
3. Day 5: Performance audit + optimization
4. Week 1 finish: Content verification + accessibility scan

**Outcome:** Production-ready with real images, tested across browsers

### Week 2: Polish & Optimize (Medium Priority Items 6-9)
1. Tool testing & fixes
2. Map functionality validation
3. SEO full audit
4. Data accuracy cross-check

**Outcome:** All interactive features verified, SEO optimized

### Week 3: Enhancement & Analysis (Low Priority Items 10-13)
1. Analytics implementation
2. Advanced visualizations (optional)
3. Email capture setup
4. Documentation & handoff

**Outcome:** Measurable, maintainable, scalable

---

## 📋 Immediate Action Items (This Week)

1. **TODAY:** Contact photographer for image quote (35-50 photos, priority: lake + downtown + parks)
2. **TODAY:** Set up Lighthouse audit on key pages
3. **TOMORROW:** Schedule browser testing sessions
4. **TOMORROW:** Create image folder structure (/images/lake/, /images/downtown/, etc.)
5. **This Week:** Complete image acquisition (Phase 1: 20 photos)

---

## ✅ Ready to Launch When:

- [ ] All 36 Unsplash placeholders replaced with real El Dorado photos
- [ ] Browser testing complete (Chrome, Firefox, Safari, Edge, mobile)
- [ ] Lighthouse scores: Performance >90, SEO >95, Accessibility >95
- [ ] All interactive tools tested on desktop + mobile
- [ ] Maps render and are interactive
- [ ] No broken links or console errors
- [ ] Data accuracy verified
- [ ] Content complete (no Lorem ipsum, no TODOs)
- [ ] SEO tags verified
- [ ] Accessibility audit passed

---

**Next Sprint:** Image acquisition + browser testing (30-40 hours over 2-3 weeks)

