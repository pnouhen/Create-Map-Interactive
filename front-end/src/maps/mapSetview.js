// SetView Default
export const latDefault = 3.6446980358673993;
export const lngDefault = 3.7168641603516406;

export let zoomDefault= 2

if(window.innerWidth < 768) zoomDefault = 1

// New SetView :
export function newSetview(map, lat, lng, zoom) {
  map.setView(new L.LatLng(lat, lng), zoom);
}
