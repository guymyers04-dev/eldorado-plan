# Phase 2 Stakeholder Data Collection Template

**Purpose:** Gather accurate, current contact information for 40-60 El Dorado stakeholders for the Vision 2040 Community Engagement Platform

**Timeline:** 1-2 weeks of coordination  
**Responsible:** You (coordinate with City Manager, City Commission, El Dorado Inc., Chamber, etc.)  
**Deliverable:** JSON + CSV data files ready for developer to build stakeholder directory

---

## 📋 STAKEHOLDER CATEGORIES & COUNTS

### **Tier 1: Decision-Makers** (15-20 people)
- **City Commission (7):** Mayor, 6 commissioners
- **City Manager (1):** David Dillner
- **Department Heads (8-10):**
  - Public Works Director
  - Planning & Zoning Administrator
  - Parks & Recreation Director
  - Police Chief
  - Fire Chief
  - Library Director
  - Finance Director
  - Community Development Officer
  - (Others as applicable)

### **Tier 2: Enablers** (15-20 people)
- **El Dorado Inc. (5):** CEO, board members, key staff
- **Chamber of Commerce (5):** President, board members
- **Downtown BID (2):** Director, board rep
- **Butler County EDO (2):** Director, deputy
- **Economic Dev Board (3-5):** TIF board members

### **Tier 3: Advocates** (10-15 people)
- **Regional Partners (5):**
  - Butler County Commission (3)
  - Butler County Planning (2)
- **Nonprofit Leaders (5-10):**
  - Museums, foundations, community orgs
- **Business Leaders (3-5):**
  - Top employers (AMAZONE, HF Sinclair, Susan B. Allen Hospital, etc.)
- **Neighborhood Representatives (2-3)**

**TOTAL TARGET: 40-60 people**

---

## 📝 DATA FIELDS TO COLLECT

For each stakeholder, gather:

### **Identity**
- [ ] Full Name
- [ ] Title/Role
- [ ] Organization
- [ ] Department (if applicable)

### **Contact Information**
- [ ] Email Address (primary)
- [ ] Phone Number (office)
- [ ] Mailing Address (if applicable)
- [ ] Office Address (if different from organization HQ)

### **Governance Information**
- [ ] District (if City Commission member or elected official)
- [ ] Term Start Date (e.g., 2023)
- [ ] Term End Date (e.g., 2027)
- [ ] Reporting Structure (who they report to)

### **Engagement Information**
- [ ] Meeting Schedule (when they're typically accessible)
  - *Example: "City Commission 1st & 3rd Monday 6:00 PM, City Hall Commission Chambers"*
- [ ] Projects of Interest (Vision 2040 areas they care about)
  - *Example: ["downtown", "north-gateway", "lake-tourism"]*
- [ ] Bio/Background (1-2 sentences, optional but valuable)

---

## 🔄 DATA COLLECTION WORKFLOW

### Step 1: City Manager Coordination (David Dillner)
**What to ask for:**
- City Commission member list (names, districts, terms, contact info)
- City department heads list (titles, office phone/email, reporting structure)
- Meeting schedule for commission and department leadership
- Confirmation of accurate titles and current positions

**Format:** Email request or phone call  
**Timeline:** 1-2 days response time typical

### Step 2: Economic Development Coordination
**Contact:**
- El Dorado Inc. CEO/director
- Chamber of Commerce president
- Downtown BID director (if exists)

**What to ask for:**
- Board member list + staff (names, titles, email, phone)
- Annual leadership roster
- Projects each leader is focused on

**Format:** Email or in-person meeting  
**Timeline:** 1-2 days response time

### Step 3: Regional Partners Coordination
**Contact:**
- Butler County Commission chair
- Butler County Planning director
- Regional EDO contacts

**What to ask for:**
- Leadership list
- Contact information
- Meeting schedules

**Format:** Email request  
**Timeline:** 2-3 days response time

### Step 4: Community Leaders (Manual Research)
**How to find:**
- Nonprofit directors: Google + nonprofit websites
- Business leaders: Chamber directory, employer lists
- Neighborhood associations: City website, Facebook groups

**Where to get info:**
- Organization websites
- LinkedIn profiles
- Chamber directory
- City website

**Timeline:** 3-5 days for research

---

## 📊 SPREADSHEET TEMPLATE

**Create a Google Sheet or Excel with these columns:**

| Name | Title | Organization | Tier | District | Term Start | Term End | Email | Phone | Office Address | Meeting Schedule | Projects of Interest | Notes |
|------|-------|--------------|------|----------|------------|----------|-------|-------|-----------------|------------------|----------------------|-------|
| Bill Young | Mayor | City of El Dorado | 1 | — | 2023 | 2027 | byoung@eldoradoks.net | (620) 555-0101 | 220 E. 1st Ave | City Commission 1st & 3rd Mon 6PM | [downtown, north-gateway] | Elected |
| David Dillner | City Manager | City of El Dorado | 1 | — | Permanent | — | ddillner@eldoradoks.net | (620) 555-0102 | 220 E. 1st Ave | Office hours 9-5 M-F | [all] | Reports to Mayor |
| Jane Smith | City Commissioner | City of El Dorado | 1 | 3 | 2023 | 2027 | jsmith@eldoradoks.net | (620) 555-0103 | 220 E. 1st Ave | City Commission 1st & 3rd Mon 6PM | [lake-tourism, parks] | Elected |

---

## 📧 EMAIL TEMPLATES

### **For City Manager (David Dillner)**
```
Subject: Vision 2040 Stakeholder Directory - Contact Info Request

Hi David,

We're building an interactive stakeholder directory for the Vision 2040 website
to help residents engage with decision-makers and community leaders.

Could you provide/verify contact information for:
- All City Commission members (names, districts, terms, email, phone)
- Key department heads (titles, contact info)
- Current meeting schedule for City Commission and leadership

We need:
- Name
- Title
- Email
- Phone
- District/Term (if applicable)
- Office Address
- Meeting Schedule

This will help residents know who their commissioner is and how to reach them.

Can you send this by [DATE]? Happy to discuss further.

Thanks,
[Your Name]
```

### **For El Dorado Inc. / Chamber**
```
Subject: Vision 2040 Platform - Leadership Directory

Hi [Name],

We're creating an interactive platform to showcase Vision 2040 and connect
residents with community leaders. We'd like to include your board and key staff
in our stakeholder directory.

Could you provide:
- Current board member list (names, titles, email, phone)
- Key staff (names, titles, email, phone)
- Areas each leader focuses on (economy, education, parks, etc.)

This will help residents understand your role in Vision 2040 and connect with you
when they have questions or ideas.

Can you send this by [DATE]?

Thanks,
[Your Name]
```

---

## 💾 JSON FORMAT (For Developer)

Once data is collected, format as JSON like this:

```json
{
  "stakeholders": [
    {
      "id": "commission-young",
      "name": "Bill Young",
      "title": "Mayor",
      "organization": "City of El Dorado",
      "tier": "decision-maker",
      "category": "government",
      "contact": {
        "email": "byoung@eldoradoks.net",
        "phone": "(620) 555-0101",
        "office_address": "220 E. 1st Ave, El Dorado, KS 67042"
      },
      "detail": {
        "district": null,
        "term_start": 2023,
        "term_end": 2027,
        "meeting_schedule": "City Commission 1st & 3rd Monday, 6:00 PM, City Hall Commission Chambers",
        "bio": "Elected Mayor of El Dorado in 2023, focused on regional economic development and downtown revitalization.",
        "projects_of_interest": ["downtown", "north-gateway", "pro-hyperscale"]
      }
    },
    {
      "id": "commission-3",
      "name": "Jane Smith",
      "title": "City Commissioner",
      "organization": "City of El Dorado",
      "tier": "decision-maker",
      "category": "government",
      "contact": {
        "email": "jsmith@eldoradoks.net",
        "phone": "(620) 555-0103",
        "office_address": "220 E. 1st Ave, El Dorado, KS 67042"
      },
      "detail": {
        "district": 3,
        "term_start": 2023,
        "term_end": 2027,
        "meeting_schedule": "City Commission 1st & 3rd Monday, 6:00 PM, City Hall Commission Chambers",
        "bio": "Represents District 3, focused on lake tourism and parks development.",
        "projects_of_interest": ["lake-tourism", "parks", "infrastructure"]
      }
    }
  ]
}
```

---

## ✅ QUALITY CHECKLIST

Before sending to developer:

- [ ] All 40-60 stakeholder records collected
- [ ] All required fields filled (name, title, email, phone, organization)
- [ ] Email addresses verified (no typos)
- [ ] Phone numbers formatted consistently
- [ ] Tier assignments made (1=Decision-Maker, 2=Enabler, 3=Advocate)
- [ ] Category assigned (government, economic-dev, education, regional, community)
- [ ] Meeting schedules accurate and current
- [ ] Projects of interest match Vision 2040 sections
- [ ] No duplicate records
- [ ] Data in JSON format provided
- [ ] CSV backup provided

---

## 📅 COORDINATION TIMELINE

| Week | Task | Owner | Status |
|------|------|-------|--------|
| **Week 1** | Email City Manager for commission/department info | You | 📋 Pending |
| **Week 1** | Contact El Dorado Inc. + Chamber for board/staff | You | 📋 Pending |
| **Week 1-2** | Follow up on responses, verify accuracy | You | 📋 Pending |
| **Week 2** | Research community leaders, nonprofits, businesses | You | 📋 Pending |
| **Week 2** | Compile all data into spreadsheet | You | 📋 Pending |
| **Week 2** | Convert to JSON format + send to developer | You | 📋 Pending |
| **Week 3+** | Developer builds interactive directory | Developer | 🔧 Ready |

---

## 🚀 NEXT STEPS FOR YOU

### IMMEDIATE (Do This Week):
1. **Email City Manager** (David Dillner)
   - Request commission members + department heads list
   - Ask for current contact info + meeting schedules
   - Expect response in 1-2 days

2. **Contact El Dorado Inc. + Chamber**
   - Request board/staff lists
   - Ask for roles + contact info
   - Expect response in 1-2 days

3. **Create a Google Sheet**
   - Use template above
   - Start filling in verified data as it arrives

### WEEK 2:
1. Follow up on any missing responses
2. Research community leaders (nonprofits, major employers, neighborhood groups)
3. Verify all email addresses and phone numbers
4. Compile 40-60 complete records

### WEEK 3:
1. Convert spreadsheet to JSON format (I can help with this if needed)
2. Quality check all fields
3. Send to developer (me) ready to build

---

## 📞 KEY CONTACTS TO REACH OUT TO

**Start here:**

| Contact | Role | Purpose |
|---------|------|---------|
| **David Dillner** | City Manager | Commission members, department heads, meeting schedules |
| **Bill Young** | Mayor | Governance structure, project priorities |
| **[Name]** | El Dorado Inc. CEO/Director | Board/staff, economic dev priorities |
| **[Name]** | Chamber President | Board/staff, business leader contacts |
| **[Name]** | Downtown BID Director (if applicable) | Downtown stakeholders |
| **[Name]** | Butler County EDO | Regional economic partners |

---

## 📧 CONTACT EMAIL TEMPLATE (Generic)

```
Subject: Vision 2040 Platform - Stakeholder Directory Request

Hi [Name],

We're building an interactive stakeholder directory for the Vision 2040
community engagement platform. This will help residents know who to contact
about Vision 2040 projects and how to get involved.

We'd like to include [DESCRIPTION - e.g., "all City Commission members" or
"your board and key staff"] in the directory.

Could you provide (or verify) the following information:

Name:
Title:
Organization:
Email:
Phone:
Office Address (if different from organization):
Meeting Schedule (when you're typically available):
Projects of Interest (which Vision 2040 areas you focus on):
Brief Bio (1-2 sentences, optional):

Please send by [DATE]. If you have any questions, let me know!

Thanks,
[Your Name]
[Your Title/Organization]
[Your Contact Info]
```

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: What if I can't reach someone or get incomplete info?**  
A: That's OK. Include what you have and mark missing fields as "TBD". We can follow up later.

**Q: Should I verify the info is correct?**  
A: Yes, highly recommended. A quick phone call or email to confirm is worth it. Accuracy builds credibility.

**Q: What if someone doesn't want to be included?**  
A: Respect their preference. But most public officials expect to be in a public directory. Explain it's a community engagement tool.

**Q: How do I assign "Projects of Interest"?**  
A: Think about which Vision 2040 sections each person would naturally care about:
- Commissioners: Usually multiple (downtown, north-gateway, etc.)
- Education leaders: USD 490, Butler CC sections
- Business leaders: Industry, economic dev, health economy
- Parks director: Lake, parks, recreation sections

**Q: Tier system - how do I decide?**  
- **Tier 1 (Decision-Maker):** City Commission, City Manager, department heads, county commission
- **Tier 2 (Enabler):** El Dorado Inc., Chamber, economic dev board, regional partners
- **Tier 3 (Advocate):** Nonprofit leaders, business leaders, community organizers

---

## 🎯 SUCCESS CRITERIA

When you're done:
- ✅ 40-60 stakeholder records collected
- ✅ All required fields filled
- ✅ Data verified for accuracy
- ✅ JSON format provided
- ✅ Ready for developer to build directory
- ✅ Ready for Phase 2 launch

---

## 📞 NEED HELP?

If you need:
- **JSON formatting help:** I can convert your CSV to JSON
- **Data validation:** I can check for duplicates, missing fields, formatting issues
- **Follow-up coordination:** Happy to help draft follow-up emails

---

**Ready to start stakeholder outreach? Pick up your phone and call David Dillner today!** 🚀

This data collection is the foundation for Phase 2 success. The more accurate and complete the stakeholder info, the more valuable the platform will be for residents and leaders.

---

**Questions?** Reach out anytime.

*Data Collection Template v1.0 — June 28, 2026*
