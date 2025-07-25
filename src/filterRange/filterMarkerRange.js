import * as turf from "@turf/turf";

import { filterPoint } from "./filterPoint";
import { filterPolygon } from "./filterPolygon";
import { generateClusters } from "../markers/generateClusters";

export function filterMarkerRange(circle, storeRnf) {
  const lat = circle._latlng.lat;
  const lng = circle._latlng.lng;
  const radius = circle._mRadius;

  // Turf radius is in kilometers
  const circleTurf = turf.circle([lng, lat], radius / 1000, {
    steps: 64,
    units: "kilometers",
  });

  const markers = storeRnf
    .filter((rnf) => filterPoint(rnf, lat, lng, radius))
    .filter((rnf) => filterPolygon(rnf, circleTurf));

  generateClusters(markers);
}
