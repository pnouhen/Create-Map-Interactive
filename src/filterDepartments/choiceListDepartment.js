import { regionValue } from "../filterRegions/generateRegion";
import { updateDepartmentsByRegion } from "../filterTerritoires/updateDepartmentsByRegion";
import { generateListDep } from "../lists/generateListDepartment";
import { configureDepartmentFilter } from "./configureDepartmentFilter";

const searchRegion = document.getElementById("searchRegion");

export function choiceListDepartment(
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

    configureDepartmentFilter(
      storeDepartments,
      searchDepartmentButton,
      searchDepartmentText,
      searchDepartmentAutoComplete
    );
  });
}
