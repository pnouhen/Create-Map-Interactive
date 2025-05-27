import { generateMap } from "./generateMap";
import { generatePoints } from "./generatePoint";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

export function generateClusters(dataRnn) {
  const map = generateMap();
  const markers = L.markerClusterGroup();

  const points = generatePoints(dataRnn, map);
    points.forEach((marker) => markers.addLayer(marker))

    map.addLayer(markers);
}
