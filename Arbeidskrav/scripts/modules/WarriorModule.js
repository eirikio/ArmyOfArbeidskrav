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
    {
      name: "Imperial Guard",
      categoryName: "Warrior",
      img: "imperial.png",
      price: 300,
    },
    {
      name: "Dremora Lord",
      categoryName: "Warrior",
      img: "daedric.webp",
      price: 500,
    },
    {
      name: "Battle Jesus",
      categoryName: "Warrior",
      img: "battlejesus.jpeg",
      price: 1200,
    },
  ];

  const getAllWarriors = () => {
    return structuredClone(warriors);
  };

  const getSearchedUnit = (value) => {
    const filteredWarriors = warriors.filter((warrior) =>
      warrior.name.toLocaleLowerCase().includes(value)
    );
    return filteredWarriors;
  };

  return {
    getAllWarriors,
    getSearchedUnit,
  };
})();

export default WarriorModule;
