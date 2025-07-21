import { distanceMarkersInPoint } from "./distanceMarkersInPoint";

export function associateMarkersInPointDep(data, territoires) {
  data.map((rnf) => {
    if (rnf.dep_code === undefined) {
      const distance = distanceMarkersInPoint(rnf, territoires);
        let dep_code = [];
        dep_code.push(distance[0].dep_code[0]);
        rnf.dep_code = dep_code;
    }
  });
}
