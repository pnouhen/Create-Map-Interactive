import { disableList } from "../lists/disableList";
import { generateMarkerInput } from "./generateMarkerInput";

export function activeSuggestionRnf(selectRnf, input, data, autoComplete) {
    selectRnf.forEach((li) => {
      li.addEventListener("click", () => {
        input.value = "";
        input.value = li.textContent;

        generateMarkerInput(li.textContent, data, autoComplete);
      });
    });

    if(selectRnf.length === 0) {
      disableList(autoComplete)
    }
}
