import { activeSuggestionRnf } from "../searchRnfName/activeSuggestionRnf.js";
import { activeList } from "../lists/activeList.js";
import { disableList } from "../lists/disableList.js";
import { handleOutside } from "../utils/handleOutside.js";

// To generate the list for to propose Rnf
export function generateListRnf(autoComplete, input, data) {
  autoComplete.innerHTML = "";

  // Minimun 2 letters
  if (input.value.length > 1) {
    // To create the list
    data
      .filter((rnf) =>
        rnf.properties.nom.toUpperCase().includes(input.value.toUpperCase())
      )
      .forEach((rnf) => {
        const li = document.createElement("li");
        li.textContent = rnf.properties.nom;
        li.classList.add("li");
        autoComplete.appendChild(li);
      });

    activeSuggestionRnf(input, data, searchRnfautoComplete);

    activeList(autoComplete);
  } else {
    disableList(autoComplete)
  }
  
  handleOutside(autoComplete);
}
