# Quick Test Guide — 5-Minute Verification
**Purpose:** Verify all audit fixes are working correctly before moving forward

---

## 🧪 TEST 1: Scroll-Spy Navigation (2 min)

### On Desktop (1440px)
```
1. Open browser to: /Users/guyh/eldorado-plan/place-downtown.html
2. Scroll slowly down the page
3. Watch the pill nav at the top
   
   ✅ PASS:  Pill highlights "At a Glance" at top
             → As you scroll, becomes "12 Major Initiatives"
             → Changes to "Next Steps" as you reach bottom
   
   ❌ FAIL:  Pills don't highlight at all
             → Check browser console for errors (F12)
             → Verify section IDs exist (Ctrl+F "id=")
```

### On Mobile (375px)
```
1. Open F12 (Developer Tools)
2. Click device toolbar (phone icon)
3. Set viewport to 375px wide
4. Open same page
5. Scroll through slowly

   ✅ PASS:  Pills still highlight as you scroll
             Pill nav scrolls horizontally if many pills
             No vertical scrollbar within pill nav
   
   ❌ FAIL:  Pills don't highlight
             → Verify same section IDs exist
```

---

## 🧪 TEST 2: Navigation Loop (1 min)

```
1. Open: /reference.html
2. Scroll to bottom of page
3. Look for "Tour Complete" section

   ✅ PASS:  See "Tour Complete" section with:
             - "← Back to Home" button
             - Links to stakeholders, implementation, engagement
   
   ❌ FAIL:  No "Tour Complete" section at bottom
             → Check file was edited (should be before </footer>)
```

---

## 🧪 TEST 3: Mobile Responsiveness (1 min)

### Tablet (768px)
```
1. Open F12 → Device Toolbar
2. Select "iPad" (768px width)
3. Open /index.html

   ✅ PASS:  Content readable without horizontal scrolling
             Pill nav might scroll horizontally (OK)
             All buttons are clickable without zooming
   
   ❌ FAIL:  Content overlaps or flows off screen
             → Check CSS media queries were added
```

### Mobile (375px)
```
1. Select "iPhone SE" (375px width)
2. Reload /index.html

   ✅ PASS:  All text readable at device width
             Grid items stack to single column
             Hero stats stack vertically
             Buttons have padding and are clickable
   
   ❌ FAIL:  Text too small or overlapping
             → CSS might not have applied correctly
```

---

## 🧪 TEST 4: Color Contrast (30 sec)

```
1. Right-click on any navigation link
2. Inspect element (F12)
3. Check the color in styles

   ✅ PASS:  Should show: color: rgba(255,255,255,.90);
             (not .75 or .72)
   
   ❌ FAIL:  Still shows .75 or .72
             → CSS changes might not have saved
```

---

## 🧪 TEST 5: Index Pill Nav (1 min)

```
1. Open /index.html
2. Scroll down to "Eight Pillars" section

   ✅ PASS:  Sticky pill nav appears below hero
             Pills: "Our Foundation" → "Eight Pillars" → "Quick Links" → "All Resources"
             As you scroll, pills highlight the active section
   
   ❌ FAIL:  No pill nav visible
             → Check HTML edit was applied
             → Check sections have IDs: #vision, #pillars, #quicklinks
```

---

## 📋 SUMMARY CHECKLIST

- [ ] Scroll-spy works on detail pages (place-downtown.html)
- [ ] Scroll-spy works on index.html
- [ ] Reference.html has "Tour Complete" CTA
- [ ] Navigation text appears brighter (90% white, not 75%)
- [ ] Mobile layout (375px) stacks properly
- [ ] No horizontal scrolling on mobile (except pill nav)
- [ ] All buttons are clickable at 375px width

---

## 🆘 If Tests Fail

### Scroll-spy not working?
```bash
# Check if observer code is in main.js
grep -n "let topSection = null" /Users/guyh/eldorado-plan/js/main.js

# Should return:  11:  let topSection = null;
# If not found, JS changes didn't apply
```

### Reference.html Tour Complete missing?
```bash
# Check if section was added
grep -n "Tour Complete" /Users/guyh/eldorado-plan/reference.html

# Should return matches in the file
# If not found, HTML edit didn't apply
```

### Color contrast still wrong?
```bash
# Check CSS was updated
grep "rgba(255,255,255,.90)" /Users/guyh/eldorado-plan/css/styles.css

# Should return 2+ matches
# If not found, CSS edit didn't apply
```

### Mobile layout broken?
```bash
# Check media queries were added
grep -c "@media (max-width: 768px)" /Users/guyh/eldorado-plan/css/styles.css

# Should return 9 (multiple media queries)
# If less than 5, CSS changes may not have applied
```

---

## ✅ All Tests Pass?

**Congratulations!** All critical fixes are working. You're ready to:

1. **Deploy GA4 Analytics** (30 min) — See PHASE_1_COMPLETION_CHECKLIST.md
2. **Expand Detail Pages** (3–4 hours) — See PHASE_1_COMPLETION_CHECKLIST.md
3. **Launch Phase 2** — Community engagement tools ready to build

---

**Need help?** Check the detailed documentation:
- `AUDIT_FIXES_APPLIED.md` — Technical details of each fix
- `PHASE_1_COMPLETION_CHECKLIST.md` — What to do next
- `README_AUDIT_COMPLETION.md` — Complete overview
