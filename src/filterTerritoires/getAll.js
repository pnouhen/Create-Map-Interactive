import { generateClusters } from "../markers/generateClusters";
import { searchRnfArea } from "../filter/searchRnfArea";

import { storeRnf } from "../datas/storeRnf";
import { clearPolygons } from "../polygons/clearPloygons";
import { searchRnfName } from "../filter/searchRnfName";
import { currentPolygonDep } from "./generateDepartments";

export function getAll() {
  clearPolygons(currentPolygonDep);

  generateClusters(storeRnf);

  searchRnfArea(storeRnf);

  searchRnfName(storeRnf)
}
