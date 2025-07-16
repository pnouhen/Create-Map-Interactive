import { storeDepartments } from "../datas/storeDepartments";
import { colorDep } from "../polygons/colorPolygons";
import { generatePolygons } from "../polygons/generatePolygon";

export function generateDep(value, currentPolygonDep) {
  if (storeDepartments) {
    const dep = storeDepartments.filter((dep) => dep.dep_code[0] === value);

    if (dep[0].manuel === undefined) {
      const polygon = dep[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonDep, colorDep);
    }

    return dep;
  }
}
