import { clearPolygons } from "../polygons/clearPloygons";
import { colorRnf } from "../polygons/colorPolygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { centerMarkers } from "./centerMarkers";

let currentPolygon = [];

export function generatePolygonRnf(data, marker, map, latLng) {
  //  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Create the tableau in the object
  const coords = markerSelect.geometry;

  generatePolygons(coords, currentPolygon, colorRnf, map);

  centerMarkers(markerSelect, map, latLng);

  map.on("popupclose", () => {
    clearPolygons(currentPolygon, map);
  });
}
