import { clearPolygons } from "../polygons/clearPloygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { currentPolygonDep } from "./filterDepSelect";
import { centerPolygon } from "../regDep/centerPolygon";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";
import { searchRegion } from "../regDep/searchRegion";

const selectedRegion = document.getElementById("selectedRegions");

// Initial value region
 let currentPolygonReg = [];
  export let regionValue = ""

function filterRegionSelect() {
  selectedRegion.addEventListener("change", () => {
    const map = getMapInstance();
     regionValue = selectedRegion.value;

    if (regionValue === "allRegions") {
      clearPolygons(currentPolygonReg);
      clearPolygons(currentPolygonDep);
      centerAll();
    } else {
      clearPolygons(currentPolygonDep);

      const regionSelect = searchRegion()

      if (regionSelect[0].manuel === undefined) {
        const polygon = regionSelect[0].geo_shape.geometry;
        generatePolygons(polygon, currentPolygonReg);
      }
      const zoom = regionSelect[0];
      centerPolygon(zoom, map);
    }
  });
}

filterRegionSelect();
