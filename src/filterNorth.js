import { changeLabel } from "./changeLabel";
import { storeRnF } from "./storeRnF";;
import { generateClusters } from "./generateClusters";

export function filterNorth() {
  const rnnNorthMapCheck = document.getElementById("RnnNorthInput");
  const rnnNorthMapLabel = document.getElementById("RnnNorthLabel");

  function filterLatNorth(value) {
    return value >= 46.387255 && value <= 52;
  }

  rnnNorthMapCheck.addEventListener("click", () => {
    changeLabel(rnnNorthMapLabel)
    
    // If the check is active, un new tableau is create with the filter and generateClusters with a new filter
    if (rnnNorthMapCheck.checked) {
      const filteredData = storeRnF.filter(el => filterLatNorth(el.bbox[1]))
      generateClusters(filteredData)
    } else {
      generateClusters(storeRnF)
    }
  });
}

filterNorth();
