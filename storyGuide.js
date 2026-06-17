const STORY_GUIDE_STORAGE_KEY = "sogStoryGuideUnlocked";

const storyGuideData = {
  redhood: {
    title: "빨간 망토",
    body: `<p>(수정 필요함)</p>`
  },
  whitewolf: {
    title: "하얀 늑대",
    body: `<p>(수정 필요함)</p>`
  },
  graywolf: {
    title: "회색 늑대",
    body: `<p>(수정 필요함)</p>`
  },
  blackwolf: {
    title: "검은 늑대",
    body: `<p>(수정 필요함)</p>`
  },
  total: {
    title: "총 스토리",
    body: `<p>(수정 필요함)</p>`
  },
  ending: {
    title: "엔딩 해석",
    body: `<p>(수정 필요함)</p>`
  }
};

function isStoryGuideUnlocked() {
  return localStorage.getItem(STORY_GUIDE_STORAGE_KEY) === "true";
}

function unlockStoryGuide() {
  if (isStoryGuideUnlocked()) {
    updateStoryGuideButtonState();
    return;
  }

  localStorage.setItem(STORY_GUIDE_STORAGE_KEY, "true");
  updateStoryGuideButtonState();

  if (typeof showToast === "function") {
    setTimeout(() => {
      showToast("스토리 설명 창이 열렸습니다.");
    }, 80);
  }
}

function updateStoryGuideButtonState() {
  const storyGuideButton = document.getElementById("story-guide-button");
  const storyGuidePanel = document.getElementById("story-guide-panel");

  if (!storyGuideButton) return;

  if (isStoryGuideUnlocked()) {
    storyGuideButton.classList.add("show");
  } else {
    storyGuideButton.classList.remove("show");

    if (storyGuidePanel) {
      storyGuidePanel.classList.remove("show");
    }
  }
}

function setupStoryGuidePanel() {
  const storyGuideButton = document.getElementById("story-guide-button");
  const storyGuidePanel = document.getElementById("story-guide-panel");
  const storyGuideList = document.getElementById("story-guide-list");

  if (!storyGuideButton || !storyGuidePanel || !storyGuideList) return;

  updateStoryGuideButtonState();

  storyGuideButton.onclick = () => {
    if (!isStoryGuideUnlocked()) return;

    if (typeof playSound === "function") {
      playSound("click.mp3");
    }

    storyGuidePanel.classList.toggle("show");
  };

  storyGuideList.querySelectorAll("[data-story-key]").forEach(button => {
    button.onclick = () => {
      if (typeof playSound === "function") {
        playSound("click.mp3");
      }

      openStoryGuideDocument(button.dataset.storyKey);
    };
  });
}

function openStoryGuideDocument(storyKey) {
  const guide = storyGuideData[storyKey];

  if (!guide) {
    console.error("스토리 설명 없음:", storyKey);
    return;
  }

  if (typeof stopTypingSound === "function") {
    stopTypingSound();
  }

  if (typeof clearToast === "function") {
    clearToast();
  }

  const oldOverlay = document.querySelector(".story-guide-document");
  if (oldOverlay) {
    oldOverlay.remove();
  }

  const documentOverlay = document.createElement("div");
  documentOverlay.className = "document-overlay story-guide-document";

  const documentBox = document.createElement("div");
  documentBox.className = "document-box";

  const documentTitle = document.createElement("h2");
  documentTitle.className = "document-title";
  documentTitle.textContent = guide.title;

  const documentBody = document.createElement("div");
  documentBody.className = "document-body";
  documentBody.innerHTML = guide.body;

  const closeButton = document.createElement("button");
  closeButton.className = "document-close";
  closeButton.textContent = "닫기";

  closeButton.onclick = () => {
    if (typeof playSound === "function") {
      playSound("click.mp3");
    }

    documentOverlay.remove();
  };

  documentBox.appendChild(documentTitle);
  documentBox.appendChild(documentBody);
  documentBox.appendChild(closeButton);
  documentOverlay.appendChild(documentBox);

  const mainScreen = document.getElementById("main-screen");
  const game = document.getElementById("game");

  if (mainScreen) {
    mainScreen.appendChild(documentOverlay);
  } else if (game) {
    game.appendChild(documentOverlay);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupStoryGuidePanel);
} else {
  setupStoryGuidePanel();
}
