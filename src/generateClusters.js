import { generatePoints } from "./generatePoint";
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

  clusterGroup = L.markerClusterGroup();

  const markers = generatePoints(store, map);

  markers.forEach((marker) => clusterGroup.addLayer(marker));

  map.addLayer(clusterGroup);
}
