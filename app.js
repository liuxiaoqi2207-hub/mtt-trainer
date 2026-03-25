const spots = [
  {
    id: '20bb_btn_open_a9s', module: '20bb Open', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '20bb',
    actionBefore: 'Folded to BTN', heroHand: 'A9s', context: '中期常规局面', tags: ['20bb','BTN','open'],
    options: ['Fold', 'Raise', 'Jam', 'Call'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '20bb BTN 仍应保留小开体系，A9s 属于标准开池，不必直接 jam。'
  },
  {
    id: '15bb_sb_vs_btn_kqs', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'SB', effectiveBb: '15bb',
    actionBefore: 'BTN open 2.2bb', heroHand: 'KQs', context: '中后期，前位弃牌', tags: ['15bb','SB','vs BTN'],
    options: ['Fold', 'Call', 'Jam', 'Raise'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '15bb SB 对 BTN 宽开池，KQs 是高质量 reshove 手牌，平跟反而容易把自己打进难题。'
  },
  {
    id: '30bb_bb_vs_btn_a5o', module: 'BB Defend', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '30bb',
    actionBefore: 'BTN open 2.2bb', heroHand: 'A5o', context: '常规深度', tags: ['30bb','BB','defend'],
    options: ['Fold', 'Call', '3bet', 'Jam'], recommendedAction: 'Call', acceptableActions: ['Call', '3bet'],
    explanation: 'A5o 在 BB 对 BTN 一般具备防守价值，标准线偏 call；部分对手可混少量 3bet。'
  },
  {
    id: '10bb_btn_q9s', module: '10bb Jam', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '10bb',
    actionBefore: 'Folded to BTN', heroHand: 'Q9s', context: '短码阶段', tags: ['10bb','BTN','jam'],
    options: ['Fold', 'Raise', 'Jam', 'Call'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '10bb BTN 以简化策略为主，Q9s 属于足够好的直接推进手牌。'
  },
  {
    id: 'bubble_medium_88', module: 'Bubble ICM', stage: 'ICM', heroPosition: 'HJ', effectiveBb: '18bb',
    actionBefore: 'UTG jam 7bb, Hero next to act', heroHand: '88', context: '还差2人进钱圈，你是中码', tags: ['Bubble','ICM','18bb'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: '泡沫期中码对短码 all-in 不能只看牌力，88 看着不差，但 ICM 下常常该收紧。'
  },
  {
    id: 'ft_bigstack_a4s', module: 'Final Table', stage: 'ICM', heroPosition: 'BTN', effectiveBb: '24bb',
    actionBefore: 'Folded to BTN', heroHand: 'A4s', context: 'FT 7人，Hero 领先筹码', tags: ['FT','BTN','24bb'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: 'FT 大码应扩大压制频率，但仍优先保留小开而不是把优势全变成 jam。'
  },
  {
    id: '20bb_co_open_66', module: '20bb Open', stage: 'Preflop', heroPosition: 'CO', effectiveBb: '20bb',
    actionBefore: 'Folded to CO', heroHand: '66', context: '常规中期', tags: ['20bb','CO','open'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '20bb CO 的 66 仍是标准开池手，不必把所有中等对子都粗暴 jam。'
  },
  {
    id: '15bb_bb_vs_co_ato', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '15bb',
    actionBefore: 'CO open 2.2bb', heroHand: 'ATo', context: '后段盲注压力大', tags: ['15bb','BB','vs CO'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '15bb BB 对 CO 开池，ATo 常常更适合直接 reshove，而不是被动跟注。'
  }
];

const ruleCards = [
  { title: '20bb 核心规则', items: ['优先保留小开体系，不乱 jam。', '中等强度牌先分 open / call-off / fold。', '面对宽开池，优先考虑 reshove 而不是尴尬平跟。'] },
  { title: '15bb 核心规则', items: ['很多边缘 spot 要简化成 jam/fold。', 'SB / BB 对偷盲位是最值钱 spot。', '别拿“看着还行”的牌去平跟把自己打残。'] },
  { title: 'BB Defend', items: ['BB vs BTN 可以更宽 defend。', 'BB vs CO 要明显收紧。', 'Axo、小 suited、连子看位置和深度决定 defend。'] },
  { title: 'Bubble', items: ['大码压中码，中码慎碰覆盖你的大码。', '短码别盲等，先找自然 jam 点。', '看牌力不够，要看淘汰风险。'] },
  { title: 'FT', items: ['大码扩大施压，但别乱把优势变 coinflip。', '中码最怕被覆盖时乱拼。', 'pay jump 越大，边缘 call 越该收。'] }
];

const storageKey = 'mttTrainerStateV1';
const defaultState = { total: 0, correct: 0, today: {}, mistakes: [], modules: {} };
let state = loadState();
let currentSpot = null;

function loadState() {
  try { return { ...defaultState, ...JSON.parse(localStorage.getItem(storageKey) || '{}') }; }
  catch { return structuredClone(defaultState); }
}
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }
function todayKey() { return new Date().toISOString().slice(0,10); }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function qs(id) { return document.getElementById(id); }

function initTabs() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      qs(btn.dataset.tab + 'Panel').classList.add('active');
      renderAll();
    });
  });
}

function initModules() {
  const modules = ['全部题目', ...new Set(spots.map(s => s.module))];
  qs('moduleSelect').innerHTML = modules.map(m => `<option value="${m}">${m}</option>`).join('');
}

function pickSpot() {
  const module = qs('moduleSelect').value;
  const pool = module === '全部题目' ? spots : spots.filter(s => s.module === module);
  currentSpot = shuffle(pool)[0];
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
  qs('answers').querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => answerSpot(btn.dataset.action)));
  qs('feedbackBox').classList.add('hidden');
}

function answerSpot(action) {
  const correct = currentSpot.acceptableActions.includes(action);
  state.total += 1;
  state.correct += correct ? 1 : 0;
  const today = todayKey();
  state.today[today] = (state.today[today] || 0) + 1;
  state.modules[currentSpot.module] ||= { total: 0, correct: 0 };
  state.modules[currentSpot.module].total += 1;
  state.modules[currentSpot.module].correct += correct ? 1 : 0;
  if (!correct) {
    const exists = state.mistakes.some(x => x.id === currentSpot.id);
    if (!exists) state.mistakes.unshift(currentSpot);
  }
  saveState();

  const box = qs('feedbackBox');
  box.className = `feedback ${correct ? 'ok' : 'bad'}`;
  qs('feedbackTitle').textContent = correct ? '答对了' : '这题错了';
  qs('recommendedAction').textContent = currentSpot.recommendedAction;
  qs('explanation').textContent = currentSpot.explanation;
  qs('acceptableActions').textContent = currentSpot.acceptableActions.join(' / ');
  box.classList.remove('hidden');
  renderStats();
}

function renderMistakes() {
  const wrap = qs('mistakesList');
  if (!state.mistakes.length) {
    wrap.innerHTML = '<div class="item"><h4>目前没有错题</h4><p>继续刷题，把错题沉淀出来。</p></div>';
    return;
  }
  wrap.innerHTML = state.mistakes.map(m => `
    <div class="item">
      <h4>${m.module} ｜ ${m.heroPosition} ｜ ${m.heroHand}</h4>
      <p><strong>局面：</strong>${m.actionBefore} ｜ ${m.effectiveBb} ｜ ${m.context}</p>
      <p><strong>推荐动作：</strong>${m.recommendedAction}</p>
      <p><strong>原因：</strong>${m.explanation}</p>
    </div>`).join('');
}

function renderCards() {
  qs('ruleCards').innerHTML = ruleCards.map(c => `
    <div class="card">
      <h3>${c.title}</h3>
      <ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
}

function renderStats() {
  qs('todayStats').textContent = `今日 ${state.today[todayKey()] || 0} 题`;
  qs('statTotal').textContent = state.total;
  qs('statAccuracy').textContent = state.total ? `${Math.round((state.correct / state.total) * 100)}%` : '0%';
  qs('statMistakes').textContent = state.mistakes.length;
  const weakest = Object.entries(state.modules)
    .filter(([,v]) => v.total > 0)
    .map(([k,v]) => ({ k, acc: v.correct / v.total }))
    .sort((a,b) => a.acc - b.acc)[0];
  qs('statWeakest').textContent = weakest ? weakest.k : '-';

  const rows = Object.entries(state.modules).map(([k,v]) => {
    const acc = v.total ? Math.round((v.correct / v.total) * 100) : 0;
    return `<div class="item"><h4>${k}</h4><p>总题数：${v.total} ｜ 正确率：${acc}%</p></div>`;
  });
  qs('moduleBreakdown').innerHTML = rows.length ? rows.join('') : '<div class="item"><p>还没有模块统计。</p></div>';
}

function renderAll() {
  renderMistakes();
  renderCards();
  renderStats();
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initModules();
  qs('nextSpotBtn').addEventListener('click', pickSpot);
  qs('moduleSelect').addEventListener('change', pickSpot);
  qs('clearMistakesBtn').addEventListener('click', () => {
    state.mistakes = []; saveState(); renderMistakes(); renderStats();
  });
  renderAll();
  pickSpot();
});