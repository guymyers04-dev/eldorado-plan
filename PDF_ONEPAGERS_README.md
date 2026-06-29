# PDF One-Pagers for Industry Recruitment

**Status:** ✅ Ready to convert to PDF  
**Format:** Can be converted using: Print to PDF (Chrome), Pandoc, or commercial PDF tools  
**Use Case:** Email attachments, investor materials, site visit handouts

---

## How to Generate PDFs

### Option 1: Chrome Print to PDF (Easiest)
```
1. Open each HTML page in Chrome browser
2. Press Cmd+P (Mac) or Ctrl+P (Windows)
3. Select "Save as PDF"
4. Name: [Industry]-One-Pager.pdf
5. Done!
```

### Option 2: Automated HTML-to-PDF (Python)
```bash
pip install pdfkit wkhtmltopdf
python3 create_pdfs.py  # (script provided below)
```

### Option 3: Online Converter
- HtmlToCSS.com
- CloudConvert.com
- Adobe Express

---

## Individual One-Pagers

Click to view HTML → Print to PDF:

### Tier 1 Industry Pages (PDF Ready)

1. **Precision Agriculture Hub**
   - Source: `/precision-ag.html`
   - Use: Send to FieldView, Raven, Gro Intelligence
   - Key metrics: $10.8B→$29.2B market, 18% CAGR, 35-50 jobs/facility
   - CTA: "Schedule a site visit"

2. **Advanced Battery & EV Supply Chain**
   - Source: `/batteries-ev.html`
   - Use: Send to Xylem, Molicel/LG, RBMI
   - Key metrics: $120B→$280B market, 150-250 jobs/facility
   - CTA: "Discuss incentive package"

3. **Biotech & Agrigenomics**
   - Source: `/biotech.html`
   - Use: Send to Indigo Ag, Marrone, Ginkgo Bioworks
   - Key metrics: $25B→$48B market, K-State partnership, 50-100 jobs
   - CTA: "Explore research collaboration"

4. **Aerospace & Defense Supply Chain**
   - Source: `/aerospace.html`
   - Use: Send to Ducommun, B/E Aerospace, Applied Composites
   - Key metrics: $150B US supply chain, 30,000 KS jobs, 29mi to Wichita
   - CTA: "Evaluate site location"

5. **Cold Chain Logistics Hub**
   - Source: `/logistics.html`
   - Use: Send to Geodis, ArcBest, XPO Logistics
   - Key metrics: $48B→$85B market, $80-200M capex potential
   - CTA: "Review facility options"

6. **Water Infrastructure Advantage**
   - Source: `/water-advantage.html`
   - Use: Send to data center, bio-processing, food companies
   - Key metrics: 23M gal/day, 50+ year contract, $35-45M multiplier
   - CTA: "Explore partnership"

---

## Quick PDF Creation Script (Python)

Save as `create_pdfs.py`:

```python
#!/usr/bin/env python3
"""
Generate PDF one-pagers from HTML industry pages.
Requires: pip install pdfkit wkhtmltopdf
"""

import pdfkit
import os

# HTML files to convert
pages = {
    "precision-ag.html": "Precision Agriculture Hub",
    "batteries-ev.html": "Advanced Battery & EV Supply Chain",
    "biotech.html": "Biotech & Agrigenomics",
    "aerospace.html": "Aerospace & Defense",
    "logistics.html": "Cold Chain Logistics",
    "water-advantage.html": "Water Infrastructure Advantage",
}

# PDF options for one-page format
options = {
    'page-size': 'A4',
    'margin-top': '0.75in',
    'margin-right': '0.75in',
    'margin-bottom': '0.75in',
    'margin-left': '0.75in',
    'encoding': "UTF-8",
    'enable-local-file-access': None,
}

# Generate PDFs
for html_file, title in pages.items():
    if os.path.exists(html_file):
        pdf_name = html_file.replace('.html', '-onepager.pdf')
        print(f"Converting {html_file} → {pdf_name}...")
        
        try:
            pdfkit.from_file(html_file, pdf_name, options=options)
            print(f"✅ {pdf_name} created")
        except Exception as e:
            print(f"❌ Error creating {pdf_name}: {e}")
    else:
        print(f"⚠️ {html_file} not found")

print("\nDone! PDFs ready in current directory.")
```

Run with:
```bash
python3 create_pdfs.py
```

---

## Pre-Made One-Pager Templates (If HTML-to-PDF fails)

If you can't generate PDFs from HTML, use these markdown templates as fallback.
Copy each below into Word/Google Docs → Save as PDF:

### TEMPLATE: Precision Agriculture Hub

```
═══════════════════════════════════════════════════════════════

           🌾 PRECISION AGRICULTURE TECHNOLOGY HUB
                    El Dorado, Kansas

═══════════════════════════════════════════════════════════════

MARKET OPPORTUNITY
──────────────────────────────────────────────────────────────
• Current market: $10.8B (2024)
• Projected market: $29.2B (2030)
• Growth rate: 18% CAGR
• Key sectors: Climate tech, soil sensors, predictive analytics

POSITIONING FOR YOUR COMPANY
──────────────────────────────────────────────────────────────
Three reasons El Dorado is the ideal location:

1. WATER INFRASTRUCTURE
   • 23M gallons/day owned water rights (50+ year contract)
   • Critical for R&D, testing, manufacturing
   • Locked price: $1.50/1K gallons (below market)

2. GEOGRAPHIC ADVANTAGE
   • I-35 corridor access (Wichita 29 min, Kansas City 3 hrs)
   • Kansas Farm Belt direct proximity
   • Regional supply chain ecosystem

3. WORKFORCE + PARTNERSHIP
   • K-State University partnership (agriculture biotech programs)
   • USD 490 vocational training (precision ag mechanics)
   • Pre-negotiated research collaboration agreements

TARGET COMPANIES (Tier 1 Recruitment)
──────────────────────────────────────────────────────────────
• Climate FieldView (35-50 jobs)
• Raven Industries (40-75 jobs)
• Gro Intelligence (20-35 jobs)

INCENTIVE PACKAGE
──────────────────────────────────────────────────────────────
• $1.2M EDA Grant (federal ag-tech priority)
• $600K KDOT Industrial Access Investment
• 10 years, 60% Tax Abatement (precision ag jobs)
• Water Agreement ($1.50/1K gal, 10-year lock)
• Workforce Training ($250-400K via Kansas Works)

TIMELINE
──────────────────────────────────────────────────────────────
• Month 1-2: Site evaluation + partnership planning
• Month 3: LOI negotiation
• Month 4-12: Facility development + hiring
• Month 12+: Operations launch

YEAR 1 SUCCESS METRICS
──────────────────────────────────────────────────────────────
✓ 1-2 LOIs signed from Tier-1 targets
✓ $40M-$80M in announced investment
✓ 100-200 jobs announced
✓ $10-18M annual payroll impact

NEXT STEPS
──────────────────────────────────────────────────────────────
☐ Schedule 30-minute discovery call
☐ Review detailed site plans + incentive breakdown
☐ Host site visit (facility tour + team meeting)
☐ Negotiate LOI terms + partnership agreement

CONTACT INFORMATION
──────────────────────────────────────────────────────────────
[Your Name]
[Title]
El Dorado Economic Development
[Phone] | [Email]
[Website]

═══════════════════════════════════════════════════════════════
```

---

## Bulk Email Attachment Instructions

Once PDFs are created:

1. **Organize in folder:**
   ```
   /pdfs/
   ├── precision-ag-onepager.pdf
   ├── batteries-ev-onepager.pdf
   ├── biotech-onepager.pdf
   ├── aerospace-onepager.pdf
   ├── logistics-onepager.pdf
   └── water-advantage-onepager.pdf
   ```

2. **In email campaigns:**
   - Attach relevant PDF to each industry outreach
   - Reference in email: "PDF attached for quick overview"
   - Keep email text short (PDF does the heavy lifting)

3. **Size optimization:**
   - Each PDF should be <2MB
   - Test email delivery (Gmail might flag large PDFs)
   - If >2MB, use compression or reduce image resolution

---

## A/B Testing One-Pagers

Consider creating 2 versions per industry:

**Version A: Technical/Data-Heavy**
- Emphasis: Market data, job numbers, supply chain specifics
- For: Operations/supply chain decision-makers

**Version B: Executive/Opportunity-Focused**
- Emphasis: ROI, partnership benefits, timeline
- For: C-suite, board members

Example subject line variation:
```
A/B Test Email 1:
Subject: [Precision Ag Data Sheet - Market Opportunity]
Attach: precision-ag-technical.pdf

A/B Test Email 2:
Subject: [Partnership Opportunity - K-State Collaboration]
Attach: precision-ag-executive.pdf
```

Track which version gets higher click-through rate and opens.

---

## Next Steps

1. ✅ Review this README
2. ⏳ Choose PDF generation method (Chrome is easiest)
3. ⏳ Generate PDFs for all 6 industry pages
4. ⏳ Test email delivery (send test email to yourself)
5. ⏳ Begin including PDFs in cold outreach emails (Week 1)

**Estimated time to complete:** 20-30 minutes (Chrome method)

---

*PDF one-pagers ready for generation: 2026-06-29*
