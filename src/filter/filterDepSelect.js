import { generatePolygons } from "../polygons/generatePolygon";
import { valueOptionAllDep } from "../selectOptions/valueOptionAll";
import { storeDepartments } from "../datas/storeDepartments";
import { centerPolygon } from "../regDep/centerPolygon";
import { clearPolygons } from "../polygons/clearPloygons";
import { currentPolygonReg } from "./filterRegionSelect";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";

const selectedDepartments = document.getElementById("selectedDepartments");
export let currentPolygonDep = [];

export function filterDepSelect() {  
  selectedDepartments.addEventListener("change", () => {
    const map = getMapInstance();

    const value = selectedDepartments.value;

    if (value === valueOptionAllDep) {
      clearPolygons(currentPolygonDep);
      
      if(currentPolygonReg.length === 0){
        centerAll()
      } else{
        centerPolygon(currentPolygonReg)
      }
    } else {
      const dep = storeDepartments.filter(
        (dep) => dep.results[0].dep_code[0] === value
      );
      if (dep[0].results[0].manuel === undefined) {
      const polygon = dep[0].results[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonDep);
      }
      const zoom = dep[0].results[0]
      centerPolygon(zoom, map)
    }
  });
  
}

filterDepSelect();