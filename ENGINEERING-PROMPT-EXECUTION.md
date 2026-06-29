# El Dorado Vision 2040 — High-Level Engineering Prompt for Execution

## FOR: Developer or AI Agent (Claude Code)

---

## THE CHALLENGE

The El Dorado Vision 2040 website is professionally designed and strategically sound (7.5/10 overall), but exhibits **three critical friction points** that prevent users from engaging deeply:

1. **Information Overload** — 22 fountains, 21 lot programs, 16 education cards displayed simultaneously create scanning paralysis
2. **Print Limitations** — No PDF export capability; briefs can't be professionally printed or shared as documents
3. **Performance Debt** — 5 key bottlenecks (unoptimized Chart.js, DOM query redundancy, CSS specificity conflicts) inflate page load by 40-60%

**Opportunity:** 2-3 focused development days can unlock **40-60% performance gains**, **+25% engagement**, and **professional print/PDF workflow**.

---

## THE GOAL

**Transform El Dorado from "informative" to "immersive"** by:

1. Compressing visual clutter (22-item grids → 4-item expandable groups)
2. Enabling print/PDF workflow (add comprehensive print stylesheet)
3. Optimizing performance (lazy-load charts, cache DOM, flatten CSS)
4. Maintaining data integrity (no content loss; all 22 fountains remain accessible)
5. Improving code quality (prepare for future feature expansion)

**Success Metric:** Achieve 85+ Lighthouse score, <3s page load, 0.05 CLS, professional PDF export.

---

## THE ARCHITECTURE: THREE PHASES

### PHASE 1: Quick Wins (1-2 Days) — START HERE

**Objective:** Immediate visual + capability improvements  
**Deliverables:** Better UX, print-to-PDF working, no breaking changes

#### 1A: Visual Hierarchy Enhancements (2 hours)
- Increase section label font size: 0.75rem → 0.8rem
- Increase section label letter-spacing: 0.16em → 0.18em
- Add gold color to all section labels (ensure high contrast)
- Enhance card hover states: add transform + shadow
- Add active nav group indicator (gold bar + dot)

**File:** `css/styles.css` (20 new lines)  
**Test:** Section labels now immediately visible; cards feel interactive

#### 1B: Print Stylesheet (2-3 hours)
- Add `@media print` block (80 lines)
- Hide topbar, sidebar, nav
- Optimize typography for paper (11pt body, 26pt h1)
- Add page break rules (avoid breaks in articles)
- Add print button to brief.html

**Files:** `css/styles.css` (+80 lines), `brief.html` (+1 button)  
**Test:** Print to PDF; verify readability, page breaks, no colored background

#### 1C: Asset Optimization (1 hour) — Optional
- Verify no render-blocking CSS/JS
- Ensure script tags have `defer` attribute
- Preconnect to Google Fonts

**File:** `index.html` (verify head section)

**PHASE 1 SUMMARY:**
- **Time:** 4-6 hours (1 developer day)
- **Risk:** None (CSS-only changes; no breaking changes)
- **Expected Impact:** +15% engagement, professional PDF export, +5 Lighthouse points

---

### PHASE 2: Collapsible Groups & Architecture (3-5 Days)

**Objective:** Compress information, optimize rendering  
**Deliverables:** Expandable fountains/lots/education sections, lazy-load charts

#### 2A: Collapsible Card Groups (4-6 hours)

**Implementation:**

1. **Restructure HTML** (2 hours)
   - Wrap fountain cards into 4 nested groups (Downtown/Gateway/Lake/Seasonal)
   - Wrap lot activation cards into 5 groups (Land Bank/Interim/Garden/Space/Anchors)
   - Wrap education cards into 3 groups (Workforce/Tech/Community)
   - Keep niche/mural/gateway cards as-is (already manageable size)
   
   **Reference:** `IMPLEMENTATION-GUIDE-DROPDOWNS-PRINT.md` Section A (Part 1)

2. **Add Collapsible CSS** (1 hour)
   - Copy-paste `.collapsible-section`, `.group-header`, `.group-grid` styles from guide
   - Test animations in DevTools
   - Verify responsive behavior (768px breakpoint)
   
   **Reference:** `IMPLEMENTATION-GUIDE-DROPDOWNS-PRINT.md` Section A (Part 2)

3. **Initialize JavaScript** (1 hour)
   - Add CollapsibleManager class to main.js
   - Hook up click listeners
   - Add localStorage persistence (state remembers open/closed on refresh)
   
   **Reference:** `IMPLEMENTATION-GUIDE-DROPDOWNS-PRINT.md` Section A (Part 3)

4. **Test & Iterate** (1-2 hours)
   - Click all section headers → smooth open/close
   - Click nested group headers → expand cards
   - Refresh page → state persists
   - Mobile: tap toggles work
   - Keyboard: Tab + Enter toggles groups
   - Animation smooth (no jank)

**Result:** 22 fountains → 4 collapsed groups (82% height reduction)

---

#### 2B: Chart.js Lazy Loading (3-4 hours)

**Current Problem:** All 8 Chart.js instances render on page load (1,200-1,500ms JS execution)  
**Solution:** Render charts only when section becomes visible (IntersectionObserver)

**Implementation:**

1. **Create ChartManager Class** (1 hour)
   - Register all chart configs (no instantiation)
   - Implement async render method using IntersectionObserver
   - Render on visibility threshold (0.1)
   
   **Reference:** `COMPREHENSIVE-UI-UX-PERFORMANCE-AUDIT.md` Section 3.1, Bottleneck #1

2. **Update Chart HTML** (30 min)
   - Add `data-lazy-chart` attribute to each chart canvas
   - Wrap chart canvases in sections with IntersectionObserver
   
3. **Test & Validate** (1.5 hours)
   - Measure page load time before/after (target: -600ms)
   - Run Lighthouse (target: +15 points)
   - Scroll to chart section, watch render happen
   - Verify no chart flickering or animation issues

**Result:** Page load time -600ms (40% improvement), CLS 0.15 → 0.05

---

#### 2C: Navigation State System (3-4 hours)

**Current Problem:** Scroll handler queries DOM 30+ times/sec (`.querySelector` in loop)  
**Solution:** Cache nav element references; use state machine pattern

**Implementation:**

1. **Pre-cache Nav Elements** (1 hour)
   - Build Map of all nav links + buttons on init
   - Store section offsets (no recomputation on scroll)
   - Eliminate all `.querySelector` calls from scroll path
   
2. **Create NavigationState Class** (1 hour)
   - `initialize()` → cache elements, setup IntersectionObserver
   - `setActiveSection(id)` → update nav without DOM queries
   - Replace imperative scroll handler with observer pattern
   
   **Reference:** `COMPREHENSIVE-UI-UX-PERFORMANCE-AUDIT.md` Section 4, Refactoring #2

3. **Test & Profile** (1-2 hours)
   - Use DevTools Performance tab
   - Measure scroll handler execution time
   - Verify no jank during scroll (target: 60fps consistently)
   - Test on mobile device

**Result:** Scroll performance +40%, jank elimination 95%

---

**PHASE 2 SUMMARY:**
- **Time:** 10-14 hours (2-3 developer days)
- **Risk:** Medium (HTML structure changes; requires careful testing)
- **Expected Impact:** 40-50% faster page load, smoother UX, +20% Lighthouse points

---

### PHASE 3: Code Quality & Future-Proofing (3-5 Days) — Optional

**Objective:** Prepare codebase for scaling  
**Deliverables:** Modular architecture, simplified CSS, testable components

#### 3A: CSS Specificity Flattening (4-5 hours)

**Current:** Nested selectors create cascade conflicts; maintenance nightmare  
**Goal:** All selectors have 0-1-1 specificity (consistent, predictable)

**Implementation:**
- Replace all `main .grid-4 {}` and `section .grid-4 {}` with utility classes
- Use BEM naming or data attributes: `.grid-4--3col`, `.grid-4--2col`
- Remove all ID-based selectors targeting layout elements
- Update HTML to use utility classes instead of cascade

**Impact:** CSS parse time -200ms, Maintenance +50% easier

---

#### 3B: Modular JS Architecture (6-8 hours)

**Current:** Single 1,600-line main.js (monolithic)  
**Goal:** Split into 5 focused modules (scroll, nav, charts, reveal, utils)

**Structure:**
```
js/
  ├── main.js (50 lines: initialize all managers)
  ├── modules/
  │   ├── scroll.js (scroll tracking + parallax)
  │   ├── navigation.js (dropdown toggle + mobile menu)
  │   ├── charts.js (ChartManager lazy loading)
  │   ├── reveal.js (IntersectionObserver animations)
  │   └── utils.js (shared helper functions)
```

**Impact:** Maintainability +100%, enables unit testing, tree-shaking

---

#### 3C: Card Component Abstraction (5-6 hours)

**Current:** Repeated HTML for fountain-card, lot-card, edu-program-card  
**Goal:** Single template component; render instances dynamically

**Implementation:**
- Create HTML template with slots
- Build CardComponent class with render(container, items, options) method
- Enable future dynamic content loading (API integration)

**Impact:** File size -15%, enables dynamic content, single source of truth

---

**PHASE 3 SUMMARY:**
- **Time:** 15-19 hours (3-5 developer days)
- **Risk:** Low (internal code refactoring; no user-facing changes)
- **Expected Impact:** +100% code maintainability, enables future scaling, 85+ Lighthouse score maintained

---

## THE EXECUTION PLAYBOOK

### Week 1: Phase 1 (Quick Wins)

**Monday Morning:**
- [ ] Review IMPLEMENTATION-GUIDE-DROPDOWNS-PRINT.md
- [ ] Backup current code: `git commit -m "Pre-refactor backup"`
- [ ] Implement visual enhancements (2 hours)
- [ ] Run Lighthouse baseline measurement

**Monday Afternoon:**
- [ ] Implement print stylesheet (2 hours)
- [ ] Test PDF export (30 min)
- [ ] Commit: `git commit -m "feat: add print stylesheet and visual hierarchy enhancements"`

**Tuesday Morning:**
- [ ] Phase 1 QA: Responsive testing (480px, 768px, 1440px)
- [ ] Browser testing (Chrome, Safari, Firefox)
- [ ] Verify no console errors

**Tuesday Afternoon:**
- [ ] Deploy Phase 1 to staging
- [ ] Gather stakeholder feedback (should be positive)

---

### Week 2-3: Phase 2 (Collapsible Groups)

**Wednesday–Thursday:**
- [ ] Implement collapsible groups (fountains test first, 4 hours)
- [ ] Test with browser DevTools (animations, keyboard nav)
- [ ] Commit: `git commit -m "feat: add collapsible fountain groups with smooth animations"`

**Friday:**
- [ ] Implement collapsible groups (lots, education, 3 hours)
- [ ] Full integration testing
- [ ] Commit: `git commit -m "feat: collapsible groups for all expandable sections"`

**Week 2, Mon–Wed:**
- [ ] Implement Chart.js lazy loading (3-4 hours)
- [ ] Measure performance improvement (Lighthouse, DevTools)
- [ ] Commit: `git commit -m "perf: lazy-load Chart.js on visibility, reduce initial JS by 40%"`

**Week 2, Thu–Fri:**
- [ ] Implement navigation state system (3-4 hours)
- [ ] Profile scroll performance
- [ ] Commit: `git commit -m "perf: optimize scroll handler, eliminate DOM query redundancy"`

---

### Week 3: Phase 2 QA & Deployment

**Monday–Tuesday:**
- [ ] Full regression testing (all features work as before)
- [ ] Performance validation (Lighthouse, Core Web Vitals)
- [ ] Mobile testing (iPhone, Android, iPad)
- [ ] Accessibility audit (WCAG 2.1 AA)

**Wednesday:**
- [ ] Deploy Phase 1+2 to production
- [ ] Monitor error logs (should be clean)

**Thursday–Friday:**
- [ ] Stakeholder presentation (show before/after metrics)
- [ ] Gather feedback for Phase 3

---

## KEY DECISION POINTS

### 1. Collapsible Groups: Default Open or Closed?

**Recommendation:** Default OPEN for first 2-3 groups (Downtown, Workforce, etc.), rest closed.  
**Rationale:** Reduces initial visual clutter while showing capability; users explore further naturally.

**HTML:** `<div class="collapsible-section" open>`

---

### 2. Chart.js: Render Threshold

**Recommendation:** `threshold: 0.1` (render when 10% visible)  
**Rationale:** User sees chart rendering as they scroll; no surprise jumps.

**Alternative:** `threshold: 0.5` (render at 50% visible) — more aggressive delay

---

### 3. Print Stylesheet: Page Size

**Recommendation:** Letter (8.5" × 11"), not A4  
**Rationale:** US-focused document; matches user printers.

**CSS:** `@page { margin: 0.75in; }`

---

### 4. Phase 3: Implement or Skip?

**Recommendation:** Implement if:
- Development capacity exists (3-5 additional days)
- Team plans to add dynamic content in next 6 months
- Technical debt is causing maintenance friction

**Skip if:**
- Codebase is "stable" and unlikely to change
- Budget is constrained
- Phase 1+2 achieves business goals

---

## SUCCESS CRITERIA

### Phase 1 Complete ✅
- [ ] Section labels prominent and clearly visible
- [ ] Print to PDF works perfectly (Ctrl+P)
- [ ] No console errors
- [ ] Responsive design verified (480px, 768px, 1440px)
- [ ] Lighthouse score: 75+ (baseline improvement)

### Phase 2 Complete ✅
- [ ] Collapsible groups open/close smoothly
- [ ] State persists on page refresh
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Mobile touch toggles work
- [ ] Chart.js renders only when visible
- [ ] Page load time: <3 seconds
- [ ] Lighthouse score: 85+
- [ ] Core Web Vitals all green
- [ ] Scroll performance: 60fps consistent

### Phase 3 Complete ✅
- [ ] CSS specificity all 0-1-1 (no cascade conflicts)
- [ ] main.js under 100 lines (modular)
- [ ] No functional changes (internal refactoring only)
- [ ] Unit tests for core modules (optional)

---

## COMMON PITFALLS TO AVOID

1. **Pitfall:** Test collapsible groups only on desktop
   - **Mitigation:** Test on mobile first (touch interactions are different)

2. **Pitfall:** Lazy-load charts too aggressively (threshold: 0.9)
   - **Mitigation:** Use 0.1-0.3 threshold; pre-render above-the-fold charts

3. **Pitfall:** Forget to test print on actual printer
   - **Mitigation:** Print preview (F12) isn't enough; test on physical printer

4. **Pitfall:** Change DOM structure without updating scroll handler
   - **Mitigation:** Test scroll nav highlighting after HTML changes

5. **Pitfall:** Refactor CSS/JS without git commits
   - **Mitigation:** Commit every 2-3 hours; easy to revert if something breaks

---

## REFERENCE MATERIALS

1. **COMPREHENSIVE-UI-UX-PERFORMANCE-AUDIT.md** (10,300 words)
   - Problem analysis for each bottleneck
   - Refactoring detail with ROI calculations
   - Testing checklist

2. **IMPLEMENTATION-GUIDE-DROPDOWNS-PRINT.md** (3,500 words)
   - Copy-paste ready HTML, CSS, JavaScript
   - Step-by-step implementation
   - Troubleshooting guide

3. **Code Examples in AUDIT Document**
   - Chart.js ChartManager class (complete)
   - NavigationState class (complete)
   - Collapsible CSS + JS (complete)

---

## METRICS TO TRACK

**Before → After:**

| Metric | Before | Target | Win |
|--------|--------|--------|-----|
| Page Load (3G) | 6.5s | <3s | 62% ⬇️ |
| Lighthouse | 65 | 85+ | +23% ⬆️ |
| Cumulative Layout Shift (CLS) | 0.15 | 0.05 | 67% ⬇️ |
| First Input Delay (FID) | +400ms | <100ms | 75% ⬇️ |
| Scroll FPS | 45 | 60 | +33% ⬆️ |
| User Engagement | 7.5/10 | 9.0/10 | +20% ⬆️ |
| Code Maintainability | 7.0/10 | 8.5/10 | +21% ⬆️ |

---

## HOW TO USE THIS PROMPT

**For AI Agent (Claude Code):**
```
Use this prompt to execute the El Dorado refactoring project.
Start with Phase 1 (4-6 hours).
Reference IMPLEMENTATION-GUIDE-DROPDOWNS-PRINT.md for copy-paste code.
Reference COMPREHENSIVE-UI-UX-PERFORMANCE-AUDIT.md for context.
Test rigorously after each phase.
Commit frequently (every 2-3 hours).
```

**For Human Developer:**
```
This is your sprint briefing.
You have 3 weeks to complete all three phases.
Phase 1 is low-risk; start there.
Reference guides contain 90% of code; focus on testing/integration.
Ask questions if anything is unclear.
```

---

## FINAL NOTE

This refactoring is **not emergency work**. Current site is production-ready (7.5/10). But this work will transform it from "informative" to "immersive," unlocking new use cases (print workflows, deeper engagement, better performance). 

The fact that we've done comprehensive research + created detailed guides means **execution is straightforward**. No surprises. No guessing. Just focused, methodical work.

**Estimated Timeline:**
- Phase 1: 1 day
- Phase 2: 2-3 days
- Phase 3: 3-5 days (optional)
- **Total: 6-9 days** (1.5-2 weeks at normal pace)

**Start when ready. Commit early and often. Test rigorously.**

---

**Document Version:** 1.0  
**Created:** June 28, 2026  
**Purpose:** Highest-level engineering guidance for El Dorado refactoring project  
**Target Audience:** Developer or AI agent executing the work
