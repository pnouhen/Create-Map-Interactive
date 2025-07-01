import { identifyRnfArea } from "../searchRnfArea/identifyRnfArea";
import { findRnfAreaMinMax } from "../searchRnfArea/findRnfAreaMiMax";
import { storeRnF } from "../datas/storeRnF";

const areaMinRnf = document.getElementById("areaMinRnf");
const areaMaxRnf = document.getElementById("areaMaxRnf");

// Store callback function references
let minRnfValue = null;
let maxRnfValue = null;

export function searchRnfArea(data, zoom, map) {
  let valueMinMax = findRnfAreaMinMax(data);

  areaMinRnf.value = valueMinMax.min;
  areaMaxRnf.value = valueMinMax.max;

  // Helper function to setup listeners
  const setupListener = (input, rnfValue, type) => {
    if (rnfValue) {
      input.removeEventListener("input", rnfValue);
    }
    const newValue = () => {
      let value = input.value;
      identifyRnfArea(data, zoom, valueMinMax, value, type);

    };

    input.addEventListener("input", newValue);

    // One for each input 
    return newValue;
  };
  
  // Setup listeners
  minRnfValue = setupListener(areaMinRnf, minRnfValue, "min");
  maxRnfValue = setupListener(areaMaxRnf, maxRnfValue, "max");
}

searchRnfArea(storeRnF);
