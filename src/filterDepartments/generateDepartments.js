import { getMapInstance } from "../maps/getMapInstance";
import { getAll } from "../filterTerritoires/getAll";
import { searchDepartment } from "./searchDepartment";
import { clearPolygons } from "../polygons/clearPloygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { centerPolygon } from "../polygons/centerPolygon";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { colorDep } from "../polygons/colorPolygons";
import { storeRnf } from "../datas/storeRnf";
import { storeRegion } from "../datas/storeRegion";
import { getRegion } from "../filterRegions/getRegion";

export let currentPolygonDep = [];

export function generateDepartments(text, data) {
  const depValue = text.id;

  if (depValue === "undefined") {
    getAll();
  } else if (depValue === "allDepOfRegion" && storeRegion.length > 0) {
    getRegion()
  } else {
    const depSelect = searchDepartment(data, depValue);

    if (depSelect[0].manuel === undefined) {
      const polygon = depSelect[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonDep, colorDep);
    }

  const map = getMapInstance();
    const zoom = depSelect[0];
    centerPolygon(zoom, map);

    const markersDep = storeRnf.filter((rnf) => rnf.dep_code[0] === depValue);
    getTerritoire(markersDep, zoom, map);
  }
}
