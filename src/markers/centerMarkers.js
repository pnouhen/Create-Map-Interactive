import { newSetview } from "../maps/mapSetview";
import { calculZoom } from "../polygons/calculZoom";

export function centerMarkers(data, map, latLng) {
  const lat = latLng[0];
  const lng = latLng[1];

  const zoom = calculZoom(data, map);

  newSetview(map, lat, lng, zoom);
}
