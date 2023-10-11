import WarriorModule from "./WarriorModule.js";
import AnimalModule from "./AnimalModule.js";
import WarMachineModule from "./WarMachineModule.js";

const ArmyModule = (() => {
  let armyArray;

  const addToArmy = (value) => {
    if (value.categoryName.includes("Warrior")) {
      armyArray = JSON.parse(localStorage.getItem("WarriorUnits")) || [];
      armyArray.push({ value });
      localStorage.setItem("WarriorUnits", JSON.stringify(armyArray));
    } else if (value.categoryName.includes("Animal")) {
      armyArray = JSON.parse(localStorage.getItem("AnimalUnits")) || [];
      armyArray.push({ value });
      localStorage.setItem("AnimalUnits", JSON.stringify(armyArray));
    } else if (value.categoryName.includes("War Machines")) {
      armyArray = JSON.parse(localStorage.getItem("WarMachineUnits")) || [];
      armyArray.push({ value });
      localStorage.setItem("WarMachineUnits", JSON.stringify(armyArray));
    }
  };

  const showArmy = () => {
    const warriorUnits = JSON.parse(localStorage.getItem("WarriorUnits")) || [];
    const animalUnits = JSON.parse(localStorage.getItem("AnimalUnits")) || [];
    const warMachineUnits =
      JSON.parse(localStorage.getItem("WarMachineUnits")) || [];

    const armyArray = warriorUnits.concat(warMachineUnits, animalUnits);

    return armyArray;
  };

  return {
    addToArmy,
    showArmy,
  };
})();

export default ArmyModule;
