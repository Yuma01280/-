const scenes = {
  S1: {
    background: "images/Scene1_BG.png",
    steps: [
      {
        type: "narration",
        text: `빨간 망토의 어머니는 참 다정한 여인입니다. 그 다정함에, 빨간 망토의 아버지의 불같은
성격도 꽤 녹아들었습니다. 
어머니는 향긋한 치즈와 와인이 담긴 바구니를 빨간 망토에게 건네줍니다.
아버지가 할머니를 잘 챙기지 않으니, 어머니가 할머니를 잘 챙겨주죠.`
      },
      {
        type: "narration",
        text: `향긋한 치즈향기와, 붉은 와인이 바구니에 예쁘게 담겨있습니다. 어머니가 손수 만든 와인과 치즈에요.
어머니의 달콤하고 부드러운 다정한 향기와 함께, 바구니가 빨간망토의 눈에 보입니다.`
      },

       {
        type: "narration",
        background: "images/Scene1-2_BG.png",
        text: `그리고, 못보던 편지도 보이네요. 어머니가 할머니에게 편지를 쓴다는 사실은 빨간망토도 처음 아는 사실입니다.`
      },

      {
        type: "dialogue",
        speaker: "어머니",
        text: `사랑스러운 내 딸아, 할머니께 이걸 전해주렴. 할머니는 혼자 지내니 음식을 잘 챙겨드려야 해. 그리고 숲에 들어갈 때는 조심해야 해. 숲에는 위험한 것들이 많으니까.`
      }
    ],

    choices: [
      {
        text: "아무것도 묻지 않고 출발한다",
        record: "어머니를 의심하지 않았다.",
        effect: { Trust: 10, Info: -5 },
        next: "S1_A"
      },
      {
        text: "편지 내용에 대해 물어본다.",
         record: "어머니를 의심해 보았다.",
        effect: { Doubt: 10, Info: 10 },
        next: "S1_B"
      }
    ]
  },

  S1_A: {
    steps: [ 
      {
        type: "dialogue",
        speaker: "빨간 망토",
        text: `네, 그럴게요.`
      },
      {
        type: "narration",
        text: `당신은 어머니를 의심하지 않았습니다. 어머니가 할머니를 챙기는 마음을 빨간 망토는 잘 알고있으니까요. 현명합니다.`
      },
       {
        type: "narration",
        text: `어머니는 요즘 할머니께 편지도 쓰나 봅니다. 어쩄든 어린 아이들이 신경쓸 일은 아니죠.`
      },

      {
        type: "dialogue",
        speaker: "어머니",
        text: `숲에 늑대들이 돌아다니니까 조심해야 해. 보안 관문은 꼭 신원 밝히고 통과하렴 알겠지?`
      },
      {
        type: "dialogue",
        speaker: "빨간 망토",
        text: `네. 다녀올게요 어머니.`
      }
    ],

    choices: [
      {
        text: "숲으로 향한다",
        record: "숲으로 향했다.",
        effect: {},
        next: "S2"
      }
    ]
  },





  S1_B: {
    steps: [
      {
        type: "dialogue",
        speaker: "빨간 망토",
        text: `어머니, 편지 내용이 뭐예요? 원래 이런거 보낸적 없으시잖아요.`
      },
      {
        type: "dialogue",
        speaker: "어머니",
        text: `...할머니께 보내는 편지야. 할머니는 요즘 건강이 좋지 않으니까, 내가 챙겨드려야 할 것들이 많아.`
      },

        {
        type: "dialogue",
        speaker: "어머니",
        text: `...장례를 치르게 된다던가... 그러면 할 일이 많아지잖니. 적어도 고독사는 면하셔야 할테니까...`
      },

      {
        type: "narration",
        text: `건강이라니, 어머니가 할머니의 건강을 신경쓴다면 약이나 다른 약제를 주는게 나을텐데. 
        심지어 어머니가 준비한 음식은 치즈와 와인. 병자에게 주는 식단은 절대로 아니었죠.`
      }
      ,

      {
        type: "narration",
        text: `당신은 어머니를 한번도 의심한적 없지만, 오늘 행동은 유독 수상합니다.  어머니는 정말 할머니를 챙겨주는걸까요?`
      }
      ,

      {
        type: "narration",
        text: `어머니에게 더 많은 질문은 더이상 할 수 없을거 같습니다. 일단 할머니를 직접 만나서 상황을 파악해보는게 좋겠네요.`
      }




      
    ],

    choices: [
      {
        text: "숲으로 향한다",
        record: "숲으로 향했다.",
        effect: {},
        next: "S2"
      }
    ]
  },





S2: {
  background: "images/Scene2_BG.png",

  steps: [
    {
      type: "narration",
      text: `숲 입구에 도착했습니다. 이곳은 언제 와도 익숙해지지는 않네요. 빨간 망토의 눈에는 드론 하나와, 게이트가 보입니다.`
    },
    {
      type: "narration",
      text: `이곳은 아마 자주 점검하는 구역이 아닌거같아요. 게이트는 낡았고, 드론도 약간 고장난거같네요.`
    },
    {
      type: "narration",
      text: `아마 이곳을 지나가면, 빨간 망토의 통행 기록이 기계에 남게 될것입니다.
하지만 몰래 돌아간다면 그럴일은 없겠죠. 어떻게 할건가요?`
    }
  ],

  choices: [
    {
      text: "톨게이트를 지나간다",
       record: "어머니의 말에 따라 톨게이트를 지나갔다.",
effect: {
  Trust: 1,
  Info: 1,
  Route: 1,
  Path: "road"
},
      next: "S3_GATE"
    },
    {
      text: "몰래 오솔길로 빠진다",
      record: "기록이 남는게 껄끄러워 오솔길로 빠졌다.",
effect: {
  Doubt: 1,
  Route: -1,
  Path: "search"
},
      next: "S3_SECRET"
    }
  ]
},




S3_GATE: {
  background: "images/Scene2-1_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 게이트 앞으로 다가갔습니다. 낡은 기계가 낮게 울리며 통행 기록을 남기기 시작합니다.`
    }
  ],

  choices: [
    {
      text: "숲 안쪽으로 이동한다",   
      effect: {},
      next: "S4"
    }
  ]
},




S3_SECRET: {
  background: "images/Scene2-2_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 게이트를 피해 오솔길 쪽으로 발걸음을 돌렸습니다. 아무 기록도 남지 않지만, 숲은 더 깊고 조용합니다.`
    }
  ],

  choices: [
    {
      text: "숲 안쪽으로 이동한다",
      effect: {},
      next: "S4"
    }
  ]
},









S4: {
  background: "images/Scene4_BG.png",

  steps: [
    // ==============================
    // 🌲 숲 진입 - 게이트를 지나온 경우
    // ==============================
    {
      type: "narration",
      condition: function(state) {
        return state.Route === 1;
      },
      text: `게이트를 지나온 뒤, 낡은 기계의 소리가 아직도 귓가에 남아있는 듯합니다.

숲 안쪽은 여전히 조용하네요.

하지만 어딘가에서 누군가가 지켜보고 있는 기분이 듭니다.`
    },

    // ==============================
    // 🌲 숲 진입 - 기록을 남기지 않은 경우
    // ==============================
    {
      type: "narration",
      condition: function(state) {
        return state.Route !== 1;
      },
      text: `기록을 남기지 않은 채 숲 속으로 들어왔습니다.

주변은 조용하지만, 몰래 들어왔다는 사실 때문인지 범죄를 저지른 것 같은 죄책감이 듭니다.

그리고 어딘가에서 누군가의 시선도 느껴지는 것 같네요.`
    },

    {
      type: "narration",
      text: `숲은 점점 더 깊어지고 있습니다.

나무 사이로 비추는 달빛과 희미한 길이 이어져 있지만, 오늘의 숲은 빨간 망토가 기억하던 만큼 아름답지 못한 것 같습니다.`
    },

    {
      type: "narration",
      text: `산들거리는 바람 대신 스산한 분위기가 맴돕니다.

작고 귀여운 동물들보다는, 곰이나 늑대가 튀어나올 것 같은 분위기입니다.

보통 이런 날씨에 살인 사건이 많이 일어난다고 하죠?`
    },

    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `오늘따라 숲이 어두워. 주변에 뭐가 있는지 잘 모르겠는걸...`
    }
  ],

  choices: [
    {
      text: "조심스럽게 길을 따라간다",
      effect: {
        Info: 1,
        MoveStyle: "road"
      },
      record: "빨간 망토는 조심스럽게 길을 따라 이동했다.",
      next: "S5"
    },

    {
      text: "주변을 살피며 이동한다",
      effect: {
        Doubt: 1,
        MoveStyle: "search"
      },
      record: "빨간 망토는 주변을 살피며 숲속을 이동했다.",
      next: "S5"
    }
  ]
},


S5: {
  background: "images/Scene5_BG.png",

  steps: [
    // ==============================
    // 🪧 길을 따라온 경우 - 이정표 발견
    // MoveStyle이 비어 있으면 road로 기본 처리
    // ==============================
    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      text: `길을 따라 조심스럽게 이동하던 빨간 망토는, 얼마 지나지 않아 낡은 이정표 하나를 발견합니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      text: `이정표에는 희미한 글씨가 적혀 있습니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      text: `'빈민가 마을 →'`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      text: `무언가 중요한 걸 놓친 것 같지만, 그냥 기분 탓으로 여겨 봅시다.

우리는 빨리 할머니에게 가야만 합니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      text: `빨간 망토는 이정표가 가리키는 방향을 따라, 빈민가 마을 쪽으로 걸음을 옮깁니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      text: `눈앞에는 암울한 마을이 보입니다.

마을은 낡고, 사람들은 우울함과 공허함, 끝없는 갈망으로 가득 차 있습니다.

이 근처에 그나마 전기가 돌고 있는 이유는 할머니 덕분이죠.`
    },


    // ==============================
    // 🔍 주변을 살피며 온 경우 - 이상한 냄새
    // ==============================
    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      text: `주변을 살피며 이동하던 빨간 망토는, 풀숲 사이에서 이상한 냄새를 맡습니다.

온몸이 섬뜩해지는 향기.

이 향기의 근원이 어디일까요?`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      text: `향기는 분명 가려진 숲풀에서 납니다.

조심스럽게 풀을 헤치자—`
    },

    // ==============================
    // 💥 우체부 사망 장면 연출
    // search 루트에서만 배경 변경 + 흔들림 + 깜빡임
    // ==============================
    {
      type: "effect",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      sound: "thud.mp3",
      background: "images/Mailman_Die.png",
      shake: true,
      flash: true
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      text: `그곳에는 피에 젖은 우편 가방과 함께, 사람의 형태를 알아볼 수 없을 정도로 짓뭉그러져 있는 우체부가 있었습니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      text: `성난 곰에게 공격을 당한 걸까요?

우체부의 몸은 잔인할 정도로 망가져 있었고, 숲의 습한 공기 속에서도 피 냄새가 선명하게 남아 있었습니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      text: `우체부의 몸은 이미 차갑게 식어 있습니다.

주변에는 싸운 흔적도, 도망친 흔적도 거의 보이지 않습니다.

마치 순식간에 목숨을 잃은 것 같군요.

이런 깊은 숲에 배달을 오면서 총 한 자루 가지고 오지 않았다니. 미련합니다.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      text: `우체부의 가방은 멀쩡합니다.

곰은 배를 채우고 우체부를 버리고 간 걸까요?

가방 안에는 할머니께 보낼 편지가 들어있습니다.

편지를 가져갈 건가요?`
    }
  ],

  choices: [
    // ==============================
    // ✉️ search 루트 - 편지를 가져간다
    // ==============================
    {
      text: "편지를 가져간다",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      effect: {
        Info: 2,
        TookLetter: true,
        AddItem: {
          name: "우체부의 편지",
          desc: "피에 젖은 채 발견된 편지. 봉인은 아직 뜯기지 않았다. 발신자는 김순옥 할머니라고 적혀있다. 순옥 할머니는 빈민가 마을에 살고 계시는 우리 할머니의 친구분이시다."
        }
      },
      record: "빨간 망토는 우체부의 가방에서 편지를 가져갔다.",
      next: "S5_LETTER"
    },

    // ==============================
    // ✉️ search 루트 - 편지를 건드리지 않는다
    // ==============================
    {
      text: "건드리지 않는다",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      effect: {
        Doubt: 1,
        TookLetter: false
      },
      record: "빨간 망토는 우체부의 편지를 건드리지 않았다.",
      next: "S6"
    },

    // ==============================
    // 🪧 road 루트 - 마을로 향한다
    // MoveStyle이 비어 있어도 road 취급
    // ==============================
    {
      text: "빈민가 마을로 향한다",
      condition: function(state) {
        return state.MoveStyle !== "search";
      },
      record: "빨간 망토는 이정표를 따라 빈민가 마을로 향했다.",
      next: "S6"
    }
  ]
},






S5_LETTER: {
  background: "images/Mailman_Die.png",

  steps: [
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `순옥 할머니 편지잖아? 혼자 사시는줄 알았는데.`
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `편지를 전달해 드리는게 좋을거같아.`
    }
  ],

  choices: [
    {
      text: "빈민가 마을로 향한다",
      next: "S6"
    }
  ]
},

S6: {
  background: "images/Scene6_BG.png",

  steps: [
    {
      type: "narration",
      text: function(state) {
        if (state.TookLetter) {
          return `빈민가 마을 입구에 도착했습니다.

손에 쥔 편지의 무게가 이상하게 무겁게 느껴집니다.`;
        } else {
          return `빈민가 마을 입구에 도착했습니다.

어딘가 찜찜한 기분이 계속 남아 있습니다. 그 죽은 우체부의 가방에 무언가 있었던게 뒤늦게 떠오르네요. 하지만 과거에 묶이는건 어리석은 일입니다.`;
        }
      }
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `여기가… 할머니가 계신 마을…`
    }
  ],

  choices: [
    {
      text: "마을 안으로 들어간다",
      next: "S7",
      fade: true
    }
  ]
},

S7: {
  background: "images/Scene7_BG.png",

  steps: [
    {
      type: "narration",
      text: `빈민가 마을 안으로 발을 들이는 순간, 공기의 냄새가 달라집니다.

축축하게 젖은 돌바닥과 오래된 먼지 냄새, 그리고 썩은 음식 냄새가 뒤섞여 코끝을 찌릅니다.`
    },
    {
      type: "narration",
      text: `마을은 이상할 정도로 조용합니다.

누군가는 벽에 기대어 고개를 숙인 채 숨만 쉬고 있었고, 누군가는 멍하니 허공만 바라보고 있습니다.

살아있다는 느낌보다는… 버텨내고 있다는 느낌에 가까웠습니다.`
    },
    {
      type: "narration",
      text: `빨간 망토는 천천히 주변을 둘러봅니다.

어딘가 시선이 느껴집니다.

하지만 누구도 먼저 말을 걸어오지는 않습니다.`
    },
    {
      type: "effect",
      background: "images/Scene7_Center_BG.png"
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `...이상한 마을이야. 하지만 다들 나쁜 사람같아 보이지는 않는데.`
    }
  ],

choices: [
  {
    text: "우울해 보이는 노인에게 다가간다",
    condition: (state) => !state.SeenDepressed,
    next: "S7_OLDMAN_DEPRESSED"
  },
  {
    text: "허공을 바라보는 노인에게 말을 건다",
    condition: (state) => !state.SeenCrazy,
    next: "S7_OLDMAN_CRAZY"
  },
  {
    text: "싸우고 있는 노인들을 바라본다",
    condition: (state) => !state.SeenFight,
    next: "S7_OLDMAN_FIGHT"
  },
  {
    text: "더 이상 시간을 낭비할 수 없다",
    condition: (state) =>
      !state.LetterDelivered &&
      state.SeenDepressed &&
      state.SeenCrazy &&
      state.SeenFight,
    next: "S7_TIME_WASTE"
  }
]
},

S7_OLDMAN_DEPRESSED: {
  background: "images/Scene7_Center_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "우울한 노인",
      text: `보내도 돌아오지 않아... 어제 보낸거같은데... 어제던가...? 그제였나...?`
    },
    {
      type: "narration",
      text: `노인은 다리가 3개 뿐인 의자에 앉아 멍하니 우중충한 하늘을 응시합니다.`
    },
    {
      type: "narration",
      text: `편지에 대해서 중얼거리네요. 빨간망토는 편지를 가지고 있나요?`
    }
  ],

choices: [
{
  text: "편지를 건네주며 말을 건다",
  condition: (state) => !state.Inventory.some(item => item.name === "우체부의 편지"),
  requiredItem: "우체부의 편지",
  failMessage: "당신은 편지를 챙기지 않았다.",
  mentalRoll: true,
  effect: {
    SeenDepressed: true
  },
  next: "S7"
},
  {
    text: "편지를 건네주며 말을 건다",
    condition: (state) => state.Inventory.some(item => item.name === "우체부의 편지"),
    effect: {
      SeenDepressed: true,
      LetterDelivered: true
    },
    next: "S7_OLDMAN_DEPRESSED_LETTER"
  },
  {
    text: "아직 말을 걸지 않고 돌아간다",
    effect: {
      SeenDepressed: true
    },
    next: "S7"
  }
]
},

S7_OLDMAN_DEPRESSED_LETTER: {
  background: "images/Scene7_Center_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `혹시... 이 편지를 찾고 계신 건가요?`
    },
    {
      type: "dialogue",
      speaker: "우울한 노인",
      text: `...그 봉투... 그 사람의 글씨야. 아직... 아직 기억하고 있었구나.`
    },
    {
      type: "narration",
      text: `노인의 흐릿하던 눈동자가 잠시 흔들립니다.`
    },

    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `할머니... 다른건 아니고 여기 제 할머니의 집으로 가는 길목이 어디인지 아세요?`
    },
       {
      type: "narration",
      text: `노인의 두 눈동자에 생기가 돕니다. 그 편지가 무엇이었는지 모르지만 이 할머니에게 생기를 불어넣어줬군요.`
    },
    {
      type: "dialogue",
      speaker: "우울한 노인",
      text: `물론이지 아가. 요즘 늑대들이 많이 돌아다닌단다... 저쪽 붉은 나무를 기준으로 쭉 돌아서 가렴. 검은 늑대를 피할 수 있을거란다.`
    },
      {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `감사합니다, 할머니. 몸 조심하구 나중에 뵈어요.`
    },
    
       {
      type: "narration",
      text: `다행입니다. 순옥 할머니는 빨간망토의 할머니의 집 위치를 명확하게 알고 계셨어요. 편지를 잘 가져온거같습니다.`
    },

  ],

choices: [
  {
    text: "할머니의 집으로 향한다",
    effect: {
      Info: 1,
      Trust: 1
    },
    record: "순옥 할머니에게 편지를 전하고, 할머니의 집 위치를 알게 되었다.",
    next: "S8_RIGHT"
  }
]
},

S7_OLDMAN_CRAZY: {
  background: "images/Scene7_Center_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "허공을 보는 노인",
      text: `...`
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `할아버지...? 괜찮으세요?`
    },
    {
      type: "narration",
      text: `죽은듯이 말이 없네요. 빨간망토의 말보다 다른것에 정신이 홀린듯한 느낌입니다.`
    }
  ],

  choices: [
    {
      text: "마을 중앙으로 돌아간다",
      effect: {
        SeenCrazy: true
      },
      mentalRoll: true,
      next: "S7"
    }
  ]
},

S7_OLDMAN_FIGHT: {
  background: "images/Scene7_Center_BG.png",

  steps: [
    {
      type: "narration",
      text: `두 노인이 낮은 목소리로 다투고 있습니다.

분노라기보다는, 오래 참아온 무언가가 겨우 새어나오는 소리처럼 들립니다.`
    },
    {
      type: "dialogue",
      speaker: "싸우는 노인 A",
      text: `전기가 언젠가는 끊길거야!!! 그러니 전기를 축내는 네놈을 죽이겠어!!!`
    },
    {
      type: "dialogue",
      speaker: "싸우는 노인 B",
      text: `지랄하네!!! 내가 언제 전기를 축냈다고!!!`
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `...내가 끼어들면 안될거같은 상황이야...`
    }
  ],

  choices: [
    {
      text: "마을 중앙으로 돌아간다",
      effect: {
        SeenFight: true
      },
      mentalRoll: true,
      next: "S7"
    }
  ]
},

S7_TIME_WASTE: {
  background: "images/Scene7_Center_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `...시간낭비야. 얼른 가야겠어...`
    },
    {
      type: "narration",
      text: `빨간 망토는 더 이상 마을 사람들에게 말을 걸지 않고, 할머니의 집을 직접 찾기로 했습니다.`
    }
  ],

  choices: [
    {
      text: "할머니의 집을 찾아간다",
      effect: {
        BlackWolfFirst: true
      },
      next: "S8_BLACK_WOLF"
    }
  ]
},





S8_RIGHT: {
  background: "images/Scene8_BG.png",

  steps: [
    {
      type: "narration",
      text: function(state) {
        if (state.Path === "road") {
          return `붉은 나무를 지나자, 숲 안쪽에서 늑대들의 시선이 느껴집니다.

하지만 그 시선은 날카롭기보다, 이미 당신이 올 것을 알고 기다리던 것에 가깝습니다. 빨간망토가 이곳에 오기까지를 기다린듯 보이네요.`;
        } else {
          return `붉은 나무를 지나자, 숲 안쪽에서 늑대들의 시선이 느껴집니다.

기록 없이 들어온 발걸음은, 이 숲에서 결코 가볍게 여겨지지 않는 듯합니다. 살아남으려면 정신을 똑바로 차려야 겠습니다.`;
        }
      }
    }
  ],

choices: [
  {
    text: "하얀 늑대에게 말을 건다",
    mentalRoll: true,
    mentalType: function(state) {
      return state.Path === "road" ? "friendly" : "neutral";
    },
    next: "S8_WHITE_WOLF"
  },

  {
    text: "회색 늑대에게 말을 건다",
    condition: function(state) {
      return !state.SeenGrayWolf;
    },
    mentalRoll: true,
    mentalType: function(state) {
      return state.Path === "road" ? "friendly" : "neutral";
    },
    next: "S8_GRAY_WOLF"
  },

{
  text: "검은 늑대에게 말을 건다",

  condition: function(state) {
    return !state.SeenBlackWolf;
  },

  effect: {
    TalkedOtherWolf: true
  },

  next: "S8_BLACK_WOLF"
}
]
},











S8_WHITE_WOLF: {
  background: "images/Scene8_WhiteWolf_BG.png",

  steps: [

    // ==============================
    // 🟢 톨게이트를 지나온 경우
    // ==============================
    {
      type: "narration",

      condition: function(state) {
        return state.Path === "road";
      },

      text: `새하얀 털을 가진 늑대 한 마리가 붉은 나무 근처에 서서 부드러운 눈빛을 하고있습니다.

늑대는 빨간 망토를 보자마자 경계하지 않는군요.

오히려... 기다리고 있었다는 듯 조용히 눈을 마주봅니다.`
    },

    {
      type: "narration",

      condition: function(state) {
        return state.Path === "road";
      },

      text: `모든 늑대와의 대화는 정신력을 소모합니다. 하지만 이 늑대는 적대적이지도, 위협적이지도 않으니, 대화가 잘 풀릴거같네요.`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "road";
      },

      speaker: "하얀 늑대",

      text: `...왔구나, 빨간 망토. 이번에는 기록을 남기고 왔네.`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "road";
      },

      speaker: "빨간 망토",

      text: `...저를 아시나요?`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "road";
      },

      speaker: "하얀 늑대",

      text: `아... 너는 날 모르겠구나? 예전에 너희 할머니와 같이 일한 적이 있어서. 네 할머니가 종종 네 이야기를 해줬거든.`
    },

    {
      type: "narration",

      condition: function(state) {
        return state.Path === "road";
      },

      text: `할머니의 직장 동료라니. 할머니는 이 세계에서 가장 많은 전기를 생산하는 유명 대기업 LUPUS Directive (루푸스 디렉티브)에서 비밀 경호원으로 일하셨습니다.`
    },

    {
      type: "narration",

      condition: function(state) {
        return state.Path === "road";
      },

      text: `루푸스 회사에는 여러 동물의 이름을 딴 팀이 존재하며, 지금 빨간망토가 보고있는 현장 팀은 VOLK(볼크)팀입니다.`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "road";
      },

      speaker: "하얀 늑대",

      text: `걱정하지마, 나는 너에게 해를 끼치려는게 아니야. 지금 할머니에게 가고있는 중이지? 이쪽 길은 우리 팀이 순찰중이니까 안전할거야.`
    },

    {
      type: "narration",

      condition: function(state) {
        return state.Path === "road";
      },

      text: `운이 좋군요. 이 길이라면 길가다 갑자기 객사하거나 강도를 만날 일은 없을거같습니다.`
    },



    // ==============================
    // ⚪ 오솔길로 들어온 경우
    // ==============================
    {
      type: "narration",

      condition: function(state) {
        return state.Path === "search";
      },

      text: `새하얀 털을 가진 늑대 한 마리가 붉은 나무 아래 앉아 있습니다.

늑대는 빨간 망토를 바라보지만, 쉽게 다가오지 않습니다.`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "search";
      },

      speaker: "하얀 늑대",

      text: `...기록이 없군.`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "search";
      },

      speaker: "빨간 망토",

      text: `...뭐?`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "search";
      },

      speaker: "하얀 늑대",

      text: `아무것도 아니야. 그냥... 네 냄새가 익숙하지 않을 뿐이야... 할머니의 집으로 향하는 길이지?`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "search";
      },

      speaker: "빨간 망토",

      text: `그걸 어떻게 알고 계시는거죠?`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "search";
      },

      speaker: "하얀 늑대",

      text: `아... 너는 날 모르겠구나? 예전에 너희 할머니와 같이 일한 적이 있어서. 네 할머니가 종종 네 이야기를 해줬거든.`
    },

    {
      type: "narration",

      condition: function(state) {
        return state.Path === "search";
      },

      text: `늑대는 적대적이지는 않지만, 그렇다고 편안해 보이지도 않습니다.

마치 빨간 망토를 경계해야 하는지 고민하는 것 같군요.`
    },

    {
      type: "dialogue",

      condition: function(state) {
        return state.Path === "search";
      },

      speaker: "하얀 늑대",

      text: `걱정하지마, 나는 너에게 해를 끼치려는게 아니야. ...네가 톨게이트를 지나지 않아서 다들 친절하지는 않겠지만, 내가 도와줄게. 따라 와.`
    },



    // ==============================
    // 🔵 공통 안내
    // ==============================
    {
      type: "narration",

      condition: function(state) {
        return state.TalkedOtherWolf !== true;
      },

      text: `다른 늑대들에게 말을 못 걸어본건 아쉽지만, 어쩔 수 없죠. 지금은 할머니를 만나러 가야합니다.

하얀 늑대는 말없이 앞장서며, 빨간 망토를 숲 깊숙한 곳으로 안내하기 시작합니다.`
    }

  ],

  choices: [
    {
      text: "할머니의 집 앞마당으로 이동한다",

      effect: {
        Info: 1,
        Mental: -1
      },

      bgm: "scene9.mp3",
      longTransition: true,
      transitionDuration: 6500,

      next: "S9"
    }
  ]
},


S8_GRAY_WOLF: {
  background: "images/Scene8_GrayWolf_BG.png",

  steps: [

    {
      type: "narration",
      text: `빨간 망토는 어딘가 익숙해 보이는 여성에게 다가가 말을 걸기로 했습니다.`
    },
        {
      type: "narration",
      text: `그녀는 빨간망토를 중립적인 눈으로 바라봅니다. 빨간망토가 오솔길로 왔든, 톨게이트를 지나서 왔든 말이죠.`
    },

    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `저기... 혹시 전에 어디선가 뵌 적 있나요?`
    },

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `글쎄. 네가 기억하지 못하는 것뿐일 수도 있지. 그나저나 여기는 무슨일이야?`
    },

    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `할머니한테... 선물을 주려고 들렀어요...`
    },

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `그래? 어떡하지. 여긴 보안 검색이 적용이 잘 안되는 곳이라 자유롭게 다니지 못할텐데.`
    },

    {
      type: "narration",
      text: `회색 늑대는 잠시 빨간망토를 바라보고는 하얀색에 건장한 체격을 가진 남성을 가리킵니다.`
    },

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `저쪽에 하얀 강아지 같은 남자 있지? 저 사람한테 가면 널 도와줄거야.`
    },

    {
      type: "narration",
      text: `그녀의 손에는 낡은 검은색 노트가 들려 있습니다. 표지는 오래 닳아 있었지만, 이상하게도 페이지 끝은 새것처럼 깨끗했습니다.`
    }

  ],

  choices: [
    {
      text: "검은색 노트에 대해 물어본다",
      effect: {
        SeenGrayWolf: true,
        TalkedOtherWolf: true,
        Info: 10
      },
      next: "S8_GRAY_WOLF_NOTE"
    },
    {
      text: "묻지 않고 하얀 늑대에게 향한다",
      effect: {
        SeenGrayWolf: true,
        TalkedOtherWolf: true
      },
      next: "S8_GRAY_WOLF_SKIP"
    }
  ]
},

S8_GRAY_WOLF_NOTE: {
  background: "images/Scene8_GrayWolf_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `그 손에 들고 있는 노트는 뭐예요?`
    },

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `이건 기록장이야. 내가 본 것, 들은 것, 그리고 누군가가 잊어버린 것들을 적어두는 물건이지.`
    },

        {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `궁금하니? 지금 꽤나 흥미로운 사건을 조사 중이거든.`
    },

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `너희가 사용하는 저 반짝이는 불빛의 출처가 궁금하지 않아?`
    },

    {
      type: "narration",
      text: `회색 늑대의 말은 이상할 정도로 차분했습니다. 검은색 장미같이 날서있으면서도, 어딘가 끌어당기는 묘한 매력이 있는 회색 늑대는 빨간망토의 마음을 사로잡았죠.`
    },

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `뇌가 생각을하고, 감정을 느낄때 전기가 생성된다는 말 들어본적 있어? 예전부터 소설과 영화에서 자주 나오던 주제야.`
    }
    ,
        {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `그리고 더 똑똑하고 예민한 사람의 뇌 일수록 고통, 절망, 쾌락을 선명하게 느끼며 더 많은 전기를 생성해내.`
    },
        {
      type: "warning",
      text: `빨간망토의 눈이 크게 커지며 숨이 턱 막히는 기분입니다. 여태 빨간망토가, 마을사람이, 전세계 사람들이 당연하게 써오는전기가 다른 사람의 머리에서 적출한 뇌에서 나오는 전기라는거니까요.`
    },
        {
      type: "narration",
      text: `그렇다면... 할머니가 전기를 만들어 내기 위해 뇌를 훔쳤다는걸까요...?`
    }
    ,

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `너무 자극적이였으려나? 하지만 진실이란다. 그리고 우린 그 중에서 어떤 뇌를 도둑 맞았거든. 아마... 우린 곧 다시 만날거야 꼬마야.`
    }
        ,

    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `일단 저쪽에 있는 하얀 늑대에게 가봐. 그 친구는 친절하니까.`
    }

  ],

  choices: [
    {
      text: "하얀 늑대에게 향한다",
      next: "S8_WHITE_WOLF"
    }
  ]
},

S8_GRAY_WOLF_SKIP: {
  background: "images/Scene8_GrayWolf_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 더 묻지 않고, 회색 늑대가 가리킨 하얀 늑대에게 향했습니다.`
    }
  ],

  choices: [
    {
      text: "하얀 늑대에게 향한다",
      next: "S8_WHITE_WOLF"
    }
  ]
},


S8_BLACK_WOLF: {
  background: "images/Scene8_BlackWolf_BG.png",

  steps: [
    // ==============================
    // 🔴 오솔길로 들어온 경우
    // ==============================

    {
  type: "narration",
  condition: function(state) {
    return state.Path === "search";
  },
  text: `그곳에서 빨간망토가 먼저 마주한건... 검은 늑대라고 불리는 보안 경비팀의 리더였습니다. 그의 표정이 잔뜩 일그러져있네요.`
},

    {
  type: "narration",
  condition: function(state) {
    return state.Path === "search";
  },
  text: `당신이 오솔길로 왔기 때문에 검은 늑대는 당신을 증오하며, 혐오하는 눈빛으로 바라봅니다.`
},
    {
      type: "dialogue",
      condition: function(state) {
        return state.Path === "search";
      },
      speaker: "검은 늑대",
      text: `네놈같이 보안 검색대를 병풍 취급하는 놈들 때문에 내가 이 개고생을 하는 건데. 알기나 해?`
    },

{
  type: "warning",
  condition: function(state) {
    return state.Path === "search";
  },
  text: `검은 늑대가 위협적으로 가까이 다가옵니다. 거대한 덩치에 그나마 남아있던 햇빛도 차단해버리고, 그의 목에서 낮게 깔린 으르렁거림이 긁히듯 새어나옵니다.`
},
{
  type: "mentalDamage",
  condition: function(state) {
    return state.Path === "search";
  },
  mentalType: "black_hostile"
},

    {
      type: "narration",
      condition: function(state) {
        return state.Path === "search";
      },
      text: `빨간 망토가 뒷걸음질치려는 순간, 회색 늑대가 조용히 시선을 돌립니다. 직접 막아선 것은 아니지만, 그 눈빛만으로도 검은 늑대의 움직임이 잠시 멈춥니다.`
    },

    {
      type: "dialogue",
      condition: function(state) {
        return state.Path === "search";
      },
      speaker: "검은 늑대",
      text: `... 기록자 앞이라 이 정도로 끝내는 줄 알아. 쯧, 성가신 것들.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.Path === "search";
      },
      text: `아마 저 기록자는 늑대들의 행동들도 기록하나봅니다. 어쩌면 다른 정보들도 가지고 있을까요?`
    },

    // ==============================
    // 🟢 톨게이트로 들어온 경우
    // ==============================
    {
      type: "narration",
      condition: function(state) {
        return state.Path === "road";
      },
      text: `검은 늑대는 빨간 망토를 향해 다가오더니, 별다른 말 없이 손목에 달린 기록 패널을 확인합니다. 어쩌면 그의 큰 키 때문에 빨간망토를 발견조차 못한걸지도 모릅니다.`
    },

    {
      type: "dialogue",
      condition: function(state) {
        return state.Path === "road";
      },
      speaker: "검은 늑대",
      text: `뭐야 너 살아있었냐? 그나저나 보안 기록은 되네. 배터리 나갔나.`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.Path === "road";
      },
      text: `검은 늑대는 빨간 망토에게 더 이상 관심을 두지 않습니다. 마치 확인할 것만 확인했다는 듯, 곧장 회색 늑대 쪽으로 걸어갑니다.`
    },

    {
      type: "dialogue",
      condition: function(state) {
        return state.Path === "road";
      },
      speaker: "검은 늑대",
      text: `야, 기록자. 이쪽 기록 확인 좀 해봐. 기계가 완전히 병신이 된건 아닌가본데. 저 꼬맹이 들어왔잖아. 기록 있어?`
    },

    {
      type: "dialogue",
      condition: function(state) {
        return state.Path === "road";
      },
      speaker: "회색 늑대",
      text: `그래?잠시만... 그러면 누가 보안 검색대 전기라도 빼서 사용하는건가?`
    },

      {
      type: "dialogue",
      condition: function(state) {
        return state.Path === "road";
      },
      speaker: "회색 늑대",
      text: `기록은 있네, 안녕~ 작은 꼬마~`
    },

    {
      type: "narration",
      condition: function(state) {
        return state.Path === "road";
      },
      text: `아무래도 검은 늑대는 빨간 망토에게 관심이 없는거 같습니다....`
    }
  ],

  choices: [
    {
      text: "공포를 견디고 물러선다",
      condition: function(state) {
        return state.Path === "search";
      },
      effect: {
        SeenBlackWolf: true,
        TalkedOtherWolf: true
      },
      mentalRoll: true,
      mentalType: "black_hostile",
      next: "S8_RIGHT"
    },

    {
      text: "다른 늑대들에게 말을 걸어본다",
      condition: function(state) {
        return state.Path === "road";
      },
      effect: {
        SeenBlackWolf: true,
        TalkedOtherWolf: true
      },
      next: "S8_RIGHT"
    }
  ]
},









S9: {
  background: "images/Scene9_Grandma_Yard_BG.png",

  steps: [
    {
      type: "narration",
      text: `하얀 늑대는 말없이 앞장서서 숲길을 걸었습니다.

그의 발걸음은 조용했지만, 이상할 정도로 망설임이 없었습니다.`
    },
    {
      type: "narration",
      text: `이 존재를 믿어도 되는 걸까요?

이 길은 분명 할머니의 마당으로 향하는 길이 맞습니다. 하지만 하얀 늑대는 그 사실을 왜 알고 있는 걸까요.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `곧 도착합니다. 할머니의 집은 이 앞이에요.`
    },
    {
      type: "narration",
      text: `나무들이 조금씩 드문드문해지고, 오래된 집 한 채가 모습을 드러냅니다.

할머니의 집입니다.`
    },
    {
      type: "narration",
      text: `할머니와 함께 보냈던 추억이 많은 오두막은 이상하게도 오늘따라 음산해 보입니다.

불길한 기운이 오두막을 꽁꽁 감싸고 있는 것만 같았습니다.`
    },
    {
      type: "narration",
      text: `마당에 있던 바둑이도 보이지 않습니다.

낯선 사람이 코앞까지 왔는데도 짖는 소리가 들리지 않는 걸 보면, 아마 바둑이는 이곳에 없는 것 같습니다.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `먼저 들어가죠. 할머님은 안에 계십니다.`
    },
    {
      type: "narration",
      text: `하지만 빨간 망토는 문득, 마당 한쪽에서 어긋난 냄새를 느낍니다.

흙냄새, 낡은 나무 냄새, 그리고... 오래 닫혀 있던 공간이 열렸을 때 나는 냄새입니다.`
    }
  ],

  choices: [
    {
      text: "하얀 늑대를 따라 할머니의 집으로 들어간다",
      bgm: "scene9.mp3",
      longTransition: true,
      transitionDuration: 4500,
      next: "S10"
    },
    {
      text: "주변을 살펴본다",
      bgm: "scene9.mp3",
      mentalRoll: true,
      mentalType: "friendly",
      next: "S9_BASEMENT"
    }
  ]
},

S9_BASEMENT: {
  background: "images/Scene9_Basement_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 하얀 늑대의 말에 바로 대답하지 않았습니다.

대신 천천히 고개를 돌려 마당을 살펴보았죠.`
    },
    {
      type: "narration",
      text: `정신력이 소모되었습니다.

무언가를 의심하고, 보지 말아야 할 것을 보려는 일은 생각보다 많은 힘을 필요로 합니다.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `...무엇을 보고 있나요?`
    },
    {
      type: "narration",
      text: `마당 한쪽, 덩굴과 낡은 장작더미 사이.

그곳에 있어서는 안 될 문이 보입니다.`
    },
    {
      type: "narration",
      text: `정확히는, 열려서는 안 되었던 문이 열려 있는 것이었죠.`
    },
    {
      type: "warning",
      text: `지하로 내려가는 문입니다.

그리고 그 문은... 아주 조금 열려 있습니다.`
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `할머니 집에... 이런 곳이 있었나?`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `그곳은 볼 필요 없습니다. 할머님께서 기다리고 계십니다.`
    },
    {
      type: "narration",
      text: `하얀 늑대의 목소리는 여전히 부드러웠습니다.

하지만 이상하게도, 그 말은 부탁보다 경고에 가까웠습니다.`
    },
    {
      type: "narration",
      text: `지하실 안쪽에서는 아무 소리도 들리지 않습니다.

하지만 그 침묵은 이상하게도 빨간 망토를 부르고 있는 것처럼 느껴집니다.`
    }
  ],

  choices: [
    {
      text: "할머니의 집으로 들어간다",
      bgm: "scene9.mp3",
      longTransition: true,
      transitionDuration: 4500,
      next: "S10"
    },
    {
      text: "열려 있는 지하실로 들어간다",
      bgm: "scene9.mp3",
      longTransition: true,
      transitionDuration: 4500,
      next: "S9_BASEMENT_CORE"
    }
  ]
},







// ==============================
// 🧠 S9-1 지하실 핵심 코어 발견
// 할아버지의 뇌 코어와 옆에 놓인 기밀 서류를 발견하는 씬
// ==============================
S9_BASEMENT_CORE: {
  background: "images/Scene9_Basement_Core_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 조심스럽게 지하실 문을 열고 아래로 내려갔습니다.`
    },
    {
      type: "narration",
      text: `축축한 공기 속에서 낡은 기계음이 낮게 울리고 있었습니다.`
    },
    {
      type: "warning",
      text: `그곳에는 있어서는 안 될 것이 있었습니다.

유리관 안에서, 누군가의 뇌가 아직도 희미하게 빛나고 있었습니다.`
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `...이게 뭐야?`
    },
    {
      type: "narration",
      text: `빨간 망토는 본능적으로 깨달았습니다.

이것은 단순한 기계가 아닙니다. 누군가의 삶이 아직도 전기로 소비되고 있는 흔적입니다.`
    },
    {
      type: "narration",
      text: `유리관 옆에는 오래된 서류철 하나가 놓여 있습니다.

먼지에 덮여 있었지만, 표지에 적힌 글자는 아직 읽을 수 있었습니다.`
    },
    {
      type: "warning",
      text: `LUPUS Directive 기밀 연구 기록

NEURAL CORE GENERATION PROJECT`
    }
  ],

  choices: [
    {
      text: "옆에 놓인 서류를 읽는다",
      effect: {
        Info: 5,
        ReadCoreDocument: true,
        FoundGrandfatherCore: true
      },
      record: "빨간 망토는 지하실에서 기밀 연구 기록을 읽었다.",
      next: "S9_BASEMENT_DOCUMENT"
    },
    {
      text: "서류를 읽지 않고 코어에 다가간다",
      effect: {
        Info: 2,
        FoundGrandfatherCore: true
      },
      record: "빨간 망토는 서류를 읽지 않고 코어에 다가갔다.",
      next: "S10_SECRET"
    }
  ]
},


// ==============================
// 📄 S9-1 지하실 기밀 서류
// LUPUS Directive 연구 기록을 종이 문서창으로 보여주는 씬
// ==============================
S9_BASEMENT_DOCUMENT: {
  background: "images/Scene9_Basement_Core_BG.png",

  steps: [
    {
      type: "documentPage",
      title: "LUPUS Directive 기밀 연구 기록",
      body: `
        <p><strong>문서 등급:</strong> 최고 기밀</p>

        <p><strong>연구명:</strong> Neural Core Generation Project</p>

        <p><strong>대상:</strong> Vincent Edward Cliff.</p>

        <p>해당 실험체는 전 LUPUS Directive 소속 연구원이다.</p>

        <p>해당 대상은 불가피한 사고로 인해 육체 기능이 정지된 상태에서 발견되었으나, 뇌 기능은 안정적으로 보존되어 있었다.</p>

        <p>의료진은 치료를 지속할 경우 대상이 의식을 회복할 가능성이 있다는 소견을 남겼다.</p>

        <p>그러나 대상의 아내는 치료 지속이 아닌 뇌 기능 연구 참여에 동의했다.</p>

        <p>대상은 고감도 신경 반응과 비정상적으로 높은 전기 생성률을 보유하고 있으며, 예민하고 섬세한 성향 탓에 적은 자극에도 강한 반응을 보인다.</p>

        <p><strong>연구 목적:</strong> 인간의 뇌가 감정, 기억, 고통, 공포를 처리할 때 발생하는 신경 전류를 증폭하여 도시 전력망에 연결하는 것.</p>

        <p>하지만 한 가지 도달 가능한 결말이 존재한다.</p>

        <p>저렇게 예민한 뇌에서 인격을 지운다면, 특유의 예민함만 남은 채 완벽하게 작동하는 무한 에너지원이 생기지 않을까.</p>

        <p>그리고 그 에너지를 우리 군사 기지의 핵심 코어에 연결한다면 어떨까.</p>

        <p><strong>핵심 원리:</strong> 뇌는 살아 있는 동안 가장 많은 전기 신호를 발생시킨다. 특히 감정이 예민하고 사고 능력이 높은 사람일수록 더 강한 출력값을 보인다.</p>

        <p><strong>기록:</strong> 대상자의 육체 기능은 정지되었으나, 뇌 기능은 안정적으로 보존되었다. 대상자는 사망 처리되었으나, 코어 내부에서 지속적인 전기 반응을 보이고 있다.</p>

        <p><strong>할머니의 개입:</strong> 할머니는 이 프로젝트가 인간을 에너지원으로 소비한다는 사실을 알고 있었다. 그러나 그녀 역시, 치료 가능성이 남아 있던 남편을 연구 대상으로 넘긴 선택에서 자유로울 수 없다.</p>

        <p><strong>문서 여백에 남겨진 필기:</strong></p>

        <p><em>할머니의 글씨체다.</em></p>

        <p><strong>미친 인간들이야. 미친 인간들이라고! 내 남편은 이런 걸 원하지 않았어. 않았다고!...</strong></p>

        <p><strong>결론:</strong> 이 코어는 기계가 아니다. 한 사람의 생존 기록이며, 동시에 한 가족이 숨겨온 죄의 증거다.</p>
      `,
      buttonText: "서류를 덮는다",
      next: "S9_BASEMENT_CORE_AFTER_DOC"
    }
  ]
},


// ==============================
// 🧠 S9-1 서류 확인 후 코어 선택
// 할아버지의 뇌를 파괴할지, 진실을 안고 돌아갈지 선택하는 씬
// ==============================
S9_BASEMENT_CORE_AFTER_DOC: {
  background: "images/Scene9_Basement_Core_BG.png",

  steps: [
    {
      type: "narration",
      text: `서류를 모두 읽은 빨간 망토는 한동안 아무 말도 하지 못했습니다.`
    },
    {
      type: "narration",
      text: `유리관 안에서 희미하게 빛나는 것은 낯선 누군가의 뇌가 아니었습니다.

그것은 할머니가 끝까지 되찾으려 했던 사람.

빨간 망토의 할아버지였습니다.`
    },
    {
      type: "narration",
      text: `돌아가신 줄 알았던 할아버지는 살아 계셨습니다.

여태 저 무한하며 순수한 상태로 살아 계셨죠.`
    },
    {
      type: "narration",
      text: `치료 가능성이 있었음에도, 할머니는 할아버지를 통 속의 뇌로 만들어 버린 겁니다.`
    },
    {
      type: "warning",
      text: `이제 빨간 망토는 알고 있습니다.

할머니는 단순히 무언가를 훔친 사람이 아닙니다.

하지만 그렇다고 해서, 그녀가 아무 죄도 없는 사람이라고 말할 수도 없습니다.`
    },
    {
      type: "narration",
      text: `할머니가 그 잔혹한 선택으로 얻은 건 무엇이었을까요?`
    },
    {
      type: "narration",
      text: `통 속의 뇌는 부드럽게 일렁입니다.

마치 빨간 망토를 알아보는 듯 보이네요.`
    },
    {
      type: "warning",
      text: `빨간 망토는 깨닫습니다.

이 세상은 누군가의 선의로 만들어진 것이 아닙니다.

누군가의 변명으로, 누군가의 기준으로, 누군가의 희생을 정당화하며 굴러가고 있었던 겁니다.`
    }
  ],

  choices: [
    {
      text: "할아버지의 뇌를 파괴한다",
      effect: {
        EndingRoute: "destroy",
        DestroyedGrandfatherCore: true,
        FoundGrandfatherCore: true,
        ReadCoreDocument: true,
        Info: 10,
        Doubt: 10
      },
      record: "빨간 망토는 할아버지의 뇌를 파괴했다.",
      next: "S_END_DESTROY"
    },
    {
      text: "아무것도 건드리지 않고 돌아간다",
      effect: {
        EndingRoute: "truth",
        FoundGrandfatherCore: true,
        ReadCoreDocument: true,
        Info: 5
      },
      record: "빨간 망토는 진실을 알고도 코어를 건드리지 않았다.",
      next: "S10_SECRET"
    }
  ]
},


// ==============================
// ❓ S10_SECRET 선의 기준 질문
// 플레이어가 자신의 선의 기준을 직접 입력하는 메타 질문 씬
// ==============================
S10_SECRET: {
  background: "images/Scene10_Secret_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 지하실에서 본 것을 잊을 수 없었습니다.`
    },
    {
      type: "narration",
      text: `이제 할머니의 집으로 들어가는 일은 단순한 방문이 아닙니다. 진실을 확인하러 가는 길입니다.`
    },
    {
      type: "narration",
      text: `당신은 모든 비밀을 알았습니다. 그리고 그 비밀은, 진실을 가리고 각기 다른 사람들의 윤리와 선의 기준으로 만들어졌죠.`
    },
    {
      type: "narration",
      text: `이제, 제가 물어보겠습니다.`
    },
    {
      type: "textInput",
      text: `당신의 선의 기준은 무엇입니까?`,
      placeholder: "당신의 기준을 입력하세요.",
      buttonText: "기준을 정한다",
      saveAs: "GoodnessStandard",
      next: "S10_SECRET_ANSWER"
    }
  ]
},


// ==============================
// ❓ S10_SECRET_ANSWER 기준 입력 후 응답
// 입력값과 상관없이 신 10으로 진입시키는 연결 씬
// ==============================
S10_SECRET_ANSWER: {
  background: "images/Scene10_Secret_BG.png",

  steps: [
    {
      type: "narration",
      text: `그렇군요. 걱정하지 마세요, 이제 당신의 기준이 실현될 겁니다.`
    }
  ],

  choices: [
    {
      text: "할머니의 집으로 들어간다",
      next: "S10"
    }
  ]
},


// ==============================
// 🩸 S10 할머니의 집 내부
// 침대의 핏자국, 당황한 하얀 늑대, 작업 중인 회색 늑대와 검은 늑대를 목격하는 씬
// ==============================
S10: {
  background: "images/Scene10_Grandma_House_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 할머니의 집 안으로 들어갔습니다.

문은 열려 있었고, 안쪽은 이상할 정도로 조용했습니다.`
    },
    {
      type: "narration",
      text: `할머니가 누워 있어야 할 침대에는 아무도 없었습니다.

대신 구겨진 이불과 붉은 핏자국만이 남아 있었습니다.`
    },
    {
      type: "warning",
      text: `침대 위에는 할머니가 없었습니다.

할머니가 끝까지 숨기려 했던 선택의 대가만이 붉게 남아 있었습니다.`
    },
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `...할머니?`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `벌써... 돌아왔나요?`
    },
    {
      type: "narration",
      text: `하얀 늑대의 목소리는 처음으로 흔들렸습니다.

언제나 부드럽던 얼굴에는 당황이 스쳐 지나갔습니다.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `아직 들어오면 안 됐는데.`
    },
    {
      type: "narration",
      text: `방 안쪽에서는 회색 늑대가 작은 유리 용기 앞에 서 있었습니다.

그녀는 어떤 뇌를 통 속에 넣은 채, 신경 반응을 관찰하고 있었습니다.`
    },
    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `생각보다 빨리 왔네.`
    },
    {
      type: "narration",
      text: `검은 늑대는 방 구석에 앉아 있었습니다.

그는 말없이, 잘게 잘린 무언가를 포대기 속에 넣고 있었습니다.`
    },
    {
      type: "warning",
      text: `그것이 누구의 것인지 정확히 보이지는 않습니다.

하지만 포대기 사이로 보이는 천 조각은, 할머니가 입던 옷의 색과 닮아 있었습니다. 비릿한 피 냄새가 방안을 가득 채우고 있습니다.`
    },
    {
      type: "dialogue",
      speaker: "검은 늑대",
      text: `아, 유골이라도 챙겨 줄까?`
    },
    {
      type: "narration",
      text: `빨간 망토는 그제야 깨달았습니다.

이곳은 더 이상 할머니의 집이 아니었습니다.

누군가의 신체를 정리하고 있던 현장이었습니다.`
    }
  ],

  choices: [
    {
      text: "무슨 일이냐고 묻는다",
      next: "S10_BRANCH"
    }
  ]
},


// ==============================
// 🧭 S10 엔딩 분기 판단
// 정보, 신뢰, 지하실 문서, 코어 파괴 여부에 따라 엔딩 선택지가 하나만 뜨는 씬
// ==============================
S10_BRANCH: {
  background: "images/Scene10_Grandma_House_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `이게... 다 뭐예요?`
    },
    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `그러니까 내가 앞에서 보초 한 명 서자고 했잖아~. 원래 이 장면은 꼬마 아가씨가 보면 안 되는 장면이었는데.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `...빨간 망토님. 진정하세요. 설명할 수 있습니다.`
    },
    {
      type: "dialogue",
      speaker: "검은 늑대",
      text: `뭐, 설명이 필요할까? 이미 다 봤잖아.`
    },
    {
      type: "narration",
      text: `빨간 망토는 지금까지 보고, 듣고, 의심하고, 믿어온 모든 것을 떠올렸습니다.

이제 어떤 결론에 도달할지는, 이미 지나온 선택들이 정하고 있었습니다.`
    }
  ],

    choices: [
    // ==============================
    // 🔥 히든 엔딩: 파괴
    // 할아버지의 뇌를 이미 파괴한 경우
    // ==============================
    {
      text: "더 이상 들을 필요 없다",
      condition: function(state) {
        return state.DestroyedGrandfatherCore === true;
      },
      effect: {
        EndingRoute: "destroy"
      },
      record: "빨간 망토는 이미 할아버지의 뇌를 파괴했다.",
      next: "S_END_DESTROY"
    },

    // ==============================
    // 👁️ 진실 엔딩
    // 할아버지의 뇌를 파괴하지 않았고, 정보가 25를 넘은 경우
    // ==============================
    {
      text: "나는 모든 걸 알고 있다",
      condition: function(state) {
        const info = state.Info || 0;

        return state.DestroyedGrandfatherCore !== true &&
               info > 25;
      },
      effect: {
        EndingRoute: "truth"
      },
      record: "빨간 망토는 자신이 알고 있는 모든 진실을 마주했다.",
      next: "S_END_TRUTH"
    },

    // ==============================
    // 🤍 신뢰 엔딩
    // 정보가 20을 넘고 25 이하이며, 신뢰가 2 이상인 경우
    // ==============================
    {
      text: "하얀 늑대의 설명을 듣는다",
      condition: function(state) {
        const info = state.Info || 0;
        const trust = state.Trust || 0;

        return state.DestroyedGrandfatherCore !== true &&
               info > 20 &&
               info <= 25 &&
               trust >= 2;
      },
      effect: {
        EndingRoute: "trust"
      },
      record: "빨간 망토는 하얀 늑대의 설명을 믿기로 했다.",
      next: "S_END_TRUST"
    },

    // ==============================
    // 🌫️ 무지 엔딩
    // 정보가 20을 넘지 못한 경우
    // ==============================
    {
      text: "나는 아무것도 모르겠다",
      condition: function(state) {
        const info = state.Info || 0;

        return state.DestroyedGrandfatherCore !== true &&
               info <= 20;
      },
      effect: {
        EndingRoute: "ignorance"
      },
      record: "빨간 망토는 끝내 진실을 이해하지 못했다.",
      next: "S_END_IGNORANCE"
    },

    // ==============================
    // 🛡️ 안전장치 분기
    // 위 조건 어디에도 안 걸리는 경우 선택지가 사라지는 버그 방지
    // 예: 정보 21~25인데 신뢰가 2 미만인 경우
    // ==============================
    {
      text: "늑대들에게 진실을 말하라고 한다",
      condition: function(state) {
        const info = state.Info || 0;
        const trust = state.Trust || 0;

        return state.DestroyedGrandfatherCore !== true &&
               info > 20 &&
               info <= 25 &&
               trust < 2;
      },
      effect: {
        EndingRoute: "truth"
      },
      record: "빨간 망토는 늑대들에게 진실을 요구했다.",
      next: "S_END_TRUTH"
    }
  ]
},


// ==============================
// 🌫️ END 1 무지 엔딩
// 정보가 부족한 상태로 사건을 제대로 이해하지 못하고 끝나는 엔딩
// ==============================
S_END_IGNORANCE: {
  background: "images/Scene_End_Ignorance_BG.png",

  steps: [
    {
      type: "narration",
      text: `빨간 망토는 끝내 이 방에서 무슨 일이 일어났는지 이해하지 못했습니다.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `괜찮습니다. 몰라도 되는 일도 있어요.`
    },
    {
      type: "narration",
      text: `그 말은 다정했습니다.

그래서 더 무서웠습니다.`
    },
    {
      type: "narration",
      text: `할머니의 침대에는 피가 남아 있었고, 방 안쪽의 장치들은 여전히 낮게 울리고 있었습니다.`
    },
    {
      type: "warning",
      text: `무지 엔딩

당신은 끝까지 아무것도 알지 못했습니다.

하지만 모른다는 것은, 때로 가장 안전한 결말입니다.`
    }
  ],

  choices: [
    {
      text: "엔딩 크레딧을 본다",
      next: "S_CREDIT_IGNORANCE"
    }
  ]
},


// ==============================
// 🤍 END 2 신뢰 엔딩
// 하얀 늑대의 설명을 믿고 사건을 필요한 처리로 받아들이는 엔딩
// ==============================
S_END_TRUST: {
  background: "images/Scene_End_Trust_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `할머님은 너무 오래 위험한 것을 숨기고 계셨습니다.`
    },
    {
      type: "dialogue",
      speaker: "하얀 늑대",
      text: `우리는 누군가를 해치기 위해 온 것이 아닙니다. 더 큰 피해를 막기 위해 온 겁니다.`
    },
    {
      type: "narration",
      text: `빨간 망토는 하얀 늑대의 목소리를 들었습니다.

그는 여전히 부드러웠고, 여전히 다정했습니다.`
    },
    {
      type: "narration",
      text: `그래서 빨간 망토는 믿기로 했습니다.

누군가가 이렇게 다정하게 말한다면, 그 안에도 분명 선의가 있을 거라고.`
    },
    {
      type: "warning",
      text: `신뢰 엔딩

당신은 누군가의 설명을 믿었습니다.

그것이 가장 선한 선택이라고 배웠기 때문입니다.`
    }
  ],

  choices: [
    {
      text: "엔딩 크레딧을 본다",
      next: "S_CREDIT_TRUST"
    }
  ]
},


// ==============================
// 👁️ END 3 진실 엔딩
// 충분한 정보 또는 지하실 문서 확인으로 진실을 마주하는 엔딩
// ==============================
S_END_TRUTH: {
  background: "images/Scene_End_Truth_BG.png",

  steps: [
    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `네가 본 게 맞아. 이건 단순한 살인도, 단순한 구조도 아니야.`
    },
    {
      type: "dialogue",
      speaker: "회색 늑대",
      text: `누군가는 사랑이라고 불렀고, 누군가는 연구라고 불렀고, 누군가는 필요한 희생이라고 불렀지.`
    },
    {
      type: "narration",
      text: `빨간 망토는 침대의 핏자국과, 유리 용기 속의 뇌와, 검은 늑대의 포대기를 번갈아 바라보았습니다.`
    },
    {
      type: "narration",
      text: `이제 누구 하나만 악인이라고 말할 수 없었습니다.

그렇다고 누구도 죄가 없다고 말할 수도 없었습니다.`
    },
    {
      type: "warning",
      text: `진실 엔딩

당신은 진실을 알았습니다.

하지만 진실을 안다는 것과, 옳은 선택을 할 수 있다는 것은 다릅니다.`
    }
  ],

  choices: [
    {
      text: "엔딩 크레딧을 본다",
      next: "S_CREDIT_TRUTH"
    }
  ]
},


// ==============================
// 🔥 END 4 히든 파괴 엔딩
// 할아버지의 뇌를 파괴한 뒤 모든 기준을 거부하는 엔딩
// ==============================
S_END_DESTROY: {
  background: "images/Scene_End_Destroy_BG.png",

  steps: [
    {
      type: "warning",
      text: `빨간 망토는 유리관을 바라보았습니다.

그 안에서 부드럽게 일렁이는 것은 할아버지였고, 동시에 이 모든 비극의 증거였습니다.`
    },
    {
      type: "narration",
      text: `회색 늑대의 설명도, 하얀 늑대의 안내도, 할머니의 선택도.

이제는 아무 의미가 없었습니다.`
    },
    {
      type: "warning",
      text: `이해할 수 없다면, 남겨둘 필요도 없습니다.`
    },
    {
      type: "effect",
      sound: "thud.mp3",
      shake: true,
      flash: true
    },
    {
      type: "warning",
      text: `유리관이 산산조각났습니다.

기계음이 찢어지고, 붉은 경고등이 지하실 전체를 집어삼킵니다.`
    },
    {
      type: "narration",
      text: `그 순간, 빨간 망토는 무언가가 끊어지는 소리를 들었습니다.

할아버지의 생명인지.

이 세계의 전기인지.

아니면 자신의 안에 남아 있던 마지막 이해심인지 알 수 없었습니다.`
    },
    {
      type: "warning",
      text: `파괴 엔딩

당신은 누구도 이해하지 않기로 했습니다.`
    }
  ],

  choices: [
    {
      text: "엔딩 크레딧을 본다",
      next: "S_CREDIT_DESTROY"
    }
  ]
},


// ==============================
// 🖤 CREDIT 1 무지 엔딩 크레딧
// 무지 엔딩 이후 검은 화면에 출력되는 마무리 문장
// ==============================
S_CREDIT_IGNORANCE: {
  background: "images/Black_BG.png",

  steps: [
    {
      type: "endingCredit",
      text: `당신은 끝까지 알지 못했습니다.

그 방에서 무엇이 죽었는지.
누가 거짓말을 했는지.
누가 선의라는 이름으로 죄를 숨겼는지.

하지만 모른다는 것은 때로 가장 안전한 결말입니다.

눈을 감으면,
세상은 여전히 다정해 보이니까요.`,
      speed: 45,
      buttonText: "시간을 돌리기",
      next: "S1"
    }
  ]
},


// ==============================
// 🖤 CREDIT 2 신뢰 엔딩 크레딧
// 신뢰 엔딩 이후 검은 화면에 출력되는 마무리 문장
// ==============================
S_CREDIT_TRUST: {
  background: "images/Black_BG.png",

  steps: [
    {
      type: "endingCredit",
      text: `당신은 믿기로 했습니다.

부드러운 목소리.
다정한 설명.
누군가를 위한 선택이었다는 말.

그 말들이 진실보다 따뜻했기 때문입니다.

하지만 기억하세요.

가장 잔혹한 일들도,
때로는 아주 다정한 목소리로 설명됩니다.`,
      speed: 45,
      buttonText: "시간을 돌리기",
      next: "S1"
    }
  ]
},


// ==============================
// 🖤 CREDIT 3 진실 엔딩 크레딧
// 진실 엔딩 이후 검은 화면에 출력되는 마무리 문장
// ==============================
S_CREDIT_TRUTH: {
  background: "images/Black_BG.png",

  steps: [
    {
      type: "endingCredit",
      text: `당신은 진실을 알았습니다.

할머니의 죄.
회사의 죄.
늑대들의 침묵.
그리고 사랑이라는 이름으로 남겨진 선택.

하지만 진실을 안다는 것과,
옳은 답을 고를 수 있다는 것은 다릅니다.

이제 질문은 하나뿐입니다.

당신의 선의 기준은,
누구를 살리고 누구를 버립니까?`,
      speed: 45,
      buttonText: "시간을 돌리기",
      next: "S1"
    }
  ]
},


// ==============================
// 🖤 CREDIT 4 파괴 엔딩 크레딧
// 히든 파괴 엔딩 이후 검은 화면에 출력되는 마무리 문장
// ==============================
S_CREDIT_DESTROY: {
  background: "images/Black_BG.png",

  steps: [
    {
      type: "endingCredit",
      text: `당신은 이해하지 않기로 했습니다.

누군가의 사랑도.
누군가의 연구도.
누군가의 선의도.
누군가의 변명도.

모두가 각자의 기준으로 죄를 만들었다면,
당신은 그 기준 자체를 부수기로 했습니다.

물론 파괴는 올바른 답이 아닐지도 모릅니다.

하지만 적어도,
더 이상 아무도 그것을 선의라고 부르지는 못할 겁니다.`,
      speed: 45,
      buttonText: "시간을 돌리기",
      next: "S1"
    }
  ]
},


































S_DEAD_MENTAL: {
  background: "images/Scene_Dead_BG.png",

  steps: [
    {
      type: "narration",
      text: [
        `정신력이 완전히 무너졌습니다. 세이브 포인트는 없으니 화이팅 하세요.`,

        `너무 생각없이 플레이 하신거 아닌가요? 덕분에 빨간망토는 할머니 곁으로 갔군요.`,

        `나라면 그 길을 가지 않았을겁니다. 네, 진짜요.`,

        `대단한걸요. 당신은 비밀을 파헤칠 준비가 되어 있나요?`
      ][Math.floor(Math.random() * 4)]
    }
  ],

  choices: [
    {
      text: "처음으로 돌아간다",
      next: "S1"
    }
  ]
},
};