const CACHE_NAME = 'eldorado-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles-modern.min.css',
  '/css/components-advanced.min.css',
  '/css/utilities.min.css',
  '/js/main.min.js',
  '/js/nav.min.js',
  '/js/analytics.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
