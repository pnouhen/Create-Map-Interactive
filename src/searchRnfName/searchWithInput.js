import { activeList } from "../lists/activeList.js";
import { disableList } from "../lists/disableList.js";

const searchTerritoireAutoComplete = document.querySelectorAll(".searchTerritoireAutoComplete")

export function searchWithInput(input, search, autoComplete) {
  if (input._customSearchRnfValue) {
    input.removeEventListener("input", input._customSearchRnfValue);
  }
  input._customSearchRnfValue = search;
  input.addEventListener("input", search);

  input.addEventListener("click", (e) => {
    e.stopPropagation()

    activeList(autoComplete);

    searchTerritoireAutoComplete.forEach((autoComplete) => {
    disableList(autoComplete)

    })
  })
}
