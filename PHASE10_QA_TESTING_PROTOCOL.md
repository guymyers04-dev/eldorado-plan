# Phase 10: QA Testing Protocol & Test Cases
**Status:** Ready to Execute  
**Duration:** 2-4 hours (full suite)  
**Browsers:** Chrome, Safari, Firefox, Mobile  
**Environments:** Staging, then Production

---

## 🎯 TEST EXECUTION OVERVIEW

### Test Phases
1. **Pre-Launch QA** (2 hours) — Staging environment
2. **Launch Day Verification** (30 min) — Production environment
3. **Post-Launch Smoke Tests** (Daily for Week 1)

### Success Criteria
- ✅ 0 critical bugs
- ✅ <3 medium severity bugs
- ✅ All forms functional
- ✅ All links working
- ✅ Maps rendering properly
- ✅ Mobile responsive pass
- ✅ Page load <3 seconds

---

## 📋 TEST CASE CATEGORIES

### CATEGORY 1: NAVIGATION & LINK INTEGRITY
**Time Estimate:** 30 minutes  
**Tester:** QA Lead

#### TC-NAV-001: Main Navigation Links
```
Objective: Verify all main navigation links navigate correctly
Pre-condition: Open staging environment
Steps:
1. Click "Overview" in navbar
   Expected: Navigate to index.html, page loads
2. Click "Economy" dropdown
   Expected: Dropdown appears with 2 sub-sections
3. Click "Growth & Jobs" section
   Expected: Items expand, no page reload
4. Click "North Gateway District" link
   Expected: Navigate to economy.html#north-gateway
5. Repeat for all 8 main navigation categories

Pass Criteria: All links navigate correctly, no 404 errors
```

#### TC-NAV-002: Breadcrumb Navigation
```
Objective: Verify breadcrumbs on detail pages
Steps:
1. Navigate to aerospace.html (Industry page)
   Expected: Breadcrumb appears: Home › Build › Aerospace
2. Click "Home" in breadcrumb
   Expected: Navigate to index.html
3. Navigate to place-golf-resort.html
   Expected: Breadcrumb: Home › Place › Golf Resort
4. Verify on 5+ detail pages

Pass Criteria: Breadcrumbs accurate, links functional
```

#### TC-NAV-003: Internal Cross-Links
```
Objective: Verify all internal document links work
Steps:
1. Open economy.html
2. Find link to "1,131-Acre Mega-Site"
   Expected: Link to mega-site.html
3. Click link
   Expected: Navigate correctly, content displays
4. Sample 10+ cross-links across site
5. Check for broken anchors (#sections)

Pass Criteria: 0 broken links, all content loads
```

#### TC-NAV-004: "Next Page" CTAs
```
Objective: Verify next-page navigation CTAs
Steps:
1. Open place-lake.html
2. Scroll to bottom
3. Find "Next: Downtown & Central Ave." CTA
   Expected: Button styled, clickable
4. Click CTA
   Expected: Navigate to place-downtown.html
5. Test on 3+ pages

Pass Criteria: All CTAs work, styling consistent
```

---

### CATEGORY 2: FORM FUNCTIONALITY
**Time Estimate:** 30 minutes  
**Tester:** QA Lead

#### TC-FORM-001: Lead Capture Form
```
Objective: Verify LEAD_CAPTURE_FORMS.html form works
Steps:
1. Navigate to LEAD_CAPTURE_FORMS.html
2. View form structure
   Expected: All required fields visible (Name, Email, Phone, etc.)
3. Enter valid data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "555-1234"
   - Prospect Type: "Developer"
   - Interest: "Mega-Site"
4. Click Submit
   Expected: Success message appears
5. Check backend for form submission
   Expected: Data captured in database/email
6. Test validation:
   - Submit with empty email
   Expected: Validation error shows
   - Submit with invalid email
   Expected: Validation error shows

Pass Criteria: Form submits correctly, validations work
```

#### TC-FORM-002: Comment Generator Tool
```
Objective: Verify comment-generator.html works
Steps:
1. Navigate to comment-generator.html
2. Select Commission/Topic
3. Enter name and email
4. Generate comment
5. Verify comment displays correctly
6. Test email submission
   Expected: Email sent successfully

Pass Criteria: Tool generates comments, emails send
```

#### TC-FORM-003: Commission Locator
```
Objective: Verify commission-locator.html search works
Steps:
1. Navigate to commission-locator.html
2. View list of commissioners
3. Search for "Miller"
   Expected: Matching commissioners appear
4. Click on commissioner card
   Expected: Contact details expand
5. Verify phone, email, district info displayed

Pass Criteria: Search works, contact info accurate
```

#### TC-FORM-004: Meeting Countdown
```
Objective: Verify meeting-countdown.html displays correctly
Steps:
1. Navigate to meeting-countdown.html
2. Verify list of upcoming meetings displays
3. Check countdown timer updates
4. Click on meeting detail
   Expected: Date, time, location, link display

Pass Criteria: Countdowns work, meeting info accurate
```

---

### CATEGORY 3: INTERACTIVE FEATURES (MAPS & CHARTS)
**Time Estimate:** 30 minutes  
**Tester:** QA Engineer

#### TC-MAP-001: County Commission Map
```
Objective: Verify county-commission-map.html map loads & interacts
Steps:
1. Navigate to county-commission-map.html
2. Page loads without errors
   Expected: Map displays with 5 commission districts colored
3. Hover over district
   Expected: District highlights, name/info shows
4. Click district
   Expected: Commission members list appears
5. Zoom map (mouse wheel)
   Expected: Map zooms smoothly
6. Pan map (drag)
   Expected: Map pans correctly
7. Check responsive
   Expected: Map responsive on mobile

Pass Criteria: Map interactive, responsive, info accurate
```

#### TC-MAP-002: Fire Districts Map
```
Objective: Verify fire-districts-map.html map works
Steps:
1. Navigate to fire-districts-map.html
2. Map displays with fire districts outlined
   Expected: Districts clearly visible
3. Click fire district
   Expected: Station info popup shows
4. Verify station data:
   - Name
   - Address
   - Phone
   - Coverage area
5. Check mobile rendering

Pass Criteria: All stations marked, data accurate
```

#### TC-MAP-003: Real Estate Opportunity Map
```
Objective: Verify real-estate-opportunity-map.html displays properties
Steps:
1. Navigate to real-estate-opportunity-map.html
2. Map loads with parcels/properties marked
3. Click property marker
   Expected: Property details popup (acres, zoning, price)
4. Use map filters:
   - Filter by zoning type
   Expected: Displayed properties update
   - Filter by size
   Expected: Displayed properties update
5. Export/download option
   Expected: Data can be downloaded (if available)

Pass Criteria: Map interactive, filters work, data accurate
```

#### TC-CHART-001: Financial Dashboard Charts
```
Objective: Verify financial-dashboard.html charts render
Steps:
1. Navigate to financial-dashboard.html
2. Charts visible and load completely
   Expected: No chart.js errors in console
3. Hover over data point
   Expected: Tooltip shows value
4. Click legend item
   Expected: Data series toggles on/off
5. Responsive test:
   - View on desktop
   Expected: Charts display well
   - View on tablet
   Expected: Charts readable
   - View on mobile
   Expected: Charts reorganized for mobile

Pass Criteria: Charts render, interactive, responsive
```

#### TC-CHART-002: Metrics Dashboard
```
Objective: Verify metrics-dashboard.html displays KPIs
Steps:
1. Navigate to metrics-dashboard.html
2. Dashboard sections visible:
   - Hero stats (4 boxes)
   - Growth projections (chart)
   - Timeline (interactive)
   - Goals progress (visual)
3. Click on stat box
   Expected: Detailed view expands
4. Interact with timeline
   Expected: Data updates for selected period
5. Mobile responsive test

Pass Criteria: All metrics display, interactive elements work
```

---

### CATEGORY 4: MOBILE RESPONSIVENESS
**Time Estimate:** 20 minutes  
**Tester:** QA Engineer

#### TC-MOBILE-001: iPhone Testing
```
Objective: Verify site works on iPhone (Safari)
Device: iPhone 12/13 (375px width)
Steps:
1. Visit index.html
   Expected: Header, nav, content all visible
   Expected: No horizontal scroll needed
2. Navigate through 3 main pages
   Expected: Mobile nav menu works
   Expected: Forms responsive
   Expected: Touch targets adequate (44px+)
3. Test maps on mobile
   Expected: Touch zoom/pan works
   Expected: Info popups readable
4. Test forms on mobile
   Expected: Keyboard appears for input
   Expected: Submit button accessible

Pass Criteria: No horizontal scroll, touch interactive
```

#### TC-MOBILE-002: Android Testing
```
Objective: Verify site works on Android (Chrome)
Device: Galaxy S21 (360px width)
Steps:
1. Visit index.html
   Expected: Responsive layout loads
2. Test navigation
   Expected: Mobile menu accessible
3. Test forms
   Expected: Keyboard responsive
4. Test maps
   Expected: Touch controls work
5. Test performance
   Expected: Pages load <4 seconds

Pass Criteria: Full functionality on Android
```

#### TC-MOBILE-003: Tablet Testing
```
Objective: Verify site works on iPad
Device: iPad (768px width)
Steps:
1. Visit index.html
   Expected: Tablet-optimized layout
2. Test navigation
   Expected: Dropdown menus work
3. Test maps
   Expected: Full interactivity
4. Landscape mode
   Expected: Layout adjusts correctly

Pass Criteria: Tablet layout optimal
```

---

### CATEGORY 5: PERFORMANCE & LOAD TIME
**Time Estimate:** 15 minutes  
**Tester:** QA Engineer

#### TC-PERF-001: Page Load Time
```
Objective: Verify pages load within acceptable time
Tools: Chrome DevTools, PageSpeed Insights
Steps:
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Clear cache
4. Load index.html
   Expected: Page load <2 seconds
   Expected: LCP (Largest Contentful Paint) <2.5s
5. Test on 10+ major pages:
   - index.html
   - economy.html
   - place.html
   - finance.html
   - 3d-preview.html (expected slower, <4s)
   - ...

Acceptance: All pages <3 seconds, 95th percentile
```

#### TC-PERF-002: Lighthouse Audit
```
Objective: Run Google Lighthouse performance audit
Steps:
1. Open Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Run audit on:
   - index.html
   - economy.html
   - place.html
5. Check scores:
   - Performance: ≥90
   - Accessibility: ≥95
   - Best Practices: ≥90
   - SEO: ≥95

Acceptance: All scores ≥85 (target 90+)
```

#### TC-PERF-003: Slow Connection Test
```
Objective: Verify site works on 3G connection
Steps:
1. Chrome DevTools > Network
2. Select "Slow 3G"
3. Load index.html
   Expected: Page functional within 10 seconds
   Expected: Critical content loads first
   Expected: Images lazy-load
4. Test form submission on slow connection
   Expected: Form submits despite slow speed

Pass Criteria: Functional on slow network
```

---

### CATEGORY 6: SEO & META DATA
**Time Estimate:** 15 minutes  
**Tester:** QA Lead

#### TC-SEO-001: Meta Descriptions
```
Objective: Verify all 97 pages have meta descriptions
Steps:
1. Sample 10 random pages
2. Open page source (Ctrl+U)
3. Look for: <meta name="description" content="..."
4. Verify:
   - Description present
   - Description is 70-160 characters
   - Description summarizes page content
5. Test on 10 pages

Pass Criteria: 100% of pages have valid meta descriptions
```

#### TC-SEO-002: Title Tags
```
Objective: Verify all pages have unique, descriptive titles
Steps:
1. Sample 5 pages from each category
2. Check <title> tag in source
3. Verify:
   - Title is present
   - Title is unique (not duplicated)
   - Title includes "El Dorado" and page name
   - Title is <60 characters

Pass Criteria: All titles valid and unique
```

#### TC-SEO-003: Structured Data
```
Objective: Verify Open Graph tags for social sharing
Steps:
1. Open index.html source
2. Check for:
   - og:title
   - og:description
   - og:image
   - og:url
3. Test social preview:
   - Share to Facebook
   - Share to Twitter/LinkedIn
4. Verify preview shows correct title, description, image

Pass Criteria: Social sharing previews work
```

#### TC-SEO-004: Robots & Sitemap
```
Objective: Verify robots.txt and sitemap.xml
Steps:
1. Visit /robots.txt
   Expected: File exists, allows crawling
2. Visit /sitemap.xml
   Expected: File exists, lists all pages
3. Verify sitemap in Google Search Console
   Expected: All pages listed
4. Check robots.txt rule format:
   Expected: Disallows only specific paths if needed

Pass Criteria: SEO files properly configured
```

---

### CATEGORY 7: ACCESSIBILITY COMPLIANCE
**Time Estimate:** 20 minutes  
**Tester:** Accessibility Specialist

#### TC-A11Y-001: Keyboard Navigation
```
Objective: Verify site fully navigable via keyboard
Steps:
1. Open index.html
2. Use Tab key to navigate
   Expected: Navigation visible (outline/highlight)
3. Tab through navigation menu
   Expected: Menu items focusable
4. Press Enter on menu item
   Expected: Navigation works
5. Tab through forms
   Expected: All form fields focusable
6. Verify skip-to-content link
   Expected: Present and functional
7. Test on 5+ pages

Pass Criteria: All interactive elements keyboard accessible
```

#### TC-A11Y-002: Screen Reader Testing
```
Objective: Verify screen reader compatibility
Tools: NVDA (Windows) or VoiceOver (Mac)
Steps:
1. Open index.html in Firefox + NVDA
2. Navigate with screen reader
   Expected: Headings announced correctly
   Expected: Links have descriptive text
   Expected: Images have alt text
3. Fill form with screen reader
   Expected: Form labels announced
   Expected: Required fields identified
4. Test on economy.html, place.html
   Expected: Navigation structure clear
   Expected: Data presented logically

Pass Criteria: Screen reader can navigate full page
```

#### TC-A11Y-003: Color Contrast
```
Objective: Verify WCAG AA contrast ratios
Tool: WebAIM Contrast Checker
Steps:
1. Sample color combinations on key pages
2. Test:
   - Heading text on background
   - Body text on background
   - Button text on background
3. Verify contrast ratio ≥4.5:1 for normal text
4. Verify contrast ratio ≥3:1 for large text

Pass Criteria: All color combinations meet WCAG AA
```

#### TC-A11Y-004: Focus Indicators
```
Objective: Verify focus indicators visible
Steps:
1. Open index.html
2. Tab through page
   Expected: Gold outline shows focused element
   Expected: Outline clearly visible
   Expected: Outline consistent
3. Test on mobile (using keyboard emulator)
   Expected: Focus visible on touch

Pass Criteria: Focus indicators visible on all interactive elements
```

---

### CATEGORY 8: BROWSER COMPATIBILITY
**Time Estimate:** 20 minutes  
**Tester:** QA Engineer

#### TC-COMPAT-001: Chrome Latest
```
Objective: Verify site works in latest Chrome
Browser: Chrome (latest stable)
Steps:
1. Open index.html
2. Verify page displays correctly
3. Check console for errors
   Expected: No errors or critical warnings
4. Test interactive features
   Expected: Maps, charts, forms all work
5. Test all navigation

Pass Criteria: Full functionality, no console errors
```

#### TC-COMPAT-002: Safari Latest
```
Objective: Verify site works in Safari
Browser: Safari (latest macOS/iOS)
Steps:
1. Desktop: Open index.html in Safari
   Expected: Renders correctly
   Expected: Navigation works
   Expected: Forms functional
2. iOS: Open on iPhone in Safari
   Expected: Mobile layout works
   Expected: Maps interactive
   Expected: Touch works smoothly

Pass Criteria: Full functionality in Safari
```

#### TC-COMPAT-003: Firefox Latest
```
Objective: Verify site works in Firefox
Browser: Firefox (latest)
Steps:
1. Open index.html
2. Verify rendering
3. Check console
4. Test forms and maps
5. Test keyboard navigation

Pass Criteria: Full functionality in Firefox
```

#### TC-COMPAT-004: Edge (Windows)
```
Objective: Verify site works in Microsoft Edge
Browser: Edge (latest)
Steps:
1. Open index.html
2. Verify rendering
3. Test functionality
4. Check console

Pass Criteria: Full functionality in Edge
```

---

## 🎯 TEST EXECUTION CHECKLIST

### Pre-Launch (Staging) — 2 hours
- [ ] TC-NAV-001: Main Navigation Links (5 min)
- [ ] TC-NAV-002: Breadcrumb Navigation (5 min)
- [ ] TC-NAV-003: Internal Cross-Links (10 min)
- [ ] TC-NAV-004: Next Page CTAs (5 min)
- [ ] TC-FORM-001: Lead Capture Form (10 min)
- [ ] TC-FORM-002: Comment Generator (5 min)
- [ ] TC-FORM-003: Commission Locator (5 min)
- [ ] TC-FORM-004: Meeting Countdown (5 min)
- [ ] TC-MAP-001: County Commission Map (10 min)
- [ ] TC-MAP-002: Fire Districts Map (5 min)
- [ ] TC-MAP-003: Real Estate Map (10 min)
- [ ] TC-CHART-001: Financial Dashboard (5 min)
- [ ] TC-CHART-002: Metrics Dashboard (5 min)
- [ ] TC-MOBILE-001: iPhone Test (10 min)
- [ ] TC-PERF-001: Load Time Test (10 min)
- [ ] TC-PERF-002: Lighthouse Audit (10 min)
- [ ] TC-SEO-001: Meta Descriptions (5 min)
- [ ] TC-A11Y-001: Keyboard Navigation (10 min)
- [ ] TC-COMPAT-001: Chrome Test (10 min)

**Total Staging Time: ~2 hours**

### Launch Day (Production) — 30 minutes
- [ ] TC-NAV-001: Navigation works in production
- [ ] TC-FORM-001: Forms submit in production
- [ ] TC-MAP-001: Maps load in production
- [ ] TC-PERF-001: Performance in production
- [ ] TC-MOBILE-001: Mobile works in production
- [ ] Verify no 404 errors
- [ ] Check error logs
- [ ] Monitor analytics events

### Post-Launch (Daily Week 1) — 15 minutes
- [ ] Daily smoke test (5 random pages)
- [ ] Form submission test
- [ ] Map rendering test
- [ ] Performance check
- [ ] Error log review
- [ ] Stakeholder feedback check

---

## 📊 BUG REPORTING FORMAT

```
BUG REPORT TEMPLATE

Bug ID: [AUTO-GENERATED]
Severity: [CRITICAL | HIGH | MEDIUM | LOW]
Title: [Brief description]
Page: [URL]
Browser: [Chrome 91 on Windows 10]
Steps to Reproduce:
1. [Step 1]
2. [Step 2]
Expected Result: [What should happen]
Actual Result: [What actually happened]
Screenshots: [Attach if visual issue]
Console Error: [Any error message]
Assigned To: [Developer name]
Status: [NEW | IN_PROGRESS | RESOLVED | CLOSED]
```

---

## ✅ SIGN-OFF

**QA Lead Signature:** ________________  
**Date:** ________________  
**Overall Status:** ☐ PASS ☐ PASS WITH ISSUES ☐ FAIL

**Sign-off indicates:** All critical tests passed. Site is production-ready.

---

This protocol ensures comprehensive testing before launch. Execute in order, document all results, and escalate any critical issues immediately.
