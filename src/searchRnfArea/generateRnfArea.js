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
        return area(poly) / 1000000;
      });

      // To Additionne all the surface
      const areaRnf =
        multiPolygon.reduce(
          (accumulateur, currentValue) => accumulateur + currentValue
        )
      return { ...rnf, surface: areaRnf };
    } else {
      const poly = turf.polygon(coordinates[0]);

      const areaRnf = area(poly) / 1000000;
      return { ...rnf, surface: areaRnf};
    }
  });

  return rnfArea;
}
