# Phase 9.5: Advanced Visualization Architecture
## El Dorado Vision 2040 — 3D, AR & Satellite Imagery System

**Status:** 🏗️ Architecture Phase  
**Phase Duration:** 8–12 hours implementation  
**Deliverables:** 3 new interactive experiences  
**Launch Target:** End of Phase 9 (mid-July 2026)  

---

## Vision

Transform static property listings and project updates into **immersive visual experiences** that:
- Allow investors to visualize development potential in 3D
- Enable mobile AR preview of buildings on actual sites
- Show historical satellite progression (2015–2026)
- Provide competitive differentiation vs. traditional real estate platforms

---

## Technology Stack

### 3D Visualization
- **Framework:** Three.js or Babylon.js
  - **Choice:** Three.js (more mature for web, better community, lighter weight)
  - **WebGL Support:** Modern browsers (Chrome 9+, Firefox 4+, Safari 5.1+)
  - **File Size:** Three.js minified ~600KB (CDN cached)

### Satellite Imagery & Maps
- **Platform:** Mapbox GL JS
  - **Satellite Imagery:** Mapbox Satellite + time-series overlays
  - **Historical Data:** USGS satellite archive + custom overlays
  - **API Key:** Required (free tier: 50K views/month)

### Augmented Reality
- **Framework:** AR.js + Three.js
  - **Browser AR API:** WebXR Device API
  - **Model Format:** glTF 2.0 (.glb, .gltf)
  - **Mobile Support:** iOS 12+, Android 7+ (Chrome/Firefox AR browsers)

### Data Management
- **3D Models:** GeoJSON for building footprints, custom JSON for property coordinates
- **Storage:** Static files (models hosted on CDN), lightweight JSON for state
- **Real-time Updates:** Optional Mapbox API for live satellite data

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   PHASE 9.5 VISUALIZATION LAYER              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────────┐ │
│  │  3D Development  │  │  AR Mobile       │  │  Satellite │ │
│  │  Finder Preview  │  │  Property View   │  │  Timeline  │ │
│  │ (3d-preview.html)│  │(ar-preview.html) │  │(sat-time-  │ │
│  │                  │  │                  │  │slider.html)│ │
│  │  • North Expansion│  │ • Point cloud    │  │  • 2015    │ │
│  │  • South Downtown│  │ • Footprint      │  │  • 2020    │ │
│  │  • Lakeside      │  │ • Scale overlay  │  │  • 2026    │ │
│  │                  │  │ • Real-time      │  │  • Live    │ │
│  └────────┬─────────┘  └────────┬─────────┘  └─────┬──────┘ │
│           │                     │                  │         │
│           └──────────────────────┴──────────────────┘         │
│                         │                                     │
│              ┌──────────▼───────────┐                         │
│              │  Three.js + Mapbox   │                         │
│              │  Shared Data Layer   │                         │
│              │  • GeoJSON buildings │                         │
│              │  • Property JSON     │                         │
│              │  • Imagery tiles     │                         │
│              └─────────────────────┘                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### 1. 3D Development Finder (3d-preview.html)

**Purpose:** Allow investors to explore development sites in interactive 3D

**Features:**
- **Interactive 3D Scene**
  - Pan: Mouse drag or touch
  - Zoom: Scroll wheel or pinch
  - Rotate: Right-click drag or two-finger drag
  - Reset: Double-click or button

- **Layer Toggle**
  - Zoning map (color-coded districts)
  - Infrastructure (roads, utilities, power lines)
  - Buildings (existing structures)
  - Buildable footprints (proposed projects)
  - Topography (elevation)

- **Property Selection**
  - Click on building → Show details card
  - Details: Name, zone, price, acreage, available units
  - CTA: "Calculate ROI" → Development Finder modal
  - CTA: "Schedule Site Visit" → Inquiry form

- **Scene Composition**
  - **Base Map:** GeoJSON-sourced building footprints (simplified geometry)
  - **Development Areas:** Extrude heights for visual impact
    - North Expansion: 50–100ft buildings (residential/mixed-use)
    - South Downtown: 30–60ft buildings (lofts/retail)
    - South Industrial: 40–80ft buildings (manufacturing/logistics)
  - **Roads & Utilities:** Overlay layer
  - **Color Scheme:** Zone-based (C-1 blue, I-1 red, R-2 green, etc.)

**Technical Spec:**
```javascript
// Scene structure
const scene = {
  camera: {
    type: 'perspective',
    fov: 60,
    position: [lat, lng, zoom]
  },
  lighting: {
    ambient: '#ffffff' (intensity: 0.6),
    directional: { position: [-1, 1, 1], intensity: 0.8 }
  },
  layers: {
    buildings: { type: 'gltf', file: 'models/eldorado-buildings.glb' },
    zones: { type: 'geojson', file: 'data/zones.geojson' },
    infrastructure: { type: 'geojson', file: 'data/infrastructure.geojson' }
  }
};
```

**File Size Budget:**
- 3D Model (buildings): ~5MB (compressed GLB)
- GeoJSON layers: ~2MB
- Textures: ~1MB
- JavaScript: ~100KB (Three.js, controls)
- **Total:** ~8MB (acceptable for progressive loading)

**Performance Target:** 60 FPS on modern browsers (2020+ hardware)

---

### 2. AR Mobile Preview (ar-preview.html)

**Purpose:** Let mobile users visualize building footprints on real sites via smartphone camera

**Features:**
- **Camera View** (Full-screen)
  - Real-time video from device camera
  - AR overlay registration (GPS-based positioning)

- **Property Selection** (Pre-AR)
  - Browse properties via list or map
  - Select a property
  - Launch AR viewer

- **AR Visualization**
  - Semi-transparent building footprint overlay
  - Scale: 1:1 (actual size)
  - Color-coded by zone type
  - Height representation via 3D shape
  - Property name + key metrics (price, acreage, zone)

- **Controls**
  - Toggle: Show/hide grid overlay
  - Zoom: Scale AR model up/down
  - Rotate: Rotate model around center
  - Measure: Distance measurement tool
  - Capture: Screenshot of AR view

**Technical Spec:**
```javascript
// AR.js + Three.js configuration
const arScene = {
  localization: 'gps', // GPS-based positioning
  models: {
    footprint: { format: 'glb', scale: 1.0 },
    highlight: { format: 'glb', opacity: 0.6 }
  },
  ui: {
    scale: 'adaptive',
    labels: 'property-name + price',
    cta: ['Schedule Site Visit', 'Calculate ROI']
  }
};
```

**Browser Support:**
- iOS 12+ (via AR Quick Look or WebARonIOS polyfill)
- Android 7+ (Chrome 77+ with WebXR flag enabled)
- Fallback: Show 3D preview for non-AR browsers

**Model Format:**
- Property footprints: Pre-generated GLB files
- One GLB per property (minimal, ~100–500KB each)
- Hosted on CDN with lazy loading

**Performance Target:** 30 FPS on mobile hardware (2018+ phones)

---

### 3. Satellite Imagery Time-Slider (sat-time-slider.html)

**Purpose:** Show historical development progression and contextualize current state

**Features:**
- **Interactive Timeline**
  - Years: 2015, 2018, 2020, 2023, 2026, Live
  - Slider control (horizontal or vertical)
  - Year label + satellite source citation

- **Satellite Overlay**
  - USGS Landsat or Mapbox satellite imagery
  - Historical composites (2015, 2018, 2020)
  - Current satellite (2026)
  - Live satellite option (near-real-time, 24–48hr delay)

- **Development Highlights**
  - Overlay vector layers showing:
    - Completed projects (Phase 7 + Phase 8)
    - In-progress projects (progress bar, % complete)
    - Planned projects (future outlines, dashed)

- **Interactive Elements**
  - Click on project → Show details
  - Hover → Highlight footprint
  - Zoom to project → Auto-pan & zoom
  - Compare mode: Split-screen before/after

- **Storytelling**
  - Auto-play mode: Time-lapse through 2015–2026
  - Annotations: Major milestones + dates
  - Stats: Land area developed, jobs created, capital invested (cumulative by year)

**Technical Spec:**
```javascript
// Mapbox GL + time-slider configuration
const timeSlider = {
  map: {
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-97.38, 37.65], // El Dorado, KS
    zoom: 12
  },
  layers: {
    satellite_2015: { source: 'usgs-landsat', year: 2015 },
    satellite_2018: { source: 'usgs-landsat', year: 2018 },
    satellite_2020: { source: 'usgs-landsat', year: 2020 },
    satellite_2026: { source: 'mapbox-satellite', current: true },
    completed: { type: 'geojson', file: 'data/projects-completed.geojson' },
    inProgress: { type: 'geojson', file: 'data/projects-inprogress.geojson' },
    planned: { type: 'geojson', file: 'data/projects-planned.geojson' }
  },
  timeline: {
    years: [2015, 2018, 2020, 2023, 2026, 'Live'],
    autoPlay: false,
    playSpeed: 1000 // ms per year
  }
};
```

**Satellite Data Sources:**
- **2015–2020:** USGS Landsat 8 (30m resolution)
- **2021–2025:** Sentinel-2 (10m resolution) or Mapbox satellite
- **2026+:** Mapbox satellite (continuous)

**File Size Budget:**
- Mapbox GL JS: ~200KB (CDN)
- GeoJSON project layers: ~1.5MB
- Satellite tiles: Served via Mapbox (streaming, no local storage)
- **Total Local:** ~2MB + streaming tiles

**Performance Target:** 60 FPS with smooth layer transitions

---

## Data Structure

### GeoJSON: Building Footprints (zones.geojson)

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "zone": "C-1",
        "district": "North Gateway",
        "height": 45,
        "use": "Commercial",
        "color": "#0066cc"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-97.38, 37.65], [...], [-97.38, 37.65]]]
      }
    }
  ]
}
```

### JSON: Properties Metadata (properties.json)

```json
{
  "properties": [
    {
      "id": 1,
      "name": "North Gateway — Commercial Pad A",
      "coordinates": [-97.382, 37.651],
      "zone": "C-1",
      "acres": 2.5,
      "price": 0.35,
      "district": "North Gateway",
      "model3d": "models/prop-01.glb",
      "model_ar": "models/ar-footprint-01.glb",
      "description": "Highway commercial; ideal for hotel/retail/services"
    }
  ]
}
```

### JSON: Projects Timeline (projects-timeline.json)

```json
{
  "projects": [
    {
      "id": "i35-interchange",
      "name": "I-35 Interchange",
      "startYear": 2024,
      "completeYear": 2027,
      "status": "in-progress",
      "percentComplete": 40,
      "coordinates": [-97.385, 37.648],
      "geojson": "data/projects/i35-interchange.geojson",
      "milestone": {
        "2024": "Foundation & site prep",
        "2025": "Structure construction",
        "2026": "Finishing & alignment",
        "2027": "Opening"
      }
    }
  ]
}
```

---

## Implementation Sequence

### Phase 9.5.1: Setup & Architecture (1–2 hrs)
- [ ] Create Three.js + Babylon.js evaluation
- [ ] Set up project structure (`3d-preview.html`, `ar-preview.html`, `sat-time-slider.html`)
- [ ] Create data folder: `data/` (geojson, json files)
- [ ] Create models folder: `models/` (3D files, .glb format)
- [ ] Link libraries (Three.js, Mapbox, AR.js via CDN)
- [ ] Create shared utilities (`js/3d-utils.js`, `js/ar-utils.js`, `js/map-utils.js`)

### Phase 9.5.2: 3D Development Finder (3–4 hrs)
- [ ] Initialize Three.js scene + camera + lights
- [ ] Load GeoJSON building footprints
- [ ] Build zone-based color coding
- [ ] Implement interactive controls (pan, zoom, rotate)
- [ ] Add layer toggle UI (checkboxes for zones, infrastructure, etc.)
- [ ] Create property selection + detail cards
- [ ] Integrate with Development Finder modal (ROI calculator)
- [ ] Test performance (target: 60 FPS)

### Phase 9.5.3: AR Mobile Preview (2–3 hrs)
- [ ] Set up AR.js + WebXR Device API
- [ ] GPS-based positioning logic
- [ ] Load/generate property footprint models (GLB)
- [ ] Implement AR visualization + overlay
- [ ] Add mobile controls (zoom, rotate, measure)
- [ ] Create fallback 3D viewer for non-AR browsers
- [ ] Test on iOS (AR Quick Look) + Android (Chrome WebXR)

### Phase 9.5.4: Satellite Time-Slider (2–3 hrs)
- [ ] Set up Mapbox GL map + satellite style
- [ ] Integrate USGS Landsat historical imagery (2015–2020)
- [ ] Load current satellite layer (2026+)
- [ ] Build time-slider UI + interaction logic
- [ ] Layer project data (completed, in-progress, planned)
- [ ] Create auto-play timeline feature
- [ ] Add annotations + milestone labels
- [ ] Test layer transitions + performance

### Phase 9.5.5: Integration & Launch (1–2 hrs)
- [ ] Add navigation links (index.html, development-finder.html, project-tracker.html)
- [ ] Create landing page (9_5-advanced-visualization.html)
- [ ] QA: Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] QA: Mobile responsiveness (iOS + Android)
- [ ] Performance audit (Lighthouse)
- [ ] Deploy to production
- [ ] Monitor analytics (time on page, 3D model loads, AR engagement)

---

## Placeholder Pages to Create

### 1. 3d-preview.html (3D Development Finder)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>3D Development Preview | El Dorado Vision 2040</title>
  <link rel="stylesheet" href="css/3d-viewer.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three-gltf-loader@latest/index.min.js"></script>
</head>
<body>
  <div id="3d-container"></div>
  <div id="ui-panel"><!-- Layer toggles, property info --></div>
  <script src="js/3d-viewer.js"></script>
</body>
</html>
```

### 2. ar-preview.html (AR Mobile Preview)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>AR Property Preview | El Dorado Vision 2040</title>
  <link rel="stylesheet" href="css/ar-viewer.css">
  <script src="https://aframe.io/releases/latest/aframe.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/ar.js/aframe/latest/aframe-ar.min.js"></script>
</head>
<body>
  <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false'>
    <a-assets id="asset-loader"></a-assets>
    <a-camera position='0 1.6 0' look-controls user-gesture-camera-controls></a-camera>
  </a-scene>
  <div id="ar-ui"><!-- Controls, property info, CTAs --></div>
  <script src="js/ar-viewer.js"></script>
</body>
</html>
```

### 3. sat-time-slider.html (Satellite Time-Slider)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Development Timeline | El Dorado Vision 2040</title>
  <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
  <link rel="stylesheet" href="css/satellite-viewer.css">
  <script src='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'></script>
</head>
<body>
  <div id="map"></div>
  <div id="timeline-controls"><!-- Year slider, play button, legend --></div>
  <div id="project-details"></div>
  <script src="js/satellite-viewer.js"></script>
</body>
</html>
```

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| 3D Model Load Time | < 3 sec | Lighthouse + browser DevTools |
| 3D Scene FPS | 60 FPS | Chrome DevTools Performance tab |
| Mobile AR Engagement | > 15% of visitors | Google Analytics event tracking |
| Time on 3D Preview | > 2 min avg | GA average session duration |
| AR-to-Inquiry Conversion | > 10% | CRM lead tracking |
| Satellite Timeline Play Rate | > 20% | GA event tracking |
| Mobile Compatibility | iOS 12+, Android 7+ | BrowserStack testing |

---

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Browser support gaps | Graceful degradation; fallback 2D views |
| Performance on older devices | Level-of-detail (LOD) models; lazy loading |
| AR GPS accuracy | Buffer zone (±10–20 meters); visual alignment tools |
| Satellite imagery availability | Pre-download critical years; use Mapbox fallback |
| 3D model file size | Optimize geometry; compress GLB files; CDN caching |
| User adoption | In-app tutorial; "Try 3D" CTA on property cards |

---

## Deliverables Summary

**Phase 9.5 Output:**
- ✅ 3 new interactive pages (3D, AR, Satellite)
- ✅ ~5–8 MB 3D assets (models, textures)
- ✅ 4 data files (zones, properties, projects, timeline)
- ✅ 300+ lines of JavaScript (controls, interactions, analytics)
- ✅ Navigation integration (4 new links in navbar)
- ✅ Documentation (this file + in-code comments)

**Phase 9 Completion:** 85–90% (visual assets + Phase 9.5 = 100%)

---

## Next Steps

1. **Review & Approve Architecture** (this document)
2. **Start Task #7:** Implement 3D Development Finder
3. **Parallel Task #8:** Build AR Mobile Preview
4. **Parallel Task #9:** Create Satellite Time-Slider
5. **Integration:** Link all components, test cross-browser
6. **Deploy:** Launch Phase 9.5 advanced visualization suite

---

**Document Status:** ✅ Ready for Implementation  
**Start Date:** June 29, 2026  
**Target Completion:** Mid-July 2026  
**Estimated Effort:** 8–12 hours focused development
