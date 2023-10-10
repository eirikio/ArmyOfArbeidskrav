import ResourcesModule from "./modules/ResourcesModule.js";
import ArmyModule from "./modules/ArmyModule.js";

const trackGold = document.querySelector("#track-gold");
const trackMetal = document.querySelector("#track-metal");
const trackWood = document.querySelector("#track-wood");

const armyContainer = document.querySelector("#your-army");

const updateLocalStorage = () => {
  trackGold.innerHTML = ResourcesModule.getGold();
  trackMetal.innerHTML = ResourcesModule.getMetal();
  trackWood.innerHTML = ResourcesModule.getWood();
};

const printArmy = () => {
  let htmlTxt = "";
  const armyList = ArmyModule.showArmy();
  armyList.forEach((unit) => {
    htmlTxt = `
    <article>
      <h1>${unit.name}</h1>
    </article>
    `;
  });
  armyContainer.innerHTML = htmlTxt;
};

(() => {
  printArmy();
  updateLocalStorage();
})();
