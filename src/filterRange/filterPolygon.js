import * as turf from "@turf/turf";

export function filterPolygon(rnf, circleTurf) {
  if (rnf.markerInCircle) return rnf;

  const coordinates = rnf.geometry.coordinates;

  // MultiPolygon
  if (coordinates.length > 1) {
    for (const poly of coordinates) {
      const polygon = turf.polygon([poly[0]]);
      if (turf.booleanIntersects(polygon, circleTurf)) {
        return rnf;
      }
    }
  } else {
    const polygon = turf.polygon([coordinates[0][0]]);
    if (turf.booleanIntersects(polygon, circleTurf)) {
      return rnf;
    }
  }

  return undefined;
}
