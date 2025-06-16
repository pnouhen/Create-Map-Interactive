import { centerMarkers } from "../markers/centerMarkers";
import { coordinateMarker } from "../markers/coordinateMarker";
import { generateClusters } from "../markers/generateClusters";
import { getMapInstance } from "../maps/getMapInstance";
import { storeRnF } from "../datas/storeRnF";
import { searchRnfAutoComplete } from "./generateListRnf";

export function generateMarkerInput(value) {
  const map = getMapInstance();
  const markerSelect = storeRnF.filter((rnf) => rnf.properties.nom === value);
  
  if (markerSelect.length > 0) {
    generateClusters(markerSelect);

    const latLng = coordinateMarker(markerSelect[0]);
    centerMarkers(markerSelect[0], map, latLng);

    searchRnfAutoComplete.innerHTML = "";
  }
}
