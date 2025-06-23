import { storeDepartments } from "../datas/storeDepartments";
import { coordinateMarker } from "../markers/coordinateMarker";

import * as turf from "@turf/turf";

export function distanceMarkersInPoint(data) {
  const rnfCoords = coordinateMarker(data);
  let distanceMarkersDep = storeDepartments
    .map((dep) => {
      const depCoords = dep.geo_point_2d;
      const from = turf.point([rnfCoords[1], rnfCoords[0]]);
      const to = turf.point([depCoords.lon, depCoords.lat]);
      const distance = turf.distance(from, to);

      return {
        distance: distance,
        code_dep: dep.dep_code,
        code_reg: dep.reg_code,
      };
    })
    .sort((a, b) => a.distance - b.distance);

  return distanceMarkersDep;
}
