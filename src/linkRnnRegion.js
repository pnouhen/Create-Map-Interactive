import { storeRnn } from "./storeRnn";
import { coordinateMarker } from "./coordinateMarker";
import { regionMinMax } from "./regionMinMax";

export function linkRnnRegion() {
  let rnnRegion = [];

  // Store coordinate, id and bbox in rnnRegion for each marker
  storeRnn.features.map((el) => {
    const rnnData = {
      coordinate: coordinateMarker(el),
      id: el.id,
      bbox: el.bbox,
    };

    rnnRegion.push(rnnData);
  });

  // Put region's name for each marker
  const regionMinMaxTableau = regionMinMax();

  rnnRegion.map((el) => {
    regionMinMaxTableau.forEach((region) => {
      if (
        el.coordinate[0] >= region.latMinMax[0] &&
        el.coordinate[0] <= region.latMinMax[1] &&
        el.coordinate[1] >= region.lngMinMax[0] &&
        el.coordinate[1] <= region.lngMinMax[1]
      ) {
        el.region = region.name;
      }
    });
  });

  return rnnRegion;
}
