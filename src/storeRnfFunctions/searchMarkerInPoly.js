import { coordinateMarker } from "../markers/coordinateMarker";

import * as turf from "@turf/turf";

export function searchMarkerInPoly(data, geometry) {
  const latLng = coordinateMarker(data);

  const rnf = turf.point([latLng[1], latLng[0]]);
  let resultat = false;

  // Turf function is for a polygon. For a multi-polygon, we have to check each polygon
  if (
    geometry.type === "MultiPolygon" &&
    geometry.coordinates[0][0].length > 2
  ) {
    let responses = [];

    let poly = { coordinates: [], type: "Polygon" };

    geometry.coordinates.map((coords) => {
      poly.coordinates = coords;
      const response = turf.booleanPointInPolygon(rnf, poly);
      responses.push(response);
    });

    resultat = responses.includes(true);
  } else {
    resultat = turf.booleanPointInPolygon(rnf, geometry);
  }

  return resultat;
}
