import { storeListDep } from "../data/storeListDep";
import { cleanGeneratedOptions } from "./selectUtils/cleanGeneratedOptions";
import { createOptionAll } from "./selectUtils/createOptionAll";
import { removeAllOption } from "./selectUtils/removeAllOption";

export function generateListDep(data) {
  const selectedDepartments = document.getElementById("selectedDepartments");
  const value = "allDeps";

  cleanGeneratedOptions(selectedDepartments, "");

  createOptionAll(selectedDepartments, "TOUS LES DEPARTEMENTS", value);

  data.forEach((dep) => {
    const option = document.createElement("option");
    option.textContent = dep.code + " - " + dep.nom.toUpperCase();
    option.value = dep.code;
    option.id = dep.code;
    selectedDepartments.appendChild(option);
  });

  removeAllOption(selectedDepartments, value);
}

generateListDep(storeListDep);
