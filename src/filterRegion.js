import { linkRnnRegion } from "./linkRnnRegion";
import { generateClusters } from "./generateClusters";

import { storeRnn } from "./storeRnn";

function filterRegion() {
  const selectedRegion = document.getElementById("selectedRegions");

  const rnnRegion = linkRnnRegion();

  selectedRegion.addEventListener("change", () => {
    const value = selectedRegion.value;

    if (value === "allRegion") {
      generateClusters(storeRnn);
    } else {
      const filteredRegion = rnnRegion.filter((el) => value === el.region);
      generateClusters(filteredRegion);
    }
  });
}

filterRegion();
