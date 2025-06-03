import { changeLabel } from "./changeLabel";
import { generatePolygonRegion } from "./generatePolygonRegion";

let regionChecked = [];

export function putRegions() {
  const putRegionCheck = document.getElementById("putRegionInput");
  const putRegionLabel = document.getElementById("putRegionLabel");

  putRegionCheck.addEventListener("click", () => {
    changeLabel(putRegionLabel);

    if (putRegionCheck.checked) {
      regionChecked = generatePolygonRegion();
    } else {
      regionChecked.forEach((polygon) => polygon.remove());
      regionChecked = [];
    }
  });
}

putRegions();
