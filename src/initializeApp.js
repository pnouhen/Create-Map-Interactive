import { getData } from "./getData";
import { generateMap } from "./generateMap";
import { generateClusters } from "./generateClusters";
import { filterNorth } from "./filterNorth";

export async function initializeApp() {
  const dataRnn = await getData("https://apicarto.ign.fr/api/nature/rnn", "dataRnn");
   const region = await getData("https://geo.api.gouv.fr/regions", "region");
  
  let store = dataRnn.features;

  const map = generateMap();
 
  generateClusters(store, map);
  
  filterNorth(store, dataRnn, map)
  console.log(store)
}

initializeApp();
