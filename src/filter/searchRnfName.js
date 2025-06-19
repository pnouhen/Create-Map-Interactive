import { storeRnF } from "../datas/storeRnF.js";
import { generateMarkerInput } from "../searchRnfName/generateMarkerInput.js";
import { activeSuggestionRnf } from "../searchRnfName/activeSuggestionRnf.js";
import { generateListRnf } from "../searchRnfName/generateListRnf.js";
import { generateClusters } from "../markers/generateClusters.js";
import { centerAll } from "../regDep/centerAll.js";

const searchRnfInupt = document.getElementById("searchRnf");

export function searchRnfName(data) {
    if(data === storeRnF) {
      centerAll()
    }
  searchRnfInupt.addEventListener("input", () => {
    if(searchRnfInupt.value === ""){
      generateClusters(data)
    }

    generateListRnf(searchRnfInupt, data);

    activeSuggestionRnf(searchRnfInupt, data);

    generateMarkerInput(searchRnfInupt.value, data);
  });
}

if (storeRnF) {
  searchRnfName(storeRnF);
}