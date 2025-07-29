import { disableAutoComplete } from "../utils/disableAutoComplete";
import { showAutoComplete } from "../utils/showAutoComplete";

const searchTerritoireAutoComplete = document.querySelectorAll(
  ".searchTerritoireAutoComplete"
);

export function returnAutoComplete(input, autoComplete) {
  input.addEventListener("click", (e) => {
    e.stopPropagation();

    searchTerritoireAutoComplete.forEach((autoComplete) =>
      disableAutoComplete(autoComplete)
    );

    const selectRnf = autoComplete.querySelectorAll(".li");
    if (selectRnf.length > 0) {
      showAutoComplete(searchRnfAutoComplete);
    }
  });
}
