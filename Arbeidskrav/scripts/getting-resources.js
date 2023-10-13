import ResourcesModule from "./modules/ResourcesModule.js";

const thiartha = document.querySelector("#minesofthiartha");
const ghalduz = document.querySelector("#woodsofghalduz");

const trackGold = document.querySelector("#track-gold");
const trackMetal = document.querySelector("#track-metal");
const trackWood = document.querySelector("#track-wood");

const minesOfThiartha = () => {
  trackMetal.innerHTML = ResourcesModule.farmMetal();
  trackGold.innerHTML = ResourcesModule.randomGold();
};
const woodsOfGhalduz = () => {
  trackWood.innerHTML = ResourcesModule.farmWood();
};

const updateLocalStorage = () => {
  trackGold.innerHTML = ResourcesModule.getGold();
  trackMetal.innerHTML = ResourcesModule.getMetal();
  trackWood.innerHTML = ResourcesModule.getWood();
};

const events = () => {
  thiartha.addEventListener("click", minesOfThiartha);
  ghalduz.addEventListener("click", woodsOfGhalduz);
};

(() => {
  events();
  updateLocalStorage();
})();
