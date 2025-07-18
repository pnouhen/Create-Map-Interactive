import { getMapInstance } from "../maps/getMapInstance";
import { centerAll } from "../regDep/centerAll";
import { centerPolygon } from "../regDep/centerPolygon";
import { searchRegion } from "../regDep/searchRegion";
import { regionValue } from "./generateRegion";
import { getAll } from "./getAll";
import { getTerritoire } from "./getTerritoires";

export let currentPolygonDep = [];

export function generateDepartments(button,) {
  button.addEventListener("click", () => {
    const map = getMapInstance();
    const value = selectedDepartments.value;
    if (value === "allDepartments") {
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