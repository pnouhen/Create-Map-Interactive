/* Generate the map with OpenStreetMap**/
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { latDefault, lngDefault, zoomDefault } from "./mapSetviewDefault";

let map = null;

export function generateMap() {
  if (map) {
    return map;
  } else {
    map = L.map("map").setView([latDefault, lngDefault], zoomDefault);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Wait before fixing map size
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return map;
  }
}
