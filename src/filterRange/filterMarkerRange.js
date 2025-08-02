import * as turf from "@turf/turf";

import { filterPoint } from "./filterPoint";
import { filterPolygon } from "./filterPolygon";
import { generateClusters } from "../markers/generateClusters";
import { searchRnfName } from "../filter/searchRnfName";

export function filterMarkerRange(circle, data) {
  const lat = circle._latlng.lat;
  const lng = circle._latlng.lng;
  const radius = circle._mRadius;

  const circleTurf = turf.circle([lng, lat], radius / 1000, {
    steps: 64,
    units: "kilometers",
  });

  // Filter point then filter polygon beacause the second filter takes too long
  const markers = data
    .filter((rnf) => filterPoint(rnf, lat, lng, radius))
    .filter((rnf) => filterPolygon(rnf, circleTurf));

  searchRnfName(markers);

  generateClusters(markers);
}
