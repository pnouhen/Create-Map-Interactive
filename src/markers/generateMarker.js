// Generate nature reserve with a grid
import { coordinateMarker } from "./coordinateMarker";
import { generatePopup } from "./generatePopup";
import { generatePolygonRnf } from "./generatePolygonRnf";
import { greenIcon } from "./createIcon";
import { clearPolygons } from "../polygons/clearPloygons";

let currentPolygon = [];

export function generateMarker(data, map) {
  let markers = [];

  data.forEach((el) => {
    const latLng = coordinateMarker(el);
    const marker = L.marker(latLng, { icon: greenIcon });
    // Associate dataRnn.features =>  marker
    marker["id"] = el.id;

    // Generate ToolTip
    marker.on("click", (marker) => {
      generatePopup(data, marker, map);
      generatePolygonRnf(data, marker, currentPolygon, map, latLng);
    });

    map.on("popupclose", () => {
      clearPolygons(currentPolygon);
    });

    // Push marker in markers
    markers.push(marker);
  });
  return markers;
}
