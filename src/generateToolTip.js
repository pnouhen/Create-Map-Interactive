// Generate ToolTip in generatePoint.js
import L from "leaflet";

export function generateToolTip(data, marker, map) {

  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.features.find((item) => item.id === id);

  // Create ToolTip
  const popup = L.popup();
  popup
    .setLatLng(marker.latlng)
    .setContent(
      markerSelect.properties.nom.toString() +
        "<br/>" +
        markerSelect.properties.url.toString()
    )
    .addTo(map);
}
