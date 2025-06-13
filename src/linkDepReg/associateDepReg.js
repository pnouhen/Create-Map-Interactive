import { generateListDep } from "../lists/generateListDep";
import { generateDepRegion } from "./generateDepRegion";
import { storeListDep } from "../datas/storeListDep";

// Associate all the depatments for the region

const selectedRegions = document.getElementById("selectedRegions");

selectedRegions.addEventListener("change", () => {
  const value = selectedRegions.value;
  if (value === "allRegions") {
    generateListDep(storeListDep);
  } else {
    generateDepRegion(value);
  }
});
