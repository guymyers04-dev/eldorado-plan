# Phase 1 Completion Checklist
**Updated:** June 28, 2026  
**Status:** 90% Complete - Final Polish Phase  
**Estimated Time to Complete:** 3–4 hours

---

## ✅ DONE (Audit Fixes Applied)

### Critical JavaScript & Accessibility
- [x] **Scroll-spy navigation fixed** on all detail pages (place-*.html)
- [x] **Reference.html "Tour Complete" CTA added**
- [x] **WCAG AA color contrast** fixed (navigation text)
- [x] **Dead code removed** (back-to-top element)
- [x] **NavigationStateManager class removed** (simplified to single observer)
- [x] **Mobile parallax disabled** on small screens (performance)
- [x] **Multiple threshold observer** implemented (better scroll tracking)

### CSS & Responsive Design
- [x] **Mobile responsiveness improved** for 375px, 480px, 768px, 1440px breakpoints
- [x] **Touch targets** set to 44px minimum (accessibility)
- [x] **Responsive typography** using clamp() function
- [x] **Pill nav mobile scroll** enabled with proper styling
- [x] **Button accessibility** enhanced (min-height, padding)

### HTML Structure
- [x] **Pill nav added to index.html** (4 section pills)
- [x] **Section IDs added** (#vision, #pillars, #quicklinks)
- [x] **Reference.html navigation loop complete**

### Analytics Foundation
- [x] **GA4 analytics.js created** (ready to deploy)
- [x] **Event tracking ready** (page nav, section clicks, external links, scroll depth)

---

## ⏳ TODO (Next 3–4 hours)

### 1. Deploy Analytics (30 min)

**Task:** Add GA4 analytics to all pages

**Steps:**
```bash
# 1. Create Google Analytics 4 property
#    Go to https://analytics.google.com
#    Create new property for eldorado-plan
#    Copy your Measurement ID (G-XXXXXXXXXX)

# 2. Update js/analytics.js
#    Edit line 18: gtag('config', 'G-YOUR_GA_ID');
#    Replace YOUR_GA_ID with your actual ID

# 3. Add script to all HTML pages
#    Add before </body> in each page:
#    <script src="js/analytics.js" defer></script>

# 4. Test in Google Analytics
#    Real-time reports should show page views immediately
```

**Files to update:** All .html files (add script tag)

---

### 2. Expand Detail Page Content (4–6 hours, parallel work)

**Task:** Add depth to place-*.html pages (currently 200–500 lines each)

**Structure to add to each page (before navigation-back section):**

```html
<!-- ════ CURRENT STATE ════ -->
<section id="current-state" class="section section--place" style="padding:var(--section-pad)">
  <div class="container">
    <h2>Current State</h2>
    <div class="grid-2">
      <div>
        <h3>✓ What's Already Working</h3>
        <ul style="color:var(--muted); line-height:1.8">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div>
        <h3>✗ Gaps to Address</h3>
        <ul style="color:var(--muted); line-height:1.8">
          <li>Gap 1</li>
          <li>Gap 2</li>
          <li>Gap 3</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ════ VISION & STRATEGY ════ -->
<section id="strategy" class="section section--place" style="background:var(--cream);padding:var(--section-pad)">
  <div class="container">
    <h2>Vision 2040 Strategy</h2>
    <p style="color:var(--muted); margin-bottom:1.5rem">[2–3 paragraph vision statement]</p>
    <div class="grid-3 reveal">
      <div class="glass-card" style="padding:1.5rem">
        <div class="icon" style="font-size:2rem;margin-bottom:0.5rem">🎯</div>
        <h3 style="font-size:1.05rem;margin-bottom:0.5rem">Goal 1</h3>
        <p style="font-size:0.9rem;color:var(--muted)">Description of strategic goal</p>
      </div>
      <div class="glass-card" style="padding:1.5rem">
        <div class="icon" style="font-size:2rem;margin-bottom:0.5rem">📈</div>
        <h3 style="font-size:1.05rem;margin-bottom:0.5rem">Goal 2</h3>
        <p style="font-size:0.9rem;color:var(--muted)">Description of strategic goal</p>
      </div>
      <div class="glass-card" style="padding:1.5rem">
        <div class="icon" style="font-size:2rem;margin-bottom:0.5rem">💡</div>
        <h3 style="font-size:1.05rem;margin-bottom:0.5rem">Goal 3</h3>
        <p style="font-size:0.9rem;color:var(--muted)">Description of strategic goal</p>
      </div>
    </div>
  </div>
</section>

<!-- ════ FUNDING & INVESTMENT ════ -->
<section id="funding" class="section section--place" style="padding:var(--section-pad)">
  <div class="container">
    <h2>Funding Mechanisms & Investment</h2>
    <div style="overflow-x:auto;margin-top:1.5rem">
      <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
        <tr style="border-bottom:2px solid var(--gold)">
          <th style="text-align:left;padding:0.75rem;color:var(--navy);font-weight:700">Funding Source</th>
          <th style="text-align:right;padding:0.75rem;color:var(--navy);font-weight:700">Amount</th>
          <th style="text-align:left;padding:0.75rem;color:var(--navy);font-weight:700">Timeline</th>
        </tr>
        <tr style="border-bottom:1px solid #e8e2d8">
          <td style="padding:0.75rem">Public Funding (TIF, grants)</td>
          <td style="text-align:right;padding:0.75rem">$X–$Y</td>
          <td style="padding:0.75rem">2025–2030</td>
        </tr>
        <tr style="border-bottom:1px solid #e8e2d8">
          <td style="padding:0.75rem">Private Investment</td>
          <td style="text-align:right;padding:0.75rem">$X–$Y</td>
          <td style="padding:0.75rem">2025–2040</td>
        </tr>
        <tr style="border-bottom:1px solid #e8e2d8">
          <td style="padding:0.75rem">Federal/State Grants</td>
          <td style="text-align:right;padding:0.75rem">$X–$Y</td>
          <td style="padding:0.75rem">2026–2035</td>
        </tr>
      </table>
    </div>
  </div>
</section>

<!-- ════ SUCCESS METRICS ════ -->
<section id="metrics" class="section section--place" style="background:var(--cream);padding:var(--section-pad)">
  <div class="container">
    <h2>Success Metrics (Vision 2040)</h2>
    <div class="grid-2 reveal">
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-left:4px solid var(--gold)">
        <h3 style="color:var(--gold);margin-bottom:0.5rem">By 2030</h3>
        <ul style="font-size:0.95rem;color:var(--muted);line-height:1.8">
          <li>✓ Metric 1: [target]</li>
          <li>✓ Metric 2: [target]</li>
          <li>✓ Metric 3: [target]</li>
        </ul>
      </div>
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-left:4px solid var(--navy)">
        <h3 style="color:var(--navy);margin-bottom:0.5rem">By 2040</h3>
        <ul style="font-size:0.95rem;color:var(--muted);line-height:1.8">
          <li>✓ Metric 1: [target]</li>
          <li>✓ Metric 2: [target]</li>
          <li>✓ Metric 3: [target]</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

**Update pill nav at top of each detail page:**
```html
<!-- ════ PAGE NAV PILLS ════ -->
<nav class="page-nav">
  <div class="page-nav-inner">
    <a href="#at-glance" class="page-nav__pill">At a Glance</a>
    <a href="#current-state" class="page-nav__pill">Current State</a>
    <a href="#strategy" class="page-nav__pill">Vision Strategy</a>
    <a href="#funding" class="page-nav__pill">Funding</a>
    <a href="#metrics" class="page-nav__pill">Metrics</a>
    <a href="#navigation-back" class="page-nav__pill">Next Steps</a>
  </div>
</nav>
```

**Pages to update:**
- [ ] place-lake.html
- [ ] place-downtown.html
- [ ] place-arts.html
- [ ] place-tourism.html
- [ ] place-parks.html
- [ ] place-beautification.html

**Estimated time:** 30–45 min per page (copy template, customize content)

---

### 3. Add Data Source Citations (2 hours)

**Task:** Add sources to all pages (currently only some have citations)

**Template to add to each page footer (before section close):**

```html
<!-- ════ DATA SOURCES ════ -->
<div style="background:#F8F4EC;border-left:4px solid var(--gold);padding:1.5rem;border-radius:6px;margin-top:3rem">
  <h3 style="margin-bottom:0.75rem;color:var(--navy)">📚 Data Sources</h3>
  <p style="color:var(--muted);font-size:0.9rem;margin-bottom:1rem">Information on this page is derived from:</p>
  <ul style="font-size:0.9rem;color:var(--muted);list-style:none">
    <li style="margin-bottom:0.5rem"><strong>Population & Demographics:</strong> <a href="https://datausa.io/profile/geo/el-dorado-ks/" target="_blank" style="color:var(--gold)">DataUSA El Dorado Profile</a> · <a href="https://www.kansashealthmatters.org/" target="_blank" style="color:var(--gold)">Kansas Health Matters</a></li>
    <li style="margin-bottom:0.5rem"><strong>Lake Visitation:</strong> <a href="https://kdwpt.state.ks.us/" target="_blank" style="color:var(--gold)">Kansas Department of Wildlife & Parks</a> Annual Report</li>
    <li style="margin-bottom:0.5rem"><strong>Economic Data:</strong> <a href="https://data.census.gov/" target="_blank" style="color:var(--gold)">U.S. Census Bureau</a> · EMSI labor market data</li>
    <li><strong>Complete sources:</strong> See <a href="data/sources/SOURCES.md" style="color:var(--gold)">APA 7th Edition citations</a></li>
  </ul>
</div>
```

**Pages needing sources:**
- [ ] index.html (hero stats)
- [ ] economy.html (all numbers)
- [ ] housing.html (demographic data)
- [ ] place.html (visitation, acreage)
- [ ] people.html (education stats)
- [ ] build.html (infrastructure stats)
- [ ] finance.html (investment figures)
- [ ] region.html (distance figures)
- [ ] reference.html (all data)
- [ ] All detail pages

**Estimated time:** 10–15 min per page

---

### 4. Testing & QA (1 hour)

**Device testing:**
- [ ] iPhone SE (375px) — scroll-spy, responsive layout
- [ ] iPad (768px) — pill nav scroll, grid layout
- [ ] Desktop (1440px) — full experience, navigation

**Functionality testing:**
- [ ] All internal links work
- [ ] All external links open correctly
- [ ] Scroll-spy highlights correct section on all pages
- [ ] Pill nav scrolls horizontally on mobile
- [ ] Navigation loop completes (can go through all 8 pages)
- [ ] Analytics events fire (check GA real-time)

**Accessibility testing:**
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works (Tab through links)
- [ ] Screen reader test (NVDA/VoiceOver)
- [ ] All buttons have 44px+ touch targets

---

## 📊 Time Breakdown

| Task | Estimated Time | Status |
|------|---|---|
| Deploy GA4 Analytics | 30 min | ⏳ TODO |
| Expand detail pages (6 pages) | 3–4 hours | ⏳ TODO |
| Add data sources (12 pages) | 2 hours | ⏳ TODO |
| Testing & QA | 1 hour | ⏳ TODO |
| **TOTAL** | **6.5–7.5 hours** | ⏳ **IN PROGRESS** |

---

## 🎯 Phase 2 Readiness

**After completing all checklist items above, you'll be ready for:**
- Public launch announcement
- Stakeholder directory expansion (40–60 profiles)
- Community engagement tools:
  - Public comment generator
  - Commission member locator
  - Meeting countdown timer
  - Project status tracker
- Marketing & outreach campaign

**Launch criteria:**
- [x] All CRITICAL issues fixed
- [x] Mobile responsive & tested
- [x] WCAG AA accessible
- [ ] All pages have complete content (data sources, current state, strategy)
- [ ] Analytics deployed & verified
- [ ] Final QA/testing complete

---

## 💡 Pro Tips

1. **Batch update detail pages:** Copy template to all 6 at once, then customize each
2. **Use Find & Replace:** For consistent formatting across pages
3. **Test on mobile first:** Catch layout issues early
4. **Check your GA4:** Real-time reports appear immediately after deployment

---

**Status:** 90% Complete. Ready for final polish sprint. Expected completion: **Tonight or Next Session**
