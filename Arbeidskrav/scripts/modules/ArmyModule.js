const ArmyModule = (() => {
  let armyArray = [];

  const addToArmy = (value) => {
    armyArray.push({ value });
    localStorage.setItem("Unit", JSON.stringify(armyArray));
  };

  const showArmy = () => {
    armyArray = JSON.parse(localStorage.getItem("Unit") || []);
    return armyArray;
  };

  const getArmy = () => {
    return JSON.parse(localStorage.getItem("Unit")) || [];
  };

  return {
    addToArmy,
    showArmy,
  };
})();

export default ArmyModule;
