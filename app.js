/* MapVerse — bản đồ phong cách CineLocal */
'use strict';

/* ---------- Icon ---------- */
const P = {
  search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  pin:'<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  nav:'<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  ruler:'<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/>',
  locate:'<path d="M2 12h3M19 12h3M12 2v3M12 19v3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/>',
  crosshair:'<circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2M12 6V2M12 22v-4"/>',
  plus:'<path d="M5 12h14M12 5v14"/>',
  minus:'<path d="M5 12h14"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  swap:'<path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16"/>',
  moto:'<circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M15 6h2l3.5 8.5M8.5 17h6l2-6h-6l-3 3M5.5 17 9 11"/><path d="M12 6h3"/>',
  car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  bike:'<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
  walk:'<circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6M6 8l6 2 6-2M12 10v4"/>',
  trash:'<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  copy:'<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  rain:'<path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2M16 14v6M8 14v6M12 16v6"/>',
  storm:'<path d="M6 16.3A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 .5 9"/><path d="m13 12-3 5h4l-3 5"/>',
  wind:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2M9.8 4.4A2 2 0 1 1 11 8H2"/>',
  drop:'<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  route:'<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  polygon:'<path d="M12 2 2 9l4 12h12l4-12z"/>',
  left:'<path d="M9 14 4 9l5-5"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  right:'<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  uturn:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  undo:'<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
  expand:'<path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  alert:'<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
  zap:'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  building:'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
  mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
  orbit:'<path d="M20.3 13.4a10 10 0 1 1-1.8-7.6"/><path d="M21 3v5h-5"/><circle cx="12" cy="12" r="2"/>',
  play:'<polygon points="6 3 20 12 6 21 6 3"/>',
  utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  coffee:'<path d="M10 2v2M14 2v2M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2"/>',
  fuel:'<path d="M3 22h12M4 9h10M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>',
  banknote:'<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  bed:'<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
  cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
  volume:'<path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><path d="M16 9a5 5 0 0 1 0 6M19.4 18.4a9 9 0 0 0 0-12.8"/>',
  mute:'<path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><path d="m22 9-6 6M16 9l6 6"/>',
  wifioff:'<path d="M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.17-2.65M10.66 5c4.01-.36 8.14.9 11.34 3.76M16.85 11.25a10 10 0 0 1 2.22 1.68M5 13a10 10 0 0 1 5.24-2.76M2 2l20 20"/>',
  phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  box:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  waves:'<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  radar:'<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01M17.99 11.66a6 6 0 0 1-2.22 5.01"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  bell:'<path d="M10.27 21a2 2 0 0 0 3.46 0M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33"/>',
  grid:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  edit:'<path d="M12 20h9"/><path d="M16.38 3.62a2.12 2.12 0 0 1 3 3L7.37 18.64a2 2 0 0 1-.86.5l-2.87.84a.5.5 0 0 1-.62-.62l.84-2.87a2 2 0 0 1 .5-.86z"/>',
  eye:'<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
};
const ic = (n, cls = '') => `<svg class="cl-i ${cls}" viewBox="0 0 24 24">${P[n] || P.pin}</svg>`;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function paintIcons(root = document) {
  root.querySelectorAll('[data-ic]').forEach(el => {
    if (el.dataset.icDone) return;
    el.dataset.icDone = 1;
    el.insertAdjacentHTML('afterbegin', ic(el.dataset.ic));
  });
}

/* ---------- Lỗi nói bằng lời người thường ---------- */
const ERRORS = [
  [/offline|Failed to fetch|NetworkError|network/i, 'Lỗi kết nối', 'Kiểm tra mạng Internet rồi thử lại.'],
  [/429|Too Many/i, 'Thao tác hơi nhanh', 'Đợi vài giây rồi thử lại nhé.'],
  [/NoRoute|no route/i, 'Không tìm được đường', 'Hai điểm có thể không nối được bằng phương tiện này. Thử đổi phương tiện hoặc điểm gần hơn.'],
  [/denied|permission/i, 'Chưa cho phép vị trí', 'Hãy cho phép trình duyệt truy cập vị trí rồi thử lại.'],
  [/timeout|timed out/i, 'Phản hồi quá lâu', 'Mạng có thể đang chậm, thử lại sau ít phút.'],
  [/position unavailable|unavailable/i, 'Không xác định được vị trí', 'Thử ra chỗ thoáng hoặc bật định vị.'],
  [/json|parse|geojson/i, 'File không hợp lệ', 'Hãy chọn file ghim đã xuất từ MapVerse.'],
  [/webgl|3d-unsupported/i, 'Máy chưa hỗ trợ 3D', 'Trình duyệt hoặc card đồ hoạ chưa bật tăng tốc phần cứng. Vẫn dùng được chế độ 2D.'],
  [/3d-load/i, 'Chưa tải được chế độ 3D', 'Kiểm tra mạng rồi bấm 3D lại.'],
  [/flood-data/i, 'Chưa lấy được dữ liệu lũ', 'Máy chủ dự báo đang bận, thử lại sau ít phút.'],
  [/poi-busy|504|503/i, 'Máy chủ tìm kiếm đang bận', 'Thử lại sau ít giây.'],
  [/quota|QuotaExceeded/i, 'Hết chỗ lưu', 'Xoá bớt vùng đã tải rồi thử lại.'],
  [/no-geo/i, 'Không có GPS', 'Thiết bị này không định vị được. Bấm “Chạy thử” để xem mô phỏng dẫn đường.'],
  [/.*/, 'Đã có lỗi xảy ra', 'Thử lại sau ít phút.'],
];
function toast(title, msg = '', { ok = false, detail = '' } = {}) {
  const t = document.createElement('div');
  t.className = 'cl-toast' + (ok ? ' ok' : '');
  t.innerHTML = `<div class="ti">${ic(ok ? 'check' : 'alert')}</div><div><b>${esc(title)}</b>${esc(msg)}${detail ? '<br><button class="cl-toast-copy">Chép chi tiết lỗi</button>' : ''}</div>`;
  if (detail) t.querySelector('.cl-toast-copy').onclick = async () => { t.querySelector('.cl-toast-copy').textContent = (await copyText(detail)) ? 'Đã chép' : 'Không chép được'; };
  $('#toastHost').append(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, detail ? 8000 : 3200);
}
function fail(err) {
  const raw = String(err?.message || err || '');
  const [, title, hint] = ERRORS.find(([re]) => re.test(raw));
  console.warn(err);
  toast(title, hint, { detail: raw });
}
async function getJSON(url, opt) {
  if (!navigator.onLine) throw new Error('offline');
  const outer = opt?.signal;
  if (outer?.aborted) throw outer.reason instanceof Error ? outer.reason : new DOMException('Aborted', 'AbortError');
  const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(new Error('timeout')), opt?.timeout || 15000);
  const onAbort = () => ctl.abort(outer.reason);
  outer?.addEventListener('abort', onAbort, { once: true });
  try {
    const r = await fetch(url, { ...opt, signal: ctl.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } finally { clearTimeout(tm); outer?.removeEventListener('abort', onAbort); }
}

/* ---------- Định dạng ---------- */
const fmtDist = m => m < 1000 ? [Math.round(m), 'm'] : [(m / 1000).toFixed(m < 10000 ? 2 : 1).replace('.', ','), 'km'];
const fmtArea = a => a < 1e4 ? [Math.round(a).toLocaleString('vi-VN'), 'm²'] : a < 1e6 ? [(a / 1e4).toFixed(2).replace('.', ','), 'ha'] : [(a / 1e6).toFixed(2).replace('.', ','), 'km²'];
function fmtTime(s) {
  const t = Math.round(s / 60), h = Math.floor(t / 60), m = t % 60;
  return h ? [`${h}`, `giờ ${m} phút`] : [`${Math.max(1, m)}`, 'phút'];
}
const fmtLL = ll => `${ll.lat.toFixed(5)}, ${ll.lng.toFixed(5)}`;
// Leaflet cho kéo vòng quanh Trái Đất nên kinh độ có thể vượt ±180 — các API đều từ chối giá trị đó
const wrapLL = ll => L.latLng(ll).wrap();
const center = () => map.getCenter().wrap();

/* ---------- Bản đồ ---------- */
// lớp đường phố: máy chủ chính, lỗi thì tự chuyển sang máy chủ dự phòng cho ô đó
const OSM_MAIN = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', OSM_FB = 'https://tile.openstreetmap.de/{z}/{x}/{y}.png';
const osmLayers = [];
let osmFails = 0, osmUseFb = false;
try { osmUseFb = sessionStorage.getItem('mv.osmfb') === '1'; } catch {}
function osm(opt = {}) {
  const lay = L.tileLayer(osmUseFb ? OSM_FB : OSM_MAIN, { maxZoom: 19, crossOrigin: 'anonymous', attribution: '© OpenStreetMap', ...opt });
  lay.on('tileerror', e => {
    if (e.tile.dataset.fb || osmUseFb) return;
    e.tile.dataset.fb = 1;
    e.tile.src = L.Util.template(OSM_FB, e.coords);
    if (++osmFails >= 4) { // máy chủ chính không vào được: các ô sau đi thẳng tới máy chủ dự phòng
      osmUseFb = true;
      try { sessionStorage.setItem('mv.osmfb', '1'); } catch {}
      osmLayers.forEach(l => l.setUrl(OSM_FB, true));
    }
  });
  lay.on('tileload', () => { if (!osmUseFb) osmFails = 0; });
  osmLayers.push(lay);
  return lay;
}
const LAYERS = {
  dark: osm({ className: 'tl-dark' }),
  street: osm(),
  sat: L.layerGroup([
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, crossOrigin: 'anonymous', attribution: '© Esri' }),
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, crossOrigin: 'anonymous' }),
  ]),
  topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17, crossOrigin: 'anonymous', attribution: '© OpenStreetMap © OpenTopoMap' }),
};
const map = L.map('map', { zoomControl: false, worldCopyJump: true, attributionControl: true }).setView([16.2, 106.5], 6);
map.attributionControl.setPrefix(false);
L.control.scale({ imperial: false, position: 'bottomleft' }).addTo(map);
let curLayer = 'dark';
LAYERS.dark.addTo(map);
$('.stage').classList.add('dark');

function setLayer(k) {
  if (k === curLayer) return;
  map.removeLayer(LAYERS[curLayer]); LAYERS[k].addTo(map); curLayer = k;
  $$('#layers button').forEach(b => b.classList.toggle('on', b.dataset.layer === k));
  $('.stage').classList.toggle('dark', k === 'dark');
  if (m3) m3.setStyle(style3d(k), { diff: false });
  saveView();
}
$$('#layers button').forEach(b => b.onclick = () => setLayer(b.dataset.layer));

const pinIcon = (label = '', cls = '', extra = '') => L.divIcon({ className: 'mk ' + extra, html: `<div class="mk-pin ${cls}"><span>${esc(label)}</span></div>`, iconSize: [30, 30], iconAnchor: [15, 36], popupAnchor: [0, -34] });

/* HUD */
const zBig = $('#zBig');
map.on('zoomend', () => { zBig.textContent = map.getZoom(); zBig.classList.add('bump'); setTimeout(() => zBig.classList.remove('bump'), 250); });
map.on('mousemove', e => $('#coord').textContent = fmtLL(e.latlng));
map.on('moveend', () => { saveView(); weatherSoon(); });

/* Ghi nhớ vị trí xem + liên kết chia sẻ */
function saveView() {
  const c = map.getCenter();
  const h = `#${map.getZoom()}/${c.lat.toFixed(5)}/${c.lng.toFixed(5)}/${curLayer}`;
  history.replaceState(null, '', h);
  try { localStorage.setItem('mv.view', h); } catch {}
}
function loadView() {
  let h = location.hash;
  if (!h) try { h = localStorage.getItem('mv.view') || ''; } catch {}
  const m = h.match(/^#(\d+)\/(-?[\d.]+)\/(-?[\d.]+)(?:\/(\w+))?/);
  if (!m) return;
  map.setView([+m[2], +m[3]], +m[1], { animate: false });
  if (m[4] && LAYERS[m[4]]) setLayer(m[4]);
}

$('#zIn').onclick = () => is3d ? m3.zoomIn() : map.zoomIn();
$('#zOut').onclick = () => is3d ? m3.zoomOut() : map.zoomOut();
if (!document.documentElement.requestFullscreen) $('#fsBtn').hidden = true; // iPhone không hỗ trợ toàn màn hình
$('#fsBtn').onclick = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen())?.catch?.(() => {});
// chép vào bộ nhớ tạm; trình duyệt chặn thì dùng cách cũ
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch {}
  const ta = Object.assign(document.createElement('textarea'), { value: text });
  ta.style.cssText = 'position:fixed;opacity:0';
  document.body.append(ta); ta.select();
  let ok = false; try { ok = document.execCommand('copy'); } catch {}
  ta.remove();
  return ok;
}
const touchDevice = matchMedia('(pointer:coarse)').matches;
$('#shareBtn').onclick = async () => {
  saveView();
  const url = location.href.replace(/\?[^#]*/, '');
  if (touchDevice && navigator.share) { try { await navigator.share({ title: 'MapVerse', url }); return; } catch (e) { if (e.name === 'AbortError') return; } }
  if (await copyText(url)) toast('Đã chép liên kết', 'Gửi cho ai đó để mở đúng chỗ này.', { ok: true });
  else toast('Chưa chép được', url);
};

/* ---------- Tab ---------- */
let tab = 'explore';
function setTab(t) {
  tab = t;
  $$('#tabs .cl-pill').forEach(b => b.classList.toggle('on', b.dataset.tab === t));
  $('#tabs .cl-pill.on')?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); // màn hẹp: tab đang chọn luôn nằm trong tầm nhìn
  $$('.pane').forEach(p => p.classList.toggle('on', p.dataset.pane === t));
  if (t !== 'measure') setMeasuring(false);
  if (t === 'offline') { offEstimate(); storageInfo(); }
}
$$('#tabs .cl-pill').forEach(b => b.onclick = () => setTab(b.dataset.tab));

/* ---------- Tìm kiếm & gợi ý ---------- */
const TYPE_IC = { city: 'building', town: 'building', village: 'building', house: 'pin', street: 'route', peak: 'mountain', natural: 'mountain', tourism: 'sun', amenity: 'pin' };
const TYPE_VI = { city: 'Thành phố', town: 'Thị trấn', village: 'Làng xã', street: 'Đường', house: 'Địa chỉ', district: 'Quận/huyện', county: 'Quận/huyện', state: 'Tỉnh/thành', country: 'Quốc gia', locality: 'Khu vực' };
function parseCoord(q) {
  const m = q.trim().match(/^(-?\d{1,2}(?:\.\d+)?)\s*[, ]\s*(-?\d{1,3}(?:\.\d+)?)$/);
  return m && Math.abs(+m[1]) <= 90 && Math.abs(+m[2]) <= 180 ? L.latLng(+m[1], +m[2]) : null;
}
async function geocode(q, signal) {
  const c = center();
  const d = await getJSON(`https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&lang=default&limit=12&lat=${c.lat.toFixed(4)}&lon=${c.lng.toFixed(4)}&zoom=${Math.max(4, map.getZoom())}`, { signal });
  // kết quả quá xa nơi đang xem (cùng tên ở nước khác) xếp xuống sau, giữ nguyên thứ tự còn lại
  const far = f => map.distance(c, L.latLng(f.geometry.coordinates[1], f.geometry.coordinates[0])) > 1.5e6 ? 1 : 0;
  return d.features.map((f, i) => [far(f), i, f]).sort((a, b) => a[0] - b[0] || a[1] - b[1]).slice(0, 7).map(([, , f]) => f).map(f => {
    const p = f.properties, [lng, lat] = f.geometry.coordinates;
    const name = p.name || [p.housenumber, p.street].filter(Boolean).join(' ') || p.city || 'Không tên';
    const sub = [p.name && p.street ? [p.housenumber, p.street].filter(Boolean).join(' ') : '', p.district, p.city !== name ? p.city : '', p.state, p.country].filter(Boolean).join(', ');
    return { name, sub, ll: L.latLng(lat, lng), type: p.type, key: p.osm_key, ext: p.extent };
  });
}
async function reverse(ll) {
  try {
    const d = await getJSON(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${ll.lat}&lon=${ll.lng}&zoom=18&accept-language=vi`, { timeout: 6000 });
    if (d.error) return null;
    const a = d.address || {};
    return { name: d.name || [a.house_number, a.road].filter(Boolean).join(' ') || a.suburb || a.city || a.state || 'Điểm đã chọn', addr: d.display_name, area: [a.city || a.town || a.county, a.state].filter(Boolean).join(', ') };
  } catch (e) {
    // nguồn dự phòng
    const f = (await getJSON(`https://photon.komoot.io/reverse?lat=${ll.lat}&lon=${ll.lng}&lang=default&limit=1`)).features?.[0];
    if (!f) return null;
    const p = f.properties, road = [p.housenumber, p.street].filter(Boolean).join(' ');
    return { name: p.name || road || p.district || p.city || 'Điểm đã chọn', addr: [p.name ? road : '', p.district, p.city, p.state, p.country].filter(Boolean).join(', '), area: [p.city || p.county || p.district, p.state].filter(Boolean).join(', ') };
  }
}

const RECENT_MAX = 6;
const recentGet = () => { try { return JSON.parse(localStorage.getItem('mv.recent') || '[]'); } catch { return []; } };
function recentAdd(it) {
  if (it.sub === 'Toạ độ') return; // toạ độ gõ tay không cần nhớ
  const r = recentGet().filter(x => x.name !== it.name);
  r.unshift({ name: it.name, sub: it.sub || '', lat: it.ll.lat, lng: it.ll.lng, ext: it.ext || null, t: it.type === 'recent' ? it.t0 : it.type });
  try { localStorage.setItem('mv.recent', JSON.stringify(r.slice(0, RECENT_MAX))); } catch {}
}
function suggest(input, box, onPick, { recent = false } = {}) {
  let timer, ctl, items = [], hl = -1, loading = false, enterWait = false;
  const close = () => { box.classList.remove('on'); hl = -1; };
  const draw = () => {
    box.innerHTML = (items[0]?.type === 'recent' ? `<div class="sugg-hd"><span>Tìm gần đây</span><button class="sugg-clr" data-clr>Xoá</button></div>` : '') +
      items.map((it, i) => `<button data-i="${i}" class="${i === hl ? 'hl' : ''}" style="animation-delay:${i * 30}ms"><span class="si">${ic(it.type === 'recent' ? 'clock' : TYPE_IC[it.type] || TYPE_IC[it.key] || 'pin')}</span><span class="st"><b>${esc(it.name)}</b><small>${esc(it.sub || TYPE_VI[it.type] || '')}</small></span></button>`).join('');
    box.querySelector('[data-clr]')?.addEventListener('mousedown', e => { e.preventDefault(); try { localStorage.removeItem('mv.recent'); } catch {} items = []; close(); });
    box.querySelectorAll('button[data-i]').forEach(b => b.onmousedown = e => { e.preventDefault(); pick(items[+b.dataset.i]); });
    box.classList.toggle('on', items.length > 0);
  };
  const msg = (h) => { box.innerHTML = `<div class="msg">${h}</div>`; box.classList.add('on'); };
  const pick = it => { input.value = it.name; close(); if (recent) recentAdd(it); onPick(it); };
  const showRecent = () => {
    if (!recent || input.value.trim()) return false;
    items = recentGet().map(x => ({ name: x.name, sub: x.sub, ll: L.latLng(x.lat, x.lng), ext: x.ext, type: 'recent', t0: x.t }));
    hl = -1;
    if (items.length) draw(); else close();
    return true;
  };
  input.addEventListener('input', () => {
    clearTimeout(timer); ctl?.abort();
    items = []; hl = -1; loading = false; enterWait = false; // kết quả cũ không còn đúng với chữ vừa gõ
    const q = input.value.trim();
    const co = parseCoord(q);
    if (co) { items = [{ name: fmtLL(co), sub: 'Toạ độ', ll: co, type: 'pin' }]; return draw(); }
    if (!q && showRecent()) return;
    if (q.length < 2) return close();
    loading = true;
    msg('<span class="cl-spinner"></span> Đang tìm…');
    timer = setTimeout(async () => {
      const my = ctl = new AbortController();
      try {
        const res = await geocode(q, my.signal);
        if (my !== ctl) return;
        items = res; hl = -1; loading = false;
        if (enterWait && items.length) { enterWait = false; return pick(items[0]); } // đã bấm Enter trong lúc chờ
        items.length ? draw() : msg(`${ic('search')} Không thấy “${esc(q)}”. Thử tên khác hoặc thêm tỉnh/thành.`);
      } catch (e) {
        if (e.name === 'AbortError' || my !== ctl) return;
        loading = enterWait = false; close(); fail(e);
      }
    }, 320);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && loading) { e.preventDefault(); enterWait = true; return; }
    if (!box.classList.contains('on') || !items.length) { if (e.key === 'Escape') input.blur(); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); hl = (hl + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; draw(); }
    else if (e.key === 'Enter') { e.preventDefault(); pick(items[Math.max(0, hl)]); }
    else if (e.key === 'Escape') { close(); input.blur(); }
  });
  input.addEventListener('blur', () => setTimeout(close, 120));
  input.addEventListener('focus', () => showRecent() || (items.length && draw()));
}

/* ---------- Điểm đang chọn ---------- */
let selMarker = null, selData = null;
async function selectPoint(ll, known) {
  if (selMarker) map.removeLayer(selMarker);
  selMarker = L.marker(ll, { icon: pinIcon('', '', 'mk-sel mk-drop') }).addTo(map);
  selData = { ll, name: known?.name || 'Đang xác định…', addr: known?.sub || '' };
  if (tab !== 'route') setTab('explore');
  drawPlace(true);
  if (!known?.sub) {
    try {
      const r = await reverse(ll);
      if (selData?.ll !== ll) return;
      if (r) Object.assign(selData, { name: known?.name || r.name, addr: r.addr });
      else Object.assign(selData, { name: known?.name || 'Vùng chưa có tên', addr: 'Không có địa chỉ cho điểm này' });
    } catch (e) { if (selData?.ll === ll) Object.assign(selData, { name: known?.name || 'Điểm đã chọn', addr: '' }); }
    drawPlace(false);
  }
}
function drawPlace(loading) {
  const el = $('#place');
  if (!selData) { el.innerHTML = `<div class="place-empty">${ic('pin', 'c-red')} Chưa chọn điểm nào — bấm hoặc chuột phải lên bản đồ</div>`; return; }
  const d = selData;
  el.innerHTML = `<div class="place-card cl-enter">
    <div class="meta"><span class="cl-tag">ĐIỂM ĐÃ CHỌN</span>${loading ? '<span class="cl-spinner"></span>' : ''}</div>
    <h3>${esc(d.name)}</h3>
    <div class="addr">${esc(d.addr)}</div>
    <div class="meta"><span class="cl-chip cl-mono">${ic('crosshair', 'c-red')}${fmtLL(d.ll)}</span></div>
    <div class="acts">
      <button class="cl-btn red" data-a="to">${ic('nav')}Chỉ đường tới đây</button>
      <button class="cl-btn" data-a="pin">${ic('pin')}Ghim</button>
      <button class="cl-btn" data-a="copy">${ic('copy')}Chép toạ độ</button>
      <button class="cl-btn fl-btn" data-a="flood">${ic('waves')}Kiểm tra nguy cơ lũ</button>
    </div></div>`;
  el.querySelector('[data-a=to]').onclick = () => routeTo(d.ll, d.name);
  el.querySelector('[data-a=pin]').onclick = () => addPin(d.ll, d.name);
  el.querySelector('[data-a=copy]').onclick = () => copyLL(d.ll);
  el.querySelector('[data-a=flood]').onclick = () => floodAnalyze(d.ll, d.name);
}
async function copyLL(ll) { if (await copyText(fmtLL(ll))) toast('Đã chép toạ độ', fmtLL(ll), { ok: true }); else toast('Chưa chép được', fmtLL(ll)); }

suggest($('#q'), $('#qSugg'), it => {
  if (it.ext) map.flyToBounds([[it.ext[1], it.ext[0]], [it.ext[3], it.ext[2]]], { duration: 1.4, maxZoom: 16 });
  else map.flyTo(it.ll, 16, { duration: 1.4 });
  selectPoint(it.ll, { name: it.name, sub: it.sub || TYPE_VI[it.type === 'recent' ? it.t0 : it.type] || '' });
}, { recent: true });

map.on('click', e => {
  hideCtx();
  if (measuring) return addMeasure(e.latlng);
  selectPoint(wrapLL(e.latlng));
});

/* ---------- Vị trí của tôi ---------- */
let meMarker = null, meLL = null;
function setMe(ll, heading) {
  meLL = ll;
  if (meMarker) { meMarker.setLatLng(ll); scheduleMirror(); }
  else meMarker = L.marker(ll, { icon: L.divIcon({ className: 'mk', html: '<div class="me"><i class="me-dir"></i></div>', iconSize: [18, 18], iconAnchor: [9, 9] }), zIndexOffset: 1000 }).addTo(map).bindTooltip('Bạn đang ở đây');
  const el = meMarker.getElement()?.querySelector('.me'), el3 = m3Marks.get(L.stamp(meMarker))?.getElement().querySelector('.me');
  [el, el3].forEach(e => e && (e.classList.toggle('dir', heading != null), e.style.setProperty('--h', (heading || 0) + 'deg')));
}
function locate(fly = true) {
  return new Promise((res, rej) => {
    if (!navigator.geolocation) return rej(new Error('unavailable'));
    $('#locBtn').classList.add('busy');
    navigator.geolocation.getCurrentPosition(p => {
      $('#locBtn').classList.remove('busy');
      setMe(L.latLng(p.coords.latitude, p.coords.longitude));
      if (fly) map.flyTo(meLL, 16, { duration: 1.4 });
      res(meLL);
    }, e => {
      $('#locBtn').classList.remove('busy');
      rej(new Error(e.code === 1 ? 'denied' : e.code === 3 ? 'timeout' : 'position unavailable'));
    }, { enableHighAccuracy: true, timeout: 12000 });
  });
}
$('#locBtn').onclick = () => locate().catch(fail);

/* ---------- Thời tiết ---------- */
const WX = [[0, 'Trời quang', 'sun'], [1, 'Ít mây', 'sun'], [3, 'Có mây', 'cloud'], [48, 'Sương mù', 'cloud'], [57, 'Mưa phùn', 'rain'], [67, 'Mưa', 'rain'], [77, 'Tuyết', 'cloud'], [82, 'Mưa rào', 'rain'], [86, 'Mưa tuyết', 'cloud'], [99, 'Dông', 'storm']];
let wxTimer, wxLast = '';
function weatherSoon() { clearTimeout(wxTimer); wxTimer = setTimeout(loadWeather, 700); }
async function loadWeather() {
  const c = center(), key = `${c.lat.toFixed(1)},${c.lng.toFixed(1)}`;
  if (key === wxLast) return;
  wxLast = key;
  try {
    const d = await getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${c.lat.toFixed(3)}&longitude=${c.lng.toFixed(3)}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature&timezone=auto`);
    const cu = d.current, [, desc, icn] = WX.find(([max]) => cu.weather_code <= max) || WX[0];
    const t = Math.round(cu.temperature_2m);
    $('#wxChip').innerHTML = `${ic(icn, 'c-amber')}<b>${t}°</b>${desc}`;
    $('#wxBody').innerHTML = `<div class="wx-temp">${t}<sup>°C</sup></div>
      <div class="wx-info"><b>${desc}</b>
        <span>${ic('sun', 'c-amber')}Cảm giác ${Math.round(cu.apparent_temperature)}°</span>
        <span>${ic('wind', 'c-blue')}Gió ${Math.round(cu.wind_speed_10m)} km/h · ${ic('drop', 'c-blue')}${cu.relative_humidity_2m}%</span>
        <span class="wx-where cl-mono">${c.lat.toFixed(2)}, ${c.lng.toFixed(2)}</span></div>`;
  } catch (e) {
    wxLast = '';
    $('#wxChip').innerHTML = `${ic('cloud')}Thời tiết`;
    $('#wxBody').innerHTML = `<div class="cl-hint">Chưa lấy được thời tiết. Sẽ thử lại khi bạn di chuyển bản đồ.</div>`;
  }
}

/* ---------- Điểm đến nổi bật ---------- */
const SPOTS = [
  ['Hà Nội', 'Thủ đô ngàn năm', 21.0285, 105.8542, 13, '#7f1d1d,#1c1917'],
  ['Hạ Long', 'Kỳ quan vịnh biển', 20.9101, 107.1839, 11, '#0e7490,#0c0a09'],
  ['Sa Pa', 'Ruộng bậc thang', 22.3364, 103.8438, 13, '#3f6212,#0c0a09'],
  ['Hội An', 'Phố cổ đèn lồng', 15.8801, 108.338, 15, '#b45309,#1c1917'],
  ['Đà Nẵng', 'Thành phố cầu', 16.0544, 108.2022, 13, '#1d4ed8,#0c0a09'],
  ['Đà Lạt', 'Xứ sở ngàn hoa', 11.9404, 108.4583, 13, '#6d28d9,#0c0a09'],
  ['TP. Hồ Chí Minh', 'Sài Gòn sôi động', 10.7769, 106.7009, 13, '#be123c,#0c0a09'],
  ['Phú Quốc', 'Đảo ngọc', 10.2899, 103.984, 11, '#0f766e,#0c0a09'],
];
$('#spots').innerHTML = SPOTS.map(([n, s, , , , g], i) => `<button class="spot" data-i="${i}" style="--g:linear-gradient(135deg,${g});animation-delay:${i * 35}ms"><span class="rk">${i + 1}</span><b>${n}</b><small>${s}</small></button>`).join('');
$$('.spot').forEach(b => b.onclick = () => { const [n, s, la, lo, z] = SPOTS[+b.dataset.i]; map.flyTo([la, lo], z, { duration: 2.2 }); selectPoint(L.latLng(la, lo), { name: n, sub: s }); });

/* ---------- Chỉ đường ---------- */
let savedMode = 'moto';
try { savedMode = localStorage.getItem('mv.mode') || 'moto'; } catch {}
const rt = { from: null, to: null, mode: savedMode, layers: L.layerGroup().addTo(map), routes: [], sel: 0, mA: null, mB: null };
function setEnd(which, ll, name) {
  rt[which] = { ll, name: name || fmtLL(ll) };
  $(which === 'from' ? '#rtFrom' : '#rtTo').value = rt[which].name;
  const key = which === 'from' ? 'mA' : 'mB';
  if (rt[key]) map.removeLayer(rt[key]);
  rt[key] = L.marker(ll, { icon: pinIcon(which === 'from' ? 'A' : 'B', which === 'from' ? 'neon' : '', 'mk-drop'), draggable: true, zIndexOffset: 500 }).addTo(map);
  rt[key].on('dragend', e => { setEnd(which, e.target.getLatLng()); if (rt.from && rt.to) findRoute(); });
  $('#rtGo').disabled = !(rt.from && rt.to);
}
function routeTo(ll, name) {
  setTab('route');
  setEnd('to', ll, name);
  if (rt.from) findRoute();
  else if (meLL) { setEnd('from', meLL, 'Vị trí của tôi'); findRoute(); }
  else $('#rtFrom').focus();
}
suggest($('#rtFrom'), $('#rtFrom').nextElementSibling || (() => { const d = document.createElement('div'); d.className = 'sugg'; $('#rtFrom').after(d); return d; })(), it => { setEnd('from', it.ll, it.name); if (rt.to) findRoute(); });
suggest($('#rtTo'), $('#rtTo').nextElementSibling || (() => { const d = document.createElement('div'); d.className = 'sugg'; $('#rtTo').after(d); return d; })(), it => { setEnd('to', it.ll, it.name); if (rt.from) findRoute(); });
$('#rtSwap').onclick = () => {
  const a = rt.from, b = rt.to;
  rt.from = rt.to = null;
  [['from', b], ['to', a]].forEach(([w, v]) => { if (v) setEnd(w, v.ll, v.name); else { $(w === 'from' ? '#rtFrom' : '#rtTo').value = ''; const k = w === 'from' ? 'mA' : 'mB'; if (rt[k]) { map.removeLayer(rt[k]); rt[k] = null; } } });
  $('#rtGo').disabled = !(rt.from && rt.to);
  if (rt.from && rt.to) findRoute();
};
// xoá hết chữ trong ô = bỏ điểm đó
[['from', '#rtFrom', 'mA'], ['to', '#rtTo', 'mB']].forEach(([w, sel, k]) => $(sel).addEventListener('input', e => {
  if (e.target.value.trim() || !rt[w]) return;
  rt[w] = null;
  if (rt[k]) { map.removeLayer(rt[k]); rt[k] = null; }
  rtCtl?.abort(); rt.routes = []; rt.layers.clearLayers(); $('#rtResult').innerHTML = '';
  $('#rtGo').disabled = true;
}));
$('#rtMe').onclick =() => locate(false).then(ll => { setEnd('from', ll, 'Vị trí của tôi'); if (rt.to) findRoute(); }).catch(fail);
$$('#rtMode button').forEach(b => b.onclick = () => {
  rt.mode = b.dataset.mode;
  try { localStorage.setItem('mv.mode', rt.mode); } catch {}
  $$('#rtMode button').forEach(x => x.classList.toggle('on', x === b));
  if (rt.from && rt.to) findRoute();
});
$('#rtGo').onclick = () => findRoute();
$$('#rtMode button').forEach(x => x.classList.toggle('on', x.dataset.mode === rt.mode));

const SPEED = { moto: null, car: null, bike: 15, foot: 4.8 }; // km/h, xe đạp và đi bộ tính lại cho sát thực tế
function stepText(s) {
  const m = s.maneuver, mod = m.modifier || '', road = s.name ? ` <b>${esc(s.name)}</b>` : '';
  const dir = { left: 'trái', right: 'phải', 'slight left': 'chếch trái', 'slight right': 'chếch phải', 'sharp left': 'gắt sang trái', 'sharp right': 'gắt sang phải', straight: 'thẳng', uturn: 'quay đầu' }[mod] || '';
  const icn = mod.includes('left') ? 'left' : mod.includes('right') ? 'right' : mod === 'uturn' ? 'uturn' : 'up';
  switch (m.type) {
    case 'depart': return ['nav', `Khởi hành${road ? ' trên' + road : ''}`];
    case 'arrive': return ['flag', 'Đã đến nơi'];
    case 'roundabout': case 'rotary': case 'roundabout turn': return ['undo', `Vào vòng xuyến, ra lối thứ ${m.exit || 1}${road ? ' vào' + road : ''}`];
    case 'exit roundabout': case 'exit rotary': return ['up', `Ra khỏi vòng xuyến${road ? ' vào' + road : ''}`];
    case 'merge': return [icn, `Nhập làn${road ? ' vào' + road : ''}`];
    case 'on ramp': return [icn, `Vào đường dẫn${road ? ' lên' + road : ''}`];
    case 'off ramp': return [icn, `Rẽ ra đường nhánh${road ? ' về' + road : ''}`];
    case 'fork': return [icn, `Ở ngã ba, giữ bên ${mod.includes('left') ? 'trái' : 'phải'}${road ? ' theo' + road : ''}`];
    case 'end of road': return [icn, `Cuối đường, rẽ ${dir}${road ? ' vào' + road : ''}`];
    case 'continue': case 'new name': return [icn, mod === 'straight' || !dir ? `Đi tiếp${road ? ' theo' + road : ''}` : `Đi ${dir}${road ? ' theo' + road : ''}`];
    default: return [icn, mod === 'uturn' ? `Quay đầu${road ? ' trên' + road : ''}` : mod === 'straight' ? `Đi thẳng${road ? ' vào' + road : ''}` : `Rẽ ${dir}${road ? ' vào' + road : ''}`];
  }
}
// Xe máy: tránh cao tốc, đi được ngõ hẻm; kết quả trả về cùng dạng với các chế độ khác
function motoRoute(a, b, signal) {
  const q = { locations: [{ lat: a.lat, lon: a.lng }, { lat: b.lat, lon: b.lng }], costing: 'motor_scooter',
    costing_options: { motor_scooter: { use_highways: 0, use_primary: .5, use_hills: .5 } },
    alternates: 2, format: 'osrm', shape_format: 'geojson', language: 'vi-VN' };
  return getJSON(`https://valhalla1.openstreetmap.de/route?json=${encodeURIComponent(JSON.stringify(q))}`, { signal, timeout: 20000 })
    .catch(e => { throw /HTTP 400/.test(e.message) ? new Error('NoRoute') : e; });
}
let rtCtl;
async function findRoute() {
  if (!(rt.from && rt.to)) return;
  rtCtl?.abort(); rtCtl = new AbortController();
  const box = $('#rtResult');
  box.innerHTML = `<div class="rt-loading"><div class="cl-scan"></div><span><span class="cl-spinner"></span> Đang tính đường đi…</span></div>`;
  try {
    const d = rt.mode === 'moto' ? await motoRoute(rt.from.ll, rt.to.ll, rtCtl.signal) : await getJSON(`https://routing.openstreetmap.de/${{ car: 'routed-car', bike: 'routed-bike', foot: 'routed-foot' }[rt.mode]}/route/v1/driving/${rt.from.ll.lng},${rt.from.ll.lat};${rt.to.ll.lng},${rt.to.ll.lat}?overview=full&geometries=geojson&steps=true&alternatives=true`, { signal: rtCtl.signal });
    if (d.code !== 'Ok' || !d.routes?.length) throw new Error(d.code || 'NoRoute');
    rt.routes = d.routes.slice(0, 3).map(r => {
      if (SPEED[rt.mode]) r.duration = r.distance / 1000 / SPEED[rt.mode] * 3600;
      return r;
    });
    rt.sel = 0;
    drawRoutes(true);
  } catch (e) {
    if (e.name === 'AbortError') return;
    box.innerHTML = '';
    fail(e);
  }
}
function drawRoutes(fit) {
  rt.layers.clearLayers();
  rt.routes.forEach((r, i) => {
    if (i === rt.sel) return;
    L.geoJSON(r.geometry, { style: { color: '#71717a', weight: 6, opacity: .7 } }).on('click', () => { rt.sel = i; drawRoutes(); }).addTo(rt.layers);
  });
  const r = rt.routes[rt.sel];
  L.geoJSON(r.geometry, { style: { color: '#7f1d1d', weight: 11, opacity: .55 } }).addTo(rt.layers);
  const main = L.geoJSON(r.geometry, { style: { color: '#ef4444', weight: 5, opacity: 1, className: 'rt-line-glow' } }).addTo(rt.layers);
  if (fit && !nav.on) map.flyToBounds(main.getBounds(), { padding: [70, 70], duration: 1.2 });

  const box = $('#rtResult');
  const alts = rt.routes.map((x, i) => {
    const [t, tu] = fmtTime(x.duration), [dv, du] = fmtDist(x.distance);
    return `<button class="rt-alt ${i === rt.sel ? 'on' : ''}" data-i="${i}" style="animation-delay:${i * 40}ms"><span class="n">${i + 1}</span>
      <div><div class="t">${t}<small>${tu}</small></div><div class="d"><b>${dv} ${du}</b>${x.legs[0].summary ? ' · qua ' + esc(x.legs[0].summary) : ''}</div></div>
      ${i === 0 ? '<span class="cl-tag neon">NHANH NHẤT</span>' : ''}</button>`;
  }).join('');
  const steps = r.legs[0].steps.map((s, i) => {
    const [icn, txt] = stepText(s), [dv, du] = fmtDist(s.distance);
    return `<button class="step" data-i="${i}"><span class="si">${ic(icn)}</span><span>${txt}</span>${s.distance ? `<span class="sd">${dv} ${du}</span>` : ''}</button>`;
  }).join('');
  box.innerHTML = `<div class="rt-alts">${alts}</div>
    <div class="rt-go">
      <button class="cl-cta" data-a="nav">${ic('nav')}Dẫn đường</button>
      <button class="cl-btn" data-a="sim" title="Chạy thử dọc tuyến đường, không cần GPS">${ic('play')}Chạy thử</button>
    </div>
    <div class="cl-label" style="margin:18px 0 10px"><span>${ic('route', 'c-red')}Lộ trình chi tiết</span><output>${r.legs[0].steps.length} bước</output></div>
    <div class="steps">${steps}</div>`;
  box.querySelectorAll('.rt-alt').forEach(b => b.onclick = () => { rt.sel = +b.dataset.i; drawRoutes(true); });
  box.querySelector('[data-a=nav]').onclick = () => startNav(false);
  box.querySelector('[data-a=sim]').onclick = () => startNav(true);
  box.querySelectorAll('.step').forEach(b => b.onclick = () => {
    const [lng, lat] = r.legs[0].steps[+b.dataset.i].maneuver.location;
    map.flyTo([lat, lng], 17, { duration: 1 });
  });
}

/* ---------- Đo đạc ---------- */
let measuring = false, msMode = 'line', msPts = [];
const msLayer = L.layerGroup().addTo(map);
function setMeasuring(on) {
  measuring = on;
  $('#msOn').checked = on;
  $('.stage').classList.toggle('measuring', on);
}
$('#msOn').onchange = e => setMeasuring(e.target.checked);
$$('#msMode button').forEach(b => b.onclick = () => {
  msMode = b.dataset.mode;
  $$('#msMode button').forEach(x => x.classList.toggle('on', x === b));
  drawMeasure();
});
function addMeasure(ll) { msPts.push(ll); drawMeasure(); }
$('#msUndo').onclick = () => { msPts.pop(); drawMeasure(); };
$('#msClear').onclick = () => { msPts = []; drawMeasure(); };
function geoArea(pts) { // diện tích mặt cầu (m²)
  const R = 6378137, rad = Math.PI / 180;
  let s = 0;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    s += (b.lng - a.lng) * rad * (2 + Math.sin(a.lat * rad) + Math.sin(b.lat * rad));
  }
  return Math.abs(s * R * R / 2);
}
function drawMeasure() {
  msLayer.clearLayers();
  const area = msMode === 'area';
  let total = 0;
  msPts.forEach((p, i) => {
    L.marker(p, { icon: L.divIcon({ className: 'mk', html: '<div class="ms-v"></div>', iconSize: [12, 12], iconAnchor: [6, 6] }) }).addTo(msLayer);
    if (i) {
      total += map.distance(msPts[i - 1], p);
      if (!area) L.tooltip({ permanent: true, direction: 'top', className: 'ms-tip', offset: [0, -8] }).setLatLng(p).setContent(fmtDist(total).join(' ')).addTo(msLayer);
    }
  });
  if (msPts.length > 1) {
    if (area && msPts.length > 2) L.polygon(msPts, { color: '#fbbf24', weight: 3, fillColor: '#ef4444', fillOpacity: .18, dashArray: '8 6' }).addTo(msLayer);
    else L.polyline(msPts, { color: '#fbbf24', weight: 3, dashArray: '8 6' }).addTo(msLayer);
  }
  const [v, u] = area ? fmtArea(msPts.length > 2 ? geoArea(msPts) : 0) : fmtDist(total);
  $('#msVal').textContent = v; $('#msUnit').textContent = u;
  $('#msNum').textContent = msPts.length;
  $('#msLabel').textContent = area ? 'Diện tích vùng' : 'Tổng quãng đường';
  const per = area && msPts.length > 2 ? fmtDist(total + map.distance(msPts.at(-1), msPts[0])).join(' ') : '';
  $('#msSub').textContent = !msPts.length ? 'Chưa có điểm nào' : area ? (msPts.length < 3 ? `${msPts.length} điểm — cần ít nhất 3 điểm` : `${msPts.length} điểm · chu vi ${per}`) : `${msPts.length} điểm · ${Math.max(0, msPts.length - 1)} đoạn`;
}

/* ---------- Ghim ---------- */
let pins = [];
try { pins = JSON.parse(localStorage.getItem('mv.pins') || '[]'); } catch {}
const pinLayer = L.layerGroup().addTo(map);
const savePins = () => { try { localStorage.setItem('mv.pins', JSON.stringify(pins)); } catch {} };
function addPin(ll, name) {
  if (pins.some(p => Math.abs(p.lat - ll.lat) < 1e-6 && Math.abs(p.lng - ll.lng) < 1e-6)) return toast('Đã ghim rồi', 'Điểm này có trong danh sách.');
  pins.unshift({ id: Date.now().toString(36), name: name || fmtLL(ll), lat: ll.lat, lng: ll.lng, ts: Date.now() });
  savePins(); drawPins();
  toast('Đã ghim', name || fmtLL(ll), { ok: true });
}
function drawPins() {
  pinLayer.clearLayers();
  $('#pinCount').textContent = pins.length;
  pins.forEach((p, i) => L.marker([p.lat, p.lng], { icon: pinIcon(i + 1, 'white') }).bindPopup(`<div class="pop"><b>${esc(p.name)}</b><small class="cl-mono">${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}</small></div>`).addTo(pinLayer));
  const list = $('#pinList');
  if (!pins.length) { list.innerHTML = `<div class="pins-empty"><div class="big">00</div>Chưa có ghim nào.<br>Bấm vào bản đồ rồi chọn <b>Ghim</b>, hoặc chuột phải → Ghim tại đây.</div>`; return; }
  list.innerHTML = pins.map((p, i) => `<div class="pin" data-i="${i}" style="animation-delay:${Math.min(i, 10) * 30}ms"><span class="rk">${i + 1}</span>
    <div class="pt"><b>${esc(p.name)}</b><small>${p.lat.toFixed(4)}, ${p.lng.toFixed(4)}</small></div>
    <button class="cl-icon-btn" data-a="ren" title="Đổi tên">${ic('edit')}</button>
    <button class="cl-icon-btn" data-a="nav" title="Chỉ đường">${ic('nav')}</button>
    <button class="cl-icon-btn" data-a="del" title="Bỏ ghim">${ic('trash')}</button></div>`).join('');
  list.querySelectorAll('.pin').forEach(el => {
    const p = pins[+el.dataset.i];
    el.onclick = e => {
      if (e.target.closest('input')) return;
      const a = e.target.closest('button')?.dataset.a;
      if (a === 'ren') return renamePin(el, p);
      if (a === 'del') {
        const i = pins.indexOf(p);
        pins.splice(i, 1); savePins(); drawPins();
        undoToast('Đã bỏ ghim', p.name, () => { pins.splice(Math.min(i, pins.length), 0, p); savePins(); drawPins(); });
        return;
      }
      if (a === 'nav') return routeTo(L.latLng(p.lat, p.lng), p.name);
      map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 15), { duration: 1.2 });
    };
  });
}
function renamePin(row, p) {
  const b = row.querySelector('.pt b');
  const inp = Object.assign(document.createElement('input'), { className: 'cl-input pin-ren', value: p.name, maxLength: 120 });
  b.replaceWith(inp); inp.focus(); inp.select();
  let done = false;
  const finish = save => {
    if (done) return; done = true;
    const v = inp.value.trim();
    if (save && v && v !== p.name) { p.name = v; savePins(); }
    drawPins();
  };
  inp.onkeydown = e => { if (e.key === 'Enter') finish(true); else if (e.key === 'Escape') finish(false); e.stopPropagation(); };
  inp.onblur = () => finish(true);
}
// thông báo có nút Hoàn tác cho thao tác xoá
function undoToast(title, msg, undo) {
  const t = document.createElement('div');
  t.className = 'cl-toast ok';
  t.innerHTML = `<div class="ti">${ic('trash')}</div><div><b>${esc(title)}</b>${esc(msg)}<br><button class="cl-toast-copy">Hoàn tác</button></div>`;
  t.querySelector('button').onclick = () => { undo(); t.remove(); };
  $('#toastHost').append(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 6000);
}
$('#pinExport').onclick = () => {
  if (!pins.length) return toast('Chưa có ghim', 'Ghim vài điểm trước rồi xuất file.');
  const gj = { type: 'FeatureCollection', features: pins.map(p => ({ type: 'Feature', properties: { name: p.name, ts: p.ts }, geometry: { type: 'Point', coordinates: [p.lng, p.lat] } })) };
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(gj, null, 2)], { type: 'application/geo+json' }));
  a.download = `mapverse-ghim-${new Date().toISOString().slice(0, 10)}.geojson`;
  a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
};
$('#pinImport').onclick = () => $('#pinFile').click();
$('#pinFile').onchange = async e => {
  const f = e.target.files[0]; e.target.value = '';
  if (!f) return;
  try {
    const gj = JSON.parse(await f.text());
    const pts = (gj.features || []).filter(x => x.geometry?.type === 'Point');
    if (!pts.length) throw new Error('geojson rỗng');
    let n = 0;
    pts.forEach(x => {
      const [lng, lat] = (x.geometry.coordinates || []).map(Number);
      if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) return;
      if (pins.some(p => Math.abs(p.lat - lat) < 1e-6 && Math.abs(p.lng - lng) < 1e-6)) return;
      pins.push({ id: Math.random().toString(36).slice(2), name: String(x.properties?.name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`).slice(0, 120), lat, lng, ts: +x.properties?.ts || Date.now() }); n++;
    });
    savePins(); drawPins();
    toast('Đã nhập ghim', `Thêm ${n} điểm mới.`, { ok: true });
  } catch (err) { fail(new Error('json: ' + err.message)); }
};

/* ---------- Menu chuột phải ---------- */
const ctx = $('#ctx');
function hideCtx() { ctx.classList.remove('on'); }
map.on('contextmenu', e => {
  const ll = wrapLL(e.latlng), oe = e.originalEvent || {}, pt = oe.touches?.[0] || oe.changedTouches?.[0] || oe;
  const x = pt.clientX ?? innerWidth / 2, y = pt.clientY ?? innerHeight / 2;
  ctx.innerHTML = `<div class="hd">${fmtLL(ll)}</div>
    <button data-a="from">${ic('nav')}Chỉ đường từ đây</button>
    <button data-a="to">${ic('flag')}Chỉ đường đến đây</button>
    <button data-a="pin">${ic('pin')}Ghim tại đây</button>
    <button data-a="info">${ic('search')}Đây là đâu?</button>
    <button data-a="flood">${ic('waves')}Kiểm tra nguy cơ lũ</button>
    <button data-a="ms">${ic('ruler')}Đo từ đây</button>
    <button data-a="copy">${ic('copy')}Chép toạ độ</button>`;
  ctx.classList.add('on');
  // đặt menu sau khi hiện để biết kích thước thật, không tràn ra ngoài màn hình
  ctx.style.left = Math.max(8, Math.min(x, innerWidth - ctx.offsetWidth - 8)) + 'px';
  ctx.style.top = Math.max(8, Math.min(y, innerHeight - ctx.offsetHeight - 8)) + 'px';
  ctx.querySelectorAll('button').forEach(b => b.onclick = async () => {
    hideCtx();
    switch (b.dataset.a) {
      case 'from': setTab('route'); setEnd('from', ll); if (rt.to) findRoute(); else $('#rtTo').focus(); break;
      case 'to': routeTo(ll); break;
      case 'pin': { let n; try { n = (await reverse(ll))?.name; } catch {} addPin(ll, n); break; }
      case 'info': selectPoint(ll); break;
      case 'flood': floodAnalyze(ll); break;
      case 'ms': setTab('measure'); msPts = [ll]; setMeasuring(true); drawMeasure(); break;
      case 'copy': copyLL(ll); break;
    }
  });
});
document.addEventListener('mousedown', e => { if (!ctx.contains(e.target)) hideCtx(); });
map.on('movestart', hideCtx);

/* ---------- Chế độ 3D ----------
   Bản đồ 2D vẫn là nguồn sự thật (ghim, tuyến đường, đo đạc…); khung 3D chỉ
   vẽ lại các lớp đó và đồng bộ vị trí xem hai chiều. Mức phóng 3D = 2D − 1. */
const OFM = 'https://tiles.openfreemap.org';
const DEM = { type: 'raster-dem', tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'], encoding: 'terrarium', tileSize: 256, maxzoom: 15, attribution: '© Mapzen' };
const LOOK3D = {
  dark: { bld: ['#18181b', 25, '#2a1215', 70, '#7f1d1d', 180, '#ef4444'], sky: ['#050505', '#3b0d0d'], ex: 1.3, shade: '#000', light: '#3f1d1d' },
  street: { bld: ['#e7e2d8', 40, '#d8cbb8', 150, '#f3a48d'], sky: ['#7fb2e5', '#e8eef5'], ex: 1.2 },
  sat: { bld: ['#d4d4d8', 60, '#e7d6c9', 180, '#fca5a5'], sky: ['#0c1a2a', '#6b8fb5'], ex: 1.4 },
  topo: { bld: ['#e7e2d8', 40, '#d8cbb8', 150, '#f3a48d'], sky: ['#7fb2e5', '#e8eef5'], ex: 1.7, shade: '#3d3020', light: '#fff' },
};
function style3d(k) {
  if (k === 'dark') return `${OFM}/styles/dark`;
  if (k !== 'sat') return `${OFM}/styles/liberty`;
  const esri = p => ({ type: 'raster', tiles: [`https://server.arcgisonline.com/ArcGIS/rest/services/${p}/MapServer/tile/{z}/{y}/{x}`], tileSize: 256, maxzoom: 19, attribution: '© Esri' });
  return {
    version: 8,
    sources: { sat: esri('World_Imagery'), ref: esri('Reference/World_Boundaries_and_Places'), openmaptiles: { type: 'vector', url: `${OFM}/planet` } },
    layers: [{ id: 'bg', type: 'background', paint: { 'background-color': '#050505' } }, { id: 'sat', type: 'raster', source: 'sat' }, { id: 'ref', type: 'raster', source: 'ref' }],
  };
}
let m3 = null, is3d = false, orbiting = false, m3Busy = false;
const m3Marks = new Map();
const stage = $('.stage');

function loadLib() {
  const v = 'https://cdnjs.cloudflare.com/ajax/libs/maplibre-gl/4.7.1/maplibre-gl.min';
  document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${v}.css">`);
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = v + '.js'; s.onload = res; s.onerror = () => rej(new Error('3d-load'));
    document.head.append(s);
  });
}
function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
}

function decorate() {
  const look = LOOK3D[curLayer], st = m3.getStyle();
  st.layers.filter(l => l['source-layer'] === 'building').forEach(l => m3.removeLayer(l.id));
  // nhãn ưu tiên tên tiếng Việt / tên địa phương thay vì tên tiếng Anh
  st.layers.filter(l => l.type === 'symbol' && /name/.test(JSON.stringify(l.layout?.['text-field'] ?? ''))).forEach(l => m3.setLayoutProperty(l.id, 'text-field', ['coalesce', ['get', 'name:vi'], ['get', 'name'], ['get', 'name_en']]));
  const firstSym = (curLayer === 'sat' ? 'ref' : st.layers.find(l => l.type === 'symbol')?.id);
  const dem = navigator.onLine ? DEM : { ...DEM, maxzoom: OFF_DZ }; // mất mạng: chỉ dùng mức độ cao đã tải
  m3.addSource('dem', dem);
  m3.setTerrain({ source: 'dem', exaggeration: look.ex });
  if (look.shade) {
    m3.addSource('dem-hs', dem);
    m3.addLayer({ id: 'mv-hill', type: 'hillshade', source: 'dem-hs', paint: { 'hillshade-shadow-color': look.shade, 'hillshade-highlight-color': look.light, 'hillshade-exaggeration': curLayer === 'dark' ? .35 : .5 } }, firstSym);
  }
  const H = p => ['interpolate', ['linear'], ['zoom'], 13, 0, 14.5, ['coalesce', ['get', p], p === 'render_height' ? 8 : 0]];
  m3.addLayer({
    id: 'mv-buildings', type: 'fill-extrusion', source: 'openmaptiles', 'source-layer': 'building', minzoom: 13,
    paint: {
      'fill-extrusion-color': ['interpolate', ['linear'], ['coalesce', ['get', 'render_height'], 8], 0, ...look.bld],
      'fill-extrusion-height': H('render_height'), 'fill-extrusion-base': H('render_min_height'),
      'fill-extrusion-opacity': curLayer === 'sat' ? .82 : .92, 'fill-extrusion-vertical-gradient': true,
    },
  }, firstSym);
  // lớp vẽ lại tuyến đường / vùng đo từ bản đồ 2D
  m3.addSource('mv-ov', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
  const col = ['get', 'color'], w = ['get', 'weight'];
  m3.addLayer({ id: 'mv-fill', type: 'fill', source: 'mv-ov', filter: ['==', ['get', 'fill'], true], paint: { 'fill-color': ['get', 'fillColor'], 'fill-opacity': ['get', 'fillOpacity'] } });
  m3.addLayer({ id: 'mv-glow', type: 'line', source: 'mv-ov', filter: ['==', ['get', 'glow'], true], layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': '#ef4444', 'line-width': ['*', w, 3], 'line-blur': 8, 'line-opacity': .6 } });
  m3.addLayer({ id: 'mv-line', type: 'line', source: 'mv-ov', filter: ['!=', ['get', 'dash'], true], layout: { 'line-join': 'round', 'line-cap': 'round' }, paint: { 'line-color': col, 'line-width': w, 'line-opacity': ['get', 'opacity'] } });
  m3.addLayer({ id: 'mv-dash', type: 'line', source: 'mv-ov', filter: ['==', ['get', 'dash'], true], paint: { 'line-color': col, 'line-width': w, 'line-dasharray': [2, 1.5] } });
  m3.setSky?.({ 'sky-color': look.sky[0], 'horizon-color': look.sky[1], 'fog-color': look.sky[0], 'sky-horizon-blend': .6, 'horizon-fog-blend': .7, 'fog-ground-blend': .45, 'atmosphere-blend': 0 });
  mirror();
}

/* Vẽ lại các lớp của bản đồ 2D lên khung 3D */
let mirrorRaf = 0;
function scheduleMirror() { if (is3d && !mirrorRaf) mirrorRaf = requestAnimationFrame(() => { mirrorRaf = 0; mirror(); }); }
function mirror() {
  if (!m3) return;
  const feats = [], seen = new Set();
  map.eachLayer(l => {
    if (l instanceof L.Polyline) {
      const o = l.options, f = l.toGeoJSON();
      f.properties = { color: o.color, weight: o.weight, opacity: o.opacity ?? 1, dash: !!o.dashArray, glow: /glow/.test(o.className || ''), fill: l instanceof L.Polygon, fillColor: o.fillColor || o.color, fillOpacity: o.fillOpacity ?? .2 };
      feats.push(f);
      return;
    }
    const isMk = l instanceof L.Marker, isTip = l instanceof L.Tooltip && l.options.permanent && l._map === map && !l._source;
    if (!isMk && !isTip) return;
    const id = L.stamp(l), ll = l.getLatLng();
    seen.add(id);
    let mk = m3Marks.get(id);
    if (!mk) {
      const el = document.createElement('div');
      if (isMk) {
        const io = l.options.icon.options;
        el.className = 'm3-mk ' + (io.className || '').replace('mk-drop', '');
        el.innerHTML = (io.html || '').replace('mk-drop', '');
        const [w, h] = io.iconSize || [20, 20], [ax, ay] = io.iconAnchor || [w / 2, h / 2];
        el.style.cssText = `width:${w}px;height:${h}px`;
        mk = new maplibregl.Marker({ element: el, anchor: 'top-left', offset: [-ax, -ay] });
      } else {
        el.className = 'm3-mk m3-tip leaflet-tooltip ms-tip';
        mk = new maplibregl.Marker({ element: el, anchor: 'bottom', offset: [0, -10] });
      }
      mk.setLngLat([ll.lng, ll.lat]).addTo(m3);
      m3Marks.set(id, mk);
    } else mk.setLngLat([ll.lng, ll.lat]);
    if (isTip) mk.getElement().textContent = l.getContent();
  });
  for (const [id, mk] of m3Marks) if (!seen.has(id)) { mk.remove(); m3Marks.delete(id); }
  m3.getSource('mv-ov')?.setData({ type: 'FeatureCollection', features: feats });
}
map.on('layeradd layerremove', scheduleMirror);

/* Bay tới đâu thì khung đang hiện bay tới đó */
const fly2d = map.flyTo.bind(map), flyBounds2d = map.flyToBounds.bind(map);
map.flyTo = (ll, z, o = {}) => {
  if (!is3d) return fly2d(ll, z, o);
  ll = L.latLng(ll); setOrbit(false);
  m3.flyTo({ center: [ll.lng, ll.lat], zoom: (z ?? map.getZoom()) - 1, duration: (o.duration || 1.2) * 1300, essential: true });
  return map;
};
// khung bản đồ quá nhỏ hoặc đang ẩn (kích thước 0) thì lề lớn hơn khung, phép tính mức phóng ra vô nghĩa:
// lề không vượt 1/4 khung; khung chưa có kích thước thì đợi nó hiện ra rồi mới bay
let pendingFit = null;
new ResizeObserver(() => {
  map.invalidateSize({ pan: false });
  if (pendingFit && map.getSize().x > 60 && map.getSize().y > 60) { const [b, o] = pendingFit; pendingFit = null; map.flyToBounds(b, o); }
}).observe($('#map'));
map.flyToBounds = (b, o = {}) => {
  if (!is3d) {
    map.invalidateSize({ pan: false });
    const sz = map.getSize();
    if (sz.x <= 60 || sz.y <= 60) { pendingFit = [b, o]; return map; }
    pendingFit = null;
    if (o.padding) o = { ...o, padding: [Math.min(o.padding[0], Math.floor(sz.x / 4)), Math.min(o.padding[1], Math.floor(sz.y / 4))] };
    return flyBounds2d(b, o);
  }
  b = L.latLngBounds(b); setOrbit(false);
  const cam = m3.cameraForBounds([[b.getWest(), b.getSouth()], [b.getEast(), b.getNorth()]], { padding: o.padding?.[0] ?? 60, maxZoom: (o.maxZoom || 18) - 1, bearing: m3.getBearing() });
  if (cam) m3.flyTo({ ...cam, pitch: m3.getPitch(), duration: (o.duration || 1.2) * 1300, essential: true });
  return map;
};

function initM3() {
  m3 = new maplibregl.Map({
    container: 'map3d', style: style3d(curLayer), center: [center().lng, center().lat], zoom: map.getZoom() - 1,
    maxPitch: 85, attributionControl: { compact: true }, antialias: true,
  });
  m3.on('style.load', decorate);
  m3.on('moveend', () => {
    if (!is3d) return;
    const c = m3.getCenter();
    map.setView([c.lat, c.lng], Math.round(m3.getZoom() + 1), { animate: false });
  });
  m3.on('move', panel3d);
  m3.on('mousemove', e => $('#coord').textContent = fmtLL(L.latLng(e.lngLat.lat, e.lngLat.lng)));
  m3.on('click', e => map.fire('click', { latlng: L.latLng(e.lngLat.lat, e.lngLat.lng) }));
  let turned = false;
  m3.on('mousedown', () => { turned = false; setOrbit(false); });
  m3.on('touchstart', () => setOrbit(false));
  m3.on('rotatestart', () => turned = true);
  m3.on('pitchstart', () => turned = true);
  m3.on('contextmenu', e => {
    e.originalEvent.preventDefault();
    if (!turned) map.fire('contextmenu', { latlng: L.latLng(e.lngLat.lat, e.lngLat.lng), originalEvent: e.originalEvent });
  });
  m3.on('movestart', hideCtx);
  m3.on('dragstart', () => { if (nav.on && nav.follow) { nav.follow = false; $('#navView').classList.add('on'); } });
  return new Promise(res => { m3.once('style.load', () => setTimeout(res, 300)); setTimeout(res, 8000); });
}

function panel3d() {
  const p = Math.round(m3.getPitch()), b = Math.round(m3.getBearing()), z = m3.getZoom() + 1;
  const ps = $('#m3Pitch'), bs = $('#m3Bear');
  if (document.activeElement !== ps) ps.value = p;
  if (document.activeElement !== bs) bs.value = b;
  ps.style.setProperty('--p', p / 85 * 100 + '%');
  bs.style.setProperty('--p', (b + 180) / 360 * 100 + '%');
  $('#m3PitchV').textContent = p + '°'; $('#m3BearV').textContent = b + '°';
  $('#m3Needle').style.transform = `rotate(${-b}deg)`;
  zBig.textContent = Math.round(z);
  $('#m3Hint').innerHTML = z < 15 ? 'Phóng to thêm để thấy <b>toà nhà 3D</b> mọc lên' : 'Giữ <b>chuột phải</b> rồi kéo để xoay và nghiêng';
}
$('#m3Pitch').oninput = e => { setOrbit(false); m3.setPitch(+e.target.value); };
$('#m3Bear').oninput = e => { setOrbit(false); m3.setBearing(+e.target.value); };
$('#m3North').onclick = () => { setOrbit(false); m3.easeTo({ bearing: 0, duration: 800 }); };

let orbitRaf = 0;
function setOrbit(on) {
  if (!m3 || orbiting === on) return;
  orbiting = on;
  $('#m3Orbit').classList.toggle('on', on);
  $('#m3Orbit').lastChild.textContent = on ? 'Dừng bay' : 'Bay vòng';
  cancelAnimationFrame(orbitRaf);
  if (!on) return;
  if (m3.getPitch() < 45) m3.setPitch(60);
  const step = () => { m3.setBearing(m3.getBearing() + .12); orbitRaf = requestAnimationFrame(step); };
  orbitRaf = requestAnimationFrame(step);
}
$('#m3Orbit').onclick = () => setOrbit(!orbiting);

async function toggle3d() {
  if (m3Busy) return toast('Đang chuyển chế độ', 'Đợi một chút nhé.');
  m3Busy = true;
  try {
    if (!is3d) {
      if (!hasWebGL()) throw new Error('3d-unsupported');
      $('#btn3d').classList.add('on');
      if (!m3) {
        stage.classList.add('loading3d');
        if (!window.maplibregl) await loadLib();
        await initM3();
      } else m3.jumpTo({ center: [center().lng, center().lat], zoom: map.getZoom() - 1 });
      is3d = true;
      if (measuring) toast('Vẫn đo được trong 3D', 'Bấm lên mặt đất để thêm điểm.', { ok: true });
      stage.classList.add('is3d');
      m3.resize(); mirror(); panel3d();
      m3.easeTo({ pitch: 60, bearing: -20, duration: 1800, easing: t => 1 - Math.pow(1 - t, 3) });
    } else {
      setOrbit(false);
      await new Promise(res => { m3.easeTo({ pitch: 0, bearing: 0, duration: 600 }); setTimeout(res, 620); });
      is3d = false;
      stage.classList.remove('is3d');
      $('#btn3d').classList.remove('on');
      map.invalidateSize();
      zBig.textContent = map.getZoom();
    }
  } catch (e) {
    $('#btn3d').classList.toggle('on', is3d);
    fail(e);
  } finally {
    stage.classList.remove('loading3d');
    m3Busy = false;
  }
}
$('#btn3d').onclick = toggle3d;

/* ---------- Quanh đây ---------- */
const CATS = [
  ['food', 'Quán ăn', 'utensils', 'amenity', ['restaurant', 'fast_food', 'food_court']],
  ['cafe', 'Cà phê', 'coffee', 'amenity', ['cafe']],
  ['fuel', 'Cây xăng', 'fuel', 'amenity', ['fuel']],
  ['atm', 'ATM', 'banknote', 'amenity', ['atm', 'bank']],
  ['health', 'Y tế', 'heart', 'amenity', ['hospital', 'clinic', 'pharmacy', 'doctors']],
  ['hotel', 'Khách sạn', 'bed', 'tourism', ['hotel', 'guest_house', 'hostel', 'motel']],
  ['shop', 'Siêu thị', 'cart', 'shop', ['supermarket', 'convenience', 'mall']],
  ['charge', 'Trạm sạc', 'plug', 'amenity', ['charging_station']],
];
const KIND_VI = { restaurant: 'Nhà hàng', fast_food: 'Đồ ăn nhanh', food_court: 'Khu ẩm thực', cafe: 'Cà phê', fuel: 'Cây xăng', atm: 'ATM', bank: 'Ngân hàng', hospital: 'Bệnh viện', clinic: 'Phòng khám', doctors: 'Phòng khám', pharmacy: 'Nhà thuốc', hotel: 'Khách sạn', guest_house: 'Nhà nghỉ', hostel: 'Nhà trọ', motel: 'Nhà nghỉ', supermarket: 'Siêu thị', convenience: 'Cửa hàng tiện lợi', mall: 'Trung tâm thương mại', charging_station: 'Trạm sạc' };
const POI_SERVERS = ['https://overpass-api.de/api/interpreter', 'https://overpass.private.coffee/api/interpreter', 'https://maps.mail.ru/osm/tools/overpass/api/interpreter'];
const nearLayer = L.layerGroup().addTo(map);
let nearCat = null, nearCtl;
$('#nearCats').innerHTML = CATS.map(([k, n, i], j) => `<button class="near-cat" data-k="${k}" style="animation-delay:${j * 25}ms">${ic(i)}<span>${n}</span></button>`).join('');
$$('.near-cat').forEach(b => b.onclick = () => nearCat === b.dataset.k ? clearNear() : findNear(b.dataset.k));
const hoursVi = h => h && h.replace(/24\/7/, 'Mở cả ngày').replace(/\bMo\b/g, 'T2').replace(/\bTu\b/g, 'T3').replace(/\bWe\b/g, 'T4').replace(/\bTh\b/g, 'T5').replace(/\bFr\b/g, 'T6').replace(/\bSa\b/g, 'T7').replace(/\bSu\b/g, 'CN').replace(/\boff\b/g, 'nghỉ').replace(/\bPH\b/g, 'ngày lễ');
function clearNear() {
  nearCat = null; nearCtl?.abort(); nearLayer.clearLayers();
  $$('.near-cat').forEach(b => b.classList.remove('on'));
  $('#nearList').innerHTML = '';
}
// Hai nguồn chạy song song: nguồn nhanh hiện kết quả ngay, nguồn chi tiết (giờ mở cửa, số điện thoại) về sau thì thay vào
async function nearFast(cat, c, R, signal) {
  const [, label, , key, vals] = cat;
  const tags = vals.map(v => `&osm_tag=${key}:${v}`).join('');
  const d = await getJSON(`https://photon.komoot.io/reverse?lat=${c.lat}&lon=${c.lng}&lang=default&radius=${(R / 1000).toFixed(2)}&limit=60${tags}`, { signal });
  return d.features.map(f => {
    const p = f.properties, [lng, lat] = f.geometry.coordinates, kind = KIND_VI[p.osm_value] || label;
    return { ll: L.latLng(lat, lng), name: p.name || `${kind} chưa có tên`, kind, addr: [p.housenumber, p.street].filter(Boolean).join(' ') };
  });
}
async function nearRich(cat, c, R, signal) {
  const [, label, , key, vals] = cat;
  const q = `[out:json][timeout:20];nwr["${key}"~"^(${vals.join('|')})$"](around:${R},${c.lat.toFixed(5)},${c.lng.toFixed(5)});out center tags 80;`;
  const d = await Promise.any(POI_SERVERS.map(u => getJSON(u, { method: 'POST', body: 'data=' + encodeURIComponent(q), headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, signal, timeout: 25000 })));
  return d.elements.map(e => {
    const t = e.tags || {}, kind = KIND_VI[t[key]] || label;
    return { ll: L.latLng(e.lat ?? e.center?.lat, e.lon ?? e.center?.lon), name: t['name:vi'] || t.name || t.brand || t.operator || `${kind} chưa có tên`, kind,
      addr: [t['addr:housenumber'], t['addr:street']].filter(Boolean).join(' '), hours: hoursVi(t.opening_hours), phone: t.phone || t['contact:phone'] };
  });
}
async function findNear(k) {
  const cat = CATS.find(x => x[0] === k), [, label, icn] = cat;
  nearCat = k; nearCtl?.abort();
  const ctl = nearCtl = new AbortController();
  $$('.near-cat').forEach(b => b.classList.toggle('on', b.dataset.k === k));
  const c = center(), R = Math.round(Math.min(3000, Math.max(400, map.distance(c, map.getBounds().getNorthEast()) * .85)));
  $('#nearList').innerHTML = `<div class="rt-loading"><div class="cl-scan"></div><span><span class="cl-spinner"></span> Đang quét ${label.toLowerCase()} quanh đây…</span></div>`;
  let shown = false;
  const draw = (raw, rich) => {
    if (ctl.signal.aborted || (shown === 'rich')) return;
    shown = rich ? 'rich' : true;
    const items = raw.filter(x => !isNaN(x.ll.lat)).map(x => ({ ...x, dist: map.distance(c, x.ll) })).filter(x => x.dist <= R * 1.05).sort((a, b) => a.dist - b.dist);
    renderNear(items, icn, label, R, rich);
  };
  const fast = nearFast(cat, c, R, ctl.signal).then(x => draw(x, false));
  const rich = nearRich(cat, c, R, ctl.signal).then(x => draw(x, true));
  const res = await Promise.allSettled([fast, rich]);
  if (!shown && !ctl.signal.aborted) {
    $('#nearList').innerHTML = '';
    fail(new Error('poi-busy ' + res.map(r => r.reason?.message || '').join(' | ')));
  }
}
function renderNear(items, icn, label, R, rich) {
  nearLayer.clearLayers();
  const sub = it => [it.kind, it.addr].filter(Boolean).join(' · ');
  items.forEach(it => L.marker(it.ll, { icon: L.divIcon({ className: 'mk', html: `<div class="poi">${ic(icn)}</div>`, iconSize: [28, 28], iconAnchor: [14, 14] }) })
    .on('click', () => selectPoint(it.ll, { name: it.name, sub: sub(it) })).addTo(nearLayer));
  const [rv, ru] = fmtDist(R);
  if (!items.length) { $('#nearList').innerHTML = `<div class="place-empty">${ic(icn, 'c-red')} Không thấy ${label.toLowerCase()} nào trong ${rv} ${ru}. Thử kéo bản đồ sang chỗ khác hoặc thu nhỏ.</div>`; return; }
  $('#nearList').innerHTML = `<div class="near-head"><b>${items.length}</b><span>${label.toLowerCase()} trong bán kính ${rv} ${ru}</span>${rich ? '' : '<span class="cl-spinner" title="Đang lấy thêm giờ mở cửa, số điện thoại…"></span>'}</div>` +
    items.slice(0, 40).map((it, i) => {
      const [dv, du] = fmtDist(it.dist);
      return `<div class="near-it" data-i="${i}" style="animation-delay:${Math.min(i, 12) * 25}ms">
        <span class="ni">${ic(icn)}</span>
        <div class="nt"><b>${esc(it.name)}</b><small>${esc(it.kind)}${it.addr ? ' · ' + esc(it.addr) : ''}</small>
        ${it.hours ? `<small class="nh">${ic('clock')}${esc(it.hours)}</small>` : ''}</div>
        <div class="nd"><b>${dv}</b><small>${du}</small></div>
        <button class="cl-icon-btn" data-a="nav" title="Chỉ đường">${ic('nav')}</button>
        ${it.phone ? `<a class="cl-icon-btn" href="tel:${esc(it.phone.split(';')[0].replace(/\s/g, ''))}" title="Gọi ${esc(it.phone)}">${ic('phone')}</a>` : ''}
      </div>`;
    }).join('');
  $$('#nearList .near-it').forEach(el => el.onclick = e => {
    const it = items[+el.dataset.i];
    if (e.target.closest('a')) return;
    if (e.target.closest('[data-a=nav]')) return routeTo(it.ll, it.name);
    map.flyTo(it.ll, Math.max(map.getZoom(), 17), { duration: 1 });
    selectPoint(it.ll, { name: it.name, sub: sub(it) });
  });
}

/* ---------- Dẫn đường bằng giọng nói ---------- */
const nav = { on: false, sim: false, watch: null, simT: 0, route: null, pts: [], cum: [], stepAt: [], ann: [], idx: 0, off: 0, rerouting: false, follow: true, mute: false, lock: null, last: null };
const NAV_TH = { moto: [300, 45, 35], car: [600, 70, 40], bike: [250, 35, 30], foot: [120, 20, 25] }; // báo trước, báo lúc rẽ, lệch tuyến (m)
const SIM_SPEED = { moto: 10, car: 14, bike: 6, foot: 2.5 }; // m/s, chạy nhanh gấp 3 khi mô phỏng
let viVoice = null, voiceWarned = false;
function pickVoice() { viVoice = speechSynthesis.getVoices().find(v => /^vi/i.test(v.lang)) || null; }
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function say(text) {
  if (nav.mute || !('speechSynthesis' in window)) return;
  if (!viVoice && !voiceWarned) { voiceWarned = true; toast('Máy chưa có giọng đọc tiếng Việt', 'Vào Cài đặt Windows › Thời gian & ngôn ngữ › Giọng nói để thêm giọng Tiếng Việt. Chữ hướng dẫn vẫn hiện đầy đủ.'); }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'vi-VN'; if (viVoice) u.voice = viVoice; u.rate = 1.02;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
const spokenDist = m => m < 1000 ? `${Math.max(50, Math.round(m / 50) * 50)} mét` : `${(m / 1000).toFixed(1).replace('.', ',').replace(',0', '')} ki lô mét`;
const plain = h => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');
const lowerFirst = s => s.charAt(0).toLowerCase() + s.slice(1);
const proj = (ll, o) => [(ll.lng - o.lng) * Math.cos(o.lat * Math.PI / 180) * 111320, (ll.lat - o.lat) * 110540];

function navSetRoute(r) {
  nav.route = r;
  nav.pts = r.geometry.coordinates.map(([lng, lat]) => L.latLng(lat, lng));
  nav.cum = [0];
  for (let i = 1; i < nav.pts.length; i++) nav.cum.push(nav.cum[i - 1] + map.distance(nav.pts[i - 1], nav.pts[i]));
  const k = r.distance / (nav.cum.at(-1) || 1);
  nav.cum = nav.cum.map(v => v * k);
  const steps = r.legs[0].steps;
  nav.stepAt = []; let s = 0;
  steps.forEach(st => { nav.stepAt.push(s); s += st.distance; });
  nav.ann = steps.map(() => ({ far: false, near: false }));
  nav.idx = 0; nav.off = 0;
}
// điểm gần nhất trên tuyến: trả về khoảng cách lệch, quãng đã đi, hướng đoạn đường
function navSnap(ll) {
  const P = nav.pts, lo = Math.max(0, nav.idx - 10), hi = Math.min(P.length - 1, nav.idx + 150);
  if (P.length < 2) return { d: P.length ? map.distance(ll, P[0]) : 0, i: 0, along: 0, brg: 0 };
  let best = { d: Infinity };
  const scan = (a, b) => {
    for (let i = a; i < b; i++) {
      const o = P[i], [bx, by] = proj(P[i + 1], o), [px, py] = proj(ll, o), L2 = bx * bx + by * by;
      const t = L2 ? Math.max(0, Math.min(1, (px * bx + py * by) / L2)) : 0;
      const d = Math.hypot(px - t * bx, py - t * by);
      if (d < best.d) best = { d, i, along: nav.cum[i] + t * (nav.cum[i + 1] - nav.cum[i]), brg: (Math.atan2(bx, by) * 180 / Math.PI + 360) % 360 };
    }
  };
  scan(lo, hi);
  if (best.d > 60) scan(0, P.length - 1);
  nav.idx = best.i;
  return best;
}
function navPos(ll, heading) {
  if (!nav.on || nav.rerouting) return;
  const r = nav.route, s = navSnap(ll), steps = r.legs[0].steps, [far, near, offM] = NAV_TH[rt.mode];
  const hd = heading ?? s.brg;
  setMe(ll, hd);
  if (s.d > offM && !nav.sim) { if (++nav.off >= 3) return navReroute(ll); } else nav.off = 0;
  const left = Math.max(0, r.distance - s.along);
  if (left < 25) return navArrive();
  let n = nav.stepAt.findIndex(a => a > s.along + 3);
  if (n < 0) n = steps.length - 1;
  const toNext = Math.max(0, nav.stepAt[n] - s.along), [icn, txt] = stepText(steps[n]);
  const [dv, du] = fmtDist(toNext);
  $('#navIc').innerHTML = ic(icn);
  $('#navDist').innerHTML = `${dv}<small>${du}</small>`;
  $('#navTxt').innerHTML = txt;
  const then = steps[n + 1];
  // khoảng cách giữa hai lần rẽ liên tiếp = độ dài bước n
  $('#navThen').innerHTML = then && steps[n].distance < 250 ?`<small>Sau đó</small>${ic(stepText(then)[0])}` : '';
  const leftT = r.duration * left / r.distance, [tv, tu] = fmtTime(leftT), [lv, lu] = fmtDist(left);
  const eta = new Date(Date.now() + leftT * 1000);
  $('#navEta').textContent = eta.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  $('#navLeftT').innerHTML = `${tv}<small>${tu}</small>`;
  $('#navLeftD').innerHTML = `${lv}<small>${lu}</small>`;
  const a = nav.ann[n];
  if (a && !a.near && toNext <= near) { a.near = a.far = true; say(plain(txt)); }
  else if (a && !a.far && toNext <= far && toNext > near * 2) { a.far = true; say(`Sau ${spokenDist(toNext)}, ${lowerFirst(plain(txt))}`); }
  if (nav.follow) navCamera(ll, hd);
}
function navCamera(ll, hd) {
  if (is3d) m3.easeTo({ center: [ll.lng, ll.lat], bearing: hd, pitch: 62, zoom: Math.max(m3.getZoom(), 16), duration: 900, easing: t => t });
  else map.setView(ll, Math.max(map.getZoom(), 17), { animate: true, pan: { duration: .8 } });
}
async function navReroute(ll) {
  nav.rerouting = true; nav.off = 0;
  say('Bạn đã đi lệch tuyến. Đang tính lại đường.');
  $('#navTxt').textContent = 'Đang tính lại đường…';
  setEnd('from', ll, 'Vị trí của tôi');
  await findRoute();
  nav.rerouting = false;
  if (rt.routes.length) navSetRoute(rt.routes[rt.sel]);
}
function navArrive() {
  say(`Bạn đã đến ${rt.to?.name && rt.to.name !== fmtLL(rt.to.ll) ? rt.to.name : 'nơi'}.`);
  toast('Đã đến nơi', rt.to?.name || '', { ok: true });
  stopNav(true);
}
async function startNav(sim) {
  const r = rt.routes[rt.sel];
  if (!r) return;
  if (!sim && !navigator.geolocation) return fail(new Error('no-geo'));
  stopNav();
  navSetRoute(r);
  // chạy thử không được ghi đè vị trí thật của người dùng
  Object.assign(nav, { on: true, sim, follow: true, meBefore: sim ? { ll: meLL } : null });
  stage.classList.add('navigating');
  $('#navSim').hidden = !sim;
  $('#navView').classList.remove('on');
  if (window.innerWidth <= 900) window.scrollTo(0, 0);
  try { nav.lock = await navigator.wakeLock?.request('screen'); } catch {}
  const [tv, tu] = fmtTime(r.duration);
  say(`Bắt đầu dẫn đường. Quãng đường ${spokenDist(r.distance)}, khoảng ${tv} ${tu}. ${plain(stepText(r.legs[0].steps[0])[1])}.`);
  nav.ann[0] = { far: true, near: true };
  if (sim) {
    let along = 0, lastTs = performance.now();
    const tick = () => {
      if (!nav.on) return;
      const now = performance.now(); along += SIM_SPEED[rt.mode] * 3 * (now - lastTs) / 1000; lastTs = now;
      const P = nav.pts, C = nav.cum;
      let i = C.findIndex(v => v > along); if (i < 1) i = i === 0 ? 1 : P.length - 1;
      const t = Math.min(1, (along - C[i - 1]) / ((C[i] - C[i - 1]) || 1));
      navPos(L.latLng(P[i - 1].lat + (P[i].lat - P[i - 1].lat) * t, P[i - 1].lng + (P[i].lng - P[i - 1].lng) * t));
      nav.simT = setTimeout(tick, 1000);
    };
    tick();
  } else {
    nav.watch = navigator.geolocation.watchPosition(
      // hướng 0° là hướng Bắc hợp lệ; chỉ tin hướng GPS khi đang di chuyển
      p => navPos(L.latLng(p.coords.latitude, p.coords.longitude), Number.isFinite(p.coords.heading) && (p.coords.speed ?? 1) > .7 ? p.coords.heading : null),
      e => { fail(new Error(e.code === 1 ? 'denied' : 'position unavailable')); if (e.code === 1) stopNav(); },
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 20000 });
    $('#navTxt').innerHTML = 'Đang chờ tín hiệu GPS…';
  }
}
function stopNav(arrived) {
  if (!nav.on) return;
  nav.on = false;
  clearTimeout(nav.simT);
  if (nav.watch != null) navigator.geolocation.clearWatch(nav.watch);
  nav.watch = null;
  if (!arrived && 'speechSynthesis' in window) speechSynthesis.cancel();
  nav.lock?.release?.(); nav.lock = null;
  stage.classList.remove('navigating');
  if (nav.meBefore) {
    const prev = nav.meBefore.ll; nav.meBefore = null;
    if (prev) setMe(prev);
    else if (meMarker) { map.removeLayer(meMarker); meMarker = null; meLL = null; }
  } else if (meMarker) setMe(meMarker.getLatLng());
}
$('#navStop').onclick = () => stopNav();
$('#navMute').onclick = () => {
  nav.mute = !nav.mute;
  if (nav.mute) window.speechSynthesis?.cancel();
  $('#navMute').innerHTML = ic(nav.mute ? 'mute' : 'volume');
  $('#navMute').classList.toggle('on', nav.mute);
};
$('#navView').onclick = () => {
  nav.follow = !nav.follow;
  $('#navView').classList.toggle('on', !nav.follow);
  if (!nav.follow) map.flyToBounds(L.latLngBounds(nav.pts), { padding: [120, 120], duration: 1 });
  else if (meLL) navCamera(meLL, 0);
};
map.on('dragstart', () => { if (nav.on && nav.follow) { nav.follow = false; $('#navView').classList.add('on'); } });

/* ---------- Bản đồ ngoại tuyến ----------
   Tải trước ô bản đồ vector (dùng cho khung 3D) + độ cao địa hình của vùng đang xem
   vào bộ nhớ đệm; trình phục vụ nền (sw.js) trả lại khi mất mạng. */
const OFF_CACHE = 'mv-offline', OFF_MAX = 3000, OFF_VZ = 14, OFF_DZ = 12;
// OpenFreeMap đổi mã phiên bản trong đường dẫn ô mỗi tuần: lưu ô dưới khoá không có phiên bản
// để vùng tải tuần trước vẫn dùng được khi kiểu bản đồ đã trỏ sang phiên bản mới (sw.js dùng cùng quy tắc)
const ofmKey = u => u.replace(/\/planet\/[^/]+\/(\d+\/\d+\/\d+\.pbf)$/, '/planet/_/$1');
const OFM_TILE_KEY = `${OFM}/planet/_/{z}/{x}/{y}.pbf`;
const tileUrl = (tpl, [z, x, y]) => tpl.replace('{z}', z).replace('{x}', x).replace('{y}', y);
let packs = [];
try { packs = JSON.parse(localStorage.getItem('mv.packs') || '[]'); } catch {}
const savePacks = () => { try { localStorage.setItem('mv.packs', JSON.stringify(packs)); } catch {} };
const t2x = (lng, z) => Math.floor((Math.max(-180, Math.min(179.9999, lng)) + 180) / 360 * 2 ** z);
const t2y = (lat, z) => { const r = Math.max(-85.0511, Math.min(85.0511, lat)) * Math.PI / 180; return Math.floor((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2 * 2 ** z); };
function tilesIn(b, maxZ) {
  const out = [];
  for (let z = 0; z <= maxZ; z++) {
    const n = 2 ** z, x0 = Math.max(0, t2x(b.w, z)), x1 = Math.min(n - 1, t2x(b.e, z)), y0 = Math.max(0, t2y(b.n, z)), y1 = Math.min(n - 1, t2y(b.s, z));
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) out.push([z, x, y]);
  }
  return out;
}
const viewBox = () => { const b = map.getBounds(); return { w: b.getWest(), e: b.getEast(), s: b.getSouth(), n: b.getNorth() }; };
const fmtMB = by => by > 1e9 ? (by / 1e9).toFixed(1).replace('.', ',') + ' GB' : Math.max(1, Math.round(by / 1e6)) + ' MB';
function offEstimate() {
  if (tab !== 'offline') return;
  const b = viewBox(), nv = tilesIn(b, OFF_VZ).length, nd = tilesIn(b, OFF_DZ).length, n = nv + nd;
  const ok = n <= OFF_MAX && map.getZoom() >= 9;
  $('#offEst').innerHTML = `<div class="off-num"><b>${n.toLocaleString('vi-VN')}</b><small>ô bản đồ</small></div><div class="off-num"><b>~${fmtMB(nv * 45e3 + nd * 90e3)}</b><small>dung lượng ước tính</small></div>`;
  $('#offGo').disabled = !ok || offBusy;
  $('#offWhy').innerHTML = ok ? 'Tải bản đồ chi tiết tới mức đường phố và độ cao địa hình của vùng đang thấy trên màn hình.' : `${ic('alert', 'c-amber')} Vùng quá rộng — phóng to thêm để chọn vùng nhỏ hơn.`;
}
map.on('moveend', offEstimate);

async function styleAssets(url) {
  const st = await getJSON(url), out = [url];
  const sprites = Array.isArray(st.sprite) ? st.sprite.map(s => s.url) : st.sprite ? [st.sprite] : [];
  sprites.forEach(s => ['', '@2x'].forEach(r => out.push(`${s}${r}.json`, `${s}${r}.png`)));
  const stacks = new Set();
  st.layers.forEach(l => { const f = l.layout?.['text-font']; if (Array.isArray(f) && typeof f[0] === 'string') stacks.add(f.join(',')); });
  if (st.glyphs) stacks.forEach(f => ['0-255', '256-511', '768-1023', '7680-7935', '8192-8447'].forEach(r => out.push(st.glyphs.replace('{fontstack}', f).replace('{range}', r))));
  return out;
}
let offBusy = false, offStop = false;
async function downloadPack() {
  if (offBusy) return;
  offBusy = true; offStop = false;
  const b = viewBox(), c = map.getCenter();
  $('#offGo').disabled = true;
  $('#offProg').classList.add('on');
  const prog = (p, txt) => {
    $('#offRing').style.strokeDashoffset = 2 * Math.PI * 38 * (1 - p);
    $('#offPct').textContent = Math.floor(p * 100) + '%';
    $('#offTxt').textContent = txt;
  };
  prog(0, 'Đang chuẩn bị…');
  try { await navigator.storage?.persist?.(); } catch {}
  let done = 0, bytes = 0, failed = 0;
  try {
    const cache = await caches.open(OFF_CACHE);
    const tj = await getJSON(`${OFM}/planet`);
    // mô tả nguồn ô + kiểu bản đồ luôn lấy bản mới nhất; ô, phông chữ, biểu tượng có rồi thì bỏ qua
    const fresh = new Set([`${OFM}/planet`, `${OFM}/styles/dark`, `${OFM}/styles/liberty`]);
    await cache.put(`${OFM}/planet`, new Response(JSON.stringify(tj), { headers: { 'Content-Type': 'application/json' } }));
    const urls = [...(await styleAssets(`${OFM}/styles/dark`)), ...(await styleAssets(`${OFM}/styles/liberty`))];
    tilesIn(b, OFF_VZ).forEach(t => urls.push(tileUrl(tj.tiles[0], t)));
    tilesIn(b, OFF_DZ).forEach(t => urls.push(tileUrl(DEM.tiles[0], t)));
    const list = [...new Set(urls)];
    let next = 0;
    const worker = async () => {
      while (next < list.length && !offStop) {
        const u = list[next++], key = ofmKey(u);
        try {
          if (fresh.has(u) || !(await cache.match(key))) {
            const r = await fetch(u, { mode: 'cors' });
            if (r.ok) { const blob = await r.blob(); bytes += blob.size; await cache.put(key, new Response(blob, { headers: r.headers })); }
            else if (r.status !== 404) failed++;
          }
        } catch (e) { if (/quota/i.test(e.name + e.message)) { offStop = true; throw new Error('quota'); } failed++; }
        done++;
        if (done % 8 === 0 || done === list.length) prog(done / list.length, `${done.toLocaleString('vi-VN')} / ${list.length.toLocaleString('vi-VN')} ô · ${fmtMB(bytes)}`);
      }
    };
    await Promise.all(Array.from({ length: 6 }, worker));
    if (offStop) { toast('Đã dừng tải', 'Phần đã tải vẫn được giữ lại.'); }
    let name = `Vùng quanh ${c.lat.toFixed(2)}, ${c.lng.toFixed(2)}`;
    try { const r = await reverse(c); if (r) name = r.area || r.name; } catch {}
    const tiles = list.filter(u => u.endsWith('.pbf') || u.includes('elevation-tiles-prod')).length;
    packs.unshift({ id: Date.now().toString(36), name, b, z: map.getZoom(), urls: list.length, tiles, bytes, ts: Date.now(), partial: offStop || failed > 0, v: 2 });
    savePacks(); drawPacks();
    if (!offStop) toast('Đã tải xong vùng bản đồ', failed ? `${name} — thiếu ${failed} ô, có thể tải lại để bù.` : `${name} — ${fmtMB(bytes)}. Mất mạng vẫn xem được.`, { ok: !failed });
  } catch (e) { fail(e); }
  finally {
    offBusy = false;
    $('#offProg').classList.remove('on');
    offEstimate();
  }
}
async function deletePack(id) {
  const p = packs.find(x => x.id === id);
  packs = packs.filter(x => x.id !== id);
  savePacks(); drawPacks();
  // chỉ xoá ô không thuộc vùng nào khác
  try {
    if (!packs.length) { await caches.delete(OFF_CACHE); return; }
    const cache = await caches.open(OFF_CACHE);
    // vùng tải bằng bản cũ lưu ô theo đường dẫn có phiên bản → xoá cả hai kiểu khoá
    const legacy = await cache.match(`${OFM}/planet`).then(r => r?.json()).catch(() => null);
    const tpls = [OFM_TILE_KEY, ...(legacy?.tiles?.[0] ? [legacy.tiles[0]] : [])];
    const tileUrls = (pk, fn) => { tilesIn(pk.b, OFF_VZ).forEach(t => tpls.forEach(tp => fn(tileUrl(tp, t)))); tilesIn(pk.b, OFF_DZ).forEach(t => fn(tileUrl(DEM.tiles[0], t))); };
    const keep = new Set();
    packs.forEach(pk => tileUrls(pk, u => keep.add(u)));
    const del = [];
    tileUrls(p, u => keep.has(u) || del.push(cache.delete(u)));
    await Promise.all(del);
  } catch {}
  storageInfo();
}
function drawPacks() {
  const el = $('#offList');
  if (!packs.length) { el.innerHTML = `<div class="pins-empty"><div class="big">00</div>Chưa tải vùng nào.<br>Kéo bản đồ tới nơi bạn sắp đến rồi bấm <b>Tải vùng này</b>.</div>`; storageInfo(); return; }
  el.innerHTML = packs.map((p, i) => `<div class="pin" data-id="${p.id}" style="animation-delay:${i * 30}ms"><span class="rk">${i + 1}</span>
    <div class="pt"><b>${esc(p.name)}</b><small>${new Date(p.ts).toLocaleDateString('vi-VN')} · ${p.tiles.toLocaleString('vi-VN')} ô · ${fmtMB(p.bytes)}${p.partial ? ' · chưa đủ' : ''}</small></div>
    <button class="cl-icon-btn" data-a="view" title="Xem vùng">${ic('eye')}</button>
    <button class="cl-icon-btn" data-a="del" title="Xoá vùng">${ic('trash')}</button></div>`).join('');
  el.querySelectorAll('.pin').forEach(row => row.onclick = e => {
    const p = packs.find(x => x.id === row.dataset.id), a = e.target.closest('button')?.dataset.a;
    if (a === 'del') return deletePack(p.id);
    map.flyToBounds([[p.b.s, p.b.w], [p.b.n, p.b.e]], { duration: 1.2 });
  });
  storageInfo();
}
async function storageInfo() {
  try {
    const { usage, quota } = await navigator.storage.estimate();
    $('#offStore').innerHTML = `<div class="cl-label"><span>${ic('box', 'c-amber')}Bộ nhớ đã dùng</span><output>${fmtMB(usage)} / ${fmtMB(quota)}</output></div><div class="cl-meter off-meter"><i style="width:${Math.max(1, usage / quota * 100)}%"></i></div>`;
  } catch {}
}
$('#offGo').onclick = downloadPack;
$('#offCancel').onclick = () => { offStop = true; };

// mất mạng: dùng bản đồ vector đã tải (chạy trong khung 3D)
async function goOffline() {
  if (!packs.length) return toast('Mất kết nối mạng', 'Chỉ xem được phần bản đồ đã mở trước đó. Lần sau hãy tải trước vùng ở mục Ngoại tuyến.');
  toast('Đang ngoại tuyến', 'Đã chuyển sang bản đồ đã tải. Tìm kiếm, chỉ đường, thời tiết cần mạng.');
  if (curLayer === 'sat' || curLayer === 'topo') setLayer('dark');
  if (!is3d) await toggle3d();
}
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(e => console.warn(e));

/* ---------- Cảnh báo lũ ----------
   Gộp 3 nguồn nguy cơ cho một điểm:
   1. Lũ sông: lưu lượng dự báo 30 ngày so với ngưỡng lũ 2/5/20 năm (ước từ đỉnh lũ hằng năm 1995–2024).
   2. Mưa lớn: lượng mưa 24h/72h tới theo cấp mưa to/rất to, cộng thêm khi đất đã ngấm no nước.
   3. Lũ quét & sạt lở: địa hình dốc (chênh cao trong ~1 km) gặp mưa lớn — kiểu thảm hoạ vùng núi. */
const FLOOD_API = 'https://flood-api.open-meteo.com/v1/flood';
const LEVELS = [
  { name: 'AN TOÀN', cls: 'neon', color: '#00E054', head: 'Chưa thấy dấu hiệu lũ' },
  { name: 'THEO DÕI', cls: 'amber', color: '#fbbf24', head: 'Cần theo dõi thêm' },
  { name: 'CẢNH BÁO', cls: 'orange', color: '#fb923c', head: 'Có nguy cơ lũ' },
  { name: 'NGUY HIỂM', cls: 'red', color: '#ef4444', head: 'Nguy cơ lũ cao' },
];
const ADVICE = {
  river: ['Theo dõi mực nước sông và thông báo của chính quyền địa phương.', 'Kê cao hoặc chuyển đồ đạc, giấy tờ quan trọng lên tầng cao.', 'Không đi qua cầu tràn, ngầm, đường ngập — nước chảy xiết 30 cm đủ cuốn trôi xe máy.'],
  rain: ['Hạn chế ra đường khi mưa to, tránh khu vực trũng và hầm chui.', 'Khơi thông cống rãnh quanh nhà, chuẩn bị đèn pin, sạc dự phòng.'],
  flash: ['Tránh xa sườn đồi dốc, taluy, khe suối — lũ quét ập đến chỉ trong vài phút.', 'Nghe tiếng động lạ (ầm ầm, cây đổ), thấy nước suối đục và dâng nhanh: rời đi ngay lên chỗ cao.', 'Không dựng lều, cắm trại gần lòng suối khi mưa lớn.'],
  safe: ['Mọi chỉ số đều thấp. Vẫn nên xem lại trước chuyến đi vào vùng núi.'],
};
const fl = { ll: null, mk: null, ctl: null, res: null, radar: null, radarFrames: [], radarI: 0, radarT: 0, grid: L.layerGroup().addTo(map), events: L.layerGroup().addTo(map), watchT: 0 };

const ddmm = s => `${s.slice(8, 10)}/${s.slice(5, 7)}`;
const nf = (v, d = 0) => v.toLocaleString('vi-VN', { maximumFractionDigits: d });
const todayISO = () => { const d = new Date(); return new Date(d - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); };

// ngưỡng lũ theo chu kỳ lặp lại (phân bố Gumbel trên đỉnh lũ hằng năm), giữ lại để khỏi tải lại
function gumbel(time, all) {
  const byYear = {};
  time.forEach((t, i) => { const y = t.slice(0, 4), v = all[i]; if (v != null && (byYear[y] == null || v > byYear[y])) byYear[y] = v; });
  const mx = Object.values(byYear), n = mx.length, mean = mx.reduce((a, b) => a + b, 0) / n;
  const sd = Math.sqrt(mx.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1));
  const a = sd * Math.sqrt(6) / Math.PI, u = mean - .5772 * a, q = T => u - a * Math.log(-Math.log(1 - 1 / T));
  const valid = all.filter(v => v != null), avg = valid.reduce((s, v) => s + v, 0) / valid.length;
  const out = { q2: q(2), q5: q(5), q20: q(20), avg, record: Math.max(...mx), years: n };
  // quá ít năm số liệu thì ngưỡng vô nghĩa (NaN lưu thành null rồi bị so như 0 → báo động giả)
  return n >= 5 && [out.q2, out.q5, out.q20, avg].every(Number.isFinite) && out.q2 > 0 ? out : { bad: true, years: n };
}
const thOk = th => th && !th.bad && Number.isFinite(th.q2) && Number.isFinite(th.q20);
const thKey = (lat, lng) => `mv.q.${lat.toFixed(3)},${lng.toFixed(3)}`;
const thGet = (lat, lng) => { try { return JSON.parse(localStorage.getItem(thKey(lat, lng))); } catch { return null; } };
const thPut = (lat, lng, v) => { try { localStorage.setItem(thKey(lat, lng), JSON.stringify(v)); } catch {} };
const HIST = 'daily=river_discharge&start_date=1995-01-01&end_date=2024-12-31';
async function floodThresholds(lat, lng) {
  const c = thGet(lat, lng); if (c) return c;
  const d = await getJSON(`${FLOOD_API}?latitude=${lat}&longitude=${lng}&${HIST}`, { timeout: 25000 });
  const out = gumbel(d.daily.time, d.daily.river_discharge);
  thPut(lat, lng, out);
  return out;
}
// mức sông: so đỉnh lũ dự báo với ngưỡng 2/5/20 năm
const riverLevel = (peak, worst, th) => !thOk(th) ? 0 : peak >=th.q20 ? 3 : peak >= th.q5 ? 2 : peak >= th.q2 ? 1 : worst >= th.q5 ? 1 : 0;
// mức mưa: ngưỡng mưa lớn 24 giờ / 3 ngày, đất đã no nước thì nâng một cấp
function rainLevel(time, precip) {
  const now = Date.now(), iNow = Math.max(0, time.findIndex(t => new Date(t).getTime() > now) - 1);
  const p = precip.map(v => v || 0), sum = (a, b) => p.slice(Math.max(0, a), b).reduce((s, v) => s + v, 0);
  let r24 = 0;
  for (let i = iNow; i < iNow + 48; i++) r24 = Math.max(r24, sum(i, i + 24));
  const r72 = sum(iNow, iNow + 72), past72 = sum(iNow - 72, iNow), max1h = Math.max(0, ...p.slice(iNow, iNow + 72));
  let lvl = r24 >= 100 || r72 >= 200 ? 3 : r24 >= 50 || r72 >= 100 ? 2 : r24 >= 25 || r72 >= 50 ? 1 : 0;
  const soaked = past72 >= 80;
  if (soaked && lvl >= 1 && lvl < 3) lvl++;
  return { lvl, r24, r72, past72, max1h, soaked };
}
async function floodRiver(ll) {
  // xét 9 ô quanh điểm, lấy ô có dòng chảy lớn nhất = con sông chính gần đó
  const off = [-.05, 0, .05], pts = off.flatMap(dy => off.map(dx => [ll.lat + dy, ll.lng + dx]));
  const d = await getJSON(`${FLOOD_API}?latitude=${pts.map(p => p[0].toFixed(3)).join(',')}&longitude=${pts.map(p => p[1].toFixed(3)).join(',')}&daily=river_discharge,river_discharge_max&past_days=30&forecast_days=30`);
  const arr = Array.isArray(d) ? d : [d];
  const mean = r => { const v = r.daily.river_discharge.filter(x => x != null); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0; };
  const best = arr.reduce((b, r) => mean(r) > mean(b) ? r : b, arr[0]);
  if (mean(best) < 3) return null; // không có sông đáng kể quanh đây
  const th = await floodThresholds(best.latitude, best.longitude);
  if (!thOk(th)) return null; // không đủ số liệu lịch sử để biết thế nào là lũ
  const today = todayISO(), t = best.daily.time, q = best.daily.river_discharge, qmax = best.daily.river_discharge_max;
  const i0 = Math.max(0, t.indexOf(today)), fut = [];
  for (let i = i0; i < Math.min(t.length, i0 + 10); i++) fut.push(i);
  const peakI = fut.reduce((b, i) => (q[i] ?? 0) > (q[b] ?? 0) ? i : b, fut[0]);
  const worst = Math.max(...fut.map(i => qmax?.[i] ?? q[i] ?? 0));
  const peak = q[peakI] ?? 0;
  const lvl = riverLevel(peak, worst, th);
  const rp = peak >= th.q20 ? 'trên mức lũ 20 năm' : peak >= th.q5 ? 'trên mức lũ 5 năm' : peak >= th.q2 ? 'trên mức lũ 2 năm' : 'dưới mức lũ';
  return { lvl, t, q, i0, th, peak, peakDay: t[peakI], worst, rp, ratio: peak / th.avg, dist: map.distance(ll, L.latLng(best.latitude, best.longitude)), now: q[i0] };
}
async function floodRain(ll) {
  const d = await getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${ll.lat.toFixed(3)}&longitude=${ll.lng.toFixed(3)}&hourly=precipitation&daily=precipitation_sum&past_days=7&forecast_days=7&timezone=auto`);
  const utc = d.hourly.time.map(t => new Date(Date.parse(t + 'Z') - (d.utc_offset_seconds || 0) * 1000).toISOString());
  const { lvl, r24, r72, past72, max1h, soaked } = rainLevel(utc, d.hourly.precipitation);
  return { lvl, r24, r72, past72, max1h, soaked, days: d.daily.time, daily: d.daily.precipitation_sum.map(v => v || 0), elev: d.elevation };
}
async function floodTerrain(ll) {
  const s = .009, off = [-s, 0, s], pts = off.flatMap(dy => off.map(dx => [ll.lat + dy, ll.lng + dx]));
  const d = await getJSON(`https://api.open-meteo.com/v1/elevation?latitude=${pts.map(p => p[0].toFixed(4)).join(',')}&longitude=${pts.map(p => p[1].toFixed(4)).join(',')}`);
  const e = d.elevation, relief = Math.max(...e) - Math.min(...e);
  return { relief, elev: e[4], slope: Math.atan(relief / 1000) * 180 / Math.PI, steep: relief >= 250 };
}

async function floodCheck(ll, { quiet = false } = {}) {
  const [river, rain, terr] = await Promise.allSettled([floodRiver(ll), floodRain(ll), floodTerrain(ll)]).then(r => r.map(x => x.status === 'fulfilled' ? x.value : (quiet || console.warn(x.reason), undefined)));
  if (rain === undefined && river === undefined) throw new Error('flood-data');
  const flash = terr?.steep && rain ? (rain.lvl >= 2 ? 3 : rain.lvl >= 1 ? 2 : 0) : 0;
  const parts = [['river', river?.lvl ?? 0], ['rain', rain?.lvl ?? 0], ['flash', flash]];
  const lvl = Math.max(...parts.map(p => p[1]));
  const main = lvl ? parts.reduce((b, p) => p[1] > b[1] ? p : b)[0] : 'safe';
  return { ll, lvl, main, river, rain, terr, flash, at: Date.now() };
}

async function floodAnalyze(ll, name) {
  setTab('flood');
  fl.ll = ll; fl.ctl?.abort(); fl.ctl = new AbortController();
  if (fl.mk) map.removeLayer(fl.mk);
  fl.mk = L.marker(ll, { icon: L.divIcon({ className: 'mk', html: `<div class="fl-mk">${ic('waves')}</div>`, iconSize: [34, 34], iconAnchor: [17, 17] }), zIndexOffset: 800 }).addTo(map);
  $('#flResult').innerHTML = `<div class="rt-loading fl-loading"><div class="cl-scan"></div><div class="cl-grid-overlay"></div><span><span class="cl-spinner"></span> Đang phân tích sông, mưa và địa hình…</span></div>`;
  const my = fl.ctl;
  try {
    const res = await floodCheck(ll);
    if (my !== fl.ctl) return;
    res.name = name;
    fl.res = res;
    floodRender(res);
    if (fl.mk) fl.mk.getElement()?.querySelector('.fl-mk')?.style.setProperty('--c', LEVELS[res.lvl].color);
    stage.classList.toggle('alarm', res.lvl === 3);
    if (res.lvl === 3) say(`Cảnh báo nguy hiểm. ${floodHeadline(res)}. ${ADVICE[res.main][0]}`);
  } catch (e) { if (my === fl.ctl) { $('#flResult').innerHTML = ''; fail(e); } }
}
function floodHeadline(r) {
  if (!r.lvl) return LEVELS[0].head;
  return { river: 'Nguy cơ lũ sông dâng cao', rain: 'Mưa lớn, nguy cơ ngập úng', flash: 'Nguy cơ lũ quét và sạt lở đất' }[r.main];
}

/* biểu đồ SVG nhỏ, vẽ tay cho khỏi phụ thuộc thư viện */
function riverChart(rv) {
  const W = 340, H = 130, P = 6, n = rv.t.length, vals = rv.q.map(v => v ?? 0);
  const top = Math.max(...vals, rv.th.q20 * 1.08, rv.worst), x = i => P + i / (n - 1) * (W - 2 * P), y = v => H - 18 - v / top * (H - 30);
  const line = (a, b) => vals.slice(a, b).map((v, k) => `${k ? 'L' : 'M'}${x(a + k).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const area = `${line(rv.i0, n)}L${x(n - 1)},${H - 18}L${x(rv.i0)},${H - 18}Z`;
  const thr = [['q2', '#fbbf24', 'Lũ 2 năm'], ['q5', '#fb923c', 'Lũ 5 năm'], ['q20', '#ef4444', 'Lũ 20 năm']]
    .map(([k, c, l]) => `<line x1="${P}" x2="${W - P}" y1="${y(rv.th[k])}" y2="${y(rv.th[k])}" stroke="${c}" stroke-dasharray="4 4" stroke-width="1" opacity=".75"/><text x="${W - P}" y="${y(rv.th[k]) - 3}" text-anchor="end" fill="${c}">${l}</text>`).join('');
  return `<svg class="fl-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    <defs><linearGradient id="flg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ef4444" stop-opacity=".45"/><stop offset="1" stop-color="#ef4444" stop-opacity="0"/></linearGradient></defs>
    ${thr}
    <path d="${area}" fill="url(#flg)"/>
    <path d="${line(0, rv.i0 + 1)}" fill="none" stroke="#71717a" stroke-width="2"/>
    <path d="${line(rv.i0, n)}" fill="none" stroke="#f87171" stroke-width="2.4" style="filter:drop-shadow(0 0 4px rgba(239,68,68,.8))"/>
    <line x1="${x(rv.i0)}" x2="${x(rv.i0)}" y1="8" y2="${H - 18}" stroke="#fff" stroke-opacity=".35"/>
    <text x="${x(rv.i0)}" y="${H - 5}" text-anchor="middle" fill="#fff">Hôm nay</text>
    <text x="${P}" y="${H - 5}" fill="#8b8b93">${ddmm(rv.t[0])}</text><text x="${W - P}" y="${H - 5}" text-anchor="end" fill="#8b8b93">${ddmm(rv.t[n - 1])}</text>
  </svg>`;
}
function rainChart(rn) {
  const W = 340, H = 110, n = rn.daily.length, bw = (W - 12) / n, top = Math.max(60, ...rn.daily), today = todayISO();
  const col = v => v >= 100 ? '#ef4444' : v >= 50 ? '#fb923c' : v >= 16 ? '#fbbf24' : v >= 1 ? '#60a5fa' : '#3f3f46';
  return `<svg class="fl-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">
    ${[50, 100].filter(v => v < top).map(v => `<line x1="6" x2="${W - 6}" y1="${H - 18 - v / top * (H - 34)}" y2="${H - 18 - v / top * (H - 34)}" stroke="#fff" stroke-opacity=".1" stroke-dasharray="3 4"/><text x="${W - 6}" y="${H - 21 - v / top * (H - 34)}" text-anchor="end" fill="#8b8b93">${v} mm</text>`).join('')}
    ${rn.daily.map((v, i) => { const h = Math.max(1.5, v / top * (H - 34)), isT = rn.days[i] === today, fut = rn.days[i] >= today;
      return `<rect x="${6 + i * bw + 2}" y="${H - 18 - h}" width="${bw - 4}" height="${h}" rx="2" fill="${col(v)}" opacity="${fut ? 1 : .45}" ${isT ? 'stroke="#fff" stroke-width="1.2"' : ''}/>${v >= 10 ? `<text x="${6 + i * bw + bw / 2}" y="${H - 22 - h}" text-anchor="middle" fill="#d4d4d8">${Math.round(v)}</text>` : ''}`; }).join('')}
    <text x="6" y="${H - 5}" fill="#8b8b93">7 ngày qua</text><text x="${W - 6}" y="${H - 5}" text-anchor="end" fill="#8b8b93">7 ngày tới</text>
  </svg>`;
}

function floodRender(r) {
  const L0 = LEVELS[r.lvl], rv = r.river, rn = r.rain, tr = r.terr;
  const why = [];
  if (rv) why.push([rv.lvl, 'waves', `Sông gần nhất: đỉnh <b>${nf(rv.peak)} m³/s</b> ngày ${ddmm(rv.peakDay)} — ${rv.rp}${rv.ratio > 1.5 ? `, gấp ${nf(rv.ratio, 1)} lần bình thường` : ''}.`]);
  else if (rv === null) why.push([0, 'waves', 'Không có sông lớn trong vòng ~5 km.']);
  if (rn) why.push([rn.lvl, 'rain', `Mưa 24 giờ lớn nhất sắp tới <b>${nf(rn.r24)} mm</b>, 3 ngày tới <b>${nf(rn.r72)} mm</b>${rn.soaked ? ` — đất đã ngấm ${nf(rn.past72)} mm trong 3 ngày qua` : ''}.`]);
  if (tr) why.push([r.flash, 'mountain', tr.steep ? `Địa hình dốc: chênh cao <b>${nf(tr.relief)} m</b> trong 1 km${r.flash ? ', dễ xảy ra lũ quét, sạt lở khi mưa lớn' : ''}.` : `Địa hình thoải (chênh cao ${nf(tr.relief)} m), ít nguy cơ lũ quét.`]);
  why.sort((a, b) => b[0] - a[0]);
  const advice = r.lvl ? [...new Set([...ADVICE[r.main], ...(r.flash >= 2 && r.main !== 'flash' ? ADVICE.flash.slice(0, 1) : [])])] : ADVICE.safe;
  $('#flResult').innerHTML = `
    <div class="fl-card lv${r.lvl} cl-enter">
      <em class="fl-big">${r.lvl}</em>
      <div class="fl-meta"><span class="cl-tag ${L0.cls}">${L0.name}</span><span class="cl-hint">Cấp ${r.lvl}/3 · ${new Date(r.at).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span></div>
      <h3>${floodHeadline(r)}</h3>
      <div class="fl-where">${ic('pin')}${esc(r.name || fmtLL(r.ll))}${tr ? ` · cao ${nf(tr.elev)} m` : ''}</div>
      <div class="fl-meters">
        ${['river', 'rain', 'flash'].map((k, i) => { const v = [rv?.lvl ?? 0, rn?.lvl ?? 0, r.flash][i]; return `<div class="fl-m"><span>${['Lũ sông', 'Mưa lớn', 'Lũ quét · sạt lở'][i]}</span><i class="b${v}"><b style="width:${(v + 1) * 25}%"></b></i></div>`; }).join('')}
      </div>
    </div>
    <ul class="fl-why">${why.map(([l, i, t]) => `<li class="b${l}">${ic(i)}<span>${t}</span></li>`).join('')}</ul>
    ${rv ? `<div class="cl-box fl-box"><div class="cl-label"><span>${ic('waves', 'c-red')}Lưu lượng sông 60 ngày</span><output>${nf(rv.now ?? 0)} m³/s</output></div>${riverChart(rv)}<div class="cl-hint">Đường đỏ: dự báo. Vạch đứt: mức lũ từng xảy ra trung bình 2, 5, 20 năm một lần (theo ${rv.th.years} năm số liệu).</div></div>` : ''}
    ${rn ? `<div class="cl-box fl-box"><div class="cl-label"><span>${ic('rain', 'c-blue')}Lượng mưa theo ngày</span><output>${nf(rn.r72)} mm / 3 ngày</output></div>${rainChart(rn)}</div>` : ''}
    <div class="fl-advice cl-box"><div class="cl-label"><span>${ic('alert', 'c-amber')}Nên làm gì</span></div><ol>${advice.map(a => `<li>${a}</li>`).join('')}</ol></div>
    <div class="cl-hint fl-note">Thông tin tham khảo từ mô hình dự báo toàn cầu (độ phân giải ~5 km), có thể chưa sát với suối nhỏ hoặc hồ đập xả lũ. Luôn làm theo cảnh báo chính thức của cơ quan khí tượng thuỷ văn và chính quyền địa phương.</div>`;
}

/* ---- Radar mưa trực tiếp (động) ---- */
async function radarOn(on) {
  clearInterval(fl.radarT);
  fl.radarFrames.forEach(l => map.removeLayer(l)); fl.radarFrames = [];
  $('#flRadarTime').textContent = '';
  const my = fl.radarTok = {}; // bật/tắt liên tục: chỉ lượt cuối được vẽ
  if (!on) return;
  try {
    const d = await getJSON('https://api.rainviewer.com/public/weather-maps.json');
    if (my !== fl.radarTok) return;
    const frames = [...d.radar.past, ...(d.radar.nowcast || [])];
    fl.radarFrames = frames.map(f => L.tileLayer(`${d.host}${f.path}/256/{z}/{x}/{y}/2/1_1.png`, { opacity: 0, maxNativeZoom: 7, maxZoom: 19, zIndex: 300, crossOrigin: 'anonymous', className: 'tl-radar' }).addTo(map));
    fl.radarI = frames.length - 1 - (d.radar.nowcast?.length || 0);
    const show = () => {
      fl.radarFrames.forEach((l, i) => l.setOpacity(i === fl.radarI ? .72 : 0));
      const f = frames[fl.radarI], fut = f.time * 1000 > Date.now();
      $('#flRadarTime').innerHTML = `${new Date(f.time * 1000).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}${fut ? ' <em>dự báo</em>' : ''}`;
    };
    show();
    fl.radarT = setInterval(() => { fl.radarI = (fl.radarI + 1) % frames.length; show(); }, 700);
  } catch (e) { if (my === fl.radarTok) { $('#flRadar').checked = false; fail(e); } }
}

/* ---- Bản đồ mưa 3 ngày tới (lưới ô màu trên vùng đang xem) ---- */
async function rainGrid(on) {
  fl.grid.clearLayers();
  if (!on) return;
  const b = map.getBounds(), NX = 7, NY = 5, dx = (b.getEast() - b.getWest()) / NX, dy = (b.getNorth() - b.getSouth()) / NY, pts = [];
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) pts.push([b.getSouth() + (j + .5) * dy, b.getWest() + (i + .5) * dx, i, j]);
  try {
    const d = await getJSON(`https://api.open-meteo.com/v1/forecast?latitude=${pts.map(p => p[0].toFixed(3)).join(',')}&longitude=${pts.map(p => p[1].toFixed(3)).join(',')}&daily=precipitation_sum&forecast_days=3&timezone=auto`);
    const arr = Array.isArray(d) ? d : [d];
    if (!$('#flGrid').checked) return;
    fl.grid.clearLayers();
    arr.forEach((r, k) => {
      const mm = r.daily.precipitation_sum.reduce((s, v) => s + (v || 0), 0), [la, lo] = pts[k];
      const c = mm >= 200 ? '#ef4444' : mm >= 100 ? '#fb923c' : mm >= 50 ? '#fbbf24' : mm >= 15 ? '#60a5fa' : null;
      const rect = L.rectangle([[la - dy / 2, lo - dx / 2], [la + dy / 2, lo + dx / 2]], { color: c || '#ffffff', weight: .5, opacity: c ? .5 : .08, fillColor: c || '#000', fillOpacity: c ? .28 : 0, interactive: false });
      fl.grid.addLayer(rect);
      if (mm >= 15) fl.grid.addLayer(L.marker([la, lo], { interactive: false, icon: L.divIcon({ className: 'fl-mm', html: `<b>${Math.round(mm)}</b><small>mm</small>`, iconSize: [60, 30], iconAnchor: [30, 15] }) }));
    });
  } catch (e) { $('#flGrid').checked = false; fail(e); }
}
map.on('moveend', () => { if ($('#flGrid').checked) { clearTimeout(fl.gridT); fl.gridT = setTimeout(() => rainGrid(true), 600); } });

/* ---- Bản đồ nguy cơ cả vùng: chia lưới, mỗi ô xét mưa + sông + địa hình như phân tích một điểm ---- */
const rg = { layer: L.layerGroup().addTo(map), ctl: null, cells: [] };
const RG_STEPS = [.05, .1, .2, .25, .5, 1, 2];
const RG_HINT = '<span class="cl-hint">Chia vùng đang xem thành ô lưới, tô màu từng ô theo cấp nguy cơ. Bấm vào ô để xem chi tiết.</span>';
const chunk = (a, n) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, i * n + n));
const multi = d => Array.isArray(d) ? d : [d];
const llList = (pts, k) => pts.map(p => p[k].toFixed(4)).join(',');
// gửi theo lô; lô nào lỗi thì các điểm của lô đó là null
async function batched(pts, size, url, opt) {
  const res = await Promise.allSettled(chunk(pts, size).map(g => getJSON(url(g), opt)));
  return res.flatMap((r, gi) => r.status === 'fulfilled' ? multi(r.value) : Array(Math.min(size, pts.length - gi * size)).fill(null));
}
async function regionScan() {
  rg.ctl?.abort(); const ctl = rg.ctl = new AbortController(), signal = ctl.signal;
  const b = map.getBounds().pad(-.02), W = b.getEast() - b.getWest(), H = b.getNorth() - b.getSouth();
  // ô bám theo lưới cố định để lần quét sau dùng lại được mức lũ sông đã lưu
  const step = RG_STEPS.find(st => (W / st) * (H / st) <= 64);
  if (!step) { rg.ctl = null; return toast('Vùng quá rộng', 'Phóng to tới cỡ một quốc gia hoặc vài tỉnh rồi quét lại.'); }
  const x0 = Math.floor(b.getWest() / step) * step, y0 = Math.floor(b.getSouth() / step) * step, cells = [];
  for (let y = y0; y < b.getNorth(); y += step) for (let x = x0; x < b.getEast(); x += step) cells.push({ s: y, w: x, n: y + step, e: x + step, c: L.latLng(y + step / 2, x + step / 2) });
  rg.cells = cells; rg.step = step; rg.missing = 0;
  $('#rgGo').disabled = true; $('#rgClear').hidden = false;
  $('#rgResult').innerHTML = `<div class="rt-loading"><div class="cl-scan"></div><span><span class="cl-spinner"></span> Đang quét ${cells.length} ô: mưa, sông và địa hình…</span></div>`;
  rg.layer.clearLayers();
  cells.forEach(c => L.rectangle([[c.s, c.w], [c.n, c.e]], { color: '#fff', weight: .5, opacity: .15, fillOpacity: 0, className: 'rg-scan', interactive: false }).addTo(rg.layer));
  try {
    const centers = cells.map(c => [c.c.lat, c.c.lng]);
    const o = .009, terrPts = centers.flatMap(([la, lo]) => [[0, 0], [o, 0], [-o, 0], [0, o], [0, -o]].map(([dy, dx]) => [la + dy, lo + dx]));
    const q = step / 4, rivPts = centers.flatMap(([la, lo]) => [[0, 0], [q, q], [q, -q], [-q, q], [-q, -q]].map(([dy, dx]) => [la + dy, lo + dx]));
    const [rain, elev, riv] = await Promise.all([
      // mưa theo giờ: 3 ngày qua + 3 ngày tới
      batched(centers, 60, g => `https://api.open-meteo.com/v1/forecast?latitude=${llList(g, 0)}&longitude=${llList(g, 1)}&hourly=precipitation&past_days=3&forecast_days=4&timezone=GMT`, { signal, timeout: 25000 }),
      // chênh cao trong khoảng 1 km quanh tâm ô
      batched(terrPts, 100, g => `https://api.open-meteo.com/v1/elevation?latitude=${llList(g, 0)}&longitude=${llList(g, 1)}`, { signal }).then(a => a.flatMap(d => d ? d.elevation : [null])),
      // 5 điểm mỗi ô, điểm có dòng chảy lớn nhất = sông chính trong ô
      batched(rivPts, 100, g => `${FLOOD_API}?latitude=${llList(g, 0)}&longitude=${llList(g, 1)}&daily=river_discharge,river_discharge_max&forecast_days=10`, { signal, timeout: 25000 }),
    ]);
    if (signal.aborted) return;
    if (rain.every(x => !x) && riv.every(x => !x)) throw new Error('flood-data');
    const mean = d => { const v = d.daily.river_discharge.filter(x => x != null); return v.length ? v.reduce((a, x) => a + x, 0) / v.length : 0; };
    cells.forEach((c, i) => {
      const r = rain[i];
      c.rain = r ? rainLevel(r.hourly.time.map(t => t + 'Z'), r.hourly.precipitation) : null;
      const e = elev.slice(i * 5, i * 5 + 5).filter(v => v != null);
      c.relief = e.length ? Math.max(...e) - Math.min(...e) : 0;
      c.sea = e.length > 0 && e.every(v => v <= 0);
      c.flash = c.relief >= 250 && c.rain ? (c.rain.lvl >= 2 ? 3 : c.rain.lvl >= 1 ? 2 : 0) : 0;
      const rs = riv.slice(i * 5, i * 5 + 5).filter(Boolean);
      const best = rs.length ? rs.reduce((a, x) => mean(x) > mean(a) ? x : a) : null;
      c.river = best && mean(best) >= 20 ? { d: best, lat: best.latitude, lng: best.longitude, lvl: 0 } : null;
    });
    rg.cells = cells.filter(c => !c.sea);
    regionLevels(); regionDraw(false);
    // mức lũ của từng con sông: lấy từ bộ nhớ, thiếu thì tải 30 năm số liệu.
    // Số liệu này nặng nên máy chủ giới hạn: tải từng lô nhỏ, ưu tiên ô đang mưa hoặc sông đang lên, bị chặn thì chờ rồi thử lại
    const rising = c => { const q = c.river.d.daily.river_discharge.filter(v => v != null); return q.length ? Math.max(...q) / Math.max(1, q[0]) : 1; };
    const need = rg.cells.filter(c => c.river && !thGet(c.river.lat, c.river.lng))
      .sort((a, b) => (b.rain?.lvl ?? 0) - (a.rain?.lvl ?? 0) || rising(b) - rising(a));
    let done = 0, wait = 0;
    while (done < need.length && !signal.aborted && wait < 4) {
      const g = need.slice(done, done + 3), sub = $('#rgSub');
      if (sub) sub.innerHTML = `<span class="cl-spinner"></span> Đang bổ sung mức lũ sông ${done}/${need.length}…`;
      try {
        const d = multi(await getJSON(`${FLOOD_API}?latitude=${g.map(c => c.river.lat).join(',')}&longitude=${g.map(c => c.river.lng).join(',')}&${HIST}`, { signal, timeout: 40000 }));
        d.forEach((x, j) => thPut(g[j].river.lat, g[j].river.lng, gumbel(x.daily.time, x.daily.river_discharge)));
        done += g.length; wait = 0;
        regionLevels(); regionDraw(false, done, need.length);
      } catch (e) {
        if (signal.aborted) return;
        if (!/429/.test(e.message)) { console.warn(e); done += g.length; continue; }
        wait++;
        if (sub) sub.innerHTML = `<span class="cl-spinner"></span> Máy chủ dữ liệu sông đang bận, chờ một chút rồi tải tiếp (${done}/${need.length})…`;
        await new Promise(r => setTimeout(r, 15000 * wait));
      }
    }
    if (signal.aborted) return;
    rg.missing = need.length - done;
    regionLevels(); regionDraw(true);
  } catch (e) {
    if (e.name === 'AbortError' || signal.aborted) return;
    rg.layer.clearLayers(); $('#rgResult').innerHTML = RG_HINT; $('#rgClear').hidden = true;
    fail(e);
  } finally { if (rg.ctl === ctl) $('#rgGo').disabled = false; }
}
function regionLevels() {
  rg.cells.forEach(c => {
    const th = c.river && thGet(c.river.lat, c.river.lng);
    if (thOk(th)) {
      const qd = c.river.d.daily.river_discharge, qm = c.river.d.daily.river_discharge_max || [];
      const peak = Math.max(0, ...qd.map(v => v ?? 0)), worst = Math.max(peak, ...qm.map(v => v ?? 0));
      Object.assign(c.river, { th, peak, lvl: riverLevel(peak, worst, th) });
    }
    const parts = [['river', c.river?.lvl ?? 0], ['rain', c.rain?.lvl ?? 0], ['flash', c.flash]];
    c.lvl = Math.max(...parts.map(p => p[1]));
    c.main = c.lvl ? parts.reduce((a, p) => p[1] > a[1] ? p : a)[0] : null;
  });
}
const CAUSE = { river: ['waves', 'Lũ sông'], rain: ['rain', 'Mưa lớn'], flash: ['mountain', 'Lũ quét, sạt lở'] };
const cellTarget = c => c.main === 'river' && c.river ? L.latLng(c.river.lat, c.river.lng) : c.c;
function regionDraw(done, got, total) {
  rg.layer.clearLayers();
  const cells = rg.cells;
  cells.forEach(c => {
    const lv = LEVELS[c.lvl];
    const why = [c.rain && `Mưa: ${nf(c.rain.r24)} mm/24 giờ, ${nf(c.rain.r72)} mm/3 ngày${c.rain.soaked ? ' (đất đã no nước)' : ''}`,
      c.river?.th && `Sông: đỉnh ${nf(c.river.peak)} m³/s, mức lũ 2 năm ${nf(c.river.th.q2)} m³/s`,
      c.relief >= 250 && `Địa hình dốc: chênh cao ${nf(c.relief)} m trong 1 km`].filter(Boolean);
    const rect = L.rectangle([[c.s, c.w], [c.n, c.e]], { color: c.lvl ? lv.color : '#00E054', weight: c.lvl ? 1 : .5, opacity: c.lvl ? .7 : .2,
      fillColor: lv.color, fillOpacity: [.04, .2, .28, .38][c.lvl], className: c.lvl === 3 ? 'rg-hot' : '' }).addTo(rg.layer);
    rect.bindTooltip(`<b style="color:${lv.color}">${lv.name}</b>${c.main ? ' · ' + CAUSE[c.main][1] : ''}<br>${why.map(esc).join('<br>') || 'Không có dữ liệu'}`, { sticky: true, className: 'rg-tip' });
    rect.on('click', () => floodAnalyze(cellTarget(c), c.name));
    if (c.lvl) L.marker(c.c, { interactive: false, icon: L.divIcon({ className: 'rg-ic', html: `<span style="color:${lv.color}">${ic(CAUSE[c.main][0])}</span>`, iconSize: [22, 22], iconAnchor: [11, 11] }) }).addTo(rg.layer);
  });
  const cnt = [0, 1, 2, 3].map(l => cells.filter(c => c.lvl === l).length), worst = Math.max(...cells.map(c => c.lvl));
  const top = cells.filter(c => c.lvl).sort((a, b) => b.lvl - a.lvl || (b.rain?.r72 ?? 0) - (a.rain?.r72 ?? 0)).slice(0, 5);
  const size = rg.step < 1 ? `khoảng ${nf(rg.step * 111)} km` : `${nf(rg.step, 2)}°`;
  $('#rgResult').innerHTML = `<div class="rg-sum lv${worst}">
      <div class="rg-bars">${[3, 2, 1, 0].map(l => `<div class="rg-b" style="--c:${LEVELS[l].color}" title="${LEVELS[l].name}"><b>${cnt[l]}</b><small>${LEVELS[l].name}</small></div>`).join('')}</div>
      <div class="cl-hint" id="rgSub">${done ? `${cells.length} ô, mỗi ô ${size}. Rê chuột lên ô để xem lý do.${rg.missing ? ` Còn ${rg.missing} con sông chưa có mức lũ (máy chủ bận), quét lại sau ít phút để bổ sung.` : ''}` : `<span class="cl-spinner"></span> Đang bổ sung mức lũ sông${total ? ` ${got}/${total}` : ''}…`}</div>
    </div>
    ${top.length ? `<div class="rg-top">${top.map(c => `<button class="rg-it" data-i="${cells.indexOf(c)}"><span class="dot" style="background:${LEVELS[c.lvl].color};color:${LEVELS[c.lvl].color}"></span><div><b data-nm>Đang tìm tên…</b><small>${LEVELS[c.lvl].name} · ${CAUSE[c.main][1]}</small></div></button>`).join('')}</div>`
      : `<div class="place-empty">${ic('check', 'c-neon')} Chưa có ô nào đáng lo trong vùng đang xem.</div>`}`;
  const items = $$('#rgResult .rg-it').map(el => {
    const c = cells[+el.dataset.i];
    el.onclick = () => { map.flyToBounds([[c.s, c.w], [c.n, c.e]], { duration: 1, padding: [60, 60] }); floodAnalyze(cellTarget(c), c.name); };
    return [el.querySelector('[data-nm]'), c];
  });
  regionNames(items);
}
let rgNaming = null;
async function regionNames(items) {
  const me = rgNaming = {};
  for (const [nm, c] of items) {
    if (!c.name) {
      try { const r = await reverse(c.c); c.name = r.area || r.name; } catch {}
      c.name ||= `Vùng ${fmtLL(c.c).replace(/(\.\d\d)\d+/g, '$1')}`;
      await new Promise(r => setTimeout(r, 1100));
    }
    if (rgNaming !== me) return; // danh sách đã vẽ lại, phần còn lại do lượt mới làm
    if (nm.isConnected) nm.textContent = c.name;
    else { const el = $(`#rgResult .rg-it[data-i="${rg.cells.indexOf(c)}"] [data-nm]`); if (el) el.textContent = c.name; }
  }
}
$('#rgGo').onclick = () => regionScan();
$('#rgClear').onclick = () => { rg.ctl?.abort(); rg.layer.clearLayers(); rg.cells = []; $('#rgClear').hidden = true; $('#rgGo').disabled = false; $('#rgResult').innerHTML = RG_HINT; };

/* ---- Các trận lũ đang diễn ra trên thế giới ---- */
async function floodEvents(on) {
  fl.events.clearLayers();
  if (!on) return;
  try {
    const d = await getJSON('https://www.gdacs.org/gdacsapi/api/events/geteventlist/MAP?eventtype=FL');
    const lv = { Red: [3, 'NGUY HIỂM'], Orange: [2, 'CẢNH BÁO'], Green: [1, 'THEO DÕI'] };
    if (!$('#flEvents').checked) return;
    const pts = (d.features || []).filter(f => f.geometry?.type === 'Point'); // bỏ vùng ảnh hưởng dạng đa giác
    pts.forEach(f => {
      const p = f.properties, [lng, lat] = f.geometry.coordinates, [k, nm] = lv[p.alertlevel] || [1, 'THEO DÕI'];
      const country = p.country || p.affectedcountries?.[0]?.countryname || '';
      L.marker([lat, lng], { icon: L.divIcon({ className: 'mk', html: `<div class="fl-ev b${k}">${ic('waves')}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] }) })
        .bindPopup(`<div class="pop"><b>Lũ · ${esc(country)}</b><span class="cl-tag ${LEVELS[k].cls}" style="margin:6px 0;display:inline-block">${nm}</span><br><small>Từ ${new Date(p.fromdate).toLocaleDateString('vi-VN')} đến ${new Date(p.todate).toLocaleDateString('vi-VN')}</small><br><a href="${esc(p.url?.report)}" target="_blank" rel="noopener">Xem báo cáo chi tiết ↗</a></div>`)
        .addTo(fl.events);
    });
    toast('Đã hiện các trận lũ đang diễn ra', `${pts.length} điểm trên toàn cầu. Thu nhỏ bản đồ để xem hết.`, { ok: true });
  } catch (e) { $('#flEvents').checked = false; fail(e); }
}

/* ---- Theo dõi các điểm đã ghim ---- */
async function floodWatchPins(notify) {
  const list = pins.slice(0, 12), box = $('#flPins');
  if (!list.length) { box.innerHTML = `<div class="place-empty">${ic('pin', 'c-red')} Chưa có điểm ghim nào để theo dõi. Ghim nhà, quê, nơi sắp đến…</div>`; return; }
  const my = fl.pinsTok = {}; // lượt kiểm tra mới thay lượt cũ
  box.innerHTML = list.map((p, i) => `<div class="fl-pin" data-i="${i}"><span class="cl-spinner"></span><b>${esc(p.name)}</b><span class="lv"></span></div>`).join('');
  for (let i = 0; i < list.length; i++) {
    if (my !== fl.pinsTok) return;
    const p = list[i], row = box.querySelector(`[data-i="${i}"]`);
    try {
      const r = await floodCheck(L.latLng(p.lat, p.lng), { quiet: true });
      if (my !== fl.pinsTok) return;
      row.firstChild.outerHTML = `<i class="dot b${r.lvl}"></i>`;
      row.querySelector('.lv').innerHTML = `<span class="cl-tag ${LEVELS[r.lvl].cls}">${LEVELS[r.lvl].name}</span>`;
      row.onclick = () => { map.flyTo([p.lat, p.lng], 12, { duration: 1.2 }); floodAnalyze(L.latLng(p.lat, p.lng), p.name); };
      if (notify && r.lvl >= 2) notifyUser(`MapVerse · ${LEVELS[r.lvl].name}: ${p.name}`, { body: floodHeadline(r), tag: 'mv-flood-' + p.id, icon: 'icons/icon-192.png' });
    } catch { row.firstChild.outerHTML = `<i class="dot"></i>`; row.querySelector('.lv').textContent = 'Chưa kiểm tra được'; }
  }
}
// Android Chrome không cho `new Notification` trong trang — phải đi qua trình phục vụ nền
async function notifyUser(title, opt) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try { const reg = await navigator.serviceWorker?.getRegistration(); if (reg) return await reg.showNotification(title, opt); } catch {}
  try { new Notification(title, opt); } catch {}
}
async function floodAlarm(on, auto = false) {
  clearInterval(fl.watchT);
  try { localStorage.setItem('mv.alarm', on ? '1' : ''); } catch {}
  if (!on) return;
  if (!auto && 'Notification' in window && Notification.permission === 'default') await Notification.requestPermission();
  if (!auto && 'Notification' in window && Notification.permission !== 'granted') toast('Chưa được phép báo', 'Trình duyệt chặn thông báo; cảnh báo chỉ hiện trong app.');
  floodWatchPins(true);
  fl.watchT = setInterval(() => floodWatchPins(true), 3 * 3600e3);
}

$('#flHere').onclick = () => floodAnalyze(center());
$('#flMe').onclick = () => locate().then(ll => floodAnalyze(ll, 'Vị trí của tôi')).catch(fail);
$('#flRadar').onchange = e => radarOn(e.target.checked);
$('#flGrid').onchange = e => rainGrid(e.target.checked);
$('#flEvents').onchange = e => { floodEvents(e.target.checked); if (e.target.checked && map.getZoom() > 5) map.flyTo(map.getCenter(), 3, { duration: 1.4 }); };
$('#flPinsGo').onclick = () => floodWatchPins(false);
$('#flAlarm').onchange = e => floodAlarm(e.target.checked);

/* ---------- Phím tắt ---------- */
document.addEventListener('keydown', e => {
  if (e.target.matches('input,textarea')) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (k === '/') { e.preventDefault(); $('#q').focus(); }
  else if (k === 'l') locate().catch(fail);
  else if (k === 'm') { setTab('measure'); setMeasuring(!measuring); }
  else if ('1234'.includes(k) && k) setLayer(['dark', 'street', 'sat', 'topo'][+k - 1]);
  else if (k === 'd') toggle3d();
  else if (k === 'o' && is3d) setOrbit(!orbiting);
  else if (k === 'escape' && nav.on) stopNav();
  else if (k === 'escape') { hideCtx(); if (measuring) setMeasuring(false); if (orbiting) setOrbit(false); }
});

/* ---------- Trạng thái mạng ---------- */
function net() {
  $('#netChip').innerHTML = navigator.onLine ? '<span class="cl-dot ok"></span>Trực tuyến' : '<span class="cl-dot err"></span>Mất mạng';
}
addEventListener('online', () => {
  net(); toast('Đã có mạng trở lại', '', { ok: true }); wxLast = ''; weatherSoon();
  if (m3) m3.setStyle(style3d(curLayer), { diff: false }); // nạp lại độ cao địa hình đầy đủ thay cho bản ngoại tuyến
});
addEventListener('offline', () => { net(); goOffline(); });

/* ---------- Cài thành app ---------- */
const standalone = matchMedia('(display-mode: standalone), (display-mode: window-controls-overlay)').matches || navigator.standalone;
const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installEvt = null;
addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; $('#installBtn').hidden = false; });
addEventListener('appinstalled', () => { installEvt = null; $('#installBtn').hidden = true; toast('Đã cài MapVerse', 'Mở app từ màn hình chính hoặc menu Start.', { ok: true }); });
if (isIOS && !standalone) $('#installBtn').hidden = false; // Safari không có hộp cài, phải hướng dẫn
$('#installBtn').onclick = async () => {
  if (installEvt) {
    installEvt.prompt();
    const { outcome } = await installEvt.userChoice;
    if (outcome === 'accepted') { installEvt = null; $('#installBtn').hidden = true; }
  } else if (isIOS) toast('Cài trên iPhone/iPad', 'Bấm nút Chia sẻ ở thanh dưới của Safari, rồi chọn "Thêm vào MH chính".');
  else toast('Chưa cài được lúc này', 'Mở bằng Chrome hoặc Edge, rồi chọn "Cài đặt ứng dụng" trong menu ⋮.');
};
if (standalone) document.documentElement.classList.add('is-app');

/* ---------- Khởi động ---------- */
paintIcons();
$('#logoIc').innerHTML = ic('nav'); $('#splashIc').innerHTML = ic('nav');
$('#logoIc svg').style.cssText = 'fill:#fff;stroke:none';
$('#splashIc svg').style.cssText = 'width:24px;height:24px;fill:#fff;stroke:none';
loadView();
zBig.textContent = map.getZoom();
drawPins(); drawMeasure(); drawPacks(); net(); loadWeather();
if (!navigator.onLine) setTimeout(goOffline, 800);
// báo động lũ đã bật lần trước: bật lại (chỉ khi trình duyệt vẫn cho phép, không hỏi lại)
try { if (localStorage.getItem('mv.alarm') === '1' && (!('Notification' in window) || Notification.permission !== 'denied')) { $('#flAlarm').checked = true; setTimeout(() => floodAlarm(true, true), 4000); } } catch {}
{ const t = new URLSearchParams(location.search).get('tab'); if (t && $(`.pane[data-pane="${CSS.escape(t)}"]`)) setTab(t); }
setTimeout(() => $('#splash').classList.add('hidden'), 650);
