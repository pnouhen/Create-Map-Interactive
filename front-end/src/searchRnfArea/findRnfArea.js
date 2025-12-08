export function findRnfArea(data, valueMinMax) {
  const rnfAreaMinMax = data
    .filter((rnf) => Number(rnf.surface) >= Number(valueMinMax.min))
    .filter((rnf) => Number(rnf.surface) <= Number(valueMinMax.max));

  return rnfAreaMinMax;
}
