import { regionValue } from "../filterRegions/generateRegion";
import { updateDepartmentsByRegion } from "../filterTerritoires/updateDepartmentsByRegion";
import { disableAutoComplete } from "../utils/disableAutoComplete";
import { configureDepartmentFilter } from "./configureDepartmentFilter";
import { generateListDep } from "./generateListDepartment";

const searchRegion = document.getElementById("searchRegion");
const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentAutoComplete = searchDepartment.querySelector(
  ".searchTerritoireAutoComplete"
);

export function changeListDepartment(
  storeDepartments,
  searchDepartmentButton,
  searchDepartmentText,
  searchDepartmentAutoComplete
) {
  searchRegion.addEventListener("click", () => {
    if (regionValue > 0) {
      searchDepartmentAutoComplete.innerHTML = "";

      updateDepartmentsByRegion(
        searchDepartmentAutoComplete,
        storeDepartments,
        regionValue
      );
    } else if (regionValue !== "undefiened") {
      searchDepartmentAutoComplete.innerHTML = "";
      generateListDep(searchDepartmentAutoComplete, storeDepartments);
    }

    // Reactivate the filter
    configureDepartmentFilter(
      storeDepartments,
      searchDepartmentButton,
      searchDepartmentText,
      searchDepartmentAutoComplete
    );

    disableAutoComplete(searchDepartmentAutoComplete);
  });
}
