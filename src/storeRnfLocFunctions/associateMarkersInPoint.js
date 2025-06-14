
import { distanceMarkersInPoint } from "./distanceMarkersInPoint";

export function associateMarkersInPoint(data) {
  data.map((rnf) => {
    if (rnf.dep_code === undefined) {
      const distance = distanceMarkersInPoint(rnf)
      rnf.dep_code = distance[0].code_dep[0]
    }
  });
}
