import { generateRnfArea } from "./generateRnfArea"

export function findRnfArea(valueMinMax){
    console.log(valueMinMax)

    const rnfArea = generateRnfArea()

    const rnfAreaMinMax = rnfArea
    .filter((rnf)=> rnf.surface >= valueMinMax.min)
    .filter((rnf)=> rnf.surface <= valueMinMax.max)

    console.log(rnfAreaMinMax)
}