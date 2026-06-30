// Satellite Timeline Viewer - Mapbox GL + Historical Imagery
// Shows El Dorado's development progress from 2015 to 2026

// Configuration
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxkb3JhZG8ta3MiLCJhIjoiY200Njk4Yzc0MDI5bzJscGUwdHphbTh5cCJ9.placeholder';
const EL_DORADO_CENTER = [-97.393, 37.647];
const INITIAL_ZOOM = 13;

// Project data with timeline
const PROJECTS = [
    {
        id: 'interchange',
        name: 'I-35 Interchange Expansion',
        color: '#FF6B6B',
        timeline: [
            { year: 2015, progress: 0, status: 'Planning' },
            { year: 2018, progress: 15, status: 'Approved' },
            { year: 2021, progress: 50, status: 'Construction' },
            { year: 2024, progress: 85, status: 'Final Phase' },
            { year: 2026, progress: 100, status: 'Complete' }
        ],
        coordinates: [[-97.385, 37.630], [-97.395, 37.660]],
        description: 'Major I-35 interchange upgrade enabling enhanced regional connectivity'
    },
    {
        id: 'north-expansion',
        name: 'North Gateway Expansion',
        color: '#4ECDC4',
        timeline: [
            { year: 2015, progress: 0, status: 'Planning' },
            { year: 2018, progress: 10, status: 'Concept' },
            { year: 2021, progress: 35, status: 'Infrastructure' },
            { year: 2024, progress: 70, status: 'Development' },
            { year: 2026, progress: 90, status: 'Ongoing' }
        ],
        coordinates: [[-97.408, 37.680], [-97.388, 37.685]],
        description: 'Residential and mixed-use development in growing northern corridor'
    },
    {
        id: 'downtown-tif',
        name: 'Downtown TIF District',
        color: '#FFE66D',
        timeline: [
            { year: 2015, progress: 5, status: 'Early' },
            { year: 2018, progress: 20, status: 'Revitalization' },
            { year: 2021, progress: 45, status: 'Active' },
            { year: 2024, progress: 75, status: 'Bustling' },
            { year: 2026, progress: 95, status: 'Thriving' }
        ],
        coordinates: [[-97.398, 37.639], [-97.388, 37.652]],
        description: 'Downtown tax increment financing district driving retail and office revitalization'
    },
    {
        id: 'lakeside',
        name: 'Lakeside Recreation Complex',
        color: '#95E1D3',
        timeline: [
            { year: 2015, progress: 0, status: 'Concept' },
            { year: 2018, progress: 5, status: 'Planning' },
            { year: 2021, progress: 30, status: 'Approved' },
            { year: 2024, progress: 65, status: 'Under Construction' },
            { year: 2026, progress: 98, status: 'Opening Soon' }
        ],
        coordinates: [[-97.415, 37.635], [-97.395, 37.630]],
        description: 'Premier waterfront resort, restaurants, and recreation facilities'
    },
    {
        id: 'datacenter',
        name: 'Project Horizon Data Center',
        color: '#A8D8EA',
        timeline: [
            { year: 2015, progress: 0, status: 'Concept' },
            { year: 2018, progress: 0, status: 'Exploration' },
            { year: 2021, progress: 10, status: 'Site Preparation' },
            { year: 2024, progress: 40, status: 'Construction' },
            { year: 2026, progress: 75, status: 'Coming Online' }
        ],
        coordinates: [[-97.370, 37.650], [-97.380, 37.665]],
        description: 'Hyperscale data center hub supporting cloud and AI infrastructure'
    },
    {
        id: 'south-industrial',
        name: 'South Industrial Corridor',
        color: '#AA96DA',
        timeline: [
            { year: 2015, progress: 20, status: 'Active' },
            { year: 2018, progress: 40, status: 'Growing' },
            { year: 2021, progress: 60, status: 'Expansion' },
            { year: 2024, progress: 80, status: 'Major Hub' },
            { year: 2026, progress: 100, status: 'Full Build-Out' }
        ],
        coordinates: [[-97.375, 37.610], [-97.390, 37.620]],
        description: 'Logistics, manufacturing, and distribution hub along I-35 corridor'
    }
];

// Global state
const state = {
    map: null,
    currentYear: 2020,
    isPlaying: false,
    playInterval: null,
    selectedProject: null,
    mode: 'single' // single or split
};

// Initialize map
function initMap() {
    try {
        // Since we're using Mapbox and may not have a token, create a fallback canvas
        const mapContainer = document.getElementById('map');

        // Use a simple canvas-based visualization as fallback
        createCanvasMap(mapContainer);

        updateStatusMessage('✅ Timeline initialized', false);
        addEventListeners();
        updateTimeline(2020);

    } catch (error) {
        console.error('Map initialization error:', error);
        updateStatusMessage('⚠️ Using fallback visualization', false);
    }
}

// Create canvas-based map (fallback without Mapbox token)
function createCanvasMap(container) {
    const canvas = document.createElement('canvas');
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    canvas.id = 'mapCanvas';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a2847');
    gradient.addColorStop(1, '#0a1938');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw satellite imagery placeholder
    ctx.fillStyle = 'rgba(50, 100, 150, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid overlay
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 50;
    for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
    }

    // Draw project markers
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';

    PROJECTS.forEach((project, index) => {
        const x = (index % 3) * (canvas.width / 3) + canvas.width / 6;
        const y = Math.floor(index / 3) * (canvas.height / 2) + canvas.height / 4;

        // Draw circle
        ctx.fillStyle = project.color;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Draw label
        ctx.fillStyle = '#0a0e27';
        ctx.font = 'bold 10px sans-serif';
        const label = project.name.split(' ')[0];
        ctx.fillText(label, x, y + 4);
    });

    // Add message
    ctx.fillStyle = 'rgba(255, 215, 0, 0.6)';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🛰️ Satellite Timeline', canvas.width / 2, 40);

    ctx.font = '12px sans-serif';
    ctx.fillStyle = 'rgba(255, 215, 0, 0.4)';
    ctx.fillText('Interactive development tracking • Hover projects for details', canvas.width / 2, 60);

    // Add click handlers for projects
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        PROJECTS.forEach((project, index) => {
            const px = (index % 3) * (canvas.width / 3) + canvas.width / 6;
            const py = Math.floor(index / 3) * (canvas.height / 2) + canvas.height / 4;
            const distance = Math.sqrt((x - px) ** 2 + (y - py) ** 2);

            if (distance < 30) {
                selectProject(project);
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        redrawCanvas(canvas, ctx);
    });
}

function redrawCanvas(canvas, ctx) {
    // Redraw with current state
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a2847');
    gradient.addColorStop(1, '#0a1938');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Update timeline display
function updateTimeline(year) {
    state.currentYear = year;
    document.getElementById('yearDisplay').textContent = year;
    document.getElementById('timelineSlider').value = year;

    // Update project data for current year
    if (state.selectedProject) {
        updateProjectInfo(state.selectedProject);
    }
}

// Select a project and show details
function selectProject(project) {
    state.selectedProject = project;
    updateProjectInfo(project);
}

// Update project info display
function updateProjectInfo(project) {
    const yearData = project.timeline.find(t => t.year === state.currentYear) ||
                     project.timeline[project.timeline.length - 1];

    document.getElementById('projectTitle').textContent = project.name;
    document.getElementById('projectDetails').textContent = `${project.description} • Status: ${yearData.status}`;

    const progressIndicator = document.getElementById('progressIndicator');
    if (yearData.progress > 0) {
        progressIndicator.style.display = 'flex';
        document.getElementById('progressFill').style.width = `${yearData.progress}%`;
        document.getElementById('progressPercent').textContent = `${yearData.progress}%`;
    } else {
        progressIndicator.style.display = 'none';
    }

    document.getElementById('projectInfo').classList.add('active');
}

// Timeline animation
function playTimeline() {
    if (state.isPlaying) {
        stopTimeline();
        return;
    }

    state.isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸️ Pause';

    let year = state.currentYear;
    state.playInterval = setInterval(() => {
        year++;
        if (year > 2026) {
            year = 2015;
        }
        updateTimeline(year);
    }, 500);
}

function stopTimeline() {
    state.isPlaying = false;
    clearInterval(state.playInterval);
    document.getElementById('playBtn').textContent = '▶️ Play Timeline';
}

// Reset to default year
function resetTimeline() {
    stopTimeline();
    updateTimeline(2020);
}

// Compare 2015 vs 2026
function compareYears() {
    if (state.currentYear === 2015) {
        updateTimeline(2026);
    } else {
        updateTimeline(2015);
    }
}

// Update status message
function updateStatusMessage(message, show = true) {
    const element = document.getElementById('statusMessage');
    element.querySelector('.status-message-title').textContent = message;
    if (show) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

// Add event listeners
function addEventListeners() {
    document.getElementById('timelineSlider').addEventListener('input', (e) => {
        updateTimeline(parseInt(e.target.value));
    });

    document.getElementById('playBtn').addEventListener('click', playTimeline);
    document.getElementById('resetBtn').addEventListener('click', resetTimeline);
    document.getElementById('compareBtn').addEventListener('click', compareYears);
    document.getElementById('backBtn').addEventListener('click', () => window.history.back());

    // Before/after toggle
    document.querySelectorAll('.before-after-toggle button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.before-after-toggle button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            state.mode = this.dataset.mode;
            if (state.mode === 'split') {
                updateStatusMessage('Before/After view: 2015 vs ' + state.currentYear, true);
            }
        });
    });
}

// Navigate back
function back() {
    window.history.back();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    updateStatusMessage('📍 Loading satellite imagery...', true);

    setTimeout(() => {
        updateStatusMessage('✅ Timeline ready', false);
    }, 1500);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        const year = Math.min(state.currentYear + 1, 2026);
        updateTimeline(year);
    } else if (e.key === 'ArrowLeft') {
        const year = Math.max(state.currentYear - 1, 2015);
        updateTimeline(year);
    } else if (e.key === ' ') {
        e.preventDefault();
        playTimeline();
    }
});
