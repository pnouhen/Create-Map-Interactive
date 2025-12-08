export function generateGapMinMax(data) {
  let bounds = [];

  if (data.type === "MultiPolygon" && data.coordinates[0][0].length > 2) {
    // Create one polygon
    const values = data.coordinates.flatMap((markers) => markers[0]);
    const polygon = L.polygon(values);
    bounds = polygon.getBounds();
  } else {
    const polygon = L.polygon(data.coordinates[0]);
    bounds = polygon.getBounds();
  }

  return bounds;
}
