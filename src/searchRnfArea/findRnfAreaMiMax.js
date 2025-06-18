import { generateRnfArea } from "./generateRnfArea";

export function findRnfAreaMinMax() {
  const rnfArea = generateRnfArea();

  const rnfAreaMinMax = rnfArea.map((rnf) => rnf.surface);

  const min = Math.min(...rnfAreaMinMax);
  const max = Math.max(...rnfAreaMinMax);

  const valueMinMax = { min: min, max: max };

  return valueMinMax;
}
