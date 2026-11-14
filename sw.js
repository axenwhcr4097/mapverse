/* MapVerse — trình phục vụ nền: giữ app và ô bản đồ để dùng khi mất mạng */
const SHELL = 'mv-shell-v4', RUNTIME = 'mv-runtime', OFFLINE = 'mv-offline', RUNTIME_MAX = 4000;
const CDN = 'https://cdnjs.cloudflare.com/ajax/libs/';
const SHELL_FILES = ['./', 'index.html', 'app.css', 'more.css', 'app.js', 'cinelocal.css', 'fonts/Oswald-Regular.ttf', 'fonts/Oswald-Bold.ttf', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-180.png', 'icons/favicon-64.png',
  CDN + 'leaflet/1.9.4/leaflet.min.css', CDN + 'leaflet/1.9.4/leaflet.min.js',
  CDN + 'maplibre-gl/4.7.1/maplibre-gl.min.css', CDN + 'maplibre-gl/4.7.1/maplibre-gl.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => Promise.all(SHELL_FILES.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})))));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('mv-shell-') && k !== SHELL).map(k => caches.delete(k)))).then(() => self.clients.claim())));

const isTile = u => /tile\.openstreetmap|arcgisonline\.com\/.*\/tile\/|opentopomap\.org|elevation-tiles-prod|tiles\.openfreemap\.org\/(planet\/|fonts\/|sprites\/|natural_earth)/.test(u);
// ô OpenFreeMap: khoá không có mã phiên bản (giống ofmKey trong app.js)
const ofmKey = u => u.replace(/\/planet\/[^/]+\/(\d+\/\d+\/\d+\.pbf)$/, '/planet/_/$1');
const isOfmMeta = u => /tiles\.openfreemap\.org\/(styles\/|planet$)/.test(u);

let puts = 0;
async function trim() {
  const c = await caches.open(RUNTIME), keys = await c.keys();
  for (let i = 0; i < keys.length - RUNTIME_MAX; i++) await c.delete(keys[i]);
}

self.addEventListener('fetch', e => {
  const req = e.request, u = req.url;
  if (req.method !== 'GET') return;

  // app: mạng trước để luôn có bản mới, mất mạng thì dùng bản đã lưu
  if (new URL(u).origin === location.origin) {
    e.respondWith(fetch(req, { cache: 'no-cache' }).then(r => { if (r.ok) { const copy = r.clone(); caches.open(SHELL).then(c => c.put(req, copy)); } return r; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
    return;
  }
  // thư viện + ô bản đồ: bộ nhớ trước, chưa có thì tải và giữ lại
  if (u.startsWith(CDN) || isTile(u)) {
    const key = ofmKey(u);
    e.respondWith(caches.match(req).then(hit => hit || (key !== u ? caches.match(key) : null)).then(hit => hit || fetch(req).then(r => {
      if (r.ok && r.type !== 'opaque') {
        const copy = r.clone();
        caches.open(u.startsWith(CDN) ? SHELL : RUNTIME).then(c => c.put(req, copy)).then(() => { if (++puts % 200 === 0) trim(); });
      }
      return r;
    })));
    return;
  }
  // kiểu bản đồ 3D: mạng trước; mất mạng thì ưu tiên bản đi kèm vùng đã tải
  if (isOfmMeta(u)) {
    e.respondWith(fetch(req, { cache: 'no-cache' }).then(r => { if (r.ok) { const copy = r.clone(); caches.open(RUNTIME).then(c => c.put(req, copy)); } return r; })
      .catch(async () => (await (await caches.open(OFFLINE)).match(req)) || (await caches.match(req)) || Response.error()));
  }
});

// bấm vào thông báo cảnh báo lũ: mở lại cửa sổ app đang có, chưa có thì mở mới ở mục Cảnh báo lũ
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(ws => {
    const w = ws.find(c => c.url.startsWith(self.registration.scope));
    return w ? w.focus() : self.clients.openWindow('./?tab=flood');
  }));
});
