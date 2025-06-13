import { generateGapMinMax } from "./generateGapMinMax";

export function calculZoom(data, map) {
  const coordinates = generateGapMinMax(data);

  const northEast = coordinates._northEast;
  const southWest = coordinates._southWest;

  const bounds = L.latLngBounds([northEast, southWest]);
  const optimalZoom = map.getBoundsZoom(bounds);

  return optimalZoom;
}
