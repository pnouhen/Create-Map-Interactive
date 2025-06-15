export function addStoreDep(dep_code, dep_name_upper, dep_name, lat, lon) {
  return {
    results: [
      {
        manuel: true,
        dep_code: [dep_code],
        dep_name_upper: dep_name_upper,
        dep_name: [dep_name],
        geo_point_2d: {
          lat: lat,
          lon: lon,
        },
        geo_shape: {
          geometry: {
            coordinates: [
              [
                [-62.87, 17.925],
                [-62.80, 17.925], 
                [-62.80, 17.87],
                [-62.87, 17.87],   
                [-62.87, 17.925],  
              ],
            ],
            type: "Polygon",
          },
        },
      },
    ],
  };
}
