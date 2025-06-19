import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnfFunctions/associateMarkersInPoly";
import { searchName } from "../storeRnfFunctions/searchName";
import { associateMarkersInPoint } from "../storeRnfFunctions/associateMarkersInPoint";
import { generateRnfArea } from "../storeRnfFunctions/generateRnfArea";

const storeRnc = await getData(
  "https://apicarto.ign.fr/api/nature/rnc",
  "dataRnc"
);
const storeRnn = await getData(
  "https://apicarto.ign.fr/api/nature/rnn",
  "dataRnn"
);

export let storeRnF = [...storeRnn.features, ...storeRnc.features];

associateMarkersInPoly(storeRnF);

searchName(storeRnF);

associateMarkersInPoint(storeRnF);

generateRnfArea(storeRnF)