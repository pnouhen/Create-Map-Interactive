import { coordinateMarker } from "../markers/coordinateMarker";

import * as turf from "@turf/turf";

export function searchMarkerInPoly(data, geometry) {
  const latLng = coordinateMarker(data);

  const pt = turf.point([latLng[1], latLng[0]]);
  let resultat = "";
  
  
  if (geometry.type === "MultiPolygon" && geometry.coordinates[0][0].length > 2) {
    let responses = [];

    let poly = { coordinates: [], type: "Polygon" };
    
    geometry.coordinates.map((coords) => {
      poly.coordinates = coords;
      const response = turf.booleanPointInPolygon(pt, poly);
      responses.push(response);
    });

    responses.sort((a, b) => b - a);

    resultat = responses[0];
  } else {
    resultat = turf.booleanPointInPolygon(pt, geometry);
  }
  return resultat;
}
