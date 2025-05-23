/* Generate the map with OpenStreetMap**/
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function generateMap() {
  const map = L.map("map").setView([46.387255, 3.044397], 6);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  return map
}