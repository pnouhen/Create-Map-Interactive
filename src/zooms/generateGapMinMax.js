export function generateGapMinMax(data, coordinates) {
  const geometry = data.geo_shape.geometry;
 
  let minMax = [];

  if (geometry.type === "MultiPolygon" && geometry.coordinates[0][0].length > 2) {
    const values = []

    for(let i =0; i < geometry.coordinates.length; i++){
        const ring = geometry.coordinates[i][0].map((point) => point[coordinates])
        values.push(...ring)
    }

    const min = Math.min(...values);
    const max = Math.max(...values);
    
    minMax.push(min, max)

  } else {
    const values = geometry.coordinates[0].map((point) => point[coordinates]);

    const min = Math.min(...values);
    const max = Math.max(...values);
    
    minMax.push(min, max)
  }
   
  return minMax
}
