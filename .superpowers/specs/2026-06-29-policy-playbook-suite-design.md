# Policy & Regulatory Playbook Suite + Interactive Router — Design Spec
**Date:** June 29, 2026  
**Project:** El Dorado Vision 2040  
**Phase:** 10 (Content & SEO Strategic Expansion)  
**Effort:** 10-12 hours (Phase 1: 8-10 hrs, Phase 2: 2-3 hrs optional)  
**Status:** Design Approved → Ready for Implementation Planning

---

## 1. PROBLEM STATEMENT

**Current State:**
- 94 active pages covering vision, initiatives, zones, industries
- Strong investor/strategic content, weak operational content
- Visitors ask "How do I actually DO business here?" — no answer
- Missing: step-by-step guides for business formation, permitting, incentives, zoning

**Impact:**
- Lost leads (visitors can't find next steps)
- Missed SEO (no content for "start business El Dorado", "manufacturing incentives Kansas")
- Incomplete value prop (great vision, unclear execution path)

**Solution:** Hybrid playbook suite (7 templated guides + interactive routing tool) that turns operational knowledge into actionable, discoverable content.

---

## 2. DESIGN OVERVIEW

### 2.1 Core Components

**Component A: Seven Playbook Pages**
- Template-driven, consistent format across all playbooks
- Each is standalone yet interconnected (linked within quiz results)
- Designed for 5-15 min reads + actionable next steps
- SEO-optimized (meta descriptions, H1-H3 hierarchy, schema markup)

**Component B: Interactive Quiz Tool**
- Single-page application (no backend required)
- 3-question flow: purpose → industry → stage
- Outputs ranked playbook recommendations personalized to user
- CTA-heavy (download, contact, read full guide)

**Component C: Data Layer**
- JSON-driven playbook content (reusable, maintainable)
- Shared stakeholder references (pulls from existing directory)
- Incentive program registry (tax programs, grants, training)

**Component D: Site Integration**
- New top-level nav item: "Getting Started" or "Playbooks"
- Links from industry pages → relevant playbooks
- CTA from hero sections → interactive tool
- Internal linking between playbooks (e.g., "Next: Access Incentives")

---

## 3. PLAYBOOK SPECIFICATION

### 3.1 Playbook List (7 Core Set)

| # | Playbook | Target User | Est. Length | Priority |
|---|----------|-------------|-------------|----------|
| 1 | **Start a Business** | Entrepreneurs, new business owners | 1,500-2,000 words | P1 (universal) |
| 2 | **Expand/Relocate Manufacturing** | Plant managers, supply chain leaders | 1,500-2,000 words | P1 (high value) |
| 3 | **Access Tax Incentives & Grants** | CFOs, business development | 1,200-1,500 words | P1 (hot topic) |
| 4 | **Rezone or Request Code Variance** | Developers, property owners | 1,000-1,200 words | P2 (frequent blocker) |
| 5 | **Purchase/Lease Commercial Real Estate** | Investors, corporate real estate | 1,500-1,800 words | P2 (prerequisite) |
| 6 | **Navigate Permitting & Construction** | Contractors, project managers | 1,200-1,500 words | P2 (execution) |
| 7 | **Hire Workers & Access Training Programs** | HR managers, workforce development | 1,000-1,200 words | P2 (competitive) |

**Total Content:** ~9,500 words of new strategic content

### 3.2 Playbook Template (Consistent Across All 7)

**Header Section:**
- Page title (h1) e.g., "Start a Business in El Dorado"
- Subtitle: Who it's for (e.g., "For entrepreneurs and business owners")
- Quick stats: "Estimated time: 5-7 business days", "Key stakeholders: 3", "Required docs: 4"
- Hero CTA button: "Get Started" (scrolls to timeline)

**Timeline Visual Section:**
- Gantt-style visual (HTML table or simple SVG)
- Each step numbered and dated (e.g., "Day 1: Choose business structure")
- Milestones marked (approval points, decision gates)
- Estimated duration for each step
- Checklist boxes (user can track progress)

**Step-by-Step Details (Expandable Sections):**
For each major step:
- **What to do:** 2-3 sentence action
- **Who to contact:** Name, title, email, phone (from stakeholder directory)
- **Documents needed:** Checklist of forms/files
- **Timeline:** Realistic duration
- **Cost estimate:** If applicable (application fees, permits, etc.)
- **Common blockers:** "Mistake: X. Solution: Y."

**Decision Tree Section:**
- "Are you expanding existing ops or starting fresh?" → Different path
- "Which industry sector?" → Industry-specific variations
- "Do you have capital approval?" → Fast-track vs. normal path
Visual: Simple flowchart (text-based or SVG)

**Stakeholders Directory (Embedded):**
- Table: Name | Title | Email | Phone | Step(s) they help with
- Pulls from existing `/stakeholders` data
- CTA: "Email stakeholder" (mailto: link)

**Required Documents Checklist:**
- Master checklist for the entire playbook
- Downloadable as PDF checklist
- Links to templates (if available)
- External docs (e.g., "Secretary of State Business License Form" → link)

**FAQ Section:**
- 5-7 FAQs addressing common blockers
- Format: Q&A with expandable answers
- Cover timing, cost, common mistakes, edge cases

**Local Success Story (Case Study Link):**
- 2-3 sentence story from a local business that followed this playbook
- Quote: "Here's what made the difference..."
- CTA: "Read full case study" (link to dedicated case study page)
- If case study doesn't exist: "Coming soon" or placeholder for future expansion

**Next Steps Section:**
- Primary CTA: "Apply Now" or "Contact [Stakeholder]" (email/phone)
- Secondary CTAs: "Download Checklist", "Read related playbook"
- Related playbooks: e.g., "Next: Access Tax Incentives" (linked)

**SEO Meta Tags:**
- Meta description: 150-160 chars (e.g., "Learn how to start a business in El Dorado, KS. Step-by-step guide with timelines, contacts, and required documents.")
- H1-H3 structure optimized for keywords ("Start Business El Dorado Kansas")
- Schema markup: LocalBusiness + HowTo schema

### 3.3 Playbook Content Areas (What to Research/Write)

**Playbook 1: Start a Business**
- Business structure options (LLC, S-corp, sole proprietor)
- Secretary of State filing process
- Local business license & permit requirements
- EIN application (federal)
- Tax incentives for new businesses (PEAK program specifics)
- Stakeholders: City clerk, economic development director, tax assessor
- Timeline: 5-7 business days
- Cost estimate: $300-800

**Playbook 2: Expand/Relocate Manufacturing**
- Available industrial sites & zoning (link to real estate playbook)
- Utility infrastructure assessment
- Workforce availability & training programs
- Tax incentive packages (REAP, PEAK, property tax abatement)
- Supply chain integration (I-35, US-77 logistics)
- Environmental compliance (air quality, water discharge)
- Stakeholders: City manager, economic development, utilities director, training coordinator
- Timeline: 60-90 days
- Cost estimate: Varies, but incentives can offset 30-50% of capex

**Playbook 3: Access Tax Incentives & Grants**
- PEAK Program (property tax abatement, eligibility, application)
- REAP Program (rural economic area program)
- Local incentives (council discretionary funds, infrastructure support)
- State & federal grants (workforce, infrastructure, innovation)
- How to calculate net incentive value
- Application timeline & approval process
- Stakeholders: Tax assessor, economic development director, state program officers
- Timeline: 30-60 days
- Cost estimate: Free to apply, payoff: $100K-$5M+ depending on project

**Playbook 4: Rezone or Request Code Variance**
- Current zoning map (link to zones pages)
- Process for requesting variance or rezone
- Planning & Zoning Commission review timeline
- City Council approval process
- Public hearing requirements
- Success rate & common reasons for denial
- Timeline acceleration options
- Stakeholders: City planner, zoning officer, planning commission
- Timeline: 60-120 days
- Cost estimate: $500-2,000 in application fees

**Playbook 5: Purchase/Lease Commercial Real Estate**
- Available properties & sites (link to real estate opportunity map)
- Pricing & market trends
- Financing options & incentives
- Due diligence checklist (environmental, zoning, utilities)
- Lease vs. buy considerations
- Negotiation tips (leverage incentives)
- Stakeholders: Real estate brokers, lenders, economic development, city assessor
- Timeline: 60-180 days
- Cost estimate: 2-5% of purchase price in transaction costs

**Playbook 6: Navigate Permitting & Construction**
- Building permit application process
- Inspection checkpoints (foundation, framing, electrical, final)
- Building code compliance (Kansas adopted codes)
- Contractor licensing requirements
- Expedited permitting options
- Appeal process if denied
- Stakeholders: Building official, contractors, inspectors
- Timeline: 30-90 days
- Cost estimate: $500-$5,000 depending on project size

**Playbook 7: Hire Workers & Access Training Programs**
- Labor availability data (unemployment rate, demographics)
- USD 490 CDL training program (timeline, cost, partner trucking companies)
- WIOA funding & workforce development services
- Veteran hiring resources
- Housing assistance (for relocating talent)
- Employer recruitment support
- Stakeholders: Workforce development director, USD 490 coordinator, HR partners
- Timeline: 30-60 days
- Cost estimate: Free to $2,000 depending on training

---

## 4. INTERACTIVE QUIZ TOOL SPECIFICATION

### 4.1 Quiz Flow

**Question 1: "What brings you to El Dorado?"**
- Answer options (buttons):
  - Start a new business
  - Expand existing operations
  - Relocate from another location
  - Invest in real estate
  - Hire workers
  - Learn about the community
- Single select

**Question 2: "Which industry or sector?"**
- Answer options (dropdown or button grid):
  - Manufacturing & logistics
  - Agriculture & food systems
  - Technology & remote work
  - Healthcare & life sciences
  - Retail & services
  - Real estate & development
  - Other
- Single select (or "not sure" option → defaults to general playbooks)

**Question 3: "What's your stage?"**
- Answer options (buttons):
  - Just exploring / early research
  - Ready to move forward / making decisions
  - Committed / in execution mode
- Single select

### 4.2 Routing Logic

**Scoring Matrix (Playbook Relevance):**

Quiz answers map to playbook relevance scores (0-100). Playbooks sorted by score descending.

Example: User selects "Start new business" + "Manufacturing" + "Making decisions"
- Playbook 1 (Start Business): 100 (exact match)
- Playbook 2 (Manufacturing): 90 (sector match, but they're starting not expanding)
- Playbook 3 (Tax Incentives): 85 (critical for startups)
- Playbook 5 (Real Estate): 70 (will need it soon)
- Playbook 6 (Permitting): 60 (depends on property)
- Playbook 4 (Rezone): 40 (less likely for startup)
- Playbook 7 (Hiring): 30 (premature, but link it)

**Results Display:**
- "Based on your answers, here's YOUR recommended playbook path:"
- Top 3 playbooks shown as cards (title, description, estimated time)
- Each card has buttons: "Read Full Guide", "Email Stakeholder", "Download Checklist"
- Bottom: "Explore all playbooks" (link to /playbooks directory)

### 4.3 Technical Implementation

**Technology Stack:**
- HTML5 + Vanilla JavaScript (no framework needed)
- JSON data file for playbook metadata
- localStorage (optional) to save user answers for return visits

**File Structure:**
```
/playbooks/
  ├── index.html (quiz tool + results page)
  ├── start-business.html
  ├── expand-manufacturing.html
  ├── tax-incentives.html
  ├── rezone.html
  ├── real-estate.html
  ├── permitting.html
  ├── hiring.html
  ├── data/
  │   ├── playbooks.json (metadata for quiz logic & display)
  │   └── stakeholders.json (shared from main site)
  └── css/
      └── playbooks.css (consistent styling)
```

**playbooks.json Structure:**
```json
{
  "playbooks": [
    {
      "id": "start-business",
      "title": "Start a Business in El Dorado",
      "description": "Form a business, get licensed, and access startup incentives",
      "url": "/playbooks/start-business.html",
      "estimatedTime": "5-7 days",
      "industryMatch": ["all"],
      "stageMatch": ["exploring", "deciding", "executing"],
      "purposeMatch": ["start"],
      "relevanceScore": 100,
      "cta": "Get Started",
      "metaDescription": "Learn how to start a business in El Dorado, KS..."
    },
    ...
  ]
}
```

---

## 5. CONTENT ARCHITECTURE & DATA INTEGRATION

### 5.1 Data Layer

**Stakeholder Directory (Shared):**
- Pull from existing `/data/stakeholders.json` or `/reference/stakeholders.html`
- Fields needed: name, title, department, email, phone, expertise_areas
- Each playbook embeds relevant stakeholder entries

**Incentive Programs Registry:**
```json
{
  "programs": [
    {
      "name": "PEAK Program",
      "description": "Property tax abatement for new/expanding businesses",
      "eligibility": ["manufacturing", "logistics", "technology"],
      "incentiveValue": "30-50% property tax reduction for 10 years",
      "applicationTimeline": "30-60 days",
      "contact": "economic-development@eldorado.gov",
      "link": "/finance/peak-program"
    }
  ]
}
```

### 5.2 Site Integration Points

**Navigation:**
- Add "Getting Started" or "Playbooks" to main nav (or as dropdown under "Resources")
- Mobile nav: same link placement

**Industry Pages:**
- Each industry page (aerospace, manufacturing, agriculture) links to relevant playbooks
- E.g., aerospace.html: "Ready to expand? See our Manufacturing Playbook"

**Finance Pages:**
- Finance hub links to "Access Tax Incentives" playbook
- Financial dashboard links to "Understand El Dorado's Investment" playbook

**Hero CTAs:**
- Home page hero: Add CTA "Find Your Path" → quiz tool
- Zone pages: "Ready to invest? Use our interactive tool to get started"

**Internal Linking:**
- Playbooks link to each other in logical sequence
- E.g., "Start Business" playbook says "Next: Access Tax Incentives" (linked)

---

## 6. CONTENT RESEARCH & SOURCING

### 6.1 Data Sources (Existing)

- Stakeholder directory (already have names/contacts)
- Tax/incentive info (PEAK, REAP in existing docs)
- Zoning/permitting info (comprehensive-audit-2026 notes existing data)
- Real estate opportunities map (already exists)
- USD 490 training program (documented in workforce pages)

### 6.2 Gaps to Research

**What we need to add/verify:**
- Exact timelines for each step (call stakeholders to confirm)
- Cost estimates (filing fees, permit costs, incentive net value)
- Success rates (% of rezone requests approved, avg incentive per business)
- Contact info verification (ensure current emails/phones)
- Local case studies (interview 2-3 businesses that followed each playbook)

**Time estimate for research:** 2-3 hours (phone calls + spreadsheet compilation)

---

## 7. IMPLEMENTATION PHASES

### Phase 1: Core Launch (8-10 hours)

**1.1 Content Development (3-4 hours)**
- Research & compile data (1-2 hrs)
- Write playbook templates for 7 guides (2-2.5 hrs)
- Create FAQ sections (0.5 hrs)

**1.2 Interactive Tool Build (2 hours)**
- Design quiz flow & scoring logic (0.5 hrs)
- Build HTML + JavaScript for quiz (1 hr)
- Test routing & results display (0.5 hrs)

**1.3 Site Integration (2-3 hours)**
- Create playbook pages (7 HTML files) (1 hr)
- Create playbooks JSON data layer (0.5 hrs)
- Update main nav, industry pages, hero CTAs (0.5-1 hr)
- Test internal linking & SEO meta tags (0.5 hrs)

**1.4 QA & Launch (1 hour)**
- HTML/CSS validation
- Quiz logic testing (all answer combinations)
- Mobile responsiveness check
- Link verification

**Deliverables:**
- 7 live playbook pages
- 1 interactive quiz tool
- Updated navigation & CTAs
- All SEO meta tags in place
- JSON data layer (reusable)

### Phase 2: Polish & Growth (2-3 hours, optional)

**2.1 Local Success Stories (1 hour)**
- Find/interview 2-3 local business owners
- Write 2-3 case study snippets
- Embed in playbooks as success story quotes

**2.2 Downloadable Templates (0.5 hours)**
- Create PDF checklists for each playbook
- Add download links in playbook templates

**2.3 Analytics & Optimization (0.5-1 hour)**
- Add GA4 tracking to quiz & playbooks
- Monitor quiz completion rate, most-visited playbooks
- A/B test quiz wording for higher completion

### Phase 3: Expansion (Future, not in this sprint)
- Video walkthroughs (2-3 min demo per playbook)
- CRM integration (capture leads from playbooks)
- Personalized follow-up email sequences
- Advanced analytics dashboard

---

## 8. SUCCESS METRICS

**Quantitative:**
- Quiz completion rate: Target 60%+ (users who start = users who finish)
- Playbook engagement: Avg 2+ min on page (signals reading)
- Lead capture: Email signups / contact clicks per playbook
- SEO: Rank improvement for target keywords ("start business El Dorado", "manufacturing incentives Kansas")
- Traffic growth: Uplift from organic search post-launch (+10-20% target)

**Qualitative:**
- User feedback: Clarity of steps, timeline accuracy, next steps clarity
- Stakeholder feedback: Accuracy of contacts, appropriateness of recommendations

**Tracking:**
- GA4 events: "quiz_started", "quiz_completed", "quiz_result_viewed", "playbook_viewed", "cta_clicked"
- Form submissions: Email signup, contact request

---

## 9. RISKS & MITIGATIONS

| Risk | Likelihood | Mitigation |
|------|------------|-----------|
| Playbook info becomes outdated (fees, timelines change) | Medium | Annual review cycle, stakeholder verification before launch |
| Quiz logic doesn't match user intent | Medium | User testing with 3-5 sample users, iterate before full launch |
| Low playbook engagement (users don't read) | Low | A/B test headlines, break content into scannable sections, add video |
| Stakeholder info changes (phone, email) | High | Quarterly update process, link to centraldir rather than embed |
| Low conversion (leads don't contact city) | Medium | Strong CTAs, clear next steps, follow-up email sequence (Phase 2) |

---

## 10. SCOPING & EFFORT SUMMARY

| Phase | Task | Hours | Status |
|-------|------|-------|--------|
| 1 | Content research & writing | 3-4 | Ready |
| 1 | Quiz tool development | 2 | Ready |
| 1 | Site integration & nav updates | 2-3 | Ready |
| 1 | QA & launch | 1 | Ready |
| **PHASE 1 TOTAL** | | **8-10** | **Ready to Start** |
| 2 | Success stories & case studies | 1 | Optional |
| 2 | Downloadable templates | 0.5 | Optional |
| 2 | Analytics setup | 0.5-1 | Optional |
| **PHASE 2 TOTAL** | | **2-3** | **For Later** |

---

## 11. FILES TO CREATE/MODIFY

**New Files:**
- `/playbooks/index.html` — quiz tool hub
- `/playbooks/start-business.html`
- `/playbooks/expand-manufacturing.html`
- `/playbooks/tax-incentives.html`
- `/playbooks/rezone.html`
- `/playbooks/real-estate.html`
- `/playbooks/permitting.html`
- `/playbooks/hiring.html`
- `/playbooks/data/playbooks.json`
- `/playbooks/css/playbooks.css`

**Modified Files:**
- `/index.html` — add CTA to quiz tool in hero
- `/economy.html` (or industry pages) — link to relevant playbooks
- `/finance.html` — link to tax incentives playbook
- Navigation partials — add "Getting Started" link

---

## 12. DEPENDENCIES & ASSUMPTIONS

**Dependencies:**
- Stakeholder directory JSON (existing `/data/stakeholders.json` or similar)
- Tax incentive program data (PEAK, REAP program specifics)
- Real estate opportunity map (already exists)
- Current zoning/permitting regulations (existing in city docs)

**Assumptions:**
- All stakeholders have current contact info (to verify before launch)
- City has approval for publishing timelines/processes (check with city manager)
- Success story businesses willing to provide testimonials (to recruit during Phase 2)
- No major regulatory changes during content development (1-2 week window)

---

## 13. DEFINITION OF DONE

✅ All 7 playbooks published with complete template  
✅ Interactive quiz tool live and tested (all answer combinations)  
✅ Navigation updated with clear links to playbooks  
✅ SEO meta tags added (all 7 playbooks + quiz page)  
✅ Internal linking between playbooks (logical sequences)  
✅ All stakeholder contacts verified (current, working emails/phones)  
✅ HTML valid, mobile responsive, accessible (WCAG 2.1 AA)  
✅ GA4 tracking implemented (events & goals)  
✅ Documented in memory for future updates  

---

**Status:** Ready for Implementation Planning  
**Next Step:** Invoke writing-plans skill to create detailed build plan  
**Estimated Completion:** 8-10 hours Phase 1, 2-3 hours Phase 2 (optional)
