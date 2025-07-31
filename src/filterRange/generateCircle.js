import L from "leaflet";
import { generateMap } from "../maps/generateMap";
import { filterMarkerRange } from "./filterMarkerRange";
import { generateClusters } from "../markers/generateClusters";

const map = generateMap();

let circle = null;
let currentInput = null;
let currentData = null;

function onMapClick(e) {
  if (circle) {
    map.removeLayer(circle);
  }

  circle = L.circle([e.latlng.lat, e.latlng.lng], {
    color: "#27ae60",
    fillColor: "#2ecc71",
    fillOpacity: 0.4,
    radius: currentInput.value * 1000,
  }).addTo(map);

  filterMarkerRange(circle, currentData);

  const onInputChange = () => {
    if (circle) {
      circle.setRadius(currentInput.value * 1000);
      filterMarkerRange(circle, currentData);
    }
  };

  // Actualisation EventListener
  if (currentInput._changeData) {
    currentInput.removeEventListener("input", currentInput._changeData);
  }
  currentInput._changeData = onInputChange;
  currentInput.addEventListener("input", onInputChange);
}

export function generateCircle(input, data, isActive) {
  currentInput = input;
  currentData = data;

  if (isActive) {
    map.on("click", onMapClick);
  } else {
    map.off("click", onMapClick);

    if (currentInput._changeData) {
      currentInput.removeEventListener("input", currentInput._changeData);
    }

    if (circle) {
      map.removeLayer(circle);
    }

    generateClusters(data);
  }
}
