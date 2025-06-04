import { coordinateMarker } from "./coordinateMarker";

import * as turf from "@turf/turf";
import { booleanPointInPolygon } from "@turf/turf";

export function associateMarkerRegion(region, coordinate) {
  const [lat, lng] = coordinate;
  const pt = turf.point([lng, lat]);
  const { coordinates, type } = region.geo_shape.geometry;

  let result = false;

  if (type === 'MultiPolygon') {
    const multiPolygon = turf.multiPolygon(coordinates);
    result = turf.booleanPointInPolygon(pt, multiPolygon);
  } else if (type === 'Polygon') {
    const polygon = turf.polygon(coordinates);
    result = turf.booleanPointInPolygon(pt, polygon);
  }

  return result;
}
