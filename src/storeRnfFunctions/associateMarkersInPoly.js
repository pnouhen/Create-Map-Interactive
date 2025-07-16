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
            rnf.dep_code = territoire.dep_code[0];
          } else {
            rnf.reg_code = territoire.reg_code[0];
          }
        }
      }
    });
  });
}
