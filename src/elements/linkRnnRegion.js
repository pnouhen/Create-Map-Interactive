import { storeRnF } from "../data/storeRnF";
import { coordinateMarker } from "./coordinateMarker";
import { regionMinMax } from "./regionMinMax";

export function linkRnnRegion() {
  // Filter for put region's name for each marker
  function filterCoordinateRegion(el, region) {
    return region.name
      ? el.coordinate[0] >= region.latMinMax[0] &&
          el.coordinate[0] <= region.latMinMax[1] &&
          el.coordinate[1] >= region.lngMinMax[0] &&
          el.coordinate[1] <= region.lngMinMax[1]
      : null;
  }

  const regionMinMaxTableau = regionMinMax();

  // Store coordinate, id and bbox in rnnRegion for each marker
  const rnfRegion = storeRnF.map((el) => {
    const coordinate = coordinateMarker(el);

    return {
      coordinate: coordinate,
      id: el.id,
      bbox: el.bbox,
      properties: el.properties,
      geometry: el.geometry,
      region: regionMinMaxTableau.filter((region) =>
        // el + coordinate for avoid that the filterRegion recalculates coordinates.
        filterCoordinateRegion({ el, coordinate }, region)
      ),
    };
  });
  
  return rnfRegion;
}

