# Analytics & UTM Tracking Setup Guide

**Purpose:** Track recruitment campaign performance, visitor source, and lead generation  
**Status:** Ready to implement  
**Tools:** Google Analytics 4 (GA4), UTM parameters, conversion tracking

---

## PART 1: Google Analytics 4 Setup

### Step 1: Create GA4 Property (If not already done)

1. Go to: https://analytics.google.com/
2. Click **"Create Property"**
3. Name: "El Dorado Vision 2040"
4. Timezone: Central Time (CT)
5. Currency: USD
6. Create
7. Follow **Data Stream** setup for Web

### Step 2: Get Your GA4 Measurement ID

After creating property:
1. Click **Admin** (bottom left)
2. Go to **Data Streams** under Property
3. Click your web stream
4. Copy **Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Add GA4 Tag to All Pages

Add this code to the `<head>` section of index.html and all other pages:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

---

## PART 2: UTM Parameter Framework

### What are UTM Parameters?

UTM parameters track where website traffic comes from. Format:

```
https://eldorado-vision2040.com/precision-ag.html
?utm_source=email
&utm_medium=campaign
&utm_campaign=precision_ag_outreach
&utm_content=cold_email_1a
&utm_term=climate_fieldview
```

### UTM Field Definitions

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `utm_source` | Where traffic came from | email, linkedin, partnership |
| `utm_medium` | Type of outreach | campaign, direct, referral |
| `utm_campaign` | Campaign name | precision_ag_outreach_2026 |
| `utm_content` | Email/content variation | cold_email_1a, followup_1b |
| `utm_term` | Specific company/contact | climate_fieldview, arcbest |

### UTM Naming Convention (Consistent & Trackable)

**Source Options:**
- `email` — Email campaigns (main)
- `linkedin` — LinkedIn outreach
- `partnership` — Strategic partners
- `tradeshows` — Industry conferences
- `referral` — Word-of-mouth

**Medium Options:**
- `campaign` — Formal outreach sequence
- `direct` — Direct contact sharing
- `referral` — Partner introduction
- `content` — Blog post, whitepaper
- `event` — Tradeshow, webinar

**Campaign Format:**
```
[Industry]_outreach_[Year]

Examples:
- precision_ag_outreach_2026
- batteries_ev_outreach_2026
- biotech_hub_2026
```

**Content Format (tracks email version):**
```
[Email sequence]_[Company]

Examples:
- email_1a_cold_fieldview
- email_1b_followup_archest
- email_2_site_visit_offer
```

---

## PART 3: Campaign-Specific UTM Links

### Precision Agriculture Campaign

**Cold Email 1A (Climate FieldView):**
```
Base URL: https://eldorado-vision2040.com/precision-ag.html
Full URL:
https://eldorado-vision2040.com/precision-ag.html?utm_source=email&utm_medium=campaign&utm_campaign=precision_ag_outreach_2026&utm_content=email_1a_cold&utm_term=climate_fieldview
```

**Cold Email 1B (Follow-up):**
```
https://eldorado-vision2040.com/precision-ag.html?utm_source=email&utm_medium=campaign&utm_campaign=precision_ag_outreach_2026&utm_content=email_1b_followup&utm_term=climate_fieldview
```

**Site Visit Email:**
```
https://eldorado-vision2040.com/precision-ag.html?utm_source=email&utm_medium=campaign&utm_campaign=precision_ag_outreach_2026&utm_content=email_2_site_visit&utm_term=climate_fieldview
```

---

### Batteries & EV Campaign

**Cold Email (Xylem):**
```
https://eldorado-vision2040.com/batteries-ev.html?utm_source=email&utm_medium=campaign&utm_campaign=batteries_ev_outreach_2026&utm_content=email_1a_cold&utm_term=xylem
```

---

## PART 4: UTM Link Generator (Quick Tool)

### Use this spreadsheet formula to auto-generate UTM links:

In Google Sheets:

```
=A1&"?utm_source="&B1&"&utm_medium="&C1&"&utm_campaign="&D1&"&utm_content="&E1&"&utm_term="&F1
```

**Column layout:**
- A: Base URL (e.g., `https://eldorado-vision2040.com/precision-ag.html`)
- B: utm_source (e.g., `email`)
- C: utm_medium (e.g., `campaign`)
- D: utm_campaign (e.g., `precision_ag_outreach_2026`)
- E: utm_content (e.g., `email_1a_cold`)
- F: utm_term (e.g., `climate_fieldview`)

Result: Full UTM link ready to paste in emails

---

## PART 5: Conversion Tracking Setup

### Define Conversions in GA4

Track these key actions as "conversions":

1. **Industry Page Views** (baseline engagement)
   - Goal: 50+ visits per industry page per week
   - Metric: Page view on precision-ag.html, batteries-ev.html, etc.

2. **Contact Form Submissions** (lead capture)
   - Goal: 3-5 submissions per week
   - Metric: Form submit event on any industry page
   - (Set up form tracking - see PART 6)

3. **Site Visit Booking** (commitment)
   - Goal: 3-4 site visits scheduled per quarter
   - Metric: Click on "Schedule Site Visit" CTA
   - (Create separate tracking link)

4. **Document Download** (engagement signal)
   - Goal: 20+ PDF downloads per campaign
   - Metric: Click on PDF download link
   - (Use UTM-tracked download link)

### Set Up Conversion Events in GA4

1. **Go to Admin → Conversions**
2. **Click "Create Conversion Event"**
3. **For Form Submissions:**
   - Event name: `form_submission`
   - Mark as conversion: Yes
4. **For Site Visits:**
   - Event name: `site_visit_scheduled`
   - Mark as conversion: Yes

---

## PART 6: Contact Form Tracking

### Add to Contact Form (Simple HTML)

```html
<form id="inquiry-form">
  <input type="text" name="company" placeholder="Company Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Send Inquiry</button>
</form>

<script>
document.getElementById('inquiry-form').addEventListener('submit', function(e) {
  // Track form submission in GA4
  gtag('event', 'form_submission', {
    'form_name': 'industry_inquiry',
    'form_location': window.location.pathname
  });
  
  // Prevent default, send form, etc.
  // (implement your form submission handler)
});
</script>
```

---

## PART 7: Campaign Dashboard Configuration

### What to Monitor Weekly

In **Google Analytics 4 → Reports**:

1. **Traffic Source Report**
   - Filter by utm_source = "email"
   - Track sessions, users, bounce rate
   - **Target:** 100+ sessions per week, <50% bounce rate

2. **Campaign Performance**
   - Group by utm_campaign
   - View: Sessions, Conversion Rate
   - **Target:** 20%+ email open rate (indicated by session)

3. **Industry Page Traffic**
   - Filter pages: /precision-ag.html, /batteries-ev.html, etc.
   - Metric: Unique users, avg session duration
   - **Target:** 50+ users per page per week

4. **Conversion Funnel**
   - Industry page view → Form submission → Site visit
   - Metric: Conversion rate at each step
   - **Target:** 30%+ form completion, 50%+ site visit confirm

---

## PART 8: Weekly Reporting Template

### Email Report (Send to Leadership)

```
SUBJECT: Weekly Recruitment Campaign Performance [Week of June 29]

HIGHLIGHTS:
───────────────────────────────────────────────────────────────
Total Email Sends: [#]
Total Clicks: [#] ([X]% click-through rate)
Industry Page Traffic: [#] unique visitors
Form Submissions: [#] leads
Site Visits Scheduled: [#]

BY CAMPAIGN:
───────────────────────────────────────────────────────────────
Precision Ag:
  • Emails sent: 3
  • Open rate: [X]%
  • Click rate: [X]%
  • Page visits: [#]
  • Status: [Awaiting responses / Got 1 response / Scheduled call]

Aerospace:
  • Emails sent: 3
  • Open rate: [X]%
  • Page visits: [#]
  • Status: [Status]

[etc. for each industry]

TOP PERFORMERS:
───────────────────────────────────────────────────────────────
✓ Highest click-through: [Campaign name] ([X]% CTR)
✓ Most popular page: [Industry] (precision-ag.html - [#] visits)
✓ Fastest response: [Company name] ([# hours])

NEXT WEEK PLAN:
───────────────────────────────────────────────────────────────
• Send [#] follow-up emails (Email 1B sequence)
• Targeted warm introductions: [Companies]
• Site visits scheduled: [Dates]

ISSUES/BLOCKERS:
───────────────────────────────────────────────────────────────
[ List any problems, undelivered emails, etc. ]

───────────────────────────────────────────────────────────────
Dashboard: [Link to GA4 dashboard]
Next report: [Date]
```

---

## PART 9: Email Tracking (Bonus)

### Track Email Opens & Clicks

For more precise email tracking, use **email tracking service**:
- HubSpot (free tier available)
- Mailchimp
- Constant Contact
- Outreach.io (B2B focused)

Or use **Google Workspace** features:
- Schedule emails
- See delivery status
- Track who opened (some integrations)

### Simpler: Use UTM Links + Analytics

Track in GA4:
- Email click-throughs (via UTM utm_medium=email)
- Bounce rate from emails (low bounce = engaged visitors)
- Conversion rate from email visitors

---

## PART 10: A/B Testing Setup

### Test Email Subject Lines

**Setup:** Create TWO email variants with different subject lines, track separately

```
VERSION A:
Subject: [Company Name] + El Dorado | Precision Ag Hub Opportunity
Link: ...precision-ag.html?utm_content=subj_a_company_name

VERSION B:
Subject: Precision Agriculture Tech Hub — Kansas Heartland Initiative
Link: ...precision-ag.html?utm_content=subj_b_hub_initiative
```

**Compare in Analytics:**
- Filter by utm_content = "subj_a_*" vs "subj_b_*"
- Measure: Click-through rate, time on page, bounce rate
- Winner: Higher CTR = better subject line

---

## QUICK START CHECKLIST

- [ ] **Step 1:** Install GA4 tag on all pages (PART 1)
- [ ] **Step 2:** Create UTM links for precision ag cold emails (PART 3)
- [ ] **Step 3:** Set up form tracking (PART 6)
- [ ] **Step 4:** Define conversions in GA4 (PART 5)
- [ ] **Step 5:** Create GA4 dashboard for weekly reporting (PART 7)
- [ ] **Step 6:** Send first batch of emails with UTM links (Week 1)
- [ ] **Step 7:** Monitor analytics daily (Week 1-2)
- [ ] **Step 8:** Weekly reporting to leadership (PART 8)

**Estimated setup time:** 1-2 hours

---

## Contact Support

For GA4 issues:
- Google Analytics Help: support.google.com/analytics
- GA4 Setup Guide: analytics.google.com/analytics/web/

---

*Analytics setup guide created: 2026-06-29 | Status: READY TO IMPLEMENT*
