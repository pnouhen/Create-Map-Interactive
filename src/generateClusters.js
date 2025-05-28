import { generateMarker } from "./generateMarker";
import { generatePolygon } from "./generatePolygon";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// Initial value
let clusterGroup = null;

export function generateClusters(store, map) {
  // Delete the preview cluster if it exists for map and clusterGroup
  if (clusterGroup) {
    map.removeLayer(clusterGroup);
    clusterGroup.clearLayers();
  }

  // Generate cluster
  clusterGroup = L.markerClusterGroup();
  const markers = generateMarker(store, map);
  markers.forEach((el) => clusterGroup.addLayer(el));
  map.addLayer(clusterGroup);
}
