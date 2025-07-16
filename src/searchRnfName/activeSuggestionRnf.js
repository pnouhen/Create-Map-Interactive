import { disableList } from "../utils/disableList";
import { generateMarkerInput } from "./generateMarkerInput";

export function activeSuggestionRnf(input, data, autoComplete) {
  const selectRnf = autoComplete.querySelectorAll(".li");
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
