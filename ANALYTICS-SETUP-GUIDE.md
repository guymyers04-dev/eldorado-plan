# VISION 2040: ANALYTICS SETUP GUIDE
**Complete Google Analytics 4 Implementation for Website Tracking**

**Status**: Ready to Implement  
**Estimated Setup Time**: 30-45 minutes  
**Tracking Level**: Conversion-focused (leads, signups, events)

---

## 📊 **STEP 1: GOOGLE ANALYTICS 4 SETUP**

### 1.1 Create/Access GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **"Create"** (or select existing property)
3. Property name: `Vision 2040 - El Dorado`
4. Reporting timezone: `America/Chicago`
5. Currency: `USD`
6. Accept terms and create

### 1.2 Get Your Measurement ID

1. In GA4, go to **Admin** → **Data Streams**
2. Click **Web** to create new web stream
3. Enter website URL: `https://vision2040eldorado.com` (or your domain)
4. Stream name: `Vision 2040 Website`
5. Copy **Measurement ID** (format: `G-XXXXXXXXXX`)

### 1.3 Add Tracking Code to All Pages

Add this code to the `<head>` section of ALL 7 HTML pages:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'page_path': window.location.pathname,
    'page_title': document.title
  });
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID**

---

## 🎯 **STEP 2: CONVERSION TRACKING SETUP**

### 2.1 Create Conversions in GA4

**Conversion 1: Ambassador Signup**
1. Go to **Admin** → **Conversions**
2. Click **"New Conversion Event"**
3. Event name: `ambassador_signup`
4. Description: `User signed up as Vision 2040 Ambassador`
5. Save

**Conversion 2: Sponsorship Inquiry**
1. Click **"New Conversion Event"**
2. Event name: `sponsorship_inquiry`
3. Description: `User submitted sponsorship inquiry form`
4. Save

**Conversion 3: Partnership Inquiry**
1. Click **"New Conversion Event"**
2. Event name: `partnership_inquiry`
3. Description: `User submitted partnership inquiry form`
4. Save

**Conversion 4: Newsletter Signup**
1. Click **"New Conversion Event"**
2. Event name: `newsletter_signup`
3. Description: `User subscribed to Vision 2040 newsletter`
4. Save

**Conversion 5: Event Registration**
1. Click **"New Conversion Event"**
2. Event name: `event_registration`
3. Description: `User registered for Vision 2040 event`
4. Save

---

## 📝 **STEP 3: ADD CONVERSION TRACKING TO FORMS**

### 3.1 Ambassador Signup Form

Replace the form submission handler in `vision2040-ambassador.html`:

```javascript
function handleSubmit(event) {
    event.preventDefault();
    
    // Track conversion
    gtag('event', 'ambassador_signup', {
        'form_name': 'ambassador_signup_form',
        'value': 1
    });
    
    // Show confirmation
    alert('Thank you for signing up as a Vision 2040 Ambassador! We\'ll be in touch soon with your welcome packet and training call details.');
    
    // Clear form
    event.target.reset();
    
    // Optional: Send to backend/email service here
}
```

### 3.2 Sponsorship Inquiry Form

Replace the form submission handler in `vision2040-sponsor.html`:

```javascript
function handleSubmit(event) {
    event.preventDefault();
    
    // Get sponsorship info
    const budget = event.target.querySelector('select[name="budget"]').value;
    
    // Track conversion
    gtag('event', 'sponsorship_inquiry', {
        'form_name': 'sponsorship_inquiry_form',
        'sponsorship_budget': budget,
        'value': parseFloat(budget) || 0
    });
    
    // Show confirmation
    alert('Thank you for your sponsorship inquiry! We\'ll be in touch within 24 hours with details and next steps.');
    
    // Clear form
    event.target.reset();
    
    // Optional: Send to backend/email service here
}
```

### 3.3 Partnership Inquiry Form

Add to `vision2040-get-involved.html` partnership form:

```javascript
// Add to the form's onsubmit or create a handler
function submitPartnershipForm(event) {
    event.preventDefault();
    
    const sector = event.target.querySelector('select[name="sector"]').value;
    
    gtag('event', 'partnership_inquiry', {
        'form_name': 'partnership_inquiry_form',
        'sector': sector,
        'value': 1
    });
    
    alert('Thank you! We received your partnership inquiry and will follow up shortly.');
    event.target.reset();
}
```

### 3.4 Newsletter Signup

Add to newsletter signup buttons on `/launch` and `/events` pages:

```javascript
function subscribeNewsletter(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    
    gtag('event', 'newsletter_signup', {
        'form_name': 'newsletter_signup_form',
        'email': email,
        'value': 1
    });
    
    alert('Thank you for subscribing! Check your email for confirmation.');
    event.target.reset();
}
```

---

## 🎬 **STEP 4: PAGE VIEW & EVENT TRACKING**

### 4.1 Track Button Clicks

Add this to track important button clicks:

```javascript
// Track "Become Ambassador" button clicks
document.querySelectorAll('a[href="/vision2040-ambassador.html"]').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'click_cta', {
            'cta_type': 'ambassador',
            'page_title': document.title
        });
    });
});

// Track "Sponsor Event" button clicks
document.querySelectorAll('a[href="/vision2040-sponsor.html"]').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'click_cta', {
            'cta_type': 'sponsor',
            'page_title': document.title
        });
    });
});

// Track "View Events" clicks
document.querySelectorAll('a[href="/vision2040-events.html"]').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'click_cta', {
            'cta_type': 'events',
            'page_title': document.title
        });
    });
});
```

### 4.2 Track FAQ Interactions

```javascript
// Track FAQ accordion clicks
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqText = this.textContent;
        gtag('event', 'faq_interaction', {
            'faq_question': faqText.substring(0, 50), // First 50 chars
            'page_title': document.title
        });
    });
});
```

### 4.3 Track Form Focus

```javascript
// Track when users start filling forms
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', function() {
        gtag('event', 'form_focus', {
            'field_name': this.name,
            'field_type': this.type,
            'form_name': this.closest('form')?.getAttribute('name') || 'unknown'
        });
    }, { once: true }); // Only track first focus per field
});
```

---

## 🔗 **STEP 5: UTM PARAMETERS & TRAFFIC SOURCES**

### 5.1 Email Campaign UTM Parameters

Use these UTM parameters in email links:

```
?utm_source=email&utm_medium=campaign&utm_campaign=vision2040_launch
```

**Example email links:**
```
https://vision2040eldorado.com/vision2040-launch-hub.html?utm_source=email&utm_medium=newsletter&utm_campaign=chamber_chat_pitch

https://vision2040eldorado.com/vision2040-ambassador.html?utm_source=email&utm_medium=newsletter&utm_campaign=chamber_thank_you
```

### 5.2 Social Media UTM Parameters

**TikTok videos:**
```
?utm_source=tiktok&utm_medium=social&utm_campaign=vision2040_shorts
```

**Instagram posts:**
```
?utm_source=instagram&utm_medium=social&utm_campaign=vision2040_reels
```

**LinkedIn posts:**
```
?utm_source=linkedin&utm_medium=social&utm_campaign=talent_stories
```

### 5.3 QR Code UTM Parameters

```
?utm_source=qr&utm_medium=print&utm_campaign=vision2040_activation
```

**Full URL example:**
```
https://vision2040eldorado.com/vision2040-launch-hub.html?utm_source=qr&utm_medium=print&utm_campaign=july4_booth
```

### 5.4 Event Booth UTM Parameters

**July 4 Booth:**
```
?utm_source=event&utm_medium=booth&utm_campaign=july4_eastpark
```

**County Fair:**
```
?utm_source=event&utm_medium=booth&utm_campaign=county_fair_bootcamp
```

---

## 📊 **STEP 6: CREATE CUSTOM DASHBOARDS**

### 6.1 Create "Vision 2040 Launch" Dashboard

In GA4:
1. Go to **Dashboards**
2. Click **"Create Blank Dashboard"**
3. Name: `Vision 2040 Launch Dashboard`
4. Add these cards:

**Card 1: Users Overview**
- Metric: Active Users
- Date range: Last 30 days
- Comparison: Previous 30 days

**Card 2: Conversion Rate**
- Metric: Conversion Rate
- Event: `ambassador_signup`, `sponsorship_inquiry`, etc.
- Dimension: Traffic Source

**Card 3: Top Conversion Events**
- Chart type: Bar chart
- Rows: Event Name
- Columns: Event Count

**Card 4: Traffic by Source**
- Chart type: Donut
- Rows: Source / Medium
- Columns: Users

**Card 5: Page Performance**
- Rows: Page Path
- Columns: Active Users, Conversions, Average Session Duration

**Card 6: Conversion Funnel**
- Event sequence: `page_view` → specific page → form submission → conversion event

---

## 📈 **STEP 7: SET UP ALERTS & REPORTS**

### 7.1 Create Custom Alerts

1. Go to **Admin** → **Alerts**
2. Click **"Create Alert"**

**Alert 1: Low Traffic**
- Condition: Daily users < 50
- Notification: Email to your address

**Alert 2: High Conversion Rate**
- Condition: Daily conversion rate > 10%
- Notification: Email to your address

### 7.2 Schedule Weekly Reports

1. Go to **Admin** → **Reporting Identity**
2. Create custom report with:
   - Date range: This week
   - Metrics: Users, Sessions, Conversions, Conversion Rate
   - Dimensions: Traffic Source, Campaign, Device Category
3. Schedule email delivery weekly (Monday 9 AM)

---

## 📱 **STEP 8: MOBILE & CROSS-DEVICE TRACKING**

### 8.1 Enable Cross-Device Tracking

1. Go to **Admin** → **Data Settings** → **Data Streams**
2. Enable "Google Analytics for Firebase" (optional, for app tracking)
3. This helps track users across website and mobile

### 8.2 Mobile Event Tracking

Add device context to key events:

```javascript
gtag('event', 'ambassador_signup', {
    'device_category': navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop',
    'screen_resolution': window.innerWidth + 'x' + window.innerHeight,
    'value': 1
});
```

---

## 🔐 **STEP 9: PRIVACY & COMPLIANCE**

### 9.1 Data Retention

1. Go to **Admin** → **Data Settings** → **Data Retention**
2. Set retention: `14 months`
3. Enable "Reset user data on new activity"

### 9.2 Privacy Disclosure

Add to website footer or privacy page:

```
This website uses Google Analytics to understand how visitors interact 
with our content. We collect anonymized data including page views, 
clicks, and form submissions. No personal information is collected 
without your consent. By using this site, you consent to our use 
of analytics. For more information, visit our Privacy Policy.
```

### 9.3 GDPR Consent (if applicable)

```javascript
// Example: Only load GA if user consents
if (localStorage.getItem('analytics_consent') === 'true') {
    // Load GA tracking code
}
```

---

## 📋 **STEP 10: MONTHLY REPORTING CHECKLIST**

### By the 1st of Each Month:

- [ ] Check total users and session count
- [ ] Review conversion rate by traffic source
- [ ] Identify top-performing pages
- [ ] Check ambassador signup trend
- [ ] Review sponsorship inquiry rate
- [ ] Analyze which CTAs get most clicks
- [ ] Monitor bounce rate by page
- [ ] Check form abandonment rates
- [ ] Review mobile vs desktop performance
- [ ] Compare month-over-month trends
- [ ] Identify top traffic sources
- [ ] Check average session duration

---

## 🎯 **SUCCESS METRICS TO TRACK**

| Metric | Target | Baseline |
|--------|--------|----------|
| Monthly Users | 5,000+ | TBD |
| Sessions | 8,000+ | TBD |
| Ambassador Signups | 100-200 | TBD |
| Sponsorship Inquiries | 10+ | TBD |
| Partnership Inquiries | 5+ | TBD |
| Newsletter Signups | 500+ | TBD |
| Conversion Rate | 3-5% | TBD |
| Average Session Duration | 2+ min | TBD |
| Mobile Traffic % | 40-50% | TBD |
| Return Visitor Rate | 20%+ | TBD |

---

## 🔗 **QUICK REFERENCE: UTM PARAMETER EXAMPLES**

### Email Campaigns
```
Chamber Chat Pitch (Jun 28):
?utm_source=email&utm_medium=newsletter&utm_campaign=chamber_teaser

Post-Pitch Thank You (Jul 2):
?utm_source=email&utm_medium=newsletter&utm_campaign=chamber_thank_you

Progress Update (Jul 15):
?utm_source=email&utm_medium=newsletter&utm_campaign=july_progress
```

### Social Media
```
TikTok Shorts:
?utm_source=tiktok&utm_medium=social&utm_campaign=vision2040_shorts

Instagram Reels:
?utm_source=instagram&utm_medium=social&utm_campaign=vision2040_reels

LinkedIn:
?utm_source=linkedin&utm_medium=social&utm_campaign=talent_stories
```

### Events
```
July 4 Booth:
?utm_source=event&utm_medium=booth&utm_campaign=july4_eastpark

County Fair:
?utm_source=event&utm_medium=booth&utm_campaign=county_fair_bootcamp

Farmers Market:
?utm_source=event&utm_medium=booth&utm_campaign=farmers_market

First Fridays:
?utm_source=event&utm_medium=booth&utm_campaign=first_fridays
```

---

## 📞 **SUPPORT & RESOURCES**

- **Google Analytics Help**: [support.google.com/analytics](https://support.google.com/analytics)
- **GA4 Event Reference**: [developers.google.com/analytics/devguides](https://developers.google.com/analytics/devguides)
- **UTM Parameter Generator**: [ga-dev-tools.web.app/campaign-url-builder](https://ga-dev-tools.web.app/campaign-url-builder)

---

## ✅ **IMPLEMENTATION CHECKLIST**

- [ ] Create GA4 property
- [ ] Get Measurement ID
- [ ] Add tracking code to all 7 pages
- [ ] Create 5 conversions in GA4
- [ ] Add form submission tracking
- [ ] Add button click tracking
- [ ] Add FAQ interaction tracking
- [ ] Create custom dashboard
- [ ] Set up alerts
- [ ] Schedule weekly reports
- [ ] Configure UTM parameters for all campaigns
- [ ] Update email templates with UTM links
- [ ] Create QR codes with UTM parameters
- [ ] Document baseline metrics (Week 1)
- [ ] Set up monthly review calendar
- [ ] Train team on reading GA4 reports

---

**Analytics setup is critical for understanding what's working in your July 2026 activation. Track everything—your decisions in August and beyond will be data-driven.** 📊

