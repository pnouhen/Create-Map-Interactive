import { generateMap } from "../generate/generateMap";

export function clearPolygons(currentPolygon) {
  const map = generateMap();

  currentPolygon.forEach(polygon => map.removeLayer(polygon));
  currentPolygon.splice(0);
}
