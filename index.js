var barger = document.querySelector(".barger");
const side = document.querySelector(".side");
const welcome = document.querySelector(".welcome");

barger.addEventListener("click", () => {
  barger.classList.toggle("bargeractive");
  side.classList.toggle("sideactive");
  welcome.classList.toggle("welcomeactive");
});
welcome.addEventListener("click", () => {
  side.classList.toggle("sideactive");
  welcome.classList.toggle("welcomeactive");
  barger.classList.toggle("bargeractive");
});
