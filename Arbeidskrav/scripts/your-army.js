import ResourcesModule from "./modules/ResourcesModule.js";
import ArmyModule from "./modules/ArmyModule.js";

const trackGold = document.querySelector("#track-gold");
const trackMetal = document.querySelector("#track-metal");
const trackWood = document.querySelector("#track-wood");

const updateLocalStorage = () => {
  trackGold.innerHTML = ResourcesModule.getGold();
  trackMetal.innerHTML = ResourcesModule.getMetal();
  trackWood.innerHTML = ResourcesModule.getWood();
};

const printArmy = () => {
  const armyList = ArmyModule.showArmy();
  let htmlTxt = "";

  const warriorsContainer = document.querySelector("#your-army-warriors");
  const animalsContainer = document.querySelector("#your-army-animals");
  const warMachinesContainer = document.querySelector("#your-army-warmachines");

  armyList.forEach((unit) => {
    htmlTxt = `
      <article class="border w-20 m-2 p-3 shadow-lg hover:scale-150">
        <img src="images/${unit.value.img}">
      </article>
    `;

    if (unit.value.categoryName.includes("Warrior")) {
      warriorsContainer.innerHTML += htmlTxt;
    } else if (unit.value.categoryName.includes("Animal")) {
      animalsContainer.innerHTML += htmlTxt;
    } else {
      warMachinesContainer.innerHTML += htmlTxt;
    }
  });
};

(() => {
  printArmy();
  updateLocalStorage();
})();
