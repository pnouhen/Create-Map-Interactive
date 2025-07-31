import {
  latDefault,
  lngDefault,
  newSetview,
  zoomDefault,
} from "../maps/mapSetviewDefault";

export function centerAll(map) {
  const lat = latDefault;
  const lng = lngDefault;
  const zoom = zoomDefault;

  newSetview(map, lat, lng, zoom);
}
