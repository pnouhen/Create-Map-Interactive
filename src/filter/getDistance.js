import { generateDistance } from "../getDistance/generateDistance";

const checkboxDistance = document.getElementById("checkboxDistance");
const checkboxRangeDistance = document.getElementById("checkboxRangeDistance");

export function getDistance() {
  checkboxDistance.addEventListener("change", () => {
    generateDistance(checkboxDistance.checked);
    if (checkboxDistance) {
      checkboxRangeDistance.checked = false
    }
  });
}

getDistance();
