import { storeRnf } from "../datas/storeRnf";
import { filterRange } from "../filter/filterRange";
import { getDistance } from "../filter/getDistance";
import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { currentPolygonDep } from "../filterDepartments/generateDepartments";
import { generateClusters } from "../markers/generateClusters";
import { clearPolygons } from "../polygons/clearPloygons";
import { centerAll } from "./centerAll";

export function getAll(map, currentPolygonReg) {
  clearPolygons(currentPolygonDep, map);
  if (currentPolygonReg) {
    clearPolygons(currentPolygonReg, map);
  }

  generateClusters(storeRnf);
  searchRnfArea(storeRnf);
  searchRnfName(storeRnf);
  filterRange(storeRnf);
  getDistance(storeRnf, "clean");
  centerAll(map);
}
