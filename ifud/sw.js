const OFFLINE_VERSION = 1;
const CACHE_NAME = 'ifud';
const OFFLINE_URL = 'ifud/offline';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
          "/ifud/index.php",
          "/ifud/images/offline.png",
          "/ifud/images/logo.png",
          "/ifud/images/icon-192.png",
          "/ifud/images/404.png",
          "/ifud/images/load.gif",
          "/ifud/css/materialize.min.css",
          "/ifud/css/style.css",
          "/ifud/js/jquery-3.4.1.min.js",
          "/ifud/js/materialize.min.js",
          "/ifud/js/all.js",
          "/ifud/js/carrinho.js",
          "/ifud/js/home.js",
          "/ifud/js/erro.js",
          "/ifud/js/categoria.js",
          "/ifud/js/produto.js",
          "/ifud/js/sobre.js",
          "/ifud/manifest.json",
          "/ifud/home",
          "/ifud/categoria",
          "/ifud/produto",
          "/ifud/offline"
        ]);
    })
  );
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
});

// Clear cache on activate
this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith(CACHE_NAME)))
          .filter(cacheName => (cacheName !== CACHE_NAME))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
  console.log("Ativo");
});

// Serve from Cache
this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match(OFFLINE_URL);
      })
  )
  console.log("Fetch");
});