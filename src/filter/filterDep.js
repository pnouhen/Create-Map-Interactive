import { generatePolygons } from "../polygons/generatePolygon";
import { valueOptionAllDep } from "../selectOptions/valueOptionAll";
import { storeDepartments } from "../datas/storeDepartments";
import { centerPolygon } from "../zooms/centerPolygon";
import { clearPolygons } from "../polygons/clearPloygons";

const selectedDepartments = document.getElementById("selectedDepartments");

  // Initial value region
export let currentPolygonDep = [];

export function filterDep() {
  selectedDepartments.addEventListener("change", () => {
    const value = selectedDepartments.value;

    if (value === valueOptionAllDep) {
      clearPolygons(currentPolygonDep); 
      
    } else {
      const dep = storeDepartments.filter(
        (dep) => dep.results[0].dep_code[0] === value
      );
      
      const polygon = dep[0].results[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonDep);

      const zoom = dep[0].results[0]
      centerPolygon(zoom)

    }
  });
}

filterDep();
