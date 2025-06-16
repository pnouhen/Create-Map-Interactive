import { getData } from "./getData";
import { associateMarkersInPoly } from "../storeRnfLocFunctions/associateMarkersInPoly";
import {searchName} from "../storeRnfLocFunctions/searchName"
import { associateMarkersInPoint } from "../storeRnfLocFunctions/associateMarkersInPoint";

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



searchName(storeRnF)

associateMarkersInPoint(storeRnF)

/* Faux :
Créer une région attention pour dessiner les polygons des départements / région


- Terres autrales :
Terres australes françaises
Archipel des Glorieuses

Mauvais département : 
Estuaire De La Seine 
*/ 