import { valueOptionAllDep } from "../selectOptions/valueOptionAll";
import { centerPolygon } from "../regDep/centerPolygon";
import { clearPolygons } from "../polygons/clearPloygons";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";
import { markersRegion, regionValue } from "./filterRegionSelect";
import { searchRegion } from "../regDep/searchRegion";
import { generateDep } from "../departments/generateDep";
import { storeRnF } from "../datas/storeRnF";
import { generateClusters } from "../markers/generateClusters";
import { searchRnf } from "./searchRnf";

const selectedDepartments = document.getElementById("selectedDepartments");

export let currentPolygonDep = [];

export function filterDepSelect() {  
  selectedDepartments.addEventListener("change", () => {
    const map = getMapInstance();
    const value = selectedDepartments.value;

    if (value === valueOptionAllDep) {
      clearPolygons(currentPolygonDep);
      generateClusters(storeRnF)
      searchRnf(storeRnF)
      if(regionValue === ""){
        centerAll()
      } else{
        const regionSelect = searchRegion();
        centerPolygon(regionSelect[0], map)
        generateClusters(markersRegion)
      }

    } else {
      generateDep(value, currentPolygonDep, map)

      const markers = storeRnF.filter((rnf) => rnf.dep_code === value)
      generateClusters(markers)

      searchRnf(markers)
    }
  });
  
}

filterDepSelect();