import * as turf from "@turf/turf";
import { area } from "@turf/turf";

export function generateRnfArea(data) {
  return data.map((rnf) => {
    const coordinates = rnf.geometry.coordinates;
    
    if (coordinates.length > 1) { 
      let totalSurface = 0;

       // To create un array with all the surface
      coordinates.forEach((polygon) => {
        const poly = turf.polygon(polygon);
        const surface = area(poly);
         // To Additionne all the surface and convert m2 in km2
        totalSurface += surface /1000000;
      });
      
      rnf.surface = String(totalSurface.toFixed(2))
    } else {
      const poly = turf.polygon(coordinates[0]);
      // To convert m2 in km2
      const surface = area(poly) / 1000000;
      rnf.surface = String(surface.toFixed(2))
    }
  });
}