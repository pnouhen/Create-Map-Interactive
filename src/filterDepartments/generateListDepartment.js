import { generateLiAll } from "../lists/generateLiAll";
import { createLiDepartment } from "./createLiDepartment";

export function generateListDep(autoComplete, territoires) {
  searchDepartmentAutoComplete.innerHTML = "";

  generateLiAll(autoComplete, "TOUTES LES DEPARTEMENTS");

  territoires
    .sort((a, b) => a.dep_name_upper.localeCompare(b.dep_name_upper))
    .forEach((department) => createLiDepartment(department, autoComplete));
}
