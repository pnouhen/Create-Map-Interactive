// Generate ToolTip in generatePoint.js
import L from "leaflet";

export function generateToolTip(marker, store, map) {

  // Search the id in store
  const id = marker.target.id;
  const markerSelect = store.find((item) => item.id === id);

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
