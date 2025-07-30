import L from "leaflet";
import * as turf from "@turf/turf";

import { generateMap } from "../maps/generateMap";
import { coordinateMarker } from "../markers/coordinateMarker";
import { markerSelect } from "../markers/generatePopupMarker";
import { generatePopupDistance } from "./generatePopupDistance";
import { blackIcon } from "../markers/createIcon";

const map = generateMap();

let currentPolyline = null;
let currentRnf = null;
let currentActive = null;
let currentPoint = null;
let currentMarker = null;
let currentPopup = null;

const onClick = (e) => {
  removeDistance();

  if (markerSelect) {
    const coordRnf = coordinateMarker(markerSelect);
    currentPoint = e.latlng;

    currentRnf = turf.point([coordRnf[1], coordRnf[0]]);
    const pointB = turf.point([currentPoint.lng, currentPoint.lat]);

    currentMarker = L.marker([currentPoint.lat, currentPoint.lng], {
      icon: blackIcon,
    }).addTo(map);

    const greatCircleLine = turf.greatCircle(currentRnf, pointB, {
      steps: 100,
    });

    currentPolyline = L.geoJSON(greatCircleLine, {
      style: {
        color: "black",
        dashArray: "15, 10",
        weight: 3,
        opacity: 0.8,
      },
    }).addTo(map);

    const latLng = { bbox: [...coordRnf, currentPoint.lat, currentPoint.lng] };
    const coordPoly = coordinateMarker(latLng);

    currentPopup = generatePopupDistance(
      coordPoly,
      coordRnf,
      currentPoint,
      map,
      currentPolyline
    );
    currentPopup.addTo(map);
  }
};

const removeDistance = () => {
  if (currentPolyline || currentPoint || !currentActive) {
    currentPolyline.remove();
    currentMarker.remove();
  }
};

export function generateDistance(isActive) {
  currentActive = isActive;
  if (currentActive) {
    map.on("click", onClick);
  } else {
    map.off("click", onClick);
    if (currentPolyline || currentPoint) removeDistance();
    if(currentPopup) currentPopup.remove(map);
  }
}
