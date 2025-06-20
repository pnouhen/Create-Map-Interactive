import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { generateClusters } from "../markers/generateClusters";

export function getTerritoire(data, zoom, map) {
  generateClusters(data);

  searchRnfName(data, zoom, map);

  searchRnfArea(data, zoom, map);
}
