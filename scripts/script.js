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
const bread = document.querySelector(".breadcrumb");

window.addEventListener("load", tjekBurger);
window.addEventListener("resize", tjekBurger);

//Remove Buger if wondow over 800px
function tjekBurger() {
  if (window.matchMedia("(min-width:800px)").matches) {
    console.log("vinduet er 800px +");
    burger.classList.add("hide");
    bread.classList.add("hide");
    menu.classList.remove("menu");
    menu.classList.remove("transition-burger");
  } else {
    console.log("vinduet er 799px -");
    burger.classList.remove("hide");
    bread.classList.remove("hide");
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
  tema.style.scrollMarginTop = `${80}px`;
  tema.scrollIntoView({ block: "start", behavior: "smooth" });
}

// ===== Tema 04 - Flaske ======

const goodCont1 = document.querySelector("#good_container1");
const goodSprite1 = document.querySelector("#good_sprite1");

goodCont1.addEventListener("mousedown", mouseDownGood);
goodCont1.addEventListener("animationiteration", genstartGood);

function mouseDownGood() {
  //Consol log at den kører
  console.log("mouseDownGood");

  //Fjern mouseDown event
  goodCont1.removeEventListener("mousedown", mouseDownGood);

  //Tilføj animationer til Fransk klar hel + smadret flaske
  document.querySelector("#sound_bottle_shatter1").volume = 0.1;
  document.querySelector("#sound_bottle_shatter1").play();
  document.querySelector("#sound_bottle_shatter1").currentTime = 0;
  goodCont1.firstElementChild.classList.remove("hel_flaske");
  goodCont1.firstElementChild.offsetLeft;
  goodCont1.firstElementChild.classList.add("knust_flaske");
  goodCont1.firstElementChild.classList.add("forsvind");

  //Tilføj animationend listener til Fransk flaske smadret
  goodCont1.addEventListener("animationend", genstartGood);
}
function genstartGood() {
  console.log("genstartGood");

  //Fjern  animation end fra goodCont2
  goodCont1.removeEventListener("animationend", genstartGood);

  //Ryd op, fjern alt er på container og sprite
  goodCont1.classList = "";
  goodCont1.firstElementChild.classList = "";

  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  goodCont1.offsetLeft;

  //Start animationer til Fransk klar hel + smadret flaske
  goodCont1.classList.remove("knust_flaske");
  goodCont1.offsetLeft;
  goodCont1.classList.add("flaske_container");
  goodCont1.firstElementChild.classList.add("hel_flaske");
  goodCont1.firstElementChild.classList.add("good_sprite1");

  //Tilføj mouse down.
  goodCont1.addEventListener("mousedown", mouseDownGood);
}
