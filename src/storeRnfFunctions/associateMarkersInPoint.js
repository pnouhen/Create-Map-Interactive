import { distanceMarkersInPoint } from "./distanceMarkersInPoint";

export function associateMarkersInPoint(data, territoires) {
  data.map((rnf) => {
    if (rnf.reg_code === undefined) {
      const distance = distanceMarkersInPoint(rnf, territoires);
      if (distance.dep_code) {
        let dep_code = [];
        dep_code.push(distance[0].dep_code[0]);
        rnf.dep_code = dep_code;
      } else {
        let reg_code = [];
        reg_code.push(distance[0].reg_code[0]);
        rnf.reg_code = reg_code;
      }
    }
  });
}
