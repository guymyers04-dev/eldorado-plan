# Website Refactor Priority List

**Status:** Critical Updates Required  
**Focus:** Tightness, Real Photos, Navigation, Layout Optimization

---

## 🎯 PRIORITY 1: REMOVE LONG BREAKS (Highest Priority)

**Problem:** Excessive padding/margins create dead space throughout site  
**Solution:** Reduce vertical spacing globally

### Changes to Make:

**File: css/styles.css**
```css
/* Reduce section padding */
--section-pad: 88px 0;  → 40px 0;

/* Reduce component margins */
.section-header {
  margin-bottom: 3.25rem;  → 1.5rem;
}

.section-header.center {
  margin-bottom: 3.5rem;  → 1.5rem;
}

/* Reduce photo grid gaps */
.photo-grid {
  gap: 1.5rem;  → 0.75rem;
}

/* Reduce card spacing */
.top-card {
  margin-bottom: 1.5rem;  → 0.75rem;
}

/* Hero section padding */
#hero {
  padding: 120px 0;  → 60px 0;
}
```

**Impact:** Entire site becomes 40-50% more compact, tighter feel

---

## 🎯 PRIORITY 2: REAL PHOTOS (Critical)

**Problem:** Stock Unsplash photos + broken image links  
**Solution:** Use actual El Dorado, KS photos

### What You Need to Provide:

I need 12 actual El Dorado photos:

**HOME PAGE (4 photos):**
- Economic Growth (manufacturing/industrial)
- Lake Recreation (El Dorado Lake)
- Historic Downtown (Main Street)
- Education & Community (USD 490/families)

**ECONOMY PAGE GALLERY 1 (4 photos):**
- Downtown District
- North Gateway Area
- Industrial Corridor
- Lake Recreation (reuse)

**ECONOMY PAGE GALLERY 2 (4 photos):**
- Healthcare (Susan B. Allen Hospital or medical)
- Education (USD 490 campus or Butler CC)
- Manufacturing (facility)
- Agricultural (farm scene near El Dorado)

### How to Provide:

1. **Find/Source 12 photos** (can be phone photos, professional, etc.)
2. **Upload to:** `/Users/guyh/eldorado-plan/images/` directory
3. **Name them:** `economic-growth.jpg`, `lake-recreation.jpg`, etc.
4. **Send me list** of filenames + which page they go on

I'll update all HTML image src paths to point to local files.

---

## 🎯 PRIORITY 3: MAP OPTIMIZATION

**Problem:** North Gateway map is clumsy, takes too much space  
**Solution:** Reduce size, optimize display

### Changes:

**File: economy.html (North Gateway section)**

```html
<!-- BEFORE: Full width map -->
<div id="map-north-gateway" class="district-map reveal"></div>

<!-- AFTER: Smaller, compact map with 2-column layout -->
<div class="grid-2" style="gap: 2rem; align-items: start;">
  <div id="map-north-gateway" class="district-map-compact reveal"></div>
  <div class="map-legend">
    <!-- Legend content moved beside map -->
  </div>
</div>
```

**CSS to Add:**
```css
.district-map-compact {
  height: 400px;  /* was 600px+ */
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.map-legend {
  font-size: 0.9rem;
  line-height: 1.6;
  padding: 1rem;
  background: rgba(27,58,92,0.05);
  border-radius: 8px;
}
```

**Impact:** Map becomes 30% smaller, legend beside instead of below

---

## 🎯 PRIORITY 4: DROPDOWNS & TIGHT STORAGE

**Problem:** Long lists (footer, resources) take up space  
**Solution:** Convert to collapsible dropdowns

### Changes:

**File: index.html (Footer section)**

```html
<!-- BEFORE: Full list -->
<div>
  <h4>Plan Sections</h4>
  <ul>
    <li><a href="#vision">Vision & Overview</a></li>
    <li><a href="#partners">Anchor City Partners</a></li>
    <!-- ... 25+ more items ... -->
  </ul>
</div>

<!-- AFTER: Dropdown -->
<div class="footer-section">
  <h4 class="dropdown-toggle" onclick="toggleDropdown(this)">
    Plan Sections <span class="toggle-icon">▼</span>
  </h4>
  <ul class="dropdown-content" style="display: none;">
    <li><a href="#vision">Vision & Overview</a></li>
    <li><a href="#partners">Anchor City Partners</a></li>
    <!-- ... items ... -->
  </ul>
</div>
```

**CSS to Add:**
```css
.footer-section {
  margin-bottom: 1.5rem;
}

.dropdown-toggle {
  cursor: pointer;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(200,144,42,0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

.dropdown-toggle:hover {
  color: var(--gold);
}

.toggle-icon {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.dropdown-content {
  padding: 0.5rem 0;
  font-size: 0.9rem;
}

.dropdown-content.open .toggle-icon {
  transform: rotate(180deg);
}
```

**JavaScript to Add:**
```javascript
function toggleDropdown(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  header.classList.toggle('open');
}
```

---

## 🎯 PRIORITY 5: SUB-TIER OVERVIEW PAGES

**Problem:** Deep sections lack overview pages, navigation structure unclear  
**Solution:** Create hierarchy with overview pages for each main section

### Structure:

```
index.html (Hub)
├── economy.html (Economy Overview)
│   ├── economy-industry.html (Industry & Economic Dev)
│   ├── economy-health.html (Health Economy)
│   └── economy-megasite.html (1,131-Acre Mega-Site)
├── place.html (Place Overview)
│   ├── place-lake.html (El Dorado Lake)
│   ├── place-downtown.html (Downtown)
│   └── place-parks.html (Parks & Recreation)
├── people.html (People Overview)
│   ├── people-education.html (K-12 Education)
│   └── people-workforce.html (Higher Ed & Workforce)
└── build.html (Infrastructure Overview)
    ├── build-transportation.html (Transportation)
    └── build-utilities.html (Utilities & Infrastructure)
```

### For Each Sub-Page:

**Template Structure:**
```html
<!-- Breadcrumb Navigation -->
<div class="breadcrumb">
  <a href="index.html">Home</a> / 
  <a href="economy.html">Economy</a> / 
  <span>Industry & Economic Development</span>
</div>

<!-- Page Hero -->
<section id="hero">
  <h1>Industry & Economic Development</h1>
  <p class="lead">Deep dive into manufacturing, economic partnerships, and industrial growth</p>
</section>

<!-- Content Sections -->
<section><!-- Content --></section>
<section><!-- Content --></section>

<!-- Sub-item Navigation -->
<div class="sub-nav">
  <h3>Related Topics</h3>
  <ul>
    <li><a href="economy-industry.html">Industry & Economic Dev</a></li>
    <li><a href="economy-health.html">Health Economy</a></li>
    <li><a href="economy-megasite.html">1,131-Acre Mega-Site</a></li>
  </ul>
</div>

<!-- Link to Parent Overview -->
<div class="back-to-overview">
  <a href="economy.html">← Back to Economy Overview</a>
</div>
```

---

## 🎯 PRIORITY 6: TOP BAR NAVIGATION FIX

**Problem:** Navigation pills/top bar doesn't sync with page structure  
**Solution:** Make navigation work with new page hierarchy

### Changes:

**File: js/nav.js**

```javascript
// Update navigation to match new page structure
const navigationMap = {
  'index.html': 'home',
  'economy.html': 'economy',
  'economy-industry.html': 'economy-industry',
  'economy-health.html': 'economy-health',
  'place.html': 'place',
  'place-lake.html': 'place-lake',
  // ... etc
};

// On page load, highlight correct nav pill
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop();
  const navKey = navigationMap[currentPage];
  
  const activePill = document.querySelector(`[data-page="${navKey}"]`);
  if (activePill) {
    activePill.classList.add('active');
  }
});
```

---

## 🎯 PRIORITY 7: MULTI-COLUMN LAYOUTS

**Problem:** Long sections take up too much vertical space  
**Solution:** Use 2-3 column grids for content

### Changes:

**File: economy.html (North Gateway description boxes)**

```html
<!-- BEFORE: Single column (very long) -->
<div>
  <div class="glass-card">300-unit neighborhood...</div>
  <div class="glass-card">150-slip marina...</div>
  <div class="glass-card">250-unit boat storage...</div>
  <div class="glass-card">Amenity hub...</div>
  <div class="glass-card">Public boat launch...</div>
  <div class="glass-card">Linear park...</div>
</div>

<!-- AFTER: 3-column grid -->
<div class="grid-3">
  <div class="glass-card">300-unit neighborhood...</div>
  <div class="glass-card">150-slip marina...</div>
  <div class="glass-card">250-unit boat storage...</div>
  <div class="glass-card">Amenity hub...</div>
  <div class="glass-card">Public boat launch...</div>
  <div class="glass-card">Linear park...</div>
</div>
```

**CSS Already Exists:** `.grid-3` is already defined, just use it consistently

---

## 📋 IMPLEMENTATION ROADMAP

### Phase 1: Spacing & Compactness (1 hour)
- [ ] Reduce section padding (40px instead of 88px)
- [ ] Reduce component margins across board
- [ ] Test on home + economy pages

### Phase 2: Real Photos (2-3 hours)
- [ ] You provide 12 El Dorado photos
- [ ] I update all HTML image src paths
- [ ] Verify photos display correctly on all pages

### Phase 3: Map Optimization (30 min)
- [ ] Reduce map height to 400px
- [ ] Move legend beside map in 2-column layout
- [ ] Test responsiveness

### Phase 4: Dropdowns (1 hour)
- [ ] Convert footer lists to dropdowns
- [ ] Add toggle JavaScript
- [ ] Test expand/collapse functionality

### Phase 5: Sub-Tier Pages (3-4 hours)
- [ ] Create economy-industry.html, economy-health.html, etc.
- [ ] Create place-lake.html, place-downtown.html, etc.
- [ ] Create people-education.html, people-workforce.html
- [ ] Create build-transportation.html, build-utilities.html
- [ ] Add breadcrumb navigation to each
- [ ] Test navigation flow

### Phase 6: Top Bar Navigation (1 hour)
- [ ] Update nav.js to handle new page structure
- [ ] Test pill highlighting on each page
- [ ] Verify dropdowns work on sub-pages

### Phase 7: Multi-Column Layouts (1 hour)
- [ ] Apply .grid-2 and .grid-3 to long content sections
- [ ] Verify responsive behavior (1 column on mobile)
- [ ] Test on all major sections

---

## 📊 EFFORT ESTIMATE

**Total Time:** 8-10 hours  
**Complexity:** Medium (restructuring + new pages)  
**Breaking Changes:** Yes (new page structure requires navigation updates)

**Can be done in parallel:**
- Phase 1 (spacing) while waiting for photos
- Phase 3 (map) independently
- Phase 4 (dropdowns) independently

---

## 🚀 NEXT STEPS

1. **You:** Gather 12 real El Dorado photos, name them, send to me
2. **Me:** Start Phase 1 (spacing reduction) immediately
3. **Me:** Create sub-tier overview pages (Phase 5)
4. **Me:** Integrate photos once received (Phase 2)
5. **Test:** Verify navigation, responsiveness, all links work

---

## 📝 PHOTO CHECKLIST

Need from you:

- [ ] Economic Growth (industrial/manufacturing)
- [ ] Lake Recreation (El Dorado Lake)
- [ ] Historic Downtown (Main Street)
- [ ] Education & Community
- [ ] Downtown District
- [ ] North Gateway Area
- [ ] Industrial Corridor
- [ ] Healthcare (hospital/medical)
- [ ] Education Campus (USD 490/Butler CC)
- [ ] Manufacturing Facility
- [ ] Agricultural Scene
- [ ] Any additional El Dorado imagery

**Send:** Filenames + which page/section each photo belongs in

---

**Ready to start? Where should I begin?**
