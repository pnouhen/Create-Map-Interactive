// Generate nature reserve with a grid
import { generateToolTip } from "./generateToolTip";

export function generatePoints(store, map) {

  store.forEach((element) => {
    const lat = element.bbox[1];
    const lng = element.bbox[0];
    const marker = L.marker([lat, lng]);

    // Associate dataRnn.features =>  marker
    marker["id"] = element.id;

    // Generate ToolTip
    marker.on("click", (marker) => generateToolTip(marker, dataRnn, map));
  });
}
