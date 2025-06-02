import { storeRnn } from "./storeRnn";
import { generateClusters } from "./generateClusters";

export function filterNorth() {
  const rnnNorthMapCheck = document.getElementById("RnnNorthInput");
  const rnnNorthMapLabel = document.getElementById("RnnNorthLabel");

  function filterLatNorth(value) {
    return value >= 46.387255 && value <= 52;
  }

  rnnNorthMapCheck.addEventListener("click", () => {
    rnnNorthMapLabel.classList.toggle("inputActive");
    
    // If the check is active, un new tableau is create with the filter and generateClusters with a new filter
    if (rnnNorthMapCheck.checked) {
      const filteredData = {
        features: storeRnn.features.filter(el => filterLatNorth(el.bbox[1]))
      };
      generateClusters(filteredData)
    } else {
      generateClusters(storeRnn)
    }
  });
}

filterNorth();
