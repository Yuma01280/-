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
    {
      type: "narration",
      text: function(state) {
        if (state.Route === 1) {
          return `게이트를 지나온 뒤, 낡은 기계의 소리가 아직도 귓가에 남아있는 듯합니다. 숲 안 쪽은 여전히 조용하네요. 
          하지만 어딘가에서 누군가가 지켜보고 있는 기분이 듭니다.`;

        } else {
          return `기록을 남기지 않은 채 숲 속으로 들어왔습니다.
주변은 조용하지만, 몰래 들어왔다는 사실에, 범죄를 저지른 느낌이 돌아 죄책감이 들기도 합니다. 누군가의 시선도 느껴지는거 같네요. `;
        }
      }
    },
    {
      type: "narration",
      text: `숲은 점점 더 깊어지고 있습니다. 나무 사이로 비추는 달빛과 희미한 길이 이어져 있지만, 오늘은 숲이 빨간망토의 기억만큼 아름답지 못한거같습니다.`
    },

    {
      type: "narration",
      text: `산들거리는 바람 대신 스산한 분위기가 맴돌며, 작고 귀여운 동물들 보다는 곰과 늑대가 튀어나올듯 분위기가 좋지 못합니다.
      보통 이런 날씨에 살인 사건이 많이 일어난다 하죠? `
    },

    {
      type: "dialogue",
      speaker: "빨간 망토",
      text: `오늘따라 숲이 어두워. 주변에 뭐가 있는지 잘 모르겠는걸...`,
    }
  ],

  choices: [
    {
      text: "조심스럽게 길을 따라간다",
      effect: {
        Info: 1,
        MoveStyle: "road"
      },
      next: "S5"
    },
    {
      text: "주변을 살피며 이동한다",
      effect: {
        Doubt: 1,
        MoveStyle: "search"
      },
      next: "S5"
    }
  ]
},

S5: {
  background: "images/Scene5_BG.png",

  steps: [
    // 1️⃣ 첫 번째 나레이션
    {
      type: "narration",
      text: function(state) {
        if (state.MoveStyle === "road") {
          return `길을 따라 조심스럽게 이동하던 빨간 망토는, 얼마 지나지 않아 낡은 이정표 하나를 발견합니다.`;
        } else {
          return `주변을 살피며 이동하던 빨간 망토는, 풀숲 사이에서 이상한 냄새를 맡습니다. 온몸이 섬뜩해지는 향기. 이 향기의 근원이 어디일까요?`;
        }
      }
    },

    // 2️⃣ 두 번째 나레이션
    {
      type: "narration",
      text: function(state) {
        if (state.MoveStyle === "road") {
          return `이정표에는 희미한 글씨가 적혀 있습니다.`;
        } else {
          return `향기는 분명 가려진 숲풀에서 납니다. 조심스럽게 풀을 헤치자—`;
        }
      }
    },

    {
      type: "effect",
      sound: "thud.mp3",
      background: "images/Mailman_Die.png",
      shake: true,
      flash: true,
      condition: function(state) {
        return state.MoveStyle === "search";
      }
    },

    // 3️⃣ 세 번째 나레이션
    {
      type: "narration",
      text: function(state) {
        if (state.MoveStyle === "road") {
          return `'빈민가 마을 →'`;
        } else {
          return `그곳에는 피에 젖은 우편 가방과 함께, 사람의 형태를 알아볼 수 없을 정도로 짓뭉그러져 있는 우체부가 있었습니다.`;
        }
      }
    },

    // 🔥 추가 나레이션 2
    {
      type: "narration",
      text: function(state) {
        if (state.MoveStyle === "road") {
          return `무언가 중요한 걸 놓친 것 같지만, 그냥 기분 탓으로 여겨 봅시다. 우리는 빨리 할머니에게 가야만 합니다...`;
        } else {
          return `성난 곰에게 공격을 당한 건지, 내장은 전부 짓이겨 있었고, 얼굴 가죽은 벗겨져 안구가 터진 채 흘러나오는 모습이 잔인할 정도로 생생합니다.`;
        }
      }
    },

    {
      type: "narration",
      text: function(state) {
        if (state.MoveStyle === "road") {
          return `빨간 망토는 이정표가 가리키는 방향을 따라, 빈민가 마을 쪽으로 걸음을 옮깁니다.`;
        } else {
          return `우체부의 몸은 이미 차갑게 식어 있습니다.

주변에는 싸운 흔적도, 도망친 흔적도 거의 보이지 않습니다.

마치 순식간에 목숨을 잃은 것 같군요. 이런 깊은 숲에 배달을 오는데 총 한 자루 가지고 오지 않았다니. 미련합니다.`;
        }
      }
    },

    // 🔥 추가 나레이션 3
    {
      type: "narration",
      text: function(state) {
        if (state.MoveStyle === "road") {
          return `눈앞에는 암울한 마을이 보입니다. 마을은 낡고, 사람들은 우울함과 공허함, 끝없는 갈망으로 가득 차 마을에 활기가 말랐습니다. 이 근처에 그나마 전기가 돌고 있는 이유는 할머니 덕분이죠.`;
        } else {
          return `우체부의 가방은 멀쩡합니다. 곰은 배를 채우고 우체부를 버리고 간 걸까요? 가방 안에는 할머니께 보낼 편지가 들어있습니다. 편지를 가져갈 건가요?`;
        }
      }
    }
  ],

  choices: [
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
      next: "S5_LETTER"
    },
    {
      text: "건드리지 않는다",
      condition: function(state) {
        return state.MoveStyle === "search";
      },
      effect: {
        Doubt: 1,
        TookLetter: false
      },
      next: "S6"
    },
    {
      text: "빈민가 마을로 향한다",
      condition: function(state) {
        return state.MoveStyle === "road";
      },
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

































S_DEAD_MENTAL: {
  background: "images/Scene_Dead_BG.png",

  steps: [
    {
      type: "narration",
      text: `정신력이 완전히 무너졌습니다.

빨간 망토는 더 이상 숲의 목소리와 시선을 견디지 못했습니다.`
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