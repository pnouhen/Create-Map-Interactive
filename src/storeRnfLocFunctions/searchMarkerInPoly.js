import { coordinateMarker } from "../markers/coordinateMarker";
import { storeDepartments } from "../datas/storeDepartments";

import * as turf from "@turf/turf";

export function searchMarkerInPoly(data) {
  const latLng = coordinateMarker(data);
  const dep = storeDepartments[27].results[0].geo_shape.geometry;

  const pt = turf.point([latLng[1], latLng[0]]);

  let resultat = "";

  if (dep.type === "MultiPolygon" && dep.coordinates[0][0].length > 2) {
    let responses = [];

    let poly = { coordinates: [], type: "Polygon" };

    dep.coordinates.map((coords) => {
      poly.coordinates = coords;
      const response = turf.booleanPointInPolygon(pt, poly);
      responses.push(response);
    });

    responses.sort((a, b) => b - a);

    resultat = responses[0];
  } else {
    resultat = turf.booleanPointInPolygon(pt, dep);
  }
  return resultat;
}
