import { storeRnn } from "./storeRnn";
import {generateMap} from "./generateMap"
import { generateMarker } from "./generateMarker";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// Initial value
let clusterGroup = null;

export function generateClusters(data) {
  const map = generateMap()
    // Delete the preview cluster if it exists for map and clusterGroup
  if (clusterGroup) {
    map.removeLayer(clusterGroup);
    clusterGroup.clearLayers();
  }
  // Generate cluster
 clusterGroup = L.markerClusterGroup();
  const markers = generateMarker(data, map);
  markers.forEach((el) => clusterGroup.addLayer(el));
  map.addLayer(clusterGroup);
}

generateClusters(storeRnn)