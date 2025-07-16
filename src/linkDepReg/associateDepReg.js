import { generateListDep } from "../lists/generateListDep";
import { generateDepRegion } from "./generateDepRegion";
import { storeListDep } from "../datas/storeListDep";

// Associate all the depatments for the region

const searchRegionautoComplete = document.getElementById("searchTerritoireAutoComplete");

searchRegionautoComplete.addEventListener("change", () => {
  const value = searchRegionautoComplete.value;
  if (value === "allRegions") {
    generateListDep(storeListDep);
  } else {
    generateDepRegion(value);
  }
});
