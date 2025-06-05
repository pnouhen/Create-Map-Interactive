import { linkRnnRegion } from "../elements/linkRnnRegion";
import { generateClusters } from "../generate/generateClusters";
import { storeRnF } from "../data/storeRnF";
import {
  latDefault,
  lngDefault,
  zoomDefault,
} from "../elements/mapSetviewDefault";
import { generatePolygons } from "../generate/generatePolygon";


function filterRegion() {
  const selectedRegion = document.getElementById("selectedRegions");

  if (!selectedRegion) return null;

  selectedRegion.addEventListener("change", () => {
    const value = selectedRegion.value;
    let newSetview = [];

    if (value === "allRegion") {
      // Get coordinates for the filtered region
      newSetview = {
        lat: latDefault,
        lng: lngDefault,
        zoom: zoomDefault,
      };

      generateClusters(storeRnF, newSetview);
    } else {
      const rnnRegion = linkRnnRegion();
      const filteredRegion = rnnRegion.filter(
        (el) => el.region[0]?.reg_name_upper.replace(/\s+/g, "-") === value
      );

      if (filteredRegion.length > 0) {
        // Get coordinates for the filtered region
        newSetview = {
          lat: filteredRegion[0].region[0].geo_point_2d.lat,
          lng: filteredRegion[0].region[0].geo_point_2d.lon,
          zoom: 7,
        };

        generateClusters(filteredRegion, newSetview);

        const region = filteredRegion[0].region[0].geo_shape.geometry;
        generatePolygons(region)
      }
    }
  });
}

filterRegion();
