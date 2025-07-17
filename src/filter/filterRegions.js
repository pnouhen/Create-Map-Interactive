import { storeRegion } from "../datas/storeRegion";
import { generateListRegion } from "../lists/generateListRegion";
import { handleButtonAnimation } from "../filterTerritoires/handleButtonAnimation";
import { handleButtonText } from "../filterTerritoires/handleButtonText";
import { generateRegion } from "../filterTerritoires/generateRegion";
import { useArrowKeydown } from "../listNavigation/useArrowKeydown";
import { handleOutside } from "../utils/handleOutside";

const searchRegion = document.getElementById("searchRegion");
const searchRegionButton = searchRegion.querySelector("button");
const searchRegionText = searchRegion.querySelector(".p");
const searchRegionAutoComplete = searchRegion.querySelector(
  ".searchTerritoireAutoComplete"
);

let state = { open: false };

async function filterRegions() {
  if (storeRegion.length > 0) {
    await generateListRegion(
      searchRegionAutoComplete,
      storeRegion,
      searchRegionText
    );

    searchRegionButton.classList.add("button-territoire-active");
    handleButtonAnimation(searchRegion, state, searchRegionAutoComplete);
    handleOutside(searchRegionAutoComplete, state);

    const arrayLi = searchRegionAutoComplete.querySelectorAll(".li");
    arrayLi.forEach((territoire) => {
      handleButtonAnimation(territoire, state, searchRegionAutoComplete);
      handleButtonText(territoire, searchRegionText);

      territoire.addEventListener("click", () => {
        generateRegion(searchRegionText, storeRegion);
      });
    });

    useArrowKeydown(
      searchRegionButton,
      arrayLi
    );
  } else {
    searchRegionButton.classList.add("button-territoire-inactive");
  }
}

filterRegions();
