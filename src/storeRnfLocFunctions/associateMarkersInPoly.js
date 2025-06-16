import { storeDepartments } from "../datas/storeDepartments";
import { searchMarkerInPoly } from "./searchMarkerInPoly";

export function associateMarkersInPoly(data) {
  data.map((rnf) => {
    storeDepartments.forEach((dep) => {
      // To not use manually added dep
      if (dep.results[0].manuel !== true) {
        const geometry = dep.results[0].geo_shape.geometry;
        const shearch = searchMarkerInPoly(rnf, geometry);
        if (shearch === true) {
          rnf.dep_code = dep.results[0].dep_code[0];
          rnf.reg_code = dep.results[0].reg_code;
        }
      }
    });
  });
}
