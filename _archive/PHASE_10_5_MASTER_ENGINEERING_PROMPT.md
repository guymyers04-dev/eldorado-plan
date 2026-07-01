# El Dorado Vision 2040 — Phase 10.5 Master Engineering Prompt
**Date:** June 30, 2026 | **Status:** READY TO EXECUTE | **Effort:** 50-60 hours over 4-6 weeks

---

## 🎯 MISSION

Transform El Dorado Vision 2040 from **inspirational strategy** → **actionable city plan** by closing execution clarity gaps. City leadership, FDI prospects, and community need specific answers:
- **Permitting Timeline:** How long from LOI → first equipment delivery?
- **Workforce Readiness:** Can USD 490 + Butler CC train 1,000+ workers?
- **Funding Reality:** Are $1-2M municipal infrastructure commitments realistic?
- **Implementation Calendar:** What happens Q1 2026 → Q4 2035?

**Success Metric:** Vision 2040 moves from "aspirational" to "city council approved + resourced"

---

## 📊 SCOPE: TWO EXECUTION TRANCHES

### TRANCHE 1: QUICK WINS (Week 1, ~7 Hours)
**Goal:** Prove momentum is real. Immediate visibility = community/council confidence.

| Task | Effort | Owner | Deliverable |
|------|--------|-------|-------------|
| Climate Resilience Section | 2 hrs | Content | `/place-beautification.html` updated with climate goals, carbon sequestration data, emissions baseline |
| AMAZONE Case Study | 3 hrs | Content + BD | New page: `/case-study-amazone.html` with job count, wages, supplier partnerships, tax impact, lessons |
| 100-Day Quick Wins Page | 2 hrs | Communications | New page: `/quick-wins-100-days.html` showing Q3-Q4 2026 initiatives with timeline, responsible parties, visible progress |

**Tranche 1 Outcomes:**
- 3 new pages live
- 15-20% increase in perceived momentum
- Proof that Vision 2040 is executing, not just planning
- Ready for July 1 city council presentation

---

### TRANCHE 2: EXECUTION CLARITY (Weeks 2-5, ~40-50 Hours)

#### **TASK 1: PERMITTING ROADMAP** (3-4 hours)
**Blocker:** FDI prospects ask "How long to occupancy?" — no answer currently.

**Deliverable:** New page `/permitting-roadmap.html`

**Content Structure:**
```
HERO: "From LOI to Operational: Clear Permitting Timeline"

SECTION 1: Overall Timeline (Standard + Fast-Track)
├─ Standard Pathway (18-24 months LOI → occupancy)
│  ├─ Phase 1: Entitlements (4-6 months)
│  │  ├─ Site plan review
│  │  ├─ Zoning compliance
│  │  ├─ Environmental assessment
│  │  └─ City council approval
│  ├─ Phase 2: Design & Engineering (4-6 months)
│  │  ├─ Detailed engineering
│  │  ├─ Utility coordination
│  │  └─ Final design approval
│  ├─ Phase 3: Permitting (2-3 months)
│  │  ├─ Building permits
│  │  ├─ Utility permits
│  │  └─ Environmental permits
│  └─ Phase 4: Construction (8-12 months)
│     ├─ Site prep & utilities
│     └─ Building construction
│
└─ Fast-Track Pathway (12-18 months with pre-approval)
   ├─ Pre-approved zoning (saves 2-3 months)
   ├─ Pre-coordinated utilities (saves 1-2 months)
   └─ Parallel permitting (saves 2-3 months)

SECTION 2: Approval Gates & Responsible Parties
├─ City Manager sign-off (30 days)
├─ Planning Commission (45 days)
├─ City Council vote (30 days)
├─ Engineering coordination (60 days)
└─ Utility extensions (90 days)

SECTION 3: Typical Timeline by Development Type
├─ Manufacturing facility: 18-22 months
├─ Data center: 14-18 months (less site work)
├─ Distribution hub: 16-20 months (intensive utilities)
├─ Mixed-use residential: 20-24 months (more review)

SECTION 4: Risk Factors & Mitigation
├─ Labor availability (mitigation: pre-coordinate with contractors)
├─ Utility capacity (mitigation: upgrades planned for Phase 1 2026)
├─ Weather delays (mitigation: 3-month contingency built in)
├─ Market downturn (mitigation: contingency triggers in master plan)
```

**Key Data to Include:**
- City Engineering contact & phone
- Planning Commission typical review cycle (45 days)
- City Council meeting frequency (monthly)
- Utility company coordination timeline (90 days)
- Environmental permit standard timeline (120 days)

**Stakeholder Coordination Required:**
- **Interview:** City Engineer (30 min) — Current permit queue, typical review times, fast-track criteria
- **Interview:** Planning Director (30 min) — Planning Commission meeting schedule, design review process
- **Research:** Typical Kansas manufacturing permit timelines (KDOC database)

**HTML/UX Patterns:**
- Hero section with large timeline graphic (Mermaid chart or SVG timeline)
- Color-coded approval gates (green = approved, yellow = in progress, red = potential delays)
- Interactive tabs: Standard vs. Fast-Track vs. By-Type
- Download: PDF checklist "Permitting Checklist for Industrial Prospects"
- CTA: "Schedule pre-development meeting with City Engineer"

**Git Commit:**
```
feat(permitting): Add permitting roadmap for industrial prospects

- 18-24 month standard timeline with fast-track option (12-18 months)
- City approval gates documented with responsible parties
- Risk factors & mitigation strategies included
- Download checklist for prospect confidence
```

---

#### **TASK 2: WORKFORCE PIPELINE STRATEGY** (4-5 hours)
**Blocker:** Housing strategy says "support 1,000+ jobs" but no training partnership detail → FDI worries about labor availability.

**Deliverable:** New page `/workforce-pipeline-strategy.html`

**Content Structure:**
```
HERO: "1,000+ Jobs Need Trained Workers — Here's How El Dorado Delivers"

SECTION 1: Labor Market Overview
├─ Regional Labor Shed
│  ├─ Total available workers within 50-mile radius: 50,000
│  ├─ Current unemployment rate: [2024 data]
│  ├─ Underemployment rate: [2024 data]
│  └─ Migration patterns: [county trends]
│
├─ Current Training Capacity
│  ├─ USD 490 (K-12 + career pathways)
│  │  ├─ CTE enrollment: XXX students
│  │  ├─ Precision ag pathway: 50 students/year capacity
│  │  ├─ Manufacturing pathway: 75 students/year capacity
│  │  ├─ Health sciences pathway: 40 students/year capacity
│  │  └─ Expansion plans: [new facilities by XXXX]
│  │
│  └─ Butler Community College
│     ├─ Manufacturing technician program: 120 seats/year
│     ├─ Welding certification: 80 seats/year
│     ├─ CNC machining: 60 seats/year
│     ├─ HVAC technician: 40 seats/year
│     ├─ Health sciences: 150 seats/year
│     └─ Planned expansion: [Phase 2 details]
│
└─ Private Training Partners
   ├─ Precision Ag Cooperative (on-site training)
   ├─ Manufacturing Workforce Board (apprenticeships)
   └─ Tech Boot Camp (online programming, data skills)

SECTION 2: Job Skills Pipeline by Industry
├─ Precision Agriculture (400 target jobs by 2035)
│  ├─ Entry-level skills: Equipment operation, basic GIS, data entry
│  ├─ Mid-level skills: Equipment maintenance, GIS analysis, technology troubleshooting
│  ├─ Advanced skills: Data science, precision ag analytics, supply chain
│  ├─ Training pathway: USD 490 ag science pathway (3 years) → Butler CC precision ag tech (6 months) → Precision Ag Coop apprenticeship (12 months)
│  ├─ Current capacity: 50 K-12 + 40 college seats/year = 90 completions/year
│  ├─ Needed by 2035: ~30-40 workers/year (pipeline has 2x capacity)
│  └─ Status: ✅ READY
│
├─ Advanced Manufacturing (300 target jobs)
│  ├─ Entry-level: CNC operation, welding, assembly, inspection
│  ├─ Mid-level: CNC programming, welding inspection, quality control
│  ├─ Advanced: Process engineering, manufacturing engineering
│  ├─ Training pathway: USD 490 manufacturing pathway (3 yrs) → Butler CC welding/CNC (6 mo) → On-site apprenticeship (12 mo)
│  ├─ Current capacity: 75 K-12 + 140 college seats/year = 215 completions/year
│  ├─ Needed by 2035: ~20-25 workers/year
│  └─ Status: ✅ READY (excess capacity)
│
├─ Logistics & Distribution (250 target jobs)
│  ├─ Entry-level: CDL driving, warehouse operation, inventory management
│  ├─ Mid-level: Fleet management, supply chain coordination, safety management
│  ├─ Advanced: Logistics management, supply chain analytics
│  ├─ Training pathway: USD 490 transportation pathway (2 yrs) → Private CDL school (6 weeks) → On-site training (4 weeks)
│  ├─ Current capacity: 40 K-12 + 80 CDL certifications/year = 120 completions/year
│  ├─ Needed by 2035: ~18 workers/year
│  └─ Status: ✅ READY (excess capacity)
│
└─ Health & Wellness (200 target jobs)
   ├─ Entry-level: CNA, patient care, administrative support
   ├─ Mid-level: Nursing, respiratory therapy, health informatics
   ├─ Advanced: Nursing leadership, health administration
   ├─ Training pathway: USD 490 health sciences (3 yrs) → Butler CC nursing/allied health (2 yrs) → SBA Hospital residency (12 mo)
   ├─ Current capacity: 40 K-12 + 150 college seats/year = 190 completions/year
   ├─ Needed by 2035: ~15 workers/year
   └─ Status: ✅ READY (aligned with hospital expansion)

SECTION 3: Training Partnerships & Commitments
├─ USD 490 Partnership
│  ├─ Commitment: Expand CTE capacity +50% by 2030 (new facility, 3 instructors)
│  ├─ Funding: [$X from state, $Y municipal, $Z federal]
│  ├─ Timeline: Facility opens Fall 2028
│  └─ Superintendent approval: [signed letter of commitment]
│
├─ Butler CC Partnership
│  ├─ Commitment: Add 2 new manufacturing/logistics programs by 2027
│  ├─ Funding: [$X from state, $Y workforce grant, $Z college]
│  ├─ Timeline: Programs launch Spring 2027
│  └─ President approval: [signed letter of commitment]
│
├─ Employer Pre-Hiring Programs
│  ├─ AMAZONE: Hires 40-50 USD 490 graduates/year (ongoing)
│  ├─ Precision Ag Coop: 20-30 internships (USD 490 + Butler CC)
│  ├─ Logistics Board: 15-20 CDL-certified hires/year
│  └─ SBA Hospital: 30-40 nursing/CNA hires/year
│
└─ Adult Retraining (for displaced workers or career changers)
   ├─ Butler CC continuing education (fast-track 6-week programs)
   ├─ WIOA funding (federal dislocated worker program)
   ├─ Manufacturing Workforce Board apprenticeships (earn-while-you-learn)
   └─ Online programs (data skills, coding, business)

SECTION 4: Wage & Career Advancement Framework
├─ Entry-Level ($28-38K)
│  ├─ Equipment operator, warehouse associate, CNA, assembly technician
│  ├─ Training time: 6-12 months
│  └─ Advancement path: 2-3 years → mid-level
│
├─ Mid-Level ($42-58K)
│  ├─ CNC programmer, welding inspector, logistics coordinator, nurse
│  ├─ Training time: 6-18 months
│  └─ Advancement path: 3-5 years → advanced
│
└─ Advanced ($65-85K+)
   ├─ Manufacturing engineer, supply chain manager, nursing leadership
   ├─ Training time: 18-24 months (degree/certification)
   └─ Advancement: Leadership roles, consulting, entrepreneurship

SECTION 5: Guarantee & Accountability
├─ Pipeline Guarantee: "We commit to train 50+ workers/year per priority industry"
├─ Quality Metric: 90%+ job placement rate within 6 months of completion
├─ Wage Metric: Average starting wage ≥ $32K (above county average)
├─ Employer Satisfaction: 95%+ employer satisfaction with hire quality
└─ Annual Reporting: July 1 each year, public dashboard on eldorado2040.com

SECTION 6: Risk Mitigation
├─ Risk: Training pipeline slower than job growth
│  └─ Mitigation: Pre-commitment with USD 490 + Butler CC for 50% capacity expansion by 2028
│
├─ Risk: Workers migrate to Wichita for higher wages
│  └─ Mitigation: Employer commitment to match regional wage + mentorship programs
│
├─ Risk: Technology changes outpace training curriculum
│  └─ Mitigation: Annual curriculum review with employers, equipment donations from companies
│
└─ Risk: Adult retraining underutilized
   └─ Mitigation: Marketing blitz + employer partnerships for recruitment
```

**Key Data to Include:**
- Current USD 490 CTE enrollment by pathway (interview: USD 490 CTE Director, 30 min)
- Butler CC program capacity & expansion plans (interview: VP Academic Affairs, 30 min)
- AMAZONE hiring data: how many graduates/year do they hire? (email to AMAZONE HR, 15 min)
- CDL training school locations & capacity (research: KS Department of Transportation)
- Wage data by job type (BLS data + regional employer surveys)

**Stakeholder Coordination Required:**
- **Interview:** USD 490 Superintendent (30 min) — K-12 CTE capacity, expansion timeline, funding needs
- **Interview:** USD 490 CTE Director (20 min) — Current enrollment by pathway, fill rates, equipment needs
- **Interview:** Butler CC President (30 min) — College program capacity, expansion plans, partnership opportunities
- **Interview:** Butler CC Dean of Applied Sciences (20 min) — Manufacturing/logistics program details
- **Email:** AMAZONE HR (15 min) — Annual hiring volume, skills needed, training partnerships
- **Research:** Manufacturing Workforce Board (1 hr) — Apprenticeship data, capacity, Kansas programs

**HTML/UX Patterns:**
- Hero: Large infographic "1,000 Jobs Need Trained Workers — Here's the Plan"
- Section 2: Interactive cards per industry (click to expand)
  - Job counts → Skills required → Training pathway → Timeline → Current capacity
  - Visual pipeline: HS → College → Apprenticeship → Career progression
- Section 3: Partner logos + commitment letters (embedded PDFs)
- Section 4: Wage progression chart (entry/mid/advanced by industry)
- Section 5: Dynamic dashboard showing "Graduates Trained This Year" (updated annually)
- CTAs:
  - "View Current Job Openings" (linked to jobs board)
  - "Enroll in USD 490 CTE" (external link)
  - "Apply to Butler CC Programs" (external link)
  - "Schedule Employer Meeting" (contact form)

**Git Commit:**
```
feat(workforce): Add workforce pipeline strategy with USD 490 + Butler CC partnership

- 1,000+ job capacity mapped to training partnerships
- 4 priority industries with skills pipelines documented
- Current capacity analysis: all industries have 2x+ training capacity
- Wage progression & career ladder framework
- Annual accountability dashboard (graduates trained, job placement rate)
- Stakeholder commitment letters embedded
```

---

#### **TASK 3: HOUSING FUNDING ROADMAP** (3-4 hours)
**Blocker:** Housing strategy lists funding sources generically; city council needs reality-check before committing municipal dollars.

**Deliverable:** New page `/housing-funding-roadmap.html` + Excel workbook `/housing-funding-model.xlsx`

**Content Structure:**
```
HERO: "How We Fund 200-300 New Housing Units — A Realistic Funding Model"

SECTION 1: Funding Requirement Analysis
├─ Phase 1 Cost Breakdown (200-300 units)
│  ├─ Land acquisition: $3-4M (170 acres @ $18-22K/acre)
│  ├─ Infrastructure (roads, utilities, parks): $5-8M
│  │  ├─ Water/sewer extension: $1.5-2M
│  │  ├─ Road construction: $2-3M
│  │  ├─ Stormwater management: $800K-1M
│  │  └─ Parks/recreation: $500K-1M
│  ├─ Soft costs (engineering, design, permitting): $800K-1.2M
│  └─ Total municipal infrastructure requirement: $5-8M
│
├─ Private Developer Cost (building 200-300 units)
│  ├─ Construction cost per unit: $165-200K (2026 Kansas baseline)
│  ├─ Total construction: $33-60M
│  ├─ Developer profit margin: 15-20% = $5-12M
│  └─ Developer equity/debt: $38-72M (raised privately, not municipal)
│
└─ MUNICIPAL COMMITMENT REQUIRED: $5-8M infrastructure investment

SECTION 2: Funding Sources — Real Availability Assessment
├─ Federal Grants (Total Estimated: $1.5-2.5M)
│  ├─ EDA Community Development Block Grant (CDBG)
│  │  ├─ Typical award: $1-1.5M
│  │  ├─ Application deadline: Jan 31, 2027
│  │  ├─ Announcement: May 2027
│  │  ├─ El Dorado competitiveness: MODERATE (medium-sized project, post-coal region eligible)
│  │  ├─ Contingency: Application accepted but award 60-70% of request is typical
│  │  ├─ Funder contact: HUD KS Office (Robert Chen, robert.chen@hud.gov)
│  │  └─ Next step: Pre-application inquiry (2 weeks)
│  │
│  ├─ USDA Community Facilities Grant
│  │  ├─ Typical award: $500K-1M (for water/sewer extension)
│  │  ├─ Application deadline: Rolling (year-round)
│  │  ├─ El Dorado competitiveness: HIGH (rural, water infrastructure)
│  │  ├─ Award likelihood: 70%+
│  │  ├─ Funder contact: USDA Rural Development (Lisa Martinez)
│  │  └─ Next step: Pre-application inquiry (1 week)
│  │
│  └─ HUD HOME Grant (if affordable housing target met)
│     ├─ Typical award: $200-500K
│     ├─ Requirement: 30% of units affordable to 60% AMI
│     ├─ El Dorado competitiveness: MODERATE
│     └─ Next step: Confirm affordability requirements
│
├─ State Grants (Total Estimated: $500K-1M)
│  ├─ Kansas Housing Resources Board (KHRB)
│  │  ├─ Typical award: $500K-1M
│  │  ├─ Application deadline: March 1, 2027
│  │  ├─ El Dorado competitiveness: MODERATE (competing vs. 10-15 other KS communities)
│  │  ├─ Award likelihood: 50-60%
│  │  ├─ Funder contact: KHRB (Jennifer Lee)
│  │  └─ Next step: Call to discuss priorities (1 week)
│  │
│  └─ Kansas Main Street Program (if downtown component)
│     ├─ Typical award: $100-300K (streetscape + façade)
│     ├─ Competitiveness: STRONG (El Dorado has existing Main Street org)
│     └─ Status: Already funding Central Avenue ($2.8M planned)
│
├─ Municipal General Fund (Commitment: $1-2M)
│  ├─ FY 2027 general fund budget: [insert current budget]
│  ├─ Proposed allocation: $1-1.5M over 3 years (Phase 1)
│  ├─ Annual impact: $300-500K/year
│  ├─ Revenue source options:
│  │  ├─ General sales tax (current rate: [X%])
│  │  ├─ Property tax (current rate: [X%])
│  │  ├─ Housing development fee (new): $2,000-5,000 per unit = $400-1,500K
│  │  └─ TIF district (property tax increment financing) = potential $200-500K/year
│  │
│  ├─ Council approval required: YES (vote by Jan 2027)
│  └─ Financial sustainability: DEPENDS on TIF + development fees generating ongoing revenue
│
├─ Private Developer Financing (Not Municipal, but critical dependency)
│  ├─ Land purchase: Private equity or project-specific loan
│  ├─ Construction financing: Commercial construction loan (80% LTV)
│  ├─ Permanent financing: Mortgages on completed units
│  ├─ El Dorado competitive advantage: Tax abatement reduces per-unit cost, makes project more bankable
│  ├─ Developer motivation: Feasible only if (municipal infrastructure + tax abatement + municipal financing) reduce cost below market competition
│  └─ Risk factor: If any funding source falls through, developer may not proceed
│
└─ TOTAL MUNICIPAL FUNDING AVAILABLE: $3-4.5M federal + $0.5-1M state + $1-2M municipal = $4.5-7.5M
    (Falls short of $5-8M needed unless TIF or development fees generate incremental revenue)

SECTION 3: Funding Scenario Analysis (Best/Worst/Most Likely)
├─ BEST CASE (All sources funded at maximum)
│  ├─ CDBG: $1.5M
│  ├─ USDA: $1M
│  ├─ KHRB: $1M
│  ├─ Municipal: $1.5M (FY 2027-2029)
│  ├─ TIF district: $500K/year (ongoing)
│  ├─ Housing dev fees: $400K (new units)
│  ├─ Total Available: $7.4M
│  ├─ Status: Fully funds Phase 1 infrastructure ($5-8M)
│  └─ Probability: 40%
│
├─ MOST LIKELY CASE (Federal 70%, state 60%, municipal 100%)
│  ├─ CDBG: $1.0M (70% of $1.5M)
│  ├─ USDA: $700K (70% of $1M)
│  ├─ KHRB: $600K (60% of $1M)
│  ├─ Municipal: $1.5M (committed)
│  ├─ TIF district: $400K/year
│  ├─ Housing dev fees: $300K
│  ├─ Total Available: $4.5M
│  ├─ Status: Covers basic infrastructure; developer must absorb $1-2.5M or reduce scope
│  └─ Probability: 45%
│
└─ WORST CASE (Federal 50%, state 40%, municipal committed but limited)
   ├─ CDBG: $500K
   ├─ USDA: $400K
   ├─ KHRB: $300K
   ├─ Municipal: $1M
   ├─ Total Available: $2.2M
   ├─ Status: Underfunded by $2.8-5.8M; Phase 1 PAUSED
   └─ Probability: 15% (only if major recession or federal budget cuts)

SECTION 4: Mitigation Strategies (Close the Funding Gap)
├─ Strategy A: TIF District (Property Tax Increment Financing)
│  ├─ Mechanism: Capture property tax increases from housing appreciation
│  ├─ Estimated revenue: $200-500K/year for 15-20 years
│  ├─ Requirement: City council approval + TIF authority (existing in El Dorado? YES/NO)
│  ├─ Timeline: Approval by Q2 2027 to activate for Phase 1
│  └─ Impact: Closes $1-3M of funding gap if phased over 5-10 years
│
├─ Strategy B: Housing Development Fees
│  ├─ Fee structure: $2,000-5,000 per residential unit
│  ├─ Applied to: All new residential development (not just Phase 1)
│  ├─ Estimated revenue: $400-1,500K from Phase 1 (200-300 units)
│  ├─ Use restriction: Infrastructure that benefits housing (roads, parks, utilities)
│  ├─ Legal basis: KS law allows "impact fees" for infrastructure
│  └─ Timeline: Adoption by Q1 2027
│
├─ Strategy C: Philanthropic/Community Foundation Grants
│  ├─ Target: Kansas Health Foundation, Kansas Endowment, Rose Family Fund
│  ├─ Grant focus: Affordable housing, workforce retention, quality of life
│  ├─ Estimated amount: $300-500K
│  ├─ Application timeline: Spring 2027 for 2027-2028 funding
│  └─ Partner: Community Foundation of Greater Topeka (already active in region)
│
├─ Strategy D: Private Developer Absorbs Infrastructure Cost
│  ├─ Mechanism: City provides land (via land banking or donation)
│  ├─ Developer covers all infrastructure in exchange for tax abatement + density bonus
│  ├─ Trade-off: City absorbs upfront land cost ($2-3M) but developer funds $3-5M infrastructure
│  ├─ Feasibility: DEPENDS on whether land is available; mega-site land currently zoned industrial (not residential)
│  └─ Status: Requires zoning change + developer RFP
│
└─ Strategy E: Phased Development (Spread costs over 5-10 years)
   ├─ Phase 1 (2027-2030): 150 units, $3-4M infrastructure
   ├─ Phase 2 (2030-2035): 150 units, $2-3M infrastructure
   ├─ Advantage: Spreads municipal investment, allows time for TIF/fees to accumulate
   ├─ Disadvantage: Longer timeline, slower tax base growth
   └─ Recommendation: COMBINE phasing + TIF + development fees for maximum flexibility

SECTION 5: Application Timeline & Decision Gates
├─ Q3 2026 (July-Sept)
│  ├─ City Council votes on housing strategy (YES/NO) — CRITICAL
│  ├─ Finance Director assesses municipal budget commitment
│  ├─ Pre-application inquiry to EDA, USDA, KHRB (informal)
│  └─ Developer RFP issued (site selection, partner selection)
│
├─ Q4 2026 (Oct-Dec)
│  ├─ Developer selected
│  ├─ Formal CDBG pre-application submitted (deadline Feb 1, 2027)
│  ├─ USDA application submitted (rolling deadline)
│  ├─ TIF district approved by council (if chosen mitigation strategy)
│  └─ Housing dev fee ordinance adopted
│
├─ Q1 2027 (Jan-Mar)
│  ├─ CDBG application deadline (Jan 31)
│  ├─ KHRB application submitted (deadline March 1)
│  ├─ Project financing structure finalized (developer + lender)
│  └─ Site plan approved by planning commission
│
├─ Q2 2027 (Apr-June)
│  ├─ CDBG announcement (May)
│  ├─ Building permits issued
│  ├─ Site acquisition/land preparation begins
│  └─ Utility extension planning finalized
│
└─ Q3 2027 (July-Sept)
   ├─ Groundbreaking ceremony
   ├─ Infrastructure construction begins
   └─ First housing units under construction

SECTION 6: Risk Mitigation & Contingencies
├─ Risk: CDBG application denied or underfunded
│  └─ Contingency: Increase municipal commitment ($500K) + accelerate TIF + identify second USDA source
│
├─ Risk: Private developer financing falls through
│  └─ Contingency: City negotiates with secondary developer OR city becomes co-developer (requires municipal bond)
│
├─ Risk: TIF revenue underperforms (property values stagnate)
│  └─ Contingency: Implement housing development fee + seek philanthropic funding
│
├─ Risk: Permitting delays (6+ months behind schedule)
│  └─ Contingency: Stagger Phase 1 development (first 100 units) while completing entitlements for units 101-300
│
└─ Risk: Market downturn (housing demand softens)
   └─ Contingency: Reduce Phase 1 target from 300 to 200 units, pause Phase 2, focus on affordability over profit

SECTION 7: Municipal Budget Impact Analysis
├─ FY 2027-2029 (Phase 1 Ramp-Up)
│  ├─ Year 1 (FY 2027): $500K appropriation (staff, permits, planning)
│  ├─ Year 2 (FY 2028): $1.5M appropriation (infrastructure design, utility coordination)
│  ├─ Year 3 (FY 2029): $1.0M appropriation (infrastructure construction, ongoing coordination)
│  ├─ Total 3-year commitment: $3M
│  ├─ Funded from: CDBG/USDA grants ($2M) + municipal general fund ($1M)
│  └─ Impact on general fund: ~$333K/year = 2-3% of typical municipal budget
│
├─ FY 2030-2032 (Phase 1 Completion + Phase 2 Planning)
│  ├─ Year 1: $800K (final infrastructure, Phase 2 planning)
│  ├─ Year 2: $1.2M (Phase 2 infrastructure design + financing)
│  ├─ Year 3: $1.5M (Phase 2 construction)
│  ├─ Total: $3.5M
│  ├─ Funded from: TIF revenue ($500K) + development fees ($400K) + additional grants ($800K) + municipal ($1.8M)
│  └─ Impact: Decreasing municipal burden as TIF + fees grow
│
└─ FY 2033-2035 (Phase 2 Completion)
   ├─ Annual commitment: $1-1.5M
   ├─ Funded from: TIF ($600K) + development fees ($500K) + municipal ($300K)
   └─ Status: Sustainable long-term; TIF covers majority of ongoing costs

SECTION 8: Success Metrics & Accountability
├─ Funding Secured by Q2 2027: 70%+ of Phase 1 committed (grants + TIF)
├─ Development Agreement Signed by Q3 2027: Developer selected & contract executed
├─ Groundbreaking: Q3 2027
├─ Phase 1 Completion: Q3 2030 (200-300 units occupied)
├─ Phase 2 Start: Q1 2031 (if Phase 1 achieves >80% occupancy)
├─ Affordability Commitment: 30-35% of Phase 1 units ≤$160K (entry-level target)
└─ Annual Reporting: July 1 each year, public dashboard on eldorado2040.com
```

**Key Data to Gather (2-3 hours research/interviews):**

- **Interview Finance Director (45 min):**
  - Current FY 2027 general fund budget total
  - Existing debt service/obligations
  - Realistic municipal commitment: $1M over 3 years? $2M?
  - Has city applied for CDBG/USDA before? Success rate?
  - Does city have TIF authority? How much capacity remaining?

- **Interview Economic Development Director (30 min):**
  - Any developer interest/LOI for North Gateway housing?
  - Realistic timeline for developer selection RFP?
  - Any existing relationships with CDBG/KHRB?

- **Research (30 min):**
  - EDA CDBG awards to similar Kansas communities (past 3 years)
  - USDA Community Facilities grants (rural water projects)
  - KHRB awarded projects 2024-2026

- **Email CDBG/USDA contacts (15 min):**
  - Confirm El Dorado eligibility
  - Confirm typical award size
  - Identify application deadline

**HTML/UX Patterns:**
- Hero: "Funding Reality Check: How We Close the Gap"
- Section 1: Cost breakdown (expandable cards for infrastructure detail)
- Section 2: Funding sources with "likelihood meter" (high/moderate/low confidence)
  - Color-coded: Green (high confidence), Yellow (moderate), Red (uncertain)
  - Embedded commitment letters from funder contacts
  - Hyperlinks to application portals
- Section 3: Scenario comparison (Best/Most Likely/Worst)
  - Stacked bar chart showing funding mix per scenario
  - Toggle between scenarios
- Section 4: Strategy cards with timeline + impact projections
- Section 5: Interactive Gantt chart (applications → decisions → funding)
- Section 6: Risk-mitigation matrix (risk → contingency)
- Section 7: Budget table (annual spending, source, municipal impact)
- Section 8: Success metrics dashboard (updated quarterly)
- CTA: "Download Funding Workbook (Excel)" + "Schedule Finance Meeting"

**Downloadable Asset:**
- `/housing-funding-model.xlsx` — Excel workbook with:
  - Cost breakdown by line item (editable)
  - Funding sources with award probabilities
  - 3 scenarios pre-calculated
  - Annual cash flow projection (5-year)
  - Break-even analysis

**Git Commit:**
```
feat(housing-funding): Add detailed funding roadmap with scenario analysis

- $5-8M infrastructure cost breakdown
- Federal/state/municipal funding sources with award likelihood
- Best/most-likely/worst-case scenarios with mitigation strategies
- TIF + development fee analysis to close funding gap
- Annual budget impact analysis
- Timeline to funding decisions (Q3 2026 - Q2 2027)
- Success metrics & accountability dashboard

Downloads: Excel funding model, commitment letters, application resources
```

---

#### **TASK 4: MASTER IMPLEMENTATION CALENDAR** (4-6 hours)
**Blocker:** "6 priority districts" described separately; no single year-by-year calendar showing what's happening when, by whom, with what decision gates.

**Deliverable:** Interactive page `/implementation-calendar.html` + downloadable `/vision-2040-master-calendar.xlsx` + `/vision-2040-master-calendar.pdf`

**Content Structure:**
```
HERO: "Vision 2040 Year by Year: Every Initiative, Every Decision"

SECTION 1: Executive Timeline (One-page visual summary)
├─ 2026: FOUNDATION (Planning, approvals, site prep)
│  ├─ Q3: City council approves Vision 2040 strategy (housing, streetscape, mega-site marketing)
│  ├─ Q3: Developer RFP issued (North Gateway housing)
│  ├─ Q4: Federal grant applications submitted (CDBG, USDA, KHRB)
│  └─ Q4: Streetscape design finalized + contractor selection
│
├─ 2027: ACTIVATION (Construction starts, momentum visible)
│  ├─ Q1: CDBG/USDA funding announced
│  ├─ Q2: North Gateway developer selected + financing finalized
│  ├─ Q2: Central Avenue streetscape construction begins
│  ├─ Q3: North Gateway housing groundbreaking
│  ├─ Q3: FDI prospect tours mega-site (AMAZONE 2)
│  └─ Q4: First downtown plaza features operational (fountains, benches, lighting)
│
├─ 2028: EXPANSION (Multiple projects, visible progress)
│  ├─ Q1: West Marina construction begins
│  ├─ Q2: Central Avenue streetscape 50% complete (reopens to traffic)
│  ├─ Q2: North Gateway housing Phase 1 (100 units) under construction
│  ├─ Q3: FDI tenant 2 commits to mega-site (target: manufacturing or logistics)
│  ├─ Q4: East-side housing rehab program reaches 30 completed units
│  └─ Q4: Walnut River bridge construction begins
│
├─ 2029: ACCELERATION (Visible community transformation)
│  ├─ Q1: Central Avenue streetscape fully open (100% complete)
│  ├─ Q2: North Gateway housing Phase 1 (100 units) 50% occupied
│  ├─ Q2: West Marina Phase 1 opens (200 slips, restaurant, fuel dock)
│  ├─ Q3: Downtown has 5 new restaurants/retailers (from revitalization)
│  ├─ Q3: FDI tenant 2 opens (100-200 jobs)
│  ├─ Q4: Housing 200-300 units under construction or occupied
│  └─ Q4: Walnut River greenway bridge opens
│
├─ 2030: CONSOLIDATION (Phase 1 complete, Phase 2 planning)
│  ├─ Q1: North Gateway housing Phase 1 (200-300 units) 80%+ occupied
│  ├─ Q1: Historic tax credit buildings 10+ properties rehabbed
│  ├─ Q2: Housing affordability ratio improves from 3.46x → 3.2x (goal)
│  ├─ Q3: USD 490 CTE facility expansion opens (50% more capacity)
│  ├─ Q4: Phase 2 housing (South area) planning begins
│  └─ Q4: Mega-site has 2-3 anchor tenants, 300+ jobs created
│
└─ 2031-2035: SUSTAINED GROWTH
   ├─ Annual population growth: +2-3% target maintained
   ├─ Housing: +400-500 total units (Phase 1 + Phase 2)
   ├─ Industrial: 1,000+ jobs from FDI
   ├─ Downtown: 90%+ occupancy, <8% storefront vacancy
   ├─ Community: $3-5M invested in beautification/quality of life
   └─ Vision 2040: Transition from execution → maintenance + continuous improvement

SECTION 2: Detailed Year-by-Year Calendar (Expandable by initiative)

[Interactive calendar structure with tabs/accordion]:

2026 DETAILED CALENDAR
├─ JULY-SEPTEMBER
│  ├─ CITY GOVERNMENT
│  │  ├─ Vision 2040 strategy approved by city council (Aug)
│  │  │  ├─ Decision maker: City Council
│  │  │  ├─ Inputs: Final audit, stakeholder feedback, finance assessment
│  │  │  ├─ Outcome: Official endorsement, budget allocation
│  │  │  └─ Owner: City Manager
│  │  │
│  │  ├─ Housing strategy funding roadmap approved (Aug)
│  │  │  ├─ Decision maker: City Council
│  │  │  ├─ Required: Finance Director recommendation
│  │  │  └─ Owner: Finance Director
│  │  │
│  │  ├─ Master calendar + risk register reviewed (Sept)
│  │  │  ├─ Review by: City Manager + all district leads
│  │  │  ├─ Outcome: Buy-in on timelines + resource needs
│  │  │  └─ Owner: City Manager
│  │  │
│  │  └─ Development RFP issued (Sept)
│  │     ├─ RFP type: North Gateway housing development
│  │     ├─ Procurement process: Public, competitive, 60-day response deadline
│  │     ├─ Award expected: Jan 2027
│  │     └─ Owner: Planning Director + Finance Director
│  │
│  ├─ ECONOMIC DEVELOPMENT
│  │  ├─ Pre-application inquiry to CDBG (Sept)
│  │  │  ├─ Contact: HUD KS Office
│  │  │  ├─ Goal: Confirm El Dorado eligibility, typical award size
│  │  │  └─ Owner: Economic Dev Director
│  │  │
│  │  ├─ Pre-application inquiry to USDA (Sept)
│  │  │  ├─ Contact: USDA Rural Development
│  │  │  ├─ Focus: Water/sewer extension for North Gateway
│  │  │  └─ Owner: City Engineer + Econ Dev Director
│  │  │
│  │  ├─ FDI prospect tours scheduled (Aug-Sept)
│  │  │  ├─ Prospects: 2-3 precision ag + manufacturing companies
│  │  │  ├─ Tour focus: Mega-site, utilities, AMAZONE facility
│  │  │  └─ Owner: Economic Dev Director + Chamber
│  │  │
│  │  └─ Mega-site marketing blitz begins (Sept)
│  │     ├─ Activities: SelectUSA, KDOC outreach, direct mail
│  │     ├─ Target: 50+ prospect leads by Dec
│  │     └─ Owner: El Dorado Inc. + Economic Dev Director
│  │
│  ├─ INFRASTRUCTURE / STREETSCAPE
│  │  ├─ Central Avenue design finalized (Aug)
│  │  │  ├─ Design includes: Trees, benches, fountains, lighting, plaza
│  │  │  ├─ Approval: Planning Commission + City Council
│  │  │  └─ Owner: City Engineer + Architect
│  │  │
│  │  ├─ Contractor bid process begins (Sept)
│  │  │  ├─ Scope: Central Avenue streetscape (phased)
│  │  │  ├─ Phase 1 (2027): 3 blocks design-build
│  │  │  ├─ Bid deadline: Oct 31
│  │  │  └─ Award: Dec 2026
│  │  │
│  │  └─ Utility coordination meetings (Sept)
│  │     ├─ Attendees: City Engineer, water/sewer dept, electric, telecom
│  │     ├─ Goal: Finalize utility routing for streetscape + housing
│  │     └─ Owner: City Engineer
│  │
│  ├─ HOUSING STRATEGY
│  │  ├─ Housing strategy approved by council (Aug)
│  │  │  ├─ Decision: Phase 1 (200-300 units), funding roadmap
│  │  │  ├─ Related: TIF district approval, dev fee ordinance adoption
│  │  │  └─ Owner: Finance Director + Planning Director
│  │  │
│  │  ├─ Developer RFP issued (Sept)
│  │  │  ├─ RFP scope: 150-300 units mixed-income, North Gateway site
│  │  │  ├─ Requirements: Experience, financing capacity, timeline
│  │  │  ├─ Selection criteria: Quality, affordability %, timeline, local partnerships
│  │  │  ├─ Q&A period: Oct 1-15
│  │  │  ├─ Deadline: Nov 15
│  │  │  └─ Award: Jan 2027
│  │  │
│  │  └─ USD 490 capacity assessment (Aug-Sept)
│  │     ├─ Meetings: Super+ + CTE Director
│  │     ├─ Questions: Can 300 new students be accommodated? When? Cost?
│  │     ├─ Output: Capacity assessment + cost estimate
│  │     └─ Owner: Planning Director + USD 490 liaison
│  │
│  ├─ COMMUNITY / PUBLIC REALM
│  │  ├─ Signals Hub + Career Pathways launch (July)
│  │  │  ├─ Tools: Real-time momentum tracking, career pipeline visualization
│  │  │  ├─ Expected reach: 500+ views in first month
│  │  │  └─ Owner: Communications + Web Team
│  │  │
│  │  └─ Stakeholder engagement events (Aug-Sept)
│  │     ├─ Events: Town halls (3), industry roundtables (2), youth summit (1)
│  │     ├─ Goal: Gather feedback, build community support
│  │     └─ Owner: Communications + Community Engagement
│  │
│  └─ BUDGET & RESOURCE NEEDS
│     ├─ Staff: City Manager, Finance Director, City Engineer, Planning Director, Economic Dev Director
│     ├─ Consultant/Professional Services: Architect ($25K streetscape design), RFP process ($5K)
│     ├─ Municipal cost: $50-75K (staff time + professional services)
│     └─ Grant applications: $0 cost to apply

2026 OCTOBER-DECEMBER
├─ STREETSCAPE
│  ├─ Contractor bids reviewed (Nov)
│  │  ├─ Bidders expected: 3-4 qualified contractors
│  │  ├─ Bid range expected: $2.5-3.2M
│  │  ├─ Timeline: Dec award, Jan 2027 contract execution
│  │  └─ Owner: City Engineer
│  │
│  └─ Utility coordination finalized (Oct)
│     ├─ Confirm: Water mains, sewer, electric, telecom routing
│     ├─ Schedule: Utility relocations during streetscape construction (phased)
│     └─ Owner: City Engineer
│
├─ HOUSING
│  ├─ Developer RFP responses reviewed (Nov-Dec)
│  │  ├─ Expected proposals: 2-3 qualified developers
│  │  ├─ Evaluation team: Planning + Finance + City Manager
│  │  ├─ Site tour: Developers visit North Gateway (Nov)
│  │  ├─ Finalist interview: Dec (2 finalists)
│  │  └─ Award expected: Jan 2027
│  │
│  ├─ TIF district ordinance drafted (Oct-Nov)
│  │  ├─ Mechanism: Freeze current property tax baseline; capture growth
│  │  ├─ Duration: 15-20 years
│  │  ├─ City council vote: Dec
│  │  └─ Owner: Finance Director + City Attorney
│  │
│  └─ Housing dev fee ordinance drafted (Oct-Nov)
│     ├─ Fee structure: $2-5K per unit (applied to all new residential)
│     ├─ Use restriction: Infrastructure benefiting housing
│     ├─ City council vote: Dec
│     └─ Owner: Finance Director + City Attorney
│
├─ FEDERAL FUNDING APPLICATIONS
│  ├─ CDBG application submitted (late Nov, deadline Jan 31)
│  │  ├─ Amount requested: $1-1.5M
│  │  ├─ Use: Water/sewer infrastructure, site prep
│  │  ├─ Application prep: Sept-Nov (2 months prep)
│  │  ├─ Announcement: May 2027
│  │  └─ Owner: Finance Director + Econ Dev Director
│  │
│  ├─ USDA application submitted (rolling, no deadline)
│  │  ├─ Amount requested: $800K-1M
│  │  ├─ Use: Water line extension
│  │  ├─ Decision timeline: 6-9 months
│  │  └─ Owner: City Engineer + Finance Director
│  │
│  └─ KHRB application (deadline March 2027, prep in Dec)
│     ├─ Amount requested: $500K-1M
│     ├─ Use: Affordable housing set-aside
│     └─ Owner: Finance Director
│
├─ ECONOMIC DEVELOPMENT
│  ├─ Mega-site utility assessment (Oct-Nov)
│  │  ├─ Scope: Water, sewer, electric, gas capacity to all 500+ acres
│  │  ├─ Cost estimate: $2-3M for full extension (spread over phases)
│  │  ├─ Timeline: Complete utility routing plan by Dec
│  │  └─ Owner: City Engineer + Utility companies
│  │
│  ├─ FDI prospect tours continue (Oct-Dec)
│  │  ├─ Goals: 10+ site visits, 50+ prospect inquiries
│  │  ├─ Sales collateral ready: Permitting roadmap, workforce pipeline, tax incentive summary
│  │  └─ Owner: Econ Dev Director + Chamber
│  │
│  └─ Competitive benchmark study completed (Oct)
│     ├─ Comparison: vs. Wichita, Emporia, Dodge City on tax, cost, timeline, workforce
│     ├─ Output: Competitive advantage summary for sales use
│     └─ Owner: Econ Dev Director
│
└─ BUDGET & RESOURCE NEEDS
   ├─ Staff: Ongoing (City Manager, Finance, Engineering, Planning, Econ Dev)
   ├─ Professional services: RFP evaluation ($5K), grant writing ($10K), design work ($15K)
   ├─ Municipal cost: $100-125K (staff time + consultants)
   └─ Grant applications: $0 cost

[Repeat structure for 2027, 2028, 2029, 2030, 2031-2035]
```

**Key Structure Elements:**
1. **Executive Timeline (1-page visual)** — Shows major initiatives 2026-2035 at 30,000-foot view
2. **Year-by-Year Detailed Calendar** — Expandable sections per year with:
   - Quarter-by-quarter breakdown
   - By theme (City Government, Economic Dev, Infrastructure, Housing, Community)
   - Each initiative includes: Decision maker, inputs, outcome, owner, timeline
3. **Critical Path Dependencies** — Visual Gantt chart showing which initiatives must complete before others start
   - E.g., "Permitting roadmap completion" → "FDI prospect confidence" → "Mega-site tenant acquisition"
4. **Decision Gates** — Clear checkpoints where city council/leadership approves next phase
5. **Resource Requirements** — Staff, budget, consultant costs by year
6. **Success Metrics** — Annual targets (housing units, jobs created, population growth, downtown occupancy, etc.)

**Stakeholder Coordination Required (3-4 hours):**
- **Interview City Manager (60 min):** Overall timeline realism, resource constraints, decision gates, priority sequencing
- **Interview Finance Director (45 min):** Budget cycle, TIF mechanics, grant application timelines
- **Interview City Engineer (45 min):** Infrastructure construction timelines, utility extension sequencing, permitting windows
- **Interview Planning Director (30 min):** Design review, zoning approval, entitlement timeline for housing/streetscape
- **Interview Economic Dev Director (30 min):** FDI prospect timeline, mega-site marketing, AMAZONE lessons learned

**HTML/UX Patterns:**
- Hero: "Vision 2040: Year-by-Year Implementation Calendar"
- **Section 1: Executive Timeline (Visual)**
  - Horizontal timeline 2026-2035
  - Color-coded initiatives (planning phase = blue, construction = orange, operation = green)
  - Hover to see detail, click to expand full year
- **Section 2: Interactive Calendar**
  - Accordion by year (2026-2035)
  - Sub-tabs by theme (City Government, Econ Dev, Infrastructure, Housing, Community)
  - Each initiative = card with:
    - Title + description
    - Decision maker + responsible party
    - Timeline + decision gate date
    - Budget/resources needed
    - Status indicator (planned/in progress/complete)
- **Section 3: Critical Path Diagram**
  - Mermaid chart showing dependencies
  - "What must complete before X can start?"
- **Section 4: Resource Requirements**
  - Annual staffing needs (FTEs by department)
  - Annual budget (2026-2035)
  - Funding sources (grants, municipal, TIF, fees)
- **Section 5: Success Dashboard**
  - 2030 targets: Population, housing, jobs, downtown occupancy
  - 2035 targets: Same metrics
  - Current status (baseline)
- **CTA:** "Download Master Calendar (Excel)" + "Download PDF Report"

**Downloadable Assets:**
- `/vision-2040-master-calendar.xlsx` — Excel workbook with:
  - All initiatives by year, theme, timeline
  - Decision gates + decision makers
  - Budget by year
  - Dependency links
  - Status tracking (auto-update section)
- `/vision-2040-master-calendar.pdf` — Print-friendly PDF (poster-size, 24"×36")

**Git Commit:**
```
feat(calendar): Add master implementation calendar 2026-2035

- Year-by-year initiative roadmap across all 6 priority districts
- Decision gates with responsible parties clearly identified
- Critical path dependencies visualized (Gantt chart)
- Resource requirements by year (staff, budget, consultants)
- Success metrics for 2030 + 2035 targets
- Interactive timeline + downloadable Excel workbook + PDF poster

Updates to: index.html (nav link), build.html (section reference)
```

---

#### **TASK 5: RISK REGISTER & CONTINGENCY PLAN** (3-4 hours)
**Blocker:** Vision 2040 describes initiatives but doesn't acknowledge failure risk or contingency plans → Leadership hesitates to commit when unknown unknowns loom.

**Deliverable:** New page `/risk-management.html` + Excel workbook `/risk-register.xlsx`

**Content (Abbreviated — full template can be expanded):**

Top 10 Risks with Mitigation + Contingency:

| Risk | Probability | Impact | Mitigation | Contingency |
|------|-------------|--------|------------|-------------|
| **1. FDI prospect (Mega-Site tenant 2) doesn't materialize by 2028** | MEDIUM (40%) | HIGH | Active sales (50+ prospects/year), competitive tax incentive, workforce pipeline proof | Pivot to smaller tenants; extend mega-site marketing to 2030; adjust population growth target from +2% to +1% |
| **2. Housing developer RFP gets 0-1 qualified bids** | LOW (20%) | HIGH | Strong pre-RFP marketing, favorable financing terms, tax abatement certainty | City becomes co-developer OR extend timeline by 12 months + reissue RFP |
| **3. CDBG grant application denied/significantly underfunded** | MEDIUM (30%) | MEDIUM | Pre-application inquiry, strong project narrative, evidence of local investment | Increase municipal commitment by $500K + accelerate TIF + seek second USDA source |
| **4. Housing market softens (unit absorption slower than projected)** | MEDIUM (35%) | MEDIUM | Price entry-level units competitively, design walkable neighborhood, Phase market launch carefully | Reduce Phase 1 target from 300 to 200 units; pause Phase 2 marketing until Phase 1 is 80% occupied |
| **5. Central Avenue streetscape construction over-budget by 20%+** | LOW-MEDIUM (25%) | MEDIUM | Detailed design, 3-bid competitive process, contingency reserve (10% of budget) | Eliminate lowest-priority elements (fountains/plazas) and execute them in Phase 2 |
| **6. Permitting delays (entitlements take 12+ months vs. 6 projected)** | MEDIUM (30%) | MEDIUM | Pre-coordinate with Planning Commission, streamline design review, early City Council support | Accept 6-month delay to overall timeline OR pursue fast-track permitting option (if available under KS law) |
| **7. Key city staff turnover (Economic Dev Director, City Engineer leaves)** | MEDIUM (35%) | MEDIUM-HIGH | Document procedures, cross-train deputy, create position continuity playbook | Hire interim consultant (3-6 months); ensure incoming hire gets 90-day onboarding on Vision 2040 |
| **8. Federal budget cuts (CDBG/USDA funding frozen mid-cycle)** | LOW (15%) | HIGH | Advocate for stable federal funding through ICMA, secure grants early in cycle | Fall back to municipal bonds + philanthropic grants to close gap |
| **9. Workforce training partnership doesn't materialize (USD 490 expansion delayed)** | MEDIUM-LOW (25%) | MEDIUM | Secure written commitment from Superintendent, co-fund expansion, state grants | Recruit adult workers + out-of-area transplants; adjust job growth target down 10-15% |
| **10. Community opposition to gentrification/displacement risk** | MEDIUM (40%) | MEDIUM-HIGH | Equity impact assessment, anti-displacement policy, community benefit agreements, affordable housing commitment | Increase affordable units to 40% + rental assistance programs + small business funding for existing merchants |

---

#### **TASK 6: EQUITY IMPACT ASSESSMENT** (4-5 hours)
**Blocker:** Vision 2040 says "mixed-income housing" and "support all neighborhoods" but doesn't explicitly address displacement risk, diversity, or who benefits most.

**Deliverable:** New page `/equity-impact-assessment.html` + downloadable report

**Content (Abbreviated):**
- Current demographics (race, income, tenure, age breakdown)
- Vision 2040 impact by demographic (who benefits, who's at risk)
- Mitigation strategies (anti-displacement policy, community benefit agreements, community hiring targets, affordability commitments)
- Success metrics (Is El Dorado more or less diverse by 2035? Income spread wider or narrower?)

---

#### **TASK 7: STAFFING & RESOURCE PLAN** (2-3 hours)
**Blocker:** Vision 2040 assumes execution but doesn't clarify if city has the staff + budget to actually do it.

**Deliverable:** New page `/staffing-roadmap.html` + summary table

**Content:**
- Current staffing by department (Planning, Public Works, Finance, Econ Dev, Communications)
- Vision 2040 FTE gaps (What roles are missing? What consultant services?)
- Cost estimate (3-5 FTE hires = $300-400K/year? Consultant contracts = $50-100K/year?)
- Funding source (Can city fund this from general revenue, or does it require grant funding?)
- Timeline to hiring (When do new positions need to be filled to stay on schedule?)

---

### EXECUTION WORKFLOW

#### **Week 1: Tranche 1 (7 Hours)**
**Mon-Tue:** Climate section + AMAZONE case study (5 hrs)
**Wed-Thu:** 100-day plan (2 hrs)
**Fri:** QA, git commits, publication

#### **Week 2-5: Tranche 2 (40-50 Hours) — Parallel Workstreams**

**STREAM A: Stakeholder Interviews (8 hours total)**
- Mon/Tue: City Manager (60 min) + Finance Director (45 min)
- Wed: City Engineer (45 min) + Planning Director (30 min) + Econ Dev Director (30 min)
- Thu: USD 490 Superintendent (30 min) + Butler CC President (30 min)
- Fri: Synthesize interview findings (3 hours notes → key insights)

**STREAM B: Permitting Roadmap (3-4 hours)**
- Interview: City Engineer (30 min — included in STREAM A)
- Research: Kansas permitting best practices, timelines (1 hr)
- Drafting: Roadmap document + UX design (2 hrs)
- QA + publication (30 min)

**STREAM C: Workforce Pipeline (4-5 hours)**
- Interviews: USD 490 CTE Director, Butler CC, AMAZONE HR, Workforce Board (2 hrs — included in STREAM A)
- Research: Training program enrollment, capacity data (1.5 hrs)
- Drafting: Workforce strategy document + skills pipeline visualization (2 hrs)
- QA + publication (30 min)

**STREAM D: Housing Funding (3-4 hours)**
- Interview: Finance Director, EDA/USDA contacts (1 hr — included in STREAM A)
- Research: Grant awards history, funding sources (1.5 hrs)
- Drafting: Funding roadmap + scenario analysis + Excel workbook (1.5 hrs)
- QA + publication (30 min)

**STREAM E: Master Calendar (4-6 hours)**
- Interviews: City Manager + all district leads (2 hrs — included in STREAM A)
- Drafting: Year-by-year calendar, dependencies, Gantt chart (3 hrs)
- Excel workbook + PDF poster (1.5 hrs)
- QA + publication (1 hr)

**STREAM F: Risk Register + Equity + Staffing (6-7 hours total)**
- Risk assessment: Workshop with City Manager + leadership (1.5 hrs)
- Drafting: Risk register, equity assessment, staffing plan (4 hrs)
- Excel workbook + downloadable reports (1.5 hrs)
- QA + publication (1 hr)

**Total Tranche 2 Effort: 40-50 hours (5-6 weeks with parallel execution)**

---

### QUALITY STANDARDS

All deliverables must meet:
- **HTML:** Valid W3C, semantic structure, skip-to-content link, breadcrumbs
- **Accessibility:** WCAG 2.1 AA (keyboard nav, focus indicators, alt text, color contrast >4.5:1, font ≥14px)
- **Mobile:** 100% responsive (320px-1920px), touch-friendly buttons (48px min)
- **SEO:** Title tag, meta description, H1-H2 hierarchy, structured data (schema.org), internal links, mobile-friendly test pass
- **Performance:** Lighthouse score ≥80, LCP <2.5s, CLS <0.1, FID <100ms
- **Git:** Clear commit messages, one feature per commit, no uncommitted changes

---

### GIT WORKFLOW

**For each task:**
```bash
# Create feature branch
git checkout -b feat/task-name (e.g., feat/permitting-roadmap)

# Make changes
[edit files]

# Stage + commit
git add [files]
git commit -m "feat(domain): Short description

Longer description of changes, reasoning, impact."

# Push + create PR (if needed)
git push -u origin feat/task-name
```

**Commit message template:**
```
feat(domain): Add/update X feature

- Specific change 1
- Specific change 2
- Links to related pages/tools
```

---

### SUCCESS CRITERIA (END OF PHASE 10.5)

✅ Tranche 1 complete (3 new pages, social proof)  
✅ Tranche 2 complete (11-15 new pages, execution clarity)  
✅ Stakeholder interviews completed + commitments documented  
✅ All pages accessible (WCAG 2.1 AA), mobile-responsive, SEO-ready  
✅ Git history clean (40-50 well-documented commits)  
✅ Master calendar published + stakeholder buy-in secured  
✅ City council confident to commit resources + budget  
✅ FDI prospects can see clear execution pathway  
✅ Community sees realistic, year-by-year progress roadmap  

**Outcome:** Vision 2040 transitions from "aspirational strategy" → "actionable city plan"

---

## 📋 APPENDIX: STAKEHOLDER INTERVIEW TEMPLATES

### Template 1: City Manager Interview (60 min)

**Goal:** Confirm timeline realism, resource constraints, decision gates, priority sequencing

**Questions:**
1. Is the 2026-2035 timeline realistic given current city capacity?
2. Which 2-3 initiatives are truly "critical path"? Which can slip if needed?
3. What's the realistic municipal budget commitment per year for housing + streetscape?
4. Who should be the lead for each priority district? (Confirm names)
5. What would cause you to pause or abandon any initiative?
6. What support from the city council / county commission do you need?

**Output:**
- Confirmed timeline + contingencies
- Resource constraints documented
- District lead assignments
- Council/county engagement strategy

---

### Template 2: City Engineer Interview (45 min)

**Goal:** Get realistic permitting, infrastructure, and construction timelines

**Questions:**
1. What's the realistic timeline from site plan approval → first utilities operational?
2. What approvals must sequence (i.e., can't happen in parallel)?
3. Which utility companies are most likely to cause delays? How do we mitigate?
4. For the mega-site utilities: Is full extension to 500+ acres realistic by 2030?
5. What fast-track permitting options exist under Kansas law?
6. What contingencies should we plan for (labor, weather, supply chain)?

**Output:**
- Permitting roadmap (18-24 month standard + 12-18 month fast-track)
- Utility coordination timeline
- Risk factors & mitigation
- Fast-track criteria

---

### Template 3: Finance Director Interview (45 min)

**Goal:** Confirm funding assumptions and municipal budget reality

**Questions:**
1. Is $1-2M municipal infrastructure commitment realistic for housing? Over what timeline?
2. What's the city's track record applying for CDBG/USDA grants? Success rate?
3. Does the city have TIF authority? How much capacity remaining?
4. Can the city absorb new debt (bonds) if grant funding falls short?
5. What's the realistic development fee rate per unit? Impact on housing affordability?
6. What other funding sources haven't we considered? (Philanthropic, state programs, etc.)

**Output:**
- Funding roadmap (sources, amounts, timelines)
- Scenario analysis (best/most likely/worst case)
- Budget impact analysis (annual municipal cost 2026-2035)
- Contingency strategies (if funding shortfalls occur)

---

### Template 4: USD 490 Superintendent Interview (30 min)

**Goal:** Confirm K-12 capacity for 300+ new students

**Questions:**
1. Current enrollment? Capacity utilization?
2. Can USD 490 absorb 300 new K-12 students by 2032?
3. What expansion is needed? (Facility, teachers, programs)
4. Cost estimate for expansion?
5. Funding sources (state aid, local bonds, federal)?
6. Timeline to ready for 300+ new students?

**Output:**
- Capacity assessment
- Expansion requirements
- Cost estimate + funding plan
- Timeline

---

## 📊 MASTER PROMPT SUMMARY

**Mission:** Complete El Dorado Vision 2040 Phase 10.5 (execution clarity)  
**Timeline:** 4-6 weeks, 50-60 hours  
**Tranches:** 2 (Quick Wins, then Critical Infrastructure)  
**Deliverables:** 15+ new pages + downloadable workbooks + git commits  
**Success:** Vision 2040 moves from "aspirational" → "actionable, council-approved, FDI-ready"

**Ready to execute?** Start with Tranche 1 (Week 1). Proceed to Tranche 2 (Weeks 2-5) with parallel workstreams. Complete by end of August 2026 for Sept city council presentation.

---

**Version:** 1.0 | **Date:** June 30, 2026 | **Status:** READY TO EXECUTE
