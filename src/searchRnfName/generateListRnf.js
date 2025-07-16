import { activeSuggestionRnf } from "../searchRnfName/activeSuggestionRnf.js";
import { activeList } from "../utils/activeList.js";
import { disableList } from "../utils/disableList.js";
import { handleOutsideClick } from "../utils/handleOutsideClick.js";

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
  
  handleOutsideClick(autoComplete);
}
