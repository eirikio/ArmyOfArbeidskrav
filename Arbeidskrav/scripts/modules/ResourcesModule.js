const ResourcesModule = (() => {
  let gold = parseInt(localStorage.getItem("Gold")) || 0;
  let metal = parseInt(localStorage.getItem("Metal")) || 0;
  let wood = parseInt(localStorage.getItem("Wood")) || 0;

  const setLocalStorage = () => {
    localStorage.setItem("Gold", gold);
    localStorage.setItem("Metal", metal);
    localStorage.setItem("Wood", wood);
  };

  const randomGold = () => {
    let rGold = Math.floor(Math.random() * 30) + 1;
    let goldChance = Math.floor(Math.random() * 4) + 1;
    if (goldChance === 1) {
      gold += rGold;
    }
    return gold;
  };

  const farmMetal = () => {
    let rNr = Math.floor(Math.random() * 10) + 1;
    metal += rNr;
    randomGold();
    setLocalStorage();
    return metal;
  };

  const farmWood = () => {
    let rNr = Math.floor(Math.random() * 10) + 1;
    wood += rNr;
    setLocalStorage();
    return wood;
  };

  const spendGold = (value) => {
    gold = gold - value;
    return gold;
  };
  const spendMetal = (value) => {
    metal = metal - value;
    return gold;
  };
  const spendWood = (value) => {
    wood = wood - value;
    return wood;
  };

  const getGold = () => {
    return gold;
  };
  const getMetal = () => {
    return metal;
  };
  const getWood = () => {
    return wood;
  };

  return {
    setLocalStorage,
    farmMetal,
    farmWood,
    getGold,
    getMetal,
    getWood,
    randomGold,
    spendGold,
    spendMetal,
    spendWood,
  };
})();

export default ResourcesModule;
