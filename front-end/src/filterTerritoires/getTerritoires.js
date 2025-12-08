import { storeRnf } from "../datas/storeRnf";
import { filterRange } from "../filter/filterRange";
import { getDistance } from "../filter/getDistance";
import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { generateClusters } from "../markers/generateClusters";

export function getTerritoire(data) {
  generateClusters(data);

  searchRnfName(data);

  searchRnfArea(data);

  filterRange(data);

  getDistance(storeRnf, "clean");
}
