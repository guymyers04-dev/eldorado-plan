# Email Automation Setup Guide
## Development Finder Inquiry Response System

This guide enables automatic responses when investors submit inquiries through the Development Finder tool.

---

## Overview

When an investor clicks "Inquire" on a property card, the following happens:

1. **Form Submitted** → Investor details + property info captured
2. **Email Triggered** → Automated response sent to investor (within 5 minutes)
3. **CRM Updated** → Lead record created in your database
4. **Team Notified** → Economic development team alerted for follow-up (24-hour response commitment)

---

## Email Template

**File:** `email-templates/inquiry-response-template.html`

### Template Variables (Liquid Format)

```
{{contact_first_name}}      # Investor's first name
{{contact_email}}           # Investor's email address
{{contact_phone}}           # Investor's phone (if provided)
{{property_name}}           # Name of property inquired about
{{zone}}                    # Zoning type (C-1, I-2, etc.)
{{acres}}                   # Total acreage
{{price}}                   # Price in millions ($M)
{{price_per_acre}}          # Price per acre (calculated)
{{district}}                # Growth district (North Gateway, etc.)
{{description}}             # Property description
{{status}}                  # Status (Available, Pending)
{{total_properties}}        # Total properties in database (16)
```

---

## Integration Options

### Option 1: Mailgun (Recommended for Automation)

Mailgun is ideal for automated transactional emails with template support.

#### Setup Steps:

1. **Create Mailgun Account**
   - Sign up at mailgun.com
   - Create a domain (e.g., `noreply.eldorado2040.com`)
   - Verify DNS records (25 min)

2. **Upload Email Template**
   - Copy `inquiry-response-template.html`
   - Log into Mailgun Dashboard → Templates → Create Template
   - Paste HTML, name it `development-finder-inquiry`
   - Test with sample data

3. **Configure API Integration**
   - Get API key from Settings → API Keys
   - Use this endpoint:
   ```
   POST /v3/noreply.eldorado2040.com/messages
   Authorization: Basic <api_key>
   ```

4. **Webhook Setup**
   - When form submitted on development-finder.html:
   ```javascript
   fetch('https://api.mailgun.net/v3/noreply.eldorado2040.com/messages', {
     method: 'POST',
     headers: {
       'Authorization': 'Basic ' + btoa('api:' + MAILGUN_API_KEY)
     },
     body: new FormData({
       'from': 'econ-dev@eldoradoks.net',
       'to': contactEmail,
       'subject': `Inquiry Received: ${propertyName}`,
       'template': 'development-finder-inquiry',
       'h:X-Mailgun-Variables': JSON.stringify({
         contact_first_name: contactFirstName,
         property_name: propertyName,
         zone: propertyZone,
         acres: propertyAcres,
         price: propertyPrice,
         price_per_acre: (propertyPrice / propertyAcres).toFixed(2),
         district: propertyDistrict,
         description: propertyDescription,
         status: propertyStatus,
         total_properties: 16
       })
     })
   });
   ```

---

### Option 2: SendGrid (Alternative)

SendGrid is excellent for high-volume transactional emails.

#### Setup Steps:

1. **Create SendGrid Account**
   - Sign up at sendgrid.com
   - Verify sender email: `econ-dev@eldoradoks.net`

2. **Create Dynamic Template**
   - Settings → Mail Send Settings → Dynamic Templates
   - Create new template: `development-finder-inquiry`
   - Copy HTML from template file
   - Replace variables with SendGrid syntax: `{{contact_first_name}}`

3. **Get API Key**
   - Settings → API Keys → Create API Key
   - Copy and store securely

4. **Send Email via API**
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(SENDGRID_API_KEY);
   
   const msg = {
     to: contactEmail,
     from: 'econ-dev@eldoradoks.net',
     templateId: 'd-TEMPLATE_ID_HERE',
     dynamicTemplateData: {
       contact_first_name: contactFirstName,
       property_name: propertyName,
       zone: propertyZone,
       acres: propertyAcres,
       price: propertyPrice,
       price_per_acre: (propertyPrice / propertyAcres).toFixed(2),
       district: propertyDistrict,
       description: propertyDescription,
       status: propertyStatus,
       total_properties: 16
     }
   };
   
   await sgMail.send(msg);
   ```

---

### Option 3: Form.io (Low-Code Solution)

Form.io provides built-in email automation without code.

#### Setup Steps:

1. **Create Form.io Account**
   - Sign up at form.io
   - Create new form or data source
   - Add fields matching Development Finder form

2. **Configure Email Action**
   - Actions → Add Email Action
   - Recipient: `econ-dev@eldoradoks.net` + contact email
   - Template: Upload HTML
   - Map form fields to template variables

3. **Embed Form**
   - Get embed code
   - Replace current Development Finder form with Form.io embed

---

### Option 4: Zapier (No-Code, UI-Based)

Zapier is best if you want to avoid coding entirely.

#### Setup Steps:

1. **Create Zapier Account**
   - Sign up at zapier.com
   - Create new Zap: "Trigger → Action"

2. **Set Trigger**
   - Trigger: Webhook (when Development Finder form submitted)
   - Generate webhook URL
   - Update development-finder.html form to POST to this URL

3. **Configure Email Action**
   - Action: Gmail or SendGrid
   - Template: Select template file
   - Map variables from webhook to email

4. **Test**
   - Send test submission from Development Finder
   - Verify email received

---

## Implementation in Development Finder

### Add to development-finder.html

Replace the "Inquire" button action with this:

```javascript
function submitInquiry(propertyId) {
  const property = properties.find(p => p.id === propertyId);
  
  const payload = {
    contact_first_name: prompt('First Name:'),
    contact_email: prompt('Email Address:'),
    contact_phone: prompt('Phone (optional):'),
    property_name: property.name,
    zone: property.zone,
    acres: property.acres,
    price: property.price,
    price_per_acre: (property.price / property.acres).toFixed(2),
    district: property.district,
    description: property.description,
    status: property.status,
    total_properties: properties.length
  };
  
  // Send to email service
  fetch('/.netlify/functions/send-inquiry-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    alert('✅ Inquiry sent! You'll hear from us within 24 hours.');
  })
  .catch(err => {
    alert('Error submitting inquiry. Please email econ-dev@eldoradoks.net directly.');
    console.error(err);
  });
}
```

---

## CRM Integration

### Recommended CRMs

1. **Salesforce** (Enterprise)
   - Robust pipeline management
   - Custom objects for Vision 2040 projects
   - Integration via REST API

2. **HubSpot** (Mid-market)
   - Free tier available
   - Native email templates
   - Contact + Deal + Property custom objects

3. **Zoho CRM** (SMB)
   - Affordable
   - Good API support
   - Email automation built-in

4. **Airtable** (Lightweight, Real-time)
   - Perfect for small teams
   - Easy database structure
   - Webhook automation via Zapier

### Example: Airtable Setup

```javascript
// When inquiry submitted, create Airtable record:
const payload = {
  fields: {
    'Contact Name': contactFirstName,
    'Email': contactEmail,
    'Phone': contactPhone,
    'Property': propertyName,
    'Zone': zone,
    'Acres': acres,
    'Price ($M)': price,
    'District': district,
    'Status': 'New Lead',
    'Date Submitted': new Date().toISOString(),
    'Follow-up Date': new Date(Date.now() + 24*60*60*1000).toISOString()
  }
};

fetch('https://api.airtable.com/v0/appXXXXXXXXXXXXXX/Investor%20Inquiries', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer patXXXXXXXXXXXXXX',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
});
```

---

## Team Workflow

### 24-Hour Response Protocol

1. **Automated Email Sent (Immediately)**
   - Investor receives inquiry confirmation + resources

2. **CRM Alert (5 minutes)**
   - Team Slack notification: `@channel New inquiry: {name} → {property}`
   - CRM task created: "Follow up with {name}"

3. **Manual Follow-up (24 hours)**
   - Assigned team member calls investor
   - Discuss property, financing options, site visit scheduling
   - Update CRM with notes + next action

### Slack Integration

```javascript
// Send Slack notification when inquiry received
const slackWebhook = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL';

fetch(slackWebhook, {
  method: 'POST',
  body: JSON.stringify({
    text: `🏗️ New Development Finder Inquiry`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${contactName}* inquired about *${propertyName}*\n📧 ${contactEmail}\n📞 ${contactPhone}`
        }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: 'Open in CRM' },
            url: `https://crm.example.com/lead/${leadId}`
          }
        ]
      }
    ]
  })
});
```

---

## Testing Checklist

- [ ] Email template renders correctly (test on mobile + desktop)
- [ ] All variables populate correctly
- [ ] Links in email work (Development Finder, Project Tracker, etc.)
- [ ] CRM creates lead record automatically
- [ ] Team receives Slack notification within 5 minutes
- [ ] Reply-to email routes to `econ-dev@eldoradoks.net`
- [ ] Unsubscribe link works (compliance)
- [ ] Sent from verified domain (`noreply.eldorado2040.com` or similar)

---

## Monthly Maintenance

- **Monitor email delivery rate** (target: >95%)
- **Review response times** (goal: <24 hours)
- **Track conversion rate** (inquiries → site visits → LOI)
- **Update property database** in CRM (new listings, price changes)
- **Test template quarterly** with sample inquiry

---

## Support

For questions on email automation setup:
- Contact: econ-dev@eldoradoks.net
- Mailgun Support: support.mailgun.com
- SendGrid Support: support.sendgrid.com

---

**Last Updated:** June 29, 2026
**Status:** Ready for Implementation
