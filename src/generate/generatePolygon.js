import L from "leaflet";
import { generateMap } from "./generateMap";
import { clearPolygons } from "../elements/clearPloygons";

export function generatePolygons(data, currentPolygons) {
  const map = generateMap();

  clearPolygons(currentPolygons); 

  if (data.type === "MultiPolygon" && data.coordinates[0][0].length > 2) {
    data.coordinates.forEach(polygonCoords => {
      const latLng = polygonCoords[0].map(coord => [coord[1], coord[0]]);
      const polygon = L.polygon(latLng, { color: "red" }).addTo(map);
      currentPolygons.push(polygon);
    });
  } else {
    const latLng = data.coordinates[0].map(coord => [coord[1], coord[0]]);
    const polygon = L.polygon(latLng, { color: "red" }).addTo(map);
    currentPolygons.push(polygon);
  }
}
