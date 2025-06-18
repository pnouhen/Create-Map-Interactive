import { findRnfArea } from "./findRnfArea";
import {generateClusters} from "../markers/generateClusters"
import { valueMinMax } from "../filter/searchRnfArea";


export function identifyRnfArea(value, condition) {
  if (condition === "min") {
    valueMinMax.min = value;
  }
  if (condition === "max") {
    valueMinMax.max = value;
  }
  
  const storeRnfArea = findRnfArea(valueMinMax)

  generateClusters(storeRnfArea)
}
