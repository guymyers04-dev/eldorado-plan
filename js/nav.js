/* ══════════════════════════════════════════════
   El Dorado Vision 2040 — Shared Navigation
══════════════════════════════════════════════ */

(function() {
  // Get current page from data attribute or URL
  const currentPage = document.body.dataset.page || 'home';

  // Navigation structure with page routing
  const navStructure = {
    brand: {
      href: 'index.html',
      label: 'El Dorado, KS',
      tagline: 'Vision 2040 · Regional Development Plan'
    },
    links: [
      {
        label: 'Overview',
        href: 'index.html',
        page: 'home'
      },
      {
        label: 'Economy',
        page: 'economy',
        submenu: [
          {
            label: 'Growth & Jobs',
            separator: false,
            items: [
              { label: 'Priority Districts', href: 'economy.html#district-focus' },
              { label: 'North Gateway District', href: 'economy.html#north-gateway' },
              { label: 'Industry & Economic Dev.', href: 'economy.html#industry' },
              { label: '1,131-Acre Mega-Site', href: 'economy.html#mega-site' },
              { label: 'Health Economy', href: 'economy.html#health-economy' },
              { label: 'Housing & Residential', href: 'economy.html#residential' }
            ]
          },
          {
            label: 'Data',
            separator: true,
            items: [
              { label: 'Demographics & Evidence', href: 'economy.html#demographics' },
              { label: 'Housing Needs Assessment', href: 'economy.html#housing-assessment' },
              { label: 'Anchor Partners', href: 'economy.html#partners' },
              { label: 'National & Nonprofit Partners', href: 'economy.html#national-partners' },
              { label: 'Local Gov & Small Business', href: 'economy.html#local-cooperation' }
            ]
          }
        ]
      },
      {
        label: 'Place',
        page: 'place',
        submenu: [
          {
            label: 'Recreation & Destination',
            separator: false,
            items: [
              { label: 'El Dorado Lake & Sailing', href: 'place.html#lake' },
              { label: 'Downtown & Central Ave.', href: 'place.html#downtown' },
              { label: 'Arts, Culture & Heritage', href: 'place.html#arts-heritage' },
              { label: 'Tourism Economy', href: 'place.html#tourism' },
              { label: 'Parks, Pool & Stadiums', href: 'place.html#parks' },
              { label: 'Golf Club', href: 'place.html#golf' },
              { label: 'Beautification, Fountains & Benches', href: 'place.html#beautification' }
            ]
          }
        ]
      },
      {
        label: 'People',
        page: 'people',
        submenu: [
          {
            label: 'Education & Workforce',
            separator: false,
            items: [
              { label: 'K–12 Excellence (USD 490)', href: 'people.html#k12-education' },
              { label: 'Higher Education & Workforce Development', href: 'people.html#education' }
            ]
          },
          {
            label: '',
            separator: true,
            items: [
              { label: 'Childcare & Housing Stability', href: 'people.html#workforce-childcare' },
              { label: 'Public Safety', href: 'people.html#public-safety' }
            ]
          }
        ]
      },
      {
        label: 'Build',
        page: 'build',
        submenu: [
          {
            label: '',
            separator: false,
            items: [
              { label: 'City Infrastructure', href: 'build.html#infrastructure' },
              { label: 'Transportation, Corridors & Bridges', href: 'build.html#transportation' }
            ]
          }
        ]
      },
      {
        label: 'Finance',
        page: 'finance',
        submenu: [
          {
            label: '',
            separator: false,
            items: [
              { label: 'Tax Impact & Fiscal Analysis', href: 'finance.html#tax-impact' },
              { label: 'Funding Sources', href: 'finance.html#funding' },
              { label: 'Foreign Direct Investment', href: 'finance.html#foreign-investment' },
              { label: 'Niche Industries & Emerging Opp.', href: 'finance.html#niche-industries' },
              { label: 'Implementation Timeline', href: 'finance.html#timeline' }
            ]
          }
        ]
      },
      {
        label: 'Region',
        page: 'region',
        submenu: [
          {
            label: 'County & Beyond',
            separator: false,
            items: [
              { label: 'Government & Representatives', href: 'region.html#government-cooperation' },
              { label: 'Butler County Integration', href: 'region.html#butler-county' },
              { label: 'Surrounding Region', href: 'region.html#surrounding-region' },
              { label: 'Zoning & Planning Map', href: 'region.html#zoning' }
            ]
          }
        ]
      },
      {
        label: 'Reference',
        page: 'reference',
        submenu: [
          {
            label: '',
            separator: false,
            items: [
              { label: 'Data & Visualizations', href: 'reference.html#data-charts' },
              { label: 'Glossary of Terms', href: 'reference.html#glossary' }
            ]
          },
          {
            label: '',
            separator: true,
            items: [
              { label: 'Take Action', href: 'reference.html#action' }
            ]
          },
          {
            label: 'Strategy & Implementation',
            separator: true,
            items: [
              { label: '📅 Implementation Roadmap', href: 'implementation-roadmap.html' },
              { label: '🎯 Community Persuasion Strategy', href: 'community-engagement.html' }
            ]
          },
          {
            label: 'Resources & Contacts',
            separator: true,
            items: [
              { label: '📚 Complete Resource Library', href: 'resources.html' },
              { label: '👥 350+ Stakeholder Directory', href: 'stakeholders.html' },
              { label: '🎯 Executive Presentation', href: 'presentation.html' }
            ]
          },
          {
            label: 'Project Briefs',
            separator: true,
            items: [
              { label: 'Brief 23 · EPA Smart Growth & Green Infra', href: 'brief.html#brief-smartgrowth' },
              { label: 'Brief 24 · Strategic Partner Network', href: 'brief.html#brief-partners' }
            ]
          },
          {
            label: 'Revenue Hubs',
            separator: true,
            items: [
              { label: '🚚 Logistics Hub', href: 'logistics-hub.html' },
              { label: '🏖️ Tourism & Visitor Economy', href: 'tourism-visitor-economy.html' },
              { label: '🎓 USD 490 Economic Engine', href: 'usd-490-economic-engine.html' },
              { label: '💰 Tax Base Growth Strategy', href: 'tax-base-growth-strategy.html' }
            ]
          },
          {
            label: 'Engagement Tools & Metrics',
            separator: true,
            items: [
              { label: '💡 Initiatives Catalog', href: 'initiatives.html' },
              { label: '📈 Metrics Dashboard', href: 'metrics-dashboard.html' },
              { label: '📋 Business Recruitment', href: 'tools/recruitment-form.html' },
              { label: '💵 ROI Calculator', href: 'tools/roi-calculator.html' },
              { label: '🎯 Economic Simulator', href: 'tools/economic-simulator.html' },
              { label: '💬 Tourism Survey', href: 'tools/tourism-survey.html' },
              { label: '💡 Community Ideas', href: 'tools/ideas.html' },
              { label: '💼 Job Board', href: 'tools/jobs.html' },
              { label: '✓ Leadership Feedback', href: 'tools/feedback.html' }
            ]
          }
        ]
      }
    ]
  };

  function buildNavHTML() {
    let html = '<div class="nav-inner">';

    // Brand
    html += `<a href="${navStructure.brand.href}" class="nav-brand">
      <span class="city">${navStructure.brand.label}</span>
      <span class="tagline">${navStructure.brand.tagline}</span>
    </a>`;

    // Links
    html += '<ul class="nav-links">';

    navStructure.links.forEach(link => {
      const isActive = link.page === currentPage;
      const activeClass = isActive ? ' active' : '';

      if (!link.submenu) {
        // Simple link
        html += `<li><a href="${link.href}" class="nav-link${activeClass}">${link.label}</a></li>`;
      } else {
        // Dropdown group
        html += `<li class="nav-group${activeClass}">
          <button class="nav-group-btn" aria-haspopup="true">${link.label}</button>
          <div class="nav-dropdown" role="menu">`;

        link.submenu.forEach((section, idx) => {
          if (idx > 0 && section.separator) {
            html += '<div class="nav-dropdown-sep"></div>';
          }
          if (section.label) {
            html += `<div class="nav-dropdown-label">${section.label}</div>`;
          }
          section.items.forEach(item => {
            html += `<a href="${item.href}">${item.label}</a>`;
          });
        });

        html += '</div></li>';
      }
    });

    // Full Briefs link
    html += '<li><a href="brief.html" style="color:var(--gold);font-weight:700">📄 Full Briefs</a></li>';

    html += '</ul>';
    html += '<button class="nav-toggle" aria-label="Menu">☰</button>';
    html += '</div>';

    return html;
  }

  // Insert nav into mount point
  function initNav() {
    const mount = document.getElementById('nav-mount');
    if (!mount) return;

    const navbar = document.createElement('nav');
    navbar.id = 'navbar';
    navbar.innerHTML = buildNavHTML();
    mount.appendChild(navbar);

    // Add scroll progress bar if not present
    if (!document.getElementById('scroll-progress')) {
      const progress = document.createElement('div');
      progress.id = 'scroll-progress';
      document.body.insertBefore(progress, document.body.firstChild);
    }

    // Initialize nav interactivity
    setupNavInteractivity();
  }

  function setupNavInteractivity() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const toggle = navbar.querySelector('.nav-toggle');
    const groups = navbar.querySelectorAll('.nav-group-btn');
    const links = navbar.querySelectorAll('.nav-links a');

    // Mobile toggle
    if (toggle) {
      toggle.addEventListener('click', () => {
        navbar.classList.toggle('mobile-open');
      });
    }

    // Dropdown toggles
    groups.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const group = btn.closest('.nav-group');
        const isOpen = group.classList.contains('open');

        // Close all other groups
        navbar.querySelectorAll('.nav-group.open').forEach(g => {
          if (g !== group) g.classList.remove('open');
        });

        // Toggle this group
        if (isOpen) {
          group.classList.remove('open');
        } else {
          group.classList.add('open');
        }
      });
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('mobile-open');
        navbar.querySelectorAll('.nav-group.open').forEach(g => g.classList.remove('open'));
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navbar.classList.remove('mobile-open');
        navbar.querySelectorAll('.nav-group.open').forEach(g => g.classList.remove('open'));
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !e.target.closest('.nav-toggle')) {
        navbar.classList.remove('mobile-open');
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
