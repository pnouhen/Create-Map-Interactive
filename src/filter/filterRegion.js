import { linkRnnRegion } from "../elements/linkRnnRegion";
import { generateClusters } from "../generate/generateClusters";
import { storeRnF } from "../data/storeRnF";
import {
  latDefault,
  lngDefault,
  zoomDefault,
} from "../elements/mapSetviewDefault";
import { generatePolygons } from "../generate/generatePolygon";
import { clearPolygons } from "../elements/clearPloygons";

  // Initial value region
let currentPolygon = [];

function filterRegion() {
  const selectedRegion = document.getElementById("selectedRegions");

  if (!selectedRegion) return null;

selectedRegion.addEventListener("change", () => {
  const value = selectedRegion.value;
  let newSetview = [];
  if (value === "allRegions") {
    newSetview = {
      lat: latDefault,
      lng: lngDefault,
      zoom: zoomDefault,
    };
    generateClusters(storeRnF, newSetview);

    clearPolygons(currentPolygon)

  } else {
    const rnnRegion = linkRnnRegion();
    const filteredRegion = rnnRegion.filter(
      (el) => el.region[0]?.reg_code[0] === value
    );

    if (filteredRegion.length > 0) {
      newSetview = {
        lat: filteredRegion[0].region[0].geo_point_2d.lat,
        lng: filteredRegion[0].region[0].geo_point_2d.lon,
        zoom: 7,
      };

      generateClusters(filteredRegion, newSetview);

      const region = filteredRegion[0].region[0].geo_shape.geometry;

      generatePolygons(region, currentPolygon);
    }
  }
});

}

filterRegion();
