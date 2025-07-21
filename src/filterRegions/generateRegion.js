import { storeRnf } from "../datas/storeRnf";
import { clearPolygons } from "../polygons/clearPloygons";
import { colorRegion } from "../polygons/colorPolygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { searchRegion } from "../filterRegions/searchRegion";
import { currentPolygonDep } from "../filterDepartments/generateDepartments";
import { getAll } from "../filterTerritoires/getAll";
import { getRegion } from "./getRegion";

export let regionValue = "";

export let regionSelect = []

let currentPolygonReg = [];

export let markersRegion = [];

export function generateRegion(text, data) {
  regionValue = text.id;
  if (regionValue === "undefined") {
    getAll(currentPolygonReg);
  } else {
    clearPolygons(currentPolygonDep);

     regionSelect = searchRegion(data, regionValue);

    if (regionSelect[0].manuel === undefined) {
      const polygon = regionSelect[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonReg, colorRegion);
    }
    markersRegion = storeRnf.filter((rnf) => rnf.reg_code[0] === regionValue);
    getRegion()
  }
}
