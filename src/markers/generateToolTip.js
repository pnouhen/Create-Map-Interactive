// Generate ToolTip in generatePoint.js
import L from "leaflet";

export function generateToolTip(data, marker, map) {
  // Search the id in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Create ToolTip
  const popup = L.popup();
  popup
    .setLatLng(marker.latlng)
    .setContent(
      `<p class="title">
        ${markerSelect.properties.nom.toString()}
      </p> 
      <div class="surface">
        <p class="title">Surface : </p>
        <p>${Number(markerSelect.surface).toLocaleString()} km²</p>
      </div>
        <a href="${markerSelect.properties.url.toString()}">Cliquez ici pour plus d'information</a>`
    )
    .addTo(map);
}
