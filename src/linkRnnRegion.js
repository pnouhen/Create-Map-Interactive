import { storeRnn } from "./storeRnn";
import { coordinateMarker } from "./coordinateMarker";
import { regionMinMax } from "./regionMinMax";


export function linkRnnRegion(){
  let rnnRegion = [];

storeRnn.features.map((el) => {
  const rnnData = {
    coordinate: coordinateMarker(el),
    id: el.id,
    bbox: el.bbox
  };

  rnnRegion.push(rnnData);
});

const regionMinMaxTableau = regionMinMax();

console.log(regionMinMaxTableau)

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

return rnnRegion
}

const rnnRegion = linkRnnRegion()

// console.log(rnnRegion[18]);
