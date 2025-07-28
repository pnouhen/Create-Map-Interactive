import L from "leaflet";
import { generateMap } from "../maps/generateMap";
import { filterMarkerRange } from "./filterMarkerRange";
import { generateClusters } from "../markers/generateClusters";

const map = generateMap();
let circle = null;
let onMapClick = null;

export function getCoordClick(input, data, isActive) {
  const onMapClick = (e) => {
    if (circle) {
      map.removeLayer(circle);
    }

    circle = L.circle([e.latlng.lat, e.latlng.lng], {
      color: "#27ae60",
      fillColor: "#2ecc71",
      fillOpacity: 0.4,
      radius: input.value * 1000,
    }).addTo(map);

    filterMarkerRange(circle, data);

    const onInputChange = () => {
      if (circle) {
        circle.setRadius(input.value * 1000);
        filterMarkerRange(circle, data);
        console.log(data);
      }
    };

    if (input._changeData) {
      input.removeEventListener("input", input._changeData);
    }

    input._changeData = onInputChange;
    input.addEventListener("input", onInputChange);
  };

  if (isActive) {
    map.on("click", onMapClick);
  } else {
    map.off("click", onMapClick);
    if (input._changeData) {
      input.removeEventListener("input", input._changeData);
    }
    generateClusters(data);
    if (circle) {
      map.removeLayer(circle);
      circle = null;
    }
  }
}

