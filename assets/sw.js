// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
  // once the SW is installed, go ahead and cache the resources
  e.waitUntil(
    fetch('/cache_manifest.json')
      .then(function(response) {
        return response.json()
      })
      .then(function(cacheManifest) {
        var cacheName = 'cache:static:' + cacheManifest.version
        var all = Object.values(cacheManifest.latest).filter(
          function(fn) { return fn.match(/^(images|css|js|fonts)/);
          })
        all.push('/'); // add the application HTML
        caches.open(cacheName).then(function(cache) {
          return cache.addAll(all).then(function() {
            self.skipWaiting();
          });
        })
      })
  );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
  // either respond with the cached object fetch it
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // retrieve from cache
        return response;
      }
      // fetch as normal
      return fetch(event.request);
    })
  );
});
