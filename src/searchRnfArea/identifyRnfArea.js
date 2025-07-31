import { generateMap } from "../maps/generateMap";
import { findRnfArea } from "./findRnfArea";
import { generateClusters } from "../markers/generateClusters";

const map = generateMap();

export function identifyRnfArea(data, valueMinMax, value, condition) {
  if (condition === "min") {
    valueMinMax.min = value;
  }
  if (condition === "max") {
    valueMinMax.max = value;
  }

  const storeRnfArea = findRnfArea(data, valueMinMax);

  generateClusters(storeRnfArea);
}
