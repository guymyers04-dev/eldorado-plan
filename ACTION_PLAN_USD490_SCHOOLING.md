# Action Plan: Elevating USD 490, Schooling, and Circle District
**Priority:** HIGH  
**Date:** June 28, 2026

---

## Current State Analysis

### USD 490 Coverage (CURRENT)
**Current mentions:** 20+ references throughout website

**Existing content:**
- K-12 dual enrollment with Butler CC (line 388)
- School district statistics (2,133 students, 6 schools)
- 79% graduation rate vs 89% statewide
- Math proficiency 24% vs 31% statewide
- Local procurement preference policy (line 713)
- Partnership section (line 485)
- Demographics section dashboard (line 818)

**Strengths:**
- ✅ Statistics integrated into demographics
- ✅ Partnership framework identified
- ✅ Local procurement policy outlined
- ✅ Field trip destinations mentioned

**Weaknesses:**
- ❌ No dedicated USD 490 section
- ❌ Education not prioritized in top-level navigation
- ❌ K-12 pathway less visible than higher ed (Butler CC gets more attention)
- ❌ No specific improvement initiatives for USD 490

---

## CIRCLE DISTRICT Status

**Current Search Results:** No specific "Circle District" found in website

**Possible Interpretations:**
1. **Geographic Circle District** - A specific district around El Dorado School buildings?
2. **TIF Circle District** - A potential Tax Increment Financing district?
3. **Education Circle** - A cluster of school buildings/facilities?
4. **North Gateway District** - Currently called "North Gateway" (line 40, 221)

**ACTION NEEDED:** Clarify what "Circle District" refers to and how it should be featured

---

## PROPOSED ENHANCEMENTS

### Phase 1: IMMEDIATE (This Week)

#### 1. Create Dedicated "Education & Workforce" Section
**Location:** New section in index.html (reorganize existing education content)

**Structure:**
- Section header: "Education & Workforce Development Pipeline"
- Three-part strategy:
  1. **K-12 Excellence (USD 490)** — Pre-college foundations
  2. **Higher Education (Butler CC)** — Technical training
  3. **Workforce Housing** — Retention and recruitment

**Content Outline:**
```html
<section id="education-workforce-excellence">
  <h2>Education & Workforce Development — Complete Pipeline</h2>
  
  <!-- Part 1: USD 490 -->
  <div id="usd-490-initiative">
    <h3>Part 1: K-12 Foundation Excellence (USD 490)</h3>
    <p>USD 490 El Dorado serves 2,133 students across 6 schools...</p>
    
    <!-- Challenge Statement -->
    <!-- Solutions Grid -->
    <!-- Investment Requirements -->
  </div>
  
  <!-- Part 2: Butler CC -->
  <!-- Part 3: Workforce Housing -->
</section>
```

#### 2. Expand USD 490 Statistics Dashboard
**Current Location:** Demographics section (line 818)

**Enhancement:**
- Add interactive chart showing USD 490 vs state vs regional averages
- Show graduation rate trend over 5 years
- Highlight proficiency in key subjects
- Show college-going rate from USD 490

#### 3. Create USD 490 Improvement Strategy Card Grid
**New Content:**

Six strategic initiatives for USD 490 excellence:

1. **Pre-K Expansion**
   - Target: All 4-year-olds in El Dorado
   - Current: Limited availability
   - Investment: $1-2M for facility + staff
   - Impact: Early intervention on kindergarten readiness

2. **Math & Science Pipeline**
   - Problem: 24% math proficiency (vs 31% state avg)
   - Solution: Butler CC dual enrollment in STEM
   - Investment: $500K for curriculum alignment
   - Timeline: 2025-2028

3. **Literacy Intensive Program**
   - Reading proficiency: 32% (target 95%+)
   - Summer reading camps
   - Family literacy nights
   - Investment: $400K annually

4. **CTE (Career & Technical Education) Expansion**
   - Build on existing CTE programs
   - NG Products partnership (electronics, welding)
   - HF Sinclair internships (refinery operations)
   - SBA Hospital clinical rotations
   - Investment: $1.5M for equipment/labs

5. **Student Housing & Stability**
   - Address housing instability (connects to residential plan)
   - Emergency housing fund for families in crisis
   - Youth homelessness prevention
   - Investment: $2M over 5 years

6. **Parental Engagement & Community**
   - Monthly community learning nights
   - Employer-education partnerships
   - Alumni mentorship program
   - Investment: $300K annually

---

### Phase 2: THIS MONTH

#### 4. Add USD 490 Collapsible Sections
**Similar to Why Act Now approach:**

Collapsible items showing:
- Math proficiency gap and solutions
- Graduation rate challenges
- Career pathways from high school
- College-going rates

#### 5. Create "Circle District" If Geographic/Strategic
**If Circle District is a real entity:**
- Add dedicated description
- Show on interactive map
- List facilities/resources in district
- Explain role in Vision 2040

**If not existing but conceptual:**
- Define as "Education Cluster District"
- Map showing all K-12 schools + Butler CC
- Resources/facilities in and around district
- Transportation/accessibility

#### 6. Add School District Testimonials/Case Studies
- Superintendent vision statement
- Teacher success stories
- Student achievement highlights
- Parent/family perspectives

---

### Phase 3: NEXT MONTH

#### 7. Create "Education Achievement Dashboard"
**Interactive metrics:**
- Graduation rate trend (2015-2025)
- Subject proficiency by grade level
- College enrollment tracking
- Career placement rates
- Wage growth by degree type

#### 8. Build "Education Employment Pipeline Map"
**Visual flow:**
- K-12 pipeline flow
- Butler CC degree pathways
- Local employer connections
- Wage data by career path

#### 9. Develop K-12 Parent/Student Resource Center
- School calendar and schedules
- Enrollment information
- Curriculum highlights
- Extracurriculars & activities
- College preparation resources

---

## NAVIGATION UPDATES NEEDED

### Current Education Navigation
**Location:** "People" dropdown (line 70-75)
```html
<div class="nav-dropdown" role="menu">
  <a href="#education">Education & Workforce</a>
  <a href="#workforce-childcare">Childcare & Housing Stability</a>
  <a href="#public-safety">Public Safety</a>
</div>
```

### Proposed Updates
```html
<div class="nav-dropdown" role="menu">
  <div class="nav-dropdown-label">People & Opportunity</div>
  <a href="#education-workforce-excellence">Education & Workforce Pipeline</a>
  
  <div class="nav-dropdown-sep"></div>
  <div class="nav-dropdown-label">K-12 Excellence</div>
  <a href="#usd-490-initiative">USD 490 Strategy</a>
  <a href="#circle-district">Circle District [IF APPLICABLE]</a>
  
  <div class="nav-dropdown-sep"></div>
  <div class="nav-dropdown-label">Support Services</div>
  <a href="#workforce-childcare">Childcare & Housing Stability</a>
  <a href="#public-safety">Public Safety</a>
</div>
```

---

## CONTENT PLACEMENT STRATEGY

### Visibility Hierarchy (Current vs Proposed)

**CURRENT:**
1. Economy (highest priority in nav)
2. Place (recreation/tourism)
3. People (education third)
4. Build
5. Finance

**PROPOSED:**
1. Economy (keep high - economic development)
2. **PEOPLE (elevate education to second priority)**
3. Place (recreation)
4. Build
5. Finance

**Rationale:** Education is foundational to all other goals (workforce development, population retention, quality of life)

---

## Key Messages to Emphasize

### "USD 490 is the Foundation"
- K-12 excellence drives workforce availability
- Community pride/stability metric
- Attracts young families
- Feeds Butler CC pipeline

### "Education Solves Multiple Problems"
- Graduation rate → workforce readiness
- Early childhood → reduce achievement gaps
- CTE → local employer pipeline
- College going → wage growth for families

### "Investment Multiplier"
- $1 spent on pre-K = $7-8 return (economic research)
- Every kindergarten-ready child saves $5K+ in special ed costs
- Every graduate = $250K+ lifetime earning increase for community

---

## Questions for Clarification

Before full implementation, please clarify:

1. **What is "Circle District"?**
   - Geographic circle around school locations?
   - Tax Increment Financing district?
   - Administrative/organizational entity?
   - New proposed district?

2. **How much prominence should USD 490 have?**
   - Equal to Butler CC?
   - Lead section in Education?
   - Separate major section?

3. **What specific USD 490 initiatives exist already?**
   - Strategic improvement plan?
   - Board goals/objectives?
   - Recent accomplishments to highlight?

4. **Should schooling be elevated to a "pillar"?**
   - Currently: In "People" section
   - Proposed: Separate major section
   - Or: Lead focus in Economy section (workforce pipeline)?

---

## Timeline & Effort Estimate

| Phase | Tasks | Timeline | Effort |
|-------|-------|----------|--------|
| Phase 1 | USD 490 section, dashboard, strategy cards | This week | 8-12 hours |
| Phase 2 | Collapsibles, Circle District, testimonials | This month | 6-8 hours |
| Phase 3 | Dashboards, maps, resource center | Next month | 12-16 hours |

**Total Effort:** 26-36 hours

---

## Success Metrics

After implementation, measure:

1. **Navigation Metrics**
   - Click-through to education sections
   - Time spent in education content
   - Bounce rate on USD 490 content

2. **Stakeholder Engagement**
   - USD 490 administrator feedback
   - Parent/family visits
   - Student visits from high school
   - Employer partnerships initiated

3. **Content Effectiveness**
   - Share rate on social media
   - Links in local media
   - Inquiry volume from education stakeholders
   - Recruitment impact (families relocating)

---

## Dependencies & Coordination

**Needed from USD 490:**
- Strategic improvement plan documents
- Superintendent quote/vision
- Recent achievement data
- Teacher/student testimonials
- Career pathway information
- Enrollment projections

**Needed from City/El Dorado Inc:**
- Circle District definition/clarification
- Strategic education partnerships
- Planned investments
- Timeline/roadmap

**External Resources:**
- Kansas Department of Education data
- USD 490 board meeting minutes
- Local media education coverage
- National pre-K/education research

---

## Next Steps

1. **THIS WEEK:**
   - [ ] Clarify "Circle District" definition
   - [ ] Contact USD 490 superintendent for vision/data
   - [ ] Review USD 490 strategic plan (if available)
   - [ ] Outline draft education section content

2. **NEXT WEEK:**
   - [ ] Create draft "Education & Workforce Excellence" section
   - [ ] Add USD 490 strategy cards to grid
   - [ ] Update navigation structure
   - [ ] Add education statistics dashboard

3. **BY END OF MONTH:**
   - [ ] Launch Phase 1 education enhancements
   - [ ] Gather testimonials/case studies
   - [ ] Plan Phase 2 collapsible sections
   - [ ] Design Circle District content (if applicable)

---

**Status:** ACTION PLAN CREATED  
**Next Action:** Clarify Circle District definition + Contact USD 490

