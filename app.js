const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
const allHands = ["AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s", "AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s", "AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s", "AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s", "ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s", "A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s", "A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s", "83s", "82s", "A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s", "72s", "A6o", "K6o", "Q6o", "J6o", "T6o", "96o", "86o", "76o", "66", "65s", "64s", "63s", "62s", "A5o", "K5o", "Q5o", "J5o", "T5o", "95o", "85o", "75o", "65o", "55", "54s", "53s", "52s", "A4o", "K4o", "Q4o", "J4o", "T4o", "94o", "84o", "74o", "64o", "54o", "44", "43s", "42s", "A3o", "K3o", "Q3o", "J3o", "T3o", "93o", "83o", "73o", "63o", "53o", "43o", "33", "32s", "A2o", "K2o", "Q2o", "J2o", "T2o", "92o", "82o", "72o", "62o", "52o", "42o", "32o", "22"];

const viewerRanges = {
  '20bb': {
  "UTG": {
    "summary": "20bb UTG（精确包版）：按你提供的范围文件生成。",
    "raise": [
      "AA",
      "A4s",
      "A5s",
      "A6s",
      "A7s",
      "A8s",
      "A9s",
      "ATs",
      "ATo",
      "AJs",
      "AJo",
      "AQs",
      "AQo",
      "AKs",
      "AKo",
      "66",
      "77",
      "88",
      "T8s",
      "K8s",
      "99",
      "T9s",
      "J9s",
      "Q9s",
      "K9s",
      "TT",
      "JTs",
      "QTs",
      "KTs",
      "JJ",
      "QJs",
      "KJs",
      "KJo",
      "QQ",
      "KQs",
      "KQo",
      "KK"
    ],
    "call": [],
    "jam": [],
    "mix": [
      "Q8s",
      "QJo",
      "KTo",
      "A9o"
    ]
  },
  "LJ": {
    "summary": "20bb LJ（精确包版）：按 UTG+1 文件生成。",
    "raise": [
      "AA",
      "A4s",
      "A5s",
      "A6s",
      "A7s",
      "A8s",
      "A9s",
      "A9o",
      "ATs",
      "ATo",
      "AJs",
      "AJo",
      "AQs",
      "AQo",
      "AKs",
      "AKo",
      "66",
      "77",
      "88",
      "T8s",
      "Q8s",
      "K8s",
      "99",
      "T9s",
      "J9s",
      "Q9s",
      "K9s",
      "TT",
      "JTs",
      "QTs",
      "KTs",
      "JJ",
      "QJs",
      "KJs",
      "KJo",
      "QQ",
      "KQs",
      "KQo",
      "KK"
    ],
    "call": [],
    "jam": [],
    "mix": [
      "A3s",
      "K7s",
      "QJo",
      "J8s",
      "KTo",
      "98s",
      "55"
    ]
  },
  "UTG+2": {
    "summary": "20bb UTG+2（精确包版）：按 UTG+2 文件生成。",
    "raise": [
      "AA",
      "A3s",
      "A4s",
      "A5s",
      "A6s",
      "A7s",
      "A8s",
      "A9s",
      "A9o",
      "ATs",
      "ATo",
      "AJs",
      "AJo",
      "AQs",
      "AQo",
      "AKs",
      "AKo",
      "55",
      "66",
      "77",
      "K7s",
      "88",
      "98s",
      "T8s",
      "J8s",
      "Q8s",
      "K8s",
      "99",
      "T9s",
      "J9s",
      "Q9s",
      "K9s",
      "TT",
      "JTs",
      "QTs",
      "KTs",
      "KTo",
      "JJ",
      "QJs",
      "QJo",
      "KJs",
      "KJo",
      "QQ",
      "KQs",
      "KQo",
      "KK"
    ],
    "call": [],
    "jam": [],
    "mix": [
      "K6s",
      "QTo",
      "JTo",
      "A8o",
      "87s"
    ]
  },
  "HJ": {
    "summary": "20bb HJ（精确包版）：以后以这包为准。",
    "raise": [
      "AA",
      "A2s",
      "A3s",
      "A4s",
      "A5s",
      "A6s",
      "A7s",
      "A7o",
      "A8s",
      "A8o",
      "A9s",
      "A9o",
      "ATs",
      "ATo",
      "AJs",
      "AJo",
      "AQs",
      "AQo",
      "AKs",
      "AKo",
      "55",
      "K5s",
      "66",
      "K6s",
      "77",
      "97s",
      "Q7s",
      "K7s",
      "88",
      "98s",
      "T8s",
      "J8s",
      "Q8s",
      "K8s",
      "99",
      "T9s",
      "J9s",
      "Q9s",
      "K9s",
      "TT",
      "JTs",
      "JTo",
      "QTs",
      "QTo",
      "KTs",
      "KTo",
      "JJ",
      "QJs",
      "QJo",
      "KJs",
      "KJo",
      "QQ",
      "KQs",
      "KQo",
      "KK"
    ],
    "call": [],
    "jam": [],
    "mix": [
      "Q6s",
      "87s"
    ]
  },
  "CO": {
    "summary": "20bb CO（精确包版）：以后以这包为准。",
    "raise": [
      "AA",
      "A3s",
      "A4s",
      "A5s",
      "A5o",
      "A6s",
      "A6o",
      "A7s",
      "A7o",
      "A8s",
      "A8o",
      "A9s",
      "A9o",
      "ATs",
      "ATo",
      "AJs",
      "AJo",
      "AQs",
      "AQo",
      "AKs",
      "AKo",
      "44",
      "55",
      "K5s",
      "66",
      "Q6s",
      "K6s",
      "77",
      "87s",
      "97s",
      "T7s",
      "J7s",
      "Q7s",
      "K7s",
      "88",
      "98s",
      "T8s",
      "J8s",
      "Q8s",
      "K8s",
      "99",
      "T9s",
      "J9s",
      "Q9s",
      "K9s",
      "K9o",
      "TT",
      "JTs",
      "JTo",
      "QTs",
      "QTo",
      "KTs",
      "KTo",
      "JJ",
      "QJs",
      "QJo",
      "KJs",
      "KJo",
      "QQ",
      "KQs",
      "KQo",
      "KK"
    ],
    "call": [],
    "jam": [],
    "mix": [
      "A2s",
      "K4s",
      "Q5s",
      "Q9o",
      "J9o",
      "T9o"
    ]
  },
  "BTN": {
    "summary": "20bb BTN（精确包版）：已包含 Raise / Call / Jam / Fold。",
    "raise": [
      "AA",
      "A4o",
      "A5o",
      "A6s",
      "A6o",
      "A9s",
      "A9o",
      "ATo",
      "AJo",
      "AQs",
      "AQo",
      "AKs",
      "AKo",
      "55",
      "Q5s",
      "K5s",
      "66",
      "86s",
      "J6s",
      "Q6s",
      "K6s",
      "77",
      "97s",
      "T7s",
      "J7s",
      "Q7s",
      "88",
      "98s",
      "T8s",
      "J8s",
      "K8o",
      "99",
      "T9o",
      "J9o",
      "Q9o",
      "K9o",
      "TT",
      "JTo",
      "QTo",
      "KTo",
      "JJ",
      "QJs",
      "KJs",
      "QQ",
      "KQs",
      "KK"
    ],
    "call": [],
    "jam": [
      "A2s",
      "A3s",
      "A4s",
      "A8o",
      "22",
      "33",
      "44",
      "QTs"
    ],
    "mix": [
      "AJs",
      "ATs",
      "A8s",
      "A7s",
      "A5s",
      "KTs",
      "K9s",
      "K8s",
      "K7s",
      "K4s",
      "K3s",
      "KQo",
      "Q9s",
      "Q8s",
      "Q4s",
      "KJo",
      "QJo",
      "JTs",
      "J9s",
      "J5s",
      "KTo",
      "T9s",
      "T6s",
      "96s",
      "Q8o",
      "J8o",
      "T8o",
      "87s",
      "A7o",
      "K7o",
      "76s",
      "75s",
      "65s",
      "A3o",
      "A2o"
    ]
  },
  "SB": {
    "summary": "20bb SB（精确包版）：已包含 Call / Raise / Jam / Fold。",
    "raise": [
      "AA",
      "A7s",
      "AKs",
      "T9s",
      "QQ",
      "KK"
    ],
    "call": [
      "A2s",
      "A3s",
      "A4s",
      "A5s",
      "AQo",
      "72s",
      "J2o",
      "Q2s",
      "Q2o",
      "K2s",
      "K2o",
      "43s",
      "53s",
      "T3o",
      "J3o",
      "Q3s",
      "Q3o",
      "K3s",
      "K3o",
      "54s",
      "64s",
      "64o",
      "T4o",
      "J4s",
      "J4o",
      "Q4s",
      "K4s",
      "55",
      "65s",
      "75s",
      "75o",
      "85o",
      "95o",
      "T5o",
      "J5s",
      "Q5s",
      "K5s",
      "86s",
      "96s",
      "T6s",
      "J6s",
      "J6o",
      "Q6s",
      "K6s",
      "J7s",
      "Q7s",
      "K7s",
      "J8s",
      "Q8s",
      "K8s",
      "J9s",
      "Q9s",
      "K9s",
      "QTs",
      "QJs"
    ],
    "jam": [
      "A5o",
      "A6o",
      "A7o",
      "A8o",
      "A9o",
      "22",
      "33",
      "44",
      "87s",
      "98s"
    ],
    "mix": [
      "AQs",
      "AJs",
      "ATs",
      "A9s",
      "A8s",
      "A6s",
      "AKo",
      "KQs",
      "KJs",
      "KTs",
      "KQo",
      "AJo",
      "KJo",
      "QJo",
      "JJ",
      "JTs",
      "J3s",
      "J2s",
      "ATo",
      "KTo",
      "QTo",
      "JTo",
      "TT",
      "T8s",
      "T7s",
      "T5s",
      "T4s",
      "T3s",
      "T2s",
      "K9o",
      "Q9o",
      "J9o",
      "T9o",
      "99",
      "97s",
      "95s",
      "94s",
      "93s",
      "92s",
      "K8o",
      "Q8o",
      "J8o",
      "T8o",
      "98o",
      "88",
      "85s",
      "84s",
      "83s",
      "82s",
      "K7o",
      "Q7o",
      "J7o",
      "T7o",
      "97o",
      "87o",
      "77",
      "76s",
      "74s",
      "73s",
      "K6o",
      "Q6o",
      "J6o",
      "T6o",
      "96o",
      "86o",
      "76o",
      "66",
      "63s",
      "62s",
      "K5o",
      "Q5o",
      "J5o",
      "65o",
      "52s",
      "A4o",
      "K4o",
      "Q4o",
      "74o",
      "54o",
      "42s",
      "A3o",
      "32s",
      "A2o",
      "K2o",
      "T2o"
    ]
  }
},
  '15bb': {
    'UTG': { summary:'15bb 前位：别装，明显价值牌再动。', raise:['77','88','99','TT','JJ','QQ','KK','AA','AJs','AQs','AKs','AQo','AKo','KQs'], call:[], jam:[], mix:['66','ATs','AJo'] },
    'HJ': { summary:'15bb HJ：比前位宽一点，但仍偏 blocker 和高张。', raise:['55','66','77','88','99','TT','JJ','QQ','KK','AA','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KTs','KJs','KQs','QJs'], call:[], jam:[], mix:['44','A4s','QTs','JTs'] },
    'CO': { summary:'15bb CO：开始能打 blocker 和高张，但别再迷恋小花连子。', raise:['55','66','77','88','99','TT','JJ','QQ','KK','AA','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KTs','KJs','KQs','KQo','QJs'], call:[], jam:[], mix:['44','A2s','A3s','A4s','QTs','JTs'] },
    'BTN': { summary:'15bb BTN：宽，但更像短筹攻击。', raise:['22','33','44','55','66','77','88','99','TT','JJ','QQ','KK','AA','A2s','A3s','A4s','A5s','A6s','A7s','A8s','A9s','ATs','AJs','AQs','AKs','A2o','A3o','A4o','A5o','A6o','A7o','A8o','A9o','ATo','AJo','AQo','AKo','K7s','K8s','K9s','KTs','KJs','KQs','K9o','KTo','KJo','KQo','Q8s','Q9s','QTs','QJs','QTo','J8s','J9s','JTs','JTo','T8s','T9s','98s','87s'], call:[], jam:[], mix:['K5s','K6s','Q7s','J7s','T7s','76s','65s'] },
    'SB': { summary:'15bb SB：少搞 raise/fold，多用 limp 和直接 shove。', raise:['66','77','88','99','TT','JJ','QQ','KK','AA','A8s','A9s','ATs','AJs','AQs','AKs','ATo','AJo','AQo','AKo','KJs','KQs','A2s','A3s','A4s','A5s'], call:[], jam:[], mix:['55','A6s','A7s','QJs'] }
  }
};

const spots = [
  {
    "id": "20bb_exact_utg_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.476 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.984 / Call 0.016 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.998 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.998 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.998 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.158 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 1.000 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.228 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utg_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.974 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.346 / Call 0.038 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.968 / Call 0.032 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.988 / Call 0.012 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.402 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.996 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.996 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_qto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "QTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.030 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.706 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.976 / Call 0.024 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.982 / Call 0.018 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.980 / Call 0.020 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.494 / Call 0.030 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.010 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_lj_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "LJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to LJ",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "LJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.118 / Call 0.016 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.604 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 1.000 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a2s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A2s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.012 / Call 0.044 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.948 / Call 0.052 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.982 / Call 0.018 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.986 / Call 0.014 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.958 / Call 0.042 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.980 / Call 0.020 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.988 / Call 0.012 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_qto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "QTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.450 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.996 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.958 / Call 0.042 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_jto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "JTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.254 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.964 / Call 0.036 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.972 / Call 0.028 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.944 / Call 0.054 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.166 / Call 0.030 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_76s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "76s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.014 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.940 / Call 0.060 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_utgp2_44",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "UTG+2",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to UTG+2",
    "heroHand": "44",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "UTG+2",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a7o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A7o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.910 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 1.000 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a2s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A2s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.932 / Call 0.068 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.950 / Call 0.050 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.978 / Call 0.022 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.962 / Call 0.038 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.946 / Call 0.054 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.986 / Call 0.014 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.984 / Call 0.016 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_qto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "QTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 1.000 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.942 / Call 0.058 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_jto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "JTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.982 / Call 0.018 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.960 / Call 0.040 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.974 / Call 0.026 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.956 / Call 0.044 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.580 / Call 0.042 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_76s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "76s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.020 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.978 / Call 0.022 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_hj_44",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "HJ",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to HJ",
    "heroHand": "44",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "HJ",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.042 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a5o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A5o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.998 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a7o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A7o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 1.000 / Call 0.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.994 / Call 0.006 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.996 / Call 0.004 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a2s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A2s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.894 / Call 0.106 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.960 / Call 0.040 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.954 / Call 0.046 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.974 / Call 0.026 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.988 / Call 0.012 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.976 / Call 0.024 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.986 / Call 0.014 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.986 / Call 0.014 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.992 / Call 0.008 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_qto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "QTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.998 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.988 / Call 0.012 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.942 / Call 0.058 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_jto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "JTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.998 / Call 0.002 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.940 / Call 0.060 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.976 / Call 0.024 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.974 / Call 0.026 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.960 / Call 0.040 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_76s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "76s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Fold"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.026 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.990 / Call 0.010 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_co_44",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "CO",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to CO",
    "heroHand": "44",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "CO",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.972 / Call 0.028 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a2o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A2o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.602 / Call 0.212 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a3o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A3o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.862 / Call 0.138 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a4o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A4o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.916 / Call 0.084 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a5o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A5o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.968 / Call 0.032 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a7o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A7o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.184 / Call 0.000 / Jam 0.816。"
  },
  {
    "id": "20bb_exact_btn_a8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.050 / Call 0.016 / Jam 0.934。"
  },
  {
    "id": "20bb_exact_btn_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.962 / Call 0.036 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a2s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A2s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_btn_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_btn_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_btn_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.206 / Call 0.108 / Jam 0.688。"
  },
  {
    "id": "20bb_exact_btn_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.886 / Call 0.114 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.886 / Call 0.114 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.900 / Call 0.100 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.870 / Call 0.006 / Jam 0.124。"
  },
  {
    "id": "20bb_exact_btn_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.774 / Call 0.054 / Jam 0.172。"
  },
  {
    "id": "20bb_exact_btn_qto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "QTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.950 / Call 0.050 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.886 / Call 0.114 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.026 / Call 0.026 / Jam 0.948。"
  },
  {
    "id": "20bb_exact_btn_jto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "JTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.928 / Call 0.072 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.488 / Call 0.016 / Jam 0.496。"
  },
  {
    "id": "20bb_exact_btn_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.830 / Call 0.170 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.910 / Call 0.090 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.864 / Call 0.136 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_76s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "76s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.850 / Call 0.150 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.914 / Call 0.086 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_44",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "44",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_btn_33",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "33",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_btn_22",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "22",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_btn_k8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "K8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.942 / Call 0.058 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_btn_q8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "BTN",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to BTN",
    "heroHand": "Q8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "BTN",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.472 / Call 0.036 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_a2o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A2o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.108 / Call 0.456 / Jam 0.436。"
  },
  {
    "id": "20bb_exact_sb_a3o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A3o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.108 / Call 0.226 / Jam 0.666。"
  },
  {
    "id": "20bb_exact_sb_a4o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A4o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.334 / Call 0.324 / Jam 0.342。"
  },
  {
    "id": "20bb_exact_sb_a5o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A5o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.036 / Call 0.000 / Jam 0.964。"
  },
  {
    "id": "20bb_exact_sb_a7o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A7o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_a8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_a9o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A9o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_a2s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A2s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Call",
    "acceptableActions": [
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 1.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_a3s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A3s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Call",
    "acceptableActions": [
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 1.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_a4s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A4s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Call",
    "acceptableActions": [
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 1.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_a5s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A5s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Call",
    "acceptableActions": [
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.026 / Call 0.974 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_a7s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A7s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.952 / Call 0.048 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_a8s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "A8s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.570 / Call 0.430 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_kto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "KTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.254 / Call 0.746 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_kjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "KJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.524 / Call 0.468 / Jam 0.010。"
  },
  {
    "id": "20bb_exact_sb_kqo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "KQo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.288 / Jam 0.712。"
  },
  {
    "id": "20bb_exact_sb_qto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "QTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.292 / Call 0.708 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_qjo",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "QJo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.390 / Call 0.608 / Jam 0.002。"
  },
  {
    "id": "20bb_exact_sb_qts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "QTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Call",
    "acceptableActions": [
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 1.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_jto",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "JTo",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.062 / Call 0.762 / Jam 0.178。"
  },
  {
    "id": "20bb_exact_sb_jts",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "JTs",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.426 / Call 0.574 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_t9s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "T9s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Raise",
    "acceptableActions": [
      "Raise"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.990 / Call 0.010 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_98s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "98s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.002 / Jam 0.998。"
  },
  {
    "id": "20bb_exact_sb_87s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "87s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_76s",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "76s",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Call",
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.482 / Jam 0.518。"
  },
  {
    "id": "20bb_exact_sb_55",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "55",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Call",
    "acceptableActions": [
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 1.000 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_44",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "44",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_33",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "33",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_22",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "22",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Jam",
    "acceptableActions": [
      "Jam"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.000 / Call 0.000 / Jam 1.000。"
  },
  {
    "id": "20bb_exact_sb_k8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "K8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.550 / Call 0.450 / Jam 0.000。"
  },
  {
    "id": "20bb_exact_sb_q8o",
    "module": "20bb Open",
    "stage": "Preflop",
    "heroPosition": "SB",
    "effectiveBb": "20bb",
    "actionBefore": "Folded to SB",
    "heroHand": "Q8o",
    "context": "20bb 精确包训练题",
    "tags": [
      "20bb",
      "SB",
      "exact-pack"
    ],
    "options": [
      "Fold",
      "Raise",
      "Call",
      "Jam"
    ],
    "recommendedAction": "Mix",
    "acceptableActions": [
      "Raise",
      "Call"
    ],
    "explanation": "按你提供的 20bb 包：Raise 0.500 / Call 0.500 / Jam 0.000。"
  }
];

const ruleCards = [
  { title:'20bb 精确包规则', items:['20bb 以后只以你提供的范围包为准。','训练动作按 Raise / Call / Jam / Fold 四类理解。','先把 20bb 练准，再扩其他深度。'] },
  { title:'15bb 核心规则', items:['很多边缘 spot 要简化成 jam/fold。','SB / BB 对偷盲位是最值钱 spot。','别拿“看着还行”的牌去平跟把自己打残。'] }
];

const storageKey = 'mttTrainerStateV4';
const defaultState = { total:0, correct:0, today:{}, mistakes:[], modules:{} };
let state = loadState();
let currentSpot = null;

function loadState(){ try{return {...defaultState, ...JSON.parse(localStorage.getItem(storageKey)||'{}')}}catch{return JSON.parse(JSON.stringify(defaultState));} }
function saveState(){ localStorage.setItem(storageKey, JSON.stringify(state)); }
function todayKey(){ return new Date().toISOString().slice(0,10); }
function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }
function qs(id){ return document.getElementById(id); }
function qsa(sel){ return document.querySelectorAll(sel); }

function initTabs(){ qsa('.tab').forEach(btn=>btn.addEventListener('click',()=>{ qsa('.tab').forEach(x=>x.classList.remove('active')); qsa('.panel').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); qs(btn.dataset.tab+'Panel').classList.add('active'); renderAll(); })); }
function initModules(){ const modules=['全部题目','只刷错题',...new Set(spots.map(s=>s.module))]; qs('moduleSelect').innerHTML=modules.map(m=>`<option value="${m}">${m}</option>`).join(''); }
function getPool(){ const module=qs('moduleSelect').value; if(module==='全部题目') return spots; if(module==='只刷错题') return state.mistakes.length?state.mistakes:spots.slice(0,20); return spots.filter(s=>s.module===module); }
function pickSpot(){ const pool=getPool(); currentSpot=shuffle(pool)[0]; renderSpot(); }
function renderSpot(){ if(!currentSpot) return; qs('spotModule').textContent=currentSpot.module; qs('spotStage').textContent=currentSpot.stage; qs('heroPosition').textContent=currentSpot.heroPosition; qs('effectiveBb').textContent=currentSpot.effectiveBb; qs('actionBefore').textContent=currentSpot.actionBefore; qs('heroHand').textContent=currentSpot.heroHand; qs('spotContext').textContent=currentSpot.context; qs('spotTags').textContent=currentSpot.tags.join(' / '); qs('answers').innerHTML=currentSpot.options.map(opt=>`<button data-action="${opt}">${opt}</button>`).join(''); qsa('#answers button').forEach(btn=>btn.addEventListener('click',()=>answerSpot(btn.dataset.action))); qs('feedbackBox').classList.add('hidden'); }
function answerSpot(action){ const correct=currentSpot.acceptableActions.includes(action); state.total+=1; state.correct+=correct?1:0; const today=todayKey(); state.today[today]=(state.today[today]||0)+1; state.modules[currentSpot.module] ||= {total:0,correct:0}; state.modules[currentSpot.module].total +=1; state.modules[currentSpot.module].correct += correct?1:0; if(!correct){ if(!state.mistakes.some(x=>x.id===currentSpot.id)) state.mistakes.unshift(currentSpot); } else { state.mistakes=state.mistakes.filter(x=>x.id!==currentSpot.id); } saveState(); const box=qs('feedbackBox'); box.className=`feedback ${correct?'ok':'bad'}`; qs('feedbackTitle').textContent=correct?'答对了':'这题错了'; qs('recommendedAction').textContent=currentSpot.recommendedAction; qs('explanation').textContent=currentSpot.explanation; qs('acceptableActions').textContent=currentSpot.acceptableActions.join(' / '); box.classList.remove('hidden'); renderStats(); renderMistakes(); }
function renderMistakes(){ const wrap=qs('mistakesList'); if(!state.mistakes.length){ wrap.innerHTML='<div class="item"><h4>目前没有错题</h4><p>继续刷题，把错题沉淀出来。</p></div>'; return; } wrap.innerHTML=state.mistakes.map(m=>`<div class="item"><h4>${m.module} ｜ ${m.heroPosition} ｜ ${m.heroHand}</h4><p><strong>局面：</strong>${m.actionBefore} ｜ ${m.effectiveBb} ｜ ${m.context}</p><p><strong>推荐动作：</strong>${m.recommendedAction}</p><p><strong>原因：</strong>${m.explanation}</p></div>`).join(''); }
function renderCards(){ qs('ruleCards').innerHTML=ruleCards.map(c=>`<div class="card"><h3>${c.title}</h3><ul>${c.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join(''); }
function renderStats(){ qs('todayStats').textContent=`今日 ${state.today[todayKey()]||0} 题`; qs('statTotal').textContent=state.total; qs('statAccuracy').textContent=state.total?`${Math.round((state.correct/state.total)*100)}%`:'0%'; qs('statMistakes').textContent=state.mistakes.length; const weakest=Object.entries(state.modules).filter(([,v])=>v.total>0).map(([k,v])=>({k,acc:v.correct/v.total})).sort((a,b)=>a.acc-b.acc)[0]; qs('statWeakest').textContent=weakest?weakest.k:'-'; const rows=Object.entries(state.modules).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>`<div class="item"><h4>${k}</h4><p>总题数：${v.total} ｜ 正确率：${v.total?Math.round(v.correct/v.total*100):0}%</p></div>`); qs('moduleBreakdown').innerHTML=rows.length?rows.join(''):'<div class="item"><p>还没有模块统计。</p></div>'; }
function classifyHand(stack, pos, hand){ const cfg = viewerRanges[stack]?.[pos]; if(!cfg) return {cls:'fold', text:'当前未配置'}; const inRaise = cfg.raise?.includes(hand); const inCall = cfg.call?.includes(hand); const inJam = cfg.jam?.includes(hand); const inMix = cfg.mix?.includes(hand); if(inRaise && !inCall && !inJam) return {cls:'open', text:'建议 Raise'}; if(inCall && !inRaise && !inJam) return {cls:'mix', text:'建议 Call'}; if(inJam && !inRaise && !inCall) return {cls:'jam', text:'建议 Jam / All-in'}; if(inRaise || inCall || inJam || inMix) { const actions=[inRaise?'Raise':'', inCall?'Call':'', inJam?'Jam':''].filter(Boolean).join(' / ') || '边界多动作'; return {cls:'mix', text:actions}; } return {cls:'fold', text:'建议 Fold'}; }
function renderViewer(){ const stack=qs('viewerStack')?.value || '20bb'; const pos=qs('viewerPosition')?.value || 'UTG'; const cfg=viewerRanges[stack]?.[pos]; qs('rangeTitle').textContent=`${stack} / ${pos}`; qs('rangeSummary').textContent=cfg?.summary || '暂无数据'; const grid=qs('rangeGrid'); if(!grid) return; grid.innerHTML=''; allHands.forEach(hand=>{ const c=classifyHand(stack,pos,hand); const el=document.createElement('button'); el.className=`range-cell ${c.cls}`; el.textContent=hand; el.addEventListener('click',()=>{ qs('cellDetail').innerHTML=`<strong>${hand}</strong><br>${c.text}<br><span style="color:#95a1c9">${stack} / ${pos}</span>`; }); grid.appendChild(el); }); }
function renderAll(){ renderMistakes(); renderCards(); renderStats(); renderViewer(); }

document.addEventListener('DOMContentLoaded', ()=>{ initTabs(); initModules(); qs('nextSpotBtn').addEventListener('click', pickSpot); qs('moduleSelect').addEventListener('change', pickSpot); qs('clearMistakesBtn').addEventListener('click', ()=>{ state.mistakes=[]; saveState(); renderMistakes(); renderStats(); }); ['viewerStack','viewerPosition','viewerScenario'].forEach(id=>qs(id)?.addEventListener('change', renderViewer)); renderAll(); pickSpot(); });
