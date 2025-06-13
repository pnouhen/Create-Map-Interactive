import { generatePolygons } from "../polygons/generatePolygon";
import { centerPolygon } from "../regDep/centerPolygon";
import { centerMarkers } from "./centerMarkers";

let currentPolygons = [];

export function generatePolygonRnf(data, marker,map, latLng) {
  //  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Create the tableau in the object
  const coords = markerSelect.geometry;

  generatePolygons(coords, currentPolygons);

  centerMarkers(markerSelect, map, latLng)
}
