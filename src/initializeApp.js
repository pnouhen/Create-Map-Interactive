import { getDataRnn } from "./fetchAPI";
import { generateClusters } from "./generateClusters";

export async function initializeApp() {
  const local = JSON.parse(localStorage.getItem("dataRnn"));

  if (local === null) {
    const dataRnn = await getDataRnn();
    generateClusters(dataRnn);
  } else {
    const dataRnn = local;
    generateClusters(dataRnn);
  }
}

initializeApp();
