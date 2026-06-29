# El Dorado Vision 2040 — Photo Integration Guide

## How to Add Photos to the Website

### Directory Structure
```
/eldorado-plan/images/
├── economy/
│   ├── downtown.jpg              (Central Avenue, historic buildings)
│   ├── industrial-site.jpg       (AMAZONE, mega-site area)
│   ├── infrastructure.jpg        (Water tower, utilities, roads)
│   └── skyline.jpg               (City skyline, aerial view)
├── lake/
│   ├── sailing.jpg               (Walnut Valley Sailing Club)
│   ├── marina.jpg                (Water recreation, boats)
│   └── sunset.jpg                (Lake sunset, scenic)
├── place/
│   ├── downtown-street.jpg       (Central Ave detail, storefronts)
│   ├── coutts-museum.jpg         (Museum building)
│   └── parks.jpg                 (Parks, trails, recreation)
├── people/
│   ├── school.jpg                (USD 490 campus)
│   ├── butler-cc.jpg             (Butler Community College)
│   └── community.jpg             (Community gathering, events)
└── hero-images/
    ├── economy-hero.jpg          (Economy page hero background)
    ├── place-hero.jpg            (Place page hero background)
    └── people-hero.jpg           (People page hero background)
```

### Photo Specifications

**High-Resolution Photos:**
- **Quality:** Minimum 72 DPI for web, 1920px width minimum
- **Format:** JPG (compressed), WebP (modern browsers)
- **Color:** Vibrant, well-lit, professional quality
- **Aspect Ratios:**
  - Hero images: 16:9 (1920x1080 or larger)
  - Photo cards: 4:3 (800x600 minimum)
  - Square cards: 1:1 (600x600 minimum)

### Photo Content Recommendations

#### Economy/Industrial:
- ✓ AMAZONE manufacturing facility (if available with permission)
- ✓ Industrial corridor, mega-site overview
- ✓ Infrastructure (water tower, power lines, roads)
- ✓ Modern manufacturing/tech facilities
- ✓ Downtown commercial district

#### Lake & Recreation:
- ✓ El Dorado Lake (boats, sailing, water sports)
- ✓ Walnut Valley Sailing Club regattas
- ✓ Marina facilities, waterfront development
- ✓ Parks and trails, Walnut River
- ✓ Sunset/sunrise lakeside views

#### Downtown & Place:
- ✓ Central Avenue historic buildings
- ✓ Coutts Museum exterior/interior
- ✓ Oil Museum heritage sites
- ✓ Downtown streetscapes
- ✓ Historic architecture details

#### Education & Community:
- ✓ USD 490 schools (elementary, middle, high school)
- ✓ Butler Community College campus
- ✓ Susan B. Allen Hospital exterior
- ✓ Community events, gatherings
- ✓ Parks and public spaces with people

### How to Add Photos to HTML

#### Simple Photo Section:
```html
<div class="photo-section">
  <img src="images/economy/downtown.jpg" alt="Downtown El Dorado Central Avenue">
</div>
```

#### Photo Grid (2 columns):
```html
<div class="photo-grid">
  <div class="photo-card">
    <img src="images/economy/downtown.jpg" alt="Downtown District">
    <div class="photo-card-overlay">
      <h4>Historic Downtown</h4>
      <p>Central Avenue revitalization</p>
    </div>
  </div>
  <div class="photo-card">
    <img src="images/economy/industrial-site.jpg" alt="Industrial Corridor">
    <div class="photo-card-overlay">
      <h4>Industrial Growth</h4>
      <p>AMAZONE & mega-site development</p>
    </div>
  </div>
</div>
```

#### Hero Section with Image Background:
```html
<div class="hero-with-image" style="background-image: url('images/hero-images/economy-hero.jpg')">
  <div class="hero-with-image-content">
    <h2>Economic Opportunity</h2>
    <p>Building the future through strategic investment</p>
  </div>
</div>
```

### Photo Placement Recommendations

**Economy Page (economy.html):**
1. Hero background: Industrial/development landscape
2. After "Priority Districts": Downtown photo
3. North Gateway section: Open land/development potential
4. Industry cards: Manufacturing/industrial facilities
5. Pro Hyperscale: Corporate/development imagery
6. Photo gallery: 2-3 card grid of key locations

**Place Page (place.html):**
1. Hero: El Dorado Lake sunset
2. Lake section: Marina, sailing, water recreation
3. Downtown: Central Avenue street scenes
4. Parks: Trail, recreation, green space
5. Arts/Heritage: Coutts Museum, cultural sites

**People Page (people.html):**
1. Hero: Community/education imagery
2. Schools: USD 490 campus photos
3. Butler CC: College facilities
4. Health: Hospital campus
5. Community: People, events, gatherings

**Home Page (index.html):**
1. Hero background: Aerial city view or lake
2. Between sections: Location photos for each pillar

### Photo Licensing & Attribution

**Recommended Sources:**
- **Free Stock Photos:** Unsplash, Pexels, Pixabay (check licenses)
- **Local Sources:** 
  - El Dorado Chamber of Commerce
  - City of El Dorado Parks & Recreation
  - Local photographers & tourism board
  - Business owners (AMAZONE, hospitals, schools)
- **Drone Photography:** Consider hiring local drone photographer for aerial views

**Attribution Requirements:**
- Always check license terms
- Provide attribution if required by license
- For free stock images, attribution often recommended but not required
- For local photos, always get permission from subjects/property owners

### CSS Classes for Styling

**Available classes:**
- `.photo-section` — Full-width image with shadow & hover
- `.photo-grid` — 2-column responsive grid
- `.photo-card` — Individual photo with overlay on hover
- `.photo-card-overlay` — Caption overlay (appears on hover)
- `.hero-with-image` — Full-screen hero with background image
- `.photo-placeholder` — Temporary placeholder for missing images

### Performance Tips

1. **Optimize Images:**
   ```bash
   # Resize to max width 1920px
   convert input.jpg -resize 1920x1920\> output.jpg
   
   # Compress JPEG (80-85 quality)
   jpegoptim --max=85 output.jpg
   ```

2. **Use WebP Format:**
   - Modern browsers support WebP (better compression)
   - Provide JPG fallback: `<picture>` element

3. **Lazy Loading:**
   ```html
   <img src="..." loading="lazy" alt="...">
   ```

4. **Image Sizes:**
   - Hero images: 200-300KB
   - Photo cards: 80-150KB
   - Thumbnails: 40-60KB

### Testing Checklist

- ✓ Images load on desktop (all screen sizes)
- ✓ Images load on tablet (768px+)
- ✓ Images load on mobile (< 768px)
- ✓ Image captions are readable
- ✓ Hover effects work smoothly
- ✓ Page load time < 3 seconds (with all images)
- ✓ Accessibility: All images have descriptive alt text
- ✓ Verify image licenses/permissions

### Quick Start

1. Create `/images` subdirectory structure (see above)
2. Add 3-5 key photos (economy, lake, downtown, school, community)
3. Update economy.html and home page with photo sections
4. Test responsive behavior on mobile
5. Optimize image file sizes
6. Verify all images load and appear correctly

---

**Need Help?**
- Check CSS classes in `css/styles.css` (search `.photo-`)
- Test with placeholder images first
- Use browser DevTools to debug image loading
