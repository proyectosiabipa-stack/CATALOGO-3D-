// Catálogo BIPA: funciona sin internet una vez abierto (útil en la calle con mala señal).
// Estrategia: la página y productos.js se buscan primero en la red (para ver cambios al instante)
// y si no hay conexión se usa la copia guardada; texturas, fotos, logos y librerías salen del caché.
const CACHE = "bipa-catalogo-v13";
const CORE = ["./", "index.html", "productos.js", "manifest.webmanifest", "marca/logo.svg", "marca/logo-h.svg", "marca/hoja.svg", "marca/icono-192.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const fresh = url.origin === location.origin && (req.mode === "navigate" || /\/(index\.html|productos\.js)?$/.test(url.pathname) || url.pathname.endsWith("productos.js"));
  if (fresh) {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok || r.type === "opaque") { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
