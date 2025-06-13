import { storeRegion } from "../datas/storeRegion";
import { clearPolygons } from "../polygons/clearPloygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { currentPolygonDep } from "./filterDepSelect";
import { centerPolygon } from "../regDep/centerPolygon";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";

const selectedRegion = document.getElementById("selectedRegions");

// Initial value region
export let currentPolygonReg = [];

function filterRegionSelect() {
  selectedRegion.addEventListener("change", () => {
    const map = getMapInstance();
    const value = selectedRegion.value;

    if (value === "allRegions") {
      clearPolygons(currentPolygonReg);
      clearPolygons(currentPolygonDep);
      centerAll()
    } else {
      clearPolygons(currentPolygonDep);
      
      const reg = storeRegion.results.filter(
        (reg) => reg.reg_code[0] === value
      );
      
      const polygon = reg[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonReg);
      
      const zoom = reg[0];
      centerPolygon(zoom, map);
    }
  });
}

filterRegionSelect();
