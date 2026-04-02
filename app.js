const storageKey = 'mtt-trainer-v2';
const data = window.TRAINER_DATA || { allHands: [], spots: [], viewerRanges: {}, viewerMeta: {}, ruleCards: [] };
const allHands = data.allHands;
const spots = data.spots;
const viewerRanges = data.viewerRanges;
const viewerMeta = data.viewerMeta;
const ruleCards = data.ruleCards;

const defaultState = { total: 0, correct: 0, today: {}, mistakes: [], modules: {} };
let state = loadState();
let currentSpot = null;

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey) || '{}') };
  } catch {
    return JSON.parse(JSON.stringify(defaultState));
  }
}
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function todayKey() { return new Date().toISOString().slice(0, 10); }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function qs(id) { return document.getElementById(id); }
function qsa(sel) { return document.querySelectorAll(sel); }

function initTabs() {
  qsa('.tab').forEach(btn => btn.addEventListener('click', () => {
    qsa('.tab').forEach(x => x.classList.remove('active'));
    qsa('.panel').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    qs(btn.dataset.tab + 'Panel').classList.add('active');
    renderAll();
  }));
}

function initModules() {
  const modules = ['全部题目', '只刷错题', ...new Set(spots.map(s => s.module))];
  qs('moduleSelect').innerHTML = modules.map(m => `<option value="${m}">${m}</option>`).join('');
}

function getPool() {
  const module = qs('moduleSelect').value;
  if (module === '全部题目') return spots;
  if (module === '只刷错题') return state.mistakes.length ? state.mistakes : spots.slice(0, 50);
  return spots.filter(s => s.module === module);
}

function pickSpot() {
  const pool = getPool();
  currentSpot = shuffle(pool)[0] || null;
  renderSpot();
}

function renderSpot() {
  if (!currentSpot) return;
  qs('spotModule').textContent = currentSpot.module;
  qs('spotStage').textContent = currentSpot.stage;
  qs('heroPosition').textContent = currentSpot.heroPosition;
  qs('effectiveBb').textContent = currentSpot.effectiveBb;
  qs('actionBefore').textContent = currentSpot.actionBefore;
  qs('heroHand').textContent = currentSpot.heroHand;
  qs('spotContext').textContent = currentSpot.context;
  qs('spotTags').textContent = currentSpot.tags.join(' / ');
  qs('answers').innerHTML = currentSpot.options.map(opt => `<button data-action="${opt}">${opt}</button>`).join('');
  qsa('#answers button').forEach(btn => btn.addEventListener('click', () => answerSpot(btn.dataset.action)));
  qs('feedbackBox').className = 'feedback hidden';
}

function answerSpot(action) {
  if (!currentSpot) return;
  const correct = currentSpot.acceptableActions.includes(action);
  state.total += 1;
  state.correct += correct ? 1 : 0;
  const today = todayKey();
  state.today[today] = (state.today[today] || 0) + 1;
  state.modules[currentSpot.module] ||= { total: 0, correct: 0 };
  state.modules[currentSpot.module].total += 1;
  state.modules[currentSpot.module].correct += correct ? 1 : 0;
  if (!correct) {
    if (!state.mistakes.some(x => x.id === currentSpot.id)) state.mistakes.unshift(currentSpot);
  } else {
    state.mistakes = state.mistakes.filter(x => x.id !== currentSpot.id);
  }
  saveState();
  const box = qs('feedbackBox');
  box.className = `feedback ${correct ? 'ok' : 'bad'}`;
  qs('feedbackTitle').textContent = correct ? '答对了' : '这题错了';
  qs('recommendedAction').textContent = currentSpot.recommendedAction;
  qs('explanation').textContent = currentSpot.explanation;
  qs('acceptableActions').textContent = currentSpot.acceptableActions.join(' / ');
  renderStats();
  renderMistakes();
}

function buildCellBackground(freq) {
  const parts = [];
  let start = 0;
  const order = [
    ['Raise', '#16a34a'],
    ['Call', '#2563eb'],
    ['Jam', '#dc2626'],
    ['Fold', '#475569'],
  ];
  order.forEach(([name, color]) => {
    const val = Math.max(0, Number(freq?.[name] || 0));
    if (val <= 0) return;
    parts.push(`${color} ${start}% ${start + val}%`);
    start += val;
  });
  return parts.length ? `linear-gradient(135deg, ${parts.join(', ')})` : '#111827';
}

function spotText(freq) {
  return ['Fold', 'Call', 'Raise', 'Jam'].map(name => `${name} ${Number(freq?.[name] || 0).toFixed(1)}%`).join(' / ');
}

function populateViewerPositions() {
  const stack = qs('viewerStack').value;
  const positions = viewerMeta[stack]?.positions || [];
  const select = qs('viewerPosition');
  const prev = select.value;
  select.innerHTML = positions.map(p => `<option value="${p}">${p}</option>`).join('');
  select.value = positions.includes(prev) ? prev : (positions[0] || '');
}

function populateViewerScenarios() {
  const stack = qs('viewerStack').value;
  const pos = qs('viewerPosition').value;
  const entries = viewerRanges[stack]?.[pos] || {};
  const options = Object.keys(entries);
  const select = qs('viewerScenario');
  const prev = select.value;
  select.innerHTML = options.map(id => `<option value="${id}">${id}</option>`).join('');
  select.value = options.includes(prev) ? prev : (options[0] || '');
}

function renderViewer() {
  populateViewerPositions();
  populateViewerScenarios();
  const stack = qs('viewerStack').value;
  const pos = qs('viewerPosition').value;
  const scenario = qs('viewerScenario').value;
  const cfg = viewerRanges[stack]?.[pos]?.[scenario];
  qs('rangeTitle').textContent = `${stack} / ${pos}` + (cfg ? ` / ${cfg.category}` : '');
  qs('rangeSummary').textContent = cfg?.summary || '暂无数据';
  const grid = qs('rangeGrid');
  if (!grid) return;
  grid.innerHTML = '';
  allHands.forEach(hand => {
    const freq = cfg?.frequencies?.[hand] || { Fold: 100, Call: 0, Raise: 0, Jam: 0 };
    const el = document.createElement('button');
    el.className = 'range-cell';
    el.style.background = buildCellBackground(freq);
    el.innerHTML = `<span class="cell-top">${hand}</span>`;
    el.addEventListener('click', () => {
      qs('cellDetail').innerHTML = `<strong style="font-size:18px">${hand}</strong><br><span style="color:#eef4ff;font-weight:700">${spotText(freq)}</span><br><span style="color:#95a1c9">${cfg?.actionBefore || ''}</span>`;
    });
    grid.appendChild(el);
  });
}

function renderMistakes() {
  const root = qs('mistakesList');
  if (!root) return;
  if (!state.mistakes.length) {
    root.innerHTML = '<div class="item">还没有错题，继续刷。</div>';
    return;
  }
  root.innerHTML = state.mistakes.slice(0, 100).map(s => `<div class="item"><strong>${s.effectiveBb} / ${s.heroPosition} / ${s.heroHand}</strong><p>${s.actionBefore}</p><p>${s.recommendedAction} · ${s.explanation}</p></div>`).join('');
}

function renderCards() {
  const root = qs('ruleCards');
  if (!root) return;
  root.innerHTML = ruleCards.map(card => `<article class="item"><h4>${card.title}</h4><p>${card.body}</p></article>`).join('');
}

function renderStats() {
  qs('todayStats').textContent = `今日 ${state.today[todayKey()] || 0} 题`;
  qs('statTotal').textContent = String(state.total || 0);
  const acc = state.total ? ((state.correct / state.total) * 100).toFixed(1) : '0.0';
  qs('statAccuracy').textContent = `${acc}%`;
  qs('statMistakes').textContent = String(state.mistakes.length || 0);
  const breakdown = Object.entries(state.modules).sort((a, b) => {
    const aa = a[1].total ? a[1].correct / a[1].total : 0;
    const bb = b[1].total ? b[1].correct / b[1].total : 0;
    return aa - bb;
  });
  qs('statWeakest').textContent = breakdown[0]?.[0] || '-';
  qs('moduleBreakdown').innerHTML = breakdown.length
    ? breakdown.map(([name, stat]) => {
        const rate = stat.total ? ((stat.correct / stat.total) * 100).toFixed(1) : '0.0';
        return `<div class="item"><strong>${name}</strong><span>${stat.correct}/${stat.total} · ${rate}%</span></div>`;
      }).join('')
    : '<div class="item">还没有统计。</div>';
}

function renderAll() {
  renderMistakes();
  renderCards();
  renderStats();
  renderViewer();
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initModules();
  qs('nextSpotBtn').addEventListener('click', pickSpot);
  qs('moduleSelect').addEventListener('change', pickSpot);
  qs('clearMistakesBtn').addEventListener('click', () => {
    state.mistakes = [];
    saveState();
    renderMistakes();
    renderStats();
  });
  qs('viewerStack').addEventListener('change', renderViewer);
  qs('viewerPosition').addEventListener('change', renderViewer);
  qs('viewerScenario').addEventListener('change', renderViewer);
  renderAll();
  pickSpot();
});
