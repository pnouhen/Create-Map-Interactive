import { storeRnf } from "../datas/storeRnf";
import { getCoordClick } from "../filterRange/getCoordClick";

const inputRange = document.getElementById("rangeDistance");
const rangeText = document.querySelector(".js-rangeText");
const checkboxRangeDistance = document.getElementById("checkboxRangeDistance");

export function filterRange(data) {
  const onClick = () => {
    getCoordClick(inputRange, data, checkboxRangeDistance.checked);
  };

  if (checkboxRangeDistance._changeData) {
    checkboxRangeDistance.removeEventListener(
      "change",
      checkboxRangeDistance._changeData
    );
    checkboxRangeDistance.checked = false;
    getCoordClick(inputRange, data, checkboxRangeDistance.checked);
  }

  checkboxRangeDistance._changeData = onClick;

  checkboxRangeDistance.addEventListener("change", onClick);

  rangeText.textContent = inputRange.value + " km";
  inputRange.addEventListener("input", () => {
    rangeText.textContent = inputRange.value + " km";
  });
}

filterRange(storeRnf);
