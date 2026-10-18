(() => {
  'use strict';

  const STORAGE_KEY = 'descubreEspanaQuizScores_v1';
  const ROUND_DATA = [
    {
      label: 'RONDA FÁCIL · EASY ROUND',
      kicker: 'NIVEL FÁCIL',
      questions: [
        { q: '¿Cuál es la capital de España?', options: ['Barcelona', 'Madrid', 'Sevilla', 'Valencia'], answer: 1 },
        { q: '¿Qué plato español se prepara principalmente con arroz?', options: ['Paella', 'Gazpacho', 'Churros', 'Tortilla de patatas'], answer: 0 },
        { q: '¿Qué son las tapas en la gastronomía española?', options: ['Zapatos tradicionales españoles', 'Pequeñas porciones de comida', 'Instrumentos musicales españoles', 'Bebidas dulces'], answer: 1 },
        { q: '¿Qué plato español es una sopa fría hecha principalmente con tomates y verduras?', options: ['Fabada', 'Paella', 'Gazpacho', 'Churros'], answer: 2 },
        { q: '¿En qué localidad española se celebra La Tomatina?', options: ['Buñol', 'Madrid', 'Granada', 'Bilbao'], answer: 0 },
        { q: '¿En qué ciudad se celebra el famoso encierro de los toros?', options: ['Barcelona', 'Pamplona', 'Valencia', 'Málaga'], answer: 1 },
        { q: '¿Qué se lanza habitualmente durante La Tomatina?', options: ['Naranjas', 'Uvas', 'Tomates', 'Manzanas'], answer: 2 },
        { q: '¿En qué ciudad se encuentra la famosa basílica de la Sagrada Familia?', options: ['Sevilla', 'Madrid', 'Barcelona', 'Córdoba'], answer: 2 },
        { q: '¿Qué ciudad española es famosa por el conjunto palaciego de la Alhambra?', options: ['Granada', 'Bilbao', 'Zaragoza', 'Toledo'], answer: 0 },
        { q: '¿Qué arte tradicional español combina el cante, el baile y la guitarra?', options: ['Samba', 'Flamenco', 'Vals', 'Tango'], answer: 1 },
        { q: '¿Con qué se suelen servir los churros en España?', options: ['Sopa de tomate', 'Chocolate caliente', 'Salsa de queso', 'Mostaza'], answer: 1 },
        { q: '¿Cuáles son los ingredientes principales de la tortilla de patatas tradicional?', options: ['Arroz y pescado', 'Patatas y huevos', 'Tomates y judías', 'Pollo y queso'], answer: 1 },
        { q: '¿De qué ingrediente se elabora el jamón ibérico?', options: ['Cerdo', 'Pollo', 'Pescado', 'Cordero'], answer: 0 },
        { q: '¿A qué comunidad autónoma española pertenece Barcelona?', options: ['Andalucía', 'Cataluña', 'Galicia', 'Asturias'], answer: 1 },
        { q: '¿Qué isla española es famosa por su vida nocturna y su música electrónica?', options: ['Ibiza', 'La Palma', 'Menorca', 'Lanzarote'], answer: 0 },
        { q: '¿Qué ciudad alberga el Palacio Real de España y la Plaza Mayor?', options: ['Madrid', 'Valencia', 'Pamplona', 'Alicante'], answer: 0 },
        { q: '¿Qué festival es famoso porque la gente se lanza tomates unos a otros?', options: ['Las Fallas', 'La Tomatina', 'Semana Santa', 'Feria de Abril'], answer: 1 },
        { q: '¿Qué deporte se practica en La Liga española?', options: ['Rugby', 'Baloncesto', 'Fútbol', 'Críquet'], answer: 2 },
        { q: '¿Cuál de los siguientes es un club de fútbol español?', options: ['Liverpool FC', 'Real Madrid', 'Bayern de Múnich', 'Juventus'], answer: 1 },
        { q: '¿Qué comen tradicionalmente muchas personas en España a medianoche en Nochevieja para atraer la buena suerte?', options: ['Doce uvas', 'Doce aceitunas', 'Doce fresas', 'Doce almendras'], answer: 0 }
      ]
    },
    {
      label: 'RONDA MEDIA · MEDIUM ROUND',
      kicker: 'NIVEL MEDIO',
      questions: [
        { q: '¿Qué región española está más relacionada con el origen de la paella?', options: ['Valencia', 'Galicia', 'Asturias', 'Extremadura'], answer: 0 },
        { q: '¿Qué es un pintxo, una comida popular del País Vasco?', options: ['Un tipo de queso español', 'Un pequeño aperitivo, a menudo servido sobre pan', 'Una sopa tradicional española', 'Un pastel dulce relleno de chocolate'], answer: 1 },
        { q: '¿Qué festival de Valencia es famoso por sus enormes figuras artísticas que finalmente se queman?', options: ['La Tomatina', 'San Fermín', 'Las Fallas', 'Feria de Abril'], answer: 2 },
        { q: '¿En qué ciudad se celebra la famosa Feria de Abril?', options: ['Sevilla', 'Bilbao', 'Salamanca', 'Valladolid'], answer: 0 },
        { q: '¿En qué comunidad autónoma se encuentra Santiago de Compostela?', options: ['Galicia', 'Cataluña', 'Andalucía', 'Murcia'], answer: 0 },
        { q: '¿Qué es el Camino de Santiago?', options: ['Un mercado gastronómico tradicional español', 'Una famosa red de rutas de peregrinación', 'Un torneo de fútbol', 'Un archipiélago español'], answer: 1 },
        { q: '¿Qué ciudad española alberga el famoso Museo Guggenheim, diseñado por Frank Gehry?', options: ['Córdoba', 'Bilbao', 'Granada', 'Alicante'], answer: 1 },
        { q: '¿A qué archipiélago español pertenecen Tenerife y Gran Canaria?', options: ['Islas Baleares', 'Islas Canarias', 'Islas Columbretes', 'Islas Cíes'], answer: 1 },
        { q: '¿Qué es el cava en la gastronomía española?', options: ['Un vino espumoso', 'Un plato tradicional de patatas', 'Un tipo de jamón curado', 'Una sopa fría de verduras'], answer: 0 },
        { q: '¿Cuál es el ingrediente principal del pulpo a la gallega, un plato tradicional de Galicia?', options: ['Pollo', 'Pulpo', 'Ternera', 'Cerdo'], answer: 1 },
        { q: '¿Qué salsa se sirve habitualmente con los calçots, unas cebollas tiernas a la brasa populares en Cataluña?', options: ['Salsa romesco', 'Salsa de soja', 'Salsa tártara', 'Salsa de menta'], answer: 0 },
        { q: '¿A qué se refiere la palabra española «siesta»?', options: ['A un festival de medianoche', 'A un descanso o una breve dormida por la tarde', 'A un baile tradicional de boda', 'A un mercado de comida por la mañana'], answer: 1 },
        { q: '¿Cómo se llama el encierro de los toros durante las fiestas de San Fermín?', options: ['Encierro', 'Tapas', 'Sobremesa', 'Romería'], answer: 0 },
        { q: '¿Qué museo de Madrid es especialmente famoso por albergar el cuadro Las Meninas, de Diego Velázquez?', options: ['Museo Reina Sofía', 'Museo del Prado', 'Museo Guggenheim', 'Museo Picasso Málaga'], answer: 1 },
        { q: '¿Qué ciudad española es famosa por el complejo futurista de la Ciudad de las Artes y las Ciencias?', options: ['Valencia', 'Pamplona', 'Toledo', 'Santiago de Compostela'], answer: 0 },
        { q: '¿De qué región procede la fabada asturiana, un guiso tradicional de alubias?', options: ['Asturias', 'Murcia', 'La Rioja', 'Castilla-La Mancha'], answer: 0 },
        { q: '¿Qué dos clubes de fútbol son los principales rivales en el famoso partido conocido como El Clásico?', options: ['Atlético de Madrid y Sevilla FC', 'Real Madrid y FC Barcelona', 'Valencia CF y Villarreal CF', 'Athletic Club y Real Betis'], answer: 1 },
        { q: '¿Qué es la Copa del Rey?', options: ['Una competición española de copa de fútbol', 'La liga española de baloncesto', 'Un torneo internacional de tenis', 'Una carrera ciclista anual española'], answer: 0 },
        { q: '¿Cómo se llama la principal liga profesional de fútbol masculino de España?', options: ['Bundesliga', 'Serie A', 'La Liga', 'Ligue 1'], answer: 2 },
        { q: '¿Qué club de fútbol español es conocido por el apodo «Los Colchoneros»?', options: ['Atlético de Madrid', 'Real Sociedad', 'Real Betis', 'RCD Espanyol'], answer: 0 }
      ]
    },
    {
      label: 'RONDA DIFÍCIL · HARD ROUND',
      kicker: 'NIVEL DIFÍCIL',
      questions: [
        { q: '¿Cómo se llama el cohete que señala tradicionalmente el comienzo de las fiestas de San Fermín en Pamplona?', options: ['La Cremà', 'El Chupinazo', 'La Tamborrada', 'La Mascletà'], answer: 1 },
        { q: '¿En qué mes se celebra tradicionalmente La Tomatina?', options: ['Febrero', 'Mayo', 'Agosto', 'Diciembre'], answer: 2 },
        { q: '¿Cómo se llaman las figuras individuales que forman parte de los monumentos artísticos de las Fallas de Valencia?', options: ['Castells', 'Ninots', 'Gigantes', 'Sardanas'], answer: 1 },
        { q: '¿En qué ciudad española nació el pintor Pablo Picasso?', options: ['Málaga', 'Barcelona', 'Madrid', 'Sevilla'], answer: 0 },
        { q: '¿Qué ciudad española es famosa por su Mezquita-Catedral?', options: ['Córdoba', 'Salamanca', 'Zaragoza', 'Santander'], answer: 0 },
        { q: '¿En qué ciudad se celebra el famoso Festival de los Patios, conocido por sus patios decorados con flores?', options: ['Córdoba', 'Bilbao', 'Valladolid', 'Alicante'], answer: 0 },
        { q: '¿Qué región española está especialmente relacionada con el plato tradicional fabada asturiana?', options: ['Asturias', 'Cataluña', 'Extremadura', 'Islas Baleares'], answer: 0 },
        { q: '¿Con qué región española se asocia la tarta de Santiago, un pastel tradicional de almendras decorado con la cruz de Santiago?', options: ['Galicia', 'Valencia', 'Aragón', 'Cantabria'], answer: 0 },
        { q: '¿Qué región es especialmente famosa por la sidra tradicional y por la costumbre de escanciarla desde cierta altura?', options: ['Asturias', 'Murcia', 'Castilla-La Mancha', 'La Rioja'], answer: 0 },
        { q: '¿Cómo se llaman las torres humanas que se construyen tradicionalmente durante las fiestas de Cataluña?', options: ['Sardanas', 'Castells', 'Ninots', 'Encierros'], answer: 1 },
        { q: '¿De qué ciudad procede el cocido madrileño, un guiso tradicional elaborado con garbanzos y diferentes carnes?', options: ['Madrid', 'Granada', 'Valencia', 'Pamplona'], answer: 0 },
        { q: '¿Con qué región española se asocia la calçotada, una celebración tradicional centrada en asar calçots?', options: ['Cataluña', 'Galicia', 'Andalucía', 'Asturias'], answer: 0 },
        { q: '¿Qué movimiento arquitectónico está estrechamente relacionado con Antoni Gaudí y monumentos como el Park Güell y la Sagrada Familia?', options: ['El modernismo catalán', 'El clasicismo barroco', 'El neorrománico', 'La arquitectura mudéjar'], answer: 0 },
        { q: '¿Qué ruta del Camino de Santiago comienza cerca de la frontera entre Francia y España y atraviesa gran parte del norte de España hasta llegar a Santiago de Compostela?', options: ['Camino Francés', 'Vía de la Plata', 'Camino Portugués', 'Camino Inglés'], answer: 0 },
        { q: '¿Qué localidad andaluza está especialmente relacionada con la producción del vino de Jerez?', options: ['Jerez de la Frontera', 'Ronda', 'Marbella', 'Úbeda'], answer: 0 },
        { q: '¿Qué club de fútbol español es famoso por su política de alinear jugadores nacidos en el País Vasco o formados futbolísticamente en esa región?', options: ['Athletic Club', 'Getafe CF', 'RCD Mallorca', 'Celta de Vigo'], answer: 0 },
        { q: '¿En qué año ganó la selección masculina de fútbol de España su primera Copa Mundial de la FIFA?', options: ['1998', '2002', '2010', '2014'], answer: 2 },
        { q: '¿Quién marcó el gol de la victoria de España contra los Países Bajos en la final del Mundial de 2010?', options: ['Xavi Hernández', 'David Villa', 'Fernando Torres', 'Andrés Iniesta'], answer: 3 },
        { q: '¿Qué club de fútbol español recibe el apodo «El Submarino Amarillo»?', options: ['Villarreal CF', 'Valencia CF', 'Sevilla FC', 'Real Valladolid'], answer: 0 },
        { q: '¿Qué estadio es el campo tradicional del Sevilla FC?', options: ['Estadio de Mestalla', 'Estadio Ramón Sánchez-Pizjuán', 'Estadio de San Mamés', 'Reale Arena'], answer: 1 }
      ]
    }
  ];

  const QUESTIONS = ROUND_DATA.flatMap((round, roundIndex) => round.questions.map((question) => ({
    ...question,
    roundLabel: round.label,
    roundKicker: round.kicker,
    roundIndex
  })));

  const MODE_CONFIG = {
    easy: { label: 'Fácil', english: 'Easy', weight: 1, roundIndex: 0, topLine: 'MODO FÁCIL · 1 PUNTO POR ACIERTO' },
    medium: { label: 'Medio', english: 'Medium', weight: 3, roundIndex: 1, topLine: 'MODO MEDIO · 3 PUNTOS POR ACIERTO' },
    hard: { label: 'Difícil', english: 'Hard', weight: 5, roundIndex: 2, topLine: 'MODO DIFÍCIL · 5 PUNTOS POR ACIERTO' },
    mixed: { label: 'Mixto', english: 'Mixed', weight: 1, topLine: 'MODO MIXTO · 1 PUNTO POR ACIERTO · TODOS LOS NIVELES' }
  };

  const viewSections = [...document.querySelectorAll('.quiz-view')];
  const navLinks = [...document.querySelectorAll('.nav-link[data-view]')];
  const credentialPanel = document.getElementById('credential-panel');
  const credentialForm = document.getElementById('credential-form');
  const quizStage = document.getElementById('quiz-stage');
  const resultPanel = document.getElementById('result-panel');
  const questionText = document.getElementById('question-text');
  const answerOptions = document.getElementById('answer-options');
  const answerWarning = document.getElementById('answer-warning');
  const prevButton = document.getElementById('previous-question');
  const nextButton = document.getElementById('next-question');
  const roundLabel = document.getElementById('round-label');
  const questionCount = document.getElementById('question-count');
  const progressFill = document.getElementById('progress-fill');
  const progressTrack = document.getElementById('quiz-progress');
  const difficultyOptions = document.getElementById('difficulty-options');
  const difficultyError = document.getElementById('difficulty-error');
  const leaderboardModeFilter = document.getElementById('leaderboard-mode-filter');

  let participant = null;
  let selectedMode = null;
  let activeQuestions = [];
  let currentIndex = 0;
  let selections = [];
  let completedResult = null;

  function showView(viewName) {
    viewSections.forEach((section) => { section.hidden = section.id !== viewName; });
    navLinks.forEach((link) => {
      const isActive = link.dataset.view === viewName;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (viewName === 'leaderboard') renderLeaderboard();
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      showView(link.dataset.view);
    });
  });
  document.querySelectorAll('[data-go-view]').forEach((button) => {
    button.addEventListener('click', () => showView(button.dataset.goView));
  });

  function clearFieldErrors() {
    [['participant-name', 'name-error'], ['participant-reg', 'reg-error'], ['participant-email', 'email-error']].forEach(([inputId, errorId]) => {
      const input = document.getElementById(inputId);
      input.removeAttribute('aria-invalid');
      document.getElementById(errorId).textContent = '';
    });
    difficultyError.textContent = '';
    difficultyOptions.removeAttribute('aria-invalid');
  }

  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    input.setAttribute('aria-invalid', 'true');
    document.getElementById(errorId).textContent = message;
  }

  function shuffleQuestions(questions) {
    const shuffled = questions.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function buildQuestionSet(mode) {
    if (mode === 'mixed') {
      // Mixed contains every question: exactly 20 from each difficulty, shuffled,
      // with the same one-point value for every correct answer.
      return shuffleQuestions(QUESTIONS);
    }
    const roundIndex = MODE_CONFIG[mode].roundIndex;
    return QUESTIONS.filter((question) => question.roundIndex === roundIndex);
  }

  function questionWeight() {
    return MODE_CONFIG[selectedMode].weight;
  }

  credentialForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFieldErrors();
    const name = document.getElementById('participant-name').value.trim();
    const regNo = document.getElementById('participant-reg').value.trim().toUpperCase();
    const email = document.getElementById('participant-email').value.trim().toLowerCase();
    const selectedDifficulty = credentialForm.querySelector('input[name="difficulty"]:checked');
    let valid = true;

    if (name.length < 2) { setFieldError('participant-name', 'name-error', 'Escribe un nombre de al menos 2 caracteres.'); valid = false; }
    if (regNo.length < 4) { setFieldError('participant-reg', 'reg-error', 'Introduce un número de registro válido.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFieldError('participant-email', 'email-error', 'Introduce un correo electrónico válido.'); valid = false; }
    if (!selectedDifficulty) {
      difficultyError.textContent = 'Selecciona una dificultad antes de empezar.';
      difficultyOptions.setAttribute('aria-invalid', 'true');
      valid = false;
    }
    if (!valid) {
      const firstInvalid = credentialForm.querySelector('[aria-invalid="true"]');
      if (firstInvalid && firstInvalid.matches('input')) firstInvalid.focus();
      else if (!selectedDifficulty) credentialForm.querySelector('input[name="difficulty"]').focus();
      return;
    }

    participant = { name, regNo, email };
    selectedMode = selectedDifficulty.value;
    activeQuestions = buildQuestionSet(selectedMode);
    currentIndex = 0;
    selections = Array(activeQuestions.length).fill(null);
    completedResult = null;
    credentialPanel.hidden = true;
    resultPanel.hidden = true;
    quizStage.hidden = false;
    renderQuestion();
  });

  function renderQuestion() {
    const question = activeQuestions[currentIndex];
    const mode = MODE_CONFIG[selectedMode];
    const weight = questionWeight();
    roundLabel.textContent = mode.topLine;
    questionCount.textContent = `Pregunta ${currentIndex + 1} de ${activeQuestions.length}`;
    document.getElementById('question-kicker').textContent = `PREGUNTA ${String(currentIndex + 1).padStart(2, '0')} · ${question.roundKicker} · ${weight} ${weight === 1 ? 'PUNTO' : 'PUNTOS'}`;
    questionText.textContent = question.q;
    answerOptions.replaceChildren();
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-option' + (selections[currentIndex] === optionIndex ? ' selected' : '');
      button.setAttribute('aria-pressed', selections[currentIndex] === optionIndex ? 'true' : 'false');
      const letter = document.createElement('span');
      letter.className = 'option-letter';
      letter.textContent = String.fromCharCode(65 + optionIndex);
      const label = document.createElement('span');
      label.textContent = option;
      button.append(letter, label);
      button.addEventListener('click', () => {
        selections[currentIndex] = optionIndex;
        answerWarning.hidden = true;
        [...answerOptions.querySelectorAll('.answer-option')].forEach((item, i) => {
          const isSelected = i === optionIndex;
          item.classList.toggle('selected', isSelected);
          item.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        });
      });
      answerOptions.append(button);
    });
    prevButton.disabled = currentIndex === 0;
    nextButton.textContent = currentIndex === activeQuestions.length - 1 ? 'Finalizar quiz ✓' : 'Siguiente →';
    answerWarning.hidden = true;
    progressFill.style.width = `${((currentIndex + 1) / activeQuestions.length) * 100}%`;
    progressTrack.setAttribute('aria-valuemax', String(activeQuestions.length));
    progressTrack.setAttribute('aria-valuenow', String(currentIndex + 1));
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });

  nextButton.addEventListener('click', () => {
    if (selections[currentIndex] === null) {
      answerWarning.hidden = false;
      return;
    }
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  });

  function readScores() {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((entry) => entry && typeof entry.name === 'string' && Number.isFinite(entry.score))
        .map((entry) => {
          // Older quiz records had one point for each correct answer. Treat them as Mixed.
          const mode = Object.prototype.hasOwnProperty.call(MODE_CONFIG, entry.mode) ? entry.mode : 'mixed';
          const total = Number.isFinite(entry.total) ? entry.total : 60;
          const correctCount = Number.isFinite(entry.correctCount) ? entry.correctCount : entry.score;
          const maxScore = Number.isFinite(entry.maxScore) ? entry.maxScore : total;
          const percentage = Number.isFinite(entry.percentage) ? entry.percentage : Math.round((correctCount / total) * 100);
          return { ...entry, mode, total, correctCount, maxScore, percentage, timestamp: Number.isFinite(entry.timestamp) ? entry.timestamp : 0 };
        });
    } catch (error) {
      return [];
    }
  }

  function storeScore(entry) {
    try {
      const scores = readScores();
      scores.push(entry);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
      return true;
    } catch (error) {
      return false;
    }
  }

  function finishQuiz() {
    if (completedResult) return;
    const correctCount = activeQuestions.reduce((total, question, index) => total + (selections[index] === question.answer ? 1 : 0), 0);
    const weight = questionWeight();
    const score = correctCount * weight;
    const total = activeQuestions.length;
    const maxScore = total * weight;
    const percentage = Math.round((correctCount / total) * 100);
    const timestamp = Date.now();
    const mode = MODE_CONFIG[selectedMode];
    const entry = {
      name: participant.name, regNo: participant.regNo, email: participant.email,
      mode: selectedMode, modeLabel: mode.label, weightPerCorrect: weight,
      score, maxScore, correctCount, total, percentage, timestamp
    };
    const saved = storeScore(entry);
    completedResult = { ...entry, saved };

    quizStage.hidden = true;
    resultPanel.hidden = false;
    document.getElementById('score-value').textContent = `${score}/${maxScore}`;
    document.getElementById('correct-count').textContent = `${correctCount} de ${total}`;
    document.getElementById('score-percent').textContent = `${percentage}%`;
    document.getElementById('score-participant').textContent = participant.name;
    document.getElementById('score-mode').textContent = `${mode.label} · ${weight} ${weight === 1 ? 'pto./acierto' : 'ptos./acierto'}`;
    document.getElementById('score-ring').style.setProperty('--score-angle', `${percentage * 3.6}deg`);
    const heading = percentage >= 85 ? '¡Excelente trabajo!' : percentage >= 60 ? '¡Buen trabajo!' : percentage >= 40 ? '¡Sigue aprendiendo!' : '¡Gracias por participar!';
    document.getElementById('result-heading').textContent = heading;
    document.getElementById('result-description').textContent = `Modo ${mode.label}: has respondido correctamente ${correctCount} de ${total} preguntas. Cada acierto vale ${weight} ${weight === 1 ? 'punto' : 'puntos'}.`;
    const saveStatus = document.getElementById('save-status');
    saveStatus.textContent = saved
      ? '✓ Tu resultado se ha guardado en la clasificación de este modo en este navegador. Tus datos no se han enviado a un servidor.'
      : 'No se pudo guardar el resultado en el navegador. Puedes ver tu puntuación aquí, pero no aparecerá en la clasificación guardada.';
    leaderboardModeFilter.value = selectedMode;
    renderLeaderboard();
  }

  function renderLeaderboard() {
    const body = document.getElementById('leaderboard-body');
    const empty = document.getElementById('leaderboard-empty');
    const selectedLeaderboardMode = leaderboardModeFilter.value || 'mixed';
    const mode = MODE_CONFIG[selectedLeaderboardMode] || MODE_CONFIG.mixed;
    body.replaceChildren();
    const scores = readScores()
      .filter((entry) => entry.mode === selectedLeaderboardMode)
      .sort((a, b) => b.score - a.score || b.percentage - a.percentage || a.timestamp - b.timestamp)
      .slice(0, 10);
    empty.hidden = scores.length > 0;
    empty.textContent = `Aún no hay puntuaciones en el modo ${mode.label}. Completa ese modo para aparecer en esta clasificación.`;
    scores.forEach((entry, index) => {
      const row = document.createElement('tr');
      const date = new Date(entry.timestamp);
      const values = [
        index === 0 ? '🥇 1' : index === 1 ? '🥈 2' : index === 2 ? '🥉 3' : String(index + 1),
        entry.name,
        entry.regNo || '—',
        `${entry.score}/${entry.maxScore} pts`,
        `${entry.correctCount}/${entry.total} · ${entry.percentage}%`,
        Number.isNaN(date.getTime()) || entry.timestamp === 0 ? '—' : date.toLocaleDateString('es-ES')
      ];
      values.forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.append(cell);
      });
      body.append(row);
    });
  }

  document.getElementById('refresh-leaderboard').addEventListener('click', renderLeaderboard);
  leaderboardModeFilter.addEventListener('change', renderLeaderboard);
  document.getElementById('try-again').addEventListener('click', () => {
    participant = null;
    selectedMode = null;
    activeQuestions = [];
    currentIndex = 0;
    selections = [];
    completedResult = null;
    credentialForm.reset();
    clearFieldErrors();
    credentialPanel.hidden = false;
    quizStage.hidden = true;
    resultPanel.hidden = true;
    showView('quiz');
  });

  renderLeaderboard();
})();
