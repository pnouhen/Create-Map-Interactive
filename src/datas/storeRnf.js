import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnfFunctions/associateMarkersInPoly";
import { generateRnfArea } from "../storeRnfFunctions/generateRnfArea";
import { regionReady, storeRegion } from "./storeRegion";
import { associateRnfTerritoiresManuel } from "../storeRnfFunctions/associateRnfTerritoiresManuel";
import { departmentReady, storeDepartments } from "./storeDepartments";
import { searchNameDep } from "../storeRnfFunctions/searchNameDep";
import { associateMarkersInPointDep } from "../storeRnfFunctions/associateMarkersInPointDep";
import { associateMarkersInPointReg } from "../storeRnfFunctions/associateMarkersInPointReg";

export let storeRnf = [];

export async function rnfReady() {
  // Api for Corse
  const storeRnc = await getData(
    "https://apicarto.ign.fr/api/nature/rnc",
    "dataRnc"
  );

  // API for the rest
  const storeRnn = await getData(
    "https://apicarto.ign.fr/api/nature/rnn",
    "dataRnn"
  );

  storeRnf = [...storeRnn.features, ...storeRnc.features];

  generateRnfArea(storeRnf);

  associateRnfTerritoiresManuel(storeRnf);

  await departmentReady();
  if (storeDepartments.length > 0) {
    associateMarkersInPoly(storeRnf, storeDepartments);

    searchNameDep(storeRnf, storeDepartments);

    associateMarkersInPointDep(storeRnf, storeDepartments);
  }

  await regionReady();
  if (storeRegion.length > 0) {
    associateMarkersInPoly(storeRnf, storeRegion);

    associateMarkersInPointReg(storeRnf, storeRegion);
  }
}

rnfReady();
