import L from "leaflet";
import { clearPolygons } from "./clearPloygons";

export function generatePolygons(data, currentPolygon, color, map) {
  clearPolygons(currentPolygon, map); 

  if (data.type === "MultiPolygon" && data.coordinates[0][0].length > 2) {
    data.coordinates.forEach(polygonCoords => {
      const latLng = polygonCoords[0].map(coord => [coord[1], coord[0]]);
      const polygon = L.polygon(latLng, { color: color }).addTo(map);
      currentPolygon.push(polygon);
    });
  } else {
    const latLng = data.coordinates[0].map(coord => [coord[1], coord[0]]);
    const polygon = L.polygon(latLng, { color: color }).addTo(map);
    currentPolygon.push(polygon);
  }
}
