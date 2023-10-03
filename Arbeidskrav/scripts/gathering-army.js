import WarriorModule from "./modules/WarriorModule.js";

const printField = document.querySelector("#warriors-print");

const showAllWarriors = () => {
  printField.innerHTML = WarriorModule.showAllWarriors();
};

(() => {
  showAllWarriors();
})();
