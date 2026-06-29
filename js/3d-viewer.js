// El Dorado 3D Development Finder
// Powered by Three.js

let scene, camera, renderer;
let controls = { isDragging: false, isPanning: false, isRotating: false, previousMousePosition: {} };
let buildings = [];
let selectedProperty = null;
let properties = [];
let zonesData = null;
let activeFilters = {
  zone: '',
  districts: {
    'North Gateway': true,
    'Downtown TIF': true,
    'South Industrial': true,
    'Lakeside': true
  },
  layers: {
    buildings: true,
    infrastructure: true,
    properties: true,
    grid: false
  }
};

// Color mapping for zones
const zoneColors = {
  'C-1': 0x0066cc,    // Blue
  'C-2': 0xff8800,    // Orange
  'I-1': 0xcc0000,    // Red
  'I-2': 0x990000,    // Dark Red
  'R-2': 0x00cc66,    // Green
  'Mixed-Use': 0x9966cc  // Purple
};

// Initialize scene
function init() {
  const container = document.getElementById('canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene setup
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);
  scene.fog = new THREE.Fog(0x87ceeb, 5000, 15000);

  // Camera
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000);
  camera.position.set(-97.375, 2000, 37.65); // Lat, height, lng
  camera.lookAt(-97.375, 0, 37.65);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(-1, 1, 1).normalize();
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.far = 5000;
  scene.add(directionalLight);

  // Ground plane
  const groundGeometry = new THREE.PlaneGeometry(1, 1);
  const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x8fb89f });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.scale.set(5000, 5000, 1);
  ground.receiveShadow = true;
  scene.add(ground);

  // Load data
  loadData();

  // Event listeners
  setupEventListeners();
  setupFilters();

  // Render loop
  animate();

  // Handle window resize
  window.addEventListener('resize', onWindowResize);
}

function loadData() {
  // Load GeoJSON
  fetch('data/zones.geojson')
    .then(res => res.json())
    .then(data => {
      zonesData = data;
      createBuildings(data);
      document.getElementById('loading').style.display = 'none';
    })
    .catch(err => console.error('Error loading GeoJSON:', err));

  // Load properties
  fetch('data/properties-3d.json')
    .then(res => res.json())
    .then(data => {
      properties = data.properties;
    })
    .catch(err => console.error('Error loading properties:', err));
}

function createBuildings(geojsonData) {
  geojsonData.features.forEach(feature => {
    const props = feature.properties;
    const coords = feature.geometry.coordinates[0];

    if (!coords || coords.length < 4) return;

    // Calculate building dimensions
    const minLng = Math.min(...coords.map(c => c[0]));
    const maxLng = Math.max(...coords.map(c => c[0]));
    const minLat = Math.min(...coords.map(c => c[1]));
    const maxLat = Math.max(...coords.map(c => c[1]));

    const width = (maxLng - minLng) * 111000; // Convert degrees to meters
    const depth = (maxLat - minLat) * 111000;
    const height = props.height || 40;

    // Center of building
    const centerLng = (minLng + maxLng) / 2;
    const centerLat = (minLat + maxLat) / 2;
    const posX = (centerLng - (-97.38)) * 111000; // Offset from center
    const posZ = (centerLat - 37.65) * 111000;

    // Create geometry
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const color = zoneColors[props.zone] || 0x999999;
    const material = new THREE.MeshLambertMaterial({
      color: color,
      emissive: 0x000000
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(posX, height / 2, posZ);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = {
      type: 'building',
      ...props,
      propertyId: props.id
    };

    scene.add(mesh);
    buildings.push(mesh);
  });

  // Add raycaster for picking
  setupPicking();
}

function setupPicking() {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  renderer.domElement.addEventListener('click', event => {
    if (controls.isDragging) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(buildings);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      selectProperty(obj.userData);
    } else {
      selectedProperty = null;
      displayPropertyDetails(null);
    }
  });
}

function selectProperty(data) {
  selectedProperty = data;
  const propertyData = properties.find(p => p.id === data.id);
  displayPropertyDetails(propertyData || data);
}

function displayPropertyDetails(property) {
  const detailsDiv = document.getElementById('property-details');

  if (!property) {
    detailsDiv.innerHTML = '<p style="color: #999;">Click on a property to view details</p>';
    return;
  }

  const pricePerAcre = (property.price / property.acres).toFixed(2);

  detailsDiv.innerHTML = `
    <div class="property-card">
      <h4>${property.name || property.fullName}</h4>
      <div class="property-detail">
        <span class="property-detail-label">Zone:</span>
        <span class="property-detail-value">${property.zone}</span>
      </div>
      <div class="property-detail">
        <span class="property-detail-label">Size:</span>
        <span class="property-detail-value">${property.acres} acres</span>
      </div>
      <div class="property-detail">
        <span class="property-detail-label">Price:</span>
        <span class="property-detail-value">$${property.price}M</span>
      </div>
      <div class="property-detail">
        <span class="property-detail-label">$/Acre:</span>
        <span class="property-detail-value">$${pricePerAcre}K</span>
      </div>
      <div class="property-detail">
        <span class="property-detail-label">District:</span>
        <span class="property-detail-value">${property.district}</span>
      </div>
      <div class="property-detail">
        <span class="property-detail-label">Status:</span>
        <span class="property-detail-value" style="text-transform: capitalize;">${property.status}</span>
      </div>
      <p style="font-size: 0.8em; color: #666; margin-top: 0.8rem; line-height: 1.4;">${property.description}</p>
      <div class="property-cta">
        <button class="btn btn-primary" onclick="openROICalculator(${property.id}, '${property.name || property.fullName}')">📊 ROI Calculator</button>
        <button class="btn btn-secondary" onclick="openInquiryForm(${property.id}, '${property.name || property.fullName}')">📧 Inquire</button>
      </div>
    </div>
  `;
}

function openROICalculator(propId, propName) {
  // Find property in development-finder and open modal
  const url = `development-finder.html?property=${propId}#roi-modal`;
  window.location.href = url;
}

function openInquiryForm(propId, propName) {
  // Show inquiry form
  const form = prompt(`Inquire about: ${propName}\n\nEnter your email:`, '');
  if (form) {
    const url = `development-finder.html?property=${propId}&email=${encodeURIComponent(form)}`;
    window.location.href = url;
  }
}

function setupEventListeners() {
  const container = renderer.domElement;

  // Mouse controls
  container.addEventListener('mousedown', onMouseDown);
  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseup', onMouseUp);
  container.addEventListener('wheel', onMouseWheel, false);
  container.addEventListener('contextmenu', e => e.preventDefault());

  // Touch controls (mobile)
  container.addEventListener('touchstart', onTouchStart);
  container.addEventListener('touchmove', onTouchMove);
  container.addEventListener('touchend', onTouchEnd);
}

function onMouseDown(e) {
  controls.isDragging = true;
  controls.previousMousePosition = { x: e.clientX, y: e.clientY };

  if (e.button === 2) { // Right click = rotate
    controls.isRotating = true;
  } else { // Left click = pan
    controls.isPanning = true;
  }
}

function onMouseMove(e) {
  if (!controls.isDragging) return;

  const deltaX = e.clientX - controls.previousMousePosition.x;
  const deltaY = e.clientY - controls.previousMousePosition.y;

  if (controls.isPanning) {
    // Pan camera
    const speed = 0.1;
    camera.position.x -= deltaX * speed;
    camera.position.z -= deltaY * speed;
  } else if (controls.isRotating) {
    // Rotate camera around center
    const speed = 0.005;
    const radius = Math.sqrt(
      Math.pow(camera.position.x, 2) + Math.pow(camera.position.z, 2)
    );
    const angle = Math.atan2(camera.position.z, camera.position.x);

    const newAngle = angle - deltaX * speed;
    const newY = camera.position.y - deltaY * speed;

    camera.position.x = radius * Math.cos(newAngle);
    camera.position.z = radius * Math.sin(newAngle);
    camera.position.y = Math.max(100, Math.min(4000, newY));
  }

  controls.previousMousePosition = { x: e.clientX, y: e.clientY };
}

function onMouseUp() {
  controls.isDragging = false;
  controls.isPanning = false;
  controls.isRotating = false;
}

function onMouseWheel(e) {
  e.preventDefault();

  const zoomSpeed = 50;
  const direction = camera.position.clone().normalize();

  if (e.deltaY > 0) {
    // Zoom out
    camera.position.addScaledVector(direction, zoomSpeed);
  } else {
    // Zoom in
    camera.position.addScaledVector(direction, -zoomSpeed);
  }
}

function onTouchStart(e) {
  if (e.touches.length === 1) {
    controls.isDragging = true;
    controls.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
}

function onTouchMove(e) {
  if (!controls.isDragging || e.touches.length !== 1) return;

  const deltaX = e.touches[0].clientX - controls.previousMousePosition.x;
  const deltaY = e.touches[0].clientY - controls.previousMousePosition.y;

  const speed = 0.1;
  camera.position.x -= deltaX * speed;
  camera.position.z -= deltaY * speed;

  controls.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}

function onTouchEnd() {
  controls.isDragging = false;
}

function setupFilters() {
  // Layer toggles
  document.getElementById('layer-buildings').addEventListener('change', e => {
    activeFilters.layers.buildings = e.target.checked;
    applyFilters();
  });

  document.getElementById('layer-infrastructure').addEventListener('change', e => {
    activeFilters.layers.infrastructure = e.target.checked;
    applyFilters();
  });

  document.getElementById('layer-properties').addEventListener('change', e => {
    activeFilters.layers.properties = e.target.checked;
    applyFilters();
  });

  document.getElementById('layer-grid').addEventListener('change', e => {
    activeFilters.layers.grid = e.target.checked;
    applyFilters();
  });

  // Zone filter
  document.getElementById('zone-filter').addEventListener('change', e => {
    activeFilters.zone = e.target.value;
    applyFilters();
  });

  // District checkboxes
  ['north', 'downtown', 'south-ind', 'lakeside'].forEach(id => {
    document.getElementById(`district-${id}`).addEventListener('change', e => {
      const districtMap = {
        'north': 'North Gateway',
        'downtown': 'Downtown TIF',
        'south-ind': 'South Industrial',
        'lakeside': 'Lakeside'
      };
      activeFilters.districts[districtMap[id]] = e.target.checked;
      applyFilters();
    });
  });
}

function applyFilters() {
  buildings.forEach(building => {
    let visible = true;

    // Zone filter
    if (activeFilters.zone && building.userData.zone !== activeFilters.zone) {
      visible = false;
    }

    // District filter
    if (!activeFilters.districts[building.userData.district]) {
      visible = false;
    }

    building.visible = visible;
  });
}

function onWindowResize() {
  const container = document.getElementById('canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
