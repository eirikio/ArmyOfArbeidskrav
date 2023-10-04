import ResourcesModule from "./modules/ResourcesModule.js";

const printResourceLocations = document.querySelector("#resources-locations");

const showResourceLocations = () => {
  printResourceLocations.innerHTML = ResourcesModule.showAllResources();
};

const events = () => {
  showResourceLocations();
};

(() => {
  events();
})();
