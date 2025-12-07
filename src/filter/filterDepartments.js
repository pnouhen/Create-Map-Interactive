import { departmentReady, storeDepartments } from "../datas/storeDepartments";
import { onButtonClick } from "../filterTerritoires/onButtonClick";
import { changeListDepartment } from "../filterDepartments/changeListDepartment";
import { regionReady, storeRegion } from "../datas/storeRegion";
import { configureDepartmentFilter } from "../filterDepartments/configureDepartmentFilter";
import { generateListDep } from "../filterDepartments/generateListDepartment";
import { storeRnf } from "../datas/storeRnf";

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentButton = searchDepartment.querySelector("button");
const searchDepartmentText = searchDepartment.querySelector(".js-p");
const searchDepartmentAutoComplete = searchDepartment.querySelector(
  ".searchTerritoireAutoComplete"
);

async function filterDepartments() {
  await departmentReady();
  if (storeDepartments.length > 0 && storeRnf.length > 0) {
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
      changeListDepartment(
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
