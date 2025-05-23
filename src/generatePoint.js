// Generate nature reserve with a grid
import { generateMap } from "./generateMap";

export function generatePoints(dataRnn) {
  const map = generateMap(L);
  for (let i = 0; i < dataRnn.features.length; i++) {
    const longitude =
      (dataRnn.features[i].bbox[0] +
        dataRnn.features[i].bbox[2]) /
      2;
    const latitude =
      (dataRnn.features[i].bbox[1] +
        dataRnn.features[i].bbox[3]) /
      2;
    L.marker([latitude, longitude]).addTo(map);
  }
}
