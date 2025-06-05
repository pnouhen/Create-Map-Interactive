import { storeRnF } from "../data/storeRnF";
import { storeRegion } from "../data/storeRegion";
import { coordinateMarker } from "./coordinateMarker";
import { associateMarkerRegion } from "./associateMarkerRegion";

export function linkRnnRegion() {
  // Store coordinate, id and bbox in rnnRegion for each marker
  const rnfRegion = storeRnF.map((el) => {
    const coordinate = coordinateMarker(el);
    const region = storeRegion.results.filter((region) =>
        associateMarkerRegion(region, coordinate)
      )

    return {
      coordinate: coordinate,
      id: el.id,
      bbox: el.bbox,
      properties: el.properties,
      geometry: el.geometry,
      region: region
    };
  });

  return rnfRegion;
}

