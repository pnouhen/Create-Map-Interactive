import { getDataRnn } from "./fetchAPI";
import { generatePoints } from "./generatePoint";

export async function initializeApp() {
  const local = JSON.parse(localStorage.getItem("dataRnn"));

  if (local === null) {
    const dataRnn = await getDataRnn();
    generatePoints(dataRnn);
  } else {
    const dataRnn = local;
    generatePoints(dataRnn);
  }
}

initializeApp();
