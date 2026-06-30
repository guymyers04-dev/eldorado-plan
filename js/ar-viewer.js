// AR Development Finder - Three.js + AR.js Implementation
// Handles 3D scene, property rendering, interactivity, and AR controls

// Global state
const state = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    buildings: [],
    properties: {},
    selectedProperty: null,
    layers: {
        buildings: true,
        zones: true,
        projects: true,
        grid: false
    },
    filters: {
        district: '',
        zone: ''
    },
    locationAvailable: false
};

// Zone color mappings
const ZONE_COLORS = {
    'C-1': 0x1e90ff,  // Blue
    'I-1': 0xdc143c,  // Crimson
    'R-1': 0x32cd32,  // Lime Green
    'PUD': 0xffa500   // Orange
};

const DISTRICT_COLORS = {
    'north': 0x87ceeb,
    'downtown': 0xffd700,
    'south': 0xff6347,
    'lakeside': 0x4169e1
};

// Initialize AR scene
function initARScene() {
    try {
        // Scene setup
        state.scene = new THREE.Scene();
        state.scene.background = new THREE.Color(0x0a0e27);
        state.scene.fog = new THREE.Fog(0x0a0e27, 1000, 10000);

        // Camera (orthographic for 2D-like AR view)
        const width = window.innerWidth;
        const height = window.innerHeight;
        state.camera = new THREE.OrthographicCamera(
            -width / 2, width / 2,
            height / 2, -height / 2,
            0.1, 10000
        );
        state.camera.position.z = 500;

        // Renderer
        state.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        state.renderer.setSize(width, height);
        state.renderer.setPixelRatio(window.devicePixelRatio);
        state.renderer.shadowMap.enabled = true;
        state.renderer.shadowMap.type = THREE.PCFShadowShadowMap;

        const sceneContainer = document.getElementById('scene');
        sceneContainer.appendChild(state.renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        state.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(500, 500, 300);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        state.scene.add(directionalLight);

        // Ground plane
        const groundGeometry = new THREE.PlaneGeometry(2000, 2000);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1f3a,
            roughness: 0.8,
            metalness: 0
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.receiveShadow = true;
        ground.position.z = -10;
        state.scene.add(ground);

        // Grid helper
        const gridHelper = new THREE.GridHelper(2000, 20, 0x444466, 0x222233);
        gridHelper.position.z = -8;
        gridHelper.visible = false;
        gridHelper.name = 'grid';
        state.scene.add(gridHelper);

        updateStatus('✅ Scene initialized', 'success');
        loadBuildings();

    } catch (error) {
        console.error('Scene initialization error:', error);
        updateStatus('❌ Failed to initialize AR viewer', 'error');
    }
}

// Load building data from GeoJSON
function loadBuildings() {
    fetch('data/zones.geojson')
        .then(res => res.json())
        .then(data => {
            data.features.forEach((feature, index) => {
                const props = feature.properties;
                const coords = feature.geometry.coordinates;

                // Create building mesh
                const height = props.height || 50;
                const width = props.width || 100;
                const depth = props.depth || 100;

                const geometry = new THREE.BoxGeometry(width, depth, height);
                const color = ZONE_COLORS[props.zone] || 0x888888;
                const material = new THREE.MeshStandardMaterial({
                    color: color,
                    roughness: 0.6,
                    metalness: 0.2
                });

                const building = new THREE.Mesh(geometry, material);
                building.castShadow = true;
                building.receiveShadow = true;

                // Position from coordinates (approximate conversion)
                building.position.x = coords[0] * 100 - 500;
                building.position.y = coords[1] * 100 - 500;
                building.position.z = height / 2;

                // Store metadata
                building.userData = {
                    id: props.id || index,
                    zone: props.zone,
                    district: props.district || 'general',
                    height: height,
                    description: props.description || 'Development parcel',
                    size: `${width}m × ${depth}m`,
                    status: props.status || 'Available',
                    zoning: props.zone,
                    roi: props.roi || '18-24%'
                };

                building.name = `building-${index}`;
                state.scene.add(building);
                state.buildings.push(building);
            });

            updateStatus(`📦 Loaded ${state.buildings.length} properties`, 'success');
            loadProperties();

        })
        .catch(err => {
            console.error('GeoJSON load error:', err);
            updateStatus('⚠️ Using demo properties (GeoJSON not found)', 'loading');
            createDemoBuildings();
        });
}

// Create demo buildings for testing
function createDemoBuildings() {
    const demoData = [
        { zone: 'C-1', district: 'downtown', x: -200, y: -100 },
        { zone: 'I-1', district: 'south', x: 200, y: 100 },
        { zone: 'R-1', district: 'north', x: -100, y: 200 },
        { zone: 'PUD', district: 'lakeside', x: 100, y: -200 },
        { zone: 'C-1', district: 'downtown', x: 0, y: 0 },
        { zone: 'I-1', district: 'south', x: 150, y: 50 },
        { zone: 'R-1', district: 'north', x: -150, y: -50 },
    ];

    demoData.forEach((data, index) => {
        const height = 40 + Math.random() * 60;
        const width = 80 + Math.random() * 40;
        const depth = 80 + Math.random() * 40;

        const geometry = new THREE.BoxGeometry(width, depth, height);
        const color = ZONE_COLORS[data.zone];
        const material = new THREE.MeshStandardMaterial({
            color: color,
            roughness: 0.6,
            metalness: 0.2
        });

        const building = new THREE.Mesh(geometry, material);
        building.castShadow = true;
        building.receiveShadow = true;
        building.position.set(data.x, data.y, height / 2);

        building.userData = {
            id: `demo-${index}`,
            zone: data.zone,
            district: data.district,
            height: height,
            description: `Development opportunity in ${data.district} district`,
            size: `${width.toFixed(0)}m × ${depth.toFixed(0)}m`,
            status: 'Available',
            zoning: data.zone,
            roi: `${15 + Math.random() * 20}%`.substring(0, 5)
        };

        state.scene.add(building);
        state.buildings.push(building);
    });

    updateStatus('📦 Loaded 7 demo properties', 'loading');
}

// Load property metadata
function loadProperties() {
    fetch('data/properties-3d.json')
        .then(res => res.json())
        .then(data => {
            state.properties = data.reduce((acc, prop) => {
                acc[prop.id] = prop;
                return acc;
            }, {});
            updateStatus('🏢 Properties loaded', 'success');
        })
        .catch(err => {
            console.warn('Properties data not found:', err);
        });
}

// Update visible layers based on checkboxes
function updateLayers() {
    const buildings = document.getElementById('chkBuildings').checked;
    const zones = document.getElementById('chkZones').checked;
    const projects = document.getElementById('chkProjects').checked;
    const grid = document.getElementById('chkGrid').checked;

    state.layers = { buildings, zones, projects, grid };

    // Update district and zone filters
    state.filters.district = document.getElementById('districtFilter').value;
    state.filters.zone = document.getElementById('zoneFilter').value;

    // Apply filters to buildings
    state.buildings.forEach(building => {
        const userData = building.userData;
        const districtMatch = !state.filters.district || userData.district === state.filters.district;
        const zoneMatch = !state.filters.zone || userData.zone === state.filters.zone;
        const layerVisible = (buildings && userData.zone);

        building.visible = layerVisible && districtMatch && zoneMatch;
    });

    const gridHelper = state.scene.getObjectByName('grid');
    if (gridHelper) gridHelper.visible = grid;
}

// Ray casting for property selection
function onCanvasClick(event) {
    const rect = state.renderer.domElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = -(y / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, state.camera);
    const intersects = raycaster.intersectObjects(state.buildings);

    if (intersects.length > 0) {
        const selected = intersects[0].object;
        showPropertyDetail(selected);
    } else {
        closePropertyDetail();
    }
}

// Show property detail sidebar
function showPropertyDetail(building) {
    state.selectedProperty = building;
    const data = building.userData;

    // Highlight selected building
    state.buildings.forEach(b => {
        b.material.emissive.setHex(0x000000);
    });
    building.material.emissive.setHex(0xffd700);

    // Update sidebar
    document.getElementById('propTitle').textContent = `Property ${data.id}`;
    document.getElementById('propZone').textContent = data.zone;
    document.getElementById('propSize').textContent = data.size;
    document.getElementById('propStatus').textContent = data.status;
    document.getElementById('propZoning').textContent = data.zoning;
    document.getElementById('propROI').textContent = data.roi;
    document.getElementById('propDescription').textContent = data.description;

    document.getElementById('propertySidebar').classList.add('active');
    updateStatus(`🎯 Selected: ${data.id}`, 'success');
}

// Close property detail sidebar
function closePropertyDetail() {
    state.buildings.forEach(b => {
        b.material.emissive.setHex(0x000000);
    });
    document.getElementById('propertySidebar').classList.remove('active');
    state.selectedProperty = null;
}

// Navigate to development finder with property context
function goToDevelopmentFinder() {
    if (state.selectedProperty) {
        window.location.href = `development-finder.html?property=${state.selectedProperty.userData.id}`;
    } else {
        window.location.href = 'development-finder.html';
    }
}

// Open ROI calculator modal
function calculateROI() {
    if (!state.selectedProperty) return;
    const propId = state.selectedProperty.userData.id;
    window.open(`roi-calculator.html?id=${propId}`, '_blank', 'width=600,height=700');
}

// Open inquiry form
function inquireProperty() {
    if (!state.selectedProperty) return;
    const data = state.selectedProperty.userData;
    const mailtoLink = `mailto:invest@eldoradoks.org?subject=Development%20Inquiry:%20Property%20${data.id}&body=I%20am%20interested%20in%20${data.zone}%20development%20opportunity%20in%20${data.district}%20district.`;
    window.location.href = mailtoLink;
}

// Update status banner
function updateStatus(message, type = 'loading') {
    const banner = document.getElementById('statusBanner');
    const text = document.getElementById('statusText');
    text.textContent = message;
    banner.className = `status-banner ${type}`;
}

// Navigation
function back() {
    window.history.back();
}

// Camera pan/zoom controls (simplified for mobile AR)
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

state.renderer.domElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

state.renderer.domElement.addEventListener('mousemove', (e) => {
    if (isDragging && e.buttons === 1) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        state.camera.position.x -= deltaX * 0.5;
        state.camera.position.y += deltaY * 0.5;
    }
    previousMousePosition = { x: e.clientX, y: e.clientY };
});

state.renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
});

// Zoom with scroll wheel
state.renderer.domElement.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomSpeed = 20;
    if (e.deltaY < 0) {
        state.camera.left *= 0.9;
        state.camera.right *= 0.9;
        state.camera.top *= 0.9;
        state.camera.bottom *= 0.9;
    } else {
        state.camera.left *= 1.1;
        state.camera.right *= 1.1;
        state.camera.top *= 1.1;
        state.camera.bottom *= 1.1;
    }
    state.camera.updateProjectionMatrix();
});

// Touch support for mobile
let touchStartDistance = 0;

state.renderer.domElement.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchStartDistance = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1) {
        previousMousePosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }
});

state.renderer.domElement.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const scale = distance / touchStartDistance;

        if (scale < 1) {
            state.camera.left *= 1.05;
            state.camera.right *= 1.05;
            state.camera.top *= 1.05;
            state.camera.bottom *= 1.05;
        } else {
            state.camera.left *= 0.95;
            state.camera.right *= 0.95;
            state.camera.top *= 0.95;
            state.camera.bottom *= 0.95;
        }
        state.camera.updateProjectionMatrix();
        touchStartDistance = distance;
    } else if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        state.camera.position.x -= deltaX * 0.5;
        state.camera.position.y += deltaY * 0.5;

        previousMousePosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    state.camera.left = -width / 2;
    state.camera.right = width / 2;
    state.camera.top = height / 2;
    state.camera.bottom = -height / 2;
    state.camera.updateProjectionMatrix();

    state.renderer.setSize(width, height);
});

// Main render loop
function animate() {
    requestAnimationFrame(animate);

    // Subtle camera rotation for visual interest
    if (!isDragging && !state.selectedProperty) {
        state.camera.position.x += (Math.random() - 0.5) * 0.1;
        state.camera.position.y += (Math.random() - 0.5) * 0.1;
    }

    state.renderer.render(state.scene, state.camera);
}

// Click event for property selection
state.renderer.domElement.addEventListener('click', onCanvasClick);

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initARScene();
    animate();
    updateLayers();

    // Try to get GPS location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                state.locationAvailable = true;
                updateStatus(`📍 GPS: ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`, 'success');
            },
            () => {
                updateStatus('📍 GPS not available (using demo mode)', 'loading');
            }
        );
    }
});
