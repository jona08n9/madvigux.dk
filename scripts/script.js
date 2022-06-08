// ====== FAV ICON CHANGER =======

// select the favicon
const faviconEl = document.querySelector('link [rel="icon"]');

// Check for change in dark/light mode
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuery.addEventListener("change", themeChange);

// listener 👂
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute("href", "vaabenskjold_fav_light.svg");
  } else {
    faviconEl.setAttribute("href", "vaabenskjold_dark.svg");
  }
}
