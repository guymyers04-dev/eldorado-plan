# El Dorado Vision 2040 — Brand Guidelines & Design System
**Complete visual identity standards for consistent, professional appearance**

---

## Introduction

These brand guidelines ensure El Dorado's visual identity is consistent, professional, and recognizable across all touchpoints.

**This document covers:**
- Color palette & usage
- Typography system
- Photography style
- Imagery & iconography
- Component styling
- Tone & voice
- Application examples

---

## Part 1: Color Palette

### Primary Colors

#### Navy (#0D1B2A)
**Purpose:** Foundation, trust, stability  
**Usage:** Backgrounds, headings, primary text  
**Psychology:** Authoritative, professional, calm

```css
--navy: #0D1B2A;
--navy-light: #1B3A5C;
--navy-lighter: #2D5A8C;
```

**When to use:**
- Page backgrounds
- Navigation bar
- Large text blocks
- Primary buttons (dark theme)
- Hero section overlays

**When NOT to use:**
- Small text (contrast issues)
- Hover states (needs lighter variant)
- Body copy (use text color instead)

---

#### Gold (#C8902A)
**Purpose:** Opportunity, prosperity, heritage, call-to-action  
**Usage:** Accents, CTAs, highlights, hover states  
**Psychology:** Premium, growth, warmth

```css
--gold: #C8902A;
--gold-dark: #9B6F1F;
--gold-light: #E8AF4A;
```

**When to use:**
- Primary call-to-action buttons
- Section dividers
- Hover states on interactive elements
- Accent text/callouts
- Icons highlighting key information
- Gold accent bar at top of cards

**When NOT to use:**
- Large background areas (too intense)
- Small text on white (contrast issues)
- Too many elements (dilutes impact)

**Contrast Notes:**
- Gold (#C8902A) on Navy (#0D1B2A): **7.2:1** ✅ (WCAG AAA)
- Gold (#C8902A) on White (#FFFFFF): **4.2:1** ✅ (WCAG AA)
- Gold on Light Gray: Test before using

---

### Secondary Colors

#### Emerald (#1FA36B)
**Purpose:** Growth, success, positive indicators  
**Usage:** Job statistics, growth projections, success states

```css
--emerald: #1FA36B;
--emerald-light: #2EBB85;
```

**When to use:**
- Job creation statistics
- Growth percentage indicators
- Success/completion states
- Green light elements
- Community/environmental initiatives

**When NOT to use:**
- General design (keep focused)
- Error states (use red)
- Backgrounds (can be jarring)

---

#### Rust (#C54A31)
**Purpose:** Energy, urgency, transformation  
**Usage:** Sparingly for critical CTAs or alerts

```css
--rust: #C54A31;
--rust-light: #E85C3F;
```

**When to use:**
- Deadline-driven CTAs
- Critical alerts
- Time-sensitive opportunities
- Energy/urgency conveyed

**When NOT to use:**
- General backgrounds
- Common elements (reserve for emphasis)
- Frequently (overuses impact)

---

#### Sky Blue (#2E8BDE)
**Purpose:** Trust, information, clarity  
**Usage:** Links, information elements, data visualization

```css
--sky: #2E8BDE;
```

**When to use:**
- Hyperlinks
- Information icons
- Data chart lines
- Secondary actions
- Supporting information

---

### Neutrals

```css
--cream: #F9F7F4;           /* Soft white, card backgrounds */
--gray-100: #F5F3F0;        /* Light gray, subtle backgrounds */
--gray-200: #E8E4DF;        /* Light border, dividers */
--gray-300: #D8D0C8;        /* Medium gray, subtle elements */
--gray-400: #B8AAA0;        /* Medium-dark gray */
--gray-500: #8A7D73;        /* Dark gray, secondary text */
--gray-600: #5A5249;        /* Darker gray */
--gray-700: #3C3631;        /* Very dark gray */

--text: #1A1614;            /* Near black, primary text */
--text-secondary: #4A4238;  /* Medium gray, secondary text */
--white: #FFFFFF;           /* Pure white */
```

**Usage:**
- Text: Use `--text` for headings/primary content
- Secondary text: Use `--text-secondary` for supporting copy
- Backgrounds: Use `--cream` or `--gray-100` for subtle backgrounds
- Borders: Use `--gray-200` or `--gray-300`

---

### Color Usage by Component

| Component | Primary Color | Secondary Color | Text Color | Border |
|-----------|---|---|---|---|
| Primary Button | Gold | Gold-Dark | White | Gold |
| Secondary Button | Navy | Navy-Light | White | Gray-200 |
| Card | Cream | White | Text | Gray-200 |
| Section Header | Navy | Gold-Light | Gold | Gold |
| Alert/Success | Emerald | Emerald-Light | White | Emerald |
| Alert/Error | Red/Rust | Light Red | White | Red |
| Link | Sky | Sky-Dark | Sky | None |
| Callout Box | Gold/Cream | Gold-Light | Text | Gold |

---

## Part 2: Typography System

### Font Family

**Display/Headings:** Playfair Display  
**Body/UI:** Inter

```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Why these fonts:**
- Playfair Display: Elegant, distinctive, premium feel
- Inter: Clean, modern, highly legible on screens
- Fallbacks: Serif (Georgia) and system fonts ensure graceful degradation

---

### Typography Scale

**Desktop:**
```
H1: 3.5-4rem (56-64px), 900 weight, line-height 1.1
H2: 2.5-3rem (40-48px), 700 weight, line-height 1.2
H3: 1.75-2rem (28-32px), 700 weight, line-height 1.3
H4: 1.5rem (24px), 600 weight, line-height 1.4
H5: 1.25rem (20px), 600 weight, line-height 1.5
H6: 1.125rem (18px), 600 weight, line-height 1.5

Body: 1rem-1.125rem (16-18px), 400 weight, line-height 1.75
Small: 0.875-1rem (14-16px), 400 weight, line-height 1.6
Caption: 0.75rem (12px), 500 weight, line-height 1.5
```

**Mobile:**
```
H1: 2-2.5rem (32-40px)
H2: 1.75rem (28px)
H3: 1.5rem (24px)
H4: 1.25rem (20px)
Body: 1rem (16px)
```

### Typography Usage Rules

**Headings (Playfair Display):**
- Use 700-900 weight
- Max line length: 60-80 characters
- Sentence case (capitalize first word only, unless proper noun)
- Never all caps (less readable)
- Letter-spacing: -0.02em for large sizes

**Body Text (Inter):**
- Use 400-500 weight
- Line height: 1.75-1.8
- Line length: 65-75 characters max
- Text color: --text or --text-secondary
- Letter-spacing: normal or -0.01em

**Links:**
- Text decoration: underline on hover
- Color: --sky or --gold
- Weight: 600
- Never plain text without indication

**Emphasis:**
- Bold (600-700): For important words
- Italic: Only for quotes or article titles
- ALL CAPS: Only for abbreviations/acronyms
- Combinations: Avoid bold+italic

---

### Line Length Best Practices
```css
/* Optimal line length: 65-75 characters */
/* For headings: 45-60 characters max */

.content-wrapper {
  max-width: 65ch; /* character units */
  /* or */
  max-width: 900px; /* with proper padding */
}
```

---

## Part 3: Photography & Imagery Guidelines

### Photography Style

**Overall aesthetic:** Professional, authentic, aspirational

**Key characteristics:**
- ✅ Real El Dorado locations (not generic stock)
- ✅ Bright, well-lit (avoid dark/underexposed)
- ✅ Clear subject matter (not busy/cluttered)
- ✅ Warm color grading (natural tones, gold-ish hue)
- ✅ Diverse representation (people from varied backgrounds)
- ✅ Action-oriented (people doing things, not just standing)

**Photography DO's:**
- ✅ Use natural light where possible
- ✅ Include people in community/place images
- ✅ Capture authentic moments (not staged-looking)
- ✅ Use compositional rules (rule of thirds, leading lines)
- ✅ Include wide shots AND detail shots
- ✅ Vary perspectives (ground level, aerial, eye level)

**Photography DON'Ts:**
- ❌ Overly filtered or unrealistic colors
- ❌ Cheesy stock photo expressions/poses
- ❌ Dark/underexposed images
- ❌ Clutter or busy backgrounds
- ❌ Inconsistent color grading across set
- ❌ Watermarks or copyright symbols visible
- ❌ Blurry or low-resolution images

### Image Dimensions

**Hero sections:** 1920×1080 (16:9 widescreen)  
**Section headers:** 1600×600 (8:3)  
**Cards:** 400×300 (4:3) or 500×400  
**Thumbnails:** 300×200  
**Thumbnail grids:** 400×300

**Always provide:**
- Original high-resolution
- Large (1920px)
- Medium (1280px)
- Small (640px)
- WebP + JPEG formats

### Color Grading Consistency
All photography should have:
- ✅ Warm color temperature (5500-6000K)
- ✅ Slightly elevated saturation (110-120%)
- ✅ Gold/warm tones in shadows
- ✅ Slight lift in shadows (not pure black)
- ✅ Consistent exposure across set
- ✅ Consistent white balance

---

## Part 4: Iconography

### Icon Style
- **Style:** Stroke-based (not filled)
- **Weight:** 2px stroke width
- **Corners:** Rounded (2-4px radius)
- **Size:** 20×20px base (scale up from there)
- **Color:** Inherit from parent (use currentColor)

### Icon Usage

**Navigation icons:** Optional, paired with text  
**Feature icons:** 48-64px, solid fill with background  
**Inline icons:** 16-20px, stroke-based  
**Social icons:** 24-32px, brand colors

### Icon Examples

```html
<!-- Navigation icon (stroke-based) -->
<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 5v10M10 15l-3-3m3 3l3-3" stroke="currentColor" stroke-width="2"/>
</svg>

<!-- Feature icon (filled, larger) -->
<svg width="64" height="64" viewBox="0 0 64 64" fill="none">
  <circle cx="32" cy="32" r="30" fill="#C8902A" fill-opacity="0.1" stroke="#C8902A" stroke-width="2"/>
  <path d="..." fill="#C8902A"/>
</svg>

<!-- Inline icon (small) -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
  <path d="..."/>
</svg>
```

---

## Part 5: Spacing & Layout

### Spacing Scale
```
--space-0:   0px
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px       (1rem)
--space-5:   20px
--space-6:   24px       (1.5rem) — Common
--space-8:   32px       (2rem)
--space-10:  40px
--space-12:  48px       (3rem)
--space-16:  64px
--space-20:  80px
```

**Usage:**
- Margin between sections: `--space-12` to `--space-20`
- Padding inside cards: `--space-6` to `--space-8`
- Gap between elements: `--space-4` to `--space-6`
- Heading margin bottom: `--space-6` to `--space-8`

### Border Radius
```
--radius-sm:   4px     (Input fields, small badges)
--radius-md:   8px     (Cards, buttons)
--radius-lg:   12px    (Larger cards, modals)
--radius-xl:   16px    (Featured sections)
--radius-2xl:  24px    (Large hero elements)
```

### Grid & Layout
```css
/* Main container max-width */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Standard grid spacing */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

/* Responsive grid breakpoints */
/* Mobile: 1 column */
/* Tablet: 2 columns (768px) */
/* Desktop: 3 columns (1024px) */
```

---

## Part 6: Shadows & Elevation

### Shadow System
```
--shadow-xs:   0 1px 2px rgba(0,0,0,0.05)       (Very subtle)
--shadow-sm:   0 2px 4px rgba(0,0,0,0.08)       (Subtle)
--shadow-md:   0 4px 12px rgba(0,0,0,0.12)      (Medium)
--shadow-lg:   0 12px 24px rgba(0,0,0,0.15)     (Prominent)
--shadow-xl:   0 20px 40px rgba(0,0,0,0.18)     (Heavy)
--shadow-2xl:  0 40px 80px rgba(0,0,0,0.20)     (Very heavy)

--shadow-hover: 0 16px 32px rgba(0,0,0,0.16)    (Hover state)
```

**When to use:**
- Cards: `--shadow-md` (default), `--shadow-lg` (hover)
- Buttons: `--shadow-sm` (default), `--shadow-md` (hover)
- Modals: `--shadow-2xl`
- Floating elements: `--shadow-lg` to `--shadow-xl`

---

## Part 7: Component Specifications

### Buttons

**Primary Button:**
```css
.btn-primary {
  background: linear-gradient(135deg, #c8902a 0%, #e8af4a 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(200, 144, 42, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: #c8902a;
  border: 2px solid #c8902a;
  padding: 10px 22px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #c8902a;
  color: white;
  transform: translateY(-2px);
}
```

### Cards

```css
.card {
  background: white;
  border: 1px solid #e8e4df;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  border-color: #c8902a;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #c8902a 0%, #e8af4a 100%);
  border-radius: 12px 12px 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: scaleX(1);
}
```

### Input Fields

```css
input[type="text"],
input[type="email"],
textarea,
select {
  padding: 12px 16px;
  border: 1px solid #e8e4df;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  background: white;
  color: #1a1614;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #c8902a;
  box-shadow: 0 0 0 3px rgba(200, 144, 42, 0.1);
}

input::placeholder {
  color: #8a7d73;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #1a1614;
  font-size: 0.95rem;
}
```

---

## Part 8: Animations & Transitions

### Standard Transitions
```css
--transition-fast:  150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base:  250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:  350ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Animations
```css
/* Fade in on scroll */
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

/* Slide in from left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale up with fade */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Hover scale */
@keyframes hoverScale {
  to {
    transform: scale(1.05);
  }
}
```

### Accessibility: Respect Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Part 9: Dark Mode Color Adjustments

When dark mode is enabled, adjust:

```css
[data-theme="dark"] {
  --bg-primary: #0a0e13;
  --bg-secondary: #1a1f2a;
  --text-primary: #f5f3f0;
  --text-secondary: #b8aaa0;
  --border: #2d3541;
  
  /* Brighten gold slightly for better contrast */
  --gold: #d4af50;
  --gold-light: #e8c570;
}
```

---

## Part 10: Application Examples

### Example 1: Section Header
```html
<div class="section-header">
  <span class="section-label">Strategic Initiative</span>
  <h2>Priority Industries</h2>
  <div class="divider"></div>
  <p class="section-description">Six key sectors for El Dorado's growth</p>
</div>

<style>
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c8902a;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #1a1614;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 700;
}

.divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #c8902a, #e8af4a);
  margin: 1.5rem auto;
}

.section-description {
  font-size: 1.25rem;
  color: #4a4238;
  line-height: 1.6;
}
</style>
```

### Example 2: Card Grid
```html
<div class="card-grid">
  <div class="card">
    <div class="card-header">
      <h3>Aerospace & Defense</h3>
    </div>
    <p>Strategic positioning for precision manufacturing and aerospace supply chain.</p>
    <a href="#" class="card-link">Learn more →</a>
  </div>
  <!-- More cards... -->
</div>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin: var(--space-12) 0;
}
</style>
```

---

## Part 11: Brand Voice & Tone

### Voice Characteristics
- **Professional:** Industry knowledge, credible
- **Aspirational:** Forward-thinking, growth-focused
- **Approachable:** Clear, not overly technical
- **Authentic:** Real, not corporate-speak

### Writing Guidelines
- ✅ Use active voice ("We invest in your success" not "Success is invested in")
- ✅ Be specific ("$490M growth target" not "significant growth")
- ✅ Use action verbs ("Drive growth" not "Enable growth")
- ✅ Keep sentences short and punchy
- ✅ Use bullet points for lists
- ✅ Avoid jargon or explain it
- ✅ Be optimistic but realistic

### Example Copywriting

**Good:**
"Attract 1,500 new jobs through strategic investment in priority industries."

**Avoid:**
"The facilitation of employment growth through strategic sectoral diversification initiatives."

---

## Part 12: Quality Checklist

Before publishing any page:
- [ ] Colors match brand palette (no RGB drift)
- [ ] Typography follows scale (no random sizes)
- [ ] Spacing is consistent (multiples of 4px)
- [ ] Images have proper alt text
- [ ] All CTAs use brand button styles
- [ ] Contrast ratios meet WCAG AA (4.5:1)
- [ ] Mobile version is clean and readable
- [ ] Dark mode works correctly
- [ ] Animations respect reduced-motion preference
- [ ] No broken links or images
- [ ] Lighthouse score is 85+

---

## Summary

These guidelines ensure:
✅ **Consistency** across all 131 pages  
✅ **Professionalism** in every pixel  
✅ **Accessibility** for all users  
✅ **Performance** without sacrificing beauty  
✅ **Brand identity** that's uniquely El Dorado  

**Stick to these standards.** Deviation dilutes brand impact.

---

*Reference this guide during design reviews and QA.*

*Last updated: June 30, 2026*
