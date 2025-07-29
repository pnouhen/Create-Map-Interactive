import { storeRnf } from "../datas/storeRnf";
import { generateCircle } from "../filterRange/generateCircle";

const checkboxDistance = document.getElementById("checkboxDistance");

const inputRange = document.getElementById("rangeDistance");
const rangeText = document.querySelector(".js-rangeText");
const checkboxRangeDistance = document.getElementById("checkboxRangeDistance");

export function filterRange(data) {
  const onClick = () => {
    generateCircle(inputRange, data, checkboxRangeDistance.checked);

    if (checkboxRangeDistance) {
      checkboxDistance.checked = false
    }
  };

  if (checkboxRangeDistance._changeData) {
    checkboxRangeDistance.removeEventListener(
      "change",
      checkboxRangeDistance._changeData
    );
    checkboxRangeDistance.checked = false;
    generateCircle(inputRange, data, checkboxRangeDistance.checked);
  }

  checkboxRangeDistance._changeData = onClick;

  checkboxRangeDistance.addEventListener("change", onClick);

  rangeText.textContent = inputRange.value + " km";
  inputRange.addEventListener("input", () => {
    rangeText.textContent = inputRange.value + " km";
  });
}

filterRange(storeRnf);
