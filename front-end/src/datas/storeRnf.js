import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnf/associateMarkersInPoly";
import { generateRnfArea } from "../storeRnf/generateRnfArea";
import { regionReady, storeRegion } from "./storeRegion";
import { associateRnfTerritoiresManuel } from "../storeRnf/associateRnfTerritoiresManuel";
import { departmentReady, storeDepartments } from "./storeDepartments";
import { searchNameDep } from "../storeRnf/searchNameDep";
import { associateMarkersInPointDep } from "../storeRnf/associateMarkersInPointDep";
import { associateMarkersInPointReg } from "../storeRnf/associateMarkersInPointReg";

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
