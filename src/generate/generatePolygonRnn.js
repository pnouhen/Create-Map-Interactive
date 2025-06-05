import { generatePolygons } from "./generatePolygon";


export function generatePolygonRnn(data, marker, map) {
  //  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Create the tableau in the object
  const coords = markerSelect.geometry;

generatePolygons(coords, map)
}