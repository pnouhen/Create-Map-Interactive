import { identifyRnfArea } from "../searchRnfArea/identifyRnfArea";
import { findRnfAreaMinMax } from "../searchRnfArea/findRnfAreaMiMax";
import { storeRnF } from "../datas/storeRnF";

const areaMinRnf = document.getElementById("areaMinRnf");
const areaMaxRnf = document.getElementById("areaMaxRnf");

// Store callback function references
let minInputHandler = null;
let maxInputHandler = null;

export function searchRnfArea(data, zoom, map) {

  let valueMinMax = findRnfAreaMinMax(data);

  areaMinRnf.value = valueMinMax.min;
  areaMaxRnf.value = valueMinMax.max;
  
  // Helper function to setup listeners
  const setupListener = (input, handlerRef, type) => {
    if (handlerRef) {
      input.removeEventListener("input", handlerRef);
    }

    const newHandler = () => {
      let value = input.value;
      identifyRnfArea(data, zoom, map, valueMinMax, value, type.toLowerCase());
    };

    input.addEventListener("input", newHandler);

    return newHandler;
  };
  
  // Setup listeners
  minInputHandler = setupListener(areaMinRnf, minInputHandler, "Min");
  maxInputHandler = setupListener(areaMaxRnf, maxInputHandler, "Max");
}

searchRnfArea(storeRnF);
