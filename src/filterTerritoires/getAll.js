import { storeRnf } from "../datas/storeRnf";
import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { currentPolygonDep } from "../filterDepartments/generateDepartments";
import { generateClusters } from "../markers/generateClusters";
import { clearPolygons } from "../polygons/clearPloygons";
import { centerAll } from "./centerAll";

export function getAll(currentPolygonReg) {
  clearPolygons(currentPolygonDep);

  if (currentPolygonReg) {
    clearPolygons(currentPolygonReg);
  }

  generateClusters(storeRnf);

  searchRnfArea(storeRnf);

  searchRnfName(storeRnf);

  centerAll();
}
