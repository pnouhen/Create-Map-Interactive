import { storeRnF } from "../data/storeRnF";
import { generateMap } from "../generate/generateMap";
import { generateMarker } from "../generate/generateMarker";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// Initial value
let map = null;
let clusterGroup = null;

export function generateClusters(data, newSetview) {
  map = generateMap();
  if (!map) {
    map = generateMap();
  }

  // Set view if coordinates are provided
  if (newSetview) {
    map.setView(new L.LatLng(newSetview.lat, newSetview.lng), newSetview.zoom); // Added zoom level
  }

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

generateClusters(storeRnF);
