export function filterPoint(rnf, lat, lng, radius) {
  rnf.markerInCircle = false

const pointA = L.latLng(
      (rnf.bbox[1] + rnf.bbox[3]) / 2,
      (rnf.bbox[0] + rnf.bbox[2]) / 2
    );
    const circlePoint = L.latLng(lat, lng);
    const distance = pointA.distanceTo(circlePoint);

    // The marker is in the circle
    if(distance <= radius) {
      rnf.markerInCircle = true
    }
    // The polygon is may be present in the circle
    return distance <= radius + 80000;
}