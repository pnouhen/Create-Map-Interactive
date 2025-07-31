import { newSetview } from "../maps/mapSetviewDefault";
import { calculZoom } from "../polygons/calculZoom";

export function centerPolygon(data, map) {
  const geoShape = data.geo_shape;

  const lat = data.geo_point_2d.lat;
  const lng = data.geo_point_2d.lon;
  const zoom = calculZoom(geoShape, map);

  newSetview(map, lat, lng, zoom);
}
