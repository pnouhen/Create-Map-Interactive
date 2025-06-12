import { storeRnF } from "../../data/storeRnF";
import { generateClusters } from "../../generate/generateClusters";
import { zoomPolygon } from "./calculZoom";

export function centerPolygon(data) {

  const newSetview = {
    lat: data.geo_point_2d.lat,
    lng: data.geo_point_2d.lon,
    zoom: zoomPolygon(data),
  };

  generateClusters(storeRnF, newSetview)
}
