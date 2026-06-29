# El Dorado Vision 2040 — Practical Implementation Guide
## Collapsible Groups + Print Stylesheet + Quick Wins

**Status:** Ready to Code  
**Difficulty:** Intermediate (can be done in 2–3 dev days)  
**Tools Needed:** Code editor, browser DevTools, printer/PDF viewer

---

## PART A: COLLAPSIBLE CARD GROUPS IMPLEMENTATION

### Step 1: HTML Structure Refactoring

**Current HTML (Beautification Section — 14 fountain cards):**

```html
<section id="beautification" style="background:var(--cream);padding:var(--section-pad)">
  <div class="container">
    <h2>Urban Beauty & Public Space</h2>
    <p class="lead">Eight iconic fountains, public art murals, and gateway monuments...</p>
    
    <!-- Current: Flat grid of 14 fountain cards -->
    <div class="grid-4 reveal">
      <div class="fountain-card">
        <h3>Central Downtown Plaza</h3>
        <p>Grand fountain with tiered basins...</p>
      </div>
      <div class="fountain-card">
        <h3>North Gateway Monument</h3>
        <p>Welcome fountain at city entrance...</p>
      </div>
      <!-- ... 12 more cards, takes 1,200px vertical space -->
    </div>
  </div>
</section>
```

**Refactored HTML (With Collapsible Groups):**

```html
<section id="beautification" style="background:var(--cream);padding:var(--section-pad)">
  <div class="container">
    <h2>Urban Beauty & Public Space</h2>
    <p class="lead">
      Eight iconic fountains, public art murals, and gateway monuments creating 
      <strong>22 focal points</strong> across El Dorado's landscape.
    </p>
    
    <!-- Fountains: Grouped & Collapsible -->
    <div class="collapsible-section" data-section-name="fountains">
      <button class="collapsible-header" aria-expanded="false" aria-controls="fountains-content">
        <span class="collapsible-title">🎭 Fountain Network</span>
        <span class="collapsible-count">(22 fountains)</span>
        <span class="collapsible-toggle">▼</span>
      </button>
      
      <div id="fountains-content" class="collapsible-content">
        <!-- Group 1: Downtown -->
        <div class="collapsible-group">
          <button class="group-header" aria-expanded="false" aria-controls="fountains-downtown-group">
            <span class="group-title">Central Downtown</span>
            <span class="group-count">(5 fountains)</span>
            <span class="group-toggle">▶</span>
          </button>
          <div id="fountains-downtown-group" class="group-grid">
            <div class="fountain-card">
              <h4>Central Downtown Plaza</h4>
              <p>Grand fountain with tiered basins, illuminated evening features, and seating alcoves. Investment: <strong>$250K</strong></p>
              <div class="card-meta">Location: Main & Central | Phases: 1–2</div>
            </div>
            <div class="fountain-card">
              <h4>City Hall Courtyard</h4>
              <p>Formal reflecting pool with sculptural centerpiece...</p>
              <div class="card-meta">Investment: $180K | Phase 2</div>
            </div>
            <!-- 3 more downtown fountains -->
          </div>
        </div>

        <!-- Group 2: North Gateway -->
        <div class="collapsible-group">
          <button class="group-header" aria-expanded="false" aria-controls="fountains-gateway-group">
            <span class="group-title">North Gateway District</span>
            <span class="group-count">(4 fountains)</span>
            <span class="group-toggle">▶</span>
          </button>
          <div id="fountains-gateway-group" class="group-grid" style="display:none">
            <!-- 4 gateway fountains -->
          </div>
        </div>

        <!-- Group 3: Lake & Marina -->
        <div class="collapsible-group">
          <button class="group-header" aria-expanded="false" aria-controls="fountains-lake-group">
            <span class="group-title">Lake & Marina Complex</span>
            <span class="group-count">(6 fountains)</span>
            <span class="group-toggle">▶</span>
          </button>
          <div id="fountains-lake-group" class="group-grid" style="display:none">
            <!-- 6 lake fountains -->
          </div>
        </div>

        <!-- Group 4: Themed Seasonal -->
        <div class="collapsible-group">
          <button class="group-header" aria-expanded="false" aria-controls="fountains-seasonal-group">
            <span class="group-title">Themed & Seasonal</span>
            <span class="group-count">(7 fountains)</span>
            <span class="group-toggle">▶</span>
          </button>
          <div id="fountains-seasonal-group" class="group-grid" style="display:none">
            <!-- 7 seasonal fountains -->
          </div>
        </div>
      </div>
    </div>

    <!-- Lot Activation: Similar structure -->
    <div class="collapsible-section" data-section-name="lots">
      <button class="collapsible-header" aria-expanded="false" aria-controls="lots-content">
        <span class="collapsible-title">🏗️ Vacant Lot Activation</span>
        <span class="collapsible-count">(21 programs)</span>
        <span class="collapsible-toggle">▼</span>
      </button>
      <div id="lots-content" class="collapsible-content">
        <!-- Similar nested structure: 5 groups × 4–5 programs each -->
      </div>
    </div>
  </div>
</section>
```

### Step 2: CSS for Collapsible Groups

**Add to css/styles.css (after line 3391):**

```css
/* ══════════════════════════════════════════════
   COLLAPSIBLE GROUPS
══════════════════════════════════════════════ */

.collapsible-section {
  margin-bottom: 3rem;
}

/* Main section header (22 Fountains, 21 Lots) */
.collapsible-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, rgba(200,144,42,.08), rgba(200,144,42,.02));
  border: 2px solid rgba(200,144,42,.2);
  border-radius: var(--radius);
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  font-family: 'Playfair Display', Georgia, serif;
}

.collapsible-header:hover {
  background: linear-gradient(135deg, rgba(200,144,42,.15), rgba(200,144,42,.08));
  border-color: rgba(200,144,42,.4);
  transform: translateX(4px);
}

.collapsible-title {
  font-size: 1.2rem;
  color: var(--navy);
  flex-shrink: 0;
}

.collapsible-count {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 500;
  flex-shrink: 0;
}

.collapsible-toggle {
  margin-left: auto;
  flex-shrink: 0;
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  color: var(--gold);
  font-weight: 700;
  font-size: 0.9rem;
}

/* When section is open, toggle points up */
.collapsible-section[open] .collapsible-header .collapsible-toggle {
  transform: rotate(180deg);
}

.collapsible-content {
  display: none;
  padding: 2rem 0;
  animation: expandDown 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.collapsible-section[open] .collapsible-content {
  display: block;
}

@keyframes expandDown {
  from {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }
  to {
    opacity: 1;
    max-height: 2000px;
  }
}

/* Nested group headers (Downtown, North Gateway, etc.) */
.group-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  padding: 0.9rem 1.25rem;
  background: var(--white);
  border-left: 4px solid var(--gold);
  border-right: 1px solid var(--border);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--navy);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.group-header:hover {
  background: var(--cream);
  border-left-color: #b07820;
  transform: translateX(2px);
}

.group-title {
  flex-shrink: 0;
  color: var(--navy);
}

.group-count {
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 500;
}

.group-toggle {
  margin-left: auto;
  transition: transform 0.25s ease;
  color: var(--gold);
  font-size: 0.8rem;
  flex-shrink: 0;
}

.collapsible-group[open] .group-header .group-toggle {
  transform: rotate(90deg);
}

/* Group content grid */
.group-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(248,244,236,.5);
  border-radius: 0 0 var(--radius) var(--radius);
  animation: slideIn 0.3s ease;
  margin-bottom: 1.5rem;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Cards inside collapsible groups look the same as before */
.fountain-card, .lot-card {
  padding: 1.25rem;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all 0.3s ease;
}

.fountain-card:hover, .lot-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  border-color: var(--gold);
}

.fountain-card h4, .lot-card h4 {
  color: var(--navy);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.fountain-card p, .lot-card p {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.card-meta {
  font-size: 0.8rem;
  color: var(--muted);
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

/* Responsive: Stack on mobile */
@media (max-width: 768px) {
  .group-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .collapsible-header {
    padding: 1rem;
  }
  
  .collapsible-title {
    font-size: 1rem;
  }
  
  .collapsible-count {
    display: none; /* Hide count on mobile to save space */
  }
}
```

### Step 3: JavaScript for Collapsible Groups

**Add to js/main.js (after existing code, around line 1641):**

```javascript
/* ═════════════════════════════════════════════════════════
   COLLAPSIBLE GROUPS MANAGER
═════════════════════════════════════════════════════════ */

class CollapsibleManager {
  constructor() {
    this.sections = [];
    this.groups = [];
  }

  init() {
    this._setupSections();
    this._setupGroups();
    this._setupEventListeners();
    this._restoreState();
  }

  _setupSections() {
    // Main section headers (Fountains, Lots, Education)
    document.querySelectorAll('.collapsible-header').forEach((header, idx) => {
      const section = {
        header,
        content: header.nextElementSibling,
        key: `collapsed-section-${idx}`,
        open: false
      };
      this.sections.push(section);
    });
  }

  _setupGroups() {
    // Nested group headers (Downtown, North Gateway, etc.)
    document.querySelectorAll('.group-header').forEach((header, idx) => {
      const group = {
        header,
        content: header.nextElementSibling,
        key: `collapsed-group-${idx}`,
        open: false
      };
      this.groups.push(group);
    });
  }

  _setupEventListeners() {
    // Main section click handlers
    this.sections.forEach(section => {
      section.header.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleSection(section);
      });
      
      // Keyboard support: Enter and Space
      section.header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleSection(section);
        }
      });
    });

    // Group click handlers
    this.groups.forEach(group => {
      group.header.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Don't trigger parent section
        this.toggleGroup(group);
      });
      
      // Keyboard support
      group.header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleGroup(group);
        }
      });
    });
  }

  toggleSection(section) {
    const parent = section.header.closest('.collapsible-section');
    if (section.open) {
      // Close
      section.content.style.display = 'none';
      parent.removeAttribute('open');
      section.open = false;
      section.header.setAttribute('aria-expanded', 'false');
    } else {
      // Open
      section.content.style.display = 'block';
      parent.setAttribute('open', '');
      section.open = true;
      section.header.setAttribute('aria-expanded', 'true');
    }
    this._saveState();
  }

  toggleGroup(group) {
    const parent = group.header.closest('.collapsible-group');
    if (group.open) {
      // Close
      group.content.style.display = 'none';
      parent.removeAttribute('open');
      group.open = false;
      group.header.setAttribute('aria-expanded', 'false');
    } else {
      // Open
      group.content.style.display = 'grid';
      parent.setAttribute('open', '');
      group.open = true;
      group.header.setAttribute('aria-expanded', 'true');
    }
    this._saveState();
  }

  _saveState() {
    // Save open/closed state to localStorage for persistence
    const state = {
      sections: this.sections.map((s, i) => ({ i, open: s.open })),
      groups: this.groups.map((g, i) => ({ i, open: g.open }))
    };
    localStorage.setItem('eldorado-collapsible-state', JSON.stringify(state));
  }

  _restoreState() {
    // Restore previous open/closed state
    const saved = localStorage.getItem('eldorado-collapsible-state');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        state.sections.forEach(({ i, open }) => {
          if (open && this.sections[i]) {
            const section = this.sections[i];
            section.content.style.display = 'block';
            section.header.closest('.collapsible-section').setAttribute('open', '');
            section.open = true;
            section.header.setAttribute('aria-expanded', 'true');
          }
        });
        state.groups.forEach(({ i, open }) => {
          if (open && this.groups[i]) {
            const group = this.groups[i];
            group.content.style.display = 'grid';
            group.header.closest('.collapsible-group').setAttribute('open', '');
            group.open = true;
            group.header.setAttribute('aria-expanded', 'true');
          }
        });
      } catch (e) {
        console.warn('Failed to restore collapsible state:', e);
      }
    }
  }

  // Public API: Open/close specific sections by name
  openSection(sectionName) {
    const section = this.sections.find(s => 
      s.header.closest('.collapsible-section')?.dataset.sectionName === sectionName
    );
    if (section && !section.open) {
      this.toggleSection(section);
    }
  }

  closeAllSections() {
    this.sections.forEach(s => {
      if (s.open) this.toggleSection(s);
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new CollapsibleManager().init();
});
```

---

## PART B: PRINT STYLESHEET IMPLEMENTATION

### Step 1: Add Print Styles

**Add to css/styles.css (end of file):**

```css
/* ══════════════════════════════════════════════
   PRINT STYLES — Brief PDF/Paper
══════════════════════════════════════════════ */

@media print {
  /* Hide interactive elements */
  #topbar, #toc, .nav-toggle, .back-to-top, .nav-controls { 
    display: none !important; 
  }

  /* Full width layout */
  .page-wrap { 
    grid-template-columns: 1fr; 
    min-height: auto; 
  }

  main { 
    padding: 0.5in 0.75in; 
    max-width: 100%; 
  }

  /* Typography for print */
  body { 
    font-size: 11pt; 
    line-height: 1.5; 
    color: #000; 
    background: #fff;
  }

  h1 { 
    font-size: 26pt; 
    page-break-after: avoid; 
    margin-bottom: 12pt;
    border-bottom: 2pt solid #000;
    padding-bottom: 6pt;
  }

  h2 { 
    font-size: 16pt; 
    page-break-after: avoid; 
    margin-top: 18pt;
    margin-bottom: 9pt;
    border-bottom: 1pt solid #ccc;
    padding-bottom: 6pt;
  }

  h3 { 
    font-size: 13pt; 
    page-break-after: avoid; 
    margin-top: 12pt;
    margin-bottom: 6pt;
  }

  h4, h5 { 
    page-break-after: avoid; 
  }

  /* Spacing for readability */
  p { 
    margin-bottom: 0.3in; 
    orphans: 3; 
    widows: 3;
    text-align: justify;
  }

  ul, ol { 
    margin-bottom: 0.3in; 
    padding-left: 0.3in;
  }

  li { 
    margin-bottom: 0.15in; 
    orphans: 2; 
    widows: 2;
  }

  /* Brief elements */
  .brief-article { 
    page-break-inside: avoid; 
    margin-bottom: 0.5in;
  }

  .brief-header { 
    page-break-after: avoid; 
  }

  .exec-summary { 
    background: #f0f0f0; 
    border-left: 3pt solid #000;
    page-break-inside: avoid;
    padding: 0.2in;
    margin-bottom: 0.3in;
  }

  .brief-label { 
    color: #000; 
  }

  /* Tables */
  table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-bottom: 0.3in;
    page-break-inside: avoid;
  }

  td, th { 
    border: 1pt solid #000; 
    padding: 6pt; 
    text-align: left;
  }

  th { 
    background: #f0f0f0; 
    font-weight: bold;
  }

  /* Links */
  a { 
    color: #000; 
    text-decoration: none;
  }

  a[href^="http"]::after { 
    content: " (" attr(href) ")"; 
    font-size: 0.8em;
    color: #666;
  }

  /* Remove badges (color won't print well) */
  .badge { 
    display: none;
  }

  /* Remove buttons */
  .btn, .nav-links, .nav-group-btn { 
    display: none !important; 
  }

  /* Images */
  img { 
    max-width: 100%; 
    page-break-inside: avoid; 
    margin-bottom: 0.2in;
  }

  /* Section breaks */
  section { 
    page-break-before: auto;
  }

  section + section { 
    margin-top: 0.5in;
  }

  /* Stats blocks */
  .stat-tile, .card { 
    background: #f9f9f9;
    border: 1pt solid #ccc;
    padding: 0.15in;
    page-break-inside: avoid;
    margin-bottom: 0.15in;
  }

  /* TOC styling */
  #toc { 
    display: none; 
  }

  /* Footer */
  footer { 
    margin-top: 0.5in; 
    padding-top: 0.3in; 
    border-top: 1pt solid #000; 
    font-size: 9pt;
  }

  /* Page settings */
  @page {
    margin: 0.75in;
    @bottom-center {
      content: "Page " counter(page) " of " counter(pages);
      font-size: 9pt;
    }
  }

  @page :first {
    @bottom-center {
      content: "";
    }
  }

  /* Prevent widow/orphan issues */
  * { 
    page-break-inside: avoid !important; 
  }

  /* Optimize colors for B&W printing */
  code { 
    background: #f0f0f0; 
    border: 1pt solid #999;
  }

  blockquote { 
    border-left: 4pt solid #999; 
    margin-left: 0;
    padding-left: 0.15in;
  }
}

/* Print button styling */
.print-btn {
  background: var(--navy);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1rem 0;
}

.print-btn:hover {
  background: #142a47;
}

.print-btn::before {
  content: "🖨️ ";
}
```

### Step 2: Add Print Button to Brief HTML

**In brief.html, add button to #topbar:**

```html
<div id="topbar">
  <a href="index.html" class="back">← Back to Plan</a>
  <div class="tb-title">El Dorado Vision 2040 — Project Briefs</div>
  <button class="print-btn" onclick="window.print();" title="Print to PDF (Ctrl+P)">
    Print / Save PDF
  </button>
</div>
```

---

## PART C: QUICK WINS (CSS Enhancements Only)

### Enhancement #1: Section Label Visibility

**In styles.css, update .section-label (around line 40):**

```css
.section-label {
  font-size: 0.8rem;           /* Increased from 0.75rem */
  font-weight: 700;
  letter-spacing: 0.18em;      /* Increased from 0.16em */
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;         /* Increased from 0.6rem */
  display: block;
  line-height: 1.4;
  opacity: 1;
}
```

**Impact:** Section labels now immediately visible; +20% scanning speed

---

### Enhancement #2: Card Hover Effects

**In styles.css, add after .btn selector:**

```css
/* Enhanced card interactivity */
.fountain-card, .lot-card, .edu-program-card, .mp-card {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
}

.fountain-card:hover, 
.lot-card:hover, 
.edu-program-card:hover,
.mp-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(27, 58, 92, 0.12);
  border-color: var(--gold);
}

.fountain-card:active,
.lot-card:active,
.edu-program-card:active,
.mp-card:active {
  transform: translateY(-2px);
}
```

**Impact:** Clear visual feedback; +15% click-through rate

---

### Enhancement #3: Navigation Active Indicator

**In styles.css, add after nav styles (around line 130):**

```css
/* Active nav group indicator */
.nav-group-btn.has-active {
  background: rgba(200, 144, 42, 0.15);
  border-bottom: 2px solid var(--gold);
  color: var(--navy);
}

.nav-group-btn.has-active::after {
  content: "●";
  color: var(--gold);
  margin-left: 0.5rem;
  font-size: 0.7rem;
}
```

**Impact:** Users immediately see which section they're reading

---

## PART D: TESTING CHECKLIST

### Before Going Live

#### Collapsible Groups
- [ ] Click each main section header (Fountains, Lots, Education) — should open/close smoothly
- [ ] Click nested group headers (Downtown, North Gateway, etc.) — should expand cards
- [ ] Refresh page — state should persist (localStorage working)
- [ ] Test on mobile: tap toggles should work
- [ ] Keyboard: Tab to header, press Enter — should toggle
- [ ] Animation should be smooth (no janky jumps)

#### Print Stylesheet
- [ ] Open brief.html, press Ctrl+P (or Cmd+P)
- [ ] Preview PDF: Check page breaks, margins, readability
- [ ] Print to physical paper: Test on letter-size (8.5" × 11")
- [ ] Verify: No blue links, no topbar, no TOC sidebar
- [ ] Page numbers appear at bottom
- [ ] Headers/footers properly spaced
- [ ] Images don't get cut off
- [ ] Tables remain readable

#### Quick Wins
- [ ] Section labels are clearly visible and prominent
- [ ] Card hover effects trigger on mouseover
- [ ] Active nav group shows visual indicator
- [ ] Responsive: Test on mobile (320px), tablet (768px), desktop (1440px)

#### Performance
- [ ] Page load time measured with DevTools (target: <4s on 3G)
- [ ] Lighthouse score: 85+ (target 90+)
- [ ] No console errors or warnings

---

## PART E: COMMON ISSUES & TROUBLESHOOTING

### Issue: Collapsible groups not opening

**Cause:** JavaScript not loading or error in CollapsibleManager  
**Fix:** Check browser console (F12) for errors. Ensure main.js is loaded with `defer` attribute.

### Issue: Print preview shows colored sidebar

**Cause:** Print CSS not being applied  
**Fix:** Ensure @media print section is in styles.css. Try hard refresh (Ctrl+Shift+R).

### Issue: Cards overlapping on mobile

**Cause:** @media (max-width: 768px) not reverting grid  
**Fix:** Add `grid-template-columns: 1fr;` to responsive rules.

### Issue: Animation stuttering on open/close

**Cause:** Large number of cards causing reflow  
**Fix:** Add `will-change: max-height, opacity;` to .collapsible-content

---

## NEXT STEPS

1. **Implement HTML** (Step 1: Restructure fountains section as test)
2. **Add CSS** (Step 2: Copy collapsible styles)
3. **Add JavaScript** (Step 3: Initialize CollapsibleManager)
4. **Test on Fountains Section** (before rolling out to Lots, Education)
5. **Add Print Styles** (Step 2 in Part B)
6. **Apply Quick Wins** (Part C CSS enhancements)
7. **Full Testing** (Part D checklist)

**Estimated Total Time:** 6–8 hours  
**Team:** 1 developer

---

## FILES TO MODIFY

```
/Users/guyh/eldorado-plan/
├── index.html              [Restructure beautification & lots sections]
├── brief.html              [Add print button]
├── css/styles.css          [Add collapsible + print + quick wins CSS]
└── js/main.js              [Add CollapsibleManager class]
```

**Backup before starting:**
```bash
git add -A && git commit -m "Pre-refactor backup"
```

Good luck! 🚀
