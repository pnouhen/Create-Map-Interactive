import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnfFunctions/associateMarkersInPoly";
import { associateMarkersInPoint } from "../storeRnfFunctions/associateMarkersInPoint";
import { generateRnfArea } from "../storeRnfFunctions/generateRnfArea";
import { storeRegion } from "./storeRegion";
import { associateRnfTerritoiresManuel } from "../storeRnfFunctions/associateRnfTerritoiresManuel";
import { storeDepartments } from "./storeDepartments";
import { searchNameDep } from "../storeRnfFunctions/searchNameDep";

const storeRnc = await getData(
  "https://apicarto.ign.fr/api/nature/rnc",
  "dataRnc"
);
const storeRnn = await getData(
  "https://apicarto.ign.fr/api/nature/rnn",
  "dataRnn"
);

export let storeRnf = [...storeRnn.features, ...storeRnc.features];

generateRnfArea(storeRnf);

associateRnfTerritoiresManuel(storeRnf)

if (storeDepartments) {
  associateMarkersInPoly(storeRnf, storeDepartments);

  searchNameDep(storeRnf);

  associateMarkersInPoint(storeRnf, storeDepartments);
}

if (storeRegion.length > 0) {
  associateMarkersInPoly(storeRnf, storeRegion);

  associateMarkersInPoint(storeRnf, storeRegion)
}
