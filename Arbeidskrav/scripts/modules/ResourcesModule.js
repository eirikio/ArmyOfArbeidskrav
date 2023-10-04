const ResourcesModule = (() => {
  const resources = [
    {
      name: "Mines of Thiartha",
      type: "iron",
      img: "mines-of-thiartha.jpg",
      cursor: "pick",
    },
    {
      name: "Woods of Ghalduz",
      type: "wood",
      img: "woods-of-ghalduz.png",
      cursor: "axe",
    },
  ];

  const getAllResources = () => {
    structuredClone(resources);
  };

  const showAllResources = () => {
    let htmlTxt = "";
    resources.forEach((resource) => {
      htmlTxt += `
        <article class="m-5 text-center ">
            <p class="text-lg font-medium md:text-xl">${resource.name}</p>
            <img class="mt-1 rounded-full md:w-9/12 md:block md:mx-auto lg:w-11/12 cursor-${resource.cursor}" src="images/${resource.img}">
        </article>
        `;
    });
    return htmlTxt;
  };

  return {
    getAllResources,
    showAllResources,
  };
})();

export default ResourcesModule;
