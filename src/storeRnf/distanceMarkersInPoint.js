import { coordinateMarker } from "../markers/coordinateMarker";

import * as turf from "@turf/turf";

export function distanceMarkersInPoint(data, storeTerritoire) {
  const rnfCoords = coordinateMarker(data);

  return storeTerritoire
    .map((territoire) => {
      const rnf = turf.point([rnfCoords[1], rnfCoords[0]]);
      const territoireCoords = turf.point([
        territoire.geo_point_2d.lon,
        territoire.geo_point_2d.lat,
      ]);
      const distance = turf.distance(rnf, territoireCoords);

      let dep_code = "";
      let reg_code = "";

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
