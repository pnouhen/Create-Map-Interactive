import L from "leaflet";

import { storeRnf } from "../datas/storeRnf";
import { generateMap } from "../maps/generateMap";
import { filterMarkerRange } from "./filterMarkerRange";
import { generateClusters } from "../markers/generateClusters";

let circle = null;

export function getCoordClick(input, isActive) {
  const map = generateMap();

  function onMapClick(e) {
    if (circle) {
      map.removeLayer(circle);
    }

    circle = L.circle([e.latlng.lat, e.latlng.lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: input.value * 1000,
    }).addTo(map);

    filterMarkerRange(circle, storeRnf);

    input.addEventListener("input", () => {
      circle.setRadius(input.value * 1000);
      filterMarkerRange(circle, storeRnf);
    });
  }
  if (isActive) {
    map.on("click", onMapClick);
  } else {
    map.off("click", onMapClick);

    if (circle) {
      map.removeLayer(circle);
      generateClusters(storeRnf)
    }
  }
}
