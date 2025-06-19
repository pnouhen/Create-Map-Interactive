export function findRnfAreaMinMax(data) {

  const rnfAreaMinMax = data.map((rnf) => rnf.surface);

  const min = Math.min(...rnfAreaMinMax);
  const max = Math.max(...rnfAreaMinMax);

  const valueMinMax = { min: min.toString(), max: max.toString() };

  return valueMinMax;
}
