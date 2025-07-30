import { departmentReady, storeDepartments } from "../datas/storeDepartments";
import { onButtonClick } from "../filterTerritoires/onButtonClick";
import { choiceListDepartment } from "../filterDepartments/choiceListDepartment";
import { regionReady, storeRegion } from "../datas/storeRegion";
import { configureDepartmentFilter } from "../filterDepartments/configureDepartmentFilter";
import { generateListDep } from "../filterDepartments/generateListDepartment";

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentButton = searchDepartment.querySelector("button");
const searchDepartmentText = searchDepartment.querySelector(".js-p");
const searchDepartmentAutoComplete = searchDepartment.querySelector(
  ".searchTerritoireAutoComplete"
);

async function filterDepartments() {
  await departmentReady();
  if (storeDepartments.length > 0) {
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

    await regionReady();
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
