/* S(name, hours, costTier 0-3, bestSlot m/a/e, area, closedNote). Array order = must-see priority. */
const S = (n, h, c, t, a, x = '') => ({ n, h, c, t, a, x });
const DEST = {
  barcelona: { name: 'Barcelona', tag: 'Gaudí, tapas & sea', desc: 'Modernista masterpieces meet Mediterranean beaches.', spots: [
    S('Sagrada Família', 2, 3, 'm', 'Eixample'), S('Park Güell', 2, 2, 'm', 'Gràcia'),
    S('Gothic Quarter walk', 2, 0, 'a', 'Old Town'), S('Barceloneta Beach', 2, 0, 'e', 'Waterfront')] },
  madrid: { name: 'Madrid', tag: 'Art, parks & nightlife', desc: 'Spain\'s elegant capital of world-class museums.', spots: [
    S('Prado Museum', 3, 2, 'm', 'Paseo del Arte', 'Free entry in the last two hours of the day'), S('Royal Palace', 2, 2, 'm', 'Centro', 'Can close for state events'),
    S('Retiro Park', 2, 0, 'a', 'Retiro'), S('Plaza Mayor & tapas', 2, 1, 'e', 'Centro')] },
  seville: { name: 'Seville', tag: 'Flamenco & palaces', desc: 'Orange-scented lanes, Moorish palaces and flamenco.', spots: [
    S('Real Alcázar', 2.5, 2, 'm', 'Centro', 'Book ahead; may close for royal events'), S('Cathedral & Giralda', 2, 2, 'm', 'Centro'),
    S('Plaza de España', 1.5, 0, 'a', 'María Luisa Park'), S('Flamenco show in Triana', 2, 2, 'e', 'Triana')] },
  granada: { name: 'Granada', tag: 'The Alhambra', desc: 'A Moorish jewel beneath the Sierra Nevada.', spots: [
    S('Alhambra & Generalife', 4, 2, 'm', 'Alhambra', 'Tickets sell out weeks ahead'), S('Albaicín sunset viewpoint', 2, 0, 'e', 'Albaicín'),
    S('Cathedral & Royal Chapel', 1.5, 1, 'a', 'Centro'), S('Sacromonte caves', 2, 1, 'a', 'Sacromonte')] },
  valencia: { name: 'Valencia', tag: 'Paella & futurism', desc: 'Sunny city of paella, gardens and bold architecture.', spots: [
    S('City of Arts and Sciences', 3, 2, 'a', 'Turia'), S('Central Market', 1.5, 0, 'm', 'Old Town', 'Closed Sundays'),
    S('Cathedral & Miguelete tower', 1.5, 1, 'm', 'Old Town'), S('Malvarrosa beach & paella', 3, 1, 'e', 'Beach')] },
  bilbao: { name: 'Bilbao', tag: 'Guggenheim & pintxos', desc: 'Basque city reborn through art and food.', spots: [
    S('Guggenheim Museum', 2.5, 2, 'm', 'Abando', 'Often closed Mondays off-season'), S('Casco Viejo walk', 1.5, 0, 'a', 'Casco Viejo'),
    S('Artxanda funicular views', 1.5, 1, 'a', 'Artxanda'), S('Pintxos crawl', 2, 2, 'e', 'Casco Viejo')] },
  sansebastian: { name: 'San Sebastián', tag: 'Beaches & Michelin food', desc: 'Elegant bay, golden sand and the best bars in Spain.', spots: [
    S('La Concha beach', 3, 0, 'a', 'La Concha'), S('San Telmo Museum', 1.5, 1, 'm', 'Parte Vieja', 'Closed Mondays'),
    S('Monte Igueldo', 1.5, 1, 'a', 'Igueldo'), S('Pintxo crawl, Parte Vieja', 2.5, 2, 'e', 'Parte Vieja')] },
  toledo: { name: 'Toledo', tag: 'Medieval city', desc: 'Walled hilltop city of three cultures.', spots: [
    S('Toledo Cathedral', 2, 2, 'm', 'Casco'), S('Santa María la Blanca', 1, 1, 'a', 'Jewish Quarter'),
    S('El Greco at Santo Tomé', 1, 1, 'a', 'Jewish Quarter'), S('Mirador del Valle', 1.5, 0, 'e', 'Outskirts')] },
  ibiza: { name: 'Ibiza', tag: 'Beaches & old town', desc: 'Whitewashed old town, hidden coves and sunsets.', spots: [
    S('Dalt Vila old town', 2.5, 1, 'm', 'Old Town'), S('Ses Salines beach', 3, 0, 'a', 'South'),
    S('Cala Comte sunset', 3, 0, 'e', 'West Coast'), S('Port dinner', 2, 2, 'e', 'Old Town')] },
  santiago: { name: 'Santiago de Compostela', tag: 'Pilgrim\'s end', desc: 'Granite plazas and the end of the Camino.', spots: [
    S('Cathedral of Santiago', 2, 1, 'm', 'Old Town', 'Roof tours need booking'), S('Praza do Obradoiro', 1, 0, 'm', 'Old Town'),
    S('Mercado de Abastos', 1.5, 0, 'm', 'Old Town', 'Closed Sundays'), S('Alameda Park stroll', 1.5, 0, 'e', 'Alameda')] },
  malaga: { name: 'Málaga', tag: 'Picasso & sun', desc: 'Birthplace of Picasso with a Moorish fortress above the port.', spots: [
    S('Alcazaba', 2, 1, 'm', 'Centro'), S('Picasso Museum', 1.5, 1, 'a', 'Centro'),
    S('Gibralfaro Castle', 1.5, 1, 'a', 'Gibralfaro'), S('La Malagueta beach', 2.5, 0, 'e', 'Beach')] },
  cordoba: { name: 'Córdoba', tag: 'Mezquita & patios', desc: 'Caliphate capital with a forest of arches.', spots: [
    S('Mezquita-Catedral', 2, 2, 'm', 'Judería', 'Mornings reserved for worship on Sundays'), S('Alcázar de los Reyes Cristianos', 1.5, 1, 'a', 'Judería', 'Closed Mondays'),
    S('Judería patios walk', 1.5, 0, 'a', 'Judería'), S('Roman Bridge & Calahorra', 1, 0, 'e', 'River')] }
};
const ICON = { barcelona: '⛪', madrid: '🏛️', seville: '💃', granada: '🕌', valencia: '🥘', bilbao: '🎨', sansebastian: '🍤', toledo: '🏰', ibiza: '🌅', santiago: '🐚', malaga: '☀️', cordoba: '🌹' };
/* Approximate coordinates [lat, lng] per spot, keyed by spot name */
const COORDS = {
  'Sagrada Família': [41.4036, 2.1744], 'Park Güell': [41.4145, 2.1527], 'Gothic Quarter walk': [41.3830, 2.1764], 'Barceloneta Beach': [41.3784, 2.1925],
  'Prado Museum': [40.4138, -3.6921], 'Royal Palace': [40.4180, -3.7143], 'Retiro Park': [40.4153, -3.6844], 'Plaza Mayor & tapas': [40.4155, -3.7074],
  'Real Alcázar': [37.3832, -5.9915], 'Cathedral & Giralda': [37.3858, -5.9933], 'Plaza de España': [37.3772, -5.9869], 'Flamenco show in Triana': [37.3836, -6.0017],
  'Alhambra & Generalife': [37.1770, -3.5881], 'Albaicín sunset viewpoint': [37.1812, -3.5929], 'Cathedral & Royal Chapel': [37.1760, -3.5993], 'Sacromonte caves': [37.1840, -3.5870],
  'City of Arts and Sciences': [39.4545, -0.3504], 'Central Market': [39.4739, -0.3792], 'Cathedral & Miguelete tower': [39.4753, -0.3753], 'Malvarrosa beach & paella': [39.4777, -0.3240],
  'Guggenheim Museum': [43.2687, -2.9340], 'Casco Viejo walk': [43.2574, -2.9235], 'Artxanda funicular views': [43.2672, -2.9185], 'Pintxos crawl': [43.2569, -2.9242],
  'La Concha beach': [43.3182, -1.9857], 'San Telmo Museum': [43.3231, -1.9740], 'Monte Igueldo': [43.3226, -2.0049], 'Pintxo crawl, Parte Vieja': [43.3235, -1.9843],
  'Toledo Cathedral': [39.8574, -4.0243], 'Santa María la Blanca': [39.8559, -4.0306], 'El Greco at Santo Tomé': [39.8567, -4.0272], 'Mirador del Valle': [39.8465, -4.0170],
  'Dalt Vila old town': [38.9065, 1.4380], 'Ses Salines beach': [38.8530, 1.4040], 'Cala Comte sunset': [38.9650, 1.2240], 'Port dinner': [38.9088, 1.4330],
  'Cathedral of Santiago': [42.8806, -8.5446], 'Praza do Obradoiro': [42.8807, -8.5440], 'Mercado de Abastos': [42.8800, -8.5420], 'Alameda Park stroll': [42.8766, -8.5470],
  'Alcazaba': [36.7213, -4.4155], 'Picasso Museum': [36.7218, -4.4177], 'Gibralfaro Castle': [36.7235, -4.4115], 'La Malagueta beach': [36.7195, -4.4080],
  'Mezquita-Catedral': [37.8789, -4.7794], 'Alcázar de los Reyes Cristianos': [37.8765, -4.7839], 'Judería patios walk': [37.8795, -4.7800], 'Roman Bridge & Calahorra': [37.8757, -4.7775]
};
Object.values(DEST).forEach(d => d.spots.forEach(s => { s.ll = COORDS[s.n]; }));

const SLOT = { m: { label: 'Morning', start: 9 }, a: { label: 'Afternoon', start: 14 }, e: { label: 'Evening', start: 19 } };
const SLOT_ORDER = { m: 0, a: 1, e: 2 };
const COST = [0, 10, 22, 45];                       // € per spot tier
const BASE = { budget: 40, mid: 100, luxury: 220 }; // daily food + transport
const MAX_TIER = { budget: 1, mid: 2, luxury: 3 };
const DAY_HOURS = 8;

const $ = id => document.getElementById(id);
function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
const fmt = t => String(Math.floor(t)).padStart(2, '0') + ':' + (t % 1 ? '30' : '00');
let toastTimer;
function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2400); }

/* ---------- ITINERARY ENGINE ---------- */
function buildPlan({ ids, days, level, amount }) {
  if (!ids.length) return { error: 'Please select at least one destination.' };
  if (!Number.isInteger(days) || days < 1) return { error: 'Number of days must be a whole number of 1 or more.' };
  const base = BASE[level];
  let allowance = Infinity;                      // max € per day on paid spots
  if (amount) {
    allowance = amount / days - base;
    if (allowance < 0) return { error: `€${amount} over ${days} day(s) is below the estimated €${base}/day for food and transport on this budget level. Increase the amount or lower the budget level.` };
  }
  const used = ids.slice(0, days);               // cannot visit more cities than days
  const notes = used.length < ids.length ? [`With ${days} day(s), only the first ${used.length} destination(s) could be included.`] : [];
  const perCity = Math.floor(days / used.length), extra = days % used.length;
  const cities = [];
  used.forEach((id, i) => {
    const d = DEST[id], n = perCity + (i < extra ? 1 : 0);
    const allowed = d.spots.filter(s => s.c <= MAX_TIER[level] && COST[s.c] <= allowance);
    let hrs = 0; const chosen = [];              // take must-sees until capacity is used
    allowed.forEach(s => { if (hrs + s.h <= n * DAY_HOURS) { chosen.push(s); hrs += s.h; } });
    const areas = [...new Set(d.spots.map(s => s.a))];   // group same-area spots, then pack into days
    chosen.sort((a, b) => areas.indexOf(a.a) - areas.indexOf(b.a) || SLOT_ORDER[a.t] - SLOT_ORDER[b.t]);
    const target = hrs / n, buckets = Array.from({ length: n }, () => ({ spots: [], h: 0 }));
    let k = 0;
    chosen.forEach(s => {
      const cur = buckets[k];
      if (k < n - 1 && cur.spots.length && (cur.h + s.h > DAY_HOURS || cur.h >= target)) k++;
      buckets[k].spots.push(s); buckets[k].h += s.h;
    });
    buckets.forEach(b => {                       // schedule at best time of day
      b.spots.sort((a, c) => SLOT_ORDER[a.t] - SLOT_ORDER[c.t]);
      let end = 0;
      b.spots.forEach(s => { s.start = Math.max(end, SLOT[s.t].start); end = s.start + s.h; });
    });
    cities.push({ d, chosen, buckets, skipped: d.spots.length - chosen.length });
  });
  if (!cities.some(c => c.chosen.length)) return { error: 'Your budget is too low to cover any attractions in the selected destinations. Try a higher budget level or amount.' };
  return { cities, notes, base };
}

function renderPlan(p) {
  const out = $('result'); out.replaceChildren();
  if (p.error) { out.append(el('div', 'msg', p.error)); return; }
  p.notes.forEach(t => out.append(el('div', 'msg note', t)));
  let dayNo = 1, total = 0;
  p.cities.forEach(c => {
    out.append(el('h3', 'city', c.d.name));
    if (c.skipped) out.append(el('p', 'note-line', `${c.skipped} spot(s) left out due to time or budget.`));
    c.buckets.forEach(b => {
      const day = el('article', 'day'); day.append(el('h4', '', `Day ${dayNo++} · ${c.d.name}`));
      const ul = el('ul');
      if (!b.spots.length) { const li = el('li'); li.append(el('time', '', '—'), el('div', '', 'Free day: relax, wander, or add a day trip.')); ul.append(li); }
      let spend = p.base;
      b.spots.forEach(s => {
        const li = el('li'), info = el('div'), tm = el('time');
        tm.innerHTML = `${fmt(s.start)}<br>${fmt(s.start + s.h)}`;
        info.append(el('strong', '', s.n), el('small', '', `${SLOT[s.t].label} · ${s.h}h · ${s.c ? '€'.repeat(s.c) + ' (~€' + COST[s.c] + ')' : 'Free'} · ${s.a}`));
        if (s.x) info.append(el('small', '', 'ℹ️ ' + s.x));
        li.append(tm, info); ul.append(li); spend += COST[s.c];
      });
      day.append(ul, el('p', 'cost', `Day estimate: €${spend} (incl. ~€${p.base} food & transport)`));
      if (b.spots.length) day.append(mapBlock(b.spots));
      total += spend; out.append(day);
    });
  });
  out.append(el('p', 'total', `Estimated trip total: €${total}`));
  out.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
/* ---------- MAP VIEW (Leaflet + OpenStreetMap) ---------- */
const haversine = (a, b) => {                    // straight-line km, used as fallback
  const r = x => x * Math.PI / 180, dl = r(b[0] - a[0]), dn = r(b[1] - a[1]);
  const h = Math.sin(dl / 2) ** 2 + Math.cos(r(a[0])) * Math.cos(r(b[0])) * Math.sin(dn / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
};

async function walkLeg(a, b) {                   // OSM foot-routing; falls back to a straight line
  try {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 7000);
    const url = `https://routing.openstreetmap.de/routed-foot/route/v1/foot/${a.ll[1]},${a.ll[0]};${b.ll[1]},${b.ll[0]}?overview=full&geometries=geojson`;
    const res = await fetch(url, { signal: ctl.signal }); clearTimeout(t);
    const r = (await res.json()).routes[0];
    return { km: r.distance / 1000, min: Math.round(r.duration / 60), geo: r.geometry, exact: true };
  } catch {
    const km = haversine(a.ll, b.ll);
    return { km, min: Math.round(km / 4.5 * 60), geo: null, exact: false };
  }
}

async function drawDay(mapEl, info, spots) {
  const pts = spots.filter(s => s.ll);
  if (typeof L === 'undefined') { info.append(el('li', '', 'The map library could not load. Check your internet connection.')); return; }
  if (!pts.length) { info.append(el('li', '', 'No map coordinates for these stops.')); return; }
  const map = L.map(mapEl, { scrollWheelZoom: false });
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19,
  attribution: 'Tiles © Esri, HERE, Garmin, OpenStreetMap contributors'
}).addTo(map);
  pts.forEach((s, i) => {
    const icon = L.divIcon({ className: 'pin', html: `<span>${i + 1}</span>`, iconSize: [30, 30], iconAnchor: [15, 15] });
    L.marker(s.ll, { icon, title: s.n }).addTo(map).bindPopup(`<strong>${i + 1}. ${s.n}</strong><br>${fmt(s.start)}–${fmt(s.start + s.h)}`);
  });
  pts.length === 1 ? map.setView(pts[0].ll, 15) : map.fitBounds(L.latLngBounds(pts.map(s => s.ll)).pad(0.2));
  setTimeout(() => map.invalidateSize(), 60);
  if (pts.length < 2) return;

  const sum = el('li', 'sum', 'Calculating walking routes…'); info.append(sum);
  const legs = await Promise.all(pts.slice(1).map((b, i) => walkLeg(pts[i], b)));
  let km = 0, min = 0;
  legs.forEach((g, i) => {
    km += g.km; min += g.min;
    g.exact ? L.geoJSON(g.geo, { style: { color: '#c8553d', weight: 5, opacity: .85 } }).addTo(map)
            : L.polyline([pts[i].ll, pts[i + 1].ll], { colsor: '#1d3557', weight: 3, dashArray: '6 8' }).addTo(map);
    info.append(el('li', '', `${i + 1} → ${i + 2}  ${pts[i].n} to ${pts[i + 1].n}: ${g.km.toFixed(1)} km · ~${g.min} min walk` +
      (g.exact ? '' : ' (straight-line estimate)') + (g.km > 2.5 ? ' ⚠️ long walk, consider transit' : '')));
  });
  sum.textContent = `Total walking: ${km.toFixed(1)} km · about ${min} min`;
}

function mapBlock(spots) {
  const box = el('div', 'mapbox'), btn = el('button', 'maptoggle', '🗺️ Hide route map'), panel = el('div', 'mappanel');
  const mapEl = el('div', 'map'), info = el('ul', 'legs');
  btn.type = 'button'; btn.setAttribute('aria-expanded', 'true');   // map starts open
  panel.append(mapEl, info); box.append(btn, panel);
  setTimeout(() => drawDay(mapEl, info, spots), 0);                 // draw once the page has been added to the DOM
  btn.onclick = () => {
    panel.hidden = !panel.hidden;
    btn.setAttribute('aria-expanded', String(!panel.hidden));
    btn.textContent = panel.hidden ? '🗺️ Show route map' : '🗺️ Hide route map';
  };
  return box;
}
/* ---------- VIEW SWITCHING ---------- */
function showView(name) {
  $('home').hidden = !!name;
    ['book', 'journal', 'experience'].forEach(v => { $(v).hidden = v !== name; });
  document.querySelectorAll('nav [data-view]').forEach(a => {
    const on = a.dataset.view === name;
    a.classList.toggle('active', on);
    on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('[data-view]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); showView(a.dataset.view); }));
showView('');

/* ---------- PLANNER UI ---------- */
Object.entries(DEST).forEach(([id, d], i) => {
  const l = el('label', 'card'), cb = el('input'); cb.type = 'checkbox'; cb.name = 'dest'; cb.value = id;
  const banner = el('div', 'banner', ICON[id]); banner.style.background = `linear-gradient(135deg,hsl(${(i * 30 + 10) % 360} 60% 78%),hsl(${(i * 30 + 50) % 360} 55% 62%))`;
  const body = el('div', 'body'), ul = el('ul');
  d.spots.slice(0, 3).forEach(s => ul.append(el('li', '', s.n)));
  body.append(el('h3', '', d.name), el('p', 'tag', d.tag), el('p', '', d.desc), ul);
  l.append(cb, banner, el('span', 'check', '✓'), body);
  $('cards').append(l);
  const o = el('option', '', d.name); o.value = id; $('j-dest').append(o);
});
$('j-dest').prepend(Object.assign(el('option', '', 'Select a destination…'), { value: '', selected: true }));

function setErr(inputId, errId, msg) {
  $(errId).textContent = msg;
  const i = $(inputId); if (i) msg ? i.setAttribute('aria-invalid', 'true') : i.removeAttribute('aria-invalid');
  return !msg;
}

$('plan-form').addEventListener('submit', e => {
  e.preventDefault();
  const ids = [...document.querySelectorAll('input[name=dest]:checked')].map(c => c.value);
  const daysRaw = $('days').value.trim(), days = Number(daysRaw), amtRaw = $('amount').value.trim(), amount = amtRaw ? Number(amtRaw) : 0;
  const ok = [
    setErr(null, 'err-dest', ids.length ? '' : 'Select at least one destination.'),
    setErr('days', 'err-days', daysRaw === '' ? 'Enter the number of days.' : (!Number.isInteger(days) || days < 1 ? 'Days must be a whole number of 1 or more.' : '')),
    setErr('amount', 'err-amount', amtRaw && !(amount > 0) ? 'Enter a positive amount or leave empty.' : '')
  ].every(Boolean);
  if (!ok) { $('result').replaceChildren(); return; }
  renderPlan(buildPlan({ ids, days, level: $('level').value, amount }));
});

/* ---------- FEEDBACK JOURNAL ---------- */
const KEY = 'spain-journal';
for (let v = 5; v >= 1; v--) {
  const r = el('input'); r.type = 'radio'; r.name = 'rating'; r.id = 'r' + v; r.value = v;
  const l = el('label', '', '★'); l.htmlFor = r.id; l.title = l.ariaLabel = v + ' star' + (v > 1 ? 's' : '');
  $('stars').append(r, l);
}
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
const save = list => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { alert('Could not save: browser storage is unavailable.'); } };

function renderJournal() {
  const ul = $('entries'); ul.replaceChildren();
  const list = load();
  if (!list.length) { ul.append(el('li', 'empty', 'No reviews yet. Be the first to share your trip!')); return; }
  list.forEach(en => {                           // stored newest-first
    const li = el('li'), body = el('div');
    const stars = el('div', 'star', '★'.repeat(en.rating) + '☆'.repeat(5 - en.rating)); stars.setAttribute('aria-label', `${en.rating} out of 5 stars`);
    body.append(el('strong', '', `${en.name} on ${DEST[en.dest] ? DEST[en.dest].name : en.dest}`), stars, el('p', '', en.text), el('p', 'meta', new Date(en.date).toLocaleString()));
    const del = el('button', 'del', 'Delete'); del.type = 'button'; del.setAttribute('aria-label', `Delete review by ${en.name}`);
    del.onclick = () => { if (confirm('Delete this review?')) { save(load().filter(x => x.id !== en.id)); renderJournal(); toast('Review deleted'); } };
    li.append(el('div', 'avatar', en.name.charAt(0).toUpperCase()), body, del); ul.append(li);
  });
}

$('journal-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('j-name').value.trim(), dest = $('j-dest').value, text = $('j-text').value.trim();
  const rEl = document.querySelector('input[name=rating]:checked');
  const ok = [
    setErr('j-name', 'err-name', name.length < 2 ? 'Please enter your name (2+ characters).' : ''),
    setErr('j-dest', 'err-jdest', dest ? '' : 'Choose a destination.'),
    setErr(null, 'err-rating', rEl ? '' : 'Choose a rating from 1 to 5 stars.'),
    setErr('j-text', 'err-text', text.length < 10 ? 'Review must be at least 10 characters.' : '')
  ].every(Boolean);
  if (!ok) return;
  save([{ id: Date.now() + Math.random().toString(36).slice(2), name, dest, rating: +rEl.value, text, date: new Date().toISOString() }, ...load()]);
  e.target.reset(); renderJournal(); toast('Review saved. Thank you!');
});
renderJournal();