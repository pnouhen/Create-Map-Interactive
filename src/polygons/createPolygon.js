export function createPolygon(coords, color, map, currentPolygon) {
  const latLng = coords.map(coord => [coord[1], coord[0]]);
  const polygon = L.polygon(latLng, { color }).addTo(map);
  currentPolygon.push(polygon);
}