# El Dorado Project — Photo Opportunities & Replacement Guide

**Created:** June 29, 2026 | **Priority:** HIGH | **Est. Photos Needed:** 35-50

---

## 📸 Current State
- **Unsplash Placeholders:** 36 generic stock images
- **Real El Dorado Assets:** 0 (need acquisition)
- **Action:** Replace all placeholders with real El Dorado photography

---

## 🗺️ Photo Categories & Locations

### 1. LAKE & WATER (10-12 photos)
- [ ] El Dorado Lake — wide landscape shot (8,400 acres)
- [ ] Sailing club — boats on water (Walnut Valley Sailing Club)
- [ ] Beach swimming area — families, recreation
- [ ] Fishing dock or kayaking
- [ ] Lake sunset/sunrise panorama
- [ ] Water treatment facility (23M GPD)
- [ ] Lake camping sites
- [ ] Marina or boat launch
- [ ] Wetlands/wildlife area
- [ ] Dam or water infrastructure
- [ ] Swimming beach with lifeguard stand
- [ ] Paddleboarding or water sports

### 2. DOWNTOWN & CENTRAL AVENUE (8-10 photos)
- [ ] Central Ave — full street view (Main to E. Central)
- [ ] Historic buildings — oil-boom era architecture
- [ ] Streetscape improvements (planters, benches)
- [ ] Downtown evening/night lighting
- [ ] Main Street storefront detail
- [ ] Downtown park or plaza gathering space
- [ ] Historic theater or cultural venue
- [ ] Downtown revitalization rendering (visual comp)
- [ ] Street-level retail spaces
- [ ] Public art or murals (if applicable)

### 3. PARKS & RECREATION (8-10 photos)
- [ ] El Dorado City Park — main entrance
- [ ] Playground equipment — families with children
- [ ] Athletic/sports complex — baseball, soccer
- [ ] Pool/aquatic center
- [ ] Tennis courts
- [ ] Walking trail through park
- [ ] Picnic area with tables
- [ ] Memorial or landmark in park
- [ ] Park fountain or water feature
- [ ] Park pavilion or shelter
- [ ] Dog park (if applicable)
- [ ] Recreational path/trail

### 4. EDUCATION & INSTITUTIONS (5-7 photos)
- [ ] USD 490 — school building/campus
- [ ] Butler Community College — campus
- [ ] Classroom learning environment
- [ ] Students in educational setting
- [ ] Library or study space
- [ ] College/university entrance
- [ ] Educational facility interior (lab, etc.)

### 5. AGRICULTURE & RURAL (6-8 photos)
- [ ] Farm landscape — grain fields (corn, wheat)
- [ ] Precision agriculture — equipment, drones, sensors
- [ ] Rural infrastructure — barns, silos
- [ ] Irrigation equipment
- [ ] Tractor or farm machinery
- [ ] Crop row detail shot
- [ ] Rural road/countryside
- [ ] Agribusiness facility

### 6. INFRASTRUCTURE & DEVELOPMENT (6-8 photos)
- [ ] Highway 77 corridor
- [ ] I-35 interchange (El Dorado area)
- [ ] Broadband/telecom infrastructure
- [ ] Road construction or repair
- [ ] Industrial park or development area
- [ ] Utility infrastructure (power lines, water)
- [ ] New housing development
- [ ] Mega-site industrial park concept (rendering)

### 7. PEOPLE & COMMUNITY (4-6 photos)
- [ ] Community gathering or event
- [ ] Local business owner/entrepreneur
- [ ] Diverse community members
- [ ] Public meeting or civic engagement
- [ ] Volunteer or service event
- [ ] Youth or families in community
- [ ] Multigenerational gathering

### 8. AVIATION & LOGISTICS (2-4 photos)
- [ ] Airport/airfield (if El Dorado has one)
- [ ] Logistics/distribution center
- [ ] Trucking or transportation
- [ ] Supply chain visualization

### 9. WATER FEATURES & UTILITIES (2-3 photos)
- [ ] Water tower
- [ ] Well or water source
- [ ] Utilities corridor
- [ ] Water testing/treatment

### 10. ENVIRONMENTAL & ENERGY (2-3 photos)
- [ ] Green space or conservation area
- [ ] Solar panel installation (if applicable)
- [ ] Wind turbine (if applicable)
- [ ] Environmental restoration project

---

## 📊 Current Placeholder Locations in Code

| Page | Section | Image Count | Type |
|------|---------|-------------|------|
| place-lake.html | Hero + content | 3 | Lake/water scenes |
| place-downtown.html | Hero + content | 3 | Urban/downtown |
| place-tourism.html | Hero + content | 3 | Tourism/recreation |
| place-parks.html | Hero + content | 3 | Parks/outdoors |
| place-arts.html | Gallery | 3 | Arts/culture |
| place-golf-resort.html | Hero/gallery | 3 | Golf |
| place-beautification.html | Gallery | 3 | Streetscape/beautification |
| housing.html | Hero/sections | 3 | Residential |
| index.html | Hero section | 2 | Hero/overview |
| economy.html | Hero | 1 | Business/industry |
| Various detail pages | Throughout | 6+ | Mixed |
| **TOTAL** | | **36** | |

---

## 🎯 Replacement Priority

### Phase 1: CRITICAL (0-1 weeks)
1. Lake imagery (10 photos) — highest visual impact
2. Downtown Central Ave (5 photos) — identity/branding
3. Parks & recreation (5 photos) — quality of life

**Subtotal: 20 photos**

### Phase 2: HIGH (1-2 weeks)
1. Agriculture/rural (6 photos) — economic identity
2. Infrastructure/development (6 photos) — growth story
3. Education (4 photos) — future/youth

**Subtotal: 16 photos**

### Phase 3: MEDIUM (2-3 weeks)
1. People/community (6 photos) — authentic voices
2. Utilities/aviation (4 photos) — infrastructure detail

**Subtotal: 10 photos**

---

## 📸 Photography Guidelines

### Best Practices
- **Resolution:** Minimum 1920x1080px (desktop), 1080x720px (mobile)
- **Format:** JPEG (web-optimized), WebP (modern browsers)
- **File Size:** <200KB per image (use compression)
- **Aspect Ratios:**
  - Hero sections: 16:9 (1920x1080)
  - Gallery cards: 4:3 (600x450) or 1:1 (square)
  - Thumbnails: 1:1 (200x200)

### Composition
- **Golden Hour:** Early morning or late afternoon lighting
- **Authentic:** Real people, real locations (not stock-style)
- **Diverse:** Include different ages, backgrounds, seasons
- **Wide shots:** Show context and scale
- **Detail shots:** Capture specific features or craftsmanship

### Seasonal Variety
- [ ] Spring — blooming plants, green growth
- [ ] Summer — bright, active recreation
- [ ] Fall — golden light, harvest
- [ ] Winter — open landscapes, frost/snow (if applicable)

---

## 🔧 Technical Implementation

### Unsplash Image Replacements
Current pattern in HTML:
```html
<img src="https://images.unsplash.com/photo-XXXXXXX?w=600&h=400&fit=crop" alt="...">
```

Replace with:
```html
<img src="/images/eldorado-lake-sailing.jpg" alt="Sailboats on El Dorado Lake" loading="lazy">
```

### File Structure
```
eldorado-plan/
├── images/
│   ├── lake/
│   │   ├── eldorado-lake-wide.jpg
│   │   ├── sailing-club.jpg
│   │   ├── beach-recreation.jpg
│   │   └── ...
│   ├── downtown/
│   │   ├── central-ave-day.jpg
│   │   ├── historic-buildings.jpg
│   │   └── ...
│   ├── parks/
│   ├── education/
│   ├── agriculture/
│   └── ...
```

---

## 📋 Implementation Checklist

- [ ] Acquire/gather 35-50 El Dorado photos
- [ ] Organize into category folders (/images/)
- [ ] Compress images for web (target: <150KB each)
- [ ] Create WebP versions for modern browsers
- [ ] Update all Unsplash URLs to local image paths
- [ ] Test image loading on all pages
- [ ] Verify responsive image scaling (srcset if needed)
- [ ] Update OG:image meta tags with new images
- [ ] Performance audit after replacement
- [ ] QA: Visual review on desktop + mobile

---

## 💡 Sourcing Options

1. **Local Photography** — Commission local photographer (recommended)
2. **Community Contributions** — Partner with residents/businesses for photos
3. **Municipal Assets** — City/tourism board may have existing library
4. **Archive Photos** — Local historical society, library, newspapers
5. **Hybrid Approach** — Mix real + illustrated/3D renders for development concepts

---

**Next Step:** Work with local photographer or tourism office to acquire Phase 1 photos (lake + downtown + parks) for immediate deployment.

