export function coordinateMarker(el) {
  const latLng = [(el.bbox[1] + el.bbox[3]) / 2, (el.bbox[0] + el.bbox[2]) / 2];
  return latLng;
}
