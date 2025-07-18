import { generateRegion } from "../filterTerritoires/generateRegion";

export function navigateList(button, arrayLi, autoComplete, text, store) {
  let indexLi = -1;
  let mouseEnabled = true;

  // Réactivation de la souris au prochain vrai mouvement
  window.addEventListener("mousemove", () => {
    mouseEnabled = true;
  });

  // Ajout des handlers souris
  arrayLi.forEach((li, index) => {
    li.addEventListener("mouseenter", () => {
      if (!mouseEnabled) return;
      indexLi = index;
      updateLi();
    });
  });

  // Navigation clavier
  button.addEventListener("keydown", (e) => {
    // On désactive la souris
    mouseEnabled = false;

    if (e.key === "ArrowDown" && indexLi < arrayLi.length - 1) {
      e.preventDefault();
      indexLi++;
      changeWithArrow();
    }

    if (e.key === "ArrowUp" && indexLi > 0) {
      e.preventDefault();
      indexLi--;
      changeWithArrow();
    }

    if (e.key === "Enter" && indexLi > -1) {
      changeText();
      if (store) generateRegion(text, store);
    }
  });

  function changeWithArrow() {
    updateLi();
    changeText();
    scrollIntoView();
    if (store && autoComplete.classList.contains("ul")) {
      generateRegion(text, store);
    }
  }

  function updateLi() {
    arrayLi.forEach((li, i) =>
      li.classList.toggle("li-color", i === indexLi)
    );
  }

  function changeText() {
    if (store && autoComplete.classList.contains("ul")) {
    text.textContent = arrayLi[indexLi].textContent;
    text.id = arrayLi[indexLi].id;    }
  }

  function scrollIntoView() {
    arrayLi[indexLi]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }
}
