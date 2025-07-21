import { generateLiAll } from "./generateLiAll";

export function generateListDep(autoComplete, data) {
    generateLiAll(autoComplete, "TOUTES LES DEPARTEMENTS")
    data
      .forEach((department) => {
        const li = document.createElement("li");
        li.classList.add("li");
        li.textContent = department.dep_code + " - " + department.dep_name_upper;
        li.id = department.dep_code;

        autoComplete.appendChild(li);
      });
}
