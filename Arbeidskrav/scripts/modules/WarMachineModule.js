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
    structuredClone(warmachines);
  };

  const showAllWarMachines = () => {
    let htmlTxt = "";
    warmachines.forEach((warmachine) => {
      htmlTxt += ` 
        <article class="border flex flex-col justify-center items-center p-3">
            <p class="text-2xl">${warmachine.name}</p>
            <img class="h-60 w-60" src="images/${warmachine.img}">
            <button class="w-40 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy Animal ${warmachine.price}</button>
        </article>
        `;
    });
    return htmlTxt;
  };

  return {
    getAllWarMachines,
    showAllWarMachines,
  };
})();

export default WarMachineModule;
