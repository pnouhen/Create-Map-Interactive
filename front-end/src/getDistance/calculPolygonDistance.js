import { coordinateMarker } from "../markers/coordinateMarker";

export function calculPolygonDistance(coordPoly, coordRnf, currentPoint) {
  const polygon = {
    geo_point_2d: {
      lat: coordPoly[1],
      lon: coordPoly[0],
    },
    geo_shape: {
      geometry: {
        coordinates: [
          [
            [coordRnf[0], coordRnf[1]],
            [coordRnf[0], currentPoint.lng],
            [currentPoint.lat, currentPoint.lng],
            [coordRnf[0], currentPoint.lng],
            [coordRnf[0], coordRnf[1]],
          ],
        ],
      },
    },
  };
  return polygon;
}
