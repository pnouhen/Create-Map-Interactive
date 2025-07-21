import { generateLiAll } from "../lists/generateLiAll";

export async function generateListRegion(autoComplete, territoires) {
    generateLiAll(autoComplete, "TOUTES LES REGIONS")

    await territoires
      .sort((a, b) => a.reg_name_upper.localeCompare(b.reg_name_upper))
      .forEach((region) => {
        const li = document.createElement("li");
        li.classList.add("li");
        li.textContent = region.reg_name_upper;
        li.id = region.reg_code;

        autoComplete.appendChild(li);
      });
}
