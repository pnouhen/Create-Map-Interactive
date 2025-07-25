import { getAll } from "../filterTerritoires/getAll";
import { searchDepartment } from "./searchDepartment";
import { generatePolygons } from "../polygons/generatePolygon";
import { centerPolygon } from "../polygons/centerPolygon";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { colorDep } from "../polygons/colorPolygons";
import { storeRnf } from "../datas/storeRnf";
import { storeRegion } from "../datas/storeRegion";
import { getRegion } from "../filterRegions/getRegion";
import { generateMap } from "../maps/generateMap";

export let currentPolygonDep = [];

export function generateDepartments(text, data) {
  const map = generateMap()
  const depValue = text.id;

  if (depValue === "undefined") {
    console.log(map)
    getAll(map);
  } else if (depValue === "allDepOfRegion" && storeRegion.length > 0) {
    getRegion()
  } else {
    const depSelect = searchDepartment(data, depValue);

    if (depSelect[0].manuel === undefined) {
      const polygon = depSelect[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonDep, colorDep, map);
    }

    const zoom = depSelect[0];
    centerPolygon(zoom, map);

    const markersDep = storeRnf.filter((rnf) => rnf.dep_code[0] === depValue);
    getTerritoire(markersDep, zoom);
  }
}
