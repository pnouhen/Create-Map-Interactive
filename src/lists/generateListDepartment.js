import { generateLiAll } from "./generateLiAll";

export function generateListDep(autoComplete, territoires) {
    generateLiAll(autoComplete, "TOUTES LES DEPARTEMENTS", "allDepartments")
console.log(territoires)
    territoires
      .sort((a, b) => a.dep_name_upper.localeCompare(b.dep_name_upper))
      .forEach((department) => {
        const li = document.createElement("li");
        li.classList.add("li");
        li.textContent = department.dep_code + " - " + department.dep_name_upper;
        li.id = department.dep_code;

        autoComplete.appendChild(li);
      });
}
