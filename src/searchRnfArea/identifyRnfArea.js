import { findRnfArea } from "./findRnfArea";
import { generateClusters } from "../markers/generateClusters";
import { searchRnfName } from "../filter/searchRnfName";
import { centerAll } from "../regDep/centerAll";
import { storeRnF } from "../datas/storeRnF";
import { centerPolygon } from "../regDep/centerPolygon";

export function identifyRnfArea(data, zoom, map, valueMinMax, value, condition) {
  if (condition === "min") {
    valueMinMax.min = value;
  }
  if (condition === "max") {
    valueMinMax.max = value;
  }

  const storeRnfArea = findRnfArea(data, valueMinMax);
  
  searchRnfName(storeRnfArea)

  generateClusters(storeRnfArea);

if(zoom === undefined) {
  centerAll()
}else {
   centerPolygon(zoom, map)
}
}
