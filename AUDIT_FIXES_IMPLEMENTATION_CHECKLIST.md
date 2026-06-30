# El Dorado Vision 2040 — AUDIT FIXES IMPLEMENTATION CHECKLIST

**Start Date:** June 29, 2026  
**Target Completion:** July 13, 2026 (2 weeks)  
**Total Estimated Effort:** 40-50 hours

---

## WEEK 1: CRITICAL FIXES (13-17 hours)

### Task 1.1: Configure Google Analytics 4 (1-2 hours)
**Priority:** 🔴 CRITICAL — Deploy-blocking

**Steps:**
- [ ] Get GA4 Measurement ID from Google Analytics dashboard (format: G-XXXXXXXXXX)
- [ ] Open Find/Replace in editor
- [ ] Find: `G-PLACEHOLDER-ID`
- [ ] Replace with: `[YOUR-GA4-ID]`
- [ ] Files to update (19 total):
  - [ ] initiative-adu.html
  - [ ] initiative-cdl-expansion.html
  - [ ] initiative-community-solar.html
  - [ ] initiative-east-marina.html
  - [ ] initiative-food-processing-hub.html
  - [ ] initiative-golf-championship.html
  - [ ] initiative-golf-community.html
  - [ ] initiative-logistics-workforce.html
  - [ ] initiative-makers-guild.html
  - [ ] initiative-participatory-budget.html
  - [ ] initiative-remote-workers.html
  - [ ] initiative-student-housing.html
  - [ ] initiative-west-marina.html
  - [ ] initiative-youth-retention.html
  - [ ] bcc-retention-strategy.html
  - [ ] eldorado-inc-strategy.html
  - [ ] housing-strategy.html
  - [ ] i35-interchange-strategy.html
  - [ ] tax-base-growth-strategy.html
- [ ] Test: Open each page → Open DevTools → Check `_ga` cookie in Application tab
- [ ] Verify: GA4 Real-Time dashboard shows page views within 30 seconds

**Notes:** Use batch find/replace. Verify with GA4 dashboard before considering complete.

---

### Task 1.2: Add Implementation Plans to 6 Incomplete Initiatives (12-15 hours)
**Priority:** 🔴 CRITICAL  
**Time per file:** 2-2.5 hours

#### 1.2a: initiative-cdl-expansion.html ✅ (Actually COMPLETE - verify only)
- [x] Already has "Expansion Strategy" section with 3 phases
- [ ] Verify structure is present
- [ ] No fix needed

#### 1.2b: initiative-food-processing-hub.html (2 hours)
**Current:** Overview + Facility Opportunities + Supply Chain  
**Missing:** Phased Implementation Plan + Budget Breakdown

**Add After "Initiative Overview" Section:**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Implementation Roadmap</h2>
  <div class="implementation-phases">
    <div class="phase-card">
      <div class="phase-number">1</div>
      <div class="phase-title">Site Selection & Permitting (Months 1-6)</div>
      <div class="phase-description">Secure 50-100 acre site. Complete environmental review. Finalize zoning. Design master plan for food processing anchor facilities and supporting businesses. Target: Shovel-ready site by Month 6.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">2</div>
      <div class="phase-title">Anchor Facility Development (Months 6-18)</div>
      <div class="phase-description">Break ground on specialty meat processing facility (Phase 1). Construct buildings, utilities, dock facilities. Recruit and close anchor tenant. Target: Operations by Month 18.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">3</div>
      <div class="phase-title">Support Business Cluster (Months 18-36)</div>
      <div class="phase-description">Recruit 4-6 supporting food businesses (value-added, specialty, packaging). Develop shared infrastructure (cold storage, logistics, R&D facilities). Target: 150+ jobs by Month 36.</div>
    </div>
  </div>
</section>
```

**Add Budget Section After Implementation:**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Capital Investment & Financing</h2>
  <div class="budget-breakdown">
    <div class="budget-item">
      <span class="budget-label">Land acquisition (50-100 acres @ $3-5K/acre)</span>
      <span class="budget-value">$250K-500K</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Site infrastructure (roads, utilities, stormwater)</span>
      <span class="budget-value">$2-3M</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Anchor facility construction (150K-300K sf @ $80-100/sf)</span>
      <span class="budget-value">$12-30M</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Support facilities & common areas</span>
      <span class="budget-value">$2-5M</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Permitting, design, contingency (10%)</span>
      <span class="budget-value">$1.7-3.8M</span>
    </div>
    <div class="budget-item" style="border-top: 2px solid var(--gold); margin-top: 1rem; padding-top: 1rem;">
      <span class="budget-label" style="font-weight: 700;">Total Capital Investment</span>
      <span class="budget-value" style="font-weight: 700;">$18.2-42.3M</span>
    </div>
  </div>
  <p style="font-size: 0.95rem; color: #555; margin-top: 1rem;"><strong>Funding Sources:</strong> EDA grants ($3-5M), private developer ($8-15M), tax increment financing ($3-5M), USDA rural development loans ($4-8M).</p>
</section>
```

**Checklist:**
- [ ] Add Implementation Roadmap section with 3 phases
- [ ] Add Budget section with line items
- [ ] Add Funding Sources explanation
- [ ] Verify styling matches other initiatives

---

#### 1.2c: initiative-golf-championship.html (2 hours)
**Current:** Overview + Course Specs + Financial Model + Tournament Program  
**Missing:** Clear Implementation Plan section

**Add After "Initiative Overview":**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Implementation Schedule</h2>
  <div class="implementation-phases">
    <div class="phase-card">
      <div class="phase-number">1</div>
      <div class="phase-title">Site Selection & Design (Months 1-9)</div>
      <div class="phase-description">Identify 160-180 acre championship course site. Commission design from nationally-recognized golf architect (80-120 day design). Secure environmental permits. Target: Finalized plans by Month 9.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">2</div>
      <div class="phase-title">Course Construction (Months 9-24)</div>
      <div class="phase-description">Begin earthwork and drainage. Construct greens, fairways, bunkers per championship specs. Install irrigation, cart paths, lighting. Build clubhouse (15K sf). Target: Course ready for play by Month 24.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">3</div>
      <div class="phase-title">Tournament Programming (Months 24-36)</div>
      <div class="phase-description">Establish PGA partnerships for qualifying events. Host first U.S. Amateur qualifier (Month 28). Develop annual tournament calendar. Recruit corporate/membership support. Target: 2-3 sanctioned events per year by Year 2.</div>
    </div>
  </div>
</section>
```

**Checklist:**
- [ ] Add Implementation Schedule section with 3 phases
- [ ] Verify alignment with existing Financial Model
- [ ] Check tournament expectations match realistic timeline

---

#### 1.2d: initiative-golf-community.html (2 hours)
**Current:** Overview + Course/Community Details  
**Missing:** Clear Implementation Plan

**Add After "Initiative Overview":**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Phased Development Plan</h2>
  <div class="implementation-phases">
    <div class="phase-card">
      <div class="phase-number">1</div>
      <div class="phase-title">Land & Financing (Months 1-6)</div>
      <div class="phase-description">Secure 200-250 acre development site. Close financing ($25-35M). Finalize master plan with developer partner. Complete permitting for Phase 1 (150 homes, golf course). Target: Shovel-ready by Month 6.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">2</div>
      <div class="phase-title">Golf Course & Initial Homes (Months 6-24)</div>
      <div class="phase-description">Build 18-hole championship course (160 acres). Construct initial 100-150 homes on premium golf-view lots. Develop clubhouse, dining, pro shop. Open course & homes to market. Target: Course playable by Month 18, homes move-in ready by Month 24.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">3</div>
      <div class="phase-title">Build-Out & Amenities (Months 24-48)</div>
      <div class="phase-description">Complete remaining 150-200 homes. Develop community center, pools, tennis, trails. Establish homeowner association. Achieve 300+ residents. Target: Full occupancy by Month 48.</div>
    </div>
  </div>
</section>
```

**Checklist:**
- [ ] Add Phased Development Plan section
- [ ] Ensure timeline aligns with golf course construction
- [ ] Verify housing numbers match overview

---

#### 1.2e: initiative-logistics-workforce.html (2 hours)
**Current:** Overview only with minimal content  
**Missing:** Full Implementation Plan + Budget

**Add New Comprehensive Implementation Section:**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Training Program Roadmap</h2>
  <div class="implementation-phases">
    <div class="phase-card">
      <div class="phase-number">1</div>
      <div class="phase-title">Program Design & Partnerships (Months 1-6)</div>
      <div class="phase-description">Assess regional CDL/logistics training needs. Partner with regional vocational schools and community colleges. Design curriculum modules (warehouse ops, OSHA, equipment operation, safety). Develop employer advisory board. Target: Ready to recruit first cohort by Month 6.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">2</div>
      <div class="phase-title">Training Launch (Months 6-18)</div>
      <div class="phase-description">Establish classroom + hands-on training facility (2,000-3,000 sf). Recruit & train instructors. Run first 2-3 cohorts (75-100 total trainees). Place graduates with regional warehouses/distributors. Target: 50-75 trained workers by Month 18.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">3</div>
      <div class="phase-title">Scale & Continuous Improvement (Months 18-36)</div>
      <div class="phase-description">Expand to 150+ trainees/year. Develop advanced modules (supervisor, safety coordinator). Create apprenticeship pathways. Build apprenticeship wage-earn model. Target: 150+ skilled workers placed annually by Month 36.</div>
    </div>
  </div>
</section>

<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Investment & Funding</h2>
  <div class="budget-breakdown">
    <div class="budget-item">
      <span class="budget-label">Training facility build-out (2,500 sf @ $150/sf)</span>
      <span class="budget-value">$375K</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Equipment (forklifts, hand trucks, safety gear)</span>
      <span class="budget-value">$150K</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Instructor salaries (Year 1, 2 FTE @ $45K)</span>
      <span class="budget-value">$90K</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Curriculum development & materials</span>
      <span class="budget-value">$50K</span>
    </div>
    <div class="budget-item">
      <span class="budget-label">Placement assistance & career coaching</span>
      <span class="budget-value">$30K</span>
    </div>
    <div class="budget-item" style="border-top: 2px solid var(--gold); margin-top: 1rem; padding-top: 1rem;">
      <span class="budget-label" style="font-weight: 700;">Total Year 1 Investment</span>
      <span class="budget-value" style="font-weight: 700;">$695K</span>
    </div>
  </div>
  <p style="font-size: 0.95rem; color: #555; margin-top: 1rem;"><strong>Funding Sources:</strong> Workforce Innovation & Opportunity Act (WIOA) grant ($250K), EDA training funds ($200K), employer contributions ($150K), city general fund ($95K).</p>
</section>
```

**Checklist:**
- [ ] Add comprehensive Training Program Roadmap section
- [ ] Add detailed Investment & Funding section
- [ ] Create alignment with regional warehouse expansion plans

---

#### 1.2f: initiative-student-housing.html (2 hours)
**Current:** Overview + Housing Program + Financial Model + Funding Strategy + Metrics  
**Issue:** Sections exist but lack clear Implementation Plan header and detailed execution timeline

**Add After "Housing Program" Section:**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Implementation Timeline</h2>
  <div class="implementation-phases">
    <div class="phase-card">
      <div class="phase-number">1</div>
      <div class="phase-title">Site Selection & Financing (Months 1-9)</div>
      <div class="phase-description">Identify optimal site (10-15 acres on/near USD 490 campus or within 2-mile radius). Secure $8-12M in financing (grants, tax credits, bonds). Complete soil/environmental studies. Finalize development plans. Target: Ready for groundbreaking by Month 9.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">2</div>
      <div class="phase-title">Construction (Months 9-18)</div>
      <div class="phase-description">Begin dorm construction (100 beds, 18 months). Concurrent townhome/studio development. Build dining, study lounges, recreation. Recruit and train housing management staff. Target: First buildings ready for occupancy by Month 18.</div>
    </div>
    <div class="phase-card">
      <div class="phase-number">3</div>
      <div class="phase-title">Launch & Ramp (Months 18-24)</div>
      <div class="phase-description">Move in first residents (dorms @ 80% occupancy). Open remaining townhomes/studios. Market to Butler CC and regional students. Achieve 90%+ occupancy. Target: Full build-out complete by Month 24.</div>
    </div>
  </div>
</section>
```

**Checklist:**
- [ ] Add Implementation Timeline section as distinct header
- [ ] Reorganize content sections to flow: Overview → Timeline → Housing Program → Financial Model → Funding → Metrics
- [ ] Verify all existing content remains intact

---

**Task 1.2 Completion Checklist:**
- [ ] All 6 files reviewed for existing content
- [ ] Implementation plans added to files missing them
- [ ] Budget breakdowns added where required
- [ ] Timeline alignment verified across all initiatives
- [ ] Styles match existing initiative format (phase-card class, budget-breakdown class)
- [ ] All links tested (no broken references)

---

## WEEK 2: MEDIUM PRIORITY FIXES (18.5-24 hours)

### Task 2.1: Add Missing Budget Sections (8-10 hours)
**Priority:** 🟡 MEDIUM  
**Time per file:** 1.5 hours

#### Files needing Budget sections:
- [ ] initiative-east-marina.html (1.5 hours)
- [ ] initiative-west-marina.html (1.5 hours)

**Add Similar Structure:**
```html
<section class="section" style="margin: 3rem 0;">
  <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--navy);">Capital Investment</h2>
  <div class="budget-breakdown">
    <div class="budget-item">
      <span class="budget-label">[Line Item]</span>
      <span class="budget-value">$[Amount]</span>
    </div>
    <!-- Additional items -->
    <div class="budget-item" style="border-top: 2px solid var(--gold); margin-top: 1rem; padding-top: 1rem;">
      <span class="budget-label" style="font-weight: 700;">Total Investment</span>
      <span class="budget-value" style="font-weight: 700;">$[Total]</span>
    </div>
  </div>
  <p style="font-size: 0.95rem; color: #555; margin-top: 1rem;"><strong>Funding:</strong> [Sources and amounts]</p>
</section>
```

**Checklist:**
- [ ] East Marina: Add marina development + dock infrastructure costs
- [ ] West Marina: Add golf-themed features + lake access development costs
- [ ] Both: Reference existing facility/amenity costs from other initiatives

---

### Task 2.2: Add Strategic Document Overviews (4-6 hours)
**Priority:** 🟡 MEDIUM

#### 2.2a: bcc-retention-strategy.html (2 hours)
**Add Before Implementation Section:**
1,000-word overview explaining:
- Problem: BCC is regional asset but faces enrollment challenges
- Opportunity: Stronger partnership with El Dorado could boost enrollment
- Strategic approach: Define win-win partnership model

**Checklist:**
- [ ] Add Executive Summary section (500 words)
- [ ] Explain strategic rationale for BCC partnership
- [ ] Define mutual benefits for city and college

---

#### 2.2b: housing-strategy.html (2 hours)
**Add Before Phase 1 section:**
2,000-word overview explaining:
- El Dorado's housing affordability crisis
- Link to FDI job creation
- Strategic response: North + South El Dorado development districts

**Note:** This file already has good "The Housing Crisis" section early — ADD:
- Executive overview (what we're solving)
- Strategic approach (phased development)
- Success definition (metrics we're targeting)

**Checklist:**
- [ ] Ensure housing crisis context is prominent
- [ ] Link housing strategy to economic development goals
- [ ] Add clear strategic positioning statement

---

#### 2.2c: tax-base-growth-strategy.html (2 hours)
**Add At Top (After Title, Before Sections):**
1,500-word strategic overview explaining:
- Current tax base conditions
- Growth drivers and opportunities
- 5-year vision for revenue expansion
- Action items and success metrics

**Checklist:**
- [ ] Add "Strategic Overview" section at top
- [ ] Define success metrics clearly
- [ ] Link to other strategic initiatives

---

### Task 2.3: Fix Anchor Links (0.5 hours)
**Priority:** 🟡 MEDIUM  
**File:** tax-base-growth-strategy.html

**Issue:** Table of contents has broken anchor links

**Fix:**
Find section headers that match TOC:
```html
<a href="#baseline">Baseline Analysis</a>
```

Add corresponding id to section header:
```html
<h2 id="baseline" style="color: var(--navy);">Baseline Analysis</h2>
```

**Affected Links:**
- [ ] `#baseline` → Add to "Baseline Analysis" section
- [ ] `#growth-drivers` → Add to "Growth Drivers" section
- [ ] `#revenue-model` → Add to "Revenue Model" section
- [ ] `#5-year-projection` → Add to "5-Year Projection" section
- [ ] `#roi-analysis` → Add to "ROI Analysis" section

**Checklist:**
- [ ] All 5 anchor links have corresponding id attributes
- [ ] Test table of contents navigation (click each link)

---

### Task 2.4: Consolidate Inline Styles (6-8 hours)
**Priority:** 🟡 MEDIUM (Optional - can defer)

**Approach:** Create reusable CSS classes for common patterns

**Extract Common Patterns:**
- Card with shadow: `.card-shadow`
- Phase container: `.phase-card`
- Metric card: `.metric-card`
- Budget item: `.budget-item`

**Files to Update:**
- [ ] initiative-adu.html (standardize 38 inline styles)
- [ ] initiative-cdl-expansion.html (67 inline styles)
- [ ] initiative-east-marina.html (69 inline styles)
- [ ] ... (14 total initiative files)

**Can defer post-launch if timeline is tight.**

**Checklist:**
- [ ] Identify top 10 reusable patterns
- [ ] Create CSS classes in `css/components.css`
- [ ] Update 2-3 files as proof of concept
- [ ] Batch update remaining files

---

## MONTH 2: LOW PRIORITY FIXES (8.25-10.25 hours)

### Task 3.1: Cleanup Backup Files (0.25 hours)
**Priority:** 🟠 LOW

```bash
# Remove all .bak files
rm -f /Users/guyh/eldorado-plan/*.bak

# Remove backup directories
rm -rf /Users/guyh/eldorado-plan/backups-20260629-213247/
rm -rf /Users/guyh/eldorado-plan/backups-20260629-213333/
```

**Checklist:**
- [ ] Confirm backup directories saved to external storage (if needed)
- [ ] Run cleanup commands
- [ ] Verify 44 .bak files removed
- [ ] Verify 2 backup directories removed
- [ ] Check project size reduction (should be ~10MB smaller)

---

### Task 3.2: CSS Component Refactoring (8-10 hours)
**Priority:** 🟠 LOW (Nice-to-have)

**Approach:** Extract 20-30 reusable CSS components

**Common Patterns to Extract:**
- `.initiative-hero` — Hero section styling
- `.phase-card` — Phase implementation cards
- `.metric-card` — Metric display cards
- `.budget-item` — Budget line items
- `.section-card` — White card with shadow
- `.badge` — Initiative badges
- `.grid-2col` — 2-column grid layout

**Files to create:**
- [ ] `css/initiative-components.css` (500-700 lines)
- [ ] Update HTML to use classes instead of inline styles

**Can completely defer if timeline is tight.**

**Checklist:**
- [ ] Design component system
- [ ] Create CSS file
- [ ] Update 3-5 test files
- [ ] Verify styling consistency
- [ ] Batch update remaining files

---

## FINAL VERIFICATION CHECKLIST

### Before Marking Complete:

**GA4 Configuration:**
- [ ] Real Measurement ID obtained from GA4 console
- [ ] Find/Replace executed on all 19 files
- [ ] Each file checked in browser → GA4 Real-Time dashboard shows page view
- [ ] Events are firing (button clicks, scroll depth, time on page)

**Content Completeness:**
- [ ] All 6 incomplete initiatives now have Implementation Plans
- [ ] All 6 initiatives have clear Budget Breakdowns
- [ ] All 3 strategic docs have Executive Overviews
- [ ] All anchor links are functional

**Quality Assurance:**
- [ ] All pages render correctly in Chrome, Firefox, Safari
- [ ] Mobile responsive on phone/tablet/desktop
- [ ] All links tested (no 404s)
- [ ] Accessibility check: WAVE or Lighthouse audit
- [ ] Performance check: Lighthouse score >90

**Documentation:**
- [ ] Mark THOROUGH_AUDIT_REPORT complete
- [ ] Update project status document
- [ ] Document lessons learned for future audits

---

## TIME TRACKING TEMPLATE

Copy and track actual time spent:

```
WEEK 1
Task 1.1 (GA4 Config):        [_] hours actual / 1-2 hours planned
Task 1.2a (CDL - verify):     [_] hours actual / 0.5 hours planned
Task 1.2b (Food Hub):         [_] hours actual / 2 hours planned
Task 1.2c (Golf Champ):       [_] hours actual / 2 hours planned
Task 1.2d (Golf Community):   [_] hours actual / 2 hours planned
Task 1.2e (Logistics):        [_] hours actual / 2 hours planned
Task 1.2f (Student Housing):  [_] hours actual / 2 hours planned
SUBTOTAL WEEK 1:              [_] hours actual / 13-17 hours planned

WEEK 2
Task 2.1 (Marina Budgets):    [_] hours actual / 3 hours planned
Task 2.2 (Doc Overviews):     [_] hours actual / 4-6 hours planned
Task 2.3 (Anchor Links):      [_] hours actual / 0.5 hours planned
Task 2.4 (CSS Consolidation): [_] hours actual / 6-8 hours planned (optional)
SUBTOTAL WEEK 2:              [_] hours actual / 18.5-24 hours planned

MONTH 2
Task 3.1 (Cleanup):           [_] hours actual / 0.25 hours planned
Task 3.2 (CSS Refactor):      [_] hours actual / 8-10 hours planned (optional)
SUBTOTAL MONTH 2:             [_] hours actual / 8.25-10.25 hours planned

TOTAL PROJECT:                [_] hours actual / 40-50 hours planned
```

---

## DEPENDENCIES & BLOCKERS

**Critical Path (Must Complete First):**
1. GA4 Configuration (blocks analytics)
2. Implementation Plans (blocks deployment review)

**Non-Blocking (Can defer post-launch):**
3. Budget breakdowns (helpful but not required)
4. Strategic overviews (helpful but not required)
5. CSS refactoring (maintenance, not user-facing)
6. Backup cleanup (maintenance, not user-facing)

---

## SIGN-OFF

**Project Manager Approval:** _______________  Date: ________

**QA Lead Verification:** _______________  Date: ________

**Deployment Authorization:** _______________  Date: ________

---

**Document Version:** 1.0  
**Last Updated:** June 29, 2026  
**Next Review:** July 6, 2026
