import { storeRnF } from "./storeRnF";;
import { coordinateMarker } from "./coordinateMarker";
import { regionMinMax } from "./regionMinMax";

export function linkRnnRegion() {
  let rnnRegion = [];

  // Store coordinate, id and bbox in rnnRegion for each marker
  storeRnF.map((el) => {
    const rnnData = {
      coordinate: coordinateMarker(el),
      id: el.id,
      bbox: el.bbox,
      properties: el.properties,
      geometry: el.geometry
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
