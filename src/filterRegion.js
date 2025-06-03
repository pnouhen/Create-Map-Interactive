import { linkRnnRegion } from "./linkRnnRegion";
import { generateClusters } from "./generateClusters";

import { storeRnF } from "./storeRnF";;

function filterRegion() {
  const selectedRegion = document.getElementById("selectedRegions");

  const rnnRegion = linkRnnRegion();

  selectedRegion.addEventListener("change", () => {
    const value = selectedRegion.value;

    if (value === "allRegion") {
      generateClusters(storeRnF);
    } else {
      const filteredRegion = rnnRegion.filter((el) => value === el.region);
      generateClusters(filteredRegion);
    }
  });
}

filterRegion();

