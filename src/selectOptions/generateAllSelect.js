import { storeRegion } from "../datas/storeRegion";
import { centerAll } from "../zooms/centerAll";
import { centerPolygon } from "./selectFunctions/centerPolygon";

export function generateAllSelect(data) {
  const selectedRegion = document.getElementById("selectedRegions");

  if (selectedRegion.value === "allRegions" && storeRegion) {
    centerAll(data);
  } else {
    const coordinates = storeRegion.results.filter(
      (region) => region.reg_code[0] === selectedRegion.value
    );

    centerPolygon(coordinates[0]);
  }
}
