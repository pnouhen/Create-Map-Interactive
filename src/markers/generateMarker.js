// Generate nature reserve with a grid
import { coordinateMarker } from "./coordinateMarker";
import { generatePopupMarker } from "./generatePopupMarker";
import { generatePolygonRnf } from "./generatePolygonRnf";
import { redIcon } from "./createIcon";
import { clearPolygons } from "../polygons/clearPloygons";


export function generateMarker(data, map) {
  let markers = [];

  data.forEach((el) => {
    const latLng = coordinateMarker(el);
    const marker = L.marker(latLng, { icon: redIcon });
    
    // Associate dataRnn.features =>  marker
    marker["id"] = el.id;

    // Generate ToolTip
    marker.on("click", (marker) => {
      generatePopupMarker(data, marker, map);
      generatePolygonRnf(data, marker, map, latLng);
    });

    // Push marker in markers
    markers.push(marker);
  });
  return markers;
}
