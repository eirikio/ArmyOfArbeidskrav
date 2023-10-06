import ResourcesModule from "./modules/ResourcesModule.js";
import WarriorModule from "./modules/WarriorModule.js";
import AnimalModule from "./modules/AnimalModule.js";
import WarMachineModule from "./modules/WarMachineModule.js";

const trackGold = document.querySelector("#track-gold");
const trackMetal = document.querySelector("#track-metal");
const trackWood = document.querySelector("#track-wood");

const warriorItems = document.querySelector("#warriors-print");
const animalItems = document.querySelector("#animals-print");
const warMachinesItems = document.querySelector("#warmachines-print");

const showAllWarriors = () => {
  warriorItems.innerHTML = WarriorModule.showAllWarriors();
};

const showAllAnimals = () => {
  animalItems.innerHTML = AnimalModule.showAllAnimals();
};

const showAllWarMachines = () => {
  warMachinesItems.innerHTML = WarMachineModule.showAllWarMachines();
};

const getLocalStorage = () => {
  trackGold.innerHTML = ResourcesModule.getGold();
  trackMetal.innerHTML = ResourcesModule.getMetal();
  trackWood.innerHTML = ResourcesModule.getWood();
};

const events = () => {
  showAllWarriors();
  showAllAnimals();
  showAllWarMachines();
};

(() => {
  events();
  getLocalStorage();
})();
