import L from "leaflet";
import { generateMap } from "./generateMap";

let currentPolygons = [];

export function generatePolygons(data) {
  const map = generateMap();

  // Delete the preview  polygon
  currentPolygons.forEach(polygon => map.removeLayer(polygon));
  currentPolygons = [];

  if (data.type === "MultiPolygon" && data.coordinates[0][0].length > 2) {
    for (let i = 0; i < data.coordinates.length; i++) {
      const latLng = data.coordinates[i][0].map(coord => [coord[1], coord[0]]);
      const polygon = L.polygon(latLng, { color: "red" }).addTo(map);
      currentPolygons.push(polygon);
    }
  } else {
    const latLng = data.coordinates[0].map(coord => [coord[1], coord[0]]);
    const polygon = L.polygon(latLng, { color: "red" }).addTo(map);
    currentPolygons.push(polygon);
  }
}
