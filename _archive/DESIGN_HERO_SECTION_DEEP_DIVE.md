# El Dorado Hero Section Deep Dive — Complete Implementation Guide
**Detailed code, variants, and page-specific customization for all major hero sections**

---

## Overview

Hero sections are your most important design real estate. They need to:
- ✅ Capture attention immediately (< 3 seconds)
- ✅ Clearly communicate value proposition
- ✅ Have obvious call-to-action(s)
- ✅ Work beautifully on mobile
- ✅ Load quickly (LCP < 2.5s)
- ✅ Drive engagement/conversion

This guide provides complete implementations for 5 key hero sections.

---

## Hero Template 1: Video Hero (Homepage - index.html)

Most engaging, highest conversion potential.

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... existing head content ... -->
  <style>
    #hero {
      position: relative;
      height: 100vh;
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-top: 60px; /* navbar height */
    }

    .hero-video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    .hero-video-container video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      filter: brightness(0.65) saturate(1.1);
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      color: white;
      max-width: 800px;
      padding: 0 2rem;
      animation: fadeInUp 1s ease-out 0.3s both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-badge {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background: rgba(200, 144, 42, 0.2);
      border: 1px solid rgba(200, 144, 42, 0.4);
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #e8af4a;
      margin-bottom: 2rem;
      backdrop-filter: blur(10px);
      animation: fadeInUp 1s ease-out 0.4s both;
    }

    .hero-content h1 {
      font-size: clamp(2.5rem, 8vw, 5rem);
      line-height: 1.1;
      font-weight: 900;
      margin: 1rem 0 1.5rem;
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      letter-spacing: -0.02em;
      animation: fadeInUp 1s ease-out 0.5s both;
    }

    .hero-content h1 .gradient-word {
      background: linear-gradient(135deg, #ffffff 0%, #e8af4a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-tagline {
      font-size: clamp(1.125rem, 4vw, 1.5rem);
      line-height: 1.6;
      opacity: 0.95;
      margin-bottom: 2rem;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      animation: fadeInUp 1s ease-out 0.6s both;
    }

    .hero-ctas {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
      animation: fadeInUp 1s ease-out 0.7s both;
    }

    .btn-hero {
      padding: 14px 32px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      white-space: nowrap;
    }

    .btn-hero-primary {
      background: linear-gradient(135deg, #c8902a 0%, #e8af4a 100%);
      color: white;
      box-shadow: 0 8px 24px rgba(200, 144, 42, 0.3);
    }

    .btn-hero-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(200, 144, 42, 0.4);
    }

    .btn-hero-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }

    .btn-hero-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: #e8af4a;
      color: #e8af4a;
      transform: translateY(-3px);
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 2rem;
      max-width: 500px;
      margin: 0 auto;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      animation: fadeInUp 1s ease-out 0.8s both;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      display: block;
      font-size: clamp(1.75rem, 5vw, 2.5rem);
      font-weight: 900;
      color: #e8af4a;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.8);
      letter-spacing: 0.5px;
    }

    .hero-scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.875rem;
      cursor: pointer;
      z-index: 2;
      animation: fadeIn 1s ease-out 1s both;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .scroll-arrow {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: bounce 2s ease-in-out infinite;
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(8px);
      }
    }

    /* Mobile Adjustments */
    @media (max-width: 768px) {
      #hero {
        min-height: 500px;
        height: auto;
        padding: 6rem 0;
      }

      .hero-content {
        padding: 0 1.5rem;
      }

      .hero-content h1 {
        font-size: 2rem;
      }

      .hero-tagline {
        font-size: 1.125rem;
      }

      .hero-ctas {
        flex-direction: column;
      }

      .btn-hero {
        width: 100%;
        justify-content: center;
      }

      .hero-stats {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;
        padding-top: 1.5rem;
      }

      .stat-value {
        font-size: 1.5rem;
      }
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }

      .hero-scroll-indicator {
        display: none;
      }
    }
  </style>
</head>
<body>

<section id="hero">
  <!-- Video Background -->
  <div class="hero-video-container">
    <video
      autoplay
      muted
      loop
      playsinline
      poster="images/hero-poster.webp"
    >
      <source src="videos/hero-eldorado-tour.webm" type="video/webm">
      <source src="videos/hero-eldorado-tour.mp4" type="video/mp4">
      <!-- Fallback: Static image if video fails to load -->
      <img src="images/hero-eldorado-landscape.webp" alt="El Dorado, Kansas">
    </video>
  </div>

  <!-- Overlay -->
  <div class="hero-overlay"></div>

  <!-- Content -->
  <div class="hero-content">
    <span class="hero-badge">Est. 1901 — Kansas Oil Country</span>

    <h1>
      <span class="gradient-word">Vision</span> 2040
    </h1>

    <p class="hero-tagline">
      A regional development blueprint for El Dorado's next 15 years.
      Strategic leadership in the Wichita MSA.
    </p>

    <div class="hero-ctas">
      <button class="btn-hero btn-hero-primary" onclick="document.querySelector('#overview').scrollIntoView({behavior: 'smooth'})">
        <span>Explore the Vision</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 5v10m0 0l-3-3m3 3l3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <a href="investor-portal.html" class="btn-hero btn-hero-secondary">
        <span>For Investors</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 10h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-value">$490M</span>
        <span class="stat-label">Growth Target</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">1,500+</span>
        <span class="stat-label">New Jobs</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">15</span>
        <span class="stat-label">Year Vision</span>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="hero-scroll-indicator" onclick="document.querySelector('#overview').scrollIntoView({behavior: 'smooth'})">
    <div class="scroll-arrow">↓</div>
    <span>Scroll to explore</span>
  </div>
</section>

<!-- Next Section -->
<section id="overview" style="padding-top: 4rem;">
  <!-- Your existing overview content -->
</section>

</body>
</html>
```

### Video Production Notes
**For the hero video:**
- Duration: 60-90 seconds
- Format: WebM (preferred) + MP4 fallback
- Resolution: 1920×1080 minimum, 4K ideal
- File size: < 10MB WebM, < 15MB MP4
- Content suggestions:
  - Aerial shots of El Dorado Lake
  - Downtown Main Street
  - Agricultural landscape
  - Manufacturing facilities
  - Community events
  - Sunset/sunrise timelapses

**Production timeline:** 2-4 weeks if outsourced  
**Cost:** $1,500-3,000

---

## Hero Template 2: Image Slider Hero (Economy Page)

When you don't have video, a rotating image carousel works well.

### HTML & CSS
```html
<section id="hero" class="hero-slider">
  <div class="hero-slider-track">
    <div class="hero-slide active" style="background-image: url('images/economy-hero-1.webp')">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-slide" style="background-image: url('images/economy-hero-2.webp')">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-slide" style="background-image: url('images/economy-hero-3.webp')">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-slide" style="background-image: url('images/economy-hero-4.webp')">
      <div class="hero-overlay"></div>
    </div>
  </div>

  <div class="hero-content">
    <h1>Economic Growth Strategy</h1>
    <p>Attracting $490M in strategic investment across key industries</p>
    <button class="btn btn-primary" onclick="document.querySelector('#industries').scrollIntoView()">
      Explore Industries →
    </button>
  </div>

  <div class="hero-slider-controls">
    <button class="slider-dot active" data-slide="0"></button>
    <button class="slider-dot" data-slide="1"></button>
    <button class="slider-dot" data-slide="2"></button>
    <button class="slider-dot" data-slide="3"></button>
  </div>
</section>

<style>
.hero-slider {
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 60px;
}

.hero-slider-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(13, 27, 42, 0.6) 0%,
    rgba(200, 144, 42, 0.2) 100%
  );
}

.hero-slider .hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 0 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.hero-slider h1 {
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 1rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.hero-slider p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.hero-slider-controls {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 2;
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background: #c8902a;
  border-color: #c8902a;
  width: 32px;
  border-radius: 6px;
}

@media (max-width: 768px) {
  .hero-slider {
    height: 50vh;
    min-height: 400px;
  }

  .hero-slider h1 {
    font-size: 2rem;
  }

  .hero-slider p {
    font-size: 1rem;
  }
}
</style>

<script>
class HeroSlider {
  constructor() {
    this.slides = document.querySelectorAll('.hero-slide');
    this.dots = document.querySelectorAll('.slider-dot');
    this.currentSlide = 0;
    this.slideInterval = null;
    this.init();
  }

  init() {
    // Auto-play slides
    this.startAutoPlay();

    // Dot click handlers
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(this.slideInterval);
        this.goToSlide(index);
        this.startAutoPlay();
      });
    });
  }

  goToSlide(n) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    this.currentSlide = n;
    this.slides[n].classList.add('active');
    this.dots[n].classList.add('active');
  }

  nextSlide() {
    this.goToSlide((this.currentSlide + 1) % this.slides.length);
  }

  startAutoPlay() {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider();
});
</script>
```

---

## Hero Template 3: Static Image Hero (Housing Page)

Simplest option, loads fastest.

### HTML & CSS
```html
<section id="hero" class="hero-static" style="background-image: linear-gradient(135deg, rgba(13, 27, 42, 0.65) 0%, rgba(200, 144, 42, 0.25) 100%), url('images/housing-hero.webp'); background-size: cover; background-position: center;">
  <div class="hero-content">
    <span class="hero-label">Building Community</span>
    <h1>Housing Strategy 2040</h1>
    <p>Creating vibrant neighborhoods and affordable residential options for all life stages</p>
    <a href="#housing-strategy" class="btn btn-primary">View Housing Strategy →</a>
  </div>
</section>

<style>
.hero-static {
  position: relative;
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding: 4rem 2rem;
  overflow: hidden;
}

.hero-static::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%);
  pointer-events: none;
}

.hero-static .hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  max-width: 650px;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-static .hero-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e8af4a;
  margin-bottom: 1rem;
}

.hero-static h1 {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.hero-static p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.95;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .hero-static {
    min-height: 50vh;
    padding: 3rem 1.5rem;
  }

  .hero-static h1 {
    font-size: 2rem;
  }

  .hero-static p {
    font-size: 1rem;
  }
}
</style>
```

---

## Hero Template 4: Text-Only Hero with Accent (Place Page)

For cleaner, minimalist approach.

### HTML & CSS
```html
<section id="hero" class="hero-text-only">
  <div class="hero-accent-top"></div>
  
  <div class="hero-content">
    <div class="hero-breadcrumb">Home / Place & Recreation</div>
    <h1>Destination El Dorado</h1>
    <p>Discover the natural beauty, cultural heritage, and recreational excellence that make El Dorado a premier destination</p>
    <div class="hero-ctas">
      <button class="btn btn-primary" onclick="document.querySelector('#lake').scrollIntoView()">Explore Places</button>
      <button class="btn btn-secondary" onclick="document.querySelector('#events').scrollIntoView()">View Events</button>
    </div>
  </div>

  <div class="hero-accent-bottom"></div>
</section>

<style>
.hero-text-only {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f9f7f4 0%, #ffffff 100%);
  overflow: hidden;
  margin-top: 60px;
}

.hero-accent-top {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(200, 144, 42, 0.15), transparent);
  pointer-events: none;
}

.hero-accent-bottom {
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(31, 163, 107, 0.08), transparent);
  pointer-events: none;
}

.hero-text-only .hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

.hero-breadcrumb {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.hero-text-only h1 {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  color: var(--text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-text-only p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-text-only .hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-text-only {
    padding: 4rem 1.5rem;
    min-height: 50vh;
  }

  .hero-text-only h1 {
    font-size: 2rem;
  }

  .hero-text-only p {
    font-size: 1rem;
  }

  .hero-text-only .hero-ctas {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
```

---

## Hero Template 5: Data Hero (Reference/Finance Page)

Hero that emphasizes key metrics.

### HTML & CSS
```html
<section id="hero" class="hero-data">
  <div class="hero-background">
    <div class="data-dot" style="top: 10%; left: 15%;"></div>
    <div class="data-dot" style="top: 60%; right: 10%;"></div>
    <div class="data-dot" style="bottom: 15%; left: 20%;"></div>
  </div>

  <div class="hero-content">
    <span class="hero-eyebrow">By The Numbers</span>
    <h1>Economic Impact Analysis</h1>
    <p>Comprehensive financial projections and investment opportunities</p>
  </div>

  <div class="hero-metrics">
    <div class="metric-card">
      <div class="metric-icon">💰</div>
      <div class="metric-value" data-target="490" data-suffix="M">490M</div>
      <div class="metric-label">Growth Target</div>
    </div>
    <div class="metric-card">
      <div class="metric-icon">💼</div>
      <div class="metric-value" data-target="1500" data-suffix="+">1,500+</div>
      <div class="metric-label">New Jobs</div>
    </div>
    <div class="metric-card">
      <div class="metric-icon">🏢</div>
      <div class="metric-value" data-target="50" data-suffix="+">50+</div>
      <div class="metric-label">Companies</div>
    </div>
    <div class="metric-card">
      <div class="metric-icon">📈</div>
      <div class="metric-value" data-target="3" data-suffix="x">3x</div>
      <div class="metric-label">Multiplier Effect</div>
    </div>
  </div>
</section>

<style>
.hero-data {
  position: relative;
  min-height: 70vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%);
  color: white;
  overflow: hidden;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.data-dot {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 144, 42, 0.1), transparent);
  filter: blur(40px);
}

.hero-data .hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  animation: fadeInUp 0.8s ease-out;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e8af4a;
  margin-bottom: 1rem;
}

.hero-data h1 {
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  margin-bottom: 1rem;
}

.hero-data p {
  font-size: 1.25rem;
  opacity: 0.9;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  position: relative;
  z-index: 1;
}

.metric-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(200, 144, 42, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.metric-card:nth-child(2) {
  animation-delay: 0.2s;
}

.metric-card:nth-child(3) {
  animation-delay: 0.3s;
}

.metric-card:nth-child(4) {
  animation-delay: 0.4s;
}

.metric-card:hover {
  background: rgba(200, 144, 42, 0.15);
  border-color: #c8902a;
  transform: translateY(-8px);
}

.metric-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.metric-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: #e8af4a;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .hero-data {
    min-height: auto;
    padding: 4rem 1.5rem;
    gap: 3rem;
  }

  .hero-metrics {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .metric-card {
    padding: 1.5rem;
  }

  .metric-value {
    font-size: 2rem;
  }
}
</style>

<script>
// Animate metric counters on scroll into view
const animateCounter = (element) => {
  const target = parseInt(element.dataset.target);
  const suffix = element.dataset.suffix || '';
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString() + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString() + suffix;
    }
  }, 16);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      animateCounter(entry.target);
    }
  });
});

document.querySelectorAll('.metric-value').forEach(el => {
  observer.observe(el);
});
</script>
```

---

## Performance Optimization for Heroes

### Image Optimization
```html
<!-- Use responsive images with WebP fallback -->
<picture>
  <source srcset="hero-large.webp 1920w, hero-medium.webp 1280w, hero-small.webp 640w" type="image/webp">
  <source srcset="hero-large.jpg 1920w, hero-medium.jpg 1280w, hero-small.jpg 640w" type="image/jpeg">
  <img src="hero-medium.jpg" alt="El Dorado landscape" loading="lazy">
</picture>
```

### Critical CSS Inlining
```html
<head>
  <style>
    /* Critical above-the-fold styles only */
    #hero {
      min-height: 60vh;
      display: flex;
      align-items: center;
    }
  </style>
  
  <!-- Deferred non-critical CSS -->
  <link rel="preload" href="css/hero-animations.css" as="style">
  <link rel="stylesheet" href="css/hero-animations.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="css/hero-animations.css"></noscript>
</head>
```

### LCP Optimization Target: < 2.5s
```css
/* Minimize paint areas */
#hero {
  contain: layout style paint;
}

/* Use will-change sparingly */
.hero-content {
  will-change: opacity, transform;
}
```

---

## Responsive Hero Testing Checklist

- [ ] Desktop (1920px+) — full experience
- [ ] Tablet (1024px) — navigation stacks, text readable
- [ ] Mobile (375px) — buttons stack, fonts clear
- [ ] Mobile landscape — content not cut off
- [ ] Dark mode — text contrast maintained
- [ ] Reduced motion — no animations jarring
- [ ] Slow 3G — loads progressively
- [ ] Touch — buttons minimum 48px × 48px
- [ ] Keyboard — focus indicators visible
- [ ] Screen reader — semantic HTML, ARIA labels

---

## Hero Section Checklist

For each hero section, verify:
- [ ] H1 present and descriptive
- [ ] Primary CTA clear and prominent
- [ ] Secondary CTA available
- [ ] Loading indicator for media (video/images)
- [ ] Fallback image if video fails
- [ ] Mobile-optimized layout
- [ ] Scroll indicator on desktop
- [ ] Animations use `prefers-reduced-motion`
- [ ] LCP < 2.5s target
- [ ] Lighthouse Performance score tracked

---

## Next Steps

1. Choose which hero templates to implement
2. Gather or source hero images/videos
3. Update each page's hero section
4. Test on mobile first
5. Verify Lighthouse scores
6. Deploy and monitor GA4 engagement metrics

*Each hero enhancement takes 30-60 minutes to implement once images are ready.*

---

*Ready to implement? Start with index.html using Template 1 (Video Hero). If video production takes too long, fall back to Template 2 (Slider) or Template 3 (Static).*
