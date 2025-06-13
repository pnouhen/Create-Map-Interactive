import { storeRnF } from "../datas/storeRnF";
import { generateClusters } from "../markers/generateClusters";
import { calculZoom } from "./calculZoom"

export function centerPolygon(data) {

  const newSetview = {
    lat: data.geo_point_2d.lat,
    lng: data.geo_point_2d.lon,
    zoom: calculZoom(data),
  };

  generateClusters(storeRnF, newSetview)
}
