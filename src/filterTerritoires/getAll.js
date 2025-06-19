import { generateClusters } from "../markers/generateClusters";
import { searchRnfArea } from "../filter/searchRnfArea";

import { currentPolygonDep } from "../filter/filterDepSelect";
import { storeRnF } from "../datas/storeRnF";
import { clearPolygons } from "../polygons/clearPloygons";

export function getAll() {
  clearPolygons(currentPolygonDep);

  generateClusters(storeRnF);

  searchRnfArea(storeRnF);
}
