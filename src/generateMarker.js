// Generate nature reserve with a grid
import { coordinateMarker } from "./coordinateMarker";
import { generateToolTip } from "./generateToolTip";
import { generatePolygonRnn } from "./generatePolygonRnn";

export function generateMarker(data, map) {
  let markers = [];

  data.forEach((el) => {
    const latLng = coordinateMarker(el);
    const marker = L.marker(latLng);

    // Associate dataRnn.features =>  marker
    marker["id"] = el.id;

    // Generate ToolTip
    marker.on("click", (marker) => {
      generateToolTip(data, marker, map);
      generatePolygonRnn(data, marker, map);
    });

    // Push marker in markers
    markers.push(marker);
  });
  return markers;
}
