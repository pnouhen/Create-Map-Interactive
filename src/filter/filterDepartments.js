import { storeDepartments } from "../datas/storeDepartments";
import { onButtonClick } from "../filterTerritoires/onButtonClick";
import { choiceListDepartment } from "../filterDepartments/choiceListDepartment";
import { storeRegion } from "../datas/storeRegion";
import { configureDepartmentFilter } from "../filterDepartments/configureDepartmentFilter";
import { generateListDep } from "../filterDepartments/generateListDepartment";

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentButton = searchDepartment.querySelector("button");
const searchDepartmentText = searchDepartment.querySelector(".p");
const searchDepartmentAutoComplete = searchDepartment.querySelector(
  ".searchTerritoireAutoComplete"
);

async function filterDepartments() {
  if (storeDepartments) {
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
      choiceListDepartment(
        storeDepartments,
        searchDepartmentButton,
        searchDepartmentText,
        searchDepartmentAutoComplete
      );
    }
  } else {
    searchDepartmentButton.classList.add("button-territoire-inactive");
  }
}

filterDepartments();
