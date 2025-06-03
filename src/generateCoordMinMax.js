export function generateCoordMinMax(coords, numCoord) {
  let data = [];

  // In function of what it contains coordinates
  if (coords.length > 1 && coords[0][0].length > 2) {
    for (let i = 0; i < coords.length; i++) {
      const groupData = coords[i][0];
      data.push(...groupData.map((el) => el[numCoord]));
    }
  } else {
    data = coords[0].map((el) => el[numCoord]);
  }
  return data;
}
