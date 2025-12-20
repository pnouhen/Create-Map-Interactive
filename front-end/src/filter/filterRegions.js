import { storeRegion } from "../datas/storeRegion";
import { filterTerritoires } from "../filterTerritoires/filterTerritoires";
import { generateRegion } from "../filterRegions/generateRegion";
import { generateListRegion } from "../filterRegions/generateListRegion";
import { onButtonClick } from "../filterTerritoires/onButtonClick";
import { storeDepartments } from "../datas/storeDepartments";
import { arrayLiDep } from "../filterDepartments/configureDepartmentFilter";
import { storeRnf } from "../datas/storeRnf";

const searchRegion = document.getElementById("searchRegion");
const searchRegionButton = searchRegion.querySelector("button");
const searchRegionText = searchRegion.querySelector(".js-p");
const searchRegionAutoComplete = searchRegion.querySelector(
  ".searchTerritoireAutoComplete"
);

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentText = searchDepartment.querySelector(".js-p");

export async function filterRegions() {
  
  if (storeRegion.length > 0 && storeRnf) {
    searchRegionButton.classList.remove("button-territoire-inactive");

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
  }
}
