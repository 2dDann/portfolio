const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");
const mainContent = document.getElementById("mainContent");
const bottomNav = document.getElementById("bottomNav");

let isCollapsed = false;

// Sidebar toggle (desktop)
toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("collapsing");

  setTimeout(() => {
    sidebar.classList.remove("collapsing");
    sidebar.classList.toggle("collapsed");

    // Adjust main content margin
    if (sidebar.classList.contains("collapsed")) {
      mainContent.style.marginLeft = "72px";
    } else {
      mainContent.style.marginLeft = "240px";
    }
  }, 350); // match animation duration
});

// --- Swipe detection for bottom nav (mobile) ---
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) > 50) { // threshold
    if (diff > 0) {
      // swipe right -> show nav
      bottomNav.classList.remove("hidden");
    } else {
      // swipe left -> hide nav
      bottomNav.classList.add("hidden");
    }
  }
}
