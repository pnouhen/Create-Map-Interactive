import { storeListDep } from "../data/storeListDep";
import { removeOptions } from "./selectUtils/removeOptions";
import { createOptionAll } from "./selectUtils/createOptionAll";
import { removeOptionAll } from "./selectUtils/removeOptionAll";
import { valueOptionAllDep } from "./selectUtils/valueOptionAll";

export function generateListDep(data) {
  const selectedDepartments = document.getElementById("selectedDepartments");

  removeOptions(selectedDepartments, "");

  createOptionAll(selectedDepartments, "TOUS LES DEPARTEMENTS", valueOptionAllDep);

  data.forEach((dep) => {
    const option = document.createElement("option");
    option.textContent = dep.code + " - " + dep.nom.toUpperCase();
    option.value = dep.code;
    option.id = dep.code;
    selectedDepartments.appendChild(option);
  });

  removeOptionAll(selectedDepartments, valueOptionAllDep);
}

generateListDep(storeListDep);
