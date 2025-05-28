import { getData } from "./getData";
import { generateMap } from "./generateMap";
import { generateClusters } from "./generateClusters";
import { filterNorth } from "./filterNorth";

export async function initializeApp() {
  const dataRnn = await getData();
  let store = dataRnn;

  const map = generateMap();

  generateClusters(store, map);
  
  filterNorth(store, dataRnn, map)

}

initializeApp();
