/* El Dorado Vision 2040 — main.js */

/* ── Scroll reveal ── */
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
  }, { threshold: 0.1 }).observe(el);
});

/* ── Page nav pills tracking ── */
const pageNavObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const pill = document.querySelector(`.page-nav__pill[href="#${id}"]`);
      if (pill) {
        document.querySelectorAll('.page-nav__pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      }
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('section[id]').forEach(section => {
  pageNavObserver.observe(section);
});

/* ══════════════════════════════════════════════
   NAVIGATION STATE MANAGER — Optimized Active Section Detection
══════════════════════════════════════════════ */
class NavigationStateManager {
  static navLinkMap = new Map();
  static navButtonMap = new Map();
  static currentSection = null;
  static observer = null;

  static init() {
    // Cache all nav links and their associated groups
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      const href = link.getAttribute('href');
      const group = link.closest('.nav-group');
      NavigationStateManager.navLinkMap.set(href, { link, group });
    });

    // Cache nav group buttons
    document.querySelectorAll('.nav-group-btn').forEach(btn => {
      const group = btn.closest('.nav-group');
      NavigationStateManager.navButtonMap.set(group, btn);
    });

    // Use IntersectionObserver to detect active section (more efficient than scroll calculations)
    NavigationStateManager.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = '#' + entry.target.id;
          NavigationStateManager.setActiveSection(sectionId);
        }
      });
    }, { threshold: 0.3 });

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      NavigationStateManager.observer.observe(section);
    });
  }

  static setActiveSection(sectionId) {
    if (NavigationStateManager.currentSection === sectionId) return;

    // Deactivate previous
    if (NavigationStateManager.currentSection) {
      const prevLink = NavigationStateManager.navLinkMap.get(NavigationStateManager.currentSection);
      if (prevLink) {
        prevLink.link.classList.remove('active');
        if (prevLink.group) {
          const btn = NavigationStateManager.navButtonMap.get(prevLink.group);
          if (btn) btn.classList.remove('has-active');
        }
      }
    }

    // Activate new
    const currLink = NavigationStateManager.navLinkMap.get(sectionId);
    if (currLink) {
      currLink.link.classList.add('active');
      if (currLink.group) {
        const btn = NavigationStateManager.navButtonMap.get(currLink.group);
        if (btn) btn.classList.add('has-active');
      }
    }

    NavigationStateManager.currentSection = sectionId;
  }
}

/* ── Unified scroll handler (RAF-throttled) ── */
const _scrollBar = document.getElementById('scroll-progress');
const _bttBtn    = document.getElementById('back-to-top');
const _hero      = document.getElementById('hero');
let _rafPending  = false;

function onScroll() {
  if (_rafPending) return;
  _rafPending = true;
  requestAnimationFrame(() => {
    _rafPending = false;
    const y = window.scrollY;
    const d = document.documentElement;

    /* Scroll progress bar */
    if (_scrollBar) {
      const total = d.scrollHeight - d.clientHeight;
      _scrollBar.style.width = (total > 0 ? (y / total * 100) : 0) + '%';
    }

    /* Back to top button */
    _bttBtn?.classList.toggle('btt-visible', y > 600);

    /* Hero parallax */
    if (_hero && y < window.innerHeight * 1.5) {
      _hero.style.backgroundPositionY = `calc(center + ${y * 0.28}px)`;
    }
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// Initialize navigation state manager on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  NavigationStateManager.init();
});

/* ── Mobile nav & dropdown toggles ── */
const toggle  = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => navList.classList.toggle('open'));

/* Close flat nav links on mobile */
navList?.querySelectorAll('li:not(.nav-group) > a').forEach(a =>
  a.addEventListener('click', () => navList.classList.remove('open'))
);

/* Dropdown group: toggle on click for all screens, hover handles desktop via CSS */
document.querySelectorAll('.nav-group-btn').forEach(btn => {
  btn.setAttribute('aria-haspopup', 'true');
  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const group = btn.closest('.nav-group');
    const isOpen = group.classList.contains('open');
    /* Close all other groups */
    document.querySelectorAll('.nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('.nav-group-btn').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      group.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  /* Keyboard accessibility: Escape to close */
  btn.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const group = btn.closest('.nav-group');
      group.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

/* Close on dropdown link click */
document.querySelectorAll('.nav-dropdown a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelectorAll('.nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('.nav-group-btn').setAttribute('aria-expanded', 'false');
    });
    navList.classList.remove('open');
  });
});

/* Close on outside click - OPTIMIZED with target checking */
document.addEventListener('click', (e) => {
  /* Only close if click is outside nav */
  if (!e.target.closest('#navbar')) {
    document.querySelectorAll('.nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('.nav-group-btn').setAttribute('aria-expanded', 'false');
    });
  }
});

/* ══════════════════════════════════
   LEAFLET MAP UTILITIES
══════════════════════════════════ */

/* Proposed / new project marker — solid color circle */
function makeIcon(color, emoji) {
  return L.divIcon({
    className: '',
    html: `<div style="background:${color};width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;box-shadow:0 2px 10px rgba(0,0,0,.35);border:3px solid white;">${emoji}</div>`,
    iconSize: [34,34], iconAnchor: [17,17], popupAnchor: [0,-20],
  });
}

/* Existing infrastructure marker — dashed gold border, darker background */
function makeExistingIcon(emoji) {
  return L.divIcon({
    className: '',
    html: `<div style="background:#1e3a4a;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;box-shadow:0 2px 10px rgba(0,0,0,.4);border:3px dashed #C8902A;">${emoji}</div>`,
    iconSize: [36,36], iconAnchor: [18,18], popupAnchor: [0,-22],
  });
}

/* Popup for proposed projects */
function ph(title, desc, type, color) {
  return `<div style="font-weight:700;font-size:.9rem;color:#1B3A5C;margin-bottom:4px">${title}</div>
    <div style="font-size:.8rem;color:#555;line-height:1.5;max-width:240px">${desc}</div>
    <span style="display:inline-block;margin-top:6px;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;padding:2px 8px;border-radius:20px;background:${color}22;color:${color}">${type}</span>`;
}

/* Popup for existing infrastructure being improved */
function phEx(title, current, improvement, saving) {
  return `
    <div style="font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:#C8902A;margin-bottom:4px">⟳ Existing Asset — Improvement Plan</div>
    <div style="font-weight:700;font-size:.9rem;color:#1B3A5C;margin-bottom:5px">${title}</div>
    <div style="font-size:.78rem;color:#444;margin-bottom:4px"><strong>Current state:</strong> ${current}</div>
    <div style="font-size:.78rem;color:#444;margin-bottom:4px"><strong>Proposed:</strong> ${improvement}</div>
    ${saving ? `<div style="font-size:.75rem;background:#f0f9f0;border-left:3px solid #2E6E35;padding:4px 7px;margin-top:5px;border-radius:0 4px 4px 0;color:#1a4a1a;max-width:240px"><strong>Cost advantage:</strong> ${saving}</div>` : ''}`;
}

/* ── Tile layers ── */
const VOYAGER = () => L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>', maxZoom: 20, subdomains: 'abcd' }
);
const SATELLITE = () => L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri — Source: Esri, USGS, Maxar, GeoEye, Earthstar Geographics', maxZoom: 19 }
);
const SAT_LABELS = () => L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png',
  { attribution: '', maxZoom: 20, subdomains: 'abcd', pane: 'overlayPane' }
);

/* ── Fullscreen control ── */
function addFullscreen(map) {
  const ctrl = L.control({ position: 'topleft' });
  ctrl.onAdd = () => {
    const div = L.DomUtil.create('div', 'leaflet-bar leaflet-control map-fs-btn');
    div.title = 'Toggle fullscreen';
    div.innerHTML = '<a>⛶</a>';
    div.onclick = () => {
      const el = map.getContainer();
      if (!document.fullscreenElement) {
        el.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen();
      }
    };
    document.addEventListener('fullscreenchange', () => {
      div.querySelector('a').textContent = document.fullscreenElement ? '✕' : '⛶';
      setTimeout(() => map.invalidateSize(), 100);
    });
    L.DomEvent.disableClickPropagation(div);
    return div;
  };
  ctrl.addTo(map);
}

/* ══════════════════════════════════
   CUSTOM RICH MAP LEGEND CONTROL
══════════════════════════════════ */
function buildLegend(legendCfg, map) {
  if (!legendCfg) return;
  const ctrl = L.control({ position: 'bottomleft' });
  ctrl.onAdd = () => {
    const div = L.DomUtil.create('div', 'mlp');
    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);

    /* Swatch HTML helpers */
    const swatchExisting = () =>
      `<span class="leg-sw leg-exist"></span>`;
    const swatchDot = c =>
      `<span class="leg-sw leg-dot" style="background:${c}"></span>`;
    const swatchLine = (c, dash) =>
      `<span class="leg-sw leg-line" style="border-top-color:${c};border-top-style:${dash?'dashed':'solid'}"></span>`;
    const swatchFill = c =>
      `<span class="leg-sw leg-fill" style="background:${c}44;border-color:${c}"></span>`;
    const swatchPhase = (c, n) =>
      `<span class="leg-sw leg-phase" style="background:${c}"><span>${n}</span></span>`;

    const entryHtml = e => {
      let sw = '';
      if (e.type === 'existing') sw = swatchExisting();
      else if (e.type === 'dot')   sw = swatchDot(e.color);
      else if (e.type === 'line')  sw = swatchLine(e.color, e.dash);
      else if (e.type === 'fill')  sw = swatchFill(e.color);
      else if (e.type === 'phase') sw = swatchPhase(e.color||'#1B3A5C', e.num||'');
      return `<div class="mlp-entry">
        ${sw}
        <div class="leg-text">
          <span class="leg-lbl">${e.label}</span>
          ${e.sub ? `<span class="leg-sub">${e.sub}</span>` : ''}
        </div>
      </div>`;
    };

    let body = '';
    (legendCfg.sections || []).forEach(sec => {
      body += `<div class="mlp-sec">`;
      if (sec.head) body += `<div class="mlp-head">${sec.head}</div>`;
      (sec.entries || []).forEach(e => { body += entryHtml(e); });
      if (sec.note) body += `<div class="mlp-note">${sec.note}</div>`;
      body += `</div>`;
    });

    div.innerHTML = `
      <div class="mlp-hdr">
        <span class="mlp-title">${legendCfg.title||'Legend'}</span>
        <button class="mlp-tog" title="Collapse legend">▾</button>
      </div>
      <div class="mlp-body">${body}</div>`;

    div.querySelector('.mlp-tog').addEventListener('click', function() {
      const b = div.querySelector('.mlp-body');
      b.classList.toggle('mlp-hidden');
      this.textContent = b.classList.contains('mlp-hidden') ? '▸' : '▾';
    });
    return div;
  };
  ctrl.addTo(map);
}

/* ══════════════════════════════════
   DISTRICT MAP DEFINITIONS
══════════════════════════════════ */
const MAP_DEFS = {

  'map-overview': {
    center: [37.820,-96.862], zoom: 12,
    /* Existing infrastructure — shown with dashed-gold icon, toggle layer */
    existing: [
      {c:[37.813,-96.853],e:'🏊',t:'El Dorado Municipal Pool',
        cur:'Aging 1970s-era outdoor pool — adequate but undersized for a growing city',
        imp:'Renovate in place: zero-depth entry, water slides, shade structures, updated mechanicals. No new site needed.',
        sav:'Renovation on existing site saves est. $1.5–2M vs. greenfield build. City already owns land and utilities.'},
      {c:[37.830,-96.857],e:'⚾',t:'McDonald Stadium & Athletic Complex',
        cur:'~1,000-seat baseball stadium (home of Butler CC Grizzlies, El Dorado Broncos, El Dorado Walnuts). Active $906K city renovation underway: new scoreboard, outfield fence, backstop, turf. Seating and restroom refresh pending 2025–26.',
        imp:'Phase 2 Vision 2040: covered grandstand, permanent concession pavilion, press box/broadcast suite, LED lighting, outfield berm seating, indoor batting facility, ADA upgrade, naming rights program. 2 new turf multipurpose fields added on adjacent city land.',
        sav:'Builds directly on active city renovation investment — Phase 2 upgrades cost est. $2.8M vs. $8M+ to build a new stadium from scratch. Land, utilities, parking, and access already in place.'},
      {c:[37.824,-96.841],e:'⛳',t:'El Dorado Golf Club',
        cur:'Existing 18-hole municipal golf course — unique layout with rolling prairie terrain and oil-country character.',
        imp:'Renovate irrigation, championship tee upgrades, new clubhouse/restaurant, simulator bays, expanded lighted driving range.',
        sav:'Renovation of existing course saves est. $2M+ vs. new construction. Course footprint, water rights, and access already in place.'},
      {c:[37.820,-96.871],e:'🏥',t:'Susan B. Allen Memorial Hospital',
        cur:'74-bed acute care hospital — El Dorado\'s only hospital, serving all of Butler County since 1949.',
        imp:'Campus expansion: new surgical center wing, behavioral health addition, cardiology and orthopedic specialty clinics, telehealth hub. All additions to existing campus.',
        sav:'Expanding on existing campus avoids $8–12M in new land, site prep, and utility extension that a greenfield medical campus would require.'},
      {c:[37.843,-96.857],e:'🎓',t:'Butler Community College — Main Campus',
        cur:'Established 1927. Full main campus with classrooms, labs, athletic facilities, and student services.',
        imp:'Add employer-aligned certificate programs, expand IT/Cyber and Aviation labs, North Gateway satellite campus.',
        sav:'Existing campus, accreditation, and faculty are sunk costs — new programs cost a fraction of building a new institution.'},
      {c:[37.818,-96.863],e:'🚒',t:'Fire Station No. 1 — Downtown (Existing)',
        cur:'Single downtown fire station serving the entire city. Adequate for current footprint; insufficient for North Gateway expansion.',
        imp:'Retain and modernize Station 1. Add HAZMAT capability, replace aging apparatus. Station 2 (North Gateway) is a supplement, not a replacement.',
        sav:'Station 1 building and land retained — supplement with Station 2 rather than full replacement saves est. $2M.'},
      {c:[37.822,-96.863],e:'🛢️',t:'Kansas Oil Museum (Existing)',
        cur:'Established regional museum on the 1915 oil discovery. Current footprint and visitor capacity undersized.',
        imp:'Triple footprint into adjacent vacant block. Immersive oil-boom exhibit, working pump-jack, energy future displays. Naming rights sponsorship with HF Sinclair.',
        sav:'Building on adjacent city-owned land with existing museum as anchor eliminates site acquisition cost.'},
      {c:[37.774,-96.818],e:'✈️',t:'El Dorado Airport — EQA (Existing)',
        cur:'Active general aviation airport · Two crossing runways (4,200 × 75 ft each) · FBO, fuel, instrument approaches. 3 miles SE of downtown.',
        imp:'Runway extension to 5,500 ft, ILS instrument approach system, 20 new T-hangars, expanded fuel capacity. 90% FAA AIP-funded.',
        sav:'Existing airport infrastructure (land, taxiways, FBO, fuel permits) valued at $8M+ — no greenfield costs. FAA AIP covers 90%.'},
      {c:[37.843,-96.803],e:'⚓',t:'El Dorado Lake — East Marina (Existing)',
        cur:'Existing 80-slip marina on the east shore. Undersized for demand; no fuel dock or pump-out.',
        imp:'Expand to 250 slips. Add fuel dock, ship\'s store, pump-out station, wave attenuator, dry-stack storage for 120 vessels.',
        sav:'Expanding existing marina avoids new permitting, environmental review, and access road costs. Est. $2.5M saved vs. new site.'},
      {c:[37.821,-96.862],e:'📚',t:'El Dorado Public Library (Existing)',
        cur:'Existing public library — chronically underfunded relative to comparable Kansas cities.',
        imp:'Add maker space (3D printers, laser cutters), business resource center with SBDC office hours, rooftop reading garden.',
        sav:'All improvements within or adjacent to existing building footprint. No relocation or replacement costs.'},
      {c:[37.843,-96.882],e:'🛢️',t:'HF Sinclair El Dorado Refinery (Existing)',
        cur:'Major industrial employer, operating continuously since 1917. One of the largest refineries in Kansas.',
        imp:'Carbon-capture-ready modernization, workforce reskilling partnership with Butler CC, community investment fund, Energy Corridor co-developer.',
        sav:'Existing industrial employer — retention and modernization is dramatically less expensive than recruiting a replacement employer.'},
    ],
    /* Proposed new projects */
    markers: [
      {c:[37.818,-96.862],col:'#1B3A5C',e:'🏛️',t:'Downtown Revitalization Zone',d:'Central Avenue streetscape, Oil Museum expansion, boutique hotel adaptive reuse, arts district, loft housing.',ty:'★ New + Improve'},
      {c:[37.862,-96.796],col:'#4A90BF',e:'🌊',t:'El Dorado Lake — Tourism District',d:'NEW west marina (150 slips), amphitheater, circumnavigation trail, glamping village. Builds on existing lake & state park.',ty:'★ Expand Existing'},
      {c:[37.843,-96.878],col:'#C8902A',e:'⚡',t:'Flint Hills Energy Corridor',d:'500-acre renewable energy campus on existing industrial-zoned land. Wind/solar mfg, battery storage, Butler CC Energy Academy.',ty:'★ New — Industrial Zone'},
      {c:[37.800,-96.876],col:'#7B5EA7',e:'🖥️',t:'Project Horizon — Data Center Campus',d:'300-acre hyperscale campus. Under active public discussion at City Commission. Existing Evergy substation nearby.',ty:'★ New Construction'},
      {c:[37.789,-96.845],col:'#C8902A',e:'🏭',t:'South Industrial / EQA Airport',d:'Aerospace supply-chain campus. Existing I-2 heavy industrial zone — pad-ready site improvements on zoned land.',ty:'★ Improve Industrial Zone'},
      {c:[37.820,-96.900],col:'#2E6E35',e:'🏘️',t:'West Gateway Residential',d:'280-unit workforce housing on available west-side land near existing US-54 corridor commercial.',ty:'★ New Residential'},
      {c:[37.852,-96.850],col:'#2E6E35',e:'🏡',t:'North Gateway District',d:'New walkable neighborhood on agricultural land north of city. Connects downtown to El Dorado Lake via new linear park.',ty:'★ New District'},
      {c:[37.848,-96.814],col:'#4A90BF',e:'⛵',t:'West Side Marina (Proposed)',d:'New 150-slip marina on west lake shore — fills coverage gap between city and water.',ty:'★ New Construction'},
      {c:[37.825,-96.855],col:'#7B5EA7',e:'🎓',t:'Butler CC — Expanded Programs',d:'Employer-aligned certificate programs, North Gateway satellite campus, SBDC expansion.',ty:'⟳ Expand Existing'},
      {c:[37.855,-96.858],col:'#C8902A',e:'🇩🇪',t:'AMAZONE — El Dorado\'s First FDI Win',d:'German agricultural machinery company. 30,000 sq-ft parts/distribution/assembly facility at 1220 N Haverhill Rd. Opened December 2, 2025. First confirmed foreign direct investment in the Vision 2040 era.',ty:'✓ Opened Dec 2025'},
      {c:[37.815,-96.820],col:'#4A90BF',e:'🚌',t:'US-54/77 Transit Hub',d:'Park-and-Ride (200 spaces), Commuter Express, Lake Shuttle, ICT airport connector, EV charging plaza.',ty:'★ New Infrastructure'},
      {c:[37.838,-96.850],col:'#2E6E35',e:'🚴',t:'Walnut River Greenway',d:'10-mile trail — connects downtown to El Dorado Lake. Follows existing Walnut River corridor.',ty:'★ New Trail Corridor'},
      {c:[37.848,-96.864],col:'#A63D2F',e:'🚒',t:'Fire Station 2 — North Gateway',d:'Second station supplements existing downtown Station 1. Reduces north-district response from 12+ min to under 5 min.',ty:'★ New — Critical Infrastructure'},
    ],
    polylines: [
      {co:[[37.817,-96.980],[37.817,-96.670]],s:{color:'#4A90BF',weight:3,opacity:.5,dashArray:'8 6'},p:'<b>US-54</b> — Wichita commuter corridor / proposed bus route (29 mi to Wichita)'},
      {co:[[37.920,-96.862],[37.720,-96.862]],s:{color:'#C8902A',weight:3,opacity:.5,dashArray:'8 6'},p:'<b>US-77</b> — North–south industrial freight backbone'},
      {co:[[37.845,-96.830],[37.832,-96.845],[37.820,-96.855],[37.810,-96.862],[37.800,-96.858]],s:{color:'#4A90BF',weight:4,opacity:.35},p:'<b>Walnut River</b> — Proposed greenway corridor'},
    ],
    legend: {
      title: 'El Dorado Vision 2040 — City Overview',
      sections: [
        { head: 'Marker Types', entries: [
          { type:'existing', label:'Existing Infrastructure', sub:'Dashed gold ring — click for upgrade plan & cost savings' },
          { type:'dot', color:'#1B3A5C', label:'Downtown / Civic Investments', sub:'Oil Museum, City Hall, boutique hotel, arts district' },
          { type:'dot', color:'#2E6E35', label:'North Gateway / Residential / Parks', sub:'New neighborhood, linear park, Walnut River trail' },
          { type:'dot', color:'#4A90BF', label:'Lake / Water / Transit Infrastructure', sub:'West marina, lake tourism, commuter hub, fiber' },
          { type:'dot', color:'#C8902A', label:'Energy / Commercial / Airport', sub:'Flint Hills Energy Corridor, US-54 commercial zone' },
          { type:'dot', color:'#7B5EA7', label:'Project Horizon — Data Center Campus', sub:'300-acre hyperscale site · Under city discussion' },
          { type:'dot', color:'#A63D2F', label:'Public Safety / South Industrial', sub:'Fire Station 2, aerospace campus, EQA airport' },
        ]},
        { head: 'Road & Waterway Corridors', entries: [
          { type:'line', color:'#4A90BF', dash:true, label:'US-54', sub:'Wichita ↔ El Dorado commuter corridor (29 mi)' },
          { type:'line', color:'#C8902A', dash:true, label:'US-77', sub:'North–south industrial freight backbone' },
          { type:'line', color:'#4A90BF', dash:false, label:'Walnut River', sub:'Proposed 6-mile greenway trail corridor' },
        ]},
        { head: 'Investment Phases', entries: [
          { type:'phase', color:'#C8902A', num:'1', label:'Phase 1 — 2025–27', sub:'Priority projects · $55M public · $25M private' },
          { type:'phase', color:'#2E6E35', num:'2', label:'Phase 2 — 2028–30', sub:'Momentum · $110M public · $80M private' },
          { type:'phase', color:'#4A90BF', num:'3', label:'Phase 3 — 2031–35', sub:'Growth · $105M public · $200M private' },
          { type:'phase', color:'#7B5EA7', num:'4', label:'Phase 4 — 2036–40', sub:'Completion · $50M public · $320M private' },
        ]},
        { note:'Click any marker for project details. Use layer toggle (top-right) to show/hide existing infrastructure.' },
      ],
    },
  },

  'map-north-gateway': {
    center: [37.847,-96.850], zoom: 14,
    existing: [
      {c:[37.836,-96.861],e:'🏫',t:'Grandview Elementary School (Existing)',
        cur:'North El Dorado public elementary school — southern anchor of the North Gateway neighborhood corridor.',
        imp:'School trailhead plaza adjacent to south entrance: paved trail connection, bike parking corral, safe-route signage, expanded playground serving both school and neighborhood residents.',
        sav:'School already on city road grid — trail connection uses existing right-of-way at no land-acquisition cost.'},
      {c:[37.844,-96.838],e:'🛣️',t:'North Lake Road (Existing)',
        cur:'Narrow 2-lane residential road — current only access from US-77 to north lake shore.',
        imp:'Widen to 4-lane collector: center turn lane, curb and gutter, sidewalks both sides, protected bike lane, LED lighting.',
        sav:'Improving existing road alignment saves $1M+ vs. new right-of-way acquisition on an alternate route.'},
      {c:[37.843,-96.803],e:'⚓',t:'East Marina (Existing — Expanding)',
        cur:'80-slip marina, limited amenities.',
        imp:'Expand to 250 slips, fuel dock, pump-out, ship\'s store, wave attenuator.',
        sav:'Expanding existing dock infrastructure saves vs. all-new marina build.'},
    ],
    markers: [
      {c:[37.853,-96.861],col:'#1B3A5C',e:'🛤️',t:'Myers Road Trailhead (North Anchor)',d:'Northern terminus of the North Gateway Linear Park. 30-space parking lot, restroom, picnic shelter, directional kiosk linking to citywide Walnut River Greenway.',ty:'★ New Infrastructure'},
      {c:[37.856,-96.862],col:'#2E6E35',e:'🏘️',t:'North Gateway Residential (300 units)',d:'Mixed walkable neighborhood: single-family, townhomes, courtyard apts. Phase 1: 150 units 2027–2029. All units within 5-min walk of Linear Park trail.',ty:'★ New Residential'},
      {c:[37.848,-96.813],col:'#4A90BF',e:'⛵',t:'West Side Marina Complex (New)',d:'New 150-slip marina: fuel dock, ship store, boat rentals, electric charging, pump-out, wave attenuator.',ty:'★ New Marina'},
      {c:[37.843,-96.833],col:'#1B3A5C',e:'🚢',t:'Boat Storage Campus (250 units)',d:'80 enclosed/climate, 120 covered carport, 50 open paved. Year-round access road from US-77.',ty:'★ New Construction'},
      {c:[37.853,-96.820],col:'#C8902A',e:'🍽️',t:'North Shore Amenity Hub',d:'Outside state park: 2–3 waterfront restaurants, outfitter, kayak/SUP rental, private event venue.',ty:'★ Private Development'},
      {c:[37.842,-96.821],col:'#4A90BF',e:'🚣',t:'Public Boat Launch — Upgrade',d:'4-lane ramp, courtesy dock, fish cleaning station, 100-space paved trailer lot. Supplements existing east ramp.',ty:'⟳ Improve Existing'},
      {c:[37.844,-96.855],col:'#2E6E35',e:'🌳',t:'North Gateway Linear Park',d:'1.5-mile greenway spine from Grandview Elementary (south) to Myers Road (north) — paved trail, 3 pocket parks, bioswales, native prairie plantings every 500 ft.',ty:'★ New Park'},
      {c:[37.862,-96.837],col:'#A63D2F',e:'🏕️',t:'North Shore RV & Camping',d:'80 full-hookup RV sites, 20 tent sites, cabin rentals. Private operator on city-leased land.',ty:'★ Private Concession'},
      {c:[37.853,-96.858],col:'#C8902A',e:'🇩🇪',t:'AMAZONE — Operational (Dec 2025)',d:'German ag-machinery company · 30,000 sq-ft parts, distribution & assembly at 1220 N Haverhill Rd · 6.5 acres · First confirmed FDI win · cited I-35 access and "heart of most important agricultural region in US".',ty:'✓ Open · Phase 1 Anchor'},
      {c:[37.839,-96.861],col:'#7B5EA7',e:'🎓',t:'Butler CC North Gateway Satellite',d:'15,000 sq-ft satellite: marine mechanics, outdoor recreation, building trades certificates.',ty:'★ New Facility'},
      {c:[37.844,-96.858],col:'#C8902A',e:'🏪',t:'North Gateway Village Center',d:'Neighborhood commercial: grocery/convenience, pharmacy, coffee shop, service retail.',ty:'★ New Commercial'},
    ],
    polylines: [
      {co:[[37.837,-96.838],[37.842,-96.821]],s:{color:'#1B3A5C',weight:5,opacity:.65},p:'<b>Improved Lake Access Road</b> — existing road widened to 4-lane collector'},
      {co:[[37.836,-96.861],[37.841,-96.861],[37.844,-96.858],[37.848,-96.858],[37.853,-96.861]],s:{color:'#2E6E35',weight:5,opacity:.85,dashArray:'8 4'},p:'<b>North Gateway Linear Park Trail</b> — Grandview Elementary → Myers Road (1.5 miles)'},
    ],
    legend: {
      title: 'North Gateway District — Vision 2040',
      sections: [
        { head: 'Existing Assets (click for upgrade plans)', entries: [
          { type:'existing', label:'Grandview Elementary', sub:'South anchor of linear park trail; safe-routes plaza' },
          { type:'existing', label:'North Lake Road', sub:'Narrow 2-lane; widening to 4-lane collector' },
          { type:'existing', label:'East Marina (Shady Creek)', sub:'80 slips; expanding to 250 + dry-stack 120' },
        ]},
        { head: 'New Construction — North District', entries: [
          { type:'dot', color:'#1B3A5C', label:'Myers Road Trailhead (North Anchor)', sub:'Phase 1 · 30-space lot, restroom, shelter, kiosk' },
          { type:'dot', color:'#2E6E35', label:'North Gateway Residential (300 units)', sub:'Phase 1–2 · Single-family, townhomes, courtyard apts' },
          { type:'dot', color:'#2E6E35', label:'North Gateway Linear Park', sub:'Phase 1 · 1.5-mi trail spine, 3 pocket parks, bioswales' },
          { type:'dot', color:'#4A90BF', label:'West Side Marina (150 slips)', sub:'Phase 2 · Fuel, ship store, electric charging, wave attenuator' },
          { type:'dot', color:'#C8902A', label:'North Shore Amenity Hub', sub:'Phase 2–3 · Restaurants, outfitter, event venue (outside park)' },
          { type:'dot', color:'#1B3A5C', label:'Boat Storage Campus (250 units)', sub:'Phase 2 · 80 enclosed, 120 covered, 50 open paved' },
          { type:'dot', color:'#A63D2F', label:'North Shore RV & Camping', sub:'Phase 2 · 80 RV + 20 tent · Private operator, city lease' },
          { type:'dot', color:'#7B5EA7', label:'Butler CC North Gateway Satellite', sub:'Phase 3 · 15,000 sq-ft · Marine, trades, outdoor rec certs' },
          { type:'dot', color:'#C8902A', label:'North Gateway Village Center', sub:'Phase 2 · Grocery, pharmacy, coffee, service retail' },
        ]},
        { head: 'Infrastructure Corridors', entries: [
          { type:'line', color:'#1B3A5C', dash:false, label:'Improved Lake Access Road', sub:'Widened to 4-lane collector with bike lane + sidewalk' },
          { type:'line', color:'#2E6E35', dash:true, label:'North Gateway Linear Park Trail', sub:'Grandview Elementary → Myers Road · 1.5 miles' },
        ]},
        { head: 'Development Phasing', entries: [
          { type:'phase', color:'#C8902A', num:'1', label:'Phase 1 (2025–27)', sub:'Grandview trailhead · North Park upgrade · Myers Rd infrastructure' },
          { type:'phase', color:'#2E6E35', num:'2', label:'Phase 2 (2028–30)', sub:'300-unit residential buildout · Linear park · Marina' },
          { type:'phase', color:'#4A90BF', num:'3', label:'Phase 3 (2031–35)', sub:'Village center · Butler CC satellite · Full trail connection' },
        ]},
      ],
    },
  },

  /* ── Parks & Recreation Map ── */
  'map-parks': {
    center: [37.823,-96.864], zoom: 13,
    existing: [
      {c:[37.814,-96.873],e:'🌳',t:'Centennial Park (Existing — Primary City Park)',
        cur:'~40 acres. Playground, 3 covered shelters, horseshoe pits, basketball courts, gravel paths, restroom.',
        imp:'Outdoor fitness trail (20 stations, 2-mile paved loop), replacement all-ages playground, seasonal splash pad, band shell/performance pavilion, EV-ready parking.',
        sav:'All improvements on city-owned land. Existing utilities and access reused. Saves $800K vs. new-site development.'},
      {c:[37.839,-96.861],e:'🏡',t:'North Park (Existing — Near Grandview Elementary)',
        cur:'~8 acres. Aging playground, open grass field, benches, street parking only.',
        imp:'New playground (ages 2–12), outdoor fitness stations, basketball court resurface, community garden node (20 plots), dog park (North), trail connection to Grandview → Myers Road corridor.',
        sav:'Existing city-owned park upgraded in place. Trail uses existing road ROW to Grandview Elementary.'},
      {c:[37.820,-96.847],e:'🌿',t:'Harvey Park (Existing)',
        cur:'~6 acres. Playground, picnic tables, open turf, partial gravel walking path.',
        imp:'New playground with shade sails, paved ADA walking loop (0.4 mi), pollinator garden (Monarch Waystation), covered picnic shelter, solar path lighting, trail spur to Walnut River Greenway.',
        sav:'Improvements on existing city land. Trail spur follows existing drainage corridor at minimal ROW cost.'},
      {c:[37.819,-96.840],e:'🏞️',t:'Garfield Park (Existing)',
        cur:'~5 acres. Small playground, open green space, mature trees, informal street parking.',
        imp:'Renovated playground (ADA surfacing), covered picnic shelter with electrical, native understory plantings, trail spur to Walnut River Greenway.',
        sav:'Mature tree canopy is an existing asset — preserved and enhanced rather than replaced.'},
      {c:[37.822,-96.862],e:'🎖️',t:'Veterans Memorial Park (Existing)',
        cur:'~3 acres. Veterans monument, flagpole, memorial benches, brick walkway, small lawn.',
        imp:'Butler County military service timeline wall, engraved pavers fundraising program, seating garden, dark-sky monument lighting, flag display upgrade, pedestrian link to Central Plaza.',
        sav:'Memorial infrastructure retained; engraved pavers program generates partial self-funding for improvements.'},
      {c:[37.823,-96.856],e:'🛢️',t:'Pioneer / Heritage Park (Existing — near Oil Museum)',
        cur:'~4 acres. Open lawn, historical marker, informal picnic tables, shared Oil Museum parking.',
        imp:'Oil heritage interpretive trail (6 stations), group picnic shelter, drought-tolerant native Kansas prairie landscaping, RV overnight hookups (4 spaces, $25/night, Harvest Hosts), small amphitheater seating (50-person).',
        sav:'Adjacent to Oil Museum — shared parking and visitor flow. No additional land acquisition needed.'},
      {c:[37.808,-96.877],e:'⚽',t:'Southwest Community Park (Existing)',
        cur:'~12 acres. Unlit soccer field, playground, informal parking, portable restroom (seasonal).',
        imp:'LED field lighting, permanent restroom + concession, playground replacement (ADA), dog park (South location), community garden node (20 plots), paved parking (40 spaces), trail connection to West Gateway workforce housing.',
        sav:'Existing field and infrastructure reused. LED lighting and permanent restroom eliminate seasonal portable unit cost.'},
      {c:[37.813,-96.853],e:'🏊',t:'Municipal Pool (Existing)',
        cur:'1970s-era outdoor pool. Adequate but aging — undersized for growing recreation demand.',
        imp:'Renovate in-place: zero-depth entry, water slides, updated lap lanes, shade structures, new mechanicals, upgraded concession/restroom.',
        sav:'Renovation on existing site saves $1.5–2M vs. greenfield aquatic center. City already owns land and utilities.'},
      {c:[37.830,-96.857],e:'⚾',t:'Athletic Complex (Existing)',
        cur:'5 baseball/softball diamonds, aging metal-halide lighting, aging concession/restroom, paved parking.',
        imp:'LED lighting (all fields), new concession + restroom (commercial kitchen), electronic scoreboards, resurfaced infields, 2 new turf multipurpose fields, skate park + BMX pump track on perimeter.',
        sav:'Existing complex, parking, and road access reused. LED retrofit pays for itself in energy savings within 4 years.'},
      {c:[37.803,-96.857],e:'🌊',t:'Walnut River Corridor — South Access',
        cur:'Informal river access, unpaved path, minimal parking.',
        imp:'Formal trailhead: paved parking (20 spaces), restroom, covered shelter, kayak launch with floating dock, trail map kiosk.',
        sav:'Corridor along existing river easement — no land acquisition needed for trail path.'},
      {c:[37.812,-96.851],e:'🌊',t:'Walnut River Corridor — Central Access',
        cur:'Informal fisherman\'s path, limited pull-off parking.',
        imp:'Kayak/canoe launch with floating dock, riverside seating node, ADA path connecting to main trail.',
        sav:''},
      {c:[37.823,-96.845],e:'🌊',t:'Walnut River Corridor — North-Central Access',
        cur:'Informal access point with footpath to river.',
        imp:'Connects to the Walnut River Nature Education Center site. Guided kayak ecology tour departure point.',
        sav:''},
      {c:[37.831,-96.836],e:'🌊',t:'Walnut River Corridor — North Access',
        cur:'Northernmost existing river access — unpaved, no amenities.',
        imp:'North trailhead: parking, restroom, connection to North Gateway Linear Park and El Dorado Lake circumnavigation trail.',
        sav:''},
    ],
    markers: [
      {c:[37.853,-96.861],col:'#1B3A5C',e:'🛤️',t:'Myers Road Trailhead (NEW — North Anchor)',d:'New northern trailhead at the top of the North Gateway Linear Park corridor. Parking, restroom, picnic shelter, trail connection south to Grandview Elementary and west to Walnut River Greenway.',ty:'★ New Infrastructure'},
      {c:[37.847,-96.860],col:'#2E6E35',e:'🌱',t:'North Gateway Linear Park (NEW)',d:'NEW 1.5-mile trail spine: Grandview Elementary → Myers Road. Three pocket parks, bioswale stormwater system, native plantings, community garden node. Backbone of the North District.',ty:'★ New Park — North District'},
      {c:[37.840,-96.861],col:'#2E6E35',e:'🌸',t:'North District Pocket Park A (NEW)',d:'First of three pocket parks spaced along the North Gateway Linear Park trail — seating, shade structure, native plantings, ~0.5 miles north of Grandview Elementary.',ty:'★ New Park'},
      {c:[37.845,-96.860],col:'#2E6E35',e:'🪴',t:'North District Pocket Park B + Community Garden (NEW)',d:'Mid-corridor pocket park with 20-plot community garden node. Central meeting point of the North Gateway Linear Park.',ty:'★ New Park'},
      {c:[37.849,-96.860],col:'#2E6E35',e:'🏕️',t:'North District Pocket Park C (NEW)',d:'Northernmost pocket park before Myers Road trailhead — picnic area, dog-friendly turf, stormwater bioswale visible feature.',ty:'★ New Park'},
      {c:[37.823,-96.844],col:'#4A90BF',e:'🦋',t:'Walnut River Nature Education Center (NEW)',d:'Interpretive exhibits on Walnut River watershed ecology, Monarch Butterfly corridor, and Central Flyway migration. Guided kayak ecology tours. Butler CC field classroom.',ty:'★ New Facility — Phase 2'},
      {c:[37.827,-96.841],col:'#2E6E35',e:'🌺',t:'Botanical Garden & Prairie Restoration (NEW)',d:'12-acre native Flint Hills prairie and curated pollinator garden along the Walnut River greenway. Monarch Waystation. Managed with Butler CC Environmental Science program.',ty:'★ New — Phase 2'},
      {c:[37.834,-96.832],col:'#A63D2F',e:'⛺',t:'City Campground & Glamping (NEW)',d:'30 tent sites, 20 RV sites (water/electric), 4 canvas glamping tents. $20–65/night. Revenue at 60% occupancy: ~$180K/year.',ty:'★ New — Phase 2'},
    ],
    polylines: [
      /* Walnut River Trail */
      {co:[[37.803,-96.857],[37.812,-96.851],[37.820,-96.847],[37.823,-96.845],[37.827,-96.841],[37.831,-96.836]],s:{color:'#2E6E35',weight:4,opacity:.7,dashArray:'10 5'},p:'<b>Walnut River Greenway Trail</b> — 6-mile paved multi-use trail (proposed)'},
      /* North Gateway Linear Park Trail */
      {co:[[37.836,-96.861],[37.840,-96.861],[37.845,-96.860],[37.849,-96.860],[37.853,-96.861]],s:{color:'#1B3A5C',weight:4,opacity:.85,dashArray:'8 4'},p:'<b>North Gateway Linear Park</b> — Grandview Elementary → Myers Road (1.5 mi)'},
      /* Connection spur: N Walnut River trail to North Gateway */
      {co:[[37.831,-96.836],[37.835,-96.845],[37.836,-96.861]],s:{color:'#4A90BF',weight:3,opacity:.55,dashArray:'6 5'},p:'<b>Connector Trail</b> — Walnut River Greenway to North Gateway'},
    ],
    legend: {
      title: 'Parks & Trail Network — Vision 2040',
      sections: [
        { head: 'Existing City Parks (click for Vision 2040 plans)', entries: [
          { type:'existing', label:'Centennial Park', sub:'~40 acres · Central El Dorado · Primary city park' },
          { type:'existing', label:'North Park', sub:'~8 acres · Near Grandview Elementary' },
          { type:'existing', label:'Harvey Park', sub:'~6 acres · East-central · Pollinator garden + trail spur' },
          { type:'existing', label:'Garfield Park', sub:'~5 acres · East side · Greenway connection' },
          { type:'existing', label:'Veterans Memorial Park', sub:'~3 acres · Downtown-adjacent' },
          { type:'existing', label:'Pioneer / Heritage Park', sub:'~4 acres · Oil Museum vicinity · RV overnight' },
          { type:'existing', label:'Southwest Community Park', sub:'~12 acres · LED fields + dog park' },
          { type:'existing', label:'Athletic Complex', sub:'~35 acres · 5 diamonds + turf expansion' },
          { type:'existing', label:'Municipal Pool', sub:'1970s era · Renovating in-place' },
          { type:'existing', label:'Walnut River Corridor (4 access pts)', sub:'~60 ac total · Formalizing into 6-mile greenway' },
        ]},
        { head: 'New Green Space & Facilities (★)', entries: [
          { type:'dot', color:'#1B3A5C', label:'Myers Road Trailhead (North Anchor)', sub:'Parking, restroom, shelter, wayfinding kiosk' },
          { type:'dot', color:'#2E6E35', label:'North Gateway Linear Park + 3 Pocket Parks', sub:'1.5-mile spine: Grandview Elementary → Myers Rd' },
          { type:'dot', color:'#4A90BF', label:'Walnut River Nature Education Center', sub:'Phase 2 · Ecology exhibits, kayak tours, Butler CC' },
          { type:'dot', color:'#2E6E35', label:'Botanical Garden & Prairie Restoration', sub:'Phase 2 · 12-acre native prairie + Monarch Waystation' },
          { type:'dot', color:'#A63D2F', label:'City Campground & Glamping', sub:'Phase 2 · 30 tent + 20 RV + 4 glamping tents' },
        ]},
        { head: 'Trail Corridors (Vision 2040)', entries: [
          { type:'line', color:'#2E6E35', dash:true, label:'Walnut River Greenway', sub:'6 miles · Paved, 8 ft wide · 4 formalized trailheads' },
          { type:'line', color:'#1B3A5C', dash:true, label:'North Gateway Linear Park Trail', sub:'1.5 miles · Grandview Elementary → Myers Road' },
          { type:'line', color:'#4A90BF', dash:true, label:'Connector Trail', sub:'Links Walnut River Greenway to North Gateway corridor' },
        ]},
        { head: 'Parks Budget Context', entries: [
          { type:'phase', color:'#C8902A', num:'$', label:'Current Annual Investment: ~$1.9M', sub:'Parks $401K · Recreation $1.25M · Pool $249K' },
          { type:'phase', color:'#2E6E35', num:'$', label:'Vision 2040 Capital: $28M over 15 years', sub:'On base of existing $1.9M/yr operating budget' },
        ]},
      ],
    },
  },

  'map-lake': {
    center: [37.863,-96.800], zoom: 13,
    existing: [
      {c:[37.843,-96.803],e:'⚓',t:'East Marina (Existing — Expanding)',
        cur:'80 slips, minimal amenities. Peak summer demand exceeds capacity most weekends.',
        imp:'Expand to 250 slips. Fuel dock, ship\'s store, pump-out, wave attenuator, dry-stack storage (120 vessels).',
        sav:'Expanding existing marina infrastructure avoids new permitting and access road costs. Est. $2.5M saved vs. new site build.'},
      {c:[37.847,-96.823],e:'💧',t:'El Dorado Dam (Corps of Engineers)',
        cur:'Rolled earth-fill embankment dam, 99 ft tall, 20,930 ft long. Completed June 29, 1981. Creates 8,400-acre reservoir with 350-ft uncontrolled spillway near northwest end.',
        imp:'No change to dam structure. Improve dam-crest overlook trail, interpretive signage, and paved parking at the scenic overlook.',
        sav:'Public land — no acquisition cost for overlook improvements. Dam crest provides panoramic lake view unavailable elsewhere.'},
      {c:[37.843,-96.790],e:'🌲',t:'El Dorado State Park (Existing)',
        cur:'Active state park with camping, hiking, and lake access on east shore.',
        imp:'KDWPT concession agreement adds glamping/eco-cabins within park. No public capital for construction.',
        sav:'Private concession model: state receives revenue share, private operator funds all construction. $0 public capital for glamping build.'},
    ],
    markers: [
      {c:[37.848,-96.813],col:'#4A90BF',e:'⛵',t:'West Side Marina (New)',d:'150-slip marina on west shore — fills coverage gap, serves North Gateway District. Electric boat charging (first in western KS).',ty:'★ New Marina'},
      {c:[37.875,-96.792],col:'#C8902A',e:'🎵',t:'Lakefront Amphitheater (New)',d:'3,000-seat outdoor venue, floating stage. 20+ events/yr driving Wichita-region overnight stays.',ty:'★ New Construction'},
      {c:[37.856,-96.808],col:'#C8902A',e:'🏪',t:'Lakeside Commercial Strip (New)',d:'12-acre private development: restaurants, boutique inn, artisan market, outfitter.',ty:'★ Private Development'},
      {c:[37.869,-96.800],col:'#2E6E35',e:'🏕️',t:'Glamping & Eco-Cabin Village',d:'40 premium eco-cabins via KDWPT concession. Private build. Avg nightly $150–250. Zero public capital.',ty:'★ Private Concession'},
      {c:[37.882,-96.787],col:'#1B3A5C',e:'👁️',t:'Scenic Overlook & Visitor Center (New)',d:'Hilltop facility, panoramic lake views, ecology + history exhibits, coffee shop.',ty:'★ New Construction'},
      {c:[37.862,-96.797],col:'#4A90BF',e:'🏄',t:'Watersports & Event Center (New)',d:'Regattas, fishing tournaments, youth programs. Coaching dock, equipment storage, covered viewing for 500.',ty:'★ New Construction'},
      {c:[37.835,-96.793],col:'#4A90BF',e:'🐟',t:'Fishing Pier Complex — Improve & Expand',d:'4 new ADA lighted piers added to existing lake access points. Expanded fish cleaning station. Attractor structures in key coves.',ty:'⟳ Improve Existing Access'},
      {c:[37.854,-96.821],col:'#2E6E35',e:'🚣',t:"Paddler's Trail Network (New)",d:"15 miles of designated quiet-water routes, 5 canoe-in primitive campsites on western coves.",ty:'★ New Trail'},
    ],
    polylines: [
      {co:[[37.828,-96.810],[37.840,-96.803],[37.855,-96.800],[37.868,-96.795],[37.882,-96.787],[37.896,-96.773]],s:{color:'#2E6E35',weight:3,opacity:.6,dashArray:'8 5'},p:'<b>Circumnavigation Trail — East Shore</b>'},
      {co:[[37.828,-96.812],[37.838,-96.817],[37.848,-96.815],[37.858,-96.812],[37.870,-96.806],[37.883,-96.795]],s:{color:'#2E6E35',weight:3,opacity:.6,dashArray:'8 5'},p:'<b>Circumnavigation Trail — West Shore</b>'},
    ],
    legend: {
      title: 'El Dorado Lake — Tourism District',
      sections: [
        { head: '🏆 #1 Most-Visited State Park in Kansas', entries: [
          { type:'existing', label:'El Dorado State Park (KDWPT)', sub:'4,000 park acres · 1,100 campsites · 6 boat ramps · 2 beaches · 7 trails' },
          { type:'existing', label:'Shady Creek Marina — East Shore (Existing)', sub:'KDWPT concession · Boat rentals, ramp · Primary existing marina · Expanding in place' },
          { type:'existing', label:'El Dorado Dam (Corps of Engineers)', sub:'Creates 8,400-acre lake · 99 ft dam height · City water supply · Completed 1981' },
        ]},
        { head: 'New Lake Commercial Development', entries: [
          { type:'dot', color:'#4A90BF', label:'West Side Marina (150 slips)', sub:'Phase 2 · Electric boat charging · First in western KS' },
          { type:'dot', color:'#C8902A', label:'Lakefront Amphitheater (3,000 seats)', sub:'Phase 2 · Floating stage · 20+ events/yr' },
          { type:'dot', color:'#C8902A', label:'Lakeside Commercial Strip (12 acres)', sub:'Phase 2–3 · Restaurants, boutique inn, outfitter' },
        ]},
        { head: 'Nature & Recreation Additions', entries: [
          { type:'dot', color:'#2E6E35', label:'Glamping & Eco-Cabin Village (40 units)', sub:'Phase 2 · KDWPT private concession · $0 public capital' },
          { type:'dot', color:'#1B3A5C', label:'Scenic Overlook & Visitor Center', sub:'Phase 2 · Hilltop facility, ecology + history exhibits' },
          { type:'dot', color:'#4A90BF', label:'Watersports & Event Center', sub:'Phase 3 · Regattas, fishing tournaments, youth programs' },
          { type:'dot', color:'#4A90BF', label:'Fishing Pier Complex (ADA-accessible)', sub:'Phase 1 · 4 new lighted piers + fish cleaning station' },
          { type:'dot', color:'#2E6E35', label:"Paddler's Trail Network (15 miles)", sub:'Phase 2 · Quiet-water routes + canoe-in campsites' },
        ]},
        { head: 'Trail System (26-Mile Circumnavigation)', entries: [
          { type:'line', color:'#2E6E35', dash:true, label:'East Shore Trail', sub:'Paved multi-use trail · 4 trailhead parking areas' },
          { type:'line', color:'#2E6E35', dash:true, label:'West Shore Trail', sub:'Connects to Walnut River Greenway into downtown El Dorado' },
        ]},
        { note:'⚠️ All commercial development is proposed OUTSIDE El Dorado State Park boundaries. KDWPT concession model = private operator, $0 public capital for glamping build.' },
      ],
    },
  },

  'map-downtown': {
    center: [37.819,-96.862], zoom: 15,
    existing: [
      {c:[37.819,-96.862],e:'🏙️',t:'Central Avenue — Existing Commercial Core',
        cur:'Established walkable grid with historic Victorian commercial buildings. Ground-floor retail with vacant upper floors.',
        imp:'Streetscape: wider sidewalks, street trees, period lighting, crosswalks. Upper floors → 60–80 market-rate lofts.',
        sav:'Working within existing street grid and buildings eliminates demolition costs and preserves historic character eligible for 25% state tax credits.'},
      {c:[37.823,-96.863],e:'🛢️',t:'Kansas Oil Museum (Existing)',
        cur:'Established museum on 1915 oil discovery. Current attendance ~12,000/yr — well below capacity of the story.',
        imp:'Triple footprint into adjacent vacant block. Immersive exhibits, pump-jack simulator, energy future wing.',
        sav:'Museum land and collections are existing public assets. Adjacent block acquisition targets existing vacant/underused parcels.'},
      {c:[37.821,-96.862],e:'📚',t:'El Dorado Public Library (Existing)',
        cur:'Functioning public library — underfunded and under-equipped relative to comparably sized Kansas cities.',
        imp:'Maker space addition, business resource center, rooftop reading garden. Expansion within/adjacent to existing footprint.',
        sav:'No relocation. Improvements to existing building save $800K+ vs. building a new library branch.'},
      {c:[37.817,-96.862],e:'🏛️',t:'City Hall (Existing)',
        cur:'Existing municipal building anchoring the downtown core.',
        imp:'Retain. Civic anchor for streetscape improvements radiating outward on Central Avenue.',
        sav:'Existing civic anchor — no replacement cost.'},
    ],
    markers: [
      {c:[37.820,-96.864],col:'#2E6E35',e:'🌿',t:'Central Plaza & Farmers Market',d:'Surface parking lot → permanent public plaza: covered pavilion, performance stage, splash pad, winter ice. 52+ annual events.',ty:'★ Repurpose Existing Lot'},
      {c:[37.816,-96.860],col:'#A63D2F',e:'🏨',t:'Boutique Hotel — Adaptive Reuse',d:'Vacant commercial building → 35-room boutique hotel + rooftop bar. 25% Historic Tax Credits + NMTC financing.',ty:'⟳ Adaptive Reuse'},
      {c:[37.817,-96.865],col:'#7B5EA7',e:'💡',t:'Small Business Incubator & Food Hall',d:'Vacant warehouse → 15 micro-storefronts, shared kitchen, co-working, event space. Reuses existing structure.',ty:'⟳ Adaptive Reuse'},
      {c:[37.820,-96.858],col:'#A63D2F',e:'🎨',t:'Arts & Culture District',d:'4-block district using existing buildings: subsidized artist leases in city-owned spaces, gallery walks, murals.',ty:'⟳ Activate Existing Buildings'},
      {c:[37.817,-96.861],col:'#1B3A5C',e:'🏙️',t:'Downtown Loft District',d:'Vacant upper floors of historic commercial buildings → 60–80 market-rate lofts. KHPTC-eligible rehab.',ty:'⟳ Adaptive Reuse'},
      {c:[37.820,-96.861],col:'#2E6E35',e:'🏗️',t:'124 Lofts — Masonic Lodge (Active)',d:'Historic Masonic Lodge building conversion to 13 apartments + ground-floor restaurant/retail. Announced February 2026. First active ROOMS grant project in downtown El Dorado.',ty:'✓ Active · ROOMS Grant'},
    ],
    polylines: [
      {co:[[37.812,-96.862],[37.826,-96.862]],s:{color:'#1B3A5C',weight:7,opacity:.45},p:'<b>Central Avenue</b> — 8-block streetscape improvement corridor (existing street grid)'},
    ],
    legend: {
      title: 'Downtown El Dorado — Revitalization Plan',
      sections: [
        { head: 'Existing Downtown Assets (click for plans)', entries: [
          { type:'existing', label:'Central Avenue Commercial Core', sub:'Victorian commercial buildings · El Dorado Commercial Historic District' },
          { type:'existing', label:'Kansas Oil Museum (383 E. Central Ave.)', sub:'National collection · ~12K visitors/yr · Expanding to 50K target' },
          { type:'existing', label:'El Dorado Public Library', sub:'Adding maker space, business center, rooftop reading garden' },
          { type:'existing', label:'City Hall', sub:'Civic anchor for streetscape improvements radiating outward' },
        ]},
        { head: 'Proposed Projects (⟳ = Adaptive Reuse)', entries: [
          { type:'dot', color:'#2E6E35', label:'Central Plaza & Farmers Market Pavilion', sub:'Phase 1 · Surface lot → plaza, pavilion, splash pad, stage' },
          { type:'dot', color:'#A63D2F', label:'Boutique Hotel — Adaptive Reuse', sub:'Phase 2 · 35-room hotel + rooftop bar · Historic Tax Credits' },
          { type:'dot', color:'#7B5EA7', label:'Small Business Incubator & Food Hall', sub:'Phase 1 · Vacant warehouse → 15 micro-storefronts + shared kitchen' },
          { type:'dot', color:'#A63D2F', label:'Arts & Culture District', sub:'Phase 1–2 · 4-block artist district using existing city-owned spaces' },
          { type:'dot', color:'#1B3A5C', label:'Downtown Loft District (60–80 units)', sub:'Phase 1 · Vacant upper floors → market-rate lofts' },
        ]},
        { head: 'Main Corridor', entries: [
          { type:'line', color:'#1B3A5C', dash:false, label:'Central Avenue', sub:'8-block streetscape · Widened sidewalks, trees, period lighting' },
        ]},
        { head: 'Active Programs & Funding (Already Underway)', entries: [
          { type:'phase', color:'#2E6E35', num:'✓', label:'El Dorado Main Street Program', sub:'Façade grants · Zero-interest loans up to $20K · Active recruitment' },
          { type:'phase', color:'#2E6E35', num:'✓', label:'ROOMS Grant: $50K → 18 downtown units', sub:'Kansas Dept. of Commerce · Upper-floor residential conversion' },
          { type:'phase', color:'#C8902A', num:'%', label:'Historic Tax Credits: 25% state + 20% federal', sub:'= 45% combined benefit on qualified rehabilitation costs' },
        ]},
      ],
    },
  },

  'map-south': {
    center: [37.793,-96.852], zoom: 13,
    existing: [
      {c:[37.774,-96.818],e:'✈️',t:'El Dorado Airport — EQA (Existing)',
        cur:'Active GA airport: two crossing runways (Rwy 4/22 and Rwy 15/33, each ~4,200 × 75 ft asphalt/concrete), FBO, fuel, minimal hangar capacity.',
        imp:'Runway extension to 5,500 ft, ILS instrument approach, 20 new T-hangars. 90% FAA AIP-funded.',
        sav:'Existing airport land, permits, and FBO valued at $8M+. FAA AIP covers 90% of improvement cost.'},
      {c:[37.795,-96.862],e:'🏭',t:'Existing Industrial Zone (I-2)',
        cur:'Heavy industrial zoned land, partially developed. HF Sinclair and existing manufacturers already here.',
        imp:'Prep 5 shovel-ready pads on currently unimproved I-2 parcels. Extend utilities. Grade and clear.',
        sav:'I-2 zoning already in place — no rezoning battles. City-owned parcels reduce land acquisition cost.'},
    ],
    markers: [
      {c:[37.800,-96.876],col:'#7B5EA7',e:'🖥️',t:'Project Horizon — Data Center Campus',d:'300-acre hyperscale site on existing industrial-zoned US-54 corridor land. Evergy substation expansion ready.',ty:'★ New Construction'},
      {c:[37.789,-96.852],col:'#1B3A5C',e:'🛩️',t:'Aerospace Supply Chain Campus',d:'Tier-2 aerospace mfg, composite materials, MRO. Existing I-2 zone adjacent to EQA runway.',ty:'★ New — Existing Zone'},
      {c:[37.810,-96.890],col:'#A63D2F',e:'🛣️',t:'US-54 Commerce Zone',d:'Highway commercial zone — existing hotels, logistics, truck services. Targeted for densification.',ty:'⟳ Improve Existing Zone'},
    ],
    legend: {
      title: 'South Industrial Corridor & Airport',
      sections: [
        { head: 'Existing Industrial Infrastructure', entries: [
          { type:'existing', label:'El Dorado Airport EQA (Active)', sub:'Existing runway, FBO, fuel · Valued at $8M+ in sunk infrastructure' },
          { type:'existing', label:'I-2 Heavy Industrial Zone', sub:'HF Sinclair Refinery (op. since 1917) · Union Tank Car (UTLX expansion)' },
        ]},
        { head: 'Proposed South Corridor Projects', entries: [
          { type:'dot', color:'#7B5EA7', label:'Project Horizon — Data Center Campus', sub:'300 acres · Hyperscale · Under public discussion at City Commission' },
          { type:'dot', color:'#1B3A5C', label:'Aerospace Supply Chain Campus', sub:'Tier-2 aerospace mfg, MRO · Adjacent to EQA runway · I-2 zoned' },
          { type:'dot', color:'#A63D2F', label:'US-54 Commerce Zone Densification', sub:'Existing highway commercial · Hotels, logistics, truck services' },
        ]},
        { head: 'Site Requirements Already Met Here', entries: [
          { type:'phase', color:'#2E6E35', num:'✓', label:'10M GPD Award-Winning Water Supply', sub:'"Best Tasting Water in Kansas" · Critical for data center cooling' },
          { type:'phase', color:'#2E6E35', num:'✓', label:'I-2 Heavy Industrial Zoning In Place', sub:'No rezoning required · Shovel-ready after B.A.S.E. grant site prep' },
          { type:'phase', color:'#2E6E35', num:'✓', label:'Evergy Substation Expansion-Ready', sub:'Power capacity sufficient for hyperscale data center load' },
        ]},
        { head: 'Funding Mechanisms', entries: [
          { type:'phase', color:'#4A90BF', num:'90%', label:'FAA AIP — Airport Improvements', sub:'Runway extension, ILS approach, T-hangars · 90% federal' },
          { type:'phase', color:'#4A90BF', num:'80%', label:'EDA Public Works — Industrial Site Prep', sub:'Up to 80% federal cost share on shovel-ready infrastructure' },
          { type:'phase', color:'#7B5EA7', num:'KS', label:'SB 98 — Kansas Data Center Tax Exemption', sub:'Full state sales tax exemption on qualifying equipment purchases (signed April 2025, eff. July 2025)' },
        ]},
      ],
    },
  },

  'map-surrounding-region': {
    center: [37.90,-96.90], zoom: 8,
    existing: [
      {c:[37.8176,-96.8619],e:'⭐',t:'El Dorado, KS — Regional Hub',
        cur:'Pop. ~12,694 · Butler County seat · I-35/Turnpike (Exit 71/76), US-54, US-77 intersection · 29 mi east of Wichita',
        imp:'Vision 2040: Transform El Dorado into the regional hub for logistics, tourism, aerospace supply chain, and Flint Hills gateway services.',
        sav:'Four-highway nexus position (I-35/Turnpike + US-54/US-400 + US-77) is a rare advantage for a city of 12,500. US-54 connects directly to Wichita\'s K-254 Kellogg Expressway — a seamless 29-mile corridor.'},
      {c:[37.6951,-97.3372],e:'✈️',t:'Wichita — Air Capital of the World',
        cur:'Pop. 400,000+ · Sedgwick County seat · Boeing Wichita Structures (formerly Spirit AeroSystems, reacquired Dec 8, 2025), Textron Aviation (Cessna/Beechcraft), Bombardier (U.S. HQ since 2022, 1.3M sq ft) · 30,000+ aerospace jobs',
        imp:'El Dorado\'s primary market: aerospace supply chain satellite, business aviation overflow, workforce source, and MSA spillover residential market.',
        sav:'At 29 miles, El Dorado offers Wichita-proximity at 30-50% lower land and operating costs.'},
      {c:[38.047,-97.346],e:'🏙️',t:'Newton, KS — Amtrak Southwest Chief',
        cur:'Harvey County seat · Amtrak Southwest Chief stop · AGCO Corporation largest employer · GAF $300M+ shingle plant under construction',
        imp:'Amtrak Thruway connector: Newton → Augusta → El Dorado places El Dorado on the national rail network.',
        sav:'Newton\'s I-135 connection + Kansas Logistics Park creates supply-chain partnership opportunities for El Dorado manufacturers.'},
      {c:[38.380,-96.553],e:'🌾',t:'Cottonwood Falls — Flint Hills Gateway',
        cur:'Chase County seat · Near Tallgrass Prairie National Preserve (11,000 acres, 29,000+ annual visitors) · Flint Hills Scenic Byway (K-177)',
        imp:'El Dorado as southern gateway for Flint Hills tourism: lodging, dining, and lake recreation hub for Byway travelers.',
        sav:'Zero hotels near the Byway southern terminus — El Dorado captures overflow accommodation demand today.'},
      {c:[38.393,-96.568],e:'🌿',t:'Tallgrass Prairie National Preserve',
        cur:'11,000 acres in Chase County · 29,000+ annual visitors · Active bison herd · NPS and Nature Conservancy management',
        imp:'Tourism cross-marketing: Tallgrass Prairie + El Dorado Lake creates a multi-day regional itinerary for nature travelers.',
        sav:''},
      {c:[38.050,-96.600],e:'🛣️',t:'Flint Hills National Scenic Byway (K-177)',
        cur:'47.2 miles · Council Grove to Cassoday · Designated National Scenic Byway · Traverses largest remaining tallgrass prairie in North America',
        imp:'Southern terminus near Cassoday is ~20 miles from El Dorado — position El Dorado as the Byway\'s base camp.',
        sav:''},
      {c:[38.4094,-96.1814],e:'🎓',t:'Emporia State University',
        cur:'Emporia, KS · 60 miles north of El Dorado via I-35 · 200+ academic programs · Lyon County economic anchor',
        imp:'Graduate workforce pipeline for El Dorado employers; I-35 corridor economic development coalition; potential satellite program delivery.',
        sav:''},
    ],
    markers: [
      {c:[37.8176,-96.8619],col:'#C8902A',e:'⭐',t:'El Dorado — The Hub',
        d:'I-35/Turnpike (Exit 71/76) + US-54 + US-77 converge here. Four-highway intersection, 29 miles east of Wichita. El Dorado is an interstate city that doesn\'t yet market itself as one.',
        ty:'★ Regional Strategy Focus'},
      {c:[37.770,-96.8619],col:'#4A90BF',e:'🚀',t:'I-35 Logistics Corridor Site',
        d:'Proposed 60-acre shovel-ready I-35 corridor distribution/logistics park. Target: 3PL operators, regional distribution, aerospace component warehousing. Wichita FTZ inclusion provides duty advantages.',
        ty:'★ Proposed Development'},
      {c:[37.553,-96.641],col:'#2E6E35',e:'🌾',t:'Cassoday — Flint Hills Byway South End',
        d:'Cassoday is the southern terminus of the Flint Hills National Scenic Byway (K-177). Only 20-25 miles from El Dorado. Position El Dorado as the base camp for Byway travelers.',
        ty:'★ Tourism Corridor Anchor'},
    ],
    polylines: [
      {co:[[37.000,-97.280],[37.650,-97.363],[37.720,-97.280],[37.790,-97.020],[37.820,-96.862],[38.050,-96.580],[38.408,-96.193],[38.900,-95.260]],s:{color:'#4A90BF',weight:4,opacity:.65},p:'<b>I-35 / Kansas Turnpike</b> — Oklahoma City (185 mi S) → Wichita (29 mi SW) → El Dorado (Exits 71 &amp; 76) → Emporia → Kansas City (171 mi N). One of North America\'s most critical logistics corridors.'},
      {co:[[37.817,-97.500],[37.817,-96.400]],s:{color:'#C8902A',weight:3,opacity:.55,dashArray:'8 5'},p:'<b>US-54 / US-400</b> — East–west corridor through El Dorado. Wichita metro to the west; Iola and Fort Scott to the east.'},
      {co:[[38.700,-96.862],[37.400,-96.862]],s:{color:'#C8902A',weight:2.5,opacity:.45,dashArray:'6 5'},p:'<b>US-77</b> — North–south through El Dorado. Newton/Harvey County to north; Arkansas City/Cowley County to south.'},
      {co:[[37.820,-96.862],[37.820,-97.340]],s:{color:'#2E6E35',weight:2.5,opacity:.5,dashArray:'6 5'},p:'<b>US-54 / US-400</b> — Direct 29-mile route from El Dorado to downtown Wichita via the Kellogg Expressway (K-254). Fastest El Dorado–Wichita connection.'},
      {co:[[37.553,-96.641],[37.900,-96.600],[38.380,-96.553],[38.681,-96.492]],s:{color:'#2E6E35',weight:2.5,opacity:.5,dashArray:'8 4'},p:'<b>K-177 — Flint Hills National Scenic Byway</b> — 47.2 miles from Cassoday (20 mi from El Dorado) to Council Grove. Designated National Scenic Byway traversing North America\'s largest tallgrass prairie remnant.'},
    ],
    legend: {
      title: 'Regional Context — El Dorado\'s Position',
      sections: [
        { head: 'Regional Anchor Cities', entries: [
          { type:'existing', label:'El Dorado — Butler County Seat (⭐)', sub:'Pop. 12,694 · I-35/Turnpike Exits 71/76 + US-54/US-400 + US-77' },
          { type:'existing', label:'Wichita — Wichita Metro (29 mi SW)', sub:'Pop. 400K+ · ICT Airport · 30,000+ aerospace jobs · Primary market' },
          { type:'existing', label:'Newton — Amtrak Southwest Chief stop', sub:'Harvey Co. · AGCO · GAF plant · Amtrak Thruway connector target' },
          { type:'existing', label:'Cottonwood Falls — Flint Hills Gateway', sub:'Chase Co. · Near Tallgrass Prairie National Preserve (29K visits/yr)' },
        ]},
        { head: 'El Dorado Development Targets', entries: [
          { type:'dot', color:'#C8902A', label:'El Dorado as Regional Hub', sub:'3-highway convergence: I-35/Turnpike + US-54/US-400 + US-77 — rare for a city of 12,500' },
          { type:'dot', color:'#4A90BF', label:'I-35 Logistics Corridor Site', sub:'60-acre shovel-ready distribution park targeting 3PL operators' },
          { type:'dot', color:'#2E6E35', label:'Cassoday — Flint Hills Byway South End', sub:'~20 miles from El Dorado · Base camp for Byway travelers' },
        ]},
        { head: 'Highway Corridors (click for details)', entries: [
          { type:'line', color:'#4A90BF', dash:false, label:'I-35 / Kansas Turnpike', sub:'Kansas City 171 mi N · Wichita 29 mi SW · OKC 185 mi S · El Dorado Exits 71 & 76' },
          { type:'line', color:'#C8902A', dash:true, label:'US-54 / US-400', sub:'East-West · Wichita metro ↔ El Dorado ↔ Fort Scott' },
          { type:'line', color:'#C8902A', dash:true, label:'US-77', sub:'North-South · Newton ↔ El Dorado ↔ Arkansas City' },
          { type:'line', color:'#2E6E35', dash:true, label:'US-54 → K-254 (Kellogg Expy)', sub:'Direct 29-mile El Dorado → Wichita · Fastest connection' },
          { type:'line', color:'#2E6E35', dash:true, label:'K-177 — Flint Hills National Scenic Byway', sub:'47.2 miles · Cassoday to Council Grove · National designation' },
        ]},
        { head: 'El Dorado\'s Regional Advantages', entries: [
          { type:'phase', color:'#C8902A', num:'4', label:'Four Highway Corridors Converge Here', sub:'Rare for a city of 12,900 — most peers have 1-2 corridors' },
          { type:'phase', color:'#2E6E35', num:'29', label:'29 Miles from Wichita City Center via US-54', sub:'Close enough to commute · far enough to afford land & housing' },
          { type:'phase', color:'#4A90BF', num:'OZ', label:'Federal Opportunity Zone — Downtown Tract', sub:'2017 TCJA designation · capital gains incentive for qualifying investments' },
        ]},
      ],
    },
  },

  'map-butler-county': {
    center: [37.74,-96.97], zoom: 10,
    existing: [
      {c:[37.8176,-96.8619],e:'⭐',t:'El Dorado — Butler County Seat',
        cur:'Pop. ~12,870 · County seat · commercial and civic hub for 70,000+ county residents',
        imp:'Vision 2040: grow to 18,500+ by 2040 through industry, lake tourism, and residential development.',
        sav:'El Dorado uniquely owns the water rights to El Dorado Lake — the only city-owned storage in a major Corps of Engineers reservoir.'},
      {c:[37.6906,-97.0579],e:'🏙️',t:'Augusta — Western Butler County',
        cur:'Pop. ~9,300 · Home of the Augusta Balloon Festival · BCRTA headquarters',
        imp:'Joint US-54 Commerce Corridor partner · shared industrial site marketing · coordinated BCRTA transit hub.',
        sav:'Augusta–El Dorado combined labor market of 22,000+ is more competitive to regional site selectors than either city acting alone.'},
      {c:[37.7059,-97.1376],e:'🏘️',t:'Andover — Most Populous City in Butler County',
        cur:'Most populous city in Butler County · fast-growing Wichita suburb · straddles Butler/Sedgwick county line',
        imp:'Model for El Dorado\'s North Gateway District: proves regional market demand for quality suburban housing 25+ miles from downtown Wichita.',
        sav:'Andover\'s growth trajectory validates the housing demand El Dorado can capture with improved amenities and residential investment.'},
      {c:[37.7984,-97.0065],e:'🌾',t:'Towanda — Northern Butler County',
        cur:'Small community north of El Dorado · relies on El Dorado for services and employment',
        imp:'BCRTA Phase 2 north-county extension priority: connect residents to El Dorado transit hub.',
        sav:''},
      {c:[37.6921,-96.7845],e:'🌾',t:'Leon — Eastern Butler County',
        cur:'Rural agricultural community near the Flint Hills · limited broadband connectivity',
        imp:'BEAD broadband spine extension candidate · Flint Hills agritourism corridor connection.',
        sav:''},
    ],
    markers: [
      {c:[37.8500,-96.8000],col:'#4A90BF',e:'💧',t:'El Dorado Lake — City-Owned Water Supply',
        d:'8,400-acre reservoir · 50+ billion gallons storage · 23M gal/day regional supply capacity · 50-year drought resilience. El Dorado holds unique ownership — only city in Kansas to contract directly with the US Army Corps of Engineers for raw water supply.',
        ty:'★ City-Owned Regional Asset'},
      {c:[37.8132,-96.8650],col:'#2E6E35',e:'🎓',t:'Butler Community College — Main Campus',
        d:'2nd-largest community college in Kansas · ~6,800 students (2024) · $46M annual county economic impact · $2.88 returned per $1 invested · 7 satellite locations across south-central KS.',
        ty:'★ County-Wide Economic Engine'},
      {c:[37.8220,-96.8590],col:'#A63D2F',e:'🏥',t:'Susan B. Allen Memorial Hospital',
        d:'Butler County\'s only inpatient hospital · serving 70,000+ county residents · Regional healthcare hub expansion is a county-scale infrastructure investment.',
        ty:'⟳ Regional Healthcare Anchor'},
      {c:[37.7680,-96.8619],col:'#C8902A',e:'🚌',t:'BCRTA — Butler County Regional Transit',
        d:'Existing county transit authority connecting El Dorado, Augusta, Andover, and Wichita (Mon–Fri). Vision 2040 proposes El Dorado US-54/77 Park-and-Ride as the network hub for major service expansion.',
        ty:'⟳ Expand Existing System'},
    ],
    polylines: [
      {co:[[37.817,-97.250],[37.817,-96.670]],s:{color:'#4A90BF',weight:3,opacity:.55,dashArray:'8 5'},p:'<b>US-54 / US-400</b> — Butler County economic spine · Wichita to El Dorado · KDOT Environmental Assessment underway near Andover'},
      {co:[[37.980,-96.862],[37.600,-96.862]],s:{color:'#C8902A',weight:3,opacity:.5,dashArray:'8 5'},p:'<b>US-77</b> — North–south industrial freight corridor through El Dorado'},
    ],
    legend: {
      title: 'Butler County Context — El Dorado as Hub',
      sections: [
        { head: 'Butler County Communities', entries: [
          { type:'existing', label:'El Dorado — County Seat (⭐)', sub:'Pop. 12,694 · Healthcare, courts, education hub for 70K+ county residents' },
          { type:'existing', label:'Augusta — Western Butler County', sub:'Pop. ~9,300 · Augusta Balloon Festival · BCRTA HQ · US-54 corridor' },
          { type:'existing', label:'Andover — Most Populous City', sub:'Fastest-growing · Wichita suburb straddles Butler/Sedgwick county line' },
          { type:'existing', label:'Towanda & Leon — Rural Communities', sub:'Rely on El Dorado for services · Broadband expansion targets' },
        ]},
        { head: 'County-Scale Assets (El Dorado-Owned or Anchored)', entries: [
          { type:'dot', color:'#4A90BF', label:'El Dorado Lake — City-Owned', sub:'8,400 acres · #1 most-visited KS state park · 50B+ gallon water storage' },
          { type:'dot', color:'#2E6E35', label:'Butler Community College', sub:'2nd-largest CC in KS · ~6,800 students (2024) · $46M annual county economic impact' },
          { type:'dot', color:'#A63D2F', label:'Susan B. Allen Memorial Hospital', sub:'Only inpatient hospital in Butler County · Serving 70,000+ county residents' },
          { type:'dot', color:'#C8902A', label:'BCRTA Transit Hub (Proposed)', sub:'US-54/77 Park-and-Ride · County-wide transit network hub expansion' },
        ]},
        { head: 'County Transportation Corridors', entries: [
          { type:'line', color:'#4A90BF', dash:true, label:'US-54 — County Economic Spine', sub:'Wichita ↔ Augusta ↔ El Dorado · KDOT Environmental Assessment underway' },
          { type:'line', color:'#C8902A', dash:true, label:'US-77 — North-South Freight', sub:'Industrial corridor through El Dorado connecting Newton to Ark City' },
        ]},
        { head: 'Why El Dorado Leads Butler County', entries: [
          { type:'phase', color:'#1B3A5C', num:'100%', label:'El Dorado Holds the Water Rights', sub:'Only city-owned storage in a major Corps of Engineers reservoir in KS' },
          { type:'phase', color:'#2E6E35', num:'1927', label:'Butler CC Founded in El Dorado', sub:'College ties to El Dorado are foundational — not incidental' },
          { type:'phase', color:'#C8902A', num:'MOU', label:'County MOU — 1st-Year Priority', sub:'Formal agreement on EMS, roads, parks, TIF + STAR Bond support' },
        ]},
      ],
    },
  },
};

/* ══════════════════════════════════
   MAP INITIALIZATION
══════════════════════════════════ */
const initializedMaps = {};
const mapObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting && !initializedMaps[target.id] && MAP_DEFS[target.id]) initMap(target.id);
  });
}, { threshold: 0.1 });
Object.keys(MAP_DEFS).forEach(id => { const el = document.getElementById(id); if (el) mapObserver.observe(el); });

function initMap(id) {
  if (initializedMaps[id]) return;
  const cfg = MAP_DEFS[id];

  const voyager   = VOYAGER();
  const satellite = SATELLITE();
  const satLabels = SAT_LABELS();

  const map = L.map(id, {
    scrollWheelZoom: false,
    tap: true,
    preferCanvas: false,
  }).setView(cfg.center, cfg.zoom);

  voyager.addTo(map);

  /* Scale bar */
  L.control.scale({ imperial: true, metric: false, position: 'bottomright' }).addTo(map);

  /* Fullscreen */
  addFullscreen(map);

  /* Existing infrastructure layer */
  const existingLayer = L.layerGroup();
  (cfg.existing || []).forEach(m => {
    L.marker(m.c, { icon: makeExistingIcon(m.e) })
      .bindPopup(phEx(m.t, m.cur, m.imp, m.sav), { maxWidth: 320, className: 'v40-popup' })
      .addTo(existingLayer);
  });
  existingLayer.addTo(map);

  /* Proposed projects layer */
  const proposedLayer = L.layerGroup();
  (cfg.markers || []).forEach(m => {
    L.marker(m.c, { icon: makeIcon(m.col, m.e) })
      .bindPopup(ph(m.t, m.d, m.ty, m.col), { maxWidth: 300, className: 'v40-popup' })
      .addTo(proposedLayer);
  });
  proposedLayer.addTo(map);

  /* Auto-fit bounds to markers if available */
  const allPts = [
    ...(cfg.existing || []).map(m => m.c),
    ...(cfg.markers  || []).map(m => m.c),
  ];
  if (allPts.length > 1) {
    map.fitBounds(allPts, { padding: [40, 40], maxZoom: cfg.zoom });
  }

  /* Polylines */
  (cfg.polylines || []).forEach(p => {
    const pl = L.polyline(p.co, p.s).addTo(map);
    if (p.p) pl.bindPopup(p.p, { className: 'v40-popup' });
  });

  /* Base layer + overlay toggle */
  const baseLayers = {
    '🗺️ Map': voyager,
    '🛰️ Satellite': satellite,
  };
  const overlayMap = {
    '<span class="lc-exist-icon"></span> Existing Infrastructure': existingLayer,
    '<span class="lc-new-icon"></span> Proposed Projects': proposedLayer,
  };
  L.control.layers(baseLayers, overlayMap, { position: 'topright', collapsed: false }).addTo(map);

  /* Switch satellite label overlay when tile changes */
  map.on('baselayerchange', e => {
    if (e.name === '🛰️ Satellite') satLabels.addTo(map);
    else map.removeLayer(satLabels);
  });

  /* Rich legend panel */
  buildLegend(cfg.legend, map);

  initializedMaps[id] = map;
}

/* ══════════════════════════════════
   ZONING & PLANNING MAP
══════════════════════════════════ */
const zoningEl = document.getElementById('map-zoning');
if (zoningEl) {
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting) { initZoningMap(); obs.unobserve(e.target); }
  }, { threshold: 0.05 }).observe(zoningEl);
}

function initZoningMap() {
  if (initializedMaps['map-zoning']) return;
  const vzMap   = VOYAGER();
  const satMap  = SATELLITE();
  const satLbl  = SAT_LABELS();
  const map = L.map('map-zoning', { scrollWheelZoom: false, tap: true })
    .setView([37.820,-96.862], 13);
  vzMap.addTo(map);
  L.control.scale({ imperial: true, metric: false, position: 'bottomright' }).addTo(map);
  addFullscreen(map);
  map.on('baselayerchange', e => {
    if (e.name === '🛰️ Satellite') satLbl.addTo(map);
    else map.removeLayer(satLbl);
  });

  /* ── Existing Zoning Polygons ── */
  const zonePolys = L.layerGroup();
  const zones = [
    { name:'R-1  Single-Family Residential', color:'#FFF176', coords:[
        [[37.826,-96.895],[37.826,-96.870],[37.812,-96.870],[37.812,-96.895]],
        [[37.826,-96.830],[37.826,-96.808],[37.808,-96.808],[37.808,-96.830]],
        [[37.812,-96.895],[37.812,-96.808],[37.788,-96.808],[37.788,-96.895]],
        [[37.848,-96.855],[37.848,-96.830],[37.826,-96.830],[37.826,-96.855]],
    ]},
    { name:'R-2 / R-3  Multi-Family Residential', color:'#FFB74D', coords:[
        [[37.822,-96.870],[37.822,-96.854],[37.812,-96.854],[37.812,-96.870]],
        [[37.826,-96.855],[37.826,-96.845],[37.818,-96.845],[37.818,-96.855]],
    ]},
    { name:'C-2  General Commercial (Downtown)', color:'#64B5F6', coords:[
        [[37.826,-96.870],[37.826,-96.853],[37.812,-96.853],[37.812,-96.870]],
    ]},
    { name:'C-1  Highway Commercial', color:'#4DD0E1', coords:[
        [[37.820,-96.902],[37.820,-96.870],[37.813,-96.870],[37.813,-96.902]],
        [[37.820,-96.853],[37.820,-96.820],[37.813,-96.820],[37.813,-96.853]],
        [[37.848,-96.868],[37.848,-96.854],[37.826,-96.854],[37.826,-96.868]],
    ]},
    { name:'I-1  Light Industrial', color:'#CE93D8', coords:[
        [[37.855,-96.892],[37.855,-96.858],[37.838,-96.858],[37.838,-96.892]],
    ]},
    { name:'I-2  Heavy Industrial / Airport', color:'#9C27B0', coords:[
        [[37.802,-96.885],[37.802,-96.808],[37.774,-96.808],[37.774,-96.885]],
    ]},
    { name:'AG  Agricultural / Rural', color:'#C8E6C9', coords:[
        [[37.870,-96.920],[37.870,-96.808],[37.855,-96.808],[37.855,-96.920]],
        [[37.788,-96.920],[37.788,-96.808],[37.774,-96.808],[37.774,-96.920]],
        [[37.870,-96.920],[37.774,-96.920],[37.774,-96.940],[37.870,-96.940]],
    ]},
  ];
  zones.forEach(z => {
    z.coords.forEach(ring => {
      L.polygon(ring, { fillColor:z.color, fillOpacity:.45, color:z.color, weight:1.5, opacity:.7 })
        .bindTooltip(z.name, { sticky: true })
        .addTo(zonePolys);
    });
  });

  /* ── FEMA Flood Zones ── */
  const femaFlood = L.tileLayer.wms(
    'https://hazards.fema.gov/gis/nfhl/services/public/NFHLWMS/MapServer/WMSServer', {
    layers: '28', format: 'image/png', transparent: true,
    opacity: 0.55, version: '1.3.0',
    attribution: '<a href="https://www.fema.gov/flood-maps">FEMA NFHL</a>',
  });

  const floodLocal = L.layerGroup();
  const riverPath = [[37.800,-96.857],[37.810,-96.852],[37.820,-96.847],[37.826,-96.840],[37.830,-96.830],[37.833,-96.820]];
  L.polyline(riverPath, { color:'#1565C0', weight:3, opacity:.7 }).addTo(floodLocal)
    .bindPopup('<b>Walnut River</b><br>Primary flood corridor through El Dorado.');
  L.polygon([
    [37.798,-96.865],[37.808,-96.858],[37.820,-96.852],[37.826,-96.845],[37.832,-96.825],[37.835,-96.812],
    [37.832,-96.808],[37.826,-96.835],[37.820,-96.843],[37.808,-96.850],[37.797,-96.856],
  ], { fillColor:'#1565C0', fillOpacity:.2, color:'#1565C0', weight:1.5, dashArray:'4 3' })
    .bindTooltip('Zone AE — 100-yr Floodplain (approx.)', { sticky: true })
    .addTo(floodLocal);
  L.polygon([
    [37.796,-96.870],[37.808,-96.863],[37.820,-96.856],[37.827,-96.848],[37.834,-96.820],[37.836,-96.808],
    [37.834,-96.806],[37.827,-96.840],[37.820,-96.848],[37.808,-96.855],[37.795,-96.865],
  ], { fillColor:'#42A5F5', fillOpacity:.12, color:'#42A5F5', weight:1, dashArray:'6 4' })
    .bindTooltip('Zone X — 500-yr Floodplain (approx.)', { sticky: true })
    .addTo(floodLocal);

  const floodGroup = L.layerGroup([femaFlood, floodLocal]);

  /* ── Proposed Improvement Zones ── */
  const improvGroup = L.layerGroup();
  const improvs = [
    { name:'North Gateway Development Zone', color:'#2E6E35', coords:[[37.838,-96.875],[37.838,-96.808],[37.868,-96.808],[37.868,-96.875]]},
    { name:'Downtown TIF District', color:'#1B3A5C', coords:[[37.828,-96.873],[37.828,-96.850],[37.808,-96.850],[37.808,-96.873]]},
    { name:'Project Horizon — Data Center Campus', color:'#7B5EA7', coords:[[37.808,-96.905],[37.808,-96.858],[37.792,-96.858],[37.792,-96.905]]},
    { name:'Flint Hills Renewable Energy Corridor', color:'#C8902A', coords:[[37.862,-96.905],[37.862,-96.858],[37.838,-96.858],[37.838,-96.905]]},
    { name:'Lake Recreation District', color:'#4A90BF', coords:[[37.828,-96.822],[37.828,-96.760],[37.902,-96.760],[37.902,-96.822]]},
    { name:'South Aerospace Campus Zone', color:'#A63D2F', coords:[[37.805,-96.870],[37.805,-96.825],[37.783,-96.825],[37.783,-96.870]]},
  ];
  improvs.forEach(z => {
    L.polygon(z.coords, { fill: false, color: z.color, weight: 3, dashArray:'12 6', opacity:.9 })
      .bindTooltip('⭐ ' + z.name, { sticky: true })
      .addTo(improvGroup);
    L.polygon(z.coords, { fillColor: z.color, fillOpacity:.06, color:'transparent', weight:0 }).addTo(improvGroup);
  });

  /* ── Existing infrastructure on zoning map ── */
  const existingLayer = L.layerGroup();
  [
    {c:[37.813,-96.853],e:'🏊',t:'Municipal Pool (Existing)'},
    {c:[37.830,-96.857],e:'⚾',t:'Athletic Complex (Existing)'},
    {c:[37.824,-96.841],e:'⛳',t:'El Dorado Golf Club (Existing)'},
    {c:[37.820,-96.871],e:'🏥',t:'Susan B. Allen Memorial Hospital (Existing)'},
    {c:[37.843,-96.857],e:'🎓',t:'Butler CC Main Campus (Existing)'},
    {c:[37.818,-96.863],e:'🚒',t:'Fire Station No. 1 (Existing)'},
    {c:[37.822,-96.863],e:'🛢️',t:'Kansas Oil Museum (Existing)'},
    {c:[37.774,-96.818],e:'✈️',t:'El Dorado Airport EQA (Existing)'},
    {c:[37.843,-96.803],e:'⚓',t:'East Marina (Existing)'},
    {c:[37.843,-96.882],e:'🏭',t:'HF Sinclair Refinery (Existing)'},
  ].forEach(m => {
    L.marker(m.c, { icon: makeExistingIcon(m.e) })
      .bindTooltip(m.t, { permanent: false, sticky: true })
      .addTo(existingLayer);
  });

  zonePolys.addTo(map);
  floodGroup.addTo(map);
  improvGroup.addTo(map);
  existingLayer.addTo(map);

  L.control.layers(
    { '🗺️ Map': vzMap, '🛰️ Satellite': satMap },
    {
      'Existing Zoning': zonePolys,
      'Flood Zones (FEMA + local)': floodGroup,
      'Proposed Improvement Zones': improvGroup,
      '<span class="lc-exist-icon"></span> Existing Infrastructure': existingLayer,
    },
    { position:'topright', collapsed: false }
  ).addTo(map);

  [
    {c:[37.818,-96.862],col:'#1B3A5C',e:'🏛️',t:'Downtown TIF District',d:'Tax Increment Financing district. New increment from development repays infrastructure bonds — no mill levy increase.',ty:'TIF Zone'},
    {c:[37.852,-96.848],col:'#2E6E35',e:'🏡',t:'North Gateway District',d:'New mixed-use neighborhood on agricultural land north of city.',ty:'Development Zone'},
    {c:[37.800,-96.880],col:'#7B5EA7',e:'🖥️',t:'Project Horizon Site',d:'Under city commission discussion. 300 acres, US-54 corridor. Existing I-2 zone.',ty:'Proposed'},
    {c:[37.843,-96.878],col:'#C8902A',e:'⚡',t:'Renewable Energy Corridor',d:'500-acre renewable energy industrial park on existing industrial-zoned land.',ty:'Proposed'},
    {c:[37.862,-96.796],col:'#4A90BF',e:'🌊',t:'Lake Recreation District',d:'El Dorado Lake and surrounding corridor — tourism and recreation development district.',ty:'Recreation Zone'},
  ].forEach(m => L.marker(m.c, {icon: makeIcon(m.col, m.e)}).bindPopup(ph(m.t, m.d, m.ty, m.col), {maxWidth:290, className:'v40-popup'}).addTo(map));

  /* Zoning map rich legend */
  buildLegend({
    title: 'El Dorado Zoning & Planning Map',
    sections: [
      { head: 'Existing Zoning Districts (Polygons)', entries: [
        { type:'fill', color:'#FFF176', label:'R-1  Single-Family Residential', sub:'Primary residential neighborhoods citywide' },
        { type:'fill', color:'#FFB74D', label:'R-2 / R-3  Multi-Family Residential', sub:'Apartment buildings, townhomes, duplexes' },
        { type:'fill', color:'#64B5F6', label:'C-2  General Commercial (Downtown)', sub:'Central Avenue core · Retail, office, mixed-use' },
        { type:'fill', color:'#4DD0E1', label:'C-1  Highway Commercial', sub:'US-54 and US-77 corridor retail & services' },
        { type:'fill', color:'#CE93D8', label:'I-1  Light Industrial', sub:'Warehouse, distribution, light manufacturing' },
        { type:'fill', color:'#9C27B0', label:'I-2  Heavy Industrial / Airport', sub:'HF Sinclair · UTLX · EQA Airport · Data center site' },
        { type:'fill', color:'#C8E6C9', label:'AG  Agricultural / Rural', sub:'Undeveloped land · North Gateway development target' },
      ]},
      { head: 'Flood Hazard Zones (FEMA)', entries: [
        { type:'fill', color:'#1565C0', label:'Zone AE — 100-Year Floodplain', sub:'Walnut River corridor · Mandatory flood insurance zone' },
        { type:'fill', color:'#42A5F5', label:'Zone X — 500-Year Floodplain', sub:'Lower flood risk · No mandatory insurance' },
      ]},
      { head: 'Proposed Vision 2040 Improvement Zones (Dashed Outlines)', entries: [
        { type:'dot', color:'#2E6E35', label:'North Gateway Development Zone', sub:'New mixed-use district on AG land north of city' },
        { type:'dot', color:'#1B3A5C', label:'Downtown TIF District', sub:'Tax Increment Financing · Property tax increment reinvested locally' },
        { type:'dot', color:'#7B5EA7', label:'Project Horizon — Data Center Campus', sub:'300 acres · Under city commission discussion · I-2 zone' },
        { type:'dot', color:'#C8902A', label:'Flint Hills Energy Corridor', sub:'500 acres · Renewable energy industrial park' },
        { type:'dot', color:'#4A90BF', label:'Lake Recreation District', sub:'El Dorado Lake + surrounding commercial corridor' },
        { type:'dot', color:'#A63D2F', label:'South Aerospace Campus Zone', sub:'Adjacent to EQA airport · I-2 zone · Tier-2 aerospace' },
      ]},
      { head: 'Existing Infrastructure Markers', entries: [
        { type:'existing', label:'Key Municipal Facilities', sub:'Pool, athletic complex, golf course, hospital, Butler CC, fire station, oil museum, airport, marina, refinery' },
      ]},
      { note:'Zoning polygons are approximate. Consult official City of El Dorado zoning map and FEMA FIRM panels for regulatory determinations.' },
    ],
  }, map);

  initializedMaps['map-zoning'] = map;
}

/* ══════════════════════════════════
   HOUSING ASSESSMENT CHARTS
══════════════════════════════════ */
const haSection = document.getElementById('housing-assessment');
if (haSection) {
  let haInit = false;
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting && !haInit) {
      haInit = true;
      obs.unobserve(e.target);

      makeChart('chart-ha-age', {
        type: 'bar',
        data: {
          labels: ['Pre-1940','1940–59','1960–79','1980–99','2000–09','2010–19','2020+'],
          datasets: [
            { label: 'Occupied', data: [1280, 1650, 1190, 855, 358, 28, 10],
              backgroundColor: 'rgba(74,144,191,.8)', borderRadius: 3 },
            { label: 'Vacant',   data: [165, 145, 112, 97, 52, 10, 10],
              backgroundColor: 'rgba(200,144,42,.75)', borderRadius: 3 },
          ],
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: { legend: { position: 'top', labels: { color: 'rgba(255,255,255,.75)', font: { size: 11 } } } },
          scales: {
            x: { stacked: true, ticks: { color: 'rgba(255,255,255,.5)' }, grid: { color: 'rgba(255,255,255,.07)' } },
            y: { stacked: true, ticks: { color: 'rgba(255,255,255,.5)', callback: v => v.toLocaleString() }, grid: { color: 'rgba(255,255,255,.07)' }, beginAtZero: true },
          },
        },
      });

      makeChart('chart-ha-supply', {
        type: 'line',
        data: {
          labels: ['2011', '2016', '2021'],
          datasets: [
            { label: 'Population Index',     data: [100, 97, 97],
              borderColor: '#4ADE80', backgroundColor: 'rgba(74,222,128,.1)', fill: true, tension: 0.4, borderWidth: 2.5, pointRadius: 6, pointBackgroundColor: '#4ADE80' },
            { label: 'Housing Units Index',  data: [100, 101, 103],
              borderColor: '#C8902A', backgroundColor: 'rgba(200,144,42,.1)', fill: true, tension: 0.4, borderWidth: 2.5, pointRadius: 6, pointBackgroundColor: '#C8902A' },
          ],
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: { legend: { position: 'top', labels: { color: 'rgba(255,255,255,.75)', font: { size: 11 } } } },
          scales: {
            x: { ticks: { color: 'rgba(255,255,255,.5)' }, grid: { color: 'rgba(255,255,255,.07)' } },
            y: { ticks: { color: 'rgba(255,255,255,.5)', callback: v => v }, grid: { color: 'rgba(255,255,255,.07)' }, beginAtZero: false, min: 94, max: 107 },
          },
        },
      });

      makeChart('chart-ha-values', {
        type: 'line',
        data: {
          labels: ['2011', '2016', '2021'],
          datasets: [
            { label: 'Median Home Value Index',    data: [100, 100, 109],
              borderColor: '#4A90BF', backgroundColor: 'rgba(74,144,191,.12)', fill: true, tension: 0.3, borderWidth: 2.5, pointRadius: 6, pointBackgroundColor: '#4A90BF' },
            { label: 'Median Family Income Index', data: [100, 121, 145],
              borderColor: '#C8902A', backgroundColor: 'rgba(200,144,42,.12)', fill: true, tension: 0.3, borderWidth: 2.5, pointRadius: 6, pointBackgroundColor: '#C8902A' },
          ],
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: { legend: { position: 'top', labels: { color: 'rgba(255,255,255,.75)', font: { size: 11 } } } },
          scales: {
            x: { ticks: { color: 'rgba(255,255,255,.5)' }, grid: { color: 'rgba(255,255,255,.07)' } },
            y: { ticks: { color: 'rgba(255,255,255,.5)', callback: v => v }, grid: { color: 'rgba(255,255,255,.07)' }, beginAtZero: false, min: 90, max: 155 },
          },
        },
      });

      makeChart('chart-ha-rentburden', {
        type: 'bar',
        data: {
          labels: ['<10%', '10–15%', '15–20%', '20–25%', '25–30%', '30–35%', '35–40%', '40–50%', '50%+'],
          datasets: [{
            label: '% of Renters',
            data: [5, 9, 17, 8, 7, 10, 4, 2, 29],
            backgroundColor: [
              'rgba(74,222,128,.75)', 'rgba(74,222,128,.75)', 'rgba(74,222,128,.6)',
              'rgba(200,144,42,.7)', 'rgba(200,144,42,.7)',
              'rgba(224,112,112,.7)', 'rgba(224,112,112,.75)', 'rgba(224,112,112,.8)', 'rgba(224,112,112,.95)',
            ],
            borderRadius: 3,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: ctx => ctx.raw + '% of renters' } },
          },
          scales: {
            x: { ticks: { color: 'rgba(255,255,255,.5)', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,.07)' } },
            y: { ticks: { color: 'rgba(255,255,255,.5)', callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,.07)' }, beginAtZero: true },
          },
        },
      });
    }
  }, { threshold: 0.05 }).observe(haSection);
}

/* ══════════════════════════════════
   CHART.JS CHARTS
══════════════════════════════════ */
const chartsSection = document.getElementById('data-charts');
if (chartsSection) {
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting) { initCharts(); obs.unobserve(e.target); }
  }, { threshold: 0.05 }).observe(chartsSection);
}

/* Initialize demographics-section charts when that section enters view */
const demoSection = document.getElementById('demographics');
if (demoSection) {
  let demoChartsInit = false;
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting && !demoChartsInit) {
      demoChartsInit = true;
      obs.unobserve(e.target);
      makeChart('chart-pop-history', {
        type: 'line',
        data: {
          labels: ['2000','2005','2010','2015','2020','2024','2026','2028','2030','2032','2034','2036','2038','2040'],
          datasets: [
            { label:'Actual Population', data:[12057,12500,13021,12900,12870,12694,null,null,null,null,null,null,null,null],
              borderColor:'#80e89a', backgroundColor:'rgba(128,232,154,.15)', fill:true, tension:.3, borderWidth:2.5, pointRadius:5,
              pointBackgroundColor:'#80e89a', pointBorderColor:'#1a4d2a' },
            { label:'Vision 2040 Target', data:[null,null,null,null,null,12694,13200,13800,14700,15600,16400,17100,17700,18200],
              borderColor:'#C8902A', backgroundColor:'transparent', fill:false, tension:.3, borderWidth:2.5, borderDash:[6,3],
              pointRadius:4, pointBackgroundColor:'#C8902A' },
            { label:'Baseline (No Action)', data:[null,null,null,null,null,12694,12606,12518,12430,12342,12254,12166,12078,11990],
              borderColor:'#6B7280', backgroundColor:'transparent', fill:false, tension:.3, borderWidth:1.5, borderDash:[4,4],
              pointRadius:3, pointBackgroundColor:'#6B7280' },
          ],
        },
        options: {
          responsive:true, maintainAspectRatio:true,
          plugins:{ legend:{ position:'top', labels:{ color:'rgba(255,255,255,.75)', font:{size:11} } } },
          scales:{
            x:{ ticks:{ color:'rgba(255,255,255,.5)' }, grid:{ color:'rgba(255,255,255,.08)' } },
            y:{ ticks:{ color:'rgba(255,255,255,.5)', callback:v=>v.toLocaleString() }, grid:{ color:'rgba(255,255,255,.08)' }, beginAtZero:false },
          },
        },
      });
      makeChart('chart-edu-compare', {
        type: 'bar',
        data: {
          labels: ['Some HS (no diploma)','HS Diploma Only','Some College / Assoc.','Bachelor\'s Degree','Graduate Degree'],
          datasets: [
            { label:'El Dorado', data:[5.2,38.5,38.6,16.9,5.3], backgroundColor:'rgba(200,144,42,.85)', borderRadius:4 },
            { label:'Kansas Average', data:[8.6,29.2,28.3,33.4,13.8], backgroundColor:'rgba(74,144,191,.75)', borderRadius:4 },
          ],
        },
        options: {
          responsive:true, maintainAspectRatio:true, indexAxis:'y',
          plugins:{ legend:{ position:'top', labels:{ color:'rgba(255,255,255,.75)', font:{size:11} } } },
          scales:{
            x:{ ticks:{ color:'rgba(255,255,255,.5)', callback:v=>v+'%' }, grid:{ color:'rgba(255,255,255,.08)' } },
            y:{ ticks:{ color:'rgba(255,255,255,.6)', font:{size:10} }, grid:{ color:'rgba(255,255,255,.06)' } },
          },
        },
      });
    }
  }, { threshold: 0.05 }).observe(demoSection);
}

Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
Chart.defaults.color = '#6B7280';

function initCharts() {
  makeChart('chart-population', {
    type: 'line',
    data: {
      labels: ['2024','2026','2028','2030','2032','2034','2036','2038','2040'],
      datasets: [
        {
          label: 'Vision 2040 Plan',
          data: [12694,13200,13800,14700,15600,16400,17100,17700,18200],
          borderColor: '#C8902A', backgroundColor: 'rgba(200,144,42,.12)',
          fill: true, tension: 0.4, borderWidth: 3, pointRadius: 5, pointBackgroundColor: '#C8902A',
        },
        {
          label: 'Baseline (No Action, −1.1%/yr)',
          data: [12694,12606,12518,12430,12342,12254,12166,12078,11990],
          borderColor: '#9CA3AF', backgroundColor: 'rgba(156,163,175,.07)',
          fill: true, tension: 0.4, borderWidth: 2, borderDash: [6,3],
          pointRadius: 4, pointBackgroundColor: '#9CA3AF',
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { position:'top' }, tooltip: { callbacks: { label: ctx => ctx.dataset.label + ': ' + ctx.raw.toLocaleString() } } },
      scales: { y: { ticks: { callback: v => v.toLocaleString() }, beginAtZero: false } },
    },
  });

  makeChart('chart-investment', {
    type: 'bar',
    data: {
      labels: ['Phase 1\n2025–27','Phase 2\n2028–30','Phase 3\n2031–35','Phase 4\n2036–40'],
      datasets: [
        { label: 'Public Investment ($M)', data: [55, 110, 105, 50], backgroundColor: '#1B3A5C', borderRadius: 4 },
        { label: 'Private Investment ($M)', data: [25, 80, 200, 320], backgroundColor: '#C8902A', borderRadius: 4 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { position:'top' } },
      scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: v => '$' + v + 'M' } } },
    },
  });

  makeChart('chart-jobs', {
    type: 'doughnut',
    data: {
      labels: ['Renewable Energy','Data Center & Tech','Aerospace','Healthcare','Tourism & Hospitality','AgriTech','Construction','Small Business'],
      datasets: [{
        data: [350, 200, 200, 150, 130, 90, 80, 100],
        backgroundColor: ['#C8902A','#7B5EA7','#1B3A5C','#A63D2F','#4A90BF','#2E6E35','#D97706','#6B7280'],
        borderWidth: 2, borderColor: '#1e2d3d', hoverOffset: 8,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { position:'right' } },
      cutout: '60%',
    },
  });

  makeChart('chart-taxbase', {
    type: 'line',
    data: {
      labels: ['2024','2026','2028','2030','2032','2034','2036','2038','2040'],
      datasets: [{
        label: 'Assessed Value ($M)',
        data: [450, 475, 535, 645, 780, 920, 1050, 1100, 1155],
        borderColor: '#2E6E35', backgroundColor: 'rgba(46,110,53,.15)',
        fill: true, tension: 0.4, borderWidth: 3, pointRadius: 5, pointBackgroundColor: '#2E6E35',
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { position:'top' } },
      scales: { y: { ticks: { callback: v => '$' + v + 'M' }, beginAtZero: false } },
    },
  });

  makeChart('chart-visitors', {
    type: 'bar',
    data: {
      labels: ['2024','2026','2028','2030','2032','2034','2036','2038','2040'],
      datasets: [{
        label: 'Annual Visitors (thousands)',
        data: [25, 33, 58, 92, 130, 158, 178, 196, 210],
        backgroundColor: 'rgba(74,144,191,.75)',
        borderColor: '#4A90BF', borderWidth: 2, borderRadius: 5,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { position:'top' } },
      scales: { y: { ticks: { callback: v => v + 'K' } } },
    },
  });

  /* ── Regional Income Comparison (surrounding-region section) ── */
  makeChart('chart-income-compare', {
    type: 'bar',
    data: {
      labels: ['El Dorado (now)','Butler County','Wichita MSA','Kansas Avg','El Dorado 2040'],
      datasets: [{
        label: 'Median Household Income',
        data: [59180, 81610, 72000, 67000, 70000],
        backgroundColor: ['#A63D2F','#4A90BF','#7B5EA7','#2E6E35','#C8902A'],
        borderRadius: 5, borderSkipped: false,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => '$' + ctx.raw.toLocaleString() } },
      },
      scales: {
        x: { ticks: { color:'rgba(255,255,255,.55)', font:{ size:10 } }, grid:{ color:'rgba(255,255,255,.06)' } },
        y: { ticks: { color:'rgba(255,255,255,.5)', callback: v => '$' + (v/1000).toFixed(0) + 'K' }, grid:{ color:'rgba(255,255,255,.08)' }, beginAtZero:false, min:40000 },
      },
    },
  });

  /* ── Regional Distances (surrounding-region section) ── */
  makeChart('chart-regional-distances', {
    type: 'bar',
    data: {
      labels: ['Wichita (City)','Augusta','Tallgrass Prairie','Newton (Amtrak)','Emporia (ESU)','Kansas City','Oklahoma City'],
      datasets: [{
        label: 'Miles from El Dorado',
        data: [29, 18, 48, 37, 60, 171, 185],
        backgroundColor: ['#4A90BF','#2E6E35','#2E6E35','#C8902A','#7B5EA7','#1B3A5C','#A63D2F'],
        borderRadius: 4, borderSkipped: false,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ctx.raw + ' miles' } },
      },
      scales: {
        x: { ticks: { color:'rgba(255,255,255,.5)', callback: v => v + ' mi' }, grid:{ color:'rgba(255,255,255,.08)' } },
        y: { ticks: { color:'rgba(255,255,255,.6)', font:{ size:10 } }, grid:{ color:'rgba(255,255,255,.05)' } },
      },
    },
  });

  makeChart('chart-housing', {
    type: 'bar',
    data: {
      labels: ['Phase 1\n2025–27','Phase 2\n2028–30','Phase 3\n2031–35','Phase 4\n2036–40'],
      datasets: [
        { label:'Downtown Lofts (Adaptive Reuse)', data:[80,0,0,0],   backgroundColor:'#1B3A5C', borderRadius:3 },
        { label:'West Gateway',                    data:[100,180,0,0], backgroundColor:'#C8902A', borderRadius:3 },
        { label:'Lakeside Village',                data:[0,200,200,0], backgroundColor:'#4A90BF', borderRadius:3 },
        { label:'Senior Campus',                   data:[0,120,0,0],   backgroundColor:'#2E6E35', borderRadius:3 },
        { label:'Innovation Quarter',              data:[0,150,0,0],   backgroundColor:'#7B5EA7', borderRadius:3 },
        { label:'Phase 4 Growth',                  data:[0,0,0,250],   backgroundColor:'#A63D2F', borderRadius:3 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: { legend: { position:'top' } },
      scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: v => v + ' units' } } },
    },
  });
}

function makeChart(id, config) {
  // Register with ChartManager for lazy loading instead of creating immediately
  ChartManager.register(id, config);
  // Mark as initialized to prevent duplicate registration
  const el = document.getElementById(id);
  if (el) { el.dataset.init = '1'; }
}

/* ══════════════════════════════════════════════
   SECTION PROGRESS DOTS
══════════════════════════════════════════════ */
;(function () {
  const dots = document.querySelectorAll('.sd-dot');
  if (!dots.length) return;
  const targets = [...dots].map(d => document.querySelector(d.getAttribute('href'))).filter(Boolean);
  function update() {
    const mid = window.scrollY + window.innerHeight * 0.42;
    let active = 0;
    targets.forEach((el, i) => { if (el.offsetTop <= mid) active = i; });
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ══════════════════════════════════════════════
   TIMELINE — COLLAPSIBLE BULLET LISTS
══════════════════════════════════════════════ */
;(function () {
  document.querySelectorAll('.phase-card ul').forEach(ul => {
    const items = [...ul.querySelectorAll('li')];
    if (items.length <= 8) return;
    items.forEach((li, i) => { if (i >= 8) li.classList.add('tl-hidden'); });
    const btn = document.createElement('button');
    btn.className = 'tl-expand-btn';
    const extra = items.length - 8;
    btn.innerHTML = `Show ${extra} more <span class="tl-chevron">▾</span>`;
    btn.addEventListener('click', () => {
      const open = btn.dataset.open === '1';
      items.forEach((li, i) => { if (i >= 8) li.classList.toggle('tl-hidden', open); });
      btn.innerHTML = open
        ? `Show ${extra} more <span class="tl-chevron">▾</span>`
        : `Show less <span class="tl-chevron">▾</span>`;
      btn.dataset.open = open ? '' : '1';
    });
    ul.after(btn);
  });
})();

/* ══════════════════════════════════════════════
   VISUAL ENHANCEMENTS — Scroll Progress, Counters, Stagger, Parallax
══════════════════════════════════════════════ */

/* ── Back to top button click ── */
document.getElementById('back-to-top')?.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);

/* ── Animated number counters ── */
;(function () {
  function animateCount(el) {
    const orig = el.textContent.trim();
    const m = orig.match(/([\d,]+)/);
    if (!m) return;
    const raw = m[1].replace(/,/g, '');
    const target = parseInt(raw, 10);
    if (isNaN(target) || target < 2) return;
    const hasComma = m[1].includes(',');
    const pre = orig.slice(0, m.index);
    const suf = orig.slice(m.index + m[1].length);
    const dur = 1350, t0 = performance.now();
    (function frame(now) {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(target * eased);
      el.textContent = pre + (hasComma ? v.toLocaleString() : v) + suf;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = orig;
    })(performance.now());
  }

  const SEL = [
    '.hero-stat .num',
    '.ng-stat .val',
    '.cs-stat .csv',
    '.timeline-totals .tval',
    '.bs-val',
    '.ps-val',
    '.tsv',
    '.gval',
    '.marina-spec .mval',
    '.park-stat .pval',
  ].join(',');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.55 });
  document.querySelectorAll(SEL).forEach(el => obs.observe(el));
})();

/* ── Staggered grid card entrance ── */
;(function () {
  const GRIDS = [
    ['.lake-grid',      '.glass-card'],
    ['.funding-grid',   '.funding-card'],
    ['.mural-grid',     '.mural-card'],
    ['.fountain-grid',  '.fountain-card'],
    ['.lot-grid',       '.lot-card'],
    ['.gateway-grid',   '.gateway-card'],
    ['.new-ideas-grid', '.new-idea-card'],
    ['.transport-grid', '.transport-card'],
    ['.regional-grid',  '.regional-card'],
  ];

  GRIDS.forEach(([gridSel, itemSel]) => {
    document.querySelectorAll(gridSel).forEach(grid => {
      const items = [...grid.querySelectorAll(itemSel)];
      if (items.length < 2) return;

      items.forEach(item => {
        item.classList.add('stagger-in');
      });

      const obs = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(grid);
        items.forEach((item, i) => {
          const delay = i * 80;
          setTimeout(() => item.classList.add('animated'), delay);
        });
      }, { threshold: 0.08 });
      obs.observe(grid);
    });
  });
})();

/* ── Niche Industries Card Dropdowns ── */
;(function () {
  const cards = document.querySelectorAll('.ni-card');
  cards.forEach(card => {
    const header = card.querySelector('.ni-card-header');
    if (!header) return;

    header.addEventListener('click', (e) => {
      e.preventDefault();
      card.classList.toggle('open');
    });
  });
})();

/* ── Collapsible Sections ── */
;(function () {
  const sections = document.querySelectorAll('.collapsible-section');
  sections.forEach(section => {
    const header = section.querySelector('.collapsible-header');
    const content = section.querySelector('.collapsible-content');

    if (!header || !content) return;

    header.addEventListener('click', () => {
      section.classList.toggle('collapsed');
    });

    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
        const expanded = !section.classList.contains('collapsed');
        header.setAttribute('aria-expanded', expanded);
      }
    });
  });
})();

/* ══════════════════════════════════════════════
   CHART.JS LAZY LOADING MANAGER
═════════════════════════════════════════════ */
class ChartManager {
  static charts = new Map();
  static observer = null;
  static rendered = new Set();

  static register(chartId, config) {
    ChartManager.charts.set(chartId, config);
  }

  static init() {
    if (ChartManager.observer) return; // Already initialized

    // Create IntersectionObserver to render charts on visibility
    ChartManager.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !ChartManager.rendered.has(entry.target.id)) {
          const chartId = entry.target.id;
          const config = ChartManager.charts.get(chartId);
          if (config) {
            ChartManager.render(chartId, config);
            ChartManager.observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.1 });

    // Observe all registered chart canvases
    ChartManager.charts.forEach((config, chartId) => {
      const canvas = document.getElementById(chartId);
      if (canvas) {
        ChartManager.observer.observe(canvas);
      }
    });
  }

  static render(chartId, config) {
    const canvas = document.getElementById(chartId);
    if (canvas && !ChartManager.rendered.has(chartId)) {
      try {
        new Chart(canvas, config);
        ChartManager.rendered.add(chartId);
      } catch (e) {
        console.warn(`Failed to render chart ${chartId}:`, e);
      }
    }
  }

  // For immediate chart rendering (above-the-fold content)
  static renderNow(chartId) {
    const config = ChartManager.charts.get(chartId);
    if (config) {
      ChartManager.render(chartId, config);
    }
  }
}

// Initialize ChartManager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ChartManager.init();
});
