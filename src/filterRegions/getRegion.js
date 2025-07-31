import { currentPolygonDep } from "../filterDepartments/generateDepartments";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { centerPolygon } from "../polygons/centerPolygon";
import { clearPolygons } from "../polygons/clearPloygons";
import { markersRegion, regionSelect } from "./generateRegion";

export function getRegion(map) {
  clearPolygons(currentPolygonDep, map);

  const zoom = regionSelect[0];
  centerPolygon(zoom, map);

  getTerritoire(markersRegion);
}
