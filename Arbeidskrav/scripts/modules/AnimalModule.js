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
    structuredClone(animals);
  };

  const showAllAnimals = () => {
    let htmlTxt = "";
    animals.forEach((animal) => {
      htmlTxt += ` 
        <article class="border flex flex-col justify-center items-center p-3">
            <p class="text-2xl">${animal.name}</p>
            <img class="h-60 w-60" src="images/${animal.img}">
            <button class="w-40 p-1 bg-purple-800 text-white rounded hover:bg-purple-600">Buy Animal ${animal.price}</button>
        </article>
        `;
    });
    return htmlTxt;
  };

  return {
    getAllAnimals,
    showAllAnimals,
  };
})();

export default AnimalModule;