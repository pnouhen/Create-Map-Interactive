import { getCoordClick } from "../filterRange/getCoordClick";

const inputRange = document.getElementById("rangeDistance");
const rangeText = document.querySelector(".js-rangeText");
const btnRangeDistance = document.querySelector(".js-btnRangeDistance");

export function filterRange() {
  let isActive = false;

  btnRangeDistance.addEventListener("click", () => {
    isActive = !isActive;
    getCoordClick(inputRange, isActive);

    btnRangeDistance.classList.toggle("font-medium");

    if(isActive) {
      btnRangeDistance.textContent = "Désactiver le filtre"
    } else {
      btnRangeDistance.textContent = "Activer le filtre"
    }
  });

  rangeText.textContent = inputRange.value + " km";
  inputRange.addEventListener("input", () => {
    rangeText.textContent = inputRange.value + " km";
  });
}

filterRange();
