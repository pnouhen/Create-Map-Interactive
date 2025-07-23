import { disableAutoComplete } from "../utils/disableAutoComplete";
import { showAutoComplete } from "../utils/showAutoComplete";

const searchTerritoireAutoCompleteAll = document.querySelectorAll(
  ".searchTerritoireAutoComplete"
);

export function handleButtonAnimation(element, autoComplete) {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    searchTerritoireAutoCompleteAll.forEach((searchTerritoireAutoComplete) => {
      if (searchTerritoireAutoComplete === autoComplete) {
        if(autoComplete.classList.contains("opacity-0")) {
          showAutoComplete(autoComplete)
        } else {
        disableAutoComplete(autoComplete)
      }
      } 
    });
  });
}
