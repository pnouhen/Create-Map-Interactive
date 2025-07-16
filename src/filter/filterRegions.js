import { storeRegion } from "../datas/storeRegion";
import { generateListRegion } from "../lists/generateListRegion";
import { handleButtonAnimation } from "../filterTerritoires/handleButtonAnimation";
import { handleButtonText } from "../filterTerritoires/handleButtonText";
import { handleOutsideClick } from "../utils/handleOutsideClick";
import { generateRegion } from "../filterTerritoires/generateRegion";

const searchRegion = document.getElementById("searchRegion")
const searchRegionDiv = document.getElementById("searchRegion");
const searchRegionText = searchRegionDiv.querySelector(".p");
const searchRegionautoComplete = searchRegion.querySelector(
  ".searchTerritoireAutoComplete"
);

let state = { open: false };

async function filterRegions() {
  await generateListRegion(
    searchRegionautoComplete,
    storeRegion,
    searchRegionText
  );

  handleButtonAnimation(searchRegionDiv, state, searchRegionautoComplete);
  handleOutsideClick(searchRegionautoComplete, state);

  const arrayLi = searchRegionautoComplete.querySelectorAll(".li");
  arrayLi.forEach((territoire) => {
    handleButtonAnimation(territoire, state, searchRegionautoComplete);
    handleButtonText(territoire, searchRegionText);

    territoire.addEventListener("click", () => {
      generateRegion(searchRegionText, storeRegion);
    });
  });
}

if (storeRegion) {
  filterRegions();
}
