const WarMachineModule = (() => {
  const warmachines = [
    {
      name: "Catapult",
      categoryName: "War Machines",
      img: "catapult.png",
      price: {
        gold: 100,
        metal: 100,
        wood: 100,
      },
    },
    {
      name: "Cannon",
      categoryName: "War Machines",
      img: "cannon.png",
      price: {
        gold: 100,
        metal: 100,
        wood: 100,
      },
    },
    {
      name: "Tanks",
      categoryName: "War Machines",
      img: "tanks.png",
      price: {
        gold: 100,
        metal: 100,
        wood: 100,
      },
    },
  ];

  const getAllWarMachines = () => {
    return structuredClone(warmachines);
  };

  const getSearchedUnit = (value) => {
    const filteredWarMachines = warmachines.filter((warmachine) =>
      warmachine.name.toLocaleLowerCase().includes(value)
    );
    return filteredWarMachines;
  };

  return {
    getAllWarMachines,
    getSearchedUnit,
  };
})();

export default WarMachineModule;
