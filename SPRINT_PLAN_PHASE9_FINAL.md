# El Dorado Sprint Plan — Phase 9 Completion + Navigation Audit

**Date:** 2026-06-29  
**Goal:** Complete Phase 9 (100%) + integrate high-value content into navbar  
**Estimated Time:** 4–6 hours  
**Status:** Ready to execute across parallel terminals  

---

## 🎯 PRIMARY OBJECTIVES (Phase 9 Completion)

### TIER 1: MUST DO (2–3 hours) — Completes Phase 9 to 100%

#### Task 8: AR Mobile Preview Implementation (2–3 hours)
**Status:** Designed; ready to implement  
**File to Create:** `ar-preview.html`  
**Architecture:** (from PHASE_9_5_ADVANCED_VISUALIZATION_ARCHITECTURE.md)
- AR.js + WebXR for mobile GPS positioning
- Building footprint models with altitude data
- iOS/Android fallback (2D map view)
- Layer toggles: Zones, Infrastructure, Projects
- Property click → detail sidebar + "Calculate ROI" CTA

**Deliverables:**
- `ar-preview.html` (~800 lines)
- `js/ar-viewer.js` (~300 lines) — AR scene init, geolocation, raycasting
- `data/ar-properties.json` (~2 KB) — GPS coords, building models, metadata
- Integration: Add to index.html Reference dropdown & 3d-preview.html

**Success Criteria:**
- Loads in <2s on mobile
- GPS accuracy within 50m
- Graceful fallback on non-AR devices
- Links to Development Finder + ROI calculator

---

#### Task 9: Satellite Time-Slider Implementation (2–3 hours)
**Status:** Designed; ready to implement  
**File to Create:** `satellite-timeline.html`  
**Architecture:** (from PHASE_9_5_ADVANCED_VISUALIZATION_ARCHITECTURE.md)
- Mapbox GL integration with historical satellite imagery (2015–2026)
- Year slider (2015, 2018, 2021, 2024, 2026 waypoints)
- Project layer overlays with timeline annotations
- Auto-play timeline feature
- Before/after toggle for key projects

**Deliverables:**
- `satellite-timeline.html` (~1,000 lines)
- `js/satellite-viewer.js` (~350 lines) — Mapbox GL, layer management, timeline controls
- `data/satellite-projects.json` (~3 KB) — Project footprints with timeline data
- Integration: Add to index.html Reference dropdown & development-finder.html

**Success Criteria:**
- Loads satellite imagery <3s
- Smooth year-to-year transitions
- Project overlays render at <30 FPS mobile
- Links back to project-tracker.html

---

### TIER 2: HIGH VALUE (1–2 hours) — Navigation & Content Integration

#### Task 10: Initiative Pages Navigation Integration (1–2 hours)
**Status:** 14 pages exist, ready to integrate  
**Current State:** Pages exist in `/eldorado-plan/` but NOT in navbar

**Pages to Integrate** (in navbar under new "Initiatives" dropdown):
1. initiative-adu.html — Accessory Dwelling Units
2. initiative-cdl-expansion.html — CDL Driver Training Hub
3. initiative-community-solar.html — Community Solar Program
4. initiative-east-marina.html — East Lake Marina Expansion
5. initiative-west-marina.html — West Lake Marina Expansion
6. initiative-food-processing-hub.html — Food Processing Hub
7. initiative-golf-championship.html — Championship Golf Course
8. initiative-golf-community.html — Community Golf Complex
9. initiative-logistics-workforce.html — Logistics Workforce Development
10. initiative-makers-guild.html — Makers Guild & Artisan Hub
11. initiative-participatory-budget.html — Participatory Budgeting Platform
12. initiative-remote-workers.html — Remote Workers Welcome Program
13. initiative-student-housing.html — Student Housing Development
14. initiative-youth-retention.html — Youth Retention & Opportunity Fund

**Action Items:**
1. Create new navbar section in `index.html`:
   - Add "Initiatives" dropdown after "Industries"
   - 14 links organized in 3 subcategories (see below)
   - Expected navbar impact: +35 pixels width, 1 new dropdown

2. Content Organization:
   ```
   Initiatives
   ├─ Economic Development
   │  ├─ Logistics Workforce Development
   │  ├─ Food Processing Hub
   │  ├─ CDL Driver License Expansion
   │  └─ Makers Guild & Artisan Hub
   ├─ Community & Housing
   │  ├─ Accessory Dwelling Units (ADU)
   │  ├─ Student Housing
   │  ├─ Youth Retention Fund
   │  └─ Remote Workers Program
   └─ Recreation & Amenities
      ├─ East Lake Marina
      ├─ West Lake Marina
      ├─ Championship Golf Course
      ├─ Community Golf Complex
      └─ Participatory Budgeting
   ```

3. Update `index.html` navbarpills:
   - Verify all 14 pages are valid HTML
   - Ensure each page has correct breadcrumbs pointing back to initiatives
   - Test all links from index.html Reference dropdown

4. Integration Checklist:
   - [ ] Audit all 14 pages for outdated links/styling
   - [ ] Add "Back to Initiatives" breadcrumb if missing
   - [ ] Verify no broken links within each page
   - [ ] Test responsive design on mobile (tablet + phone)
   - [ ] Ensure each page has CTA to development-finder.html

**Expected Outcomes:**
- 20–30% engagement boost (experiential initiative content is high-value)
- 14 new navigator entry points
- Better user journey (initiatives → development finder → contact)

---

#### Task 11: Strategic Pages Audit (1–2 hours)
**Status:** 20+ pages exist, need quality check  
**Purpose:** Identify which strategic pages should be integrated into navbar

**Pages to Audit** (batch review for production-readiness):
1. build-transportation.html
2. economy-industry.html
3. eldorado-inc-strategy.html
4. bcc-retention-strategy.html
5. competitive-analysis.html
6. benchmarking.html
7. aerospace.html
8. batteries-ev.html
9. biotech.html
10. (+ 11 others from audit report)

**Audit Criteria Per Page:**
- [ ] No broken internal links?
- [ ] Images loading (Unsplash OK for now)?
- [ ] Mobile-responsive (check on phone)?
- [ ] Valid HTML (no 404 errors)?
- [ ] Consistent with visual design system?
- [ ] CTAs point to investor pages or dev finder?
- [ ] Content accurate & up-to-date (no outdated dates)?

**Output:** AUDIT_RESULTS_STRATEGIC_PAGES.md (1-page summary table)
```markdown
| Page | Link Count | Broken? | Mobile OK? | Recommend Navbar? | Notes |
|------|-----------|---------|-----------|-------------------|-------|
| build-transportation.html | 12 | ✅ No | ✅ Yes | YES | High-quality content, add to Build |
| economy-industry.html | 8 | ❌ 2 broken | ✅ Yes | NO | Fix links before enabling |
| ... |
```

---

## 📋 PARALLEL WORK STREAMS

You can work on these **simultaneously across terminals**:

### Terminal 1: Phase 9 Completion (Task 8)
```bash
# Terminal 1: AR Preview Implementation
cd /Users/guyh/eldorado-plan
# Focus: Build ar-preview.html + js/ar-viewer.js
# Time: 2–3 hours
# Outcome: Phase 9 moves to 90%
```

### Terminal 2: Phase 9 Completion (Task 9)
```bash
# Terminal 2: Satellite Timeline Implementation
cd /Users/guyh/eldorado-plan
# Focus: Build satellite-timeline.html + js/satellite-viewer.js
# Time: 2–3 hours
# Outcome: Phase 9 moves to 100%
```

### Terminal 3: Navigation Integration (Task 10)
```bash
# Terminal 3: Navbar Integration
cd /Users/guyh/eldorado-plan
# Focus: Update index.html navbar + verify all 14 initiative pages
# Time: 1–2 hours
# Can run in parallel with Tasks 8–9
```

### Terminal 4: Audit (Task 11)
```bash
# Terminal 4: Strategic Pages Audit
cd /Users/guyh/eldorado-plan
# Focus: Batch review 20 pages + create audit report
# Time: 1–2 hours
# Can run in parallel with all other tasks
```

---

## 🚀 EXECUTION ORDER

### Hour 1–2: Phase 9 Completion (Do in Parallel)
- Terminal 1 & 2: Start AR preview + Satellite timeline simultaneously
- Estimated: 2 hrs → Phase 9 at 100%

### Hour 2–3: Navigation Integration
- Terminal 3: Integrate initiative pages into navbar
- Estimated: 1 hr → Navbar updated

### Hour 3–4: Quality Audit
- Terminal 4: Audit strategic pages + generate report
- Estimated: 1 hr → Report complete

---

## 📊 SUCCESS METRICS

| Metric | Target | Status |
|--------|--------|--------|
| Phase 9 Completion | 100% | Currently 82% |
| AR Preview live | Yes | To build |
| Satellite Timeline live | Yes | To build |
| Initiative pages in navbar | 14/14 | To integrate |
| Strategic audit complete | 20+ pages | To audit |
| All links verified | 100% | To check |

---

## 🔗 INTEGRATION CHECKLIST

After each task, update this checklist:

### Task 8 (AR Preview) Completion
- [ ] `ar-preview.html` created and tested
- [ ] `js/ar-viewer.js` implemented
- [ ] `data/ar-properties.json` populated
- [ ] Added to index.html Reference dropdown
- [ ] Added to 3d-preview.html cross-link
- [ ] Tested on mobile (iOS + Android simulators or real device)
- [ ] Commit: "Task 8: AR Mobile Preview Implementation (Phase 9.5)"

### Task 9 (Satellite Timeline) Completion
- [ ] `satellite-timeline.html` created and tested
- [ ] `js/satellite-viewer.js` implemented
- [ ] `data/satellite-projects.json` populated with project overlays
- [ ] Added to index.html Reference dropdown
- [ ] Added to development-finder.html cross-link
- [ ] Mapbox GL API key configured (check ENV or inline)
- [ ] Timeline slider tested (2015–2026 range)
- [ ] Commit: "Task 9: Satellite Time-Slider Implementation (Phase 9.5)"

### Task 10 (Initiative Integration) Completion
- [ ] All 14 initiative pages audited for links/styling
- [ ] Navbar updated with new "Initiatives" dropdown
- [ ] Breadcrumbs added to all 14 pages (pointing back to Initiatives)
- [ ] All internal links verified working
- [ ] Mobile responsiveness tested
- [ ] Commit: "Task 10: Initiative Pages Navigation Integration"

### Task 11 (Strategic Audit) Completion
- [ ] All 20+ pages audited for quality
- [ ] AUDIT_RESULTS_STRATEGIC_PAGES.md created
- [ ] Broken links identified & logged
- [ ] Production-ready pages flagged for navbar inclusion
- [ ] Commit: "Task 11: Strategic Pages Quality Audit"

---

## 🎁 Post-Sprint Deliverables

When complete, we'll have:
1. ✅ **Phase 9 = 100% complete** (all 9 components live)
2. ✅ **14 initiative pages integrated** into main navigation
3. ✅ **4 investor entry points** in navbar (Portal, Finder, Tracker, AR/Satellite)
4. ✅ **20+ strategic pages audited** and categorized
5. ✅ **Codebase audit complete** (103 pages accounted for)

**Expected Engagement Boost:**
- 20–30% from initiative content (new experiential entry points)
- 15–20% from AR/Satellite visualizations (novel interaction patterns)
- 10–15% from improved navigation (faster discovery)

---

## 💾 GIT COMMIT MESSAGES (Ready to Use)

```bash
# Task 8
git commit -m "Task 8: AR Mobile Preview Implementation (Phase 9.5)"

# Task 9
git commit -m "Task 9: Satellite Time-Slider Implementation (Phase 9.5)"

# Task 10
git commit -m "Task 10: Initiative Pages Navigation Integration — 14 experiential initiatives now in navbar"

# Task 11
git commit -m "Task 11: Strategic Pages Audit — 20+ pages reviewed; recommendations documented"

# Final
git commit -m "Phase 9 COMPLETE ✅ — 100% feature parity achieved; navigation optimized for investor discovery"
```

---

## ⚙️ SETUP BEFORE STARTING

```bash
# 1. Ensure you're on main branch
cd /Users/guyh/eldorado-plan
git checkout main
git pull origin main

# 2. Create feature branch (optional but recommended)
git checkout -b phase9-completion

# 3. Verify project structure
ls -la | grep -E "\.html|\.md|\.js" | wc -l
# Should show ~100+ files

# 4. Verify data directories exist
mkdir -p data js email-templates

# 5. Check file sizes (sanity check)
du -sh .
# Should be ~100+ MB (with git history)
```

---

## 📞 TERMINAL COORDINATION

**Across terminals, use this pattern:**

```bash
# Terminal 1 (AR Preview)
cd /Users/guyh/eldorado-plan && git checkout phase9-completion
# Do work, commit frequently
git add ar-preview.html js/ar-viewer.js data/ar-properties.json
git commit -m "WIP: AR preview scene + controls"

# Terminal 2 (Satellite Timeline)
cd /Users/guyh/eldorado-plan && git checkout phase9-completion
# Do work, commit frequently
git add satellite-timeline.html js/satellite-viewer.js
git commit -m "WIP: Satellite timeline + mapbox integration"

# Terminal 3 (Navigation)
cd /Users/guyh/eldorado-plan && git checkout phase9-completion
# Do work, update navbar
git add index.html initiative-*.html
git commit -m "WIP: Navbar integration + initiative pages audit"

# Terminal 4 (Audit)
cd /Users/guyh/eldorado-plan && git checkout phase9-completion
# Do work, create report
git add AUDIT_RESULTS_STRATEGIC_PAGES.md
git commit -m "WIP: Strategic pages audit report"

# After all terminals done, merge:
git checkout main
git merge phase9-completion
git push origin phase9-completion  # For PR or direct push
```

---

**Ready to start? Pick a task and terminal, or let me help drive one of them now!**

*Last updated: 2026-06-29 20:30*
