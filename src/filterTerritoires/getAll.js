import { generateClusters } from "../markers/generateClusters";
import { searchRnfArea } from "../filter/searchRnfArea";

import { currentPolygonDep } from "../filter/filterDepSelect";
import { storeRnf } from "../datas/storeRnf";
import { clearPolygons } from "../polygons/clearPloygons";
import { searchRnfName } from "../filter/searchRnfName";

export function getAll() {
  clearPolygons(currentPolygonDep);

  generateClusters(storeRnf);

  searchRnfArea(storeRnf);

  searchRnfName(storeRnf)
}
