import { currentPolygonDep } from "../filterDepartments/generateDepartments";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { getMapInstance } from "../maps/getMapInstance";
import { centerPolygon } from "../polygons/centerPolygon";
import { clearPolygons } from "../polygons/clearPloygons";
import { markersRegion, regionSelect } from "./generateRegion";

export function getRegion() {
  const map = getMapInstance();
  clearPolygons(currentPolygonDep);

  const zoom = regionSelect[0];
  centerPolygon(zoom, map);
  getTerritoire(markersRegion, zoom, map);
}
