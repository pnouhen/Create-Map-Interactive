const bgBlack = document.querySelector(".js-bgBlack");
const buttonFilter = document.querySelector(".js-buttonFilter");
const sectionFilter = document.querySelector(".js-sectionFilter");

let isOpen = false;

export function generateSectionFilter() {
  const toggleSectionFilter = () => {
    isOpen = !isOpen;
    bgBlack.classList.add("transition-opacity", "duration-300", "ease-in");
    if (isOpen) {
      bgBlack.classList.remove("opacity-0", "pointer-events-none", "-z-40");
      buttonFilter.textContent = "Fermer";
    } else {
      bgBlack.classList.add("opacity-0", "pointer-events-none", "z-40");
      buttonFilter.textContent = "Filtrer";
    }
  };

  buttonFilter.addEventListener("click", toggleSectionFilter);
  bgBlack.addEventListener("click", toggleSectionFilter);
  sectionFilter.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

generateSectionFilter();
