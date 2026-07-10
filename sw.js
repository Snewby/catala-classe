const CACHE_NAME = 'catala-v3';
const PRECACHE = [
  './',
  './index.html',
  './js/vocabulari-data.js',
  './js/text-vocabulary-data.js',
  './js/verb-conjugations.js',
  './js/expressions-data.js',
  './assets/icons/android-icon-192x192.png',
  'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Source+Sans+3:wght@300;400;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    // App shell and data: network-first so updates land immediately, cache fallback for offline
    event.respondWith(
      fetch(req).then(response => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        }
        return response;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    // Fonts: cache-first (opaque/cors responses allowed) so typography works offline
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return response;
      }))
    );
  }
});
