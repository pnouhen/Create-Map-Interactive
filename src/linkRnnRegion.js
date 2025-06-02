import { storeRegion } from "./storeRegion";
import { storeRnn } from "./storeRnn";

// console.log(storeRegion.results[4].geo_shape.geometry.coordinates[0])
// console.log(storeRnn.features[114])

// const test = storeRnn.features.map((num) => num.properties.id_mnhn)

  const rnn = storeRnn.features[114]

    const latLng = [
        (rnn.bbox[1] + rnn.bbox[3]) / 2,
        (rnn.bbox[0] + rnn.bbox[2]) / 2
    ]
    const marker = L.marker(latLng);

console.log(latLng)

const region = storeRegion.results[4].geo_shape.geometry.coordinates[0]
console.log(region)

const lats = region.map((el) => el[1])

const latMin = Math.min(...lats)
const latMax = Math.max(...lats)

const lng = region.map((el) => el[0])

const lngMin = Math.min(...lng)
const lngMax = Math.max(...lng)


if(latLng[0] >= latMin && latLng[0] <= latMax && latLng[1] >= lngMin && latLng[1] <= lngMax){
    console.log("true")
}

