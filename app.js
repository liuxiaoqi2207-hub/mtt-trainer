const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
const allHands = (() => {
  const out = [];
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      if (i === j) out.push(ranks[i] + ranks[j]);
      else if (i < j) out.push(ranks[i] + ranks[j] + 's');
      else out.push(ranks[j] + ranks[i] + 'o');
    }
  }
  return out;
})();

const viewerRanges = {
  '20bb': {
    UTG: {
      summary: '20bb UTG（公开资料校验版）：前位最紧，核心是中高对子、强 Ax、强 broadway；低 offsuit Ax 和小连子先别乱放。',
      open: ['66','77','88','99','TT','JJ','QQ','KK','AA','A4s','A5s','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KQs'],
      mix: ['55','A7s','KJs','QJs']
    },
    LJ: {
      summary: '20bb LJ（公开资料校验版）：比 UTG 稍宽，开始允许更多 suited Ax 和少量 broadway / 连通牌，但仍不能太松。',
      open: ['55','66','77','88','99','TT','JJ','QQ','KK','AA','A3s','A4s','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','A9o','ATo','AJo','AQo','AKo','KJs','KQs','QJs'],
      mix: ['KTo','QJo','98s','JTs']
    },
    HJ: {
      summary: '20bb HJ（公开资料校验版）：前位到中位过渡，低 Axo 仍偏紧；高张 broadway 比很多人想的更能开。',
      open: ['55','66','77','88','99','TT','JJ','QQ','KK','AA','A2s','A3s','A4s','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','A8o','A9o','ATo','AJo','AQo','AKo','KTo','KJs','KQs','QJs'],
      mix: ['87s','KTs','QTs','JTs']
    },
    CO: {
      summary: '20bb CO（公开资料校验版）：比 HJ 明显放宽，A5o+、更多 suited Kx/Qx、以及部分 offsuit broadway 开始稳定进入。',
      open: ['44','55','66','77','88','99','TT','JJ','QQ','KK','AA','A2s','A3s','A4s','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','A5o','A6o','A7o','A8o','A9o','ATo','AJo','AQo','AKo','K9s','KTs','KJs','KQs','KTo','KQo','QJs','QTs','QTo','JTs','JTo','T9s','98s'],
      mix: ['K8s','Q9s','Q9o','T8s','87s','76s']
    },
    BTN: {
      summary: 'BTN 20bb（公开资料校验版）：按钮位应明显宽开，但仍保留结构，不把 any two suited 当标准。',
      open: ['22','33','44','55','66','77','88','99','TT','JJ','QQ','KK','AA','A2s','A3s','A4s','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','A2o','A3o','A4o','A5o','A6o','A7o','A8o','A9o','ATo','AJo','AQo','AKo','K5s','K6s','K7s','K8s','K9s','KTs','KJs','KQs','K8o','KTo','KJo','KQo','Q8s','Q9s','QTs','QJs','Q8o','QTo','J8s','J9s','JTs','JTo','T8s','T9s','97s','98s','87s','86s','76s','75s','65s','54s'],
      mix: ['K7o','Q7s','J7s','T7s','64s','53s']
    },
    SB: {
      summary: '20bb SB（公开资料校验版）：SB 不是普通 RFI 位，理论常含 limp 体系；这里先展示可直接主动进攻的价值段，别把它当 BTN 宽偷。',
      open: ['66','77','88','99','TT','JJ','QQ','KK','AA','A2s','A3s','A4s','A5s','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KJs','KQs'],
      mix: ['55','A6s','A7s','KTs','QJs','QTs']
    }
  },
  '15bb': {
    UTG: {
      summary: '15bb 前位：别装，明显价值牌再动。',
      open: ['77','88','99','TT','JJ','QQ','KK','AA','AJs','AQs','AKs','AQo','AKo','KQs'],
      mix: ['66','ATs','AJo']
    },
    HJ: {
      summary: '15bb HJ：比前位宽一点，但仍偏 blocker 和高张。',
      open: ['55','66','77','88','99','TT','JJ','QQ','KK','AA','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KTs','KJs','KQs','QJs'],
      mix: ['44','A4s','QTs','JTs']
    },
    CO: {
      summary: '15bb CO：开始能打 blocker 和高张，但别再迷恋小花连子。',
      open: ['55','66','77','88','99','TT','JJ','QQ','KK','AA','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KTs','KJs','KQs','KQo','QJs'],
      mix: ['44','A2s','A3s','A4s','QTs','JTs']
    },
    BTN: {
      summary: 'BTN 15bb：宽，但更像短筹攻击，不是深筹玩花样。',
      open: ['22','33','44','55','66','77','88','99','TT','JJ','QQ','KK','AA','A2s','A3s','A4s','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','A2o','A3o','A4o','A5o','A6o','A7o','A8o','A9o','ATo','AJo','AQo','AKo','K7s','K8s','K9s','KTs','KJs','KQs','K9o','KTo','KJo','KQo','Q8s','Q9s','QTs','QJs','QTo','J8s','J9s','JTs','JTo','T8s','T9s','98s','87s'],
      mix: ['K5s','K6s','Q7s','J7s','T7s','76s','65s']
    },
    SB: {
      summary: '15bb SB：少搞 raise/fold，多用 limp 和直接 shove；查看器先显示可主动进攻的主段。',
      open: ['66','77','88','99','TT','JJ','QQ','KK','AA','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KJs','KQs','A2s','A3s','A4s','A5s'],
      mix: ['55','A6s','A7s','QJs']
    }
  }
};

const spots = [
  { id:'20bb_btn_open_a9s', module:'20bb Open', stage:'Preflop', heroPosition:'BTN', effectiveBb:'20bb', actionBefore:'Folded to BTN', heroHand:'A9s', context:'中期常规局面', tags:['20bb','BTN','open'], options:['Fold','Raise','Jam','Call'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'20bb BTN 仍应保留小开体系，A9s 属于标准开池，不必直接 jam。' },
  { id:'20bb_btn_open_a2o', module:'20bb Open', stage:'Preflop', heroPosition:'BTN', effectiveBb:'20bb', actionBefore:'Folded to BTN', heroHand:'A2o', context:'中期常规局面', tags:['20bb','BTN','open','public-calibrated'], options:['Fold','Raise','Jam','Call'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'公开资料校验版中，BTN 的 A2o 已进入可开范围，按钮位不能把这类小 Axo 弃过头。' },
  { id:'20bb_btn_open_k7o', module:'20bb Open', stage:'Preflop', heroPosition:'BTN', effectiveBb:'20bb', actionBefore:'Folded to BTN', heroHand:'K7o', context:'中期常规局面', tags:['20bb','BTN','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Fold', acceptableActions:['Fold'], explanation:'即使在 BTN，K7o 仍更接近边界外，不要把按钮位自动理解成任何 Kx offsuit 都能开。' },
  { id:'20bb_btn_open_q8o', module:'20bb Open', stage:'Preflop', heroPosition:'BTN', effectiveBb:'20bb', actionBefore:'Folded to BTN', heroHand:'Q8o', context:'中期常规局面', tags:['20bb','BTN','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'Q8o 在按钮位已可作为结构化宽开的一部分，但它是后位宽开，不代表手本身很强。' },
  { id:'20bb_btn_open_64s', module:'20bb Open', stage:'Preflop', heroPosition:'BTN', effectiveBb:'20bb', actionBefore:'Folded to BTN', heroHand:'64s', context:'中期常规局面', tags:['20bb','BTN','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'64s 位于按钮位极边界，公开资料交叉后更适合按边界混合处理，而不是稳定宽开。' },
  { id:'20bb_co_open_66', module:'20bb Open', stage:'Preflop', heroPosition:'CO', effectiveBb:'20bb', actionBefore:'Folded to CO', heroHand:'66', context:'常规中期', tags:['20bb','CO','open'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'20bb CO 的 66 仍是标准开池手，不必把所有中等对子都粗暴 jam。' },
  { id:'20bb_co_open_a5o', module:'20bb Open', stage:'Preflop', heroPosition:'CO', effectiveBb:'20bb', actionBefore:'Folded to CO', heroHand:'A5o', context:'常规中期', tags:['20bb','CO','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'A5o 在 CO 已进入较稳定开池段，是理解 CO 比 HJ 更宽的关键边界手。' },
  { id:'20bb_co_open_k8s', module:'20bb Open', stage:'Preflop', heroPosition:'CO', effectiveBb:'20bb', actionBefore:'Folded to CO', heroHand:'K8s', context:'常规中期', tags:['20bb','CO','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'K8s 在 CO 属于边界牌，公开资料更倾向把它放在混合区，而不是稳定开池。' },
  { id:'20bb_co_open_q9o', module:'20bb Open', stage:'Preflop', heroPosition:'CO', effectiveBb:'20bb', actionBefore:'Folded to CO', heroHand:'Q9o', context:'常规中期', tags:['20bb','CO','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'Q9o 是 CO 的典型边界 offsuit，适合拿来训练你对“能不能放宽到这类牌”的感觉。' },
  { id:'20bb_co_open_t8s', module:'20bb Open', stage:'Preflop', heroPosition:'CO', effectiveBb:'20bb', actionBefore:'Folded to CO', heroHand:'T8s', context:'常规中期', tags:['20bb','CO','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'T8s 在 CO 接近边界混合；后位能放一点，但别因为 suited + 连子就全变稳定开。' },
  { id:'20bb_hj_open_kto', module:'20bb Open', stage:'Preflop', heroPosition:'HJ', effectiveBb:'20bb', actionBefore:'Folded to HJ', heroHand:'KTo', context:'中期 9人桌', tags:['20bb','HJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'公开资料交叉校验后，20bb HJ 的 KTo 应纳入开池骨架；不要把它误当成纯 fold。' },
  { id:'20bb_hj_open_a7o', module:'20bb Open', stage:'Preflop', heroPosition:'HJ', effectiveBb:'20bb', actionBefore:'Folded to HJ', heroHand:'A7o', context:'中期 9人桌', tags:['20bb','HJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Fold', acceptableActions:['Fold'], explanation:'公开资料校验版里，20bb HJ 的低 Axo 仍偏紧，A7o 先按 fold 训练，避免把低 Axo 开得过松。' },
  { id:'20bb_hj_open_87s', module:'20bb Open', stage:'Preflop', heroPosition:'HJ', effectiveBb:'20bb', actionBefore:'Folded to HJ', heroHand:'87s', context:'中期 9人桌', tags:['20bb','HJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'87s 在 HJ 是典型边界牌，公开资料交叉后更适合按混合训练，而不是一刀切。' },
  { id:'20bb_hj_open_qts', module:'20bb Open', stage:'Preflop', heroPosition:'HJ', effectiveBb:'20bb', actionBefore:'Folded to HJ', heroHand:'QTs', context:'中期 9人桌', tags:['20bb','HJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'QTs 在 HJ 属于靠近骨架边缘的高张同花牌，训练时别把它误当成稳定必开。' },
  { id:'20bb_lj_open_a9o', module:'20bb Open', stage:'Preflop', heroPosition:'LJ', effectiveBb:'20bb', actionBefore:'Folded to LJ', heroHand:'A9o', context:'中期 8人桌', tags:['20bb','LJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'LJ 比 UTG 稍宽，A9o 已可进入开池骨架，是理解 LJ 与 UTG 差异的关键手。' },
  { id:'20bb_lj_open_kto', module:'20bb Open', stage:'Preflop', heroPosition:'LJ', effectiveBb:'20bb', actionBefore:'Folded to LJ', heroHand:'KTo', context:'中期 8人桌', tags:['20bb','LJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'KTo 在 LJ 接近边界混合，说明 LJ 虽比 UTG 宽，但仍不能把中等 broadway 开得太随意。' },
  { id:'20bb_lj_open_qjo', module:'20bb Open', stage:'Preflop', heroPosition:'LJ', effectiveBb:'20bb', actionBefore:'Folded to LJ', heroHand:'QJo', context:'中期 8人桌', tags:['20bb','LJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'QJo 在 LJ 仍是边界感很强的牌，用来训练“中前位 broadway 不能想当然全开”正合适。' },
  { id:'20bb_lj_open_98s', module:'20bb Open', stage:'Preflop', heroPosition:'LJ', effectiveBb:'20bb', actionBefore:'Folded to LJ', heroHand:'98s', context:'中期 8人桌', tags:['20bb','LJ','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'98s 在 LJ 也更像边界混合，不要把所有 suited connector 都无脑放进中前位。' },
  { id:'20bb_utg_open_a8s', module:'20bb Open', stage:'Preflop', heroPosition:'UTG', effectiveBb:'20bb', actionBefore:'Folded to UTG', heroHand:'A8s', context:'中期 8人桌', tags:['20bb','UTG','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'公开资料校验版中，20bb UTG 的 A8s 已可进入开池骨架，别把所有中小 Axs 都砍掉。' },
  { id:'20bb_utg_open_55', module:'20bb Open', stage:'Preflop', heroPosition:'UTG', effectiveBb:'20bb', actionBefore:'Folded to UTG', heroHand:'55', context:'中期 8人桌', tags:['20bb','UTG','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'55 在 UTG 更适合按边界混合处理，这手很适合训练你对“前位小对子不是自动开”的感觉。' },
  { id:'20bb_utg_open_kjs', module:'20bb Open', stage:'Preflop', heroPosition:'UTG', effectiveBb:'20bb', actionBefore:'Folded to UTG', heroHand:'KJs', context:'中期 8人桌', tags:['20bb','UTG','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Fold'], explanation:'KJs 在 20bb UTG 公开资料里更像混合区，不能简单当成稳定 open。' },
  { id:'20bb_utg_open_76s', module:'20bb Open', stage:'Preflop', heroPosition:'UTG', effectiveBb:'20bb', actionBefore:'Folded to UTG', heroHand:'76s', context:'中期 8人桌', tags:['20bb','UTG','open','public-calibrated'], options:['Fold','Raise','Jam'], recommendedAction:'Fold', acceptableActions:['Fold'], explanation:'76s 是典型前位别高估的牌，20bb UTG 先按 fold 建立纪律最重要。' },
  { id:'20bb_sb_open_a5s', module:'20bb Open', stage:'Preflop', heroPosition:'SB', effectiveBb:'20bb', actionBefore:'Folded to SB', heroHand:'A5s', context:'盲对盲前的 SB 首动', tags:['20bb','SB','open','public-calibrated'], options:['Fold','Raise','Limp','Jam'], recommendedAction:'Raise', acceptableActions:['Raise','Limp'], explanation:'SB 理论常有 limp 体系，但 A5s 属于可主动进攻主段；训练器先接受 Raise / Limp 双答案，避免把 SB 简化错。' },
  { id:'20bb_sb_open_66', module:'20bb Open', stage:'Preflop', heroPosition:'SB', effectiveBb:'20bb', actionBefore:'Folded to SB', heroHand:'66', context:'盲对盲前的 SB 首动', tags:['20bb','SB','open','public-calibrated'], options:['Fold','Raise','Limp','Jam'], recommendedAction:'Raise', acceptableActions:['Raise','Limp'], explanation:'66 在 SB 属于可主动进攻的主段，但 SB 本身并非纯 RFI 逻辑，这里允许 Raise / Limp 都算可接受。' },
  { id:'20bb_sb_open_a7s', module:'20bb Open', stage:'Preflop', heroPosition:'SB', effectiveBb:'20bb', actionBefore:'Folded to SB', heroHand:'A7s', context:'盲对盲前的 SB 首动', tags:['20bb','SB','open','public-calibrated'], options:['Fold','Raise','Limp','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Limp','Fold'], explanation:'A7s 在 SB 更像体系边界，尤其因为 SB 理论含 limp。把它当成纯 raise 或纯 fold 都会过于僵硬。' },
  { id:'20bb_sb_open_qts', module:'20bb Open', stage:'Preflop', heroPosition:'SB', effectiveBb:'20bb', actionBefore:'Folded to SB', heroHand:'QTs', context:'盲对盲前的 SB 首动', tags:['20bb','SB','open','public-calibrated'], options:['Fold','Raise','Limp','Jam'], recommendedAction:'Mix', acceptableActions:['Raise','Limp','Fold'], explanation:'QTs 在 SB 仍带有很强体系性，公开资料交叉后更适合作为边界混合题来练，而不是做成死答案。' },
  { id:'15bb_sb_vs_btn_kqs', module:'15bb Reshove', stage:'Preflop', heroPosition:'SB', effectiveBb:'15bb', actionBefore:'BTN open 2.2bb', heroHand:'KQs', context:'中后期，前位弃牌', tags:['15bb','SB','vs BTN'], options:['Fold','Call','Jam','Raise'], recommendedAction:'Jam', acceptableActions:['Jam'], explanation:'15bb SB 对 BTN 宽开池，KQs 是高质量 reshove 手牌。' },
  { id:'15bb_bb_vs_co_ato', module:'15bb Reshove', stage:'Preflop', heroPosition:'BB', effectiveBb:'15bb', actionBefore:'CO open 2.2bb', heroHand:'ATo', context:'后段盲注压力大', tags:['15bb','BB','vs CO'], options:['Fold','Call','Jam'], recommendedAction:'Jam', acceptableActions:['Jam'], explanation:'15bb BB 对 CO 开池，ATo 常常更适合直接 reshove。' },
  { id:'30bb_bb_vs_btn_a5o', module:'BB Defend', stage:'Preflop', heroPosition:'BB', effectiveBb:'30bb', actionBefore:'BTN open 2.2bb', heroHand:'A5o', context:'常规深度', tags:['30bb','BB','defend'], options:['Fold','Call','3bet','Jam'], recommendedAction:'Call', acceptableActions:['Call','3bet'], explanation:'A5o 在 BB 对 BTN 一般具备防守价值，标准线偏 call。' },
  { id:'10bb_btn_q9s', module:'10bb Jam', stage:'Preflop', heroPosition:'BTN', effectiveBb:'10bb', actionBefore:'Folded to BTN', heroHand:'Q9s', context:'短码阶段', tags:['10bb','BTN','jam'], options:['Fold','Raise','Jam','Call'], recommendedAction:'Jam', acceptableActions:['Jam'], explanation:'10bb BTN 以简化策略为主，Q9s 属于足够好的直接推进手牌。' },
  { id:'bubble_medium_88', module:'Bubble ICM', stage:'ICM', heroPosition:'HJ', effectiveBb:'18bb', actionBefore:'UTG jam 7bb, Hero next to act', heroHand:'88', context:'还差2人进钱圈，你是中码', tags:['Bubble','ICM','18bb'], options:['Fold','Call','Jam'], recommendedAction:'Fold', acceptableActions:['Fold'], explanation:'泡沫期中码对短码 all-in 不能只看牌力，88 常常该收紧。' },
  { id:'ft_bigstack_a4s', module:'Final Table', stage:'ICM', heroPosition:'BTN', effectiveBb:'24bb', actionBefore:'Folded to BTN', heroHand:'A4s', context:'FT 7人，Hero 领先筹码', tags:['FT','BTN','24bb'], options:['Fold','Raise','Jam'], recommendedAction:'Raise', acceptableActions:['Raise'], explanation:'FT 大码应扩大压制频率，但仍优先保留小开。' },
  { id:'asia_series_20bb_multitable', module:'Asia Series Mode', stage:'Preflop', heroPosition:'SB', effectiveBb:'20bb', actionBefore:'BTN open 2.1bb, 你同时开4桌', heroHand:'AJo', context:'亚洲线上系列赛多桌决策', tags:['Asia Series','20bb','SB'], options:['Fold','Call','Jam'], recommendedAction:'Jam', acceptableActions:['Jam'], explanation:'线上多桌环境更需要简化体系，AJo 在 20bb SB 对 BTN open 多数直接 reshove。' }
];

const ruleCards = [
  { title:'20bb 核心规则', items:['优先保留小开体系，不乱 jam。','中等强度牌先分 open / call-off / fold。','面对宽开池，优先考虑 reshove 而不是尴尬平跟。'] },
  { title:'15bb 核心规则', items:['很多边缘 spot 要简化成 jam/fold。','SB / BB 对偷盲位是最值钱 spot。','别拿“看着还行”的牌去平跟把自己打残。'] },
  { title:'BB Defend', items:['BB vs BTN 可以更宽 defend。','BB vs CO 要明显收紧。','Axo、小 suited、连子看位置和深度决定 defend。'] },
  { title:'Bubble', items:['大码压中码，中码慎碰覆盖你的大码。','短码别盲等，先找自然 jam 点。','看牌力不够，要看淘汰风险。'] },
  { title:'FT', items:['大码扩大施压，但别乱把优势变 coinflip。','中码最怕被覆盖时乱拼。','pay jump 越大，边缘 call 越该收。'] },
  { title:'亚洲线上系列赛', items:['多桌时优先简化，不追求花活。','20bb/15bb 翻前要接近条件反射。','赛程选择本身就是技术，别乱报全赛程。'] }
];

const storageKey = 'mttTrainerStateV3';
const defaultState = { total:0, correct:0, today:{}, mistakes:[], modules:{} };
let state = loadState();
let currentSpot = null;

function loadState(){ try{return {...defaultState, ...JSON.parse(localStorage.getItem(storageKey)||'{}')}}catch{return JSON.parse(JSON.stringify(defaultState));}}
function saveState(){ localStorage.setItem(storageKey, JSON.stringify(state)); }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }
function qs(id){ return document.getElementById(id); }
function qsa(sel){ return document.querySelectorAll(sel); }

function initTabs(){ qsa('.tab').forEach(btn=>btn.addEventListener('click',()=>{ qsa('.tab').forEach(x=>x.classList.remove('active')); qsa('.panel').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); qs(btn.dataset.tab+'Panel').classList.add('active'); renderAll(); })); }
function initModules(){ const modules=['全部题目','只刷错题',...new Set(spots.map(s=>s.module))]; qs('moduleSelect').innerHTML=modules.map(m=>`<option value="${m}">${m}</option>`).join(''); }
function getPool(){ const module=qs('moduleSelect').value; if(module==='全部题目') return spots; if(module==='只刷错题') return state.mistakes.length?state.mistakes:spots.slice(0,5); return spots.filter(s=>s.module===module); }
function pickSpot(){ const pool=getPool(); currentSpot=shuffle(pool)[0]; renderSpot(); }
function renderSpot(){ if(!currentSpot) return; qs('spotModule').textContent=currentSpot.module; qs('spotStage').textContent=currentSpot.stage; qs('heroPosition').textContent=currentSpot.heroPosition; qs('effectiveBb').textContent=currentSpot.effectiveBb; qs('actionBefore').textContent=currentSpot.actionBefore; qs('heroHand').textContent=currentSpot.heroHand; qs('spotContext').textContent=currentSpot.context; qs('spotTags').textContent=currentSpot.tags.join(' / '); qs('answers').innerHTML=currentSpot.options.map(opt=>`<button data-action="${opt}">${opt}</button>`).join(''); qsa('#answers button').forEach(btn=>btn.addEventListener('click',()=>answerSpot(btn.dataset.action))); qs('feedbackBox').classList.add('hidden'); }
function answerSpot(action){ const correct=currentSpot.acceptableActions.includes(action); state.total+=1; state.correct+=correct?1:0; const today=todayKey(); state.today[today]=(state.today[today]||0)+1; state.modules[currentSpot.module] ||= {total:0,correct:0}; state.modules[currentSpot.module].total +=1; state.modules[currentSpot.module].correct += correct?1:0; if(!correct){ if(!state.mistakes.some(x=>x.id===currentSpot.id)) state.mistakes.unshift(currentSpot);} else { state.mistakes=state.mistakes.filter(x=>x.id!==currentSpot.id);} saveState(); const box=qs('feedbackBox'); box.className=`feedback ${correct?'ok':'bad'}`; qs('feedbackTitle').textContent=correct?'答对了':'这题错了'; qs('recommendedAction').textContent=currentSpot.recommendedAction; qs('explanation').textContent=currentSpot.explanation; qs('acceptableActions').textContent=currentSpot.acceptableActions.join(' / '); box.classList.remove('hidden'); renderStats(); renderMistakes(); }
function renderMistakes(){ const wrap=qs('mistakesList'); if(!state.mistakes.length){ wrap.innerHTML='<div class="item"><h4>目前没有错题</h4><p>继续刷题，把错题沉淀出来。</p></div>'; return; } wrap.innerHTML=state.mistakes.map(m=>`<div class="item"><h4>${m.module} ｜ ${m.heroPosition} ｜ ${m.heroHand}</h4><p><strong>局面：</strong>${m.actionBefore} ｜ ${m.effectiveBb} ｜ ${m.context}</p><p><strong>推荐动作：</strong>${m.recommendedAction}</p><p><strong>原因：</strong>${m.explanation}</p></div>`).join(''); }
function renderCards(){ qs('ruleCards').innerHTML=ruleCards.map(c=>`<div class="card"><h3>${c.title}</h3><ul>${c.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join(''); }
function renderStats(){ qs('todayStats').textContent=`今日 ${state.today[todayKey()]||0} 题`; qs('statTotal').textContent=state.total; qs('statAccuracy').textContent=state.total?`${Math.round((state.correct/state.total)*100)}%`:'0%'; qs('statMistakes').textContent=state.mistakes.length; const weakest=Object.entries(state.modules).filter(([,v])=>v.total>0).map(([k,v])=>({k,acc:v.correct/v.total})).sort((a,b)=>a.acc-b.acc)[0]; qs('statWeakest').textContent=weakest?weakest.k:'-'; const rows=Object.entries(state.modules).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>`<div class="item"><h4>${k}</h4><p>总题数：${v.total} ｜ 正确率：${v.total?Math.round(v.correct/v.total*100):0}%</p></div>`); qs('moduleBreakdown').innerHTML=rows.length?rows.join(''):'<div class="item"><p>还没有模块统计。</p></div>'; }

function classifyHand(stack, pos, hand){ const cfg = viewerRanges[stack]?.[pos]; if(!cfg) return {cls:'fold', text:'当前未配置'}; if(cfg.open.includes(hand)) return {cls:'open', text:'建议 Open / Raise'}; if(cfg.mix.includes(hand)) return {cls:'mix', text:'边缘 / 可混'}; return {cls:'fold', text:'建议 Fold'}; }
function renderViewer(){ const stack=qs('viewerStack')?.value || '20bb'; const pos=qs('viewerPosition')?.value || 'UTG'; const cfg=viewerRanges[stack]?.[pos]; qs('rangeTitle').textContent=`${stack} / ${pos} / RFI`; qs('rangeSummary').textContent=cfg?.summary || '暂无数据'; const grid=qs('rangeGrid'); if(!grid) return; grid.innerHTML=''; allHands.forEach(hand=>{ const c=classifyHand(stack,pos,hand); const el=document.createElement('button'); el.className=`range-cell ${c.cls}`; el.textContent=hand; el.addEventListener('click',()=>{ qs('cellDetail').innerHTML=`<strong>${hand}</strong><br>${c.text}<br><span style="color:#95a1c9">${stack} / ${pos} / RFI</span>`; }); grid.appendChild(el); }); }
function renderAll(){ renderMistakes(); renderCards(); renderStats(); renderViewer(); }

document.addEventListener('DOMContentLoaded', ()=>{ initTabs(); initModules(); qs('nextSpotBtn').addEventListener('click', pickSpot); qs('moduleSelect').addEventListener('change', pickSpot); qs('clearMistakesBtn').addEventListener('click', ()=>{ state.mistakes=[]; saveState(); renderMistakes(); renderStats(); }); ['viewerStack','viewerPosition','viewerScenario'].forEach(id=>qs(id)?.addEventListener('change', renderViewer)); renderAll(); pickSpot(); });
