import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnf/associateMarkersInPoly";
import { generateRnfArea } from "../storeRnf/generateRnfArea";
import { storeRegion } from "./storeRegion";
import { associateRnfTerritoiresManuel } from "../storeRnf/associateRnfTerritoiresManuel";
import { storeDepartments } from "./storeDepartments";
import { searchNameDep } from "../storeRnf/searchNameDep";
import { associateMarkersInPointDep } from "../storeRnf/associateMarkersInPointDep";
import { associateMarkersInPointReg } from "../storeRnf/associateMarkersInPointReg";

export let storeRnf = [];

export async function rnfReady() {
  storeRnf = await getData(
    `${import.meta.env.VITE_BASE_API}/api/rnf`,
    "dataRnf"
  );
  if (storeRnf) {
    generateRnfArea(storeRnf);
    associateRnfTerritoiresManuel(storeRnf);
  }

  if (storeRegion.length > 0) {
    associateMarkersInPoly(storeRnf, storeRegion);

    associateMarkersInPointReg(storeRnf, storeRegion);
  }

  if (storeDepartments.length > 0) {
    associateMarkersInPoly(storeRnf, storeDepartments);

    searchNameDep(storeRnf, storeDepartments);

    associateMarkersInPointDep(storeRnf, storeDepartments);
  }
}
