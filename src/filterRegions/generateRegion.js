import { storeRnf } from "../datas/storeRnf";
import { clearPolygons } from "../polygons/clearPloygons";
import { colorRegion } from "../polygons/colorPolygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { searchRegion } from "../filterRegions/searchRegion";
import { currentPolygonDep } from "../filterDepartments/generateDepartments";
import { getAll } from "../filterTerritoires/getAll";
import { getRegion } from "./getRegion";
import { generateMap } from "../maps/generateMap";

export let regionValue = "";

export let regionSelect = [];

let currentPolygonReg = [];

export let markersRegion = [];

export function generateRegion(text, data) {
  const map = generateMap();

  regionValue = text.id;
  if (regionValue === "undefined") {
    getAll(map, currentPolygonReg);
  } else {
    clearPolygons(currentPolygonDep, map);

    regionSelect = searchRegion(data, regionValue);

    if (regionSelect[0].manuel === undefined) {
      const polygon = regionSelect[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonReg, colorRegion, map);
    }
    markersRegion = storeRnf.filter((rnf) => rnf.reg_code[0] === regionValue);
    getRegion(map);
  }
}
