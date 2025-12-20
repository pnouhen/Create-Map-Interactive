import { storeRnf } from "../datas/storeRnf";
import { generateDistance } from "../getDistance/generateDistance";
import { generateClusters } from "../markers/generateClusters";
import { filterRange } from "./filterRange";

const checkBoxDistance = document.getElementById("checkBoxDistance");
const checkBoxRange = document.getElementById("checkBoxRange");

export function getDistance(data, action) {
  // Delete other checkbox
  if (action === "clean") {
    checkBoxDistance.checked = false;
    generateDistance(checkBoxDistance.checked);
  }

  checkBoxDistance.addEventListener("change", () => {
    generateDistance(checkBoxDistance.checked);
    if (checkBoxDistance.checked && checkBoxRange.checked) {
      checkBoxRange.checked = false;
      filterRange(data);
      if (data.length === 0) generateClusters(storeRnf);
      else {
        generateClusters(data);
      }
    }
  });
}
