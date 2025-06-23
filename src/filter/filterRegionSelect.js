import { clearPolygons } from "../polygons/clearPloygons";
import { generatePolygons } from "../polygons/generatePolygon";
import { currentPolygonDep } from "./filterDepSelect";
import { centerPolygon } from "../regDep/centerPolygon";
import { centerAll } from "../regDep/centerAll";
import { getMapInstance } from "../maps/getMapInstance";
import { searchRegion } from "../regDep/searchRegion";
import { storeRnF } from "../datas/storeRnF";
import { getTerritoire } from "../filterTerritoires/getTerritoires";
import { getAll } from "../filterTerritoires/getAll";
import { colorRegion } from "../polygons/colorPolygons";

const selectedRegion = document.getElementById("selectedRegions");

// Initial value region
let currentPolygonReg = [];

export let regionValue = "";

export let markersRegion = [];

function filterRegionSelect() {
  selectedRegion.addEventListener("change", () => {
    const map = getMapInstance();
    regionValue = selectedRegion.value;

    if (regionValue === "allRegions") {
      regionValue = "";
      clearPolygons(currentPolygonReg);

      getAll();

      centerAll();
    } else {
      clearPolygons(currentPolygonDep);

      const regionSelect = searchRegion();

      if (regionSelect[0].manuel === undefined) {
        const polygon = regionSelect[0].geo_shape.geometry;
        generatePolygons(polygon, currentPolygonReg, colorRegion);
      }
      const zoom = regionSelect[0];
      centerPolygon(zoom, map);

      markersRegion = storeRnF.filter((rnf) => rnf.reg_code[0] === regionValue);
      getTerritoire(markersRegion, zoom, map);
    }
  });
}

filterRegionSelect();
