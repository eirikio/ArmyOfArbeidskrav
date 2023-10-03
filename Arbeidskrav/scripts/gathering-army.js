import WarriorModule from "./modules/WarriorModule.js";
import AnimalModule from "./modules/AnimalModule.js";
import WarMachineModule from "./modules/WarMachineModule.js";

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

const events = () => {
  showAllWarriors();
  showAllAnimals();
  showAllWarMachines();
};

(() => {
  events();
})();
