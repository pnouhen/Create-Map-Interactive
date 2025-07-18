import { storeRnf } from "../datas/storeRnf";
import { getMapInstance } from "../maps/getMapInstance";
import { clearPolygons } from "../polygons/clearPloygons";
import { colorRegion } from "../polygons/colorPolygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { centerAll } from "../regDep/centerAll";
import { centerPolygon } from "../regDep/centerPolygon";
import { searchRegion } from "../regDep/searchRegion";
import { currentPolygonDep } from "./generateDepartments";
import { getAll } from "./getAll";
import { getTerritoire } from "./getTerritoires";

let currentPolygonReg = [];

export let regionValue = "";

export let markersRegion = [];

export function generateRegion(text, data) {
  const map = getMapInstance();
  regionValue = text.id;

  if (regionValue === "allRegions") {
    regionValue = "";
    clearPolygons(currentPolygonReg);

    getAll();
    centerAll();
  } else {
    clearPolygons(currentPolygonDep);

    const regionSelect = searchRegion(data, regionValue);

    if (regionSelect[0].manuel === undefined) {
      const polygon = regionSelect[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonReg, colorRegion);
    }
    const zoom = regionSelect[0];
    centerPolygon(zoom, map);

    markersRegion = storeRnf.filter((rnf) => rnf.reg_code[0] === regionValue);
    getTerritoire(markersRegion, zoom, map);
  }
}
