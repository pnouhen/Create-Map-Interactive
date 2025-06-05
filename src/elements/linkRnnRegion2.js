import { storeRegion } from "../data/storeRegion"
import { storeRnF } from "../data/storeRnF"

export function linkRnnRegion2(){
console.log(storeRnF[98])
console.log(storeRegion.results)

const region = storeRegion.results[1].geo_shape

    if(region.geometry.type === "Polygon"){
        console.log("Polygon")
        
    } if(region.geometry.type === "MultiPolygon") {
        console.log("MultiPolygon")
    }
}
