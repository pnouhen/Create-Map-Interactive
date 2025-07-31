import { regionReady, storeRegion } from "../datas/storeRegion";
import { filterTerritoires } from "../filterTerritoires/filterTerritoires";
import { generateRegion } from "../filterRegions/generateRegion";
import { generateListRegion } from "../filterRegions/generateListRegion";
import { onButtonClick } from "../filterTerritoires/onButtonClick";
import { storeDepartments } from "../datas/storeDepartments";
import { arrayLiDep } from "../filterDepartments/configureDepartmentFilter";

const searchRegion = document.getElementById("searchRegion");
const searchRegionButton = searchRegion.querySelector("button");
const searchRegionText = searchRegion.querySelector(".js-p");
const searchRegionAutoComplete = searchRegion.querySelector(
  ".searchTerritoireAutoComplete"
);

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentText = searchDepartment.querySelector(".js-p");

async function filterRegions() {
  await regionReady();
  if (storeRegion.length > 0) {
    await generateListRegion(searchRegionAutoComplete, storeRegion);

    onButtonClick(searchRegionButton, searchRegion, searchRegionAutoComplete);

    const arrayLi = searchRegionAutoComplete.querySelectorAll(".li");

    const onClickRegion = () => {
      generateRegion(searchRegionText, storeRegion);

      if (storeDepartments.length > 0 && searchDepartmentText.id !== "") {
        searchDepartmentText.textContent = arrayLiDep[0].textContent;
        searchDepartmentText.id = arrayLiDep[0].id;
      }
    };
    filterTerritoires(
      arrayLi,
      storeRegion,
      searchRegionButton,
      searchRegionText,
      searchRegionAutoComplete,
      onClickRegion
    );
  } else {
    searchRegionButton.classList.add("button-territoire-inactive");
  }
}

filterRegions();
