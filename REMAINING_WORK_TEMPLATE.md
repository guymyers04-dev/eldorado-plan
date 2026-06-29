# Remaining Work — Template & Quick Guide
**Status:** 75% Complete (6 of 7 tasks done)  
**Next Task:** Add content to 4 remaining detail pages (1–2 hours)  

---

## 📋 What's Completed

✅ All critical JavaScript fixes  
✅ Mobile responsiveness (CSS)  
✅ GA4 analytics deployed to 9 pages  
✅ place-lake.html — Full expansion  
✅ place-downtown.html — Full expansion  
✅ Documentation (4 guides created)  

---

## ⏳ What Remains (Simple Copy-Paste)

Add content expansion to 4 detail pages:
- place-arts.html
- place-tourism.html
- place-parks.html
- place-beautification.html

**Good news:** You can use the exact same template from place-downtown.html or place-lake.html. Just customize the strategy descriptions.

---

## 🚀 Quickest Way to Finish

### Option 1: Copy Template from Working Page (5 min per page)
```
1. Open place-downtown.html in editor
2. Copy the sections:
   <!-- ════ VISION STRATEGY ════ -->
   <!-- ════ FUNDING & INVESTMENT ════ -->
   <!-- ════ SUCCESS METRICS ════ -->

3. Paste into place-arts.html (BEFORE <!-- ════ NAVIGATION BACK ════ -->)
4. Update the <h2> and <p> text for arts theme
5. Save and test

Repeat for other 3 pages.
```

### Option 2: Generic Templates (Copy & Customize)

Use these as starting points. Just update the title, description, and strategy goals:

---

## 🎨 Template: VISION STRATEGY Section

```html
<!-- ════ VISION STRATEGY ════ -->
<section id="strategy" class="section section--place" style="background:var(--cream);padding:var(--section-pad)">
  <div class="container">
    <h2>Vision 2040 [TOPIC] Strategy</h2>
    <p style="color:var(--muted);margin-bottom:1.5rem">[2-3 sentence vision statement specific to this topic]</p>
    <div class="grid-3 reveal" style="gap:1.5rem;margin-top:2rem">
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-top:4px solid var(--gold)">
        <h3 style="color:var(--gold);margin-bottom:0.75rem;font-size:1rem">[EMOJI] Goal 1 Title</h3>
        <p style="font-size:0.9rem;color:var(--muted);line-height:1.6">[Description of first strategic goal]</p>
      </div>
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-top:4px solid var(--navy)">
        <h3 style="color:var(--navy);margin-bottom:0.75rem;font-size:1rem">[EMOJI] Goal 2 Title</h3>
        <p style="font-size:0.9rem;color:var(--muted);line-height:1.6">[Description of second strategic goal]</p>
      </div>
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-top:4px solid var(--sky)">
        <h3 style="color:var(--sky);margin-bottom:0.75rem;font-size:1rem">[EMOJI] Goal 3 Title</h3>
        <p style="font-size:0.9rem;color:var(--muted);line-height:1.6">[Description of third strategic goal]</p>
      </div>
    </div>
  </div>
</section>
```

---

## 💰 Template: FUNDING Section

```html
<!-- ════ FUNDING & INVESTMENT ════ -->
<section id="funding" class="section section--place" style="padding:var(--section-pad)">
  <div class="container">
    <h2>Funding Mechanisms & Investment</h2>
    <div style="overflow-x:auto;margin-top:1.5rem">
      <table style="width:100%;border-collapse:collapse;font-size:0.9rem;background:#fff">
        <tr style="border-bottom:2px solid var(--gold);background:#F8F4EC">
          <th style="text-align:left;padding:0.75rem;color:var(--navy);font-weight:700">Project / Component</th>
          <th style="text-align:right;padding:0.75rem;color:var(--navy);font-weight:700">Est. Investment</th>
          <th style="text-align:left;padding:0.75rem;color:var(--navy);font-weight:700">Funding Source</th>
          <th style="text-align:left;padding:0.75rem;color:var(--navy);font-weight:700">Timeline</th>
        </tr>
        <tr style="border-bottom:1px solid #e8e2d8">
          <td style="padding:0.75rem">[Project Name]</td>
          <td style="text-align:right;padding:0.75rem">[Amount]</td>
          <td style="padding:0.75rem">[Funding Source]</td>
          <td style="padding:0.75rem">[2027–2030]</td>
        </tr>
        <tr style="border-bottom:1px solid #e8e2d8">
          <td style="padding:0.75rem">[Project Name]</td>
          <td style="text-align:right;padding:0.75rem">[Amount]</td>
          <td style="padding:0.75rem">[Funding Source]</td>
          <td style="padding:0.75rem">[2028–2031]</td>
        </tr>
        <tr style="background:#F8F4EC;border-top:2px solid var(--gold)">
          <td style="padding:0.75rem;font-weight:700">TOTAL</td>
          <td style="text-align:right;padding:0.75rem;font-weight:700">[Total Amount]</td>
          <td colspan="2" style="padding:0.75rem;color:var(--muted);font-size:0.85rem">Private investment catalyzed: [Amount]</td>
        </tr>
      </table>
    </div>
  </div>
</section>
```

---

## 🎯 Template: SUCCESS METRICS Section

```html
<!-- ════ SUCCESS METRICS ════ -->
<section id="metrics" class="section section--place" style="background:var(--cream);padding:var(--section-pad)">
  <div class="container">
    <h2>Success Metrics (Vision 2040 Targets)</h2>
    <div class="grid-2 reveal" style="gap:1.5rem">
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-left:4px solid var(--gold)">
        <h3 style="color:var(--navy);margin-bottom:0.75rem">By 2030</h3>
        <ul style="font-size:0.9rem;color:var(--muted);line-height:1.8;list-style:none;padding:0">
          <li>✓ [Specific metric by 2030]</li>
          <li>✓ [Specific metric by 2030]</li>
          <li>✓ [Specific metric by 2030]</li>
          <li>✓ [Specific metric by 2030]</li>
        </ul>
      </div>
      <div style="background:#fff;padding:1.5rem;border-radius:10px;border-left:4px solid var(--navy)">
        <h3 style="color:var(--navy);margin-bottom:0.75rem">By 2040</h3>
        <ul style="font-size:0.9rem;color:var(--muted);line-height:1.8;list-style:none;padding:0">
          <li>✓ [Specific metric by 2040]</li>
          <li>✓ [Specific metric by 2040]</li>
          <li>✓ [Specific metric by 2040]</li>
          <li>✓ [Specific metric by 2040]</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

## 📝 Content Ideas for Each Page

### place-arts.html
**Vision:** "Position El Dorado as a cultural destination through arts programming, artist support, and heritage tourism."

**Goals:**
- Arts programming and cultural events
- Museum expansion and artist residencies
- Heritage tourism (oil boom history)

**Metrics (2030):** 2 artist residencies, 24+ events/year, Oil Museum attendance +50%  
**Metrics (2040):** 40+ annual events, arts economy $2M+, 100+ resident artists

---

### place-tourism.html
**Vision:** "Capture visitor spending from El Dorado Lake's 1M+ annual visitors through hospitality and dining infrastructure."

**Goals:**
- Visitor accommodation (hotel + dining)
- Heritage tourism development
- Multi-day itineraries (lake + Flint Hills)

**Metrics (2030):** Hotel open, 50K overnight visitors, $3M spending  
**Metrics (2040):** 200K overnight visitors, $8–12M annual spending, 250–350 jobs

---

### place-parks.html
**Vision:** "Expand parks capacity and connect green space via a 26-mile trail network serving a growing population."

**Goals:**
- New parks and trail expansion
- Green infrastructure (bioswales, native plantings)
- Community connectivity

**Metrics (2030):** North Gateway Linear Park open, 5 miles trail complete, 3K trail users/year  
**Metrics (2040):** 26-mile trail complete, 10K+ annual users, 6 new parks, carbon neutral by 2035

---

### place-beautification.html
**Vision:** "Create a city that reflects ambition through strategic investment in streetscapes, public art, and civic monuments."

**Goals:**
- Streetscape and landscaping improvements
- Public art and murals
- Monument lighting and wayfinding

**Metrics (2030):** 80 new street trees planted, 10 murals completed, LED street lighting on all corridors  
**Metrics (2040):** 200+ street trees, 30+ murals, city recognized regionally for beauty, resident pride scores +40%

---

## ✅ Final Checklist Before "Complete"

After adding all 4 detail pages:

- [ ] All 6 detail pages have Vision Strategy section
- [ ] All 6 detail pages have Funding table
- [ ] All 6 detail pages have Success Metrics (2030 & 2040)
- [ ] All detail pages have updated pill nav (#strategy, #funding, #metrics)
- [ ] Scroll-spy works on all detail pages (test 2 of them)
- [ ] Mobile responsive on 375px viewport
- [ ] No broken links

---

## 🎉 After This is Done

1. **Test everything** (5 min) — Use QUICK_TEST_GUIDE.md
2. **Deploy GA4** — Already in place, just activate with your Measurement ID
3. **Launch Phase 2** — Community engagement tools ready to build

---

## 💡 Pro Tips

- **Use a text editor with Find/Replace** — Replace [TOPIC], [EMOJI], etc. quickly
- **Copy from working example** — place-downtown.html is a complete working example
- **Keep it consistent** — 3 goals, 2 metrics sections for each page
- **Test as you go** — After each page, open it in browser and scroll to verify

**Estimated time to finish:** 60–90 minutes for all 4 pages with this template.

