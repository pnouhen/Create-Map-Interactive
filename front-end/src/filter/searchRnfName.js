import { storeRnf } from "../datas/storeRnf.js";
import { generateListRnf } from "../searchRnfName/generateListRnf.js";
import { generateClusters } from "../markers/generateClusters.js";
import { generateMarkerInput } from "../searchRnfName/generateMarkerInput.js";
import { cleanInputList } from "../searchRnfName/cleanInputList.js";
import { generateMap } from "../maps/generateMap.js";
import { updateElementListener } from "../utils/updateElementListener.js";
import { showAutoComplete } from "../utils/showAutoComplete.js";
import { searchRnfArea } from "./searchRnfArea.js";

const searchRnfInput = document.getElementById("searchRnf");
const searchRnfAutoComplete = document.getElementById("searchRnfAutoComplete");

let previousData = [];

export function searchRnfName(data) {
  const map = generateMap();

  cleanInputList(previousData, data, searchRnfAutoComplete, searchRnfInput);

  searchRnfInput.addEventListener("click", (e) => {
    e.stopPropagation();
    const selectRnf = searchRnfAutoComplete.querySelectorAll(".li");
    if (selectRnf.length > 0) showAutoComplete(searchRnfAutoComplete);
  });

  const searchRnfValue = () => {
    if (searchRnfInput.value === "") {
      generateClusters(data);
    }
    generateListRnf(searchRnfAutoComplete, searchRnfInput, data);

    generateMarkerInput(searchRnfInput.value, data, map);

    searchRnfArea(data)
  };

  updateElementListener(searchRnfInput, "input", searchRnfValue);
}
