import L from "leaflet";

export function generatePopupDistance(currentRnf, pointB) {
  const distance = currentRnf.distanceTo(pointB) / 1000;

  const lat = (currentRnf.lat + pointB.lat) / 2
  const lng = (currentRnf.lng + pointB.lng) / 2
    console.log(currentRnf.lat)
    console.log(pointB.lat)
    console.log(lat)
  const popup = L.popup();

  popup
    .setLatLng([lat, lng])
    .setContent(
      `<div class="toolType-content py-2.5">
    <p class="toolType-sbTitle">Distance : </p>
    <p>${distance.toFixed(3)} km</p>
    `
    )

    return popup
}
