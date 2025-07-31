import { searchMarkerInPoly } from "./searchMarkerInPoly";

export function associateMarkersInPoly(data, storeTerritoire) {
  data.map((rnf) => {
    storeTerritoire.forEach((territoire) => {
      // To not use manually added dep or region
      if (territoire.manuel !== true) {
        const geometry = territoire.geo_shape.geometry;
        const shearch = searchMarkerInPoly(rnf, geometry);
        if (shearch) {
          // For department
          if (territoire.dep_code) {
            let dep_code = [];
            dep_code.push(territoire.dep_code[0]);
            rnf.dep_code = dep_code;
          }

          // For region
          if (territoire.reg_code) {
            let reg_code = [];
            reg_code.push(territoire.reg_code[0]);
            rnf.reg_code = reg_code;
          }
        }
      }
    });
  });
}
