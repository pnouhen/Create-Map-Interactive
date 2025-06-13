import { generateMap } from "./generateMap"

// SetView Default
export const latDefault = 3.6446980358673993
export const lngDefault = 3.7168641603516406
export const zoomDefault = 3

// New SetView : 

export function newSetview (lat, lng, zoom){
    const map = generateMap()

    map.setView(new L.LatLng(lat, lng), zoom);
}