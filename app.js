const spots = [
  // 20bb Open
  {
    id: '20bb_btn_open_a9s', module: '20bb Open', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '20bb',
    actionBefore: 'Folded to BTN', heroHand: 'A9s', context: '中期常规局面', tags: ['20bb','BTN','open'],
    options: ['Fold', 'Raise', 'Jam', 'Call'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '20bb BTN 仍应保留小开体系，A9s 属于标准开池，不必直接 jam。'
  },
  {
    id: '20bb_co_open_66', module: '20bb Open', stage: 'Preflop', heroPosition: 'CO', effectiveBb: '20bb',
    actionBefore: 'Folded to CO', heroHand: '66', context: '常规中期', tags: ['20bb','CO','open'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '20bb CO 的 66 仍是标准开池手，不必把所有中等对子都粗暴 jam。'
  },
  {
    id: '20bb_hj_open_kjo', module: '20bb Open', stage: 'Preflop', heroPosition: 'HJ', effectiveBb: '20bb',
    actionBefore: 'Folded to HJ', heroHand: 'KJo', context: '中期 9人桌', tags: ['20bb','HJ','open'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '20bb HJ 的 KJo 仍在常规开池范围内，保留小开优于简单 jam/fold。'
  },
  {
    id: '20bb_btn_open_k7o', module: '20bb Open', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '20bb',
    actionBefore: 'Folded to BTN', heroHand: 'K7o', context: '偷盲环境一般', tags: ['20bb','BTN','open'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: 'BTN 20bb 可适度扩大 open 频率，K7o 在多数常规局面对偷盲仍可小开。'
  },
  {
    id: '20bb_co_open_a2o', module: '20bb Open', stage: 'Preflop', heroPosition: 'CO', effectiveBb: '20bb',
    actionBefore: 'Folded to CO', heroHand: 'A2o', context: '常规局面', tags: ['20bb','CO','open'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: '20bb CO 的 A2o 太接近底部，贸然开池容易被后位反制。'
  },

  // 15bb Reshove
  {
    id: '15bb_sb_vs_btn_kqs', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'SB', effectiveBb: '15bb',
    actionBefore: 'BTN open 2.2bb', heroHand: 'KQs', context: '中后期，前位弃牌', tags: ['15bb','SB','vs BTN'],
    options: ['Fold', 'Call', 'Jam', 'Raise'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '15bb SB 对 BTN 宽开池，KQs 是高质量 reshove 手牌，平跟反而容易把自己打进难题。'
  },
  {
    id: '15bb_bb_vs_co_ato', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '15bb',
    actionBefore: 'CO open 2.2bb', heroHand: 'ATo', context: '后段盲注压力大', tags: ['15bb','BB','vs CO'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '15bb BB 对 CO 开池，ATo 常常更适合直接 reshove，而不是被动跟注。'
  },
  {
    id: '15bb_btn_vs_hj_77', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '15bb',
    actionBefore: 'HJ open 2.2bb', heroHand: '77', context: '中后期', tags: ['15bb','BTN','vs HJ'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '15bb 面对前位 open，77 这类中对通常更适合用 reshove 获取弃牌率和摊牌价值。'
  },
  {
    id: '15bb_sb_vs_co_a5s', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'SB', effectiveBb: '15bb',
    actionBefore: 'CO open 2.2bb', heroHand: 'A5s', context: '常规局面', tags: ['15bb','SB','vs CO'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: 'A5s 具备阻断效应和摊牌补充价值，是典型的 15bb reshove 候选。'
  },
  {
    id: '15bb_bb_vs_btn_kto', module: '15bb Reshove', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '15bb',
    actionBefore: 'BTN open 2.1bb', heroHand: 'KTo', context: '偷盲位宽开', tags: ['15bb','BB','vs BTN'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: 'BTN 范围宽，KTo 在 15bb BB 位置更适合直接推，避免翻后 OOP 被压制。'
  },

  // BB Defend
  {
    id: '30bb_bb_vs_btn_a5o', module: 'BB Defend', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '30bb',
    actionBefore: 'BTN open 2.2bb', heroHand: 'A5o', context: '常规深度', tags: ['30bb','BB','defend'],
    options: ['Fold', 'Call', '3bet', 'Jam'], recommendedAction: 'Call', acceptableActions: ['Call', '3bet'],
    explanation: 'A5o 在 BB 对 BTN 一般具备防守价值，标准线偏 call；部分对手可混少量 3bet。'
  },
  {
    id: '30bb_bb_vs_btn_j7s', module: 'BB Defend', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '30bb',
    actionBefore: 'BTN open 2.2bb', heroHand: 'J7s', context: '常规深度', tags: ['30bb','BB','defend'],
    options: ['Fold', 'Call', '3bet'], recommendedAction: 'Call', acceptableActions: ['Call'],
    explanation: 'J7s 对 BTN 宽开池有足够实现率，标准偏向 defend。'
  },
  {
    id: '30bb_bb_vs_co_k8o', module: 'BB Defend', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '30bb',
    actionBefore: 'CO open 2.2bb', heroHand: 'K8o', context: '位置较前', tags: ['30bb','BB','vs CO'],
    options: ['Fold', 'Call', '3bet'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: 'CO 范围较 BTN 收紧，K8o OOP defend 容易亏实现率，标准可弃。'
  },
  {
    id: '30bb_bb_vs_btn_54s', module: 'BB Defend', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '30bb',
    actionBefore: 'BTN open 2bb', heroHand: '54s', context: '深度允许实现率', tags: ['30bb','BB','vs BTN'],
    options: ['Fold', 'Call', '3bet'], recommendedAction: 'Call', acceptableActions: ['Call'],
    explanation: '小同连在 BB 对 BTN 是典型 defend 组合，具备翻后实现率。'
  },
  {
    id: '30bb_bb_vs_co_q5s', module: 'BB Defend', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '30bb',
    actionBefore: 'CO open 2.3bb', heroHand: 'Q5s', context: '中期常规', tags: ['30bb','BB','vs CO'],
    options: ['Fold', 'Call', '3bet'], recommendedAction: 'Call', acceptableActions: ['Call'],
    explanation: 'Q5s 在 CO 对位里仍有 defend 价值，但比对 BTN 更接近边缘。'
  },

  // 10bb Jam
  {
    id: '10bb_btn_q9s', module: '10bb Jam', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '10bb',
    actionBefore: 'Folded to BTN', heroHand: 'Q9s', context: '短码阶段', tags: ['10bb','BTN','jam'],
    options: ['Fold', 'Raise', 'Jam', 'Call'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '10bb BTN 以简化策略为主，Q9s 属于足够好的直接推进手牌。'
  },
  {
    id: '10bb_sb_k6s', module: '10bb Jam', stage: 'Preflop', heroPosition: 'SB', effectiveBb: '10bb',
    actionBefore: 'Folded to SB', heroHand: 'K6s', context: '只剩 BB', tags: ['10bb','SB','jam'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '10bb SB 对 BB 应采用非常简化的推弃体系，K6s 是清晰的 jam。'
  },
  {
    id: '10bb_btn_a2o', module: '10bb Jam', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '10bb',
    actionBefore: 'Folded to BTN', heroHand: 'A2o', context: '短码偷盲', tags: ['10bb','BTN','jam'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '10bb BTN 的弱 Ax 以直接 jam 为主，利用弃牌率和摊牌权益。'
  },
  {
    id: '10bb_co_k9o', module: '10bb Jam', stage: 'Preflop', heroPosition: 'CO', effectiveBb: '10bb',
    actionBefore: 'Folded to CO', heroHand: 'K9o', context: '6-max 近似场景', tags: ['10bb','CO','jam'],
    options: ['Fold', 'Jam', 'Raise'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '10bb CO 已接近推弃阶段，K9o 通常直接 jam 优于小开。'
  },
  {
    id: '10bb_btn_t7o', module: '10bb Jam', stage: 'Preflop', heroPosition: 'BTN', effectiveBb: '10bb',
    actionBefore: 'Folded to BTN', heroHand: 'T7o', context: '短码边缘手', tags: ['10bb','BTN','jam'],
    options: ['Fold', 'Jam', 'Raise'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: 'T7o 在 10bb BTN 边缘偏下，特别是对跟注倾向高的池子，弃牌更稳。'
  },

  // Bubble ICM
  {
    id: 'bubble_medium_88', module: 'Bubble ICM', stage: 'ICM', heroPosition: 'HJ', effectiveBb: '18bb',
    actionBefore: 'UTG jam 7bb, Hero next to act', heroHand: '88', context: '还差2人进钱圈，你是中码', tags: ['Bubble','ICM','18bb'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: '泡沫期中码对短码 all-in 不能只看牌力，88 看着不差，但 ICM 下常常该收紧。'
  },
  {
    id: 'bubble_bigstack_k9s', module: 'Bubble ICM', stage: 'ICM', heroPosition: 'BTN', effectiveBb: '28bb',
    actionBefore: 'Folded to BTN', heroHand: 'K9s', context: '还差1人进钱圈，你是大码', tags: ['Bubble','BTN','bigstack'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '泡沫期大码应提高施压频率，K9s 在 BTN 是很好的小开压制手。'
  },
  {
    id: 'bubble_short_a8o', module: 'Bubble ICM', stage: 'ICM', heroPosition: 'CO', effectiveBb: '8bb',
    actionBefore: 'Folded to CO', heroHand: 'A8o', context: '还差1人进钱圈，你是短码', tags: ['Bubble','CO','short'],
    options: ['Fold', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '泡沫期短码不能一味等别人死，A8o 已经是清楚的主动抢盲点。'
  },
  {
    id: 'bubble_medium_aqo', module: 'Bubble ICM', stage: 'ICM', heroPosition: 'BTN', effectiveBb: '22bb',
    actionBefore: 'UTG jam 6bb, folds to Hero', heroHand: 'AQo', context: '还差2人进钱圈，你后面有两个大码', tags: ['Bubble','AQo','medium'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: 'AQo 牌力很强，但泡沫期中码最怕和短码碰撞后被后面大码覆盖，需大幅收紧。'
  },
  {
    id: 'bubble_bigstack_j8s', module: 'Bubble ICM', stage: 'ICM', heroPosition: 'CO', effectiveBb: '35bb',
    actionBefore: 'Folded to CO', heroHand: 'J8s', context: '还差2人进钱圈，你桌上覆盖大多数人', tags: ['Bubble','CO','pressure'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '泡沫大码对中短码有显著施压空间，J8s 在 CO 可扩大 open。'
  },

  // Final Table
  {
    id: 'ft_bigstack_a4s', module: 'Final Table', stage: 'ICM', heroPosition: 'BTN', effectiveBb: '24bb',
    actionBefore: 'Folded to BTN', heroHand: 'A4s', context: 'FT 7人，Hero 领先筹码', tags: ['FT','BTN','24bb'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: 'FT 大码应扩大压制频率，但仍优先保留小开而不是把优势全变成 jam。'
  },
  {
    id: 'ft_medium_99', module: 'Final Table', stage: 'ICM', heroPosition: 'CO', effectiveBb: '16bb',
    actionBefore: 'UTG jam 7bb, folds to Hero', heroHand: '99', context: 'FT 6人，你是中码，后面有两个短码', tags: ['FT','middle','99'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Fold', acceptableActions: ['Fold'],
    explanation: 'FT pay jump 下，中码面对短码 all-in 不能简单按 chipEV 跟，尤其身后还有更短码。'
  },
  {
    id: 'ft_bigstack_qts', module: 'Final Table', stage: 'ICM', heroPosition: 'SB', effectiveBb: '30bb',
    actionBefore: 'Folded to SB', heroHand: 'QTs', context: 'FT 5人，你覆盖 BB', tags: ['FT','SB','bigstack'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: 'FT 大码 blind vs blind 应持续施压，但保持 raise 体系优于过度 jam。'
  },
  {
    id: 'ft_short_kjo', module: 'Final Table', stage: 'ICM', heroPosition: 'BTN', effectiveBb: '9bb',
    actionBefore: 'Folded to BTN', heroHand: 'KJo', context: 'FT 4人，你是最短码', tags: ['FT','short','9bb'],
    options: ['Fold', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: 'FT 最短码不能过度等 ladder，KJo 已是明确的主动推进手。'
  },
  {
    id: 'ft_medium_ajs', module: 'Final Table', stage: 'ICM', heroPosition: 'BB', effectiveBb: '18bb',
    actionBefore: 'BTN jam 10bb, SB fold', heroHand: 'AJs', context: 'FT 6人，你和BTN都非最短码', tags: ['FT','calloff','AJs'],
    options: ['Fold', 'Call'], recommendedAction: 'Call', acceptableActions: ['Call'],
    explanation: 'AJs 面对较宽 BTN 推进在 FT 仍具足够跟注强度，不宜过度惧怕 pay jump。'
  },

  // Asia Online Series
  {
    id: 'asia_series_20bb_multitable', module: 'Asia Series Mode', stage: 'Preflop', heroPosition: 'SB', effectiveBb: '20bb',
    actionBefore: 'BTN open 2.1bb, 你同时开4桌', heroHand: 'AJo', context: '亚洲线上系列赛多桌决策', tags: ['Asia Series','20bb','SB'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '线上多桌环境更需要简化体系，AJo 在 20bb SB 对 BTN open 多数直接 reshove。'
  },
  {
    id: 'asia_series_bb_vs_btn_k9s', module: 'Asia Series Mode', stage: 'Preflop', heroPosition: 'BB', effectiveBb: '22bb',
    actionBefore: 'BTN open 2.2bb, 线上系列赛中期', heroHand: 'K9s', context: '节奏快，决策要简化', tags: ['Asia Series','BB','vs BTN'],
    options: ['Fold', 'Call', 'Jam'], recommendedAction: 'Call', acceptableActions: ['Call'],
    explanation: '线上系列赛里，K9s 作为 BB defend 很常见，直接 call 保留实现率即可。'
  },
  {
    id: 'asia_series_bubble_a5s', module: 'Asia Series Mode', stage: 'ICM', heroPosition: 'BTN', effectiveBb: '19bb',
    actionBefore: 'Folded to BTN, 距离钱圈还差1人', heroHand: 'A5s', context: '中码偏上，可压盲', tags: ['Asia Series','Bubble','BTN'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '线上系列赛泡沫的中大码压制很值钱，A5s 在 BTN 以 raise 持续施压。'
  },
  {
    id: 'asia_series_10bb_sb_q8s', module: 'Asia Series Mode', stage: 'Preflop', heroPosition: 'SB', effectiveBb: '10bb',
    actionBefore: 'Folded to SB, BB偏紧', heroHand: 'Q8s', context: '系列赛后段短码', tags: ['Asia Series','10bb','SB'],
    options: ['Fold', 'Jam', 'Raise'], recommendedAction: 'Jam', acceptableActions: ['Jam'],
    explanation: '10bb SB 线上节奏快，不该保留复杂树，Q8s 直接 jam。'
  },
  {
    id: 'asia_series_ft_kts', module: 'Asia Series Mode', stage: 'ICM', heroPosition: 'CO', effectiveBb: '21bb',
    actionBefore: 'FT 7人，Folded to CO', heroHand: 'KTs', context: '线上系列赛决赛桌', tags: ['Asia Series','FT','CO'],
    options: ['Fold', 'Raise', 'Jam'], recommendedAction: 'Raise', acceptableActions: ['Raise'],
    explanation: '线上 FT 仍要维持可执行的开池体系，KTs 在 CO 不需要一刀切 jam。'
  }
];

const ruleCards = [
  { title: '20bb 核心规则', items: ['优先保留小开体系，不乱 jam。', '中等强度牌先分 open / call-off / fold。', '面对宽开池，优先考虑 reshove 而不是尴尬平跟。'] },
  { title: '15bb 核心规则', items: ['很多边缘 spot 要简化成 jam/fold。', 'SB / BB 对偷盲位是最值钱 spot。', '别拿“看着还行”的牌去平跟把自己打残。'] },
  { title: 'BB Defend', items: ['BB vs BTN 可以更宽 defend。', 'BB vs CO 要明显收紧。', 'Axo、小 suited、连子看位置和深度决定 defend。'] },
  { title: 'Bubble', items: ['大码压中码，中码慎碰覆盖你的大码。', '短码别盲等，先找自然 jam 点。', '看牌力不够，要看淘汰风险。'] },
  { title: 'FT', items: ['大码扩大施压，但别乱把优势变 coinflip。', '中码最怕被覆盖时乱拼。', 'pay jump 越大，边缘 call 越该收。'] },
  { title: '亚洲线上系列赛', items: ['多桌时优先简化，不追求花活。', '20bb/15bb 翻前要接近条件反射。', '赛程选择本身就是技术，别乱报全赛程。'] }
];

const storageKey = 'mttTrainerStateV2';
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
  qsa('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      qsa('.tab').forEach(x => x.classList.remove('active'));
      qsa('.panel').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      qs(btn.dataset.tab + 'Panel').classList.add('active');
      renderAll();
    });
  });
}

function initModules() {
  const modules = ['全部题目', '只刷错题', ...new Set(spots.map(s => s.module))];
  qs('moduleSelect').innerHTML = modules.map(m => `<option value="${m}">${m}</option>`).join('');
}

function getPool() {
  const module = qs('moduleSelect').value;
  if (module === '全部题目') return spots;
  if (module === '只刷错题') return state.mistakes.length ? state.mistakes : spots.slice(0, 5);
  return spots.filter(s => s.module === module);
}

function pickSpot() {
  const pool = getPool();
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
  qsa('#answers button').forEach(btn => btn.addEventListener('click', () => answerSpot(btn.dataset.action)));
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
  box.classList.remove('hidden');
  renderStats();
  renderMistakes();
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
    .filter(([, v]) => v.total > 0)
    .map(([k, v]) => ({ k, acc: v.correct / v.total }))
    .sort((a, b) => a.acc - b.acc)[0];
  qs('statWeakest').textContent = weakest ? weakest.k : '-';

  const rows = Object.entries(state.modules)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([k, v]) => {
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
    state.mistakes = [];
    saveState();
    renderMistakes();
    renderStats();
  });
  renderAll();
  pickSpot();
});