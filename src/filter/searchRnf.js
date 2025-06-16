import { storeRnF } from "../datas/storeRnF";
import { generateMarkerInput } from "../searchRnf/generateMarkerInput.js";
import { activeSuggestionRnf } from "../searchRnf/activeSuggestionRnf.js";
import { generateListRnf } from "../searchRnf/generateListRnf.js";

const searchRnfInupt = document.getElementById("searchRnf");

export function searchRnf(data) {
  searchRnfInupt.addEventListener("input", () => {
    generateListRnf(searchRnfInupt, data);

    activeSuggestionRnf(searchRnfInupt, data);

    generateMarkerInput(searchRnfInupt.value, data);
  });
}

if (storeRnF) {
  searchRnf(storeRnF);
}