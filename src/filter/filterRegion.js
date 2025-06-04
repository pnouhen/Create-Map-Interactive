import { linkRnnRegion } from "../elements/linkRnnRegion";
import { generateClusters } from "../generate/generateClusters";

import { storeRnF } from "../data/storeRnF";;

function filterRegion() {
  const selectedRegion = document.getElementById("selectedRegions");

  if(!selectedRegion) return null

  const rnnRegion = linkRnnRegion();

  selectedRegion.addEventListener("change", () => {
    const value = selectedRegion.value;

    if (value === "allRegion") {
      generateClusters(storeRnF);
    } else {
      const filteredRegion = rnnRegion.filter((el) => el.region[0]?.name === value);
      generateClusters(filteredRegion);
    }
  });
}

filterRegion();

