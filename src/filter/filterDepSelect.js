import { valueOptionAllDep } from "../selectOptions/valueOptionAll";
import { centerPolygon } from "../regDep/centerPolygon";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";
import { searchRegion } from "../regDep/searchRegion";
import { generateDep } from "../departments/generateDep";
import { storeRnf } from "../datas/storeRnf";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { getAll } from "../filterTerritoires/getAll";
import { markersRegion, regionValue } from "../filterTerritoires/generateRegion";

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

        centerPolygon(zoom, map);
      }
    } else {
      const department = generateDep(value, currentPolygonDep);

      const zoom = department[0]
      centerPolygon(zoom, map)

      const markers = storeRnf.filter((rnf) => rnf.dep_code === value);
      getTerritoire(markers, zoom, map);

    }
  });
}

filterDepSelect();
