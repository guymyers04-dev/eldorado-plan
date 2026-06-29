/* El Dorado Vision 2040 — Analytics Setup (GA4 Ready)
   Replace YOUR_GA_ID with your actual Google Analytics 4 measurement ID
*/

// Google Analytics 4 snippet (add this to your Google Analytics property)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
// gtag('config', 'G-YOUR_GA_ID'); // Uncomment and replace with your GA4 ID

/* ── Page navigation tracking ── */
document.addEventListener('DOMContentLoaded', () => {
  // Track page views on navigation
  document.querySelectorAll('a[href*=".html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const destination = link.getAttribute('href');
      const currentPage = document.body.dataset.page || 'home';

      // Send GA4 event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_navigation', {
          'destination_page': destination,
          'source_page': currentPage,
          'link_text': link.textContent.trim(),
        });
      }
    });
  });

  // Track pill nav clicks
  document.querySelectorAll('.page-nav__pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const sectionId = pill.getAttribute('href');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'section_navigation', {
          'section': sectionId,
          'page': document.body.dataset.page || 'home',
        });
      }
    });
  });

  // Track external link clicks
  document.querySelectorAll('a[target="_blank"], a[href^="http"]').forEach(link => {
    if (!link.href.includes('eldorado-plan') && !link.href.includes('eldoradoks.net')) {
      link.addEventListener('click', (e) => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'external_link_click', {
            'link_url': link.href,
            'link_text': link.textContent.trim(),
            'page': document.body.dataset.page || 'home',
          });
        }
      });
    }
  });

  // Track button clicks (CTAs, etc)
  document.querySelectorAll('.btn, [role="button"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
          'button_text': btn.textContent.trim(),
          'button_class': btn.className,
          'page': document.body.dataset.page || 'home',
        });
      }
    });
  });

  // Track scroll depth (every 25% of page)
  let scrolledAlready = {};
  window.addEventListener('scroll', () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / maxScroll) * 100);

    // Round to nearest 25%
    const roundedPercent = Math.floor(scrollPercent / 25) * 25;

    if (!scrolledAlready[roundedPercent] && roundedPercent > 0) {
      scrolledAlready[roundedPercent] = true;
      if (typeof gtag !== 'undefined') {
        gtag('event', 'scroll_depth', {
          'scroll_percent': roundedPercent,
          'page': document.body.dataset.page || 'home',
        });
      }
    }
  }, { passive: true });
});

/* ── Setup instructions ──
   1. Create a Google Analytics 4 property at https://analytics.google.com
   2. Copy your Measurement ID (format: G-XXXXXXXXXX)
   3. Uncomment the gtag('config', ...) line above and paste your ID
   4. Add this script to all pages: <script src="js/analytics.js" defer></script>
   5. Test in Google Analytics real-time reports
*/
