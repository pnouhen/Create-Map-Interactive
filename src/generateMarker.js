// Generate nature reserve with a grid
import { generateToolTip } from "./generateToolTip";
import { generatePolygon } from "./generatePolygon";

export function generateMarker(data, map) {
  let markers = [];

  data.features.forEach((el) => {
    // Center markers width four coordinates
    const lat = (el.bbox[1] + el.bbox[3]) / 2;
    const lng = (el.bbox[0] + el.bbox[2]) / 2;
    const marker = L.marker([lat, lng]);

    // Associate dataRnn.features =>  marker
    marker["id"] = el.id;

    // Generate ToolTip
    marker.on("click", (marker) => {
      generateToolTip(data, marker,map)
      generatePolygon(data, marker,map)
    });

    // Push marker in markers
    markers.push(marker);
  });
  return markers;
}
