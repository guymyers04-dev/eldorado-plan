# Live Company Directory — Design Specification
**Date:** June 29, 2026  
**Status:** Approved  
**Effort Estimate:** 3–4 weeks (MVP + full features)

---

## Executive Summary

Add an interactive **Live Company Directory** to `economy-industry.html` that showcases 50+ El Dorado employers across all industries. The directory features full-text search, industry/size/hiring filters, and an interactive map view. Data is sourced through a hybrid model: El Dorado Inc. seeds initial list, businesses self-claim/update profiles, and quarterly verification maintains accuracy. This tool converts abstract "economic development" into concrete proof—residents and site selectors see real companies, real hiring, real growth.

---

## Goals & Success Metrics

### Primary Goals
1. **Credibility through transparency** — visitors see 50+ real companies, hiring status, recent expansions
2. **Personal relevance** — job seekers can search/filter to find local opportunities
3. **Site selector conversion** — prove El Dorado has active, diverse, hiring employers
4. **Community ownership** — businesses actively maintain their own profiles (crowdsource)

### Success Metrics
- **Launch:** 50+ companies visible with search + filters functional
- **Month 1:** 30+ companies claimed/updated via crowdsource form
- **Month 3:** 70+ companies in directory (organic growth + new recruits)
- **Engagement:** 200+ unique visitors to directory per month; 15%+ click-through to company websites

---

## Requirements

### Functional Requirements

#### Search & Discovery
- **Full-text search** across: company name, industry, description, products/services
- **Filter sidebar:**
  - Industry category (dropdown: Advanced Manufacturing, Logistics, Food Processing, Energy Services, AgTech, Composites, Environmental, Packaging)
  - Employee size slider (5–10, 10–50, 50–100, 100–250, 250+)
  - Hiring status toggle (hiring, stable, shrinking)
  - Filters persist in URL params for shareable links
- **Search + filters execute in real-time** with no page reload
- **Clear all filters** button

#### Display Views
- **Card grid view (default):** 2 columns (desktop), 1 column (mobile), 3 columns (wide screens)
  - Compact card: logo, name, industry tag, employee count, hiring badge, location, brief description (2 lines), action buttons
  - Hover state: shadow lift, slight scale, highlight
- **Map view (toggle button):**
  - Leaflet.js map centered on El Dorado
  - Companies as pins clustered by area
  - Click pin → company card popup (name, industry, hiring status, contact link)
  - Zoom to filter: show only companies in visible area option
- **Sort options:** by name, by company size, by hiring urgency, by recently updated

#### Company Profiles
- **Compact card view (grid/map):**
  - Logo (left, ~60px)
  - Company name (bold)
  - Industry + hiring status badge
  - Employee count + location
  - 2-line description truncated
  - "View Profile" button

- **Full profile modal/page:**
  - Header: logo, name, industry, location, contact info (CEO/HR + email + phone)
  - Stats: founded year, employee count, hiring status, recent milestones (2–3 bullet points)
  - Long description (200–300 words)
  - Products/services detail (paragraph + bullet list)
  - Open positions (count + link to company careers page or Indeed feed)
  - Media: facility photo, product photos
  - CTA buttons: "Visit Website" | "View Careers" | "Contact Company"
  - Company social links (LinkedIn, Twitter if available)

#### Crowdsource/Claims
- **"Claim your company" form** (modal):
  - Company name field (auto-select from directory or free-text new company)
  - Contact email (verification via magic link or code)
  - Company story text area (replaces default description, 200–500 characters)
  - Logo upload (optional)
  - Website (optional, pre-populated if exists)
  - Hiring status update (hiring/stable/shrinking)
  - Open positions count (number field)
  - Submit → confirmation email → El Dorado Inc. admin approval queue
  - Once approved, company profile auto-updates + "Last updated: [date]" timestamp appears

#### Admin Panel (Password-Protected)
- **Accessible at:** `/admin/companies-manage.html` (basic auth or single password)
- **Features:**
  - Table view of all companies
  - Quick-edit fields: company name, industry, employees, hiring status, location
  - "Verify crowdsource claim" button → review submitted changes, approve/reject
  - "Add new company" button → inline form
  - "Delete company" button (soft delete, track in logs)
  - "Export as JSON" button → download `/data/companies.json`
  - Monthly audit checklist: "Last verified: [date]", prompts to re-verify oldest entries

---

## Data Model

### Companies JSON Structure
**File:** `/data/companies.json`

```json
{
  "lastUpdated": "2026-06-29T14:30:00Z",
  "companies": [
    {
      "id": "eldoco-001",
      "name": "ABC Manufacturing Co.",
      "industry": "Advanced Manufacturing",
      "subIndustry": "Precision components",
      "employees": 85,
      "employeeRange": "50-100",
      "hiringStatus": "hiring",
      "openPositions": 5,
      "founded": 2012,
      "location": "North Gateway Industrial Park, Zone A",
      "latitude": 37.8144,
      "longitude": -96.8642,
      "logo": "/img/companies/eldoco-001-logo.png",
      "website": "https://abcmfg.com",
      "linkedin": "https://linkedin.com/company/abc-mfg",
      "twitter": "",
      "contactName": "John Smith",
      "contactTitle": "HR Director",
      "contactEmail": "john@abcmfg.com",
      "contactPhone": "(316) 555-0001",
      "description": "Short 1-2 sentence overview for card view.",
      "story": "Long-form company narrative (200-300 words). Tell us your journey to El Dorado, why you chose us, how you're growing here.",
      "productsServices": "Detailed description of what company makes/does. Can include bullet list.",
      "recentMilestones": [
        "Expanded production line Q1 2026",
        "Hired 12 production staff",
        "New CNC equipment installed"
      ],
      "facilityPhoto": "/img/companies/eldoco-001-facility.jpg",
      "media": [
        {
          "type": "photo",
          "url": "/img/companies/eldoco-001-product-1.jpg",
          "caption": "New production line"
        }
      ],
      "careersUrl": "https://abcmfg.com/careers",
      "verificationStatus": "verified",
      "verifiedDate": "2026-06-29",
      "claimedDate": "2026-06-15",
      "claimedByEmail": "john@abcmfg.com",
      "notes": "El Dorado Inc. internal notes"
    }
    // ... 49+ more companies
  ]
}
```

### Initial Company List (Seed Data)
El Dorado Inc. provides CSV or list of 50+ known companies to seed directory. Script converts to JSON format with:
- Company name (required)
- Industry (required)
- Approximate employees (required)
- Location (required)
- Website (if known)
- Contact info (if public)
- Logo (optional, can be added later)
- Description (can be generic initially, updated on claim)

---

## Technical Implementation

### Frontend Architecture

#### Files to Create/Modify
- **`economy-industry.html`** (modify)
  - Add new section `#company-directory` after "Workforce Alignment"
  - HTML structure for search, filters, views (grid/map toggle)
  - Embed company data JSON via `<script type="application/json" id="companies-data">`

- **`js/directory.js`** (new)
  - Load companies from JSON
  - Search function (full-text filter)
  - Filter logic (industry, size, hiring status)
  - Sort options
  - Render card grid
  - Render Leaflet map

- **`js/directory-map.js`** (new)
  - Leaflet map initialization
  - Company clustering
  - Pin click handlers
  - Popup generation

- **`css/directory.css`** (new)
  - Card grid styles
  - Filter sidebar styles
  - Hover/active states
  - Responsive breakpoints
  - Modal styles (claim form)

- **`admin/companies-manage.html`** (new)
  - Password-protected admin panel
  - Company table (editable)
  - Claim approval queue
  - Add/delete company forms
  - Export JSON button

- **`data/companies.json`** (new)
  - Master company data file

#### Libraries & Dependencies
- **Leaflet.js** — map rendering (already used elsewhere on site?)
- **Leaflet.markercluster** — cluster pins
- **Vanilla JavaScript** — no additional frameworks needed

#### Data Flow
1. Page loads → `js/directory.js` fetches `/data/companies.json`
2. User types in search bar → filter array in real-time, re-render grid
3. User adjusts filters → update URL params, re-render grid
4. User clicks "View Profile" → modal opens with full company data
5. User clicks "Claim your company" → modal opens crowdsource form
6. Crowdsource submit → POST to `/admin/claim-handler.php` (or similar backend endpoint)
7. Admin reviews claim → approves/rejects → `/data/companies.json` auto-updated or manually edited
8. Admin exports JSON → downloads current state for backup/audit

### Backend (Minimal)
- **`/admin/claim-handler.php`** (or Node/Python equivalent)
  - Receives crowdsource claim form data
  - Validates email (send magic link or verification code)
  - Stores claim in temporary "pending" JSON file or database
  - Sends email to El Dorado Inc. admin with review link
  - Admin approves → claim merged into `/data/companies.json`

- **Admin auth:** Single password or API key (simple for initial launch)

---

## Content & Messaging

### Section Heading (economy-industry.html)
```
El Dorado Companies Directory

Discover 50+ employers across all industries. See who's hiring, where they're located, and how to join the team.
```

### Filter Labels
- "All Industries" / "Advanced Manufacturing" / "Logistics" / etc.
- "All Sizes" / "5–10 employees" / "10–50" / etc.
- "All Statuses" / "Actively Hiring" / "Stable" / "Growing"

### Empty State (No Results)
"No companies match your search. Try adjusting filters or browse all companies."

### Company Card CTA
"View Profile" or "Learn More"

### Full Profile CTA
- Primary: "Visit Website" (link to company site)
- Secondary: "View Open Positions" (link to careers page or Indeed)
- Tertiary: "Contact Company" (reveal email/phone)

---

## Data Sourcing & Maintenance

### Initial Seed (Week 1)
1. El Dorado Inc. compiles list of 50+ known companies (existing employers, recent arrivals, prospects)
2. Provide CSV with: name, industry, employees, location, website, contact (if public)
3. Format into `/data/companies.json` structure
4. Review for completeness, add logos/photos where available
5. Deploy to live site

### Ongoing Updates (Monthly)
**El Dorado Inc. responsibilities:**
- Monitor for new business registrations (Kansas Secretary of State, Chamber)
- Add new companies to directory within 30 days of opening
- Quarterly verification sweep: mark companies as "verified" with date
- Review and approve crowdsourced claims within 5 business days
- Update hiring status if known to change (new projects, layoffs, expansions)

**Business owner responsibilities (crowdsource):**
- Claim profile via "Claim your company" form (email verification)
- Update: company story, hiring status, open positions count, logo, media
- Re-verify annually or when major changes occur

### Quality Assurance
- **Duplicate detection:** Script flags companies with identical names or domains
- **Contact verification:** Annual outreach to confirm company still operates
- **Hiring status accuracy:** Flag companies with "hiring" status if no position posted for 60+ days
- **Audit log:** Track all changes (who, when, what) for transparency

---

## Integration Points

### From economy-industry.html
- Pill nav: add "Browse Companies" pill → scroll to directory section
- Industry cards: add "See companies in [industry]" link → pre-filter directory by industry

### From navbar
- "Economy" dropdown: add "Companies Directory" link → jump to section (if scrollable) or `/companies.html` (future)

### Cross-linking
- Each industry card shows: "X companies in El Dorado are hiring in this sector" with link to filtered view
- Investor pages (if exists): "Meet our employers" → link to directory

---

## Phased Rollout

### Phase 1: MVP (Week 1–2)
- ✅ `economy-industry.html` section with search + basic filters
- ✅ Card grid view only (no map)
- ✅ 50 companies seeded from El Dorado Inc. list
- ✅ No crowdsource yet; read-only directory
- ✅ Styles for cards + responsive
- **Launch:** Basic, credible, searchable company list

### Phase 2: Crowdsource + Map (Week 3–4)
- ✅ Crowdsource claim form + email verification
- ✅ Admin panel for approving claims
- ✅ Leaflet map view with pins/clusters
- ✅ Map toggle button
- **Launch:** Businesses can claim/update, map adds visual richness

### Phase 3: Polish & Analytics (Week 4+)
- ✅ Sort options (by name, size, hiring urgency)
- ✅ Analytics: track searches, popular companies, filter patterns
- ✅ Monthly audit workflow
- ✅ Export/backup utilities for admin

---

## Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Stale/inaccurate company data** | Credibility loss if outdated | Quarterly verification sweep; flag old entries with "last verified" date |
| **Data entry burden on El Dorado Inc.** | Updates backlog, falls behind | Crowdsource claims to shift responsibility; admin automation tools |
| **Companies don't claim profiles** | Low crowdsource participation | Email outreach campaign + incentive (featured placement, highlight badge) |
| **Map performance with 50+ pins** | Slow load/poor UX | Leaflet clustering; lazy-load map JS; test performance early |
| **Mobile experience degradation** | Lost mobile users | Responsive design from start; test on iOS/Android; mobile-first filters |

---

## Success Criteria (Approval Gate)

✅ Phase 1 Launch:
- [ ] Search filters companies in real-time
- [ ] Grid displays 50+ companies with all required fields
- [ ] Responsive on mobile, tablet, desktop
- [ ] No broken links or missing logos
- [ ] Performance: page loads in <2s, search/filter in <500ms
- [ ] At least 5 companies have full profiles with stories + media

✅ Phase 2 Launch:
- [ ] Map renders without errors, clusters work
- [ ] Crowdsource form validates and submits
- [ ] Admin panel functional (view, edit, approve)
- [ ] At least 20 companies claimed/updated via crowdsource

---

## Future Enhancements (Out of Scope)

- Advanced filters: certifications (ISO, etc.), minority-owned status, remote work options
- Company blog feed integration
- Job board feed (Indeed, LinkedIn Careers API)
- Company comparison tool ("Compare ABC vs XYZ Manufacturing")
- Salary database (anonymized)
- Export to PDF brochure (for site selectors)

---

## File Checklist

**New Files:**
- `/data/companies.json`
- `/js/directory.js`
- `/js/directory-map.js`
- `/css/directory.css`
- `/admin/companies-manage.html`
- `/admin/claim-handler.php` (or equivalent backend)

**Modified Files:**
- `economy-industry.html` (add section + placeholder)
- `/css/styles.css` (may need adjustments for new components)
- Navbar/menu (add "Companies Directory" link)

**Documentation:**
- This spec (2026-06-29-live-company-directory-design.md)
- Admin guide: how to manage directory, approve claims, export data
- User guide: how to search/filter, claim company profile

---

## Questions & Assumptions

✅ Assumption: El Dorado Inc. can provide 50+ company list by Week 1
✅ Assumption: No existing backend database; flat JSON file is acceptable
✅ Assumption: Crowdsource claims routed to El Dorado Inc. email, manually approved
✅ Assumption: Map is "nice to have"; grid view is core MVP
✅ Assumption: No real-time hiring feed; hiring status is manually updated quarterly

---

**Approved By:** User  
**Date Approved:** June 29, 2026  
**Next Step:** Writing implementation plan
