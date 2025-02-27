const CACHE_NAME = 'notes-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // You can add other static assets (CSS, JS, images) here as needed.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch(() =>
        caches.match(event.request)
          .then(response => response || caches.match('/index.html'))
      )
  );
});
