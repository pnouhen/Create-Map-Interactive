import { linkRnnRegion } from "../elements/linkRnnRegion"
import { linkRnnRegion2 } from "../elements/linkRnnRegion2"

let rnfData = []

rnfData = linkRnnRegion()

rnfData.forEach((rnf) => {
    if(rnf.region.length === 0){
        linkRnnRegion2(rnf)
    }
})

