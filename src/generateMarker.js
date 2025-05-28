// Generate nature reserve with a grid
import { generateToolTip } from "./generateToolTip";
import { generatePolygon } from "./generatePolygon";

import L, { polygon } from "leaflet";

export function generateMarker(store, map) {
  let markers = [];

  store.forEach((el) => {
    // Center markers width four coordinates
    const lat = (el.bbox[1] + el.bbox[3]) / 2;
    const lng = (el.bbox[0] + el.bbox[2]) / 2;
    const marker = L.marker([lat, lng]);

    // Associate dataRnn.features =>  marker
    marker["id"] = el.id;

    // Generate ToolTip
    marker.on("click", (marker) => {
      generateToolTip(marker, store, map)
      generatePolygon(marker, store, map)
    });

    // Push marker in markers
    markers.push(marker);
  });
  return markers;
}
