export function useArrowKeydown(button, arrayLi) {
  let indexLi = -1;
  const mouseEnterHandlers = [];

  // Réinitialisation via clic
  button.addEventListener("click", () => {
    indexLi = -1;
    arrayLi.forEach((li) => li.classList.remove("li-color"));
  });

  // Initialisation hover
  addMouseEnterHandlers();

  // Navigation keydown
  button.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      removeMouseEnterHandlers();
    }

    if (e.key === "ArrowDown" && indexLi < arrayLi.length - 1) {
      e.preventDefault();
      indexLi++;
      updateLi();
      scrollIntoView();
    }

    if (e.key === "ArrowUp" && indexLi > 0) {
      e.preventDefault();
      indexLi--;
      updateLi();
      scrollIntoView();
    }
  });

  // Réactivation si la souris bouge
  window.addEventListener("mousemove", () => {
      addMouseEnterHandlers();
  });

  function addMouseEnterHandlers() {
    arrayLi.forEach((li, index) => {
      const handler = () => mouseenterLi(index);
      li.addEventListener("mouseenter", handler);
      li.addEventListener("mouseleave", () => {
        li.classList.remove("li-color");
      });
      mouseEnterHandlers.push({ li, handler });
    });
  }

  function removeMouseEnterHandlers() {
    mouseEnterHandlers.forEach(({ li, handler }) => {
      li.removeEventListener("mouseenter", handler);
    });
    mouseEnterHandlers.length = 0;
  }

  function mouseenterLi(index) {
    indexLi = index;
    updateLi();
    scrollIntoView();
  }

  function updateLi() {
    arrayLi.forEach((li, i) =>
      li.classList.toggle("li-color", i === indexLi)
    );
  }

  function scrollIntoView() {
    arrayLi[indexLi]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }
}
