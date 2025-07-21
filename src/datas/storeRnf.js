import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnfFunctions/associateMarkersInPoly";
import { generateRnfArea } from "../storeRnfFunctions/generateRnfArea";
import { storeRegion } from "./storeRegion";
import { associateRnfTerritoiresManuel } from "../storeRnfFunctions/associateRnfTerritoiresManuel";
import { storeDepartments } from "./storeDepartments";
import { searchNameDep } from "../storeRnfFunctions/searchNameDep";
import { associateMarkersInPointDep } from "../storeRnfFunctions/associateMarkersInPointDep";
import { associateMarkersInPointReg } from "../storeRnfFunctions/associateMarkersInPointReg";

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

  associateMarkersInPointDep(storeRnf, storeDepartments);
}

if (storeRegion.length > 0) {
  associateMarkersInPoly(storeRnf, storeRegion);

  associateMarkersInPointReg(storeRnf, storeRegion)
}
