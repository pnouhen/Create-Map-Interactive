import { linkRnnRegion } from "../elements/linkRnnRegion";
import { generateClusters } from "../generate/generateClusters";
import { storeRnF } from "../data/storeRnF";


function filterRegion() {
  const selectedRegion = document.getElementById("selectedRegions");

  if (!selectedRegion) return null;

  const rnnRegion = linkRnnRegion();

  selectedRegion.addEventListener("change", () => {
    const value = selectedRegion.value;

    if (value === "allRegion") {
      const latFr = 46.387255
      const lngFr = 3.044397
      const zoom = 6
      generateClusters(storeRnF, latFr,lngFr, zoom);
      
    } else {
      const filteredRegion = rnnRegion.filter(
        (el) => el.region[0]?.reg_name_upper.replace(/\s+/g, "-") === value
      );

      if (filteredRegion.length > 0) {
        // Get coordinates for the filtered region
        const latRegion = filteredRegion[0].region[0].geo_point_2d.lat;
        const lngRegion = filteredRegion[0].region[0].geo_point_2d.lon;
        const zoom = 7
        generateClusters(filteredRegion, latRegion, lngRegion, zoom);
      }
    }
  });
}

filterRegion();
