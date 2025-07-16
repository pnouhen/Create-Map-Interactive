import { generateLiAll } from "./generateLiAll";

export async function generateListRegion(autoComplete, storeRegion, text) {
    generateLiAll(autoComplete, "TOUTES LES REGIONS", "allRegions")

    await storeRegion
      .sort((a, b) => a.reg_name_upper.localeCompare(b.reg_name_upper))
      .forEach((region) => {
        const li = document.createElement("li");
        li.classList.add("li");
        li.textContent = region.reg_name_upper;
        li.value = region.reg_code;
        li.id = region.reg_code;

        autoComplete.appendChild(li);
      });
}
