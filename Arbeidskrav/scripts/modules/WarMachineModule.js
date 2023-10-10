const WarMachineModule = (() => {
  const warmachines = [
    {
      name: "Catapult",
      categoryName: "War Machines",
      img: "catapult.png",
      price: 300,
    },
    {
      name: "Cannon",
      categoryName: "War Machines",
      img: "cannon.png",
      price: 400,
    },
  ];

  const getAllWarMachines = () => {
    return structuredClone(warmachines);
  };

  return {
    getAllWarMachines,
  };
})();

export default WarMachineModule;
