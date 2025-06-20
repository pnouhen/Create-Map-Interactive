import { storeRnF } from "../datas/storeRnF.js";
import { generateMarkerInput } from "../searchRnfName/generateMarkerInput.js";
import { activeSuggestionRnf } from "../searchRnfName/activeSuggestionRnf.js";
import { generateListRnf } from "../searchRnfName/generateListRnf.js";
import { generateClusters } from "../markers/generateClusters.js";
import { centerAll } from "../regDep/centerAll.js";
import { centerPolygon } from "../regDep/centerPolygon.js";

const searchRnfInupt = document.getElementById("searchRnf");

  let searchRnfValue = null

export function searchRnfName(data, zoom, map) {
  if(searchRnfValue){
    searchRnfInupt.removeEventListener("input", searchRnfValue)
  }

  searchRnfValue = () => {
    if(searchRnfInupt.value === ""){
      generateClusters(data)

      if(data === storeRnF) {
      centerAll()
    } else {
      centerPolygon(zoom, map)
    }
    }
    generateListRnf(searchRnfInupt, data);

    activeSuggestionRnf(searchRnfInupt, data);

    generateMarkerInput(searchRnfInupt.value, data);
  }

  searchRnfInupt.addEventListener("input", searchRnfValue);
}

  searchRnfName(storeRnF);
