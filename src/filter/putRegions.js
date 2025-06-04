import { changeLabel } from "../elements/changeLabel";
import { generatePolygonRegion } from "../generate/generatePolygonRegion";

let regionChecked = [];

export function putRegions() {
  const putRegionCheck = document.getElementById("putRegionInput");
  const putRegionLabel = document.getElementById("putRegionLabel");

  if (!putRegionCheck) return null;

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
