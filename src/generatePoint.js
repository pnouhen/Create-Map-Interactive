// Generate nature reserve with a grid
import { generateMap } from "./generateMap";
import { generateToolTip } from "./generateToolTip";

export function generatePoints(dataRnn) {
  const map = generateMap(L);

  for (let i = 0; i < dataRnn.features.length; i++) {
    const marker = L.marker([
      dataRnn.features[i].bbox[1],
      dataRnn.features[i].bbox[0],
    ]).addTo(map);
    // Associate dataRnn.features =>  marker
    marker["id"] = dataRnn.features[i].id;

    // Generate ToolTip
    marker.on("click", (marker) => generateToolTip(L, marker, dataRnn, map));
  }
}
