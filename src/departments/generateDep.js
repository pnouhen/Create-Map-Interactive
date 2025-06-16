import { storeDepartments } from "../datas/storeDepartments";
import { generatePolygons } from "../polygons/generatePolygon";
import { centerPolygon } from "../regDep/centerPolygon";


export function generateDep(value, currentPolygonDep, map){
    const dep = storeDepartments.filter(
        (dep) => dep.results[0].dep_code[0] === value
      );

      if (dep[0].results[0].manuel === undefined) {
      const polygon = dep[0].results[0].geo_shape.geometry;
      generatePolygons(polygon, currentPolygonDep);
      }
      const zoom = dep[0].results[0]
      centerPolygon(zoom, map)
}