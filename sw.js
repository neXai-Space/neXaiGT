// File: sw.js
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Cek apakah request datang dari tab Sources Eruda/Inspector (biasanya ada header khusus atau fetch source code)
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
    event.respondWith(
      new Response("Sorry, unable to fetch source code :(", {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    );
    return;
  }

  // Jika request normal dari browser, biarkan jalan biasa
  event.respondWith(fetch(event.request));
});
