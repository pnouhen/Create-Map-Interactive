import { valueOptionAllDep } from "../selectOptions/valueOptionAll";
import { centerPolygon } from "../regDep/centerPolygon";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";
import { markersRegion, regionValue } from "./filterRegionSelect";
import { searchRegion } from "../regDep/searchRegion";
import { generateDep } from "../departments/generateDep";
import { storeRnF } from "../datas/storeRnF";
import { generateClusters } from "../markers/generateClusters";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { getAll } from "../filterTerritoires/getAll";
import { searchRnfArea } from "./searchRnfArea";

const selectedDepartments = document.getElementById("selectedDepartments");

export let currentPolygonDep = [];

export function filterDepSelect() {
  selectedDepartments.addEventListener("change", () => {
    const map = getMapInstance();
    const value = selectedDepartments.value;

    if (value === valueOptionAllDep) {
      getAll();
      if (regionValue === "") {
        centerAll();
      } else {
        const regionSelect = searchRegion();

        const zoom = regionSelect[0];

        getTerritoire(markersRegion, zoom, map);
      }
    } else {
      const department = generateDep(value, currentPolygonDep, map);

      const zoom = department[0].results[0]
      centerPolygon(zoom, map)

      const markers = storeRnF.filter((rnf) => rnf.dep_code === value);
      getTerritoire(markers, zoom, map);

    }
  });
}

filterDepSelect();
