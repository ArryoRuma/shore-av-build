(function () {
  const match = location.pathname.match(/\/slides\/(\d+)\.html$/);
  if (!match) return;

  const current = parseInt(match[1], 10);
  const total = window.SLIDES ? window.SLIDES.length : 11; // Use metadata if available
  const TRANSITION_DURATION = 300; // Match CSS --transition-duration

  // Navigation functions
  function goToSlide(n) {
    if (n < 1 || n > total) return;
    animateSlideTransition(`${n}.html`);
  }

  function animateSlideTransition(targetUrl) {
    const container = document.querySelector('.slide-container');
    if (container) {
      // Add slide-out class to trigger animation
      container.classList.add('slide-out');
      
      // Navigate after animation completes
      setTimeout(() => {
        location.href = targetUrl;
      }, TRANSITION_DURATION);
    } else {
      // Fallback if no container found
      location.href = targetUrl;
    }
  }

  function updateFullscreenIcon(isFullscreen) {
    const icon = isFullscreen ? 
      '<i class="fas fa-compress"></i>' : 
      '<i class="fas fa-expand"></i>';
    const title = isFullscreen ? 
      "Exit Fullscreen (F)" : 
      "Enter Fullscreen (F)";
    return { icon, title };
  }

  // Create navigation elements
  const nav = document.createElement("div");
  nav.className = "slide-nav";

  const prevSlide = current > 1 ? current - 1 : 1;
  const prev = document.createElement("a");
  prev.className = "slide-nav__button";
  prev.href = `${prevSlide}.html`;
  prev.textContent = "← Prev";
  prev.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(prevSlide);
  });

  const nextSlide = current < total ? current + 1 : total;
  const next = document.createElement("a");
  next.className = "slide-nav__button";
  next.href = `${nextSlide}.html`;
  next.textContent = "Next →";
  next.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(nextSlide);
  });

  const home = document.createElement("a");
  home.className = "slide-nav__button";
  home.href = "../index.html";
  home.textContent = "Index";

  const fullscreenBtn = document.createElement("button");
  fullscreenBtn.className = "slide-nav__button";
  const initialIcon = updateFullscreenIcon(false);
  fullscreenBtn.innerHTML = initialIcon.icon;
  fullscreenBtn.title = initialIcon.title;

  // Fullscreen functionality
  let isFullscreen = false;

  function exitFullscreenMode() {
    document.body.classList.remove('fullscreen-mode');
    isFullscreen = false;
    const iconData = updateFullscreenIcon(false);
    fullscreenBtn.innerHTML = iconData.icon;
    fullscreenBtn.title = iconData.title;
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
      const iconData = updateFullscreenIcon(true);
      fullscreenBtn.innerHTML = iconData.icon;
      fullscreenBtn.title = iconData.title;
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

  fullscreenBtn.onclick = (e) => {
    e.preventDefault();
    toggleFullscreen();
  };

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

  document.addEventListener('msfullscreenchange', () => {
    if (!document.msFullscreenElement) {
      exitFullscreenMode();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown") goToSlide(current + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") goToSlide(current - 1);
    if (e.key === "Home") goToSlide(1);
    if (e.key === "End") goToSlide(total);
    if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  nav.append(prev, home, fullscreenBtn, next);
  document.body.appendChild(nav);
})();