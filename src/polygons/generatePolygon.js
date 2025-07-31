import { clearPolygons } from "./clearPloygons";
import { createPolygon } from "./createPolygon";

export function generatePolygons(data, currentPolygon, color, map) {
  clearPolygons(currentPolygon, map);

  if (data.type === "MultiPolygon" && data.coordinates[0][0].length > 2) {
    data.coordinates.forEach((polygonCoords) => {
      createPolygon(polygonCoords[0], color, map, currentPolygon);
    });
  } else {
    createPolygon(data.coordinates[0], color, map, currentPolygon);
  }
}
