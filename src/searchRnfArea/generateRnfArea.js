import { storeRnF } from "../datas/storeRnF";

import * as turf from "@turf/turf";
import { area } from "@turf/turf";

export function generateRnfArea() {
  const rnfArea = storeRnF.map((rnf) => {
    const coordinates = rnf.geometry.coordinates;

    if (coordinates.length > 2) {
      // To create un array with all the surface
      const multiPolygon = coordinates.map((polygon) => {
        const poly = turf.polygon(polygon);
      });

      // To Additionne all the surface
      const areaRnf =
        multiPolygon.reduce(
          (accumulateur, currentValue) => accumulateur + currentValue
        ) / 1000000;

      return { ...rnf, surface: areaRnf.toFixed(2) };
    } else {
      const poly = turf.polygon(coordinates[0]);

      const areaRnf = area(poly) / 1000000;
      return { ...rnf, surface_km: areaRnf.toFixed(2) };
    }
  });

  return rnfArea;
}
