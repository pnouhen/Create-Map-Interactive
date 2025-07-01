import { findRnfArea } from "./findRnfArea";
import { generateClusters } from "../markers/generateClusters";
import { centerAll } from "../regDep/centerAll";

export function identifyRnfArea(data, zoom, valueMinMax, value, condition) {
  if (condition === "min") {
    valueMinMax.min = value;
  }
  if (condition === "max") {
    valueMinMax.max = value;
  }

  const storeRnfArea = findRnfArea(data, valueMinMax);
  
  generateClusters(storeRnfArea);

if(zoom === undefined) {
  centerAll()
}
}
