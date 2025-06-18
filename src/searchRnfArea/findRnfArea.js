import { generateRnfArea } from "./generateRnfArea"

export function findRnfArea(valueMinMax){
    const rnfArea = generateRnfArea()

    const rnfAreaMinMax = rnfArea
    .filter((rnf)=> rnf.surface >= valueMinMax.min)
    .filter((rnf)=> rnf.surface <= valueMinMax.max)

    return rnfAreaMinMax
}