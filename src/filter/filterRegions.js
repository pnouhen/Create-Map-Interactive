import { storeRegion } from "../datas/storeRegion";
import { filterTerritoires } from "../filterTerritoires/filterTerritoires";
import { generateRegion } from "../filterTerritoires/generateRegion";
import { generateListRegion } from "../lists/generateListRegion";

const searchRegion = document.getElementById("searchRegion");
const searchRegionButton = searchRegion.querySelector("button");
const searchRegionText = searchRegion.querySelector(".p");
const searchRegionAutoComplete = searchRegion.querySelector(
  ".searchTerritoireAutoComplete"
);

async function filterRegions() {
  if (storeRegion.length > 0) {
await generateListRegion(searchRegionAutoComplete, storeRegion)

const onClickTerritoire = () => generateRegion(searchRegionText, storeRegion)

  filterTerritoires(
    storeRegion,
    searchRegion,
    searchRegionButton,
    searchRegionText,
    searchRegionAutoComplete,
    onClickTerritoire
  );
} else {
  button.classList.add("button-territoire-inactive");
}
}

filterRegions()
