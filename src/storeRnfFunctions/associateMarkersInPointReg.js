import { distanceMarkersInPoint } from "./distanceMarkersInPoint";

export function associateMarkersInPointReg(data, territoires) {
  data.map((rnf) => {
    if (rnf.reg_code === undefined) {
      const distance = distanceMarkersInPoint(rnf, territoires);
      let reg_code = [];
      reg_code.push(distance[0].reg_code[0]);
      rnf.reg_code = reg_code;
    }
  });
}
