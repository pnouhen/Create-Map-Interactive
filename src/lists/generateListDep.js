import { storeListDep } from "../datas/storeListDep";
import { removeOptions } from "../selectOptions/removeOptions";
import { createOptionAll } from "../selectOptions/createOptionAll";
import { removeOptionAll } from "../selectOptions/removeOptionAll";
import { valueOptionAllDep } from "../selectOptions/valueOptionAll";
import { addListDep } from "./addListDep";

export function generateListDep() {
  const selectedDepartments = document.getElementById("selectedDepartments");

  let data = [...storeListDep]
  
  removeOptions(selectedDepartments, "");

  createOptionAll(selectedDepartments, "TOUS LES DEPARTEMENTS", valueOptionAllDep);

  data.push(
    addListDep(977, "Saint-Barthélemy")
  )

  data.forEach((dep) => {
    const option = document.createElement("option");
    option.textContent = dep.code + " - " + dep.nom.toUpperCase();
    option.value = dep.code;
    option.id = dep.code;
    selectedDepartments.appendChild(option);
  });

  removeOptionAll(selectedDepartments, valueOptionAllDep);
}

generateListDep();
