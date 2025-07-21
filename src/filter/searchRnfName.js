import { storeRnf } from "../datas/storeRnf.js";
import { generateListRnf } from "../searchRnfName/generateListRnf.js";
import { generateClusters } from "../markers/generateClusters.js";
import { centerAll } from "../filterTerritoires/centerAll.js";
import { centerPolygon } from "../polygons/centerPolygon.js";
import { generateMarkerInput } from "../searchRnfName/generateMarkerInput.js";
import { cleanInputList } from "../searchRnfName/cleanInputList.js";
import { searchWithInput } from "../searchRnfName/searchWithInput.js";

const searchRnfInput = document.getElementById("searchRnf");
const searchRnfAutoComplete = document.getElementById("searchRnfAutoComplete");

let previousData = storeRnf;

export function searchRnfName(data, zoom, map) {
  cleanInputList(previousData, data, searchRnfAutoComplete, searchRnfInput)

  // Function for EventListener
  const searchRnfValue = (e) => {
    e.stopPropagation();

    if (searchRnfInput.value === "") {
      generateClusters(data);
      if (data === storeRnf) {
        centerAll();
      } else {
        centerPolygon(zoom, map);
      }
    }
    generateListRnf(searchRnfAutoComplete, searchRnfInput, data);

    generateMarkerInput(searchRnfInput.value, data);
  };
  
  searchWithInput(searchRnfInput,searchRnfValue)
}

searchRnfName(storeRnf);
