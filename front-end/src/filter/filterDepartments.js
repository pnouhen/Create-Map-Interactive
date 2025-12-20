import { storeDepartments } from "../datas/storeDepartments";
import { onButtonClick } from "../filterTerritoires/onButtonClick";
import { changeListDepartment } from "../filterDepartments/changeListDepartment";
import { storeRegion } from "../datas/storeRegion";
import { configureDepartmentFilter } from "../filterDepartments/configureDepartmentFilter";
import { generateListDep } from "../filterDepartments/generateListDepartment";
import { storeRnf } from "../datas/storeRnf";

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentButton = searchDepartment.querySelector("button");
const searchDepartmentText = searchDepartment.querySelector(".js-p");
const searchDepartmentAutoComplete = searchDepartment.querySelector(
  ".searchTerritoireAutoComplete"
);

export async function filterDepartments() {
  if (storeDepartments.length > 0 && storeRnf) {
    searchDepartmentButton.classList.remove("button-territoire-inactive");

    generateListDep(searchDepartmentAutoComplete, storeDepartments);

    onButtonClick(
      searchDepartmentButton,
      searchDepartment,
      searchDepartmentAutoComplete
    );

    configureDepartmentFilter(
      storeDepartments,
      searchDepartmentButton,
      searchDepartmentText,
      searchDepartmentAutoComplete
    );

    if (storeRegion.length > 0) {
      changeListDepartment(
        storeDepartments,
        searchDepartmentButton,
        searchDepartmentText,
        searchDepartmentAutoComplete
      );
    }
  }
}
