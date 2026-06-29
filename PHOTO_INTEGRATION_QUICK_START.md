# El Dorado Vision 2040 — Photo Integration Quick Start

**Goal:** Add real photos to 3 galleries (home + 2 economy pages)  
**Effort:** 2-4 hours  
**Impact:** +30-40% engagement, transforms site from text-heavy to premium

---

## 🎯 What Needs Photos

### **1. Home Page** (index.html)
**Location:** "Discover El Dorado — Where Heritage Meets Innovation"  
**4 Photos needed:**
- `economic-growth.jpg` — Manufacturing/industrial facility
- `lake-recreation.jpg` — El Dorado Lake, water sports
- `historic-downtown.jpg` — Downtown buildings, Main Street
- `education-community.jpg` — School, community/families

### **2. Economy Page — Gallery 1** (economy.html)
**Location:** "Visual Tour — Priority Development Zones"  
**4 Photos needed:**
- `downtown-district.jpg` — Historic downtown core
- `north-gateway-area.jpg` — North Gateway development zone
- `industrial-corridor.jpg` — Manufacturing/industrial area
- `lake-recreation.jpg` — El Dorado Lake (can reuse from home)

### **3. Economy Page — Gallery 2** (economy.html)
**Location:** "Economy in Action — Community Showcase"  
**4 Photos needed:**
- `healthcare-campus.jpg` — Susan B. Allen Hospital or health facility
- `education-campus.jpg` — USD 490 school or Butler CC
- `manufacturing-facility.jpg` — Factory/manufacturing
- `agricultural-scene.jpg` — Farm/agricultural El Dorado area

**Total: 11 unique photos** (1 reused = 12 slots)

---

## 📸 PHOTO SOURCING OPTIONS

### **Option A: Real El Dorado Photos (Best)**
**Where to get them:**
- El Dorado Chamber of Commerce (chamber@eldoradokansas.com)
- City of El Dorado (eldoradoks.net)
- Local photographers (check community Facebook groups)
- Historical society/museum archives

**Specifications:**
- Format: JPG or PNG
- Size: 800x600px minimum
- File size: <150KB (for web performance)
- Style: Real, authentic El Dorado imagery

**Timeline:** 1-2 weeks to coordinate with sources

---

### **Option B: Stock Photos (Immediate)**
**Use professionally styled stock photos to fill galleries NOW**

**Recommended services (all free or affordable):**

1. **Unsplash** (unsplash.com)
   - Free, high-quality
   - Search: "Kansas", "small town", "manufacturing", "lake", "downtown"
   - Download: Full-resolution, no credit needed
   
2. **Pexels** (pexels.com)
   - Free, curated collection
   - Search: "industrial", "water recreation", "historic downtown", "education"
   
3. **Pixabay** (pixabay.com)
   - Free, open license
   - Large collection of relevant photos

4. **Shutterstock** (shutterstock.com) — Premium
   - Paid subscription ($200-300/month)
   - Professional, tailored imagery
   - Best for production-quality site

**Process:**
1. Search for relevant keywords per photo type
2. Download and save to `/images/` directories
3. Resize to 800x600px
4. Update HTML `src` paths
5. Add descriptive alt text
6. Test responsive layout

**Timeline:** 1-2 hours total

---

## 🔧 IMPLEMENTATION STEPS

### **Step 1: Organize Photos**
```
images/
├── home/
│   ├── economic-growth.jpg
│   ├── lake-recreation.jpg
│   ├── historic-downtown.jpg
│   └── education-community.jpg
├── economy/
│   ├── downtown-district.jpg
│   ├── north-gateway-area.jpg
│   ├── industrial-corridor.jpg
│   ├── healthcare-campus.jpg
│   ├── education-campus.jpg
│   ├── manufacturing-facility.jpg
│   └── agricultural-scene.jpg
└── (place, people directories ready for future)
```

### **Step 2: Update Home Page (index.html)**

**BEFORE (current placeholder structure):**
```html
<div class="photo-grid reveal">
  <div class="photo-card">
    <div class="photo-placeholder" style="background: linear-gradient(...)">🏭</div>
    <div class="photo-card-overlay">
      <h4>Economic Growth</h4>
      <p>Manufacturing, hyperscale recruitment...</p>
    </div>
  </div>
  <!-- ... repeat for 3 more cards ... -->
</div>
```

**AFTER (with real photos):**
```html
<div class="photo-grid reveal">
  <div class="photo-card">
    <img src="images/home/economic-growth.jpg" alt="Manufacturing facility in El Dorado" class="photo-card-image" loading="lazy">
    <div class="photo-card-overlay">
      <h4>Economic Growth</h4>
      <p>Manufacturing, hyperscale recruitment...</p>
    </div>
  </div>
  <div class="photo-card">
    <img src="images/home/lake-recreation.jpg" alt="El Dorado Lake with sailboat" class="photo-card-image" loading="lazy">
    <div class="photo-card-overlay">
      <h4>Lake Recreation</h4>
      <p>Sailing, water sports...</p>
    </div>
  </div>
  <div class="photo-card">
    <img src="images/home/historic-downtown.jpg" alt="Historic downtown El Dorado buildings" class="photo-card-image" loading="lazy">
    <div class="photo-card-overlay">
      <h4>Historic Downtown</h4>
      <p>Oil-boom architecture, cultural heritage...</p>
    </div>
  </div>
  <div class="photo-card">
    <img src="images/home/education-community.jpg" alt="Families and students in El Dorado" class="photo-card-image" loading="lazy">
    <div class="photo-card-overlay">
      <h4>Education & Community</h4>
      <p>USD 490 excellence, Butler CC...</p>
    </div>
  </div>
</div>
```

**CSS to add to styles.css:**
```css
.photo-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
```

### **Step 3: Update Economy Page — Gallery 1**
Find section "Visual Tour — Priority Development Zones" in economy.html  
Replace `.photo-placeholder` with `<img>` tags pointing to:
- `images/economy/downtown-district.jpg`
- `images/economy/north-gateway-area.jpg`
- `images/economy/industrial-corridor.jpg`
- `images/home/lake-recreation.jpg` (reuse)

### **Step 4: Update Economy Page — Gallery 2**
Find section "Economy in Action — Community Showcase" in economy.html  
Replace `.photo-placeholder` with `<img>` tags pointing to:
- `images/economy/healthcare-campus.jpg`
- `images/economy/education-campus.jpg`
- `images/economy/manufacturing-facility.jpg`
- `images/economy/agricultural-scene.jpg`

### **Step 5: Test & Optimize**
1. **Responsive:** Check on mobile, tablet, desktop
2. **Performance:** Open DevTools → Network → check image sizes (<150KB each)
3. **Accessibility:** Verify alt text is descriptive
4. **Lazy Loading:** Confirm `loading="lazy"` attribute is set
5. **Core Web Vitals:** Run Lighthouse (target: all green)

---

## 📊 RECOMMENDED FLOW

### **This Week:**
1. **Gather stock photos** (1 hour)
   - Go to Unsplash/Pexels
   - Search keywords: "Kansas manufacturing", "small town main street", "lake", "school"
   - Download 11 photos to `/images/` directories
   
2. **Update HTML** (1 hour)
   - Replace placeholder divs with `<img>` tags
   - Add alt text to each image
   - Add `loading="lazy"` attribute

3. **Test** (30 min)
   - Check all pages in browser
   - Test responsive layout
   - Run Lighthouse audit

4. **Deploy** (30 min)
   - Commit changes to git
   - Push to production

**Total:** 3-4 hours

### **Phase 2 (Later):**
Once El Dorado provides real photos:
1. Download official photos
2. Resize to 800x600px, <150KB
3. Replace stock photos by updating `src` paths
4. Keep alt text and structure unchanged

---

## 📸 STOCK PHOTO SEARCH KEYWORDS

**For Maximum Relevance:**

| Photo Type | Search Terms | Best Source |
|-----------|--------------|-------------|
| **Economic Growth** | "Manufacturing", "Industrial facility", "Factory", "Industry" | Unsplash, Pexels |
| **Lake Recreation** | "Lake", "Sailing", "Water sports", "Dock", "Boating" | Unsplash, Pixabay |
| **Historic Downtown** | "Downtown Main Street", "Historic buildings", "Small town", "Oil", "Heritage" | Pexels, Unsplash |
| **Education & Community** | "School students", "College campus", "Families", "Community" | Unsplash |
| **Healthcare** | "Hospital", "Healthcare facility", "Medical" | Pexels |
| **Agricultural** | "Farm", "Agriculture", "Rural Kansas", "Crop" | Unsplash, Pixabay |

---

## ✅ QUALITY CHECKLIST

Before declaring photos "done":

- [ ] All 4 home page photos in place
- [ ] All 4 economy gallery 1 photos in place
- [ ] All 4 economy gallery 2 photos in place
- [ ] All images <150KB file size
- [ ] All images 800x600px minimum
- [ ] All images have descriptive alt text
- [ ] All images have `loading="lazy"`
- [ ] Responsive layout tested (mobile, tablet, desktop)
- [ ] Lighthouse performance score >90
- [ ] No console errors
- [ ] Changes committed to git

---

## 🚀 NEXT STEPS

**Choose your path:**

### **Path A: Use Stock Photos Now** ✅ RECOMMENDED
**Timeline:** This week (3-4 hours)
**Pros:** Quick, looks professional, easy to replace later  
**Cons:** Not El Dorado-specific imagery  
**Action:** Use this guide to source stock photos

### **Path B: Wait for Real El Dorado Photos**
**Timeline:** 1-2 weeks  
**Pros:** Authentic, local, unique imagery  
**Cons:** Slower, requires coordination  
**Action:** Coordinate with El Dorado Chamber/City; use this guide for technical integration

### **Path C: Hybrid** ✅ BEST
**Timeline:** This week (stock) + 1-2 weeks (real photos)  
**Process:**
1. Add stock photos THIS WEEK (3-4 hours)
2. Site looks professional immediately
3. Coordinate with City/Chamber in parallel
4. Replace stock with real photos when available (just update `src` paths)

---

## 💾 FILES TO MODIFY

| File | Changes | Effort |
|------|---------|--------|
| `index.html` | Replace 4 placeholders → `<img>` tags | 30 min |
| `economy.html` | Replace 8 placeholders → `<img>` tags | 45 min |
| `css/styles.css` | Add `.photo-card-image` class | 10 min |
| (New) `images/*` | Create directory, add 11 JPGs | 1 hour |

**Total Modification Time:** ~2-3 hours

---

## 🎯 READY TO START?

**Recommendation:** Let's do **Path C (Hybrid)** — stock photos this week, real photos next week.

**Your move:** 
1. Choose photo sourcing option (A/B/C)
2. I'll handle HTML updates
3. You provide photos or approve stock selections

Ready to start?
