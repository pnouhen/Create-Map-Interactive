import { generateListDep } from "../generateListDep";
import { generateDepRegion } from "../selectFunctions/generateDepRegion";
import { storeListDep } from "../../data/storeListDep";

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
