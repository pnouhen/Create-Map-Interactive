import { findRnfAreaMinMax } from "../searchRnfArea/findRnfAreaMiMax";
import { changeValue } from "../searchRnfArea/changeValue";

const areaMinRnf = document.getElementById("areaMinRnf");
const areaMaxRnf = document.getElementById("areaMaxRnf");

const inputAreaMinRnf = areaMinRnf.querySelector("input");
const inputAreaMaxRnf = areaMaxRnf.querySelector("input");

export function searchRnfArea(data) {
  if (data) {
    let valueMinMax = findRnfAreaMinMax(data);
    let minValue = valueMinMax.min;
    let maxValue = valueMinMax.max;

    inputAreaMinRnf.value = Number(minValue).toLocaleString();
    inputAreaMaxRnf.value = Number(maxValue).toLocaleString();

    changeValue(data, areaMinRnf, inputAreaMinRnf, valueMinMax, "min");
    changeValue(data, areaMaxRnf, inputAreaMaxRnf, valueMinMax, "max");
  }
}
