import L from "leaflet";
import * as turf from "@turf/turf";

import { calculPolygonDistance } from "./calculPolygonDistance";
import { centerPolygon } from "../polygons/centerPolygon";

export function generatePopupDistance(
  lastCenter,
  coordRnf,
  currentPoint,
  map,
  currentPolyline
) {
  const polygon = calculPolygonDistance(lastCenter, coordRnf, currentPoint);
  centerPolygon(polygon, map);

  const popup = L.popup();

  const geoJsonLine = currentPolyline.toGeoJSON();
  const lineLength = turf.length(geoJsonLine, { units: "kilometers" });

  const formattedDistance = lineLength.toLocaleString("fr-FR", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  popup.setLatLng([lastCenter[1], lastCenter[0]]).setContent(
    `<div class="toolType-content py-2.5">
    <p class="toolType-sbTitle">Distance : </p>
    <p>${formattedDistance} km</p>
    `
  );

  return popup;
}
