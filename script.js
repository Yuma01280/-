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
// 아이템 설명 출력 함수
// ==============================
function showItemDescription(item) {
  const descBox = document.getElementById("item-description");

  if (!descBox) return;

  descBox.textContent = item.desc;
}

// ==============================
// 상태 숫자 변화 애니메이션
// ==============================
function flashIfChanged(element, currentValue, previousValue) {
  if (currentValue === previousValue) return;

  element.classList.remove("stat-change");
  void element.offsetWidth;
  element.classList.add("stat-change");
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
const bgm = new Audio("media/bgm.mp3");

bgm.loop = true;
bgm.volume = 0.25;

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
function rollMentalDamage(nextSceneKey, damageType = "default") {

  const overlay = document.getElementById("mental-roll-overlay");
  const numberBox = document.getElementById("mental-roll-number");
  const textBox = document.getElementById("mental-roll-text");
  const confirmButton = document.getElementById("mental-roll-confirm");

  // 🔥 이전 토스트 제거
  const toast = document.getElementById("toast");

  if (toast) {
    toast.classList.remove("show");
    toast.classList.remove("error");
  }

  // ==============================
  // 🎲 피해 범위 설정
  // ==============================
  let minDamage = 1;
  let maxDamage = 6;

  // 🟢 친밀
  if (damageType === "friendly") {
    minDamage = 1;
    maxDamage = 2;
  }

  // ⚪ 중립
  else if (damageType === "neutral") {
    minDamage = 2;
    maxDamage = 3;
  }

  // 🔴 적대
  else if (damageType === "hostile") {
    minDamage = 4;
    maxDamage = 10;
  }

  // 🌲 기존 숲 루트 시스템
  else {

    if (state.Path === "search") {
      minDamage = 1;
      maxDamage = 8;
    }

    else if (state.Path === "road") {
      minDamage = 1;
      maxDamage = 4;
    }
  }

  // 🎲 최종 피해 계산
  const finalDamage =
    Math.floor(Math.random() * (maxDamage - minDamage + 1))
    + minDamage;

  let autoCloseTimer = null;

  overlay.classList.add("show");
  numberBox.classList.remove("final");

  if (confirmButton) {
    confirmButton.style.display = "none";
    confirmButton.disabled = true;
  }

  textBox.textContent =
    `${minDamage}부터 ${maxDamage}까지 굴리는 중입니다.`;

  let count = 0;

  const rollAnimation = setInterval(() => {

    numberBox.textContent =
      Math.floor(Math.random() * (maxDamage - minDamage + 1))
      + minDamage;

    count++;

    if (count >= 18) {

      clearInterval(rollAnimation);

      numberBox.textContent = finalDamage;
      numberBox.classList.add("final");

      textBox.textContent =
        `정신력이 ${finalDamage} 감소했습니다.`;

      state.Mental -= finalDamage;

      // ==============================
      // 💀 정신력 0 사망 처리
      // ==============================
      if (state.Mental <= 0) {

        state.Mental = 0;

        updateStatus();

        playSound("doomo.mp3");
        triggerShake();

        setTimeout(() => {

          overlay.classList.remove("show");

          if (confirmButton) {
            confirmButton.style.display = "none";
            confirmButton.disabled = true;
          }

          renderScene("S_DEAD_MENTAL");

        }, 1200);

        return;
      }

      updateStatus();

      // 🔊 정신력 감소 효과음
      playSound("doomo.mp3");

      // 💥 정신력 감소 화면 흔들림
      triggerShake();

      // 결과가 나온 뒤 확인 버튼 표시
      if (confirmButton) {
        confirmButton.style.display = "block";
        confirmButton.disabled = false;
      }

      // 닫기 함수
      function closeMentalRoll() {

        clearTimeout(autoCloseTimer);

        overlay.classList.remove("show");

        if (confirmButton) {
          confirmButton.style.display = "none";
          confirmButton.disabled = true;
        }

        renderScene(nextSceneKey);
      }

      // 확인 버튼으로 닫기
      if (confirmButton) {
        confirmButton.onclick = () => {

          playSound("click.mp3");
          closeMentalRoll();
        };
      }

      // 10초 후 자동 닫기
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
// ==============================
function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.classList.remove("error");

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
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
    }
  }

  updateStatus();
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

if (scene.background) {
  bg.style.backgroundImage = `url("${scene.background}")`;
}

  const dialogue = document.getElementById("dialogue");
  const choices = document.getElementById("choices");
  const speakerName = document.getElementById("speaker-name");

  let stepIndex = 0;


  // ==============================
  // 스텝 출력 함수 (다음 버튼 진행)
  // ==============================
  function showStep() {
    if (!scene.steps || scene.steps.length === 0) {
      console.error(`${sceneKey}에 steps 없음`);
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

        // ⚡ 화면 깜빡임
        if (step.flash) {
          triggerFlash();
        }

        stepIndex++;
        showStep();
        return;
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
      // ⚡ 화면 깜빡임 함수
      // ==============================
      function triggerFlash() {
        const game = document.getElementById("game");

        game.classList.add("flash");

        setTimeout(() => {
          game.classList.remove("flash");
        }, 200);
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

          stopTypingSound();

          // 🔊 클릭 사운드
          playSound("click.mp3");

        

        // ==============================
// ❗ 선택지 실패 조건
// ==============================
if (choice.failMessage) {

  const hasItem =
    state.Inventory.some(
      item => item.name === choice.requiredItem
    );

  if (!hasItem) {

    showToast(choice.failMessage);
    playSound("media2.mp3");
    const toast = document.getElementById("toast");

    toast.classList.add("error");

    setTimeout(() => {
      toast.classList.remove("error");
    }, 1500);

    return;
  }
}

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

          rollMentalDamage(
          choice.next,
          choice.mentalType || "default"
        );

          return;
        }

        // ==============================
        // 🎲 판정 시스템
        // ==============================
        if (choice.roll) {
          handleRollCheck(choice.roll);
          return;
        }

        // 🎬 페이드 연출 여부
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
// 🌘 게임 시작 전 오프닝
// ==============================
const startOverlay = document.getElementById("start-overlay");
const titleScreen = document.getElementById("title-screen");
const beforeMessageScreen = document.getElementById("before-message-screen");
const realStartButton = document.getElementById("real-start-button");

if (startOverlay && titleScreen && beforeMessageScreen && realStartButton) {
  realStartButton.onclick = () => {
    playSound("click.mp3");
    bgm.play();

    titleScreen.style.opacity = "0";

    setTimeout(() => {
      titleScreen.style.display = "none";
      beforeMessageScreen.classList.add("show");

      setTimeout(() => {
        startOverlay.classList.add("hide");

        setTimeout(() => {
          startOverlay.remove();
          renderScene("S1");
        }, 1200);

      }, 5000);

    }, 1000);
  };
} else {
  renderScene("S1");
}
};