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

let armyArray = [];

const showAllWarriors = () => {
  const warriors = WarriorModule.getAllWarriors();

  let htmlTxt = "";
  warriors.forEach((warrior) => {
    htmlTxt += `
      <article class="border flex flex-col justify-center items-center p-3">
          <p class="text-2xl">${warrior.name}</p>
          <img class="h-60 w-40" src="images/${warrior.img}">
          <button id="buyWarriorButton" class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy Warrior ${warrior.price} <img style="width:22px;" src="images/gold-coin.png"/></button>
      </article>
    `;
  });
  warriorItems.innerHTML = htmlTxt;
  buyWarriorEvents();
};

const buyWarriorEvents = () => {
  const buttons = document.querySelectorAll("#buyWarriorButton");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      const warriors = WarriorModule.getAllWarriors();
      const warrior = warriors[i];

      if (ResourcesModule.getGold() > warrior.price) {
        ResourcesModule.spendGold(warrior.price);
        ResourcesModule.updateLocalStorage();
        trackGold.innerHTML = ResourcesModule.getGold();
        armyArray.push(warrior);
      } else {
        alert("Too broke");
      }
    });
  });
};

// lag en function her som kalles på fra showAllWarriors som setter eventlistener på knapper

const showAllAnimals = () => {
  const animals = AnimalModule.getAllAnimals();

  let htmlTxt = "";
  animals.forEach((animal) => {
    htmlTxt += `
      <article class="border flex flex-col justify-center items-center p-3">
          <p class="text-2xl">${animal.name}</p>
          <img class="h-60 w-60" src="images/${animal.img}">
          <button id="buyAnimalButton" class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy Animal ${animal.price} <img style="width:22px;" src="images/gold-coin.png"/></button>
      </article>
      `;
  });

  animalItems.innerHTML = htmlTxt;
  buyAnimalEvents();
};

const buyAnimalEvents = () => {
  const buttons = document.querySelectorAll("#buyAnimalButton");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      const animals = AnimalModule.getAllAnimals();
      const animal = animals[i];

      if (ResourcesModule.getGold() > animal.price) {
        ResourcesModule.spendGold(animal.price);
        ResourcesModule.updateLocalStorage();
        trackGold.innerHTML = ResourcesModule.getGold();
        armyArray.push(animal);
      } else {
        alert("Too broke");
      }
    });
  });
};

const showAllWarMachines = () => {
  const warmachines = WarMachineModule.getAllWarMachines();

  let htmlTxt = "";
  warmachines.forEach((warmachine) => {
    htmlTxt += `
      <article class="border flex flex-col justify-center items-center p-3">
          <p class="text-2xl">${warmachine.name}</p>
          <img class="h-60 w-60" src="images/${warmachine.img}">
          <button id="buyWarmachineButton" class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy War Machine ${warmachine.price} <img style="width:22px;" src="images/gold-coin.png"/></button>
      </article>
      `;
  });
  warMachinesItems.innerHTML = htmlTxt;
  buyWarmachineEvents();
};

const buyWarmachineEvents = () => {
  const buttons = document.querySelectorAll("#buyWarmachineButton");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      const warmachines = WarMachineModule.getAllWarMachines();
      const warmachine = warmachines[i];

      if (ResourcesModule.getGold() > warmachine.price) {
        ResourcesModule.spendGold(warmachine.price);
        ResourcesModule.updateLocalStorage();
        trackGold.innerHTML = ResourcesModule.getGold();
        armyArray.push(warmachine);
      } else {
        alert("Too broke");
      }
    });
  });
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
