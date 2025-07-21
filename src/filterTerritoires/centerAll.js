import {
  latDefault,
  lngDefault,
  newSetview,
  zoomDefault,
} from "../maps/mapSetviewDefault";

export function centerAll() {
  const lat = latDefault;
  const lng = lngDefault;
  const zoom = zoomDefault;

  newSetview(lat, lng, zoom);
}
