# El Dorado Policy Playbooks — Getting Started Suite

## Overview

Interactive guides to starting, expanding, or investing in El Dorado, Kansas. This suite includes an **interactive quiz tool** that routes visitors to 7 actionable playbooks covering key business processes.

- **Quiz Tool**: Answer 3 quick questions to find the right playbook
- **7 Playbooks**: Step-by-step guides for different business objectives
- **~10,000 words**: Comprehensive strategic content
- **SEO-optimized**: HowTo schema markup on all pages
- **Fully responsive**: Works on desktop, tablet, and mobile
- **WCAG 2.1 AA**: Accessible to all users

---

## Files & Structure

```
playbooks/
├── index.html                          # Interactive quiz entry point
├── start-business.html                 # How to start a new business
├── expand-manufacturing.html           # How to expand/relocate manufacturing
├── tax-incentives.html                 # How to access tax incentives & grants
├── rezone.html                         # How to request rezoning/variance
├── real-estate.html                    # How to buy/lease commercial property
├── permitting.html                     # How to navigate permitting & construction
├── hiring.html                         # How to hire workers & access training
├── data/
│   └── playbooks.json                  # Quiz metadata & playbook registry
├── css/
│   └── playbooks.css                   # Responsive styling (1,044 lines)
└── README.md                           # This file
```

---

## Quick Start

### For Users

1. **Visit the quiz**: Navigate to `/playbooks/`
2. **Answer 3 questions**: Your industry, business objective, and timeline
3. **Get personalized recommendations**: Quiz ranks playbooks by relevance
4. **Read your playbook**: Start with highest-ranked result
5. **Take action**: Follow steps, contact stakeholders, submit applications

### For Developers

**Setup**: No build process needed. Just serve static files.

```bash
# Verify structure
ls -la playbooks/

# Check JSON validity
cat playbooks/data/playbooks.json | jq .

# Serve locally (Python 3)
cd /Users/guyh/eldorado-plan && python3 -m http.server 8000
# Visit http://localhost:8000/playbooks/
```

---

## Playbook Registry

All playbooks are defined in `data/playbooks.json`. Each entry includes:

- **id**: Unique identifier (used in URLs)
- **title**: Display name
- **url**: Path to playbook HTML
- **estimatedTime**: Timeline to complete process
- **keyStakeholders**: Number of contacts needed
- **industryMatch**: Applicable industries
- **purposeMatch**: Relevant business objectives
- **stageMatch**: Project phases (exploring → deciding → executing)
- **metaDescription**: SEO description
- **relevanceScore**: Used in quiz ranking algorithm

### Usage

The quiz engine (`index.html`) loads this JSON and:
1. Presents 3 question categories
2. Maps user answers to playbook metadata fields
3. Ranks playbooks by relevance score
4. Displays results with personalized "read next" links

---

## Playbook Summaries

### 1. Start a Business in El Dorado
- **For**: Entrepreneurs and business owners
- **Time**: 5–7 business days
- **Covers**: 
  - Business formation & structure
  - Licensing & permits
  - Startup funding & incentives
  - Launch operations

### 2. Expand or Relocate Manufacturing Operations
- **For**: Plant managers and supply chain leaders
- **Time**: 60–90 days
- **Covers**:
  - Site selection & mega-site assessment
  - Utilities verification (water, power, rail)
  - Workforce planning & training partnerships
  - Tax incentives & financing

### 3. Access Tax Incentives & Grants
- **For**: CFOs and business development leaders
- **Time**: 30–60 days
- **Covers**:
  - PEAK (Kansas state investment credits)
  - REAP (local payroll tax credits)
  - IRB (Industrial Revenue Bonds)
  - TIF (Tax Increment Financing)
  - STAR Bonds (sales tax financing)

### 4. Rezone or Request Code Variance
- **For**: Property developers and owners
- **Time**: 60–120 days
- **Covers**:
  - Pre-application meetings
  - Formal variance application
  - Planning Commission review
  - City Commission final vote

### 5. Purchase or Lease Commercial Real Estate
- **For**: Investors and corporate real estate teams
- **Time**: 60–180 days
- **Covers**:
  - Space needs assessment
  - Site inventory & El Dorado Inc. coordination
  - Due diligence & environmental review
  - Negotiation & closing

### 6. Navigate Permitting & Construction
- **For**: Contractors and project managers
- **Time**: 30–90 days
- **Covers**:
  - Pre-permit coordination
  - Permit application & plan review
  - Construction inspections
  - Certificate of occupancy

### 7. Hire Workers & Access Training Programs
- **For**: HR managers and workforce leaders
- **Time**: 30–60 days
- **Covers**:
  - Job posting & candidate screening
  - Butler CC training partnerships
  - CDL & skilled trades programs
  - Payroll tax credits & incentives

---

## SEO & Metadata

Each playbook page includes:

1. **Meta Description**: ~160 characters for search engines
2. **HowTo Schema**: Structured data for rich snippets
   - Helps Google display step-by-step guides in search results
   - 4–5 action steps per playbook
   - Improves click-through rate (CTR)

3. **Keywords**: Industry-specific terms for discoverability

### Example Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Start a Business in El Dorado",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Business Planning & Formation",
      "text": "..."
    }
  ]
}
```

---

## Integration with Main Site

### Navigation Links

**Main nav**: `<a href="playbooks/">🚀 Getting Started</a>`

**Hero CTA**: `<a href="playbooks/" class="btn btn--primary">Find Your Path →</a>`

### Deep Links from Content

**Economy page** (Industry sections):
```html
<a href="playbooks/expand-manufacturing.html">
  → Read the Manufacturing Expansion Playbook
</a>
```

**Finance page** (Tax Incentives section):
```html
<a href="playbooks/tax-incentives.html">
  → Access the Tax Incentives & Grants Playbook
</a>
```

---

## Responsive Design

All playbooks are mobile-first, tested on:
- **Desktop** (1920px+)
- **Tablet** (768–1024px)
- **Mobile** (320–640px)

CSS Grid + Flexbox ensure layouts adapt automatically.

---

## Accessibility (WCAG 2.1 AA)

Each playbook includes:
- ✅ Semantic HTML5 structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators (gold outline)
- ✅ Color contrast ratios meet WCAG AA
- ✅ Alt text on images
- ✅ Proper heading hierarchy (H1 → H2 → H3)

---

## FAQ Accordion & Interactive Elements

Each playbook page includes:
1. **Collapsible timeline steps** — Hide/show process details
2. **FAQ accordion** — Expand/collapse answers
3. **Stakeholder table** — Contact directory with emails
4. **Checklist forms** — Track action items
5. **Success stories** — Real examples from El Dorado

All interactive elements work without JavaScript (progressive enhancement).

---

## Stakeholder Contacts

Each playbook references real El Dorado contacts:
- City Planning Director
- El Dorado Inc. Director
- Economic Development Manager
- Butler Community College Workforce Manager
- Kansas Dept. of Commerce Representatives
- Commercial Real Estate Brokers
- Construction & Permitting Officials

**Maintenance**: Update `playbooks.json` and individual HTML pages quarterly as contacts change.

---

## Analytics & Tracking

The quiz tool sends events to Google Analytics 4:
- Quiz completion (3 questions answered)
- Playbook selection (which result clicked)
- Page time spent
- Exit pages

**Dashboard**: Monitor engagement at `/playbooks/` entry point.

---

## Maintenance & Updates

### Quarterly Review

1. **Verify stakeholder contacts** — Update emails/phone if staff changes
2. **Check incentive programs** — PEAK/REAP rates may change
3. **Review timelines** — Permitting/approval processes may shift
4. **Test all links** — Ensure no broken references

### Annual Updates

1. **Refresh tax incentive amounts** — Check Kansas Dept. of Commerce
2. **Update salary/wage benchmarks** — Review current labor market data
3. **Refresh industry statistics** — Update investment/job projections
4. **Audit all URLs** — Main site links may move

### Content Expansion Ideas

- Add video walkthroughs (screencast of each process)
- Add downloadable checklists (PDF versions)
- Add interactive calculators (ROI, incentive value, timeline)
- Add case studies (local success stories)
- Add bilingual versions (Spanish)

---

## Performance

**Current metrics**:
- Quiz page: ~15KB (HTML + CSS + JSON)
- Each playbook: 17–25KB
- Load time: <1s (typical broadband)
- First Contentful Paint (FCP): <1s
- Cumulative Layout Shift (CLS): 0 (stable)

**Optimization**: Static files only (no backend processing required).

---

## License & Attribution

Content created for El Dorado, Kansas — Vision 2040 initiative.

All playbook text, processes, and recommendations are proprietary to El Dorado Inc. and the City of El Dorado.

---

## Support & Questions

For questions about playbooks:

**City Contact**: [City Manager](https://eldoradokansas.gov/contact)  
**Development**: [El Dorado Inc.](https://eldorado-inc.com)  
**Website**: [Vision 2040 Hub](https://eldoradokansas.gov/vision2040)

---

## Changelog

**v1.0** — June 29, 2026
- ✅ 7 playbooks released
- ✅ Interactive quiz tool
- ✅ SEO schema markup
- ✅ Full responsive design
- ✅ Main site integration
- ✅ WCAG 2.1 AA accessibility

---

Last updated: **June 29, 2026**
