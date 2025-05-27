import { getDataRnn } from "./getDataRnn";
import { generateClusters } from "./generateClusters";

export async function initializeApp() {

  // For recover data
  let local = []
  if(!localStorage.getItem("dataRnn")){
    local = await getDataRnn()
  } else {
    local = JSON.parse(localStorage.getItem("dataRnn"))
  }

  let store = [...local.features]

  generateClusters(store)
}

initializeApp();
