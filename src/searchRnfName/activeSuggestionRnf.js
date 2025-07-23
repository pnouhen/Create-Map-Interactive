import { showAutoComplete } from "../utils/showAutoComplete";
import { generateMarkerInput } from "./generateMarkerInput";

export function activeSuggestionRnf(selectRnf, input, data, autoComplete) {
  if (selectRnf.length > 0) {
    selectRnf.forEach((li) => {
      li.addEventListener("click", () => {
        input.value = "";
        input.value = li.textContent;

        generateMarkerInput(li.textContent, data, autoComplete);
      });
    });

    showAutoComplete(autoComplete);
  }
}
