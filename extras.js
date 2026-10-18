/* extras.js: Spanish-first bilingual layer + small effects. Load AFTER script.js.
   Every English string the app renders is shown in Spanish with the English line below it. */
(() => {
  const D = Object.assign(Object.create(null), {
    // cities, tags, descriptions
    'Seville': 'Sevilla', 'Gaudí, tapas & sea': 'Gaudí, tapas y mar', 'Art, parks & nightlife': 'Arte, parques y vida nocturna',
    'Flamenco & palaces': 'Flamenco y palacios', 'The Alhambra': 'La Alhambra', 'Paella & futurism': 'Paella y futurismo',
    'Guggenheim & pintxos': 'Guggenheim y pintxos', 'Beaches & Michelin food': 'Playas y cocina con estrellas Michelin',
    'Medieval city': 'Ciudad medieval', 'Beaches & old town': 'Playas y casco antiguo', "Pilgrim's end": 'Final del Camino',
    'Picasso & sun': 'Picasso y sol', 'Mezquita & patios': 'Mezquita y patios',
    'Modernista masterpieces meet Mediterranean beaches.': 'Obras maestras modernistas junto a playas mediterráneas.',
    "Spain's elegant capital of world-class museums.": 'La elegante capital de España, con museos de primer nivel.',
    'Orange-scented lanes, Moorish palaces and flamenco.': 'Callejuelas con aroma a azahar, palacios moriscos y flamenco.',
    'A Moorish jewel beneath the Sierra Nevada.': 'Una joya morisca a los pies de Sierra Nevada.',
    'Sunny city of paella, gardens and bold architecture.': 'Ciudad soleada de paella, jardines y arquitectura audaz.',
    'Basque city reborn through art and food.': 'Ciudad vasca renacida gracias al arte y la gastronomía.',
    'Elegant bay, golden sand and the best bars in Spain.': 'Bahía elegante, arena dorada y los mejores bares de España.',
    'Walled hilltop city of three cultures.': 'Ciudad amurallada en lo alto de una colina, de tres culturas.',
    'Whitewashed old town, hidden coves and sunsets.': 'Casco antiguo encalado, calas escondidas y atardeceres.',
    'Granite plazas and the end of the Camino.': 'Plazas de granito y el final del Camino.',
    'Birthplace of Picasso with a Moorish fortress above the port.': 'Cuna de Picasso, con una fortaleza morisca sobre el puerto.',
    'Caliphate capital with a forest of arches.': 'Capital califal con un bosque de arcos.',
    // spots
    'Gothic Quarter walk': 'Paseo por el Barrio Gótico', 'Barceloneta Beach': 'Playa de la Barceloneta', 'Prado Museum': 'Museo del Prado',
    'Royal Palace': 'Palacio Real', 'Retiro Park': 'Parque del Retiro', 'Plaza Mayor & tapas': 'Plaza Mayor y tapas',
    'Cathedral & Giralda': 'Catedral y Giralda', 'Flamenco show in Triana': 'Espectáculo de flamenco en Triana',
    'Albaicín sunset viewpoint': 'Mirador del Albaicín al atardecer', 'Cathedral & Royal Chapel': 'Catedral y Capilla Real',
    'Sacromonte caves': 'Cuevas del Sacromonte', 'City of Arts and Sciences': 'Ciudad de las Artes y las Ciencias',
    'Central Market': 'Mercado Central', 'Cathedral & Miguelete tower': 'Catedral y torre del Miguelete',
    'Malvarrosa beach & paella': 'Playa de la Malvarrosa y paella', 'Guggenheim Museum': 'Museo Guggenheim',
    'Casco Viejo walk': 'Paseo por el Casco Viejo', 'Artxanda funicular views': 'Vistas desde el funicular de Artxanda',
    'Pintxos crawl': 'Ruta de pintxos', 'La Concha beach': 'Playa de La Concha', 'San Telmo Museum': 'Museo San Telmo',
    'Pintxo crawl, Parte Vieja': 'Ruta de pintxos, Parte Vieja', 'Toledo Cathedral': 'Catedral de Toledo',
    'El Greco at Santo Tomé': 'El Greco en Santo Tomé', 'Dalt Vila old town': 'Casco antiguo de Dalt Vila',
    'Ses Salines beach': 'Playa de Ses Salines', 'Cala Comte sunset': 'Atardecer en Cala Comte', 'Port dinner': 'Cena en el puerto',
    'Cathedral of Santiago': 'Catedral de Santiago', 'Alameda Park stroll': 'Paseo por el Parque de la Alameda',
    'Picasso Museum': 'Museo Picasso', 'Gibralfaro Castle': 'Castillo de Gibralfaro', 'La Malagueta beach': 'Playa de La Malagueta',
    'Judería patios walk': 'Paseo por los patios de la Judería', 'Roman Bridge & Calahorra': 'Puente Romano y Calahorra',
    // areas, slots, notes
    'Old Town': 'Casco antiguo', 'Waterfront': 'Paseo marítimo', 'María Luisa Park': 'Parque de María Luisa', 'Beach': 'Playa',
    'Jewish Quarter': 'Barrio judío', 'Outskirts': 'Afueras', 'South': 'Sur', 'West Coast': 'Costa oeste', 'River': 'Río',
    'Morning': 'Mañana', 'Afternoon': 'Tarde', 'Evening': 'Noche', 'Free': 'Gratis',
    'Free entry in the last two hours of the day': 'Entrada gratuita en las dos últimas horas del día',
    'Can close for state events': 'Puede cerrar por actos oficiales',
    'Book ahead; may close for royal events': 'Reserva con antelación; puede cerrar por actos reales',
    'Tickets sell out weeks ahead': 'Las entradas se agotan con semanas de antelación',
    'Closed Sundays': 'Cerrado los domingos', 'Closed Mondays': 'Cerrado los lunes',
    'Often closed Mondays off-season': 'Suele cerrar los lunes en temporada baja',
    'Roof tours need booking': 'Las visitas a la cubierta requieren reserva',
    'Mornings reserved for worship on Sundays': 'Los domingos por la mañana se reservan para el culto',
    // interface messages
    'Free day: relax, wander, or add a day trip.': 'Día libre: descansa, pasea o añade una excursión.',
    'Calculating walking routes…': 'Calculando rutas a pie…',
    '🗺️ Show route map': '🗺️ Ver mapa de la ruta', '🗺️ Hide route map': '🗺️ Ocultar mapa',
    'The map library could not load. Check your internet connection.': 'No se pudo cargar el mapa. Revisa tu conexión a internet.',
    'No map coordinates for these stops.': 'No hay coordenadas para estas paradas.',
    'Please select at least one destination.': 'Selecciona al menos un destino.', 'Select at least one destination.': 'Selecciona al menos un destino.',
    'Number of days must be a whole number of 1 or more.': 'El número de días debe ser un entero de 1 o más.',
    'Enter the number of days.': 'Introduce el número de días.', 'Days must be a whole number of 1 or more.': 'Los días deben ser un entero de 1 o más.',
    'Enter a positive amount or leave empty.': 'Introduce una cantidad positiva o déjalo vacío.',
    'Your budget is too low to cover any attractions in the selected destinations. Try a higher budget level or amount.': 'Tu presupuesto es demasiado bajo para cubrir cualquier atracción de los destinos elegidos. Prueba con un nivel o una cantidad mayor.',
    'Please enter your name (2+ characters).': 'Escribe tu nombre (2 o más caracteres).', 'Choose a destination.': 'Elige un destino.',
    'Select a destination…': 'Elige un destino…', 'Choose a rating from 1 to 5 stars.': 'Elige una valoración de 1 a 5 estrellas.',
    'Review must be at least 10 characters.': 'La reseña debe tener al menos 10 caracteres.',
    'No reviews yet. Be the first to share your trip!': 'Aún no hay reseñas. ¡Sé el primero en compartir tu viaje!',
    'Delete': 'Eliminar', 'Review saved. Thank you!': 'Reseña guardada. ¡Gracias!', 'Review deleted': 'Reseña eliminada',
    'Delete this review?': '¿Eliminar esta reseña?',
    'Could not save: browser storage is unavailable.': 'No se pudo guardar: el almacenamiento del navegador no está disponible.'
  });
  const CITY = 'Barcelona|Madrid|Seville|Granada|Valencia|Bilbao|San Sebastián|Toledo|Ibiza|Santiago de Compostela|Málaga|Córdoba';
  const R = [   // pattern rules for strings that contain numbers or names
    [/^Day (\d+)/, 'Día $1'],
    [/^(\d+) spot\(s\) left out due to time or budget\./, '$1 lugar(es) omitido(s) por tiempo o presupuesto.'],
    [/^Day estimate: €(\d+) \(incl\. ~€(\d+) food & transport\)/, 'Estimación del día: €$1 (incl. ~€$2 en comida y transporte)'],
    [/^Estimated trip total/, 'Total estimado del viaje'],
    [/^Total walking: /, 'Caminata total: '], [/about (\d+) min/, 'unos $1 min'],
    [/^(\d+ → \d+)  (.+?) to (.+?): /, (m, a, b, c) => `${a}  ${D[b] || b} a ${D[c] || c}: `],
    [/ min walk/, ' min a pie'], [/\(straight-line estimate\)/, '(estimación en línea recta)'],
    [/⚠️ long walk, consider transit/, '⚠️ paseo largo, considera usar transporte'],
    [/^ℹ️ (.+)$/, (m, a) => 'ℹ️ ' + (D[a] || a)],
    [new RegExp(`^(.+) on (${CITY})$`), (m, a, b) => `${a} en ${D[b] || b}`],
    [/^€(\d+) over (\d+) day\(s\) is below the estimated €(\d+)\/day for food and transport on this budget level\. Increase the amount or lower the budget level\./,
      '€$1 para $2 día(s) es menos que los €$3/día estimados para comida y transporte en este nivel. Aumenta la cantidad o baja el nivel de presupuesto.'],
    [/^With (\d+) day\(s\), only the first (\d+) destination\(s\) could be included\./, 'Con $1 día(s), solo se pudieron incluir los primeros $2 destino(s).']
  ];
  const tr = s => {
    if (D[s]) return D[s];
    let o = s.split(' · ').map(p => D[p] || p).join(' · ');
    R.forEach(([re, r]) => { o = o.replace(re, r); });
    return o !== s ? o : null;
  };
  const mk = (t, c, x) => Object.assign(document.createElement(t), { className: c, textContent: x });
  const SKIP = /^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT)$/;

  function fix(n) {                              // translate leaf elements: Spanish first, English below
    if (!n || n.nodeType !== 1 || SKIP.test(n.tagName) || n.dataset.bi || n.closest('.en,.es,.leaflet-container,.entries p')) return;
    const kids = [...n.childNodes];
    if (kids.length && kids.every(c => c.nodeType === 3)) {
      const t = n.textContent.trim(), es = t && tr(t);
      if (!es) return;
      if (n.tagName === 'OPTION') { n.dataset.bi = 1; n.textContent = `${es} · ${t}`; }
      else { n.textContent = ''; n.append(mk('span', 'es', es), mk('span', 'en', t)); }
    } else [...n.children].forEach(fix);
  }

  // static markup: Spanish in the HTML, English in data-en
  document.querySelectorAll('[data-en]').forEach(n => n.append(mk('span', 'en', n.dataset.en)));
  fix(document.body);
  new MutationObserver(ms => ms.forEach(m => {
    m.addedNodes.forEach(a => fix(a.nodeType === 1 ? a : a.parentElement));
    if (m.type === 'characterData') fix(m.target.parentElement);
  })).observe(document.body, { childList: true, subtree: true, characterData: true });

  ['confirm', 'alert'].forEach(k => {            // bilingual dialogs
    const o = window[k].bind(window);
    window[k] = m => { const e = tr(m); return o(e ? `${e}\n${m}` : m); };
  });

  /* ---- effects ---- */
  const cards = document.getElementById('cards');
  cards.addEventListener('pointermove', e => {
    const c = e.target.closest('.card'); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 8 + 'deg');
    c.style.setProperty('--rx', (.5 - (e.clientY - r.top) / r.height) * 8 + 'deg');
  });
  cards.addEventListener('pointerout', e => {
    const c = e.target.closest('.card');
    if (c) { c.style.removeProperty('--rx'); c.style.removeProperty('--ry'); }
  });
  const bar = mk('div', 'progress', ''); document.body.append(bar);
  addEventListener('scroll', () => {
    bar.style.width = (scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight) * 100) + '%';
  }, { passive: true });
})();