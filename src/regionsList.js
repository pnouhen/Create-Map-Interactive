import { storeRegion } from "./storeRegion";
import { linkRnnRegion } from "./linkRnnRegion";
import { generateClusters } from "./generateClusters";

import { storeRnn } from "./storeRnn";

// Recovery the name of the region and sort alphabetically
const regionList = storeRegion.results
    .map((region) => region.reg_name_upper)
    .sort((a, b) => a.localeCompare(b))

const selectedRegion = document.getElementById("selectedRegions")

regionList.forEach(name => {
    const optionName = document.createElement("option")
    optionName.textContent = name
    optionName.value = name.replace(/\s+/g, "-")
    selectedRegion.appendChild(optionName)
});

let markersRegion = []

const RnnRegion = linkRnnRegion()
const clusters = generateClusters(storeRnn.features)

selectedRegion.addEventListener("change", () => {
  const value = selectedRegion.value;

  if (value === "allRegion") {
    console.log("allRegion");
    generateClusters(storeRnn)
  } else {
    const region = storeRegion.results.find(el => 
      el.reg_name_upper.replace(/\s+/g, "-") === value
    );
    if (region) {
        
      console.log(region.reg_name_upper);

    }
  }
});

console.log(RnnRegion[0])
console.log(storeRnn.features[0])