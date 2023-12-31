import ResourcesModule from "./modules/ResourcesModule.js";
import WarriorModule from "./modules/WarriorModule.js";
import AnimalModule from "./modules/AnimalModule.js";
import WarMachineModule from "./modules/WarMachineModule.js";
import ArmyModule from "./modules/ArmyModule.js";

const trackGold = document.querySelector("#track-gold");
const trackMetal = document.querySelector("#track-metal");
const trackWood = document.querySelector("#track-wood");

const warriorItems = document.querySelector("#warriors-print");
const animalItems = document.querySelector("#animals-print");
const warMachinesItems = document.querySelector("#warmachines-print");

const searchUnitInput = document.querySelector("#search-unit-input");
const searchUnitBtn = document.querySelector("#search-unit-btn");

//! DEV - To Be Removed
const devGiveResourcesBtn = document.querySelector("#dev-resources");
const devClearBtn = document.querySelector("#dev-clear");

//? Show and buy units on shop page
const showAllWarriors = () => {
  const warriors = WarriorModule.getAllWarriors();

  let htmlTxt = "";
  warriors.forEach((warrior) => {
    htmlTxt += `
      <article class="border flex flex-col justify-center items-center p-3">
          <p class="text-2xl">${warrior.name}</p>
          <img class="h-60 w-40" src="images/${warrior.img}">
          <button 
            id="buyWarriorButton" 
            class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">
            Buy ${warrior.name} 
            ${warrior.price} <img style="width:22px;" src="images/gold-coin.png"/>
          </button>
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
        ResourcesModule.setLocalStorage();
        trackGold.innerHTML = ResourcesModule.getGold();

        ArmyModule.addToArmy(warrior);
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
          <button 
            id="buyAnimalButton" 
            class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">
            Buy ${animal.name} 
            ${animal.price} <img style="width:22px;" src="images/gold-coin.png"/>
          </button>
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
        ResourcesModule.setLocalStorage();
        trackGold.innerHTML = ResourcesModule.getGold();

        ArmyModule.addToArmy(animal);
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
          <button 
          id="buyWarmachineButton" 
          class="flex justify-center items-center gap-2 w-80 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy ${warmachine.name} 
          ${warmachine.price.gold} <img style="width:22px;" src="images/gold-coin.png"/> 
          ${warmachine.price.metal} <img style="width:22px;" src="images/metal.png"/> 
          ${warmachine.price.wood} <img style="width:22px;" src="images/wood.png"/></button>
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

      if (
        ResourcesModule.getGold() > warmachine.price.gold &&
        ResourcesModule.getMetal() > warmachine.price.metal &&
        ResourcesModule.getWood() > warmachine.price.wood
      ) {
        ResourcesModule.spendGold(warmachine.price.gold);
        ResourcesModule.spendMetal(warmachine.price.metal);
        ResourcesModule.spendWood(warmachine.price.wood);

        ResourcesModule.setLocalStorage();
        trackGold.innerHTML = ResourcesModule.getGold();
        trackMetal.innerHTML = ResourcesModule.getMetal();
        trackWood.innerHTML = ResourcesModule.getWood();

        ArmyModule.addToArmy(warmachine);
      } else {
        alert("Too broke");
      }
    });
  });
};
//? ---------------------------------------------------

//? Search for units on shop page
const searchWarriorUnits = () => {
  let htmlTxt = "";
  const value = searchUnitInput.value;
  const warriors = WarriorModule.getSearchedUnit(value);

  warriors.forEach((warrior) => {
    htmlTxt = `
    <article class="border flex flex-col justify-center items-center p-3">
      <p class="text-2xl">${warrior.name}</p>
      <img class="h-60 w-40" src="images/${warrior.img}">
      <button 
        id="buyWarriorButton" 
        class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">
        Buy ${warrior.name} 
        ${warrior.price} <img style="width:22px;" src="images/gold-coin.png"/>
      </button>
    </article>
    `;
  });
  warriorItems.innerHTML = htmlTxt;
};

const searchAnimalUnits = () => {
  let htmlTxt = "";
  const value = searchUnitInput.value;
  const animals = AnimalModule.getSearchedUnit(value);

  animals.forEach((animal) => {
    htmlTxt = `
    <article class="border flex flex-col justify-center items-center p-3">
      <p class="text-2xl">${animal.name}</p>
      <img class="h-60 w-40" src="images/${animal.img}">
      <button 
        id="buyWarriorButton" 
        class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">
        Buy ${animal.name} 
        ${animal.price} <img style="width:22px;" src="images/gold-coin.png"/>
      </button>
    </article>
    `;
  });
  animalItems.innerHTML = htmlTxt;
};

const searchWarMachineUnits = () => {
  let htmlTxt = "";
  const value = searchUnitInput.value;
  const warmachines = WarMachineModule.getSearchedUnit(value);

  warmachines.forEach((warmachine) => {
    htmlTxt = `
    <article class="border flex flex-col justify-center items-center p-3">
      <p class="text-2xl">${warmachine.name}</p>
      <img class="h-60 w-40" src="images/${warmachine.img}">
      <button 
        id="buyWarriorButton" 
        class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">
        Buy ${warmachine.name} 
        ${warmachine.price} <img style="width:22px;" src="images/gold-coin.png"/>
      </button>
    </article>
    `;
  });
  warMachinesItems.innerHTML = htmlTxt;
};
//?---------------------------------------------------

//! DEV FUNCTIONS - TO BE REMOVED
const giveResources = () => {
  ResourcesModule.giveResources();
  updateLocalStorage();
};

const clear = () => {
  localStorage.clear();
  location.reload();
};

//? Function to update the resources values
const updateLocalStorage = () => {
  trackGold.innerHTML = ResourcesModule.getGold();
  trackMetal.innerHTML = ResourcesModule.getMetal();
  trackWood.innerHTML = ResourcesModule.getWood();
};

const events = () => {
  showAllWarriors();
  showAllAnimals();
  showAllWarMachines();
  searchUnitBtn.addEventListener("click", searchWarriorUnits);
  searchUnitBtn.addEventListener("click", searchAnimalUnits);
  searchUnitBtn.addEventListener("click", searchWarMachineUnits);

  //! DEV BTNS - TO BE REMOVED
  devGiveResourcesBtn.addEventListener("click", giveResources);
  devClearBtn.addEventListener("click", clear);
};

(() => {
  events();
  updateLocalStorage();
})();
