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
    {
      name: "Tiger",
      categoryName: "Animal",
      img: "tiger.jpeg",
      price: 2500,
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
