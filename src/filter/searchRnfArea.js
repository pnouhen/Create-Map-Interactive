import { identifyRnfArea } from "../searchRnfArea/identifyRnfArea";
import { findRnfAreaMinMax } from "../searchRnfArea/findRnfAreaMiMax";
import { storeRnF } from "../datas/storeRnF";
import { navigateNumberArray } from "../searchRnfArea/navigateNumberArray";

const areaMinRnf = document.getElementById("areaMinRnf");
const areaMaxRnf = document.getElementById("areaMaxRnf");

export function searchRnfArea(data) {
  let valueMinMax = findRnfAreaMinMax(data);

  areaMinRnf.value = valueMinMax.min;
  areaMaxRnf.value = valueMinMax.max;

  areaMinRnf.addEventListener("input", () => {
    let value = areaMinRnf.value;

    if (value === "") {
      valueMinMax.min = 0;
    }

    identifyRnfArea(areaMinRnf,data, valueMinMax, value, "min");
  });

  areaMaxRnf.addEventListener("input", () => {
    let value = areaMaxRnf.value;
    identifyRnfArea(areaMaxRnf,data, valueMinMax, value, "max");
  });

}

searchRnfArea(storeRnF);
 navigateNumberArray(areaMinRnf,storeRnF)
