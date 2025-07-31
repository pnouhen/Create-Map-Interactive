import { generateMarkerInput } from "../searchRnfName/generateMarkerInput";
import { disableAutoComplete } from "../utils/disableAutoComplete";
import { updateElementListener } from "../utils/updateElementListener";

export function navigateList(
  button,
  arrayLi,
  autoComplete,
  text,
  data,
  onClickTerritoire
) {
  let indexLi = -1;
  let mouseEnabled = true;

  // Hover management
  window.addEventListener("mousemove", () => {
    mouseEnabled = true;
  });
  arrayLi.forEach((li, index) => {
    li.addEventListener("mouseenter", () => {
      if (!mouseEnabled) return;
      indexLi = index;
      updateLi();
    });
  });

  // Navigation keydown
  const navigate = (e) => {
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
    }
  };

  updateElementListener(button, "keydown", navigate)

  // Fonctions internes
  function changeWithArrow() {
    updateLi();
    scrollIntoView();
    if (onClickTerritoire && autoComplete.classList.contains("ul")) {
      changeText();
      onClickTerritoire(text, data);
    }
  }

  function updateLi() {
    arrayLi.forEach((li, i) => li.classList.toggle("li-color", i === indexLi));
  }

  function changeText() {
    if (autoComplete.classList.contains("ul")) {
      if (onClickTerritoire) {
        text.textContent = arrayLi[indexLi].textContent;
        text.id = arrayLi[indexLi].id;
      } else {
        // For function searchName
        text.value = arrayLi[indexLi].textContent;
        generateMarkerInput(arrayLi[indexLi].textContent, data, autoComplete);
        disableAutoComplete(autoComplete);
      }
    }
  }

  // Overflow follows Arrows
  function scrollIntoView() {
    arrayLi[indexLi]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }
}
