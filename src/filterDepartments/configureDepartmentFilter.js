import { filterTerritoires } from "../filterTerritoires/filterTerritoires";
import { generateDepartments } from "./generateDepartments";

export let arrayLiDep = []

export function configureDepartmentFilter(
  storeDepartments,
  searchDepartmentButton,
  searchDepartmentText,
  searchDepartmentAutoComplete
) {
  const onClickDepartment = () =>
    generateDepartments(
      searchDepartmentText,
      storeDepartments,
      searchDepartmentAutoComplete
    );

   arrayLiDep = searchDepartmentAutoComplete.querySelectorAll(".li");

  filterTerritoires(
    arrayLiDep,
    storeDepartments,
    searchDepartmentButton,
    searchDepartmentText,
    searchDepartmentAutoComplete,
    onClickDepartment
  );
}
