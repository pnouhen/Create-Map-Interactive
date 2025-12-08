import { createLiDepartment } from "../filterDepartments/createLiDepartment";
import { generateLiAll } from "./generateLiAll";

export function updateDepartmentsByRegion(
  searchDepartmentAutoComplete,
  storeDepartments,
  regionValue
) {
  generateLiAll(
    searchDepartmentAutoComplete,
    "TOUTES LES DEPARTEMENTS",
    "allDepOfRegion"
  );

  storeDepartments
    .filter((departement) => departement.reg_code[0] === regionValue)
    .forEach((departement) =>
      createLiDepartment(departement, searchDepartmentAutoComplete)
    );
}
