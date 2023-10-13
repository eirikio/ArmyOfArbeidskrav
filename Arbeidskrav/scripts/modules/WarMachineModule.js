const WarMachineModule = (() => {
  const warmachines = [
    {
      name: "Catapult",
      categoryName: "War Machines",
      img: "catapult.png",
      price: {
        gold: 100,
        metal: 75,
        wood: 150,
      },
    },
    {
      name: "Cannon",
      categoryName: "War Machines",
      img: "cannon.png",
      price: {
        gold: 200,
        metal: 150,
        wood: 40,
      },
    },
    {
      name: "Tanks",
      categoryName: "War Machines",
      img: "tanks.png",
      price: {
        gold: 300,
        metal: 500,
        wood: 20,
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
