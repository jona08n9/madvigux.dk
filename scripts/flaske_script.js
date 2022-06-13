// === SCRIPT TIL AT KØRE FLASKE ANIMATION ===
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
