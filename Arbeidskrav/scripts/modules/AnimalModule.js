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

  const getSearchedUnit = (value) => {
    const filteredAnimals = animals.filter((animal) =>
      animal.name.toLocaleLowerCase().includes(value)
    );
    return filteredAnimals;
  };

  return {
    getAllAnimals,
    getSearchedUnit,
  };
})();

export default AnimalModule;
