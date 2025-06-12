import { storeRnF } from "../../data/storeRnF";
import { generateClusters } from "../../generate/generateClusters";
import { generatePolygons } from "../../generate/generatePolygon";
import { valueOptionAllDep } from "../selectUtils/valueOptionAll";
import { storeDepartments } from "../storeDepartments";
import { centerPolygon } from "../selectFunctions/centerPolygon";

const selectedDepartments = document.getElementById("selectedDepartments");

let currentPolygon = [];

async function filterDep() {
  console.log(storeDepartments[27].results[0].geo_shape.geometry.coordinates)
  selectedDepartments.addEventListener("change", async () => {
    const value = selectedDepartments.value;

    if (value === valueOptionAllDep) {
      generateClusters(storeRnF);
      // Créer une variable avec une region

    } else {
      const dep = storeDepartments.filter(
        (dep) => dep.results[0].dep_code[0] === value
      );

      const polygon = dep[0].results[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygon);

      const zoom = dep[0].results[0]

      centerPolygon(zoom)

    }
  });
}

filterDep();
