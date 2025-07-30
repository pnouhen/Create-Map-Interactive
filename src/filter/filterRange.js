import { generateCircle } from "../filterRange/generateCircle";
import { getDistance } from "./getDistance";

const checkBoxDistance = document.getElementById("checkBoxDistance");

const inputRange = document.getElementById("rangeDistance");
const rangeText = document.querySelector(".js-rangeText");
const checkBoxRange = document.getElementById("checkBoxRange");

export function filterRange(data) {
  if (checkBoxRange) getDistance("clean");

  const onClick = () => {
    generateCircle(inputRange, data, checkBoxRange.checked);

    if (checkBoxRange) {
      checkBoxDistance.checked = false;
      getDistance(data, "clean")
    }
  };

  if (checkBoxRange._changeData) {
    checkBoxRange.removeEventListener("change", checkBoxRange._changeData);
    checkBoxRange.checked = false;
    generateCircle(inputRange, data, checkBoxRange.checked);
  }

  checkBoxRange._changeData = onClick;

  checkBoxRange.addEventListener("change", onClick);

  rangeText.textContent = inputRange.value + " km";
  inputRange.addEventListener("input", () => {
    rangeText.textContent = inputRange.value + " km";
  });
}
