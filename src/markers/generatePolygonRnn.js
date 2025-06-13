import { generatePolygons } from "../polygons/generatePolygon";
import { centerPolygon } from "../zooms/centerPolygon";

let currentPolygons = [];

export function generatePolygonRnn(data, marker) {
  //  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Create the tableau in the object
  const coords = markerSelect.geometry;

  generatePolygons(coords, currentPolygons);

  console.log(markerSelect)

  centerPolygon(markerSelect)
}
