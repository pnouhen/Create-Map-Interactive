// Generate ToolTip in generatePoint.js

export function generateToolTip(L, marker, dataRnn, map) {
  // Search the id in dataRnn.features
  const id = marker.target.id;
  const markerSelect = dataRnn.features.find((item) => item.id === id);

  // Create ToolTip
  var popup = L.popup();
  popup
    .setLatLng(marker.latlng)
    .setContent(
      markerSelect.properties.nom.toString() +
        "<br/>" +
        markerSelect.properties.url.toString()
    )
    .openOn(map);
}
