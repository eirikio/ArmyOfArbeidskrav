const WarriorModule = (() => {
  const warriors = [
    {
      name: "Snake",
      categoryName: "Warrior",
      img: "warrior-1.jpg",
      price: 200,
    },
    {
      name: "Giant",
      categoryName: "Warrior",
      img: "warrior-2.jpg",
      price: 500,
    },
    {
      name: "Big Axe",
      categoryName: "Warrior",
      img: "warrior-3.jpg",
      price: 150,
    },
    {
      name: "Thief",
      categoryName: "Warrior",
      img: "warrior-4.jpg",
      price: 50,
    },
    {
      name: "Tanks",
      categoryName: "Warrior",
      img: "warrior-5.jpg",
      price: 250,
    },
    {
      name: "Berserker",
      categoryName: "Warrior",
      img: "warrior-6.jpg",
      price: 275,
    },
  ];

  const getAllWarriors = () => {
    structuredClone(warriors);
  };

  const showAllWarriors = () => {
    let htmlTxt = "";
    warriors.forEach((warrior) => {
      htmlTxt += `
        <article class="border flex flex-col justify-center items-center p-3">
            <p class="text-2xl">${warrior.name}</p>
            <img class="h-60 w-40" src="images/${warrior.img}">
            <button class="flex justify-center items-center gap-2 w-60 h-10 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy Warrior ${warrior.price} <img style="width:22px;" src="images/gold-coin.png"/></button>
        </article>
          `;
    });
    return htmlTxt;
  };

  return {
    getAllWarriors,
    showAllWarriors,
  };
})();

export default WarriorModule;
