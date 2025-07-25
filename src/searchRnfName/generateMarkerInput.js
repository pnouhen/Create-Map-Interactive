import { centerMarkers } from "../markers/centerMarkers";
import { coordinateMarker } from "../markers/coordinateMarker";
import { generateClusters } from "../markers/generateClusters";

export function generateMarkerInput(value, data, map, autoComplete) {
  const markerSelect = data.filter((rnf) => rnf.properties.nom === value);
  if (markerSelect.length > 0) {
    generateClusters(markerSelect);

    const latLng = coordinateMarker(markerSelect[0]);
    centerMarkers(markerSelect[0], map, latLng);

    autoComplete.innerHTML = "";
  }
}
