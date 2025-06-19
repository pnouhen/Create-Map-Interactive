import { findRnfArea } from "./findRnfArea";
import { generateClusters } from "../markers/generateClusters";
import { searchRnfName } from "../filter/searchRnfName";

export function identifyRnfArea(input, data,valueMinMax, value, condition) {
  if (condition === "min") {
    valueMinMax.min = value;
  }
  if (condition === "max") {
    valueMinMax.max = value;
  }

  const storeRnfArea = findRnfArea(data, valueMinMax);
  
  searchRnfName(storeRnfArea)

  generateClusters(storeRnfArea);

  
}
