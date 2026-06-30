# Google Analytics 4 Setup Guide — El Dorado Vision 2040
**Date:** June 29, 2026  
**Purpose:** Track engagement, measure Phase 10 ROI, optimize conversion  
**Estimated Setup Time:** 1-2 hours

---

## 📊 IMPLEMENTATION OVERVIEW

Google Analytics 4 (GA4) provides real-time engagement tracking, custom events, and conversion measurement across all 94 pages.

### What We'll Track
- **Page views** — Which pages attract visitors
- **Session duration** — How long people engage
- **Scroll depth** — How far down pages people read
- **Form submissions** — Lead capture effectiveness
- **Tool usage** — Development finder, investor portal, project tracker engagement
- **Navigation patterns** — How visitors discover content
- **Geographic & device data** — Device types, visitor locations

### Expected Benefits
- **Phase 10 ROI validation** — Measure if new pages drive traffic
- **Content optimization** — See which content resonates
- **User journey insights** — Understand visitor decision paths
- **Conversion tracking** — Measure investor leads, inquiries, contacts

---

## 🔧 STEP 1: CREATE GOOGLE ANALYTICS ACCOUNT

### If you don't have a GA4 property yet:

1. Go to **analytics.google.com**
2. Click **"Sign in with your Google account"** (use guymyers04@gmail.com)
3. Click **"Create account"** or select existing El Dorado property
4. Set up property:
   - **Property name:** "El Dorado Vision 2040"
   - **Reporting timezone:** America/Chicago
   - **Currency:** USD
5. Click **"Create Property"**
6. Accept the terms
7. **Note your Measurement ID** (format: G-XXXXXXXXXX)

### If you already have an analytics account:
- Go to **Admin** → **Properties** → Select El Dorado property
- Under **Data Streams**, create a new Web stream or use existing
- **Note your Measurement ID**

---

## 🔗 STEP 2: ADD GA4 TRACKING CODE TO ALL PAGES

### The GA4 Tracking Snippet (add to `<head>` of every page):

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

**Replace `G-XXXXXXXXXX` with your actual Measurement ID**

### Option A: Add to each page manually
1. Open each of the 94 HTML files
2. Paste the snippet into the `<head>` section (after the `<title>` tag)
3. Replace with your Measurement ID
4. Save each file

### Option B: Use a template or build script (Recommended)
If pages share a common header template, add GA4 once to that template.

For now, I'll create a script to add it to all pages:

---

## 📝 AUTOMATED SETUP SCRIPT

Use this script to add GA4 to all 94 HTML pages:

```bash
#!/bin/bash
# Replace G-XXXXXXXXXX with your Measurement ID

GA_ID="G-XXXXXXXXXX"  # ← UPDATE THIS

PROJECT_DIR="/Users/guyh/eldorado-plan"
cd "$PROJECT_DIR"

GA_SCRIPT="<!-- Google Analytics 4 -->
<script async src=\"https://www.googletagmanager.com/gtag/js?id=${GA_ID}\"><\/script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
<\/script>"

# Add GA4 to all HTML files
for file in *.html; do
  if ! grep -q "googletagmanager.com" "$file"; then
    # Find the </head> tag and insert GA4 before it
    sed -i.bak "/<\/head>/i\\
$GA_SCRIPT
" "$file"
    rm "${file}.bak"
    echo "✅ Added GA4 to $file"
  fi
done

echo "Google Analytics 4 setup complete!"
```

**To use this script:**
1. Get your Measurement ID from Google Analytics
2. Replace `G-XXXXXXXXXX` in the script with your ID
3. Save the script as `setup_ga4.sh`
4. Run: `bash setup_ga4.sh`

---

## 📊 STEP 3: SET UP KEY EVENTS

In Google Analytics, configure these custom events to track engagement:

### Event 1: Development Finder Tool Usage
```javascript
gtag('event', 'development_finder_search', {
  event_category: 'engagement',
  event_label: 'development_finder'
});
```

### Event 2: Investor Portal FAQ Views
```javascript
gtag('event', 'investor_portal_view', {
  event_category: 'engagement',
  event_label: 'investor_portal'
});
```

### Event 3: Form Submissions (Leads)
```javascript
gtag('event', 'form_submit', {
  event_category: 'conversion',
  event_label: 'inquiry_form'
});
```

### Event 4: Map Interaction
```javascript
gtag('event', 'map_interaction', {
  event_category: 'engagement',
  event_label: 'leaflet_map'
});
```

### Event 5: Download (PDF, data)
```javascript
gtag('event', 'file_download', {
  event_category: 'engagement',
  event_label: 'pdf_download'
});
```

---

## 📈 STEP 4: CREATE DASHBOARDS

### Dashboard 1: Executive Overview
- Total sessions (daily)
- New vs. returning users
- Top 10 pages
- Average session duration
- Bounce rate trend

### Dashboard 2: Content Performance
- Page views by page
- Avg. time on page (by content)
- Scroll depth (heatmap)
- Exit pages (where people leave)

### Dashboard 3: Engagement Tools
- Development Finder usage
- Investor Portal views
- Project Tracker engagement
- Metrics Dashboard access
- Financial Dashboard access
- 3D Preview interactions

### Dashboard 4: Conversions
- Form submissions (by page)
- Lead source (which pages drive inquiries)
- Conversion rate (inquiries / visitors)
- Geographic conversion breakdown

---

## 🎯 STEP 5: SET UP CONVERSION GOALS

In Google Analytics, configure these as conversion events:

1. **Lead Form Submission** — Any inquiry form submission
2. **Tool Access** — Accessing investor portal, development finder
3. **Engagement Session** — Session > 2 minutes (engaged visitor)
4. **Strategic Page View** — View of key pages (economy, housing, industry pages)
5. **Multi-page Session** — User views 3+ pages (exploring deeply)

---

## 📱 IMPLEMENTATION CHECKLIST

- [ ] Create GA4 property in Google Analytics
- [ ] Note Measurement ID (G-XXXXXXXXXX)
- [ ] Add GA4 snippet to all 94 HTML pages
- [ ] Verify GA4 is reporting data (check Real-time report)
- [ ] Set up custom events in Google Analytics
- [ ] Create dashboards for tracking
- [ ] Configure conversion goals
- [ ] Document baseline metrics (before Phase 10)

---

## 🚀 QUICK START (1-2 hours)

### Minimum setup needed:
1. ✅ Create GA4 property
2. ✅ Add tracking code to all pages
3. ✅ Let it run for 24 hours to collect data
4. ✅ Check Real-time report

### Full setup (adds another hour):
5. Set up custom events
6. Create dashboards
7. Configure conversion goals

---

## 📊 WHAT TO MEASURE FOR PHASE 10

Once GA4 is running, capture these **baseline metrics before Phase 10 launch:**

| Metric | Current Baseline | Phase 10 Target | Success = |
|--------|------------------|-----------------|-----------|
| Monthly sessions | ? | 3.1x increase | Traffic grows 3x |
| Avg. session duration | ? | +50% | People engage longer |
| Pages/session | ? | +2 pages | Deeper exploration |
| Conversion rate (leads) | ? | 8% | 8% of visitors inquire |
| Top 10 pages | ? | Diverse mix | Content resonates |

---

## 🔗 QUICK LINKS

- **Google Analytics:** analytics.google.com
- **GA4 Setup Guide:** https://support.google.com/analytics/answer/9304153
- **Custom Events:** https://support.google.com/analytics/answer/9267744
- **Dashboards:** https://support.google.com/analytics/answer/1033480

---

## ❓ TROUBLESHOOTING

**Q: How do I verify GA4 is working?**
A: Go to Google Analytics → **Real-time** report. If you see data flowing in, it's working.

**Q: What's the delay between page view and Analytics?**
A: Real-time report shows data within seconds. Full reports update every 24 hours.

**Q: Do I need to update the tracking code on every page?**
A: Yes, or use a header template/include file if your site uses one.

**Q: Can I track form submissions automatically?**
A: Yes, if forms have GA4 event tracking added to the form submit handler.

---

## 📅 NEXT STEPS

1. **Today:** Set up GA4 account and get Measurement ID (15 min)
2. **Today:** Add tracking code to all 94 pages (30-45 min)
3. **Tomorrow:** Verify data is flowing (Real-time report)
4. **This week:** Set up dashboards and custom events (optional, for deeper insights)
5. **Before Phase 10:** Document baseline metrics for comparison

---

**Status:** Ready to implement  
**Estimated Time:** 1-2 hours total  
**Expected ROI:** Measurable Phase 10 impact, data-driven optimization

**Next: Get your GA4 Measurement ID and we can automate the full setup!**
