import { generateGapMinMax } from "./generateGapMinMax";

export function calculZoom(data, map) {
  const geometry = data.geometry;
  const coordinates = generateGapMinMax(geometry);

  const northEast = coordinates._northEast;
  const southWest = coordinates._southWest;

  const bounds = L.latLngBounds([northEast, southWest]);
  let optimalZoom = map.getBoundsZoom(bounds);

  if (window.innerWidth < 768) optimalZoom = optimalZoom - 1;

  return optimalZoom;
}
