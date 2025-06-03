import { storeRegion } from "./storeRegion";
import { generateCoordMinMax } from "./generateCoordMinMax";

export function regionMinMax() {
  let regionMinMax = [];

  // Generate for lat et lng, the coordinate min and max
  storeRegion.results.map((region) => {
    const coords = region.geo_shape.geometry.coordinates;

    const lats = generateCoordMinMax(coords, 1);
    const lng = generateCoordMinMax(coords, 0);

    let latMinMax = [Math.min(...lats), Math.max(...lats)];
    let lngMinMax = [Math.min(...lng), Math.max(...lng)];

    const regionData = {
      name: region.reg_name_upper.replace(/\s+/g, "-"),
      latMinMax: latMinMax,
      lngMinMax: lngMinMax,
    };
    
    regionMinMax.push(regionData);
  });

  return regionMinMax;
}
