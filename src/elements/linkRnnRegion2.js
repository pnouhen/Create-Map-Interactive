import { storeRegion } from "../data/storeRegion"
import { storeRnF } from "../data/storeRnF"

export function linkRnnRegion2(data){

const rnfCoords = data.coordinate
const regionCoords = storeRegion.results[0]
console.log(rnfCoords)
console.log(regionCoords)
    if(regionCoords.geo_shape_geometry.type === "Polygon"){
        

        
    } if(regionCoords.geometry.type === "MultiPolygon") {
        console.log("MultiPolygon")
    }
}
