import { rnfReady, storeRnf } from "../datas/storeRnf";
import { generateMap } from "../maps/generateMap";
import { generateMarker } from "./generateMarker";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

let clusterGroup = null;

const map = generateMap();

export function generateClusters(data) {
  if (clusterGroup) {
    map.removeLayer(clusterGroup);
    clusterGroup.clearLayers();
  }

  clusterGroup = L.markerClusterGroup();

  const markers = generateMarker(data, map);
  markers.forEach((el) => clusterGroup.addLayer(el));
  
  map.addLayer(clusterGroup);
}
