// Generate nature reserve with a grid
import { coordinateMarker } from "./coordinateMarker";
import { generateToolTip } from "./generateToolTip";
import { generatePolygonRnf } from "./generatePolygonRnf";
import { greenIcon } from "./createIcon";

export function generateMarker(data, map) {
  let markers = [];

  data.forEach((el) => {
    const latLng = coordinateMarker(el);
    const marker = L.marker(latLng, {icon: greenIcon});
    // Associate dataRnn.features =>  marker
    marker["id"] = el.id;

    // Generate ToolTip
    marker.on("click", (marker) => {
      generateToolTip(data, marker, map);
      generatePolygonRnf(data, marker, map, latLng);
    });

    // Push marker in markers
    markers.push(marker);
  });
  return markers;
}
