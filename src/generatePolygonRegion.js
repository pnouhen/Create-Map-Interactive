import { storeRegion } from "./storeRegion";
import { generateMap } from "./generateMap";

import L from "leaflet";

export function generatePolygonRegion() {
  // Container all polygons
  const polygons = [];

  // Import map
  const map = generateMap();
  // For all regions
  storeRegion.results.forEach((region) => {
    // Container for generate polygon
    let latLngRegion = [];

    // In function of what it contains coordinates
    const coords = region.geo_shape.geometry.coordinates;
    if (coords.length > 1 && coords[0][0].length > 2) {
      for (let i = 0; i < coords.length; i++) {
        latLngRegion = coords[i][0].map((coord) => [coord[1], coord[0]]);
      }
    } else {
      latLngRegion = coords[0].map((coord) => [coord[1], coord[0]]);
    }

    // Generate the polygon
    const polygon = L.polygon(latLngRegion, {
      color: "brown",
    }).addTo(map);

    polygons.push(polygon);
  });

  return polygons;
}
