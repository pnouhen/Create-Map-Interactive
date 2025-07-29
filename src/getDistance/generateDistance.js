import L from "leaflet";

import { generateMap } from "../maps/generateMap";
import { coordinateMarker } from "../markers/coordinateMarker";
import {
  generatePopupMarker,
  markerSelect,
} from "../markers/generatePopupMarker";
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
    currentRnf = L.latLng(coordRnf[0], coordRnf[1]);

    currentPoint = e.latlng;
    const pointB = L.latLng(currentPoint.lat, currentPoint.lng);
    currentMarker = L.marker([currentPoint.lat, currentPoint.lng], {icon : blackIcon}).addTo(map);

    currentPolyline = L.polyline([currentRnf, pointB], {
      color: "black",
      dashArray: "15, 10",
      weight: 3,
      opacity: 0.8,
    }).addTo(map);
    map.fitBounds(currentPolyline.getBounds());

    currentPopup = generatePopupDistance(currentRnf, pointB);
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
    console.log(currentRnf);
  } else {
    map.off("click", onClick);
    if (currentPolyline || currentPoint) removeDistance();
    currentPopup.remove(map);
  }
}
