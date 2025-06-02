import { generatePolygonRegion } from "./generatePolygonRegion";
import { generateMap } from "./generateMap";

let regionChecked = [];

export function putRegions() {
  const putRegionCheck = document.getElementById("putRegionInput");
  const putRegionLabel = document.getElementById("putRegionLabel");

  putRegionCheck.addEventListener("click", () => {
    putRegionLabel.classList.toggle("inputActive");

    if (putRegionCheck.checked) {
      regionChecked = generatePolygonRegion();
    } else {
      regionChecked.forEach((polygon) => polygon.remove());
      regionChecked = [];
    }
  });
}

putRegions();
