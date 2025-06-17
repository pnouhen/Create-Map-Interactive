import { findRnfArea } from "./findRnfArea";

let valueMinMax = { min: 0, max: 0 };

export function identifyRnfArea(value, condition) {
  if (condition === "min") {
    valueMinMax.min = value;
  }
  if (condition === "max") {
    valueMinMax.max = value;
  }
  
  findRnfArea(valueMinMax)
}
