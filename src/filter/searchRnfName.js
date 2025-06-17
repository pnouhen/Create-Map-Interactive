import { storeRnF } from "../datas/storeRnF.js";
import { generateMarkerInput } from "../searchRnfName/generateMarkerInput.js";
import { activeSuggestionRnf } from "../searchRnfName/activeSuggestionRnf.js";
import { generateListRnf } from "../searchRnfName/generateListRnf.js";

const searchRnfInupt = document.getElementById("searchRnf");

export function searchRnfName(data) {
  searchRnfInupt.addEventListener("input", () => {
    generateListRnf(searchRnfInupt, data);

    activeSuggestionRnf(searchRnfInupt, data);

    generateMarkerInput(searchRnfInupt.value, data);
  });
}

if (storeRnF) {
  searchRnfName(storeRnF);
}