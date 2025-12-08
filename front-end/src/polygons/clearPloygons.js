export function clearPolygons(currentPolygon, map) {
  currentPolygon.forEach((polygon) => map.removeLayer(polygon));
  currentPolygon.splice(0);
}
