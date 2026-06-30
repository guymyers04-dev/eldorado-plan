# Phase 10: Google Analytics 4 Implementation Guide
**Status:** Ready to Execute  
**Setup Time:** 1-2 hours  
**Difficulty:** Intermediate  
**Platform:** Google Analytics 4 (GA4)

---

## 🎯 QUICK START

### Step 1: Create Google Analytics 4 Property (15 min)
1. Go to https://analytics.google.com
2. Log in with your Google account
3. Click "Start Measuring"
4. Property name: "El Dorado Vision 2040 Website"
5. Create property
6. Select "Web" as platform
7. Enter website data:
   - Website URL: `https://eldoradovision2040.com` (or staging URL for testing)
   - Website name: "El Dorado Vision 2040"
   - Industry category: "Business Services"
   - Business size: "Small"
8. Click Create stream
9. **Copy Measurement ID** (starts with G-)

### Step 2: Install Tracking Code (30 min)
See "Installation Methods" section below

### Step 3: Verify Tracking (15 min)
See "Verification" section below

---

## 📊 INSTALLATION METHODS

### Method A: Global Site Tag (Recommended for Centralized Updates)

Since your site uses a centralized nav.js system, add the GA4 code to `js/nav.js`:

**File:** `js/nav.js` (at top of file)

```javascript
/* Google Analytics 4 Initialization */
(function() {
  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  
  function gtag() {
    dataLayer.push(arguments);
  }
  
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Replace with your Measurement ID
  
  // Load GA4 script tag
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Same ID
  document.head.appendChild(script);
})();
```

**Alternative: Add to index.html head** (if not using centralized approach)

```html
<head>
  <!-- Google Analytics 4 -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

---

## 🎯 CUSTOM EVENTS TO TRACK

### Event 1: Form Submissions

```javascript
// Add to form submit handler (LEAD_CAPTURE_FORMS.html)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Send custom event to GA4
  gtag('event', 'form_submission', {
    'form_name': 'lead_capture',
    'prospect_type': document.getElementById('prospectType').value,
    'interest_area': document.getElementById('interestArea').value
  });
  
  // Submit form...
});
```

### Event 2: Tool Usage - Development Finder

```javascript
// In development-finder.html
function calculateROI() {
  // Calculate logic...
  
  gtag('event', 'tool_engagement', {
    'tool_name': 'development_finder',
    'acres': propertySize,
    'zoning_type': zoningType
  });
}
```

### Event 3: Tool Usage - Investor Portal

```javascript
// In investor-portal.html
document.getElementById('investorPortal').addEventListener('click', function() {
  gtag('event', 'tool_engagement', {
    'tool_name': 'investor_portal',
    'section': 'deal_flow',
    'action': 'view'
  });
});
```

### Event 4: Interactive Map Usage

```javascript
// When user interacts with maps
map.on('click', function(e) {
  gtag('event', 'map_interaction', {
    'map_name': 'county_commission',
    'feature_clicked': e.properties.name,
    'zoom_level': map.getZoom()
  });
});
```

### Event 5: Content Engagement - Scroll Depth

```javascript
// Track scroll depth
(function() {
  let scrollThresholds = [25, 50, 75, 100];
  let scrollTracked = {};
  
  window.addEventListener('scroll', function() {
    let scrollPercent = Math.round(
      (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100
    );
    
    scrollThresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !scrollTracked[threshold]) {
        scrollTracked[threshold] = true;
        gtag('event', 'scroll_engagement', {
          'page_title': document.title,
          'scroll_depth': threshold + '%'
        });
      }
    });
  });
})();
```

### Event 6: Download/Export Actions

```javascript
// Track downloads
document.getElementById('downloadBtn').addEventListener('click', function() {
  gtag('event', 'file_download', {
    'file_name': 'el_dorado_map_data.pdf',
    'file_type': 'pdf',
    'source_page': 'real_estate_opportunity_map'
  });
});
```

### Event 7: External Link Clicks

```javascript
// Track external link clicks to partners
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', function() {
    gtag('event', 'external_link_click', {
      'link_url': this.href,
      'link_text': this.textContent,
      'source_page': window.location.pathname
    });
  });
});
```

---

## 📈 RECOMMENDED DASHBOARD SETUP

### Dashboard 1: Launch Week Overview

Create a dashboard showing:

```
Title: "Vision 2040 Launch — Week 1 Snapshot"

Cards to include:
1. Users (top-left)
2. Sessions (top-center)
3. Bounce Rate (top-right)
4. Page Views by Page (bottom-left, table)
5. Traffic by Source (bottom-center, pie)
6. Form Submissions (bottom-right, trend)

Date Range: Last 7 days
```

**How to create:**
1. In GA4, go to "Dashboards"
2. Click "Create dashboard"
3. Name: "Launch Week Overview"
4. Add cards using the + button
5. Configure each card
6. Save

### Dashboard 2: Engagement Metrics

```
Title: "Tool Engagement & User Behavior"

Cards:
1. Development Finder Uses (metric)
2. Investor Portal Views (metric)
3. Map Interactions (metric)
4. Average Session Duration (metric)
5. User Flow (diagram)
6. Top Pages (table)
7. Forms Submitted (trend)
```

### Dashboard 3: Conversion Funnel

```
Title: "Lead Generation Funnel"

Cards:
1. Landing Page Views (metric)
2. Form Views (metric)
3. Form Submissions (metric)
4. Conversion Rate (metric)
5. Form Submissions by Prospect Type (pie)
6. Days to Conversion (histogram)
```

---

## 🎯 CONVERSION GOALS (Events to Track as Goals)

In GA4, mark these events as "Conversions" for tracking:

### Goal 1: Lead Form Submission
```
Event Name: form_submission
Description: User submitted lead capture form
Value: 1 (static) or dynamic based on prospect type
Track as Conversion: YES
```

### Goal 2: Comment Submission
```
Event Name: comment_submitted
Description: User submitted public comment
Value: 1
Track as Conversion: YES
```

### Goal 3: Development Finder Query
```
Event Name: tool_engagement
Condition: tool_name = "development_finder"
Description: User used Development Finder tool
Value: 1
Track as Conversion: YES
```

### Goal 4: Investor Portal Access
```
Event Name: tool_engagement
Condition: tool_name = "investor_portal"
Description: User accessed Investor Portal
Value: 1
Track as Conversion: YES
```

---

## 👥 AUDIENCE SEGMENTATION

### Segment 1: Developers
```
Condition: form_submission where prospect_type = "developer"
Count: Track separately
Actions: Send to email list, notify dev team
```

### Segment 2: Investors
```
Condition: (form_submission where prospect_type = "investor") OR 
           (tool_engagement where tool_name = "investor_portal")
Count: Track separately
Actions: Send to investor list, prioritize follow-up
```

### Segment 3: Engaged Users
```
Condition: Session duration > 3 minutes AND page_views > 4
Count: High-intent users
Actions: Retargeting, email nurturing
```

### Segment 4: Return Visitors
```
Condition: Users who visit 2+ times within 30 days
Count: Loyalty metric
Actions: Track retention, engagement patterns
```

---

## 📊 REPORTS TO SET UP

### Report 1: Acquisition
**Purpose:** Where are visitors coming from?

```
Dimensions:
- Session source/medium (e.g., direct / none, organic / google, referral / ...)
- Campaign

Metrics:
- Users
- Sessions
- Conversion rate

Filter: All users
Date: Last 30 days
```

### Report 2: Engagement
**Purpose:** How are users interacting?

```
Dimensions:
- Page title / path
- Event name

Metrics:
- Session duration
- Bounce rate
- Event count
- Views

Order by: Event count descending
```

### Report 3: Tools & Features
**Purpose:** Which tools are most used?

```
Dimensions:
- Event name (filtered to tool_engagement only)
- Tool name
- Source page

Metrics:
- Event count
- Unique users
- Event value

Filters: tool_engagement events only
```

### Report 4: Conversions (Funnels)
**Purpose:** Conversion flow for leads

```
Step 1: Landing page (index.html)
Step 2: Form page (LEAD_CAPTURE_FORMS.html)
Step 3: Form submission event
Step 4: Confirmation email sent

Track: Completion rate, drop-off points
```

---

## 🔔 ALERTS TO CONFIGURE

### Alert 1: Daily Traffic Report
```
Metric: Users
Threshold: Compare to baseline
Alert If: Drop >50% from average
Frequency: Daily email
Recipients: [Marketing Manager, Project Manager]
```

### Alert 2: Form Submission Spike
```
Metric: Form submissions
Threshold: Compare to baseline
Alert If: Increase >200% from average
Frequency: Real-time
Recipients: [Dev Lead, Sales Lead]
Purpose: Immediate follow-up on inbound leads
```

### Alert 3: Error Traffic
```
Metric: Events with tag "error"
Threshold: > 10 in 1 hour
Alert If: Yes
Frequency: Real-time
Recipients: [Technical Lead]
Purpose: Immediate issue response
```

### Alert 4: Page Load Slow
```
Metric: Average page load time
Threshold: > 3 seconds
Alert If: Yes
Frequency: Daily
Recipients: [Technical Lead]
Purpose: Performance monitoring
```

---

## 📱 MOBILE & CROSS-DEVICE TRACKING

GA4 automatically tracks:
- Device type (mobile, desktop, tablet)
- Operating system
- Browser
- Screen resolution

**No additional setup needed** — GA4 handles this automatically.

Reports available under:
- Audience → Devices
- Audience → Operating systems
- Audience → Browser

---

## 🔒 PRIVACY & COMPLIANCE

### GDPR Compliance
```javascript
// Before initializing GA4, check for consent
if (userConsentsToAnalytics) {
  gtag('consent', 'default', {
    'analytics_storage': 'granted',
    'ad_storage': 'denied'
  });
}
```

### Cookie Banner Integration
- Implement consent banner on website
- Allow users to opt-out of tracking
- Document in privacy policy
- Update consent_mode when user opts in/out

### Data Retention
- Set GA4 data retention to 2 months (default)
- Or extend to 14 months (if compliant with local regulations)

---

## ✅ VERIFICATION CHECKLIST

### Step 1: Install Verification (Real-time Report)
```
1. Add GA tracking code
2. Go to GA4 property
3. Go to "Real-time" report
4. Open website in new tab
5. View website for 30 seconds
6. Check Real-time report for your session
   ✓ Should see "1 Active user now"
   ✓ Your current page should be listed
```

### Step 2: Event Verification
```
1. Go to "Events" report
2. Test each custom event:
   - Submit form → form_submission event appears
   - Use Development Finder → tool_engagement event appears
   - Click map → map_interaction event appears
   - Submit comment → comment_submitted event appears
3. Verify event parameters captured correctly
```

### Step 3: Conversion Verification
```
1. Go to "Conversions" report
2. Verify goal events marked as conversions
3. Submit test form
4. Verify conversion recorded in real-time report
```

### Step 4: Dashboard Verification
```
1. Go to "Dashboards"
2. Open custom dashboards
3. Verify cards populating with data
4. Check for any errors or empty cards
```

---

## 🐛 TROUBLESHOOTING

### Issue: Real-time report shows 0 users
**Solutions:**
1. Check GA tracking code is installed
2. Verify Measurement ID is correct
3. Check browser console for errors (F12)
4. Clear browser cache and reload
5. Try incognito mode (bypasses cache)
6. Wait 30 seconds for real-time update

### Issue: Custom events not appearing
**Solutions:**
1. Verify event code is running (console.log to check)
2. Verify event name matches exactly (case-sensitive)
3. Wait 24+ hours for event to appear in reports
4. Check "Events" report specifically (not just Overview)
5. Verify gtag() function is defined before firing events

### Issue: Forms showing 0 submissions
**Solutions:**
1. Verify form submission handler calls gtag()
2. Check that gtag('event', ...) runs before form.submit()
3. Test form in browser console manually
4. Check for JavaScript errors (F12 console)
5. Verify form actually submits

### Issue: Dashboard shows no data
**Solutions:**
1. Check date range is correct
2. Verify events are being captured
3. Try different date range
4. Refresh browser cache
5. Re-create dashboard from scratch

---

## 📋 SETUP CHECKLIST

**Pre-Launch Setup (Week 1):**
- [ ] Create GA4 property
- [ ] Get Measurement ID
- [ ] Install tracking code on staging
- [ ] Test real-time report
- [ ] Set up custom events
- [ ] Create custom dashboards
- [ ] Configure conversion goals
- [ ] Set up alerts
- [ ] Test on production
- [ ] Document tracking plan

**Post-Launch Monitoring (Week 1):**
- [ ] Monitor real-time reports daily
- [ ] Verify event collection working
- [ ] Check form submissions tracking
- [ ] Monitor traffic sources
- [ ] Check mobile vs desktop split
- [ ] Verify no tracking errors
- [ ] Share daily reports with team

---

## 📞 SUPPORT RESOURCES

**Google Analytics Help:**
- https://support.google.com/analytics
- GA4 Setup Assistant: admin.google.com
- Google Analytics Community: https://support.google.com/analytics/community

**Common GA4 Resources:**
- GA4 Setup Guide: https://support.google.com/analytics/answer/9304153
- Event Setup in GA4: https://support.google.com/analytics/answer/9234069
- GA4 Reporting: https://support.google.com/analytics/answer/9212670

---

## 💾 GA4 ACCOUNT STRUCTURE (Recommended)

```
Organization: El Dorado Community
├─ Account: Vision 2040 Website
│  ├─ Property: Production (live site)
│  │  └─ Data stream: Web (production)
│  │
│  └─ Property: Staging (staging/testing)
│     └─ Data stream: Web (staging)
│
└─ [Additional account for other projects]
```

This structure allows separate tracking for production and staging environments.

---

## 🎯 SUCCESS METRICS (Month 1)

Track these KPIs:

| Metric | Target | Baseline |
|--------|--------|----------|
| Users | 500+ | TBD at launch |
| Sessions | 600+ | TBD at launch |
| Bounce Rate | <50% | TBD at launch |
| Avg Session Duration | 3-5 min | TBD at launch |
| Pages per Session | 4+ | TBD at launch |
| Form Submissions | 20+ | TBD at launch |
| Tool Usage Events | 30+ | TBD at launch |

---

**This guide will be updated as GA4 setup progresses. Reference this document throughout the implementation process.**

Last Updated: June 29, 2026  
Next Review: July 20, 2026 (Post-launch analysis)
