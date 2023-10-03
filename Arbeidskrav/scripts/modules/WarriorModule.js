const WarriorModule = (() => {
  const warriors = [
    {
      name: "John",
      img: "warrior-1.jpg",
    },
    {
      name: "Rick",
      img: "warrior-2.jpg",
    },
    {
      name: "Ron",
      img: "warrior-3.jpg",
    },
    {
      name: "Johny",
      img: "warrior-4.jpg",
    },
    {
      name: "Kim",
      img: "warrior-5.jpg",
    },
    {
      name: "Hobo",
      img: "warrior-6.jpg",
    },
  ];

  const getAllWarriors = () => {
    structuredClone(warriors);
  };

  const showAllWarriors = () => {
    let htmlTxt = "";
    warriors.forEach((warrior) => {
      htmlTxt += `
          <article>
              <p>${warrior.name}</p>
              <img src="images/${warrior.img}">
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
