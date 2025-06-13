import { storeRegion } from "../datas/storeRegion";
import { clearPolygons } from "../polygons/clearPloygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { currentPolygonDep, filterDep } from "./filterDep";
import { centerPolygon } from "../zooms/centerPolygon";

const selectedRegion = document.getElementById("selectedRegions");

// Initial value region
let currentPolygonReg = [];

function filterRegion() {
  selectedRegion.addEventListener("change", () => {
    const value = selectedRegion.value;

    if (value === "allRegions") {
      clearPolygons(currentPolygonReg)

      clearPolygons(currentPolygonDep)

    } else {
      filterDep()

      clearPolygons(currentPolygonDep)

      const reg = storeRegion.results.filter((reg) => reg.reg_code[0] === value)
      
      const polygon = reg[0].geo_shape.geometry
      generatePolygons(polygon, currentPolygonReg)

      const zoom = reg[0]
      centerPolygon(zoom)
    }
  });
}

filterRegion();
