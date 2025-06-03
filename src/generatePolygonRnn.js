import L from "leaflet";

// Initial value
let currentPolygon = null;

export function generatePolygonRnn(data, marker, map) {
  // Delete the preview  polygon
  if (currentPolygon) {
    map.removeLayer(currentPolygon);
    currentPolygon = null;
  }

  //  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Create the tableau in the object
  const latLng = markerSelect.geometry.coordinates[0][0].map((coord) => [
    coord[1],
    coord[0],
  ]);

  currentPolygon = L.polygon(latLng, {
    color: "red",
  }).addTo(map);

  map.fitBounds(currentPolygon.getBounds(), {
    maxZoom: 15,
  });
}

