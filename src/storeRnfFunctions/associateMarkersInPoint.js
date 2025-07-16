import { distanceMarkersInPoint } from "./distanceMarkersInPoint";

export function associateMarkersInPoint(data, territoires) {
  data.map((rnf) => {
    if (rnf.reg_code === undefined) {
      const distance = distanceMarkersInPoint(rnf, territoires);
      if (distance.dep_code) {
        rnf.dep_code = distance[0].code_dep[0];
      } else {
        rnf.reg_code = distance[0].code_reg[0];
      }
    }
  });
}
