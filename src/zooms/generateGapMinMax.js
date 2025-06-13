export function generateGapMinMax(data, coordinates) {
  const geometry = data.geo_shape.geometry;

  let bounds = [];

  if (
    geometry.type === "MultiPolygon" &&
    geometry.coordinates[0][0].length > 2
  ) {
    const values = geometry.coordinates.flatMap((markers) => markers[0]);

    const polygon = L.polygon(values);

    bounds = polygon.getBounds();
  } else {
    const polygon = L.polygon(geometry.coordinates[0]);

    bounds = polygon.getBounds();
  }

  return bounds;
}
