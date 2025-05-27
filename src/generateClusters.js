import { generateMap } from "./generateMap";
import { generatePoints } from "./generatePoint";

import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster.js";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

export function generateClusters(store) {
  const map = generateMap();

  // To recover clusterGroup
  const clusterGroup = L.markerClusterGroup();

  const markers = generatePoints(store, map);

  // MARKERS EST VIDE
  
  // markers.forEach((marker) => clusterGroup.addLayer(marker));

  // map.addLayer(clusterGroup);

  console.log(markers)



}
// // To recover Map

  // // To recover clusterGroup
  // const markers = L.markerClusterGroup();

  // const points = generatePoints(dataRnn, map);
  // points.forEach((marker) => markers.addLayer(marker));

  // map.addLayer(markers);
  // // Put all the markers in North

  // const RnnNorthMap = L.markerClusterGroup();
  // function filterLatNorth(value) {
  //   return value >= 46.387255 && value <= 52;
  // }

  // points.forEach((marker) => {
  //   if (filterLatNorth(marker._latlng.lat)) {
  //     RnnNorthMap.addLayer(marker);
  //   }
  // });
  // const RnnNorthMapCheck = document.getElementById("RnnNorthInput");

  // RnnNorthMapCheck.addEventListener("click", () => {
  //   const RnnNorthMapLabel = document.getElementById("RnnNorthLabel");
  //   if (RnnNorthMapCheck.checked) {
  //     RnnNorthMapLabel.classList.add("inputActive");
  //     map.removeLayer(markers);
  //     map.addLayer(RnnNorthMap);
  //   } else {
  //     RnnNorthMapLabel.classList.remove("inputActive");
  //     map.removeLayer(RnnNorthMap);
  //     map.addLayer(markers);
  //   }
  // });
  // console.log(dataRnn.features[0])