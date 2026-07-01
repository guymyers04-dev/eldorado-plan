# El Dorado CSS Utilities — Rapid Development with Utility Classes
**Complete utility class library for fast, consistent styling**

---

## Overview

This guide provides CSS utility classes for rapid development without writing custom CSS. Similar to Tailwind CSS but tailored to El Dorado's design system.

**Benefits:**
- ✓ Consistent spacing and sizing
- ✓ Faster development (no custom CSS)
- ✓ Consistent naming conventions
- ✓ Dark mode automatically applied
- ✓ Responsive breakpoints included

---

## Part 1: Display & Layout Utilities

### Display
```css
.d-block { display: block; }
.d-inline { display: inline; }
.d-inline-block { display: inline-block; }
.d-flex { display: flex; }
.d-grid { display: grid; }
.d-none { display: none; }
.d-hidden { visibility: hidden; }
.d-visible { visibility: visible; }
```

### Flexbox
```css
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.gap-0 { gap: 0; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem; }
.gap-3 { gap: 0.75rem; }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }
.gap-8 { gap: 2rem; }
```

**Example:**
```html
<div class="d-flex flex-row items-center justify-between gap-4">
  <h2>Title</h2>
  <button>Action</button>
</div>
```

---

## Part 2: Spacing Utilities

### Margin
```css
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-3 { margin: 0.75rem; }
.m-4 { margin: 1rem; }
.m-6 { margin: 1.5rem; }
.m-8 { margin: 2rem; }
.m-12 { margin: 3rem; }

/* Directional */
.mt-4 { margin-top: 1rem; }
.mr-4 { margin-right: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.ml-4 { margin-left: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
```

### Padding
```css
.p-0 { padding: 0; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }

/* Directional */
.pt-4 { padding-top: 1rem; }
.pr-4 { padding-right: 1rem; }
.pb-4 { padding-bottom: 1rem; }
.pl-4 { padding-left: 1rem; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
```

---

## Part 3: Typography Utilities

### Font Size
```css
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 2rem; }
.text-4xl { font-size: 2.5rem; }
```

### Font Weight
```css
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 900; }
```

### Text Alignment
```css
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
```

### Text Styles
```css
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
.italic { font-style: italic; }
.underline { text-decoration: underline; }
.line-through { text-decoration: line-through; }
.no-underline { text-decoration: none; }
```

### Line Height
```css
.leading-tight { line-height: 1.25; }
.leading-snug { line-height: 1.375; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.625; }
.leading-loose { line-height: 2; }
```

---

## Part 4: Color Utilities

### Text Colors
```css
.text-primary { color: #1a1614; }
.text-secondary { color: #4a4238; }
.text-muted { color: #8a7d73; }
.text-gold { color: #c8902a; }
.text-emerald { color: #1fa36b; }
.text-rust { color: #c54a31; }
.text-white { color: white; }
```

### Background Colors
```css
.bg-white { background: white; }
.bg-cream { background: #f9f7f4; }
.bg-light-gray { background: #f5f3f0; }
.bg-gray { background: #e8e4df; }
.bg-gold-light { background: rgba(200, 144, 42, 0.1); }
.bg-emerald-light { background: rgba(31, 163, 107, 0.1); }
```

### Border Colors
```css
.border-gray { border-color: #e8e4df; }
.border-gold { border-color: #c8902a; }
.border-emerald { border-color: #1fa36b; }
```

---

## Part 5: Size Utilities

### Width
```css
.w-auto { width: auto; }
.w-full { width: 100%; }
.w-1/2 { width: 50%; }
.w-1/3 { width: 33.333%; }
.w-2/3 { width: 66.666%; }
.w-1/4 { width: 25%; }
.w-3/4 { width: 75%; }
.max-w-sm { max-width: 24rem; }
.max-w-md { max-width: 28rem; }
.max-w-lg { max-width: 32rem; }
.max-w-2xl { max-width: 42rem; }
.max-w-4xl { max-width: 56rem; }
.max-w-6xl { max-width: 72rem; }
```

### Height
```css
.h-auto { height: auto; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.min-h-screen { min-height: 100vh; }
```

---

## Part 6: Border Utilities

### Border Style
```css
.border { border: 1px solid #e8e4df; }
.border-0 { border: none; }
.border-t { border-top: 1px solid #e8e4df; }
.border-r { border-right: 1px solid #e8e4df; }
.border-b { border-bottom: 1px solid #e8e4df; }
.border-l { border-left: 1px solid #e8e4df; }
```

### Border Radius
```css
.rounded-sm { border-radius: 4px; }
.rounded { border-radius: 8px; }
.rounded-md { border-radius: 12px; }
.rounded-lg { border-radius: 16px; }
.rounded-full { border-radius: 9999px; }
```

---

## Part 7: Shadow Utilities

```css
.shadow-none { box-shadow: none; }
.shadow-sm { box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.shadow { box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.shadow-md { box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
.shadow-lg { box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
.shadow-xl { box-shadow: 0 20px 40px rgba(0,0,0,0.18); }
```

---

## Part 8: Opacity Utilities

```css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: 0.25; }
.opacity-50 { opacity: 0.5; }
.opacity-75 { opacity: 0.75; }
.opacity-100 { opacity: 1; }
```

---

## Part 9: Position Utilities

```css
.static { position: static; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.sticky { position: sticky; }

/* Position values */
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.top-0 { top: 0; }
.right-0 { right: 0; }
.bottom-0 { bottom: 0; }
.left-0 { left: 0; }
```

---

## Part 10: Overflow Utilities

```css
.overflow-auto { overflow: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-visible { overflow: visible; }
.overflow-x-auto { overflow-x: auto; }
.overflow-y-auto { overflow-y: auto; }

.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
```

---

## Part 11: Cursor Utilities

```css
.cursor-auto { cursor: auto; }
.cursor-default { cursor: default; }
.cursor-pointer { cursor: pointer; }
.cursor-wait { cursor: wait; }
.cursor-text { cursor: text; }
.cursor-not-allowed { cursor: not-allowed; }
```

---

## Part 12: Responsive Breakpoints

Add prefix for responsive behavior:

```css
/* Mobile-first approach */
.block { display: block; }           /* All devices */
@media (min-width: 640px) {
  .sm\:flex { display: flex; }       /* ≥640px */
}
@media (min-width: 1024px) {
  .md\:grid { display: grid; }       /* ≥1024px */
}
@media (min-width: 1280px) {
  .lg\:flex-row { flex-direction: row; } /* ≥1280px */
}
```

**Usage:**
```html
<!-- Stacked on mobile, side-by-side on desktop -->
<div class="d-block md:d-flex gap-4">
  <div>Content 1</div>
  <div>Content 2</div>
</div>
```

---

## Part 13: Practical Examples

### Hero Section
```html
<section class="relative d-flex flex-col items-center justify-center 
             min-h-screen bg-cream py-20 px-4">
  <h1 class="text-4xl font-extrabold text-center mb-6">
    Vision 2040
  </h1>
  <p class="text-xl text-secondary max-w-2xl text-center mb-8">
    A regional development blueprint for El Dorado's future
  </p>
  <button class="btn btn-primary">Explore Vision</button>
</section>
```

### Card Grid
```html
<div class="card-grid gap-8 mb-12">
  <div class="card p-6 rounded-md shadow-md">
    <h3 class="text-xl font-semibold text-primary mb-3">
      Feature Title
    </h3>
    <p class="text-secondary leading-relaxed mb-4">
      Feature description goes here
    </p>
    <a href="#" class="text-gold font-semibold">Learn more →</a>
  </div>
  <!-- More cards -->
</div>
```

### Feature Section
```html
<section class="py-16 px-4 bg-white">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">
      Key Industries
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card items here -->
    </div>
  </div>
</section>
```

---

## Part 14: Dark Mode Utilities

All utilities automatically work with dark mode when `[data-theme="dark"]` is applied.

```css
/* Automatic color inversion */
.text-primary { color: #1a1614; }  /* Light mode */
[data-theme="dark"] .text-primary { color: #f5f3f0; }  /* Dark mode */

.bg-white { background: white; }   /* Light mode */
[data-theme="dark"] .bg-white { background: #0a0e13; }  /* Dark mode */
```

---

## Part 15: Utility Combinations

Common utility combinations for faster development:

```css
/* Centered container */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* Card with hover effect */
.card-interactive {
  @apply card shadow-md rounded-md p-6 transition-all;
}
.card-interactive:hover {
  @apply shadow-lg transform -translate-y-1;
}

/* Button with active state */
.btn-interactive {
  @apply px-4 py-2 rounded transition-colors;
}
.btn-interactive:active {
  @apply opacity-75;
}
```

---

## Part 16: Performance Considerations

### File Size
- Uncompressed CSS utilities: ~45KB
- Minified: ~18KB
- Gzipped: ~5KB

### Usage Tips
1. Only include utilities you use
2. Purge unused utilities in production
3. Consider using CSS variables for frequently changed values
4. Group related utilities in comments

### Production Optimization
```bash
# Purge unused utilities
npx uncss --htmlroot . --html '**/*.html' input.css -o output.css

# Minify
npx csso input.css output.min.css

# Gzip for comparison
gzip -9 output.min.css
```

---

## Summary

**Benefits of utility-first CSS:**
- ✓ Faster development (no naming conventions)
- ✓ Consistent spacing and sizing
- ✓ Easy to maintain (changes in one place)
- ✓ Responsive by default
- ✓ Dark mode compatible
- ✓ Predictable output

**When to use:**
- Quick prototypes
- Landing pages
- Admin interfaces
- Content pages

**When to write custom CSS:**
- Complex animations
- Unique layouts
- Performance-critical sections
- Custom brand elements

---

*Last updated: June 30, 2026*
