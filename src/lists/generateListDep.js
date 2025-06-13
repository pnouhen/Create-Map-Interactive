import { storeListDep } from "../datas/storeListDep";
import { removeOptions } from "../selectOptions/removeOptions";
import { createOptionAll } from "../selectOptions/createOptionAll";
import { removeOptionAll } from "../selectOptions/removeOptionAll";
import { valueOptionAllDep } from "../selectOptions/valueOptionAll";

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
