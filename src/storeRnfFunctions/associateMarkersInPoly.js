import { searchMarkerInPoly } from "./searchMarkerInPoly";

export function associateMarkersInPoly(data, territoires) {
  data.map((rnf) => {
    territoires.forEach((territoire) => {
      // To not use manually added dep
      if (territoire.manuel !== true) {
        const geometry = territoire.geo_shape.geometry;
        const shearch = searchMarkerInPoly(rnf, geometry);
        if (shearch === true) {
          if (territoire.dep_code) {
            rnf.dep_code[0] = territoire.dep_code[0];
          } else {
            let reg_code = []
            reg_code.push(territoire.reg_code[0])
            rnf.reg_code = reg_code;
          }
        }
      }
    });
  });
}
