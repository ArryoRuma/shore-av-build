(function () {
  const match = location.pathname.match(/\/slides\/(\d+)\.html$/);
  if (!match) return;

  const current = parseInt(match[1], 10);
  const total = 11; // change if needed

  function go(n) {
    if (n < 1 || n > total) return;
    location.href = `${n}.html`;
  }

  // Fullscreen functionality
  let isFullscreen = false;

  function exitFullscreenMode() {
    document.body.classList.remove('fullscreen-mode');
    isFullscreen = false;
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullscreenBtn.title = "Enter Fullscreen (F)";
  }

  function toggleFullscreen() {
    if (!isFullscreen) {
      // Enter fullscreen
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
      }
      document.body.classList.add('fullscreen-mode');
      isFullscreen = true;
      fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
      fullscreenBtn.title = "Exit Fullscreen (F)";
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
      }
      exitFullscreenMode();
    }
  }

  // Listen for fullscreen changes (e.g., ESC key)
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      exitFullscreenMode();
    }
  });

  // Also listen for webkit and ms prefixed events
  document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement) {
      exitFullscreenMode();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown") go(current + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") go(current - 1);
    if (e.key === "Home") go(1);
    if (e.key === "End") go(total);
    if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  const nav = document.createElement("div");
  nav.style.position = "fixed";
  nav.style.bottom = "16px";
  nav.style.left = "16px";
  nav.style.display = "flex";
  nav.style.gap = "8px";
  nav.style.zIndex = "9999";

  const prev = document.createElement("a");
  prev.href = current > 1 ? `${current - 1}.html` : `1.html`;
  prev.textContent = "← Prev";

  const next = document.createElement("a");
  next.href = current < total ? `${current + 1}.html` : `${total}.html`;
  next.textContent = "Next →";

  const home = document.createElement("a");
  home.href = "../index.html";
  home.textContent = "Index";

  const fullscreenBtn = document.createElement("button");
  fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullscreenBtn.title = "Enter Fullscreen (F)";
  fullscreenBtn.onclick = (e) => {
    e.preventDefault();
    toggleFullscreen();
  };

  [prev, home, next, fullscreenBtn].forEach((a) => {
    a.style.padding = "10px 12px";
    a.style.border = "1px solid #ccc";
    a.style.borderRadius = "10px";
    a.style.background = "#fff";
    a.style.textDecoration = "none";
    a.style.color = "#111";
    a.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    a.style.cursor = "pointer";
  });

  nav.append(prev, home, fullscreenBtn, next);
  document.body.appendChild(nav);
})();