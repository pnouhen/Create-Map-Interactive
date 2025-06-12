import { generateMap } from "../../generate/generateMap";
import { generateGapMinMax } from "./generateGapMinMax";

export function zoomPolygon(data) {
const map = generateMap()

  const latMinMax = generateGapMinMax(data, 1);
  const lngMinMax = generateGapMinMax(data, 0);

  const bounds = L.latLngBounds([
    [latMinMax[1], lngMinMax[1]],
    [latMinMax[0], lngMinMax[0]],
  ]);

  const optimalZoom = map.getBoundsZoom(bounds);
  console.log(optimalZoom);
  return optimalZoom;
}
