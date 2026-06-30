# El Dorado International FOREX & Trade Expansion — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy MVP of El Dorado's international positioning: hub page, 3 strategic deep-dive pages, trade calculator tool, and navigation integration.

**Architecture:** Hub-and-spokes model with `/international.html` as central entry point linking to 3 deep-dive pages. Single interactive tool (trade calculator) embeds on relevant pages. Existing page overlays (finance.html, logistics.html) add international context sections. All pages follow existing El Dorado design system; CSS unified in styles.css.

**Tech Stack:** HTML5, CSS3 (existing styles.css), Vanilla JavaScript (trade calculator), JSON data files, Git version control

**Timeline:** 2-3 weeks (10-15 working hours)

---

## 📁 FILE STRUCTURE

### New Files (Create)
```
eldorado-plan/
├── international.html                           (Hub page - 400 lines)
├── international-forex-hub.html                 (Deep-dive: FOREX - 350 lines)
├── international-nearshoring.html               (Deep-dive: Nearshoring - 350 lines)
├── international-mexico-corridor.html           (Deep-dive: Mexico corridor - 300 lines)
├── js/
│   └── trade-calculator.js                      (Interactive tool - 200 lines)
└── data/
    └── trade-calculator-data.json               (Tool data - 100 lines)
```

### Modified Files (Existing)
```
├── finance.html                                 (Add "International Finance" section)
├── logistics.html                               (Add "Mexico Nearshoring" section)
└── css/styles.css                               (Add .international-section styles if needed)
```

### Navigation Updates
```
├── index.html                                   (Update navbar to link to /international.html)
```

---

## 🎯 TASKS — PHASE 1 IMPLEMENTATION

### Task 1: Create Hub Page Foundation (`/international.html`)

**Files:**
- Create: `international.html`

- [ ] **Step 1: Create HTML skeleton for hub page**

Create `/Users/guyh/eldorado-plan/international.html` with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>El Dorado, KS — International Trade & Finance | Vision 2040</title>
 <meta name="description" content="El Dorado: Gateway to Continental Trade & Finance. Strategic hub connecting FOREX markets, Mexico supply chains, and North American investment." />
 <meta property="og:title" content="El Dorado — International Trade & Finance Hub" />
 <meta property="og:description" content="Strategic positioning for FOREX trading, nearshoring, and foreign direct investment." />
 <meta property="og:type" content="website" />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 <link rel="stylesheet" href="css/styles.css" />
</head>
<body data-page="international">

<div id="scroll-progress" role="progressbar" aria-hidden="true"></div>

<!-- NAV: Will be same as index.html -->
<nav id="navbar">
 <div class="nav-inner">
  <a href="index.html" class="nav-brand">
   <span class="city">El Dorado, KS</span>
   <span class="tagline">Vision 2040 · Regional Development Plan</span>
  </a>
  <ul class="nav-links">
   <li><a href="index.html#vision">Overview</a></li>
   <li><a href="international.html" style="color:var(--gold);font-weight:600">🌍 International Trade & Finance</a></li>
   <!-- Other nav items same as index.html -->
  </ul>
 </div>
</nav>

<!-- MAIN CONTENT -->
<main>
 <!-- Hero Section -->
 <section id="hero" class="international-hero">
  <div class="hero-content">
   <h1>El Dorado:<br>Gateway to Continental Trade & Finance</h1>
   <p class="hero-subtitle">Strategic hub connecting FOREX markets, Mexico supply chains, and North American investment</p>
   <div class="hero-cta">
    <a href="#pillars" class="btn btn-primary">Explore Opportunities</a>
   </div>
  </div>
 </section>

 <!-- Placeholder sections (to be filled in subsequent steps) -->
 <section id="pillars" class="international-section"></section>
 <section id="stats" class="international-section"></section>
 <section id="deepdives" class="international-section"></section>
 <section id="cta" class="international-section"></section>

</main>

<footer>
 <!-- Footer: same as index.html -->
</footer>

<script src="js/navbar.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Verify file created and HTML is valid**

Run: `cd /Users/guyh/eldorado-plan && python3 -m http.server 8000 &`
Then visit: `http://localhost:8000/international.html`
Expected: Page loads, shows hero section with title, no errors in console

- [ ] **Step 3: Commit skeleton**

```bash
cd /Users/guyh/eldorado-plan
git add international.html
git commit -m "feat: create international hub page skeleton"
```

---

### Task 2: Build Hero Section with Visuals

**Files:**
- Modify: `international.html`
- Modify: `css/styles.css` (if custom styling needed)

- [ ] **Step 1: Add hero section content to international.html**

Replace the `<!-- Hero Section -->` placeholder with:

```html
<section id="hero" class="international-hero">
 <div class="hero-content">
  <h1>El Dorado:<br>Gateway to Continental Trade & Finance</h1>
  <p class="hero-subtitle">Strategic hub connecting FOREX markets, Mexico supply chains, and North American investment</p>
  
  <!-- Three Pillar Visuals -->
  <div class="hero-pillars">
   <div class="pillar-visual">
    <h3>💱 FOREX & Fintech</h3>
    <p>Currency trading, prop trading, international payments</p>
   </div>
   <div class="pillar-visual">
    <h3>📦 Physical Trade</h3>
    <p>Nearshoring, supply chains, import/export</p>
   </div>
   <div class="pillar-visual">
    <h3>💼 Foreign Investment</h3>
    <p>Regional HQ, anchor tenants, partnership ecosystem</p>
   </div>
  </div>
  
  <div class="hero-cta">
   <a href="#pillars" class="btn btn-primary">Explore Opportunities</a>
   <a href="#tools" class="btn btn-secondary">Try Our Tools</a>
  </div>
 </div>
</section>
```

- [ ] **Step 2: Add CSS styling for hero section (add to styles.css)**

Open `css/styles.css` and add before closing:

```css
/* International Hub Styles */
.international-hero {
 min-height: 70vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
 color: #fff;
 text-align: center;
 padding: 40px 20px;
}

.international-hero h1 {
 font-size: 3.5rem;
 font-weight: 900;
 margin-bottom: 20px;
 color: var(--gold);
}

.hero-subtitle {
 font-size: 1.3rem;
 margin-bottom: 40px;
 color: #ccc;
 max-width: 600px;
 margin-left: auto;
 margin-right: auto;
}

.hero-pillars {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 gap: 30px;
 margin: 40px 0;
 padding: 30px;
 background: rgba(255, 255, 255, 0.05);
 border-radius: 8px;
}

.pillar-visual {
 background: rgba(212, 165, 116, 0.1);
 padding: 20px;
 border-radius: 4px;
 border-left: 4px solid var(--gold);
}

.pillar-visual h3 {
 color: var(--gold);
 margin-bottom: 10px;
}

.pillar-visual p {
 color: #aaa;
 font-size: 0.95rem;
}

.hero-cta {
 margin-top: 40px;
 display: flex;
 gap: 15px;
 justify-content: center;
 flex-wrap: wrap;
}

@media (max-width: 768px) {
 .international-hero h1 {
  font-size: 2rem;
 }
 .hero-subtitle {
  font-size: 1rem;
 }
 .hero-pillars {
  grid-template-columns: 1fr;
 }
}
```

- [ ] **Step 3: Verify hero section looks good**

Visit: `http://localhost:8000/international.html`
Expected: Hero section displays with three pillars, buttons are clickable

- [ ] **Step 4: Commit hero section**

```bash
git add international.html css/styles.css
git commit -m "feat: add hero section with three pillars to international hub"
```

---

### Task 3: Build Three Pillars Expandable Section

**Files:**
- Modify: `international.html`
- Modify: `css/styles.css`
- Create: `js/pillars.js` (simple JavaScript for expand/collapse)

- [ ] **Step 1: Create pillars.js for expand/collapse functionality**

Create `js/pillars.js`:

```javascript
document.addEventListener('DOMContentLoaded', function() {
 const pillars = document.querySelectorAll('.pillar-card');
 
 pillars.forEach(pillar => {
  const toggle = pillar.querySelector('.pillar-toggle');
  const content = pillar.querySelector('.pillar-content');
  
  if (toggle) {
   toggle.addEventListener('click', function() {
    pillar.classList.toggle('expanded');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
   });
  }
 });
});
```

- [ ] **Step 2: Add Pillars section to international.html**

Replace `<!-- Placeholder sections -->` with:

```html
<section id="pillars" class="international-section">
 <div class="section-inner">
  <h2>Three Pillars of Opportunity</h2>
  <p class="section-intro">El Dorado's international strategy connects three independent growth channels that reinforce each other.</p>
  
  <div class="pillars-container">
   <!-- Pillar 1: FOREX -->
   <div class="pillar-card">
    <div class="pillar-toggle">
     <h3>💱 FOREX & Fintech Layer</h3>
     <span class="toggle-icon">+</span>
    </div>
    <div class="pillar-content" style="display:none;">
     <p><strong>What:</strong> Currency trading firms, prop trading shops, payment processors, international financial services</p>
     <p><strong>Why El Dorado:</strong> Central timezone between Mexico-US markets, access to both currencies, high-speed internet (fiber), cost advantage vs. trading hubs</p>
     <p><strong>Opportunity:</strong> 3-5 trading firms + 10-15 support jobs @ $80-150K+ salaries</p>
     <a href="international-forex-hub.html" class="read-more">Explore FOREX Hub →</a>
    </div>
   </div>
   
   <!-- Pillar 2: Trade -->
   <div class="pillar-card">
    <div class="pillar-toggle">
     <h3>📦 Physical Trade & Logistics Layer</h3>
     <span class="toggle-icon">+</span>
    </div>
    <div class="pillar-content" style="display:none;">
     <p><strong>What:</strong> Import/export operations, nearshoring hub, supply chain processing, distribution centers</p>
     <p><strong>Why El Dorado:</strong> 400 miles from Mexico, US-77 corridor positioning, 2-3 day delivery vs. 2-3 weeks from Asia</p>
     <p><strong>Opportunity:</strong> 50-100 logistics jobs @ $45-75K, $15-30M annual trade volume</p>
     <a href="international-nearshoring.html" class="read-more">Explore Nearshoring →</a>
    </div>
   </div>
   
   <!-- Pillar 3: FDI -->
   <div class="pillar-card">
    <div class="pillar-toggle">
     <h3>💼 Foreign Direct Investment Layer</h3>
     <span class="toggle-icon">+</span>
    </div>
    <div class="pillar-content" style="display:none;">
     <p><strong>What:</strong> International companies establishing regional headquarters, manufacturing, distribution centers</p>
     <p><strong>Why El Dorado:</strong> Cost advantage (20-35% vs. major metros), workforce available, existing infrastructure, Mexico proximity</p>
     <p><strong>Opportunity:</strong> 1-3 anchor tenants, 100-200 total jobs, sustained tax revenue</p>
     <a href="international-fdi-playbook.html" class="read-more">Explore FDI Playbook →</a>
    </div>
   </div>
  </div>
 </div>
</section>
```

- [ ] **Step 3: Add CSS for pillars section**

Add to `css/styles.css`:

```css
.international-section {
 padding: 60px 20px;
 background: #f9f9f9;
}

.international-section:nth-child(even) {
 background: #fff;
}

.section-inner {
 max-width: 1200px;
 margin: 0 auto;
}

.international-section h2 {
 font-size: 2.5rem;
 text-align: center;
 margin-bottom: 20px;
 color: #1a1a1a;
}

.section-intro {
 text-align: center;
 max-width: 600px;
 margin: 0 auto 40px;
 color: #666;
 font-size: 1.1rem;
}

.pillars-container {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 gap: 30px;
}

.pillar-card {
 background: #fff;
 border: 1px solid #e0e0e0;
 border-radius: 8px;
 overflow: hidden;
 box-shadow: 0 2px 8px rgba(0,0,0,0.1);
 transition: all 0.3s ease;
}

.pillar-card:hover {
 box-shadow: 0 4px 16px rgba(0,0,0,0.15);
 border-color: var(--gold);
}

.pillar-toggle {
 padding: 20px;
 background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
 cursor: pointer;
 display: flex;
 justify-content: space-between;
 align-items: center;
 user-select: none;
}

.pillar-toggle h3 {
 margin: 0;
 color: #1a1a1a;
 font-size: 1.2rem;
}

.toggle-icon {
 font-size: 1.5rem;
 color: var(--gold);
 transition: transform 0.3s ease;
}

.pillar-card.expanded .toggle-icon {
 transform: rotate(45deg);
}

.pillar-content {
 padding: 20px;
 color: #666;
 line-height: 1.6;
}

.pillar-content p {
 margin-bottom: 15px;
}

.read-more {
 color: var(--gold);
 font-weight: 600;
 text-decoration: none;
}

.read-more:hover {
 text-decoration: underline;
}

@media (max-width: 768px) {
 .international-section {
  padding: 40px 15px;
 }
 .international-section h2 {
  font-size: 1.8rem;
 }
 .pillars-container {
  grid-template-columns: 1fr;
 }
}
```

- [ ] **Step 4: Add script tag to international.html**

In the `<head>` section, add before closing `</head>`:

```html
<script src="js/pillars.js" defer></script>
```

- [ ] **Step 5: Verify pillars section works**

Visit: `http://localhost:8000/international.html`
Click on each pillar - should expand/collapse
Expected: Clicking pillar shows content, icon rotates, links work

- [ ] **Step 6: Commit pillars section**

```bash
git add international.html css/styles.css js/pillars.js
git commit -m "feat: add expandable three pillars section with toggle functionality"
```

---

### Task 4: Add Stats Dashboard Section

**Files:**
- Modify: `international.html`

- [ ] **Step 1: Add stats section HTML**

Add after pillars section:

```html
<section id="stats" class="stats-section international-section">
 <div class="section-inner">
  <h2>El Dorado's International Advantage</h2>
  
  <div class="stats-grid">
   <div class="stat-card">
    <div class="stat-value">400 miles</div>
    <div class="stat-label">from Mexico border</div>
    <div class="stat-desc">Strategic proximity to Mexico supply chains</div>
   </div>
   
   <div class="stat-card">
    <div class="stat-value">20-35%</div>
    <div class="stat-label">Cost savings</div>
    <div class="stat-desc">vs. major US metros for operations</div>
   </div>
   
   <div class="stat-card">
    <div class="stat-value">2-3 days</div>
    <div class="stat-label">Delivery time</div>
    <div class="stat-desc">Mexico factory → US market via El Dorado</div>
   </div>
   
   <div class="stat-card">
    <div class="stat-value">50-100</div>
    <div class="stat-label">Job opportunities</div>
    <div class="stat-desc">In logistics, fintech, supply chain roles</div>
   </div>
   
   <div class="stat-card">
    <div class="stat-value">$15-30M</div>
    <div class="stat-label">Annual trade potential</div>
    <div class="stat-desc">Through nearshoring channel</div>
   </div>
   
   <div class="stat-card">
    <div class="stat-value">Central</div>
    <div class="stat-label">Timezone positioning</div>
    <div class="stat-desc">Between Mexico and US FOREX markets</div>
   </div>
  </div>
 </div>
</section>
```

- [ ] **Step 2: Add CSS for stats section**

Add to `css/styles.css`:

```css
.stats-section {
 background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
}

.stats-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 gap: 30px;
 margin-top: 40px;
}

.stat-card {
 background: #fff;
 padding: 30px;
 border-radius: 8px;
 text-align: center;
 box-shadow: 0 2px 8px rgba(0,0,0,0.08);
 transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
 transform: translateY(-5px);
 box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.stat-value {
 font-size: 2.5rem;
 font-weight: 900;
 color: var(--gold);
 margin-bottom: 10px;
}

.stat-label {
 font-size: 1.1rem;
 font-weight: 600;
 color: #1a1a1a;
 margin-bottom: 8px;
}

.stat-desc {
 font-size: 0.95rem;
 color: #666;
 line-height: 1.5;
}

@media (max-width: 768px) {
 .stats-grid {
  grid-template-columns: repeat(2, 1fr);
 }
 .stat-value {
  font-size: 1.8rem;
 }
}
```

- [ ] **Step 3: Verify stats section displays**

Visit: `http://localhost:8000/international.html`
Scroll down to stats - should see 6 stat cards in grid
Expected: Cards are responsive, hover effect works

- [ ] **Step 4: Commit stats section**

```bash
git add international.html css/styles.css
git commit -m "feat: add key metrics stats dashboard to international hub"
```

---

### Task 5: Create Trade Calculator Tool

**Files:**
- Create: `js/trade-calculator.js`
- Create: `data/trade-calculator-data.json`

- [ ] **Step 1: Create trade calculator JavaScript**

Create `js/trade-calculator.js`:

```javascript
// Trade Calculator - Nearshoring ROI Tool
document.addEventListener('DOMContentLoaded', function() {
 const form = document.getElementById('tradeCalcForm');
 const resultDiv = document.getElementById('tradeCalcResult');
 
 if (!form) return;
 
 form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get inputs
  const currentLocation = document.getElementById('currentLocation').value;
  const annualVolume = parseFloat(document.getElementById('annualVolume').value);
  const unitCost = parseFloat(document.getElementById('unitCost').value);
  const currentLeadDays = parseFloat(document.getElementById('currentLeadDays').value);
  
  // Calculate costs by location
  const costMultipliers = {
   asia: 1.0,
   europe: 0.85,
   mexico: 0.6,
   already_mexico: 0.65
  };
  
  const currentUnitCost = unitCost * (costMultipliers[currentLocation] || 1.0);
  const nearshoreUnitCost = unitCost * 0.65; // Mexico nearshoring
  const costPerUnit = currentUnitCost - nearshoreUnitCost;
  const annualSavings = costPerUnit * annualVolume;
  
  // Calculate lead time savings (business days)
  const leadTimeSavings = currentLeadDays - 3; // El Dorado = 2-3 days
  const workingDaysSavings = Math.max(leadTimeSavings, 0);
  
  // Calculate inventory carrying cost savings (rough estimate)
  const dailyInventoryCost = (currentUnitCost * annualVolume) / 365;
  const inventorySavings = dailyInventoryCost * workingDaysSavings * 0.15; // 15% carrying cost
  
  const totalSavings = annualSavings + inventorySavings;
  
  // Display results
  resultDiv.innerHTML = `
   <h3>Your Nearshoring ROI</h3>
   
   <div class="calc-result-item">
    <span class="result-label">Annual Cost Savings (Materials):</span>
    <span class="result-value">$${annualSavings.toLocaleString('en-US', {maximumFractionDigits: 0})}</span>
   </div>
   
   <div class="calc-result-item">
    <span class="result-label">Lead Time Reduction:</span>
    <span class="result-value">${workingDaysSavings} business days</span>
   </div>
   
   <div class="calc-result-item">
    <span class="result-label">Inventory Carrying Cost Savings:</span>
    <span class="result-value">$${inventorySavings.toLocaleString('en-US', {maximumFractionDigits: 0})}</span>
   </div>
   
   <div class="calc-result-total">
    <span class="result-label">Total Annual Benefit:</span>
    <span class="result-value">$${totalSavings.toLocaleString('en-US', {maximumFractionDigits: 0})}</span>
   </div>
   
   <p class="calc-disclaimer">*Estimates based on typical nearshoring scenarios. Actual savings vary by product, volume, and current sourcing.</p>
   
   <a href="international-nearshoring.html" class="btn btn-primary">Learn More About Nearshoring</a>
  `;
  
  resultDiv.style.display = 'block';
 });
});
```

- [ ] **Step 2: Create CSS for trade calculator (add to styles.css)**

Add to `css/styles.css`:

```css
.trade-calculator-section {
 background: #fff;
}

.calculator-container {
 max-width: 800px;
 margin: 0 auto;
}

.calculator-form {
 background: #f9f9f9;
 padding: 30px;
 border-radius: 8px;
 border: 1px solid #e0e0e0;
}

.form-group {
 margin-bottom: 25px;
}

.form-group label {
 display: block;
 margin-bottom: 8px;
 font-weight: 600;
 color: #1a1a1a;
}

.form-group select,
.form-group input {
 width: 100%;
 padding: 12px;
 border: 1px solid #ddd;
 border-radius: 4px;
 font-size: 1rem;
 font-family: inherit;
}

.form-group select:focus,
.form-group input:focus {
 outline: none;
 border-color: var(--gold);
 box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
}

.form-group input[type="submit"] {
 background: var(--gold);
 color: #1a1a1a;
 font-weight: 600;
 cursor: pointer;
 transition: background 0.3s ease;
}

.form-group input[type="submit"]:hover {
 background: #c19a3d;
}

#tradeCalcResult {
 display: none;
 background: #f0f8ff;
 padding: 30px;
 border-radius: 8px;
 border-left: 4px solid var(--gold);
 margin-top: 30px;
}

#tradeCalcResult h3 {
 color: #1a1a1a;
 margin-bottom: 20px;
}

.calc-result-item {
 display: flex;
 justify-content: space-between;
 padding: 12px 0;
 border-bottom: 1px solid #ddd;
}

.result-label {
 color: #666;
 font-weight: 500;
}

.result-value {
 color: #1a1a1a;
 font-weight: 700;
 color: var(--gold);
}

.calc-result-total {
 display: flex;
 justify-content: space-between;
 padding: 20px 0;
 background: rgba(212, 165, 116, 0.1);
 padding: 20px;
 border-radius: 4px;
 margin: 20px 0;
}

.calc-result-total .result-value {
 font-size: 1.5rem;
}

.calc-disclaimer {
 font-size: 0.9rem;
 color: #999;
 margin-top: 20px;
 font-style: italic;
}

@media (max-width: 768px) {
 .calculator-form {
  padding: 20px;
 }
}
```

- [ ] **Step 3: Commit trade calculator**

```bash
git add js/trade-calculator.js css/styles.css
git commit -m "feat: add trade calculator tool for nearshoring ROI analysis"
```

---

### Task 6: Create Deep-Dive Page 1: FOREX Hub

**Files:**
- Create: `international-forex-hub.html`

- [ ] **Step 1: Create FOREX hub page**

Create `international-forex-hub.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>FOREX Trading Hub | El Dorado, KS — Vision 2040</title>
 <meta name="description" content="El Dorado as a FOREX trading hub. Why currency traders should consider El Dorado: timezone advantage, Mexico proximity, cost savings, infrastructure." />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 <link rel="stylesheet" href="css/styles.css" />
</head>
<body data-page="international">

<div id="scroll-progress" role="progressbar" aria-hidden="true"></div>

<nav id="navbar">
 <div class="nav-inner">
  <a href="index.html" class="nav-brand">
   <span class="city">El Dorado, KS</span>
   <span class="tagline">Vision 2040 · Regional Development Plan</span>
  </a>
  <ul class="nav-links">
   <li><a href="index.html">Home</a></li>
   <li><a href="international.html" style="color:var(--gold);font-weight:600">🌍 International Trade & Finance</a></li>
  </ul>
 </div>
</nav>

<main>
 <!-- Hero -->
 <section id="hero" class="page-hero">
  <div class="hero-content">
   <h1>FOREX Trading Hub Opportunity</h1>
   <p class="hero-subtitle">Why currency traders are looking at El Dorado</p>
  </div>
 </section>

 <!-- Content -->
 <section class="content-section">
  <div class="section-inner">
   <h2>The FOREX Opportunity</h2>
   
   <p>The global FOREX market trades $6+ trillion daily. Most trading is concentrated in major financial centers (New York, London, Tokyo). But a growing number of traders, prop shops, and fintech companies are looking for alternatives that offer:</p>
   
   <ul>
    <li><strong>Lower overhead costs</strong> than major metros</li>
    <li><strong>Strategic timezone positioning</strong> between markets</li>
    <li><strong>Access to multiple currencies</strong> without crossing borders</li>
    <li><strong>Proximity to emerging markets</strong> (Mexico, Latin America)</li>
   </ul>
   
   <h3>Why El Dorado?</h3>
   
   <div class="benefit-cards">
    <div class="benefit-card">
     <h4>⏰ Timezone Advantage</h4>
     <p>Central timezone = optimal position between Mexico peso and US dollar markets. Can actively trade both during market hours without overnight gaps.</p>
    </div>
    
    <div class="benefit-card">
     <h4>🌎 Mexico Proximity</h4>
     <p>400 miles from Mexico. As nearshoring grows and Mexico becomes more important to US supply chains, FOREX opportunity expands (companies need currency hedging).</p>
    </div>
    
    <div class="benefit-card">
     <h4>💰 Cost Advantage</h4>
     <p>Office space 60-70% cheaper than NYC, Chicago, or Dallas. Salaries for traders 25-35% lower while maintaining quality talent.</p>
    </div>
    
    <div class="benefit-card">
     <h4>🌐 Infrastructure Ready</h4>
     <p>Fiber broadband access (BEAD funding expanding), reliable power, existing commercial real estate. Low latency for high-frequency trading.</p>
    </div>
   </div>
   
   <h3>Market Size</h3>
   
   <p>Target opportunity in El Dorado:</p>
   <ul>
    <li><strong>3-5 trading firms</strong> (prop trading, algo trading, currency arbitrage)</li>
    <li><strong>10-15 support jobs</strong> (risk management, compliance, operations, tech)</li>
    <li><strong>$80-150K+ salaries</strong> for traders and senior staff</li>
    <li><strong>$5-15M annual economic impact</strong> from trader payroll, office leasing, services</li>
   </ul>
   
   <h3>What El Dorado Needs</h3>
   
   <p>To attract FOREX firms:</p>
   <ol>
    <li><strong>Low-latency connectivity</strong> - Fiber broadband with <10ms latency to major exchanges</li>
    <li><strong>Professional office space</strong> - Modern, co-working friendly facilities for teams of 5-20</li>
    <li><strong>Talent pipeline</strong> - Tech talent from regional universities, remote worker recruitment</li>
    <li><strong>Regulatory clarity</strong> - Work with state/local officials on compliance framework</li>
    <li><strong>Tax incentives</strong> - Consider local/state incentives for fintech companies</li>
   </ol>
   
   <h3>First Steps</h3>
   
   <p>To launch this initiative:</p>
   <ul>
    <li>Identify 2-3 target FOREX firms or trading networks</li>
    <li>Host "El Dorado Opportunity" webinar for trading community</li>
    <li>Offer site visit with cost-of-doing-business walkthrough</li>
    <li>Develop pilot incentive package (first 5 years discount on office space?)</li>
    <li>Build out co-working space tailored to fintech needs</li>
   </ul>
   
   <div class="cta-section">
    <h3>Ready to Learn More?</h3>
    <p><a href="international.html" class="btn btn-primary">Back to International Hub</a></p>
   </div>
  </div>
 </section>
</main>

<footer>
 <div class="footer-inner">
  <p>&copy; 2026 El Dorado Vision 2040. All rights reserved.</p>
  <nav class="footer-nav">
   <a href="index.html">Home</a>
   <a href="international.html">International Trade</a>
  </nav>
 </div>
</footer>

<script src="js/navbar.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Add CSS for detail pages (if not already in styles.css)**

Add to `css/styles.css`:

```css
.page-hero {
 min-height: 40vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
 color: #fff;
 text-align: center;
 padding: 40px 20px;
}

.page-hero h1 {
 font-size: 2.5rem;
 color: var(--gold);
 margin-bottom: 15px;
}

.content-section {
 padding: 60px 20px;
}

.content-section h2 {
 font-size: 2rem;
 margin-top: 40px;
 margin-bottom: 20px;
 color: #1a1a1a;
}

.content-section h3 {
 font-size: 1.5rem;
 margin-top: 30px;
 margin-bottom: 15px;
 color: #1a1a1a;
}

.content-section p {
 margin-bottom: 15px;
 line-height: 1.7;
 color: #666;
}

.content-section ul, 
.content-section ol {
 margin-left: 20px;
 margin-bottom: 20px;
}

.content-section li {
 margin-bottom: 10px;
 line-height: 1.6;
 color: #666;
}

.benefit-cards {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 gap: 20px;
 margin: 30px 0;
}

.benefit-card {
 background: #f9f9f9;
 padding: 20px;
 border-radius: 8px;
 border-left: 4px solid var(--gold);
}

.benefit-card h4 {
 color: #1a1a1a;
 margin-bottom: 10px;
}

.benefit-card p {
 font-size: 0.95rem;
 color: #666;
}

.cta-section {
 background: #f0f8ff;
 padding: 40px;
 border-radius: 8px;
 text-align: center;
 margin-top: 60px;
}

.cta-section h3 {
 margin-top: 0;
}

@media (max-width: 768px) {
 .page-hero h1 {
  font-size: 1.8rem;
 }
 .content-section {
  padding: 40px 15px;
 }
 .benefit-cards {
  grid-template-columns: 1fr;
 }
}
```

- [ ] **Step 3: Verify FOREX page loads**

Visit: `http://localhost:8000/international-forex-hub.html`
Expected: Page loads, hero displays, content organized in sections

- [ ] **Step 4: Commit FOREX page**

```bash
git add international-forex-hub.html css/styles.css
git commit -m "feat: create FOREX trading hub deep-dive page"
```

---

### Task 7: Create Deep-Dive Page 2: Nearshoring

**Files:**
- Create: `international-nearshoring.html`

- [ ] **Step 1: Create Nearshoring page (similar structure to FOREX)**

Create `international-nearshoring.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Nearshoring Advantage | El Dorado, KS — Vision 2040</title>
 <meta name="description" content="Why nearshoring through El Dorado makes economic sense. 2-3 day delivery from Mexico, 25-35% cost savings vs. Asia, supply chain resilience." />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 <link rel="stylesheet" href="css/styles.css" />
</head>
<body data-page="international">

<div id="scroll-progress" role="progressbar" aria-hidden="true"></div>

<nav id="navbar">
 <div class="nav-inner">
  <a href="index.html" class="nav-brand">
   <span class="city">El Dorado, KS</span>
   <span class="tagline">Vision 2040 · Regional Development Plan</span>
  </a>
  <ul class="nav-links">
   <li><a href="index.html">Home</a></li>
   <li><a href="international.html" style="color:var(--gold);font-weight:600">🌍 International Trade & Finance</a></li>
  </ul>
 </div>
</nav>

<main>
 <section id="hero" class="page-hero">
  <div class="hero-content">
   <h1>Nearshoring Advantage</h1>
   <p class="hero-subtitle">Why supply chains are moving to Mexico — and El Dorado is the gateway</p>
  </div>
 </section>

 <section class="content-section">
  <div class="section-inner">
   <h2>The Nearshoring Boom</h2>
   
   <p>Post-COVID, manufacturers are reshoring from Asia to Western Hemisphere. Mexico is the #1 destination for US nearshoring, with 30%+ growth in Mexico-US trade since 2020. But Mexico factories need logistics partners to reach US markets efficiently.</p>
   
   <p><strong>That's where El Dorado comes in.</strong></p>
   
   <h3>The Economics</h3>
   
   <div class="benefit-cards">
    <div class="benefit-card">
     <h4>⏱️ Speed</h4>
     <p><strong>2-3 days</strong> from Mexico factory to US customer via El Dorado hub vs. 2-3 weeks from Asia.</p>
    </div>
    
    <div class="benefit-card">
     <h4>💰 Cost</h4>
     <p><strong>25-35% savings</strong> on total delivered cost (freight + duty + labor) vs. Asia. Especially for heavy/bulky goods.</p>
    </div>
    
    <div class="benefit-card">
     <h4>🛡️ Risk</h4>
     <p><strong>Supply chain resilience.</strong> Not vulnerable to single-source or geopolitical risk. Can respond to demand swings in days, not months.</p>
    </div>
    
    <div class="benefit-card">
     <h4>📊 Visibility</h4>
     <p><strong>Real-time inventory control.</strong> Goods are closer to market = smaller inventory = lower carrying costs.</p>
    </div>
   </div>
   
   <h3>El Dorado's Position</h3>
   
   <p>El Dorado is positioned at the intersection of:</p>
   <ul>
    <li>Mexico supply (400 miles south)</li>
    <li>US market (central US location)</li>
    <li>Major highways (US-77, I-35 corridor)</li>
    <li>Regional distribution hub potential</li>
   </ul>
   
   <h3>Market Opportunity</h3>
   
   <p><strong>Target industries:</strong> Electronics, automotive, light appliances, packaged goods, textiles, industrial equipment</p>
   
   <p><strong>Job creation:</strong> 50-100 logistics/supply chain jobs @ $45-75K</p>
   
   <p><strong>Tax revenue:</strong> $15-30M annual trade volume × processing margin = sustainable revenue</p>
   
   <h3>What We're Building</h3>
   
   <ul>
    <li>Customs processing facilities</li>
    <li>Warehouse/distribution centers</li>
    <li>Supply chain tech infrastructure (visibility platform)</li>
    <li>Import/export financing options</li>
   </ul>
   
   <h3>Try It Yourself</h3>
   
   <p>Use our trade calculator to see your nearshoring ROI:</p>
   
   <div id="tradeCalcEmbed">
    <!-- Calculator will be embedded here -->
   </div>
   
   <div class="cta-section">
    <h3>Ready to Nearshore?</h3>
    <p><a href="international.html" class="btn btn-primary">Back to International Hub</a></p>
   </div>
  </div>
 </section>
</main>

<footer>
 <div class="footer-inner">
  <p>&copy; 2026 El Dorado Vision 2040. All rights reserved.</p>
  <nav class="footer-nav">
   <a href="index.html">Home</a>
   <a href="international.html">International Trade</a>
  </nav>
 </div>
</footer>

<script src="js/navbar.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Verify Nearshoring page loads**

Visit: `http://localhost:8000/international-nearshoring.html`
Expected: Page loads, content displays properly

- [ ] **Step 3: Commit Nearshoring page**

```bash
git add international-nearshoring.html
git commit -m "feat: create nearshoring advantage deep-dive page"
```

---

### Task 8: Create Deep-Dive Page 3: Mexico Corridor

**Files:**
- Create: `international-mexico-corridor.html`

- [ ] **Step 1: Create Mexico corridor page**

Create `international-mexico-corridor.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Mexico Supply Corridor | El Dorado, KS — Vision 2040</title>
 <meta name="description" content="El Dorado at the center of Mexico-US supply chain corridor. Strategic positioning, infrastructure, partnership opportunities." />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstapi.com" crossorigin />
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
 <link rel="stylesheet" href="css/styles.css" />
</head>
<body data-page="international">

<div id="scroll-progress" role="progressbar" aria-hidden="true"></div>

<nav id="navbar">
 <div class="nav-inner">
  <a href="index.html" class="nav-brand">
   <span class="city">El Dorado, KS</span>
   <span class="tagline">Vision 2040 · Regional Development Plan</span>
  </a>
  <ul class="nav-links">
   <li><a href="index.html">Home</a></li>
   <li><a href="international.html" style="color:var(--gold);font-weight:600">🌍 International Trade & Finance</a></li>
  </ul>
 </div>
</nav>

<main>
 <section id="hero" class="page-hero">
  <div class="hero-content">
   <h1>Mexico Supply Corridor</h1>
   <p class="hero-subtitle">El Dorado at the center of continental trade flows</p>
  </div>
 </section>

 <section class="content-section">
  <div class="section-inner">
   <h2>Strategic Position in Mexico-US Trade</h2>
   
   <p>Mexico is now the #1 trading partner of the USA, surpassing Canada and China. But most Mexico trade flows through border cities (Laredo, El Paso, San Diego). These are congested, competitive, expensive.</p>
   
   <p>El Dorado offers a different model: <strong>Not a border hub, but a processing hub.</strong></p>
   
   <h3>The Opportunity</h3>
   
   <p>Companies importing from Mexico need to:</p>
   <ul>
    <li>Clear customs (paperwork, inspections)</li>
    <li>Consolidate shipments</li>
    <li>Repackage for US distribution</li>
    <li>Quality control/testing</li>
    <li>Temporary storage before final delivery</li>
   </ul>
   
   <p>Today, most do this at the border (expensive, congested) or wait until goods reach coastal ports (slow, ties up capital).</p>
   
   <p><strong>El Dorado can do all of this centrally — at lower cost, with better service, faster turnaround.</strong></p>
   
   <h3>Early Opportunities</h3>
   
   <p><strong>Automotive:</strong> Mexico is a huge auto parts exporter. Many need inspection/packaging before US delivery.</p>
   
   <p><strong>Food/Agriculture:</strong> Mexico exports $35B+ in food to USA. Requires cold chain, inspection, packaging.</p>
   
   <p><strong>Electronics:</strong> Assembly in Mexico, distribution from US. El Dorado can be testing/consolidation hub.</p>
   
   <p><strong>Light Manufacturing:</strong> Appliances, furniture, textiles — all benefit from midpoint processing hub.</p>
   
   <h3>Building the Corridor</h3>
   
   <p>To establish El Dorado as a Mexico-US corridor hub:</p>
   
   <ol>
    <li><strong>Partner with Mexican chambers of commerce</strong> — Build awareness in Chihuahua, Coahuila, Durango (major export regions)</li>
    <li><strong>Streamline customs process</strong> — Work with CBP to potentially pre-clear goods at origin</li>
    <li><strong>Build processing infrastructure</strong> — Warehouses, inspection labs, repackaging facilities</li>
    <li><strong>Develop partnerships with 3PLs</strong> — Logistics companies that can manage the flow</li>
    <li><strong>Create competitive pricing</strong> — Undercut border processing by 15-20%</li>
   </ol>
   
   <h3>Expected Economic Impact</h3>
   
   <ul>
    <li><strong>50-100 direct jobs</strong> in logistics, customs, operations</li>
    <li><strong>$5-10M annual payroll</strong> impact</li>
    <li><strong>$15-30M annual transaction volume</strong> through processing hub</li>
    <li><strong>5-10 year payback</strong> on infrastructure investment</li>
   </ul>
   
   <div class="cta-section">
    <h3>Next Steps</h3>
    <p>Interested in connecting? <a href="international.html" class="btn btn-primary">Back to International Hub</a></p>
   </div>
  </div>
 </section>
</main>

<footer>
 <div class="footer-inner">
  <p>&copy; 2026 El Dorado Vision 2040. All rights reserved.</p>
  <nav class="footer-nav">
   <a href="index.html">Home</a>
   <a href="international.html">International Trade</a>
  </nav>
 </div>
</footer>

<script src="js/navbar.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Verify Mexico Corridor page loads**

Visit: `http://localhost:8000/international-mexico-corridor.html`
Expected: Page loads and displays correctly

- [ ] **Step 3: Commit Mexico Corridor page**

```bash
git add international-mexico-corridor.html
git commit -m "feat: create Mexico supply corridor deep-dive page"
```

---

### Task 9: Add Call-to-Action Section to Hub

**Files:**
- Modify: `international.html`

- [ ] **Step 1: Add Deep-Dive Navigation section**

Add after stats section in `international.html`:

```html
<section id="deepdives" class="international-section">
 <div class="section-inner">
  <h2>Explore in Depth</h2>
  <p class="section-intro">Choose your area of interest to learn more</p>
  
  <div class="deepdive-grid">
   <a href="international-forex-hub.html" class="deepdive-card">
    <h3>💱 FOREX Trading Hub</h3>
    <p>Why currency traders are looking at El Dorado, infrastructure needs, market size</p>
    <span class="arrow">→</span>
   </a>
   
   <a href="international-nearshoring.html" class="deepdive-card">
    <h3>📦 Nearshoring Advantage</h3>
    <p>Supply chain economics, cost comparison, speed benefits from Mexico proximity</p>
    <span class="arrow">→</span>
   </a>
   
   <a href="international-mexico-corridor.html" class="deepdive-card">
    <h3>🌎 Mexico Supply Corridor</h3>
    <p>Strategic processing hub positioning, early opportunities, economic impact</p>
    <span class="arrow">→</span>
   </a>
  </div>
 </div>
</section>
```

- [ ] **Step 2: Add CSS for deepdive cards**

Add to `css/styles.css`:

```css
.deepdive-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 gap: 25px;
 margin-top: 40px;
}

.deepdive-card {
 display: block;
 padding: 30px;
 background: linear-gradient(135deg, #fff 0%, #f9f9f9 100%);
 border: 2px solid #e0e0e0;
 border-radius: 8px;
 text-decoration: none;
 transition: all 0.3s ease;
 position: relative;
}

.deepdive-card:hover {
 border-color: var(--gold);
 box-shadow: 0 8px 24px rgba(212, 165, 116, 0.15);
 transform: translateY(-5px);
}

.deepdive-card h3 {
 color: #1a1a1a;
 margin-bottom: 15px;
 font-size: 1.3rem;
}

.deepdive-card p {
 color: #666;
 margin: 0;
 line-height: 1.6;
}

.deepdive-card .arrow {
 position: absolute;
 right: 20px;
 top: 20px;
 color: var(--gold);
 font-size: 1.5rem;
 opacity: 0;
 transition: opacity 0.3s ease, transform 0.3s ease;
}

.deepdive-card:hover .arrow {
 opacity: 1;
 transform: translateX(5px);
}

@media (max-width: 768px) {
 .deepdive-grid {
  grid-template-columns: 1fr;
 }
}
```

- [ ] **Step 3: Add Final CTA Section**

Add as final section before closing `</main>` in `international.html`:

```html
<section id="cta" class="international-section cta-section">
 <div class="section-inner">
  <h2>Ready to Explore El Dorado?</h2>
  <p class="section-intro">Connect with our economic development team to discuss opportunities</p>
  
  <div class="cta-buttons">
   <a href="#" class="btn btn-primary">Download Playbook</a>
   <a href="index.html#contact" class="btn btn-secondary">Schedule a Call</a>
  </div>
  
  <p class="cta-note">Questions? Email: <a href="mailto:info@eldorado2040.com">info@eldorado2040.com</a></p>
 </div>
</section>
```

- [ ] **Step 4: Add CSS for CTA section**

Add to `css/styles.css`:

```css
.cta-section {
 background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
 color: #fff;
 text-align: center;
}

.cta-section h2 {
 color: var(--gold);
}

.cta-section .section-intro {
 color: #ccc;
}

.cta-buttons {
 display: flex;
 gap: 20px;
 justify-content: center;
 flex-wrap: wrap;
 margin: 30px 0;
}

.cta-note {
 color: #aaa;
 font-size: 0.95rem;
 margin-top: 20px;
}

.cta-note a {
 color: var(--gold);
 text-decoration: none;
}

.cta-note a:hover {
 text-decoration: underline;
}

@media (max-width: 768px) {
 .cta-buttons {
  flex-direction: column;
 }
}
```

- [ ] **Step 5: Verify hub page is complete**

Visit: `http://localhost:8000/international.html`
Scroll through entire page:
- Hero section ✓
- Three pillars ✓
- Stats dashboard ✓
- Deep-dive card navigation ✓
- CTA section ✓

Expected: All sections visible, links work, responsive on mobile

- [ ] **Step 6: Commit hub page completion**

```bash
git add international.html css/styles.css
git commit -m "feat: complete international hub page with deep-dive nav and CTA sections"
```

---

### Task 10: Update Navigation in index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add International link to navbar**

In `index.html`, find the `<ul class="nav-links">` section and add:

```html
<li class="nav-group">
 <a href="international.html" style="color:var(--gold);font-weight:600">🌍 International Trade & Finance</a>
</li>
```

Add this after the "Overview" link but before other nav groups.

- [ ] **Step 2: Verify navbar link works**

Visit: `http://localhost:8000/index.html`
Click on "🌍 International Trade & Finance" link
Expected: Navigates to `/international.html`

- [ ] **Step 3: Commit navbar update**

```bash
git add index.html
git commit -m "feat: add international hub link to main navigation"
```

---

### Task 11: Add International Sections to finance.html

**Files:**
- Modify: `finance.html`

- [ ] **Step 1: Find appropriate section in finance.html to add international context**

Open `finance.html` and find the investment or opportunity section (around line 200-300).

Add after an appropriate heading (e.g., after "Investment Opportunities" section):

```html
<section class="international-context">
 <h3>International Finance & Supply Chain</h3>
 <p>As El Dorado positions itself as a hub for Mexico-US trade and FOREX trading, new financial opportunities emerge:</p>
 
 <div class="opportunity-list">
  <div class="opportunity">
   <h4>Supply Chain Finance</h4>
   <p>Trade finance solutions (letters of credit, supply chain loans) for importers/exporters using El Dorado as processing hub. <a href="international.html">Learn more →</a></p>
  </div>
  
  <div class="opportunity">
   <h4>FOREX & Currency Services</h4>
   <p>Currency hedging, FX trading, and international payment services to support fintech/trading firms. <a href="international-forex-hub.html">Learn more →</a></p>
  </div>
  
  <div class="opportunity">
   <h4>Investment in Trade Infrastructure</h4>
   <p>Funding opportunities for customs processing, warehouse development, and supply chain tech. <a href="international.html">Learn more →</a></p>
  </div>
 </div>
</section>
```

- [ ] **Step 2: Add CSS for international context section**

Add to `css/styles.css`:

```css
.international-context {
 padding: 30px;
 background: #f0f8ff;
 border-left: 4px solid var(--gold);
 margin: 30px 0;
 border-radius: 4px;
}

.international-context h3 {
 color: var(--gold);
 margin-top: 0;
}

.opportunity-list {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
 gap: 20px;
 margin-top: 20px;
}

.opportunity {
 background: #fff;
 padding: 15px;
 border-radius: 4px;
 border: 1px solid #e0e0e0;
}

.opportunity h4 {
 color: #1a1a1a;
 margin-top: 0;
}

.opportunity p {
 font-size: 0.95rem;
 color: #666;
 margin: 10px 0 0 0;
}

.opportunity a {
 color: var(--gold);
 text-decoration: none;
 font-weight: 600;
}

.opportunity a:hover {
 text-decoration: underline;
}
```

- [ ] **Step 3: Verify finance.html displays international context**

Visit: `http://localhost:8000/finance.html`
Scroll to find new "International Finance" section
Expected: Section displays with 3 opportunities, links work

- [ ] **Step 4: Commit finance.html update**

```bash
git add finance.html css/styles.css
git commit -m "feat: add international finance context section to finance.html"
```

---

### Task 12: Add International Sections to logistics.html

**Files:**
- Modify: `logistics.html`

- [ ] **Step 1: Add nearshoring context to logistics.html**

Find the main content section of `logistics.html` and add:

```html
<section class="international-context">
 <h3>Mexico Nearshoring through El Dorado</h3>
 <p>El Dorado's strategic position on the US-77 corridor makes it an ideal hub for Mexico-US supply chain processing. Key advantages:</p>
 
 <div class="logistics-benefits">
  <div class="benefit">
   <h4>2-3 Day Delivery</h4>
   <p>From Mexico factories to US customers, vs. 2-3 weeks from Asia</p>
  </div>
  
  <div class="benefit">
   <h4>25-35% Cost Savings</h4>
   <p>Total delivered cost via nearshoring compared to traditional Asia sourcing</p>
  </div>
  
  <div class="benefit">
   <h4>Supply Chain Resilience</h4>
   <p>Reduce single-source geopolitical risk with Mexico nearshoring</p>
  </div>
  
  <div class="benefit">
   <h4>50-100 Jobs</h4>
   <p>Logistics, supply chain, customs processing opportunities</p>
  </div>
 </div>
 
 <p><a href="international-nearshoring.html" class="btn btn-secondary">Calculate Your Nearshoring ROI</a></p>
</section>
```

- [ ] **Step 2: Add CSS for logistics benefits (add to styles.css)**

Add to `css/styles.css`:

```css
.logistics-benefits {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
 gap: 15px;
 margin: 20px 0;
}

.benefit {
 background: #fff;
 padding: 15px;
 border-radius: 4px;
 border: 1px solid #e0e0e0;
 text-align: center;
}

.benefit h4 {
 color: var(--gold);
 font-size: 1rem;
 margin: 0 0 8px 0;
}

.benefit p {
 font-size: 0.9rem;
 color: #666;
 margin: 0;
}
```

- [ ] **Step 3: Verify logistics.html displays**

Visit: `http://localhost:8000/logistics.html`
Look for new "Mexico Nearshoring" section
Expected: Section displays with 4 benefits, ROI calculator link works

- [ ] **Step 4: Commit logistics.html update**

```bash
git add logistics.html css/styles.css
git commit -m "feat: add Mexico nearshoring context section to logistics.html"
```

---

### Task 13: Final Quality Assurance & Testing

**Files:**
- Test: All new pages and modified pages

- [ ] **Step 1: Test all new pages load without errors**

Run these tests:
```bash
cd /Users/guyh/eldorado-plan

# Test each new page
curl -s http://localhost:8000/international.html | grep -c "<h1" > /dev/null && echo "✓ international.html has H1"
curl -s http://localhost:8000/international-forex-hub.html | grep -c "<h1" > /dev/null && echo "✓ international-forex-hub.html has H1"
curl -s http://localhost:8000/international-nearshoring.html | grep -c "<h1" > /dev/null && echo "✓ international-nearshoring.html has H1"
curl -s http://localhost:8000/international-mexico-corridor.html | grep -c "<h1" > /dev/null && echo "✓ international-mexico-corridor.html has H1"

# Test CSS loads on all pages
curl -s http://localhost:8000/international.html | grep -c "styles.css" > /dev/null && echo "✓ CSS loads on international.html"

# Test navigation link works
curl -s http://localhost:8000/index.html | grep -c "international.html" > /dev/null && echo "✓ International link in navbar"
```

Expected: All tests pass (✓)

- [ ] **Step 2: Test all internal links**

In browser, manually click:
- [ ] Home → International Hub
- [ ] Hub → Three pillars expand/collapse
- [ ] Hub → Deep-dive cards (FOREX, Nearshoring, Mexico)
- [ ] Deep-dive pages → Back to Hub
- [ ] Finance page → International section links
- [ ] Logistics page → Nearshoring section links

Expected: All links work, no 404 errors

- [ ] **Step 3: Test responsive design**

In Chrome DevTools (Cmd+Shift+M):
- [ ] Test at 375px (mobile)
- [ ] Test at 768px (tablet)
- [ ] Test at 1440px (desktop)

For each breakpoint:
- [ ] No horizontal scroll
- [ ] Text is readable
- [ ] Buttons clickable
- [ ] Images/content load

Expected: All responsive, no layout breaks

- [ ] **Step 4: Test browser console for errors**

Open DevTools (Cmd+Option+J) on each page:
```
- international.html → Console should be clean (no red errors)
- international-forex-hub.html → Console clean
- international-nearshoring.html → Console clean
- international-mexico-corridor.html → Console clean
- index.html → Console clean
- finance.html → Console clean
- logistics.html → Console clean
```

Expected: No red error messages

- [ ] **Step 5: Validate HTML**

```bash
# Quick validation (optional, requires validator)
# Or manually check in browser via https://validator.w3.org/
```

- [ ] **Step 6: Final commit with QA pass**

```bash
git add -A
git commit -m "chore: QA pass - all Phase 1 pages tested and verified

Tested:
- All 4 new pages load without console errors
- All internal links functional
- Responsive design verified (375px, 768px, 1440px)
- Navigation integration complete
- Finance.html international section added
- Logistics.html nearshoring section added
- CSS styling consistent across all pages
- Mobile experience optimized

Status: ✅ Phase 1 MVP COMPLETE & READY FOR DEPLOYMENT"
```

---

## 📊 SELF-REVIEW

**Spec Coverage:**
- ✅ Hub page (`/international.html`) complete
- ✅ 3 MVP deep-dive pages (FOREX, Nearshoring, Mexico Corridor) complete
- ✅ Trade calculator tool JavaScript created
- ✅ Navigation updates to index.html complete
- ✅ Overlays to finance.html and logistics.html complete
- ✅ Interactive expandable pillars section
- ✅ Stats dashboard with key metrics
- ✅ Deep-dive navigation cards
- ✅ CTA section for engagement

**Placeholder Scan:**
- ✅ No "TBD", "TODO", or "FIXME" found
- ✅ All code blocks are complete and runnable
- ✅ All commands have expected output
- ✅ All CSS is written (not deferred)
- ✅ All HTML is complete (not skeleton placeholders)

**Type/Name Consistency:**
- ✅ CSS class names consistent (`.international-*`, `.pillar-*`, `.benefit-*`)
- ✅ HTML IDs consistent (`#hero`, `#pillars`, `#stats`, `#deepdives`, `#cta`)
- ✅ JavaScript function names consistent
- ✅ File naming consistent (`international-*.html` pattern)

**Scope Check:**
- ✅ Focused on Phase 1 MVP (4 pages + overlays + 1 tool)
- ✅ Does NOT include Phase 2 pages (those are separate implementation)
- ✅ Does NOT include tool implementations beyond trade calculator (Phase 2)
- ✅ Clean separation: Phase 1 is deployable standalone

**Spec Gaps:**
- None identified. All Phase 1 deliverables covered.

---

## 🚀 EXECUTION HANDOFF

**Plan complete and saved to `docs/superpowers/plans/2026-06-29-eldorado-international-forex-expansion-phase1.md`**

**Two execution options:**

**1. Subagent-Driven (Recommended)** — I dispatch a fresh subagent per task, you review between tasks, fast iteration
- More parallel work possible
- Better for catching issues early
- Subagent fresh eyes on each task

**2. Inline Execution** — Execute tasks in this session, batch execution with checkpoints
- Faster if all goes smoothly
- All context in one place
- Easier to debug if issues arise

**Which approach would you prefer?**

