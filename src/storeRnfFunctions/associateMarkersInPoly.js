import { storeDepartments } from "../datas/storeDepartments";
import { searchMarkerInPoly } from "./searchMarkerInPoly";

export function associateMarkersInPoly(data) {
  data.map((rnf) => {
    storeDepartments.forEach((dep) => {
      // To not use manually added dep
      if (dep.manuel !== true) {
        const geometry = dep.geo_shape.geometry;
        const shearch = searchMarkerInPoly(rnf, geometry);
        if (shearch === true) {
          rnf.dep_code = dep.dep_code[0];
          rnf.reg_code = dep.reg_code;
        }
      }
    });
  });
}
