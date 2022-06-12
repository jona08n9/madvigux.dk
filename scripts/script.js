// ====== FAV ICON CHANGER =======

// select the favicon
const faviconEl = document.querySelector('link [rel="icon"]');

// Check for change in dark/light mode
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuery.addEventListener("change", themeChange);

// listener
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute("href", "vaabenskjold_fav_light.svg");
  } else {
    faviconEl.setAttribute("href", "vaabenskjold_dark.svg");
  }
}

// ====== BURGER MENU ======

// Constants
const menu = document.querySelector(".menu-ul");
const menuItems = document.querySelectorAll(".menuItem");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

window.addEventListener("load", tjekBurger);
window.addEventListener("resize", tjekBurger);

//Remove Buger if wondow over 800px
function tjekBurger() {
  if (window.matchMedia("(min-width:800px)").matches) {
    console.log("vinduet er 800px +");
    burger.classList.add("hide");
    menu.classList.remove("menu");
    menu.classList.remove("transition-burger");
  } else {
    console.log("vinduet er 799px -");
    burger.classList.remove("hide");
    menu.classList.add("menu");
  }
}

// Function for toggle
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menu.classList.add("transition-burger");
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    menu.classList.add("transition-burger");
  }
}

//Event listener
burger.addEventListener("click", toggleMenu);

// ===== FRONT PAGE =====

const tema = document.querySelector("#tema-box");

function scrollToTheme() {
  tema.scrollIntoView({ block: "end", inline: "nearest", behavior: "smooth" });
}
