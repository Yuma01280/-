// ==============================
// 플레이어 상태값 (게임 변수)
// ==============================
let state = {
  Trust: 0,
  Doubt: 0,
  Info: 0,
  Mental: 50, // 정신력
  Route: 0,


  Path: null, // ✅ 추가

  // 🧺 인벤토리
  Inventory: [
    {
      name: "어머니의 편지",
      desc: "어머니가 할머니에게 보낸 봉인된 편지. 내용은 알 수 없다."
    },
    {
      name: "치즈",
      desc: "향이 강한 수제 치즈. 신선하다."
    },
    {
      name: "와인",
      desc: "붉은빛이 도는 수제 와인. 달콤한 향이 난다. 이상하게 알코올이 강한 것 같은 느낌이 든다."
    }
  ],

  // 📁 선택 기록
  Records: []
  
};
// ==============================
// 🏆 업적 데이터
// 엔딩을 보면 localStorage에 저장되어 다음 플레이에도 유지됨
// ==============================
const achievementData = {
  ignorance: {
    title: "무지 엔딩",
    desc: "끝까지 아무것도 알지 못했다."
  },

  trust: {
    title: "신뢰 엔딩",
    desc: "누군가의 설명을 믿기로 했다."
  },

  truth: {
    title: "진실 엔딩",
    desc: "진실을 알았지만, 옳은 답을 고르지는 못했다."
  },

  destroy: {
    title: "파괴 엔딩",
    desc: "누구도 이해하지 않기로 했다."
  }
};

// ==============================
// 🏆 해금된 업적 목록 불러오기
// ==============================
let unlockedAchievements =
  JSON.parse(localStorage.getItem("sogAchievements")) || {};


// ==============================
// 🔄 새 게임 상태 초기화 함수
// 시간을 돌리거나 처음으로 돌아갈 때 게임 변수만 초기화
// 업적 localStorage는 건드리지 않음
// ==============================
function resetGameState() {
  state.Trust = 0;
  state.Doubt = 0;
  state.Info = 0;
  state.Mental = 50;
  state.Route = 0;
  state.Path = null;

  state.DestroyedGrandfatherCore = false;
  state.EndingRoute = null;

  state.TookLetter = false;
  state.MoveStyle = null;

  state.SeenDepressed = false;
  state.SeenCrazy = false;
  state.SeenFight = false;
  state.LetterDelivered = false;

  state.SeenGrayWolf = false;
  state.SeenBlackWolf = false;
  state.TalkedOtherWolf = false;
  state.BlackWolfFirst = false;

  state.ReadCoreDocument = false;
  state.FoundGrandfatherCore = false;

  state.GoodnessStandard = "";

  state.Records = [];

  state.Inventory = [
    {
      name: "어머니의 편지",
      desc: "어머니가 할머니에게 보낸 봉인된 편지. 내용은 알 수 없다."
    },
    {
      name: "치즈",
      desc: "향이 강한 수제 치즈. 신선하다."
    },
    {
      name: "와인",
      desc: "붉은빛이 도는 수제 와인. 달콤한 향이 난다. 이상하게 알코올이 강한 것 같은 느낌이 든다."
    }
  ];

  prevState.Trust = 0;
  prevState.Doubt = 0;
  prevState.Info = 0;
  prevState.Mental = 50;

  updateStatus();
  updateInventory();
  updateRecords();

  resetBgmToDefault();
}

// ==============================
// 이전 상태값 저장 (숫자 변화 애니메이션용)
// ==============================
let prevState = {
  Trust: 0,
  Doubt: 0,
  Info: 0,
  Mental: 50
};

let masterVolume = 1;
let typingVolume = 0.35;
let clickVolume = 1;

// ==============================
// 상태값 표시 함수 (UI 업데이트)
// ==============================
function updateStatus() {
  const trustValue = document.getElementById("trust-value");
  const doubtValue = document.getElementById("doubt-value");
  const infoValue = document.getElementById("info-value");
  const routeStatus = document.getElementById("route-status");

  const mentalValue = document.getElementById("mental-value");

  trustValue.textContent = state.Trust;
  doubtValue.textContent = state.Doubt;
  infoValue.textContent = state.Info;

  if (mentalValue) {
  mentalValue.textContent = state.Mental;
  flashIfChanged(mentalValue, state.Mental, prevState.Mental);
}

  flashIfChanged(trustValue, state.Trust, prevState.Trust);
  flashIfChanged(doubtValue, state.Doubt, prevState.Doubt);
  flashIfChanged(infoValue, state.Info, prevState.Info);

  prevState.Trust = state.Trust;
  prevState.Doubt = state.Doubt;
  prevState.Info = state.Info;

  prevState.Mental = state.Mental;

  routeStatus.className = "";

  if (state.Route === 1) {
    routeStatus.textContent = "상태: 감시됨";
    routeStatus.classList.add("watched");
  } else if (state.Route === -1) {
    routeStatus.textContent = "상태: 미기록";
    routeStatus.classList.add("hidden");
  } else {
    routeStatus.textContent = "상태: 불명";
    routeStatus.classList.add("unknown");
  }
}

// ==============================
// 인벤토리 UI 업데이트
// ==============================
function updateInventory() {
  const inventoryList = document.getElementById("inventory-list");
  const descBox = document.getElementById("item-description");

  if (!inventoryList || !descBox) return;

  inventoryList.innerHTML = "";
  descBox.textContent = "아이템을 선택하세요.";

  state.Inventory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;

    li.onclick = () => {
      showItemDescription(item);
    };

    inventoryList.appendChild(li);
  });
}

// ==============================
// 📁 기록 보관소 업데이트
// ==============================
function updateRecords() {
  const recordList = document.getElementById("record-list");

  if (!recordList) return;

  recordList.innerHTML = "";

  state.Records.forEach(record => {
    const li = document.createElement("li");
    li.textContent = record;

    recordList.appendChild(li);
  });
}

// ==============================
// 🏆 업적 UI 업데이트
// ==============================
function updateAchievements() {
  const achievementList = document.getElementById("achievement-list");

  if (!achievementList) return;

  achievementList.innerHTML = "";

  Object.keys(achievementData).forEach(key => {
    const achievement = achievementData[key];
    const isUnlocked = unlockedAchievements[key] === true;

    const li = document.createElement("li");

    if (isUnlocked) {
      li.innerHTML = `
        <strong>${achievement.title}</strong><br>
        <span>${achievement.desc}</span>
      `;
      li.classList.add("achievement-unlocked");
    } else {
      li.innerHTML = `
        <strong>???</strong><br>
        <span>아직 확인하지 못한 엔딩입니다.</span>
      `;
      li.classList.add("achievement-locked");
    }

    achievementList.appendChild(li);
  });
}

// ==============================
// 🏆 업적 해금 함수
// EndingRoute 값으로 엔딩 업적을 저장함
// ==============================
function unlockAchievement(routeName) {
  if (!routeName) return;
  if (!achievementData[routeName]) return;

  if (unlockedAchievements[routeName] === true) {
    updateAchievements();
    return;
  }

  unlockedAchievements[routeName] = true;

  localStorage.setItem(
    "sogAchievements",
    JSON.stringify(unlockedAchievements)
  );

  updateAchievements();

  if (typeof updatePurgeButtonState === "function") {
    updatePurgeButtonState();
  }

  showToast(`${achievementData[routeName].title} 업적 해금`);
}

// ==============================
// 아이템 설명 출력 함수
// ==============================
function showItemDescription(item) {
  const descBox = document.getElementById("item-description");

  if (!descBox) return;

  descBox.textContent = item.desc;
}

// ==============================
// 상태 숫자 변화 애니메이션
// 숫자가 변할 때만 빨갛게 번쩍이고, 끝나면 원래 색으로 복귀
// ==============================
function flashIfChanged(element, currentValue, previousValue) {
  if (currentValue === previousValue) return;

  element.classList.remove("stat-change");
  void element.offsetWidth;
  element.classList.add("stat-change");

  setTimeout(() => {
    element.classList.remove("stat-change");
  }, 500);
}

// ==============================
// 🔊 사운드 재생 함수
// ==============================
function playSound(fileName, volumeType = "click") {

  const sound = new Audio(`media/${fileName}`);

  // ==============================
  // 🔊 볼륨 종류 분기
  // ==============================
  if (volumeType === "item") {
    sound.volume = 1 * masterVolume;
  }

  else {
    sound.volume = clickVolume * masterVolume;
  }

  sound.currentTime = 0;

  sound.play().catch(error => {
    console.error("사운드 재생 실패:", fileName, error);
  });
}

// ==============================
// 🎵 배경 음악
// ==============================
const DEFAULT_BGM_VOLUME = 0.25;
let currentBgmFile = "bgm.mp3";

const bgm = new Audio(`media/${currentBgmFile}`);

bgm.loop = true;
bgm.volume = DEFAULT_BGM_VOLUME * masterVolume;

// ==============================
// 🎵 현재 목표 BGM 볼륨 계산
// ==============================
function getBgmTargetVolume() {
  return DEFAULT_BGM_VOLUME * masterVolume;
}

// ==============================
// 🎵 BGM 즉시 변경 함수
// 같은 음악이면 다시 시작하지 않음
// ==============================
function changeBgm(fileName) {
  if (!fileName) return;

  const targetVolume = getBgmTargetVolume();

  // 이미 같은 BGM이면 처음부터 다시 재생하지 않음
  if (currentBgmFile === fileName) {
    bgm.volume = targetVolume;

    if (bgm.paused) {
      bgm.play().catch(error => {
        console.error("BGM 재생 실패:", fileName, error);
      });
    }

    return;
  }

  bgm.pause();
  bgm.currentTime = 0;

  currentBgmFile = fileName;
  bgm.src = `media/${fileName}`;
  bgm.loop = true;
  bgm.volume = targetVolume;

  bgm.play().catch(error => {
    console.error("BGM 변경 실패:", fileName, error);
  });
}

// ==============================
// 🎵 BGM 기본값으로 초기화 함수
// 새 게임 / 시간을 돌리기 때 bgm.mp3로 되돌림
// ==============================
function resetBgmToDefault() {
  bgm.pause();
  bgm.currentTime = 0;

  currentBgmFile = "bgm.mp3";
  bgm.src = "media/bgm.mp3";
  bgm.loop = true;
  bgm.volume = getBgmTargetVolume();

  bgm.play().catch(error => {
    console.error("기본 BGM 재생 실패:", error);
  });
}

// ==============================
// 🎵 현재 BGM을 잠깐 낮췄다가 다시 키우는 함수
// 음악 교체 없이 긴 검은 화면 연출에 사용
// ==============================
function duckBgm(duration = 4500) {
  const targetVolume = getBgmTargetVolume();
  const lowVolume = targetVolume * 0.18;

  const fadeOutDuration = duration * 0.35;
  const fadeInDuration = duration * 0.45;

  const steps = 30;
  const fadeOutInterval = fadeOutDuration / steps;
  const fadeInInterval = fadeInDuration / steps;

  let outCount = 0;
  const startVolume = bgm.volume || targetVolume;

  if (bgm.paused) {
    bgm.play().catch(error => {
      console.error("BGM 재생 실패:", currentBgmFile, error);
    });
  }

  const fadeOutTimer = setInterval(() => {
    outCount++;

    const progress = outCount / steps;
    bgm.volume = Math.max(
      startVolume - (startVolume - lowVolume) * progress,
      lowVolume
    );

    if (outCount >= steps) {
      clearInterval(fadeOutTimer);

      setTimeout(() => {
        let inCount = 0;

        const fadeInTimer = setInterval(() => {
          inCount++;

          const progress = inCount / steps;
          bgm.volume = Math.min(
            lowVolume + (targetVolume - lowVolume) * progress,
            targetVolume
          );

          if (inCount >= steps) {
            clearInterval(fadeInTimer);
            bgm.volume = targetVolume;
          }
        }, fadeInInterval);
      }, duration * 0.2);
    }
  }, fadeOutInterval);
}

// ==============================
// 🎵 BGM 페이드 전환 함수
// 기존 BGM을 줄인 뒤 새 BGM을 천천히 키움
// 같은 음악이면 교체하지 않고 duck 처리
// ==============================
function fadeChangeBgm(fileName, duration = 6500) {
  if (!fileName) {
    duckBgm(duration);
    return;
  }

  // 이미 같은 음악이면 처음부터 재생하지 말고 볼륨만 연출
  if (currentBgmFile === fileName) {
    duckBgm(duration);
    return;
  }

  const targetVolume = getBgmTargetVolume();
  const oldVolume = bgm.volume || targetVolume;

  const fadeOutDuration = duration * 0.45;
  const fadeInDuration = duration * 0.55;

  const steps = 45;
  const fadeOutInterval = fadeOutDuration / steps;
  const fadeInInterval = fadeInDuration / steps;

  let outCount = 0;

  const fadeOutTimer = setInterval(() => {
    outCount++;

    const progress = outCount / steps;
    bgm.volume = Math.max(oldVolume * (1 - progress), 0);

    if (outCount >= steps) {
      clearInterval(fadeOutTimer);

      bgm.pause();
      bgm.currentTime = 0;

      currentBgmFile = fileName;
      bgm.src = `media/${fileName}`;
      bgm.loop = true;
      bgm.volume = 0;

      bgm.play().catch(error => {
        console.error("BGM 페이드 전환 실패:", fileName, error);
      });

      let inCount = 0;

      const fadeInTimer = setInterval(() => {
        inCount++;

        const progress = inCount / steps;
        bgm.volume = Math.min(targetVolume * progress, targetVolume);

        if (inCount >= steps) {
          clearInterval(fadeInTimer);
          bgm.volume = targetVolume;
        }
      }, fadeInInterval);
    }
  }, fadeOutInterval);
}

// ==============================
// ⌨️ 타자 효과 함수
// ==============================
let typingTimer = null;
let typingSound = null;

function startTypingSound() {
  stopTypingSound();

  typingSound = new Audio("media/type.mp3");
  typingSound.loop = true;
  typingSound.volume = typingVolume * masterVolume;
  typingSound.play();
}

function stopTypingSound() {
  if (!typingSound) return;

  typingSound.pause();
  typingSound.currentTime = 0;
  typingSound = null;
}

function typeText(element, text, speed = 28) {
  clearInterval(typingTimer);
  stopTypingSound();

  element.textContent = "";

  let index = 0;

  if (!text || text.length === 0) return;

  startTypingSound();

  typingTimer = setInterval(() => {
    element.textContent += text[index];
    index++;

    if (index >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
      stopTypingSound();
    }
  }, speed);
}

// ==============================
// 🎬 화면 페이드 전환 함수
// ==============================
function fadeTransition(nextSceneKey) {
  const fadeScreen = document.getElementById("fade-screen");

  fadeScreen.classList.add("show");

  setTimeout(() => {
    renderScene(nextSceneKey);

    setTimeout(() => {
      fadeScreen.classList.remove("show");
    }, 300);
  }, 800);
}

// ==============================
// 🎬 긴 검은 화면 + BGM 연출 함수
// bgmFileName이 있으면 음악 교체
// bgmFileName이 없으면 현재 음악을 잠깐 낮췄다가 복구
// ==============================
function longBlackTransition(nextSceneKey, bgmFileName, duration = 6000) {
  const fadeScreen = document.getElementById("fade-screen");

  fadeScreen.classList.add("show");

  if (bgmFileName) {
    fadeChangeBgm(bgmFileName, duration);
  } else {
    duckBgm(duration);
  }

  setTimeout(() => {
    renderScene(nextSceneKey);

    setTimeout(() => {
      fadeScreen.classList.remove("show");
    }, 700);
  }, duration);
}

// ==============================
// 🎲 주사위 굴림 함수
// ==============================
function rollDice(sides = 20) {
  return Math.floor(Math.random() * sides) + 1;
}

// ==============================
// 🧠 정신력 피해 범위 결정 함수
// ==============================
function getMentalDamageRange() {

  // 오솔길
  if (state.Path === "search") {
    return 8;
  }

  // 톨게이트
  if (state.Path === "road") {
    return 4;
  }

  // 기본값
  return 6;
}


// ==============================
// 🎲 정신력 피해 주사위 연출 함수
// ==============================
function rollMentalDamage(nextSceneKey, damageType = "default", afterRoll = null) {
  const overlay = document.getElementById("mental-roll-overlay");
  const numberBox = document.getElementById("mental-roll-number");
  const textBox = document.getElementById("mental-roll-text");
  const confirmButton = document.getElementById("mental-roll-confirm");

  const toast = document.getElementById("toast");

  if (toast) {
    toast.classList.remove("show");
    toast.classList.remove("error");
  }

  let minDamage = 1;
  let maxDamage = 6;

  if (damageType === "friendly") {
    minDamage = 1;
    maxDamage = 2;
  } else if (damageType === "neutral") {
    minDamage = 2;
    maxDamage = 3;
  } else if (damageType === "hostile") {
    minDamage = 6;
    maxDamage = 10;
  } else if (damageType === "black_hostile") {
    minDamage = 10;
    maxDamage = 20;
  } else {
    if (state.Path === "search") {
      minDamage = 1;
      maxDamage = 8;
    } else if (state.Path === "road") {
      minDamage = 1;
      maxDamage = 4;
    }
  }

  const finalDamage =
    Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

  let autoCloseTimer = null;

  overlay.classList.add("show");
  numberBox.classList.remove("final");

  if (confirmButton) {
    confirmButton.style.display = "none";
    confirmButton.disabled = true;
  }

  textBox.textContent = `${minDamage}부터 ${maxDamage}까지 굴리는 중입니다.`;

  let count = 0;

  const rollAnimation = setInterval(() => {
    numberBox.textContent =
      Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

    count++;

    if (count >= 18) {
      clearInterval(rollAnimation);

      numberBox.textContent = finalDamage;
      numberBox.classList.add("final");

      textBox.textContent = `정신력이 ${finalDamage} 감소했습니다.`;

      state.Mental -= finalDamage;
      updateStatus();

      playSound("doomo.mp3");
      triggerShake();

      function closeMentalRoll() {
        clearTimeout(autoCloseTimer);

        overlay.classList.remove("show");

        if (confirmButton) {
          confirmButton.style.display = "none";
          confirmButton.disabled = true;
        }

        if (checkMentalDeath()) {
          return;
        }

        if (typeof afterRoll === "function") {
          afterRoll();
          return;
        }

        if (nextSceneKey) {
          renderScene(nextSceneKey);
        }
      }

      if (confirmButton) {
        confirmButton.style.display = "block";
        confirmButton.disabled = false;

        confirmButton.onclick = () => {
          if (confirmButton.disabled) return;

          confirmButton.disabled = true;

          playSound("click.mp3");
          closeMentalRoll();
        };
      }

      autoCloseTimer = setTimeout(() => {
        closeMentalRoll();
      }, 10000);
    }
  }, 55);
}

// ==============================
// 💥 화면 흔들림 함수
// ==============================
function triggerShake() {
  const game = document.getElementById("game");

  game.classList.add("shake");

  setTimeout(() => {
    game.classList.remove("shake");
  }, 300);
}

// ==============================
// 💀 정신력 0 사망 처리
// ==============================
function checkMentalDeath() {
  if (state.Mental > 0) {
    return false;
  }

  state.Mental = 0;
  updateStatus();

  playSound("doomo.mp3");
  triggerShake();

  renderScene("S_DEAD_MENTAL");

  return true;
}

// ==============================
// 🎲 판정 처리 함수
// ==============================
function handleRollCheck(rollData) {

  const dice = rollDice(20);

  const statName = rollData.stat;
  const statBonus = state[statName] || 0;

  const total = dice + statBonus;

  console.log("🎲 판정 시작");
  console.log("능력치:", statName);
  console.log("주사위:", dice);
  console.log("보너스:", statBonus);
  console.log("최종값:", total);

  // ==============================
  // 성공 여부 판정
  // ==============================
  if (total >= rollData.difficulty) {

    console.log("✅ 판정 성공");

    renderScene(rollData.success);

  } else {

    console.log("❌ 판정 실패");

    renderScene(rollData.fail);
  }
}

// ==============================
// 알림 토스트 출력 함수
// 이전 토스트 / 이전 타이머 / 박스 잔상까지 정리
// ==============================
let toastTimer = null;

function clearToast() {
  const toast = document.getElementById("toast");

  if (!toast) return;

  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }

  toast.classList.remove("show");
  toast.classList.remove("error");

  toast.textContent = "";

  // ✅ 박스 잔상 즉시 제거
  toast.style.display = "none";
}

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  clearToast();

  // ✅ display none 상태에서 다시 표시 준비
  toast.style.display = "block";
  toast.textContent = message;

  // ✅ 브라우저가 display 변경을 인식한 다음 show 적용
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.remove("error");
    toast.textContent = "";
    toast.style.display = "none";
    toastTimer = null;
  }, 1500);
}

// ==============================
// 선택지 효과 적용 함수 (변수 증가/감소 + 문자열 저장)
// ==============================
function applyEffect(effect) {
  if (!effect) return;

  for (let key in effect) {

    // ✅ 인벤토리 아이템 추가
    if (key === "AddItem") {
      state.Inventory.push(effect[key]);
      updateInventory();

      // 🔔 아이템 획득 소리
      playSound("item.mp3", "item");

      showToast("아이템이 추가 되었습니다.");
      continue;
    }

    // ✅ 숫자
    if (typeof effect[key] === "number") {
      if (state[key] === undefined) {
        state[key] = 0;
      }

      state[key] += effect[key];
    }

    // ✅ 문자열 / boolean
    else {
      state[key] = effect[key];

      // ==============================
      // 🏆 엔딩 업적 해금
      // EndingRoute 값이 저장될 때 자동으로 업적에 기록
      // ==============================
      if (key === "EndingRoute") {
        unlockAchievement(effect[key]);
      }
    }
  }

  updateStatus();
  checkMentalDeath();
}


// ==============================
// 장면 출력 함수 (씬 렌더링 핵심 엔진)
// ==============================
function renderScene(sceneKey) {
  const scene = scenes[sceneKey];

  // 존재하지 않는 씬 방지
  if (!scene) {
    console.error(`씬 없음: ${sceneKey}`);
    return;
  }

const bg = document.getElementById("background");
const mainScreen = document.getElementById("main-screen");

if (mainScreen) {
  mainScreen.classList.remove("wide-scene");
  mainScreen.classList.remove("character-scene");

  if (scene.wide === true) {
    mainScreen.classList.add("wide-scene");
  }

  if (scene.character === true) {
    mainScreen.classList.add("character-scene");
  }
}

if (scene.background) {
  bg.style.backgroundImage = `url("${scene.background}")`;
}

  const dialogue = document.getElementById("dialogue");
  const choices = document.getElementById("choices");
  const speakerName = document.getElementById("speaker-name");

  let stepIndex = 0;
  let isTransitioning = false;


  // ==============================
  // 스텝 출력 함수 (다음 버튼 진행)
  // ==============================
  function showStep() {
    if (!scene.steps || scene.steps.length === 0) {
      console.error(`${sceneKey}에 steps 없음`);
      return;
    }

if (stepIndex >= scene.steps.length) {
  choices.innerHTML = "";

  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      if (choice.condition && !choice.condition(state)) {
        return;
      }

const button = document.createElement("button");
button.textContent = choice.text;

button.onclick = () => {
  if (isTransitioning) return;
  isTransitioning = true;

  clearToast();

  choices.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
  });

  choices.innerHTML = "";

  stopTypingSound();
  playSound("click.mp3");

  applyEffect(choice.effect);

        const recordText = choice.record || choice.text;

        if (recordText) {
          state.Records.push(recordText);
          updateRecords();
        }

        if (choice.mentalRoll) {
          const damageType =
            typeof choice.mentalType === "function"
              ? choice.mentalType(state)
              : choice.mentalType || "default";

          rollMentalDamage(choice.next, damageType);
          return;
        }

        if (choice.roll) {
          handleRollCheck(choice.roll);
          return;
        }

        if (choice.next === "S1") {
          resetGameState();
        }

        if (choice.fade) {
          fadeTransition(choice.next);
        } else {
          renderScene(choice.next);
        }
      };

      choices.appendChild(button);
    });

    return;
  }

  const endText = document.createElement("div");
  endText.textContent = "(다음 내용 없음)";
  choices.appendChild(endText);
  return;
}

    const step = scene.steps[stepIndex];

     // ==============================
     // 🎬 스텝별 배경 변경
     // ==============================
      if (step.background) {
        const bg = document.getElementById("background");
        bg.style.backgroundImage = `url("${step.background}")`;
      }

      // ==============================
      // 🎬 스텝별 배경 위치 보정 클래스 초기화 / 적용
      // 특정 이미지가 위로 뜰 때만 bgClass로 보정
      // ==============================
      if (bg) {
        bg.classList.remove(
          "bg-down-1",
          "bg-down-2",
          "bg-up-1"
        );

        if (step.bgClass) {
          bg.classList.add(step.bgClass);
        }
      }


// ==============================
// 💥 효과 연출 처리 (소리 + 배경)
// ==============================
if (step.type === "effect") {

  // ❗ 조건 체크
  if (step.condition && !step.condition(state)) {
    stepIndex++;
    showStep();
    return;
  }

  // 🔊 효과음
  if (step.sound) {
    playSound(step.sound);
  }

  // 🎬 배경 전환
  if (step.background) {
    const bg = document.getElementById("background");
    bg.style.backgroundImage = `url("${step.background}")`;
  }

  // 💥 화면 흔들림
  if (step.shake) {
    triggerShake();
  }

  // ⚡ 기존 화면 깜빡임
  if (step.flash) {
    triggerFlash();
  }

  // 🔍 천천히 화면 확대
  if (step.zoom) {
    triggerBackgroundZoom();
  }

  // 🔭 천천히 멀어지는 효과
if (step.zoomOut) {
  triggerBackgroundZoomOut();
}

  // ⚫⚪ 흰색 → 검은색 점멸
  if (step.blackWhiteFlash) {
    triggerBlackWhiteFlash();
  }
  stepIndex++;
  showStep();
  return;
}


// ==============================
// ⚡ 화면 깜빡임 함수
// ==============================
function triggerFlash() {
  const game = document.getElementById("game");

  if (!game) return;

  game.classList.add("flash");

  setTimeout(() => {
    game.classList.remove("flash");
  }, 200);
}


// ==============================
// 🔍 배경 천천히 확대 함수
// ==============================
function triggerBackgroundZoom() {
  const bg = document.getElementById("background");

  if (!bg) return;

  bg.classList.remove("background-slow-zoom");

  // 같은 효과를 연속으로 다시 실행하기 위한 강제 리플로우
  void bg.offsetWidth;

  bg.classList.add("background-slow-zoom");

  setTimeout(() => {
    bg.classList.remove("background-slow-zoom");
  }, 2200);
}

// ==============================
// 🔭 배경 천천히 멀어지는 함수
// ==============================
function triggerBackgroundZoomOut() {
  const bg = document.getElementById("background");

  if (!bg) return;

  bg.classList.remove("background-slow-zoom-out");

  // 같은 효과를 연속으로 다시 실행하기 위한 강제 리플로우
  void bg.offsetWidth;

  bg.classList.add("background-slow-zoom-out");
}

// ==============================
// ⚫⚪ 흰색 → 검은색 점멸 함수
// ==============================
function triggerBlackWhiteFlash() {
  const game = document.getElementById("game");

  if (!game) return;

  const flashOverlay = document.createElement("div");
  flashOverlay.className = "black-white-flash-overlay";

  game.appendChild(flashOverlay);

  setTimeout(() => {
    flashOverlay.remove();
  }, 450);
}

// ==============================
// ❗ step 조건 검사
// ==============================
if (step.condition && !step.condition(state)) {
  stepIndex++;
  showStep();
  return;
}


// ==============================
// 🧠 스텝 정신력 피해 처리
// ==============================
if (step.type === "mentalDamage") {
  const damageType =
    typeof step.mentalType === "function"
      ? step.mentalType(state)
      : step.mentalType || "default";

  rollMentalDamage(null, damageType, () => {
    stepIndex++;
    showStep();
  });

  return;
}

// ==============================
// 📄 문서 페이지 스텝 처리
// 지하실 서류 / 연구 기록처럼 종이 페이지 창을 띄우는 전용 처리
// ==============================
if (step.type === "documentPage") {
  stopTypingSound();

  speakerName.textContent = "";
  speakerName.classList.remove("show");
  dialogue.classList.remove(
  "warning-text",
  "big-text-1",
  "big-text-2",
  "big-text-3"
);
  dialogue.textContent = "";

  choices.innerHTML = "";

  const documentOverlay = document.createElement("div");
  documentOverlay.className = "document-overlay";

  const documentBox = document.createElement("div");
  documentBox.className = "document-box";

  const documentTitle = document.createElement("h2");
  documentTitle.className = "document-title";
  documentTitle.textContent = step.title || "문서";

  const documentBody = document.createElement("div");
  documentBody.className = "document-body";
  documentBody.innerHTML = step.body || "";

  const closeButton = document.createElement("button");
  closeButton.className = "document-close";
  closeButton.textContent = step.buttonText || "문서를 덮는다";

  closeButton.onclick = () => {
    if (closeButton.disabled) return;

    closeButton.disabled = true;

    playSound("click.mp3");

    documentOverlay.remove();

    if (step.next) {
      renderScene(step.next);
      return;
    }

    stepIndex++;
    showStep();
  };
  documentBox.appendChild(documentTitle);
  documentBox.appendChild(documentBody);
  documentBox.appendChild(closeButton);
  documentOverlay.appendChild(documentBox);

  const mainScreen = document.getElementById("main-screen");
  const game = document.getElementById("game");

  if (mainScreen) {
    mainScreen.appendChild(documentOverlay);
  } else {
    game.appendChild(documentOverlay);
  }

  return;
}

// ==============================
// ⌨️ 텍스트 입력 스텝 처리
// ==============================
if (step.type === "textInput") {
  speakerName.textContent = "";
  speakerName.classList.remove("show");
 dialogue.classList.remove(
  "warning-text",
  "big-text-1",
  "big-text-2",
  "big-text-3"
);

  typeText(dialogue, step.text || "입력해 주세요.", 28);

  choices.innerHTML = "";

  const inputBox = document.createElement("textarea");
  inputBox.className = "standard-input";
  inputBox.placeholder = step.placeholder || "";
  inputBox.rows = 4;

  const submitButton = document.createElement("button");
  submitButton.className = "standard-submit";
  submitButton.textContent = step.buttonText || "입력한다";

  submitButton.onclick = () => {
    if (submitButton.disabled) return;

    submitButton.disabled = true;
    inputBox.disabled = true;

    stopTypingSound();
    playSound("click.mp3");

    const value = inputBox.value.trim();

    state[step.saveAs || "PlayerInput"] = value;

    state.Records.push(`선의 기준: ${value || "말하지 않았다."}`);
    updateRecords();

    renderScene(step.next);
  };

  choices.appendChild(inputBox);
  choices.appendChild(submitButton);

  return;
}

// ==============================
// 🖤 엔딩 크레딧 스텝 처리
// 검은 배경 중앙에 엔딩 나레이션을 타자처럼 출력하고, 시간을 돌리기 버튼을 보여줌
// ==============================
if (step.type === "endingCredit") {
  stopTypingSound();

  speakerName.textContent = "";
  speakerName.classList.remove("show");
dialogue.classList.remove(
  "warning-text",
  "big-text-1",
  "big-text-2",
  "big-text-3"
);
  dialogue.textContent = "";

  choices.innerHTML = "";

  const creditOverlay = document.createElement("div");
  creditOverlay.className = "ending-credit-overlay";

  const creditText = document.createElement("div");
  creditText.className = "ending-credit-text";

  const creditButton = document.createElement("button");
  creditButton.className = "ending-credit-button";
  creditButton.textContent = step.buttonText || "시간을 돌리기";
  creditButton.style.display = "none";

  creditButton.onclick = () => {
    if (creditButton.disabled) return;

    creditButton.disabled = true;

    stopTypingSound();
    playSound("click.mp3");

    creditOverlay.remove();

    if (step.next === "S1") {
      resetGameState();
    }

    if (step.next) {
      renderScene(step.next);
    }
  };

  creditOverlay.appendChild(creditText);
  creditOverlay.appendChild(creditButton);

  const mainScreen = document.getElementById("main-screen");
  const game = document.getElementById("game");

  if (mainScreen) {
    mainScreen.appendChild(creditOverlay);
  } else {
    game.appendChild(creditOverlay);
  }

  typeText(creditText, step.text || "", step.speed || 45);

  const textLength = (step.text || "").length;
  const waitTime = textLength * (step.speed || 45) + 500;

  setTimeout(() => {
    creditButton.style.display = "block";
  }, waitTime);

  return;
}

      
// ==============================
// 대사 / 나레이션 출력 처리
// ==============================


// 🔥 텍스트 처리 (함수 + 문자열 둘 다 대응)
let currentText = "";

try {
  if (typeof step.text === "function") {
    currentText = step.text(state);
  } else {
    currentText = step.text || "";
  }
} catch (e) {
  console.error("텍스트 처리 오류:", e);
  currentText = "텍스트 오류 발생";
}

// 🔥 UI 출력
if (step.type === "dialogue") {
  speakerName.textContent = step.speaker || "";
  speakerName.classList.add("show");
} else {
  speakerName.textContent = "";
  speakerName.classList.remove("show");
}

// ==============================
// 🔴 특수 텍스트 연출 처리
// warning / big1 / big2 / big3
// ==============================
dialogue.classList.remove(
  "warning-text",
  "big-text-1",
  "big-text-2",
  "big-text-3"
);

if (step.type === "warning") {
  dialogue.classList.add("warning-text");
}

if (step.type === "big1") {
  dialogue.classList.add("big-text-1");
}

if (step.type === "big2") {
  dialogue.classList.add("big-text-2");
}

if (step.type === "big3") {
  dialogue.classList.add("big-text-3");
}

typeText(dialogue, currentText, 28);


    // 버튼 초기화
    choices.innerHTML = "";



// ==============================
// 다음 버튼 출력
// ==============================
if (stepIndex < scene.steps.length - 1) {
  const nextButton = document.createElement("button");
  nextButton.textContent = "다음";

  nextButton.onclick = () => {
    if (nextButton.disabled) return;

    nextButton.disabled = true;
    choices.innerHTML = "";

    stopTypingSound();

    // 🔊 다음 버튼 클릭 사운드
    playSound("click.mp3");

    stepIndex++;
    showStep();
  };

  choices.appendChild(nextButton);
  return;
}

// ==============================
// 선택지 출력
// ==============================
if (scene.choices && scene.choices.length > 0) {

  scene.choices.forEach(choice => {

    // ✅ 조건 체크
    if (choice.condition && !choice.condition(state)) {
      return;
    }

    // 버튼 생성
    const button = document.createElement("button");
    button.textContent = choice.text;

        // ==============================
        // 버튼 클릭 처리
        // ==============================
        button.onclick = () => {
          if (isTransitioning) return;

          clearToast();

          stopTypingSound();

          // 🔊 클릭 사운드
          playSound("click.mp3");

          // ==============================
          // ❗ 선택지 실패 조건
          // 실패 선택지는 화면을 넘기지 않고 토스트만 띄움
          // ==============================
          if (choice.failMessage) {
            const hasItem = state.Inventory.some(
              item => item.name === choice.requiredItem
            );

            if (!hasItem) {
              showToast(choice.failMessage);
              playSound("media2.mp3");

              const toast = document.getElementById("toast");

              if (toast) {
                toast.classList.add("error");

                setTimeout(() => {
                  toast.classList.remove("error");
                }, 1500);
              }

              return;
            }
          }

          // 여기까지 왔다는 건 실제로 장면 이동이 가능한 선택지라는 뜻
          isTransitioning = true;

          choices.querySelectorAll("button").forEach(btn => {
            btn.disabled = true;
          });

          choices.innerHTML = "";

// 🎯 선택지 효과 적용
applyEffect(choice.effect);

        // 📁 기록 저장
        const recordText = choice.record || choice.text;

        if (recordText) {
          state.Records.push(recordText);
          updateRecords();
        }

        // ==============================
        // 🧠 정신력 피해 주사위
        // ==============================
        if (choice.mentalRoll) {

          const damageType =
            typeof choice.mentalType === "function"
              ? choice.mentalType(state)
              : choice.mentalType || "default";

          rollMentalDamage(choice.next, damageType);

          return;
        }

        // ==============================
        // 🎲 판정 시스템
        // ==============================
        if (choice.roll) {
          handleRollCheck(choice.roll);
          return;
        }

        // 🔄 처음으로 돌아갈 때 상태 초기화
        if (choice.next === "S1") {
          resetGameState();
        }

        // 🎬 긴 검은 화면 + BGM 페이드 전환
        if (choice.longTransition) {
          longBlackTransition(
            choice.next,
            choice.bgm,
            choice.transitionDuration || 6500
          );
          return;
        }

        // 🎵 선택지에서 즉시 BGM 변경
        // 긴 전환이 필요 없는 일반 장면에서만 사용
        if (choice.bgm) {
          changeBgm(choice.bgm);
        }

        // 🎬 기존 페이드 연출 여부
        if (choice.fade) {

          fadeTransition(choice.next);

        } else {

          renderScene(choice.next);

        }
        };

        // 화면에 버튼 추가
        choices.appendChild(button);

      });

      return;
    }


    // ==============================
    // 선택지가 없는 경우
    // ==============================
    const endText = document.createElement("div");
    endText.textContent = "(다음 내용 없음)";
    choices.appendChild(endText);
  }


  // 첫 스텝 실행
  showStep();
}

// ==============================
// 🕒 현실 시간 자동 표시
// ==============================
function updateClock() {
  const now = new Date();

  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = days[now.getDay()];

  document.getElementById("clock-time").textContent = `${hour}:${minute}`;
  document.getElementById("clock-date").textContent = `${year}.${month}.${date} ${day}`;
}

updateClock();
setInterval(updateClock, 1000);

// ==============================
// 📢 안내 사항 문구 자동 변경
// ==============================

const noticeMessages = [
  "당신의 모든 선택은 기록되며, 누군가를 살릴 수도, 의심받게 될 수도 있습니다.",
  "아이템 내용을 읽어보셨나요? 내가 모르는 비밀을 알 수 있을지 몰라요.",
  "인물 관계도로, 빨간망토의 입장에서 인물들을 바라볼 수 있어요.",
  "음악 소리가 너무 큰가요? 소리 패널에서 소리를 조절해보세요.",
  "화면이 작은 걸 나도 알아요. 하지만 그게 매력입니다.",
  "별거 아닌거같아 보이지만 이 게임때문에 잠을 못잤습니다.",
  "어어, 설명을 너무 대충 읽는거 아니에요?",
];

let noticeIndex = 0;

function changeNoticeText() {
  const noticeText = document.getElementById("notice-text");

  if (!noticeText) return;

  noticeIndex++;

  if (noticeIndex >= noticeMessages.length) {
    noticeIndex = 0;
  }

  noticeText.textContent = noticeMessages[noticeIndex];
}

setInterval(changeNoticeText, 15000);


// ==============================
// 게임 시작
// ==============================
window.onload = () => {

  updateStatus();
  updateInventory();
  updateRecords();
  updateAchievements();


  
// ==============================
// ⚙️ 설정 패널
// ==============================
const settingButton = document.querySelectorAll(".side-btn")[3];
const settingsPanel = document.getElementById("settings-panel");

if (settingButton && settingsPanel) {
  settingButton.onclick = () => {
    playSound("click.mp3");
    settingsPanel.classList.toggle("show");
  };
}



// ==============================
// 🔊 음량 조절
// ==============================
const masterSlider = document.getElementById("master-volume");
const typingSlider = document.getElementById("typing-volume");
const clickSlider = document.getElementById("click-volume");

if (masterSlider) {
  masterSlider.oninput = (e) => {
    bgm.volume = Number(e.target.value);
  };
}

if (typingSlider) {
  typingSlider.oninput = (e) => {
    typingVolume = Number(e.target.value);
  };
}

if (clickSlider) {
  clickSlider.oninput = (e) => {
    clickVolume = Number(e.target.value);
  };
}

  // ==============================
  // 🧺 인벤토리 버튼
  // ==============================
  const inventoryButton = document.getElementById("inventory-button");
  const inventoryPanel = document.getElementById("inventory-panel");

  if (inventoryButton && inventoryPanel) {
    inventoryButton.onclick = () => {
      playSound("click.mp3");
      inventoryPanel.classList.toggle("show");
    };
  }

// ==============================
// 👥 인물 관계도 설명 데이터
// ==============================
const relationData = {
  mother: "빨간 망토의 어머니. 다정하고 부드러운 사람이며, 한 없이 너그러운 사람이지만 숨기고 있는 비밀이 많은 여인 입니다. 빨간망토는 그녀를 믿지만 요즘 수상한 면모가 보입니다.",

  father: "빨간 망토의 아버지. 불같은 성격을 가진 거친 남자이며, 가족을 사랑하지만 때로는 폭력적인 행동을 보이기도 합니다. 빨간망토는 아버지를 두려워하지만 동시에 그를 이해하려고 노력합니다.",

  grandmother: "빨간 망토의 할머니. 숲 너머에 살고 있으며, 과거에 대기업에 핵심 인물로 일했던 사람입니다. 지금은 은둔 생활을 하고 있지만, 가족과 회사에 관련된 중요한 비밀을 알고 있는 인물입니다.",

  grandfather: "빨간 망토의 할아버지. 할머니와 같은 대기업에서 일하셨지만 행방이 묘연합니다. 할머니 조차 할아버지가 어디있는지 모르는거 같습니다."
};

// ==============================
// 👥 인물 관계도 버튼
// ==============================
const relationButton = document.getElementById("relation-button");
const relationPanel = document.getElementById("relation-panel");
const relationDescription = document.getElementById("relation-description");

if (relationButton && relationPanel) {
  relationButton.onclick = () => {
    playSound("click.mp3");
    relationPanel.classList.toggle("show");
  };
}

document.querySelectorAll("#relation-list li").forEach((personItem) => {
  personItem.onclick = () => {
    playSound("click.mp3");

    const personKey = personItem.dataset.person;
    relationDescription.textContent = relationData[personKey];
  };
});

// ==============================
// 📁 기록 보관소 버튼
// ==============================
const archiveButton = document.getElementById("archive-button");
const recordPanel = document.getElementById("record-panel");

if (archiveButton && recordPanel) {
  archiveButton.onclick = () => {
    playSound("click.mp3");
    recordPanel.classList.toggle("show");
  };
}

// ==============================
// 🏆 업적 버튼
// ==============================
const achievementButton = document.getElementById("achievement-button");
const achievementPanel = document.getElementById("achievement-panel");

if (achievementButton && achievementPanel) {
  achievementButton.onclick = () => {
    playSound("click.mp3");
    updateAchievements();
    achievementPanel.classList.toggle("show");
  };
}

// ==============================
// 🗑️ 업적 기록 말소 버튼
// 업적 4개가 모두 해금되었을 때만 버튼이 깜빡임
// localStorage에 저장된 엔딩 업적만 삭제함
// ==============================
const purgeAchievementButton = document.getElementById("purge-achievement-button");

function hasAllAchievementsUnlocked() {
  const savedAchievements =
    JSON.parse(localStorage.getItem("sogAchievements")) || {};

  return Object.keys(achievementData).every(key => {
    return savedAchievements[key] === true;
  });
}

function updatePurgeButtonState() {
  if (!purgeAchievementButton) return;

  if (hasAllAchievementsUnlocked()) {
    purgeAchievementButton.classList.add("needs-purge");
  } else {
    purgeAchievementButton.classList.remove("needs-purge");
  }
}

if (purgeAchievementButton) {
  updatePurgeButtonState();

  purgeAchievementButton.onclick = () => {
    playSound("click.mp3");

    const confirmDelete = confirm(
  "게임을 처음 시작하신다면 기록을 말소하는걸 강력히 권장합니다.\n\n정말 업적 기록을 말소하시겠습니까?\n해금된 엔딩 업적이 모두 삭제됩니다."
      );

    if (!confirmDelete) return;

    localStorage.removeItem("sogAchievements");
    unlockedAchievements = {};

    updateAchievements();
    updatePurgeButtonState();

    showToast("업적 기록이 말소되었습니다.");
  };
}

// ==============================
// 🌘 게임 시작 전 오프닝
// ==============================
const startOverlay = document.getElementById("start-overlay");
const titleScreen = document.getElementById("title-screen");
const beforeMessageScreen = document.getElementById("before-message-screen");
const beforeMessageNextButton = document.getElementById("before-message-next-button");
const realStartButton = document.getElementById("real-start-button");

if (startOverlay && titleScreen && beforeMessageScreen && realStartButton) {
  realStartButton.onclick = () => {
    playSound("click.mp3");

    bgm.play().catch(error => {
      console.error("BGM 재생 실패:", error);
    });

    titleScreen.style.opacity = "0";

    setTimeout(() => {
      titleScreen.style.display = "none";
      beforeMessageScreen.classList.add("show");

      let openingAutoTimer = null;
      let openingButtonTimer = null;
      let openingFinished = false;

      if (beforeMessageNextButton) {
        beforeMessageNextButton.style.display = "none";
        beforeMessageNextButton.disabled = true;
      }

      function finishOpening() {
        if (openingFinished) return;

        openingFinished = true;

        clearTimeout(openingButtonTimer);
        clearTimeout(openingAutoTimer);

        playSound("click.mp3");

        startOverlay.classList.add("hide");

        setTimeout(() => {
          startOverlay.remove();
          renderScene("S1");
        }, 1200);
      }

      // 안내문이 먼저 뜨고, 5초 동안은 버튼 없이 읽는 시간
      openingButtonTimer = setTimeout(() => {
        if (beforeMessageNextButton) {
          beforeMessageNextButton.style.display = "block";
          beforeMessageNextButton.disabled = false;

          beforeMessageNextButton.onclick = () => {
            finishOpening();
          };
        }

        // 버튼이 뜬 뒤 15초 동안 안 누르면 자동으로 S1 이동
        openingAutoTimer = setTimeout(() => {
          finishOpening();
        }, 15000);

      }, 5000);

    }, 1000);
  };
} else {
  renderScene("S1");
}
};