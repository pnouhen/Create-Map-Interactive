import { filterRange } from "../filter/filterRange";
import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { generateClusters } from "../markers/generateClusters";

export function getTerritoire(data, zoom) {
  generateClusters(data);

  searchRnfName(data, zoom);

  searchRnfArea(data, zoom);

  filterRange(data)
}
