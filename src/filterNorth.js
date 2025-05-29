import { storeRnn } from "./storeRnn";
import { generateClusters } from "./generateClusters";

export function filterNorth() {
  const RnnNorthMapCheck = document.getElementById("RnnNorthInput");
  const RnnNorthMapLabel = document.getElementById("RnnNorthLabel");

  function filterLatNorth(value) {
    return value >= 46.387255 && value <= 52;
  }

  RnnNorthMapCheck.addEventListener("click", () => {
    RnnNorthMapLabel.classList.toggle("inputActive");
    
    // If the check is active, un new tableau is create with the filter and generateClusters with a new filter
    if (RnnNorthMapCheck.checked) {
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
