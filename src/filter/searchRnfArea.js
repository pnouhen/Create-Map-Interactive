import { findRnfAreaMinMax } from "../searchRnfArea/findRnfAreaMiMax";
import { changeValue } from "../searchRnfArea/changeValue";
import { storeRnf } from "../datas/storeRnf";

const areaMinRnf = document.getElementById("areaMinRnf");
const areaMaxRnf = document.getElementById("areaMaxRnf");

const inputAreaMinRnf = areaMinRnf.querySelector("input");
const inputAreaMaxRnf = areaMaxRnf.querySelector("input");

export function searchRnfArea(data, zoom) {
  let valueMinMax = findRnfAreaMinMax(data);
  let minValue = valueMinMax.min;

  let maxValue = valueMinMax.max;

  inputAreaMinRnf.value = Number(minValue).toLocaleString();
  inputAreaMaxRnf.value = Number(maxValue).toLocaleString();

  changeValue(data, zoom, areaMinRnf, inputAreaMinRnf, valueMinMax, "min");
  changeValue(data, zoom, areaMaxRnf, inputAreaMaxRnf, valueMinMax, "max");
}

searchRnfArea(storeRnf);
