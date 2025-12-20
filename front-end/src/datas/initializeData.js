import { filterRange } from "../filter/filterRange";
import { getDistance } from "../filter/getDistance";
import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { generateClusters } from "../markers/generateClusters";
import { rnfReady, storeRnf } from "./storeRnf";
import { generateLoader } from "../loader/generateLoader";
import { filterRegions } from "../filter/filterRegions";
import { filterDepartments } from "../filter/filterDepartments";

async function initializeData() {
  await rnfReady();
  searchRnfName(storeRnf);
  searchRnfArea(storeRnf);
  filterRange(storeRnf);
  generateClusters(storeRnf);
  getDistance(storeRnf);
  generateLoader();

  filterRegions();
  filterDepartments();
}

initializeData();
