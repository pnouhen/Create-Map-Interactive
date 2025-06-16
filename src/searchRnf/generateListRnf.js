import { storeRnF } from "../datas/storeRnF";

export const searchRnfAutoComplete = document.getElementById(
    "searchRnfAutoComplete"
  );
  
 // To generate the list for to propose Rnf
export function generateListRnf(input) {
  searchRnfAutoComplete.innerHTML = "";

  // Minimun 3 letters
  if (input.value.length > 2) {
    // To create the list
    const listRnf = storeRnF.map((rnf) => ({
      name_rnf: rnf.properties.nom,
      id: rnf.id,
    }));

    // To create the balise li
    listRnf
      .filter((rnf) => rnf.name_rnf.includes(input.value))
      .forEach((rnf) => {
        const li = document.createElement("li");
        li.textContent = rnf.name_rnf;
        li.classList.add("selectRnf", "cursor-pointer");
        searchRnfAutoComplete.appendChild(li);
        
      });
  }  
}
