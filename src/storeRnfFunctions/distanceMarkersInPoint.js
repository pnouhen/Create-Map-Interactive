import { coordinateMarker } from "../markers/coordinateMarker";

import * as turf from "@turf/turf";

export function distanceMarkersInPoint(data, territoires) {
  const rnfCoords = coordinateMarker(data);
  return territoires
    .map((territoire) => {
      const territoireCoords = territoire.geo_point_2d;
      const from = turf.point([rnfCoords[1], rnfCoords[0]]);
      const to = turf.point([territoireCoords.lon, territoireCoords.lat]);
      const distance = turf.distance(from, to);

      let dep_code = ""
      let reg_code = ""

      if (territoire.dep_code) {
            dep_code = territoire.dep_code[0];
          } else {
            reg_code = territoire.reg_code[0];
          }

      return {
        distance: distance,
        dep_code: territoire.dep_code,
        reg_code: territoire.reg_code,
      };
    })
    .sort((a, b) => a.distance - b.distance);
}
