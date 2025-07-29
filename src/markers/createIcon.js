export const redIcon = L.icon({
    iconUrl: './assets/icon/leaf-red.png',
    shadowUrl: './assets/icon/leaf-shadow.png',

    iconSize:     [20, 50], // size of the icon
    shadowSize:   [25, 32], // size of the shadow
    iconAnchor:   [13, 52], // point of the icon which will correspond to marker's location
    shadowAnchor: [3, 42],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

export const blackIcon = L.icon({
    iconUrl: './assets/icon/marker-icon-2x-black.png',

    iconSize:     [20, 32.8],
    iconAnchor:   [9, 33],
    popupAnchor:  [0, 0]
});