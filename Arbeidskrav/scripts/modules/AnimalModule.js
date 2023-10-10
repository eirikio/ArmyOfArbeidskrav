const AnimalModule = (() => {
  const animals = [
    {
      name: "Horse",
      categoryName: "Animal",
      img: "horse.png",
      price: 100,
    },
    {
      name: "Elephant",
      categoryName: "Animal",
      img: "elephant.png",
      price: 100,
    },
  ];

  const getAllAnimals = () => {
    return structuredClone(animals);
  };

  return {
    getAllAnimals,
  };
})();

export default AnimalModule;
