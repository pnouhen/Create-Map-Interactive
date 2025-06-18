import { identifyRnfArea } from "../searchRnfArea/identifyRnfArea"
import { findRnfAreaMinMax } from "../searchRnfArea/findRnfAreaMiMax";


const areaMinRnf = document.getElementById("areaMinRnf")
const areaMaxRnf = document.getElementById("areaMaxRnf")


export let valueMinMax = findRnfAreaMinMax()

areaMinRnf.value = valueMinMax.min.toFixed(3)
areaMaxRnf.value = valueMinMax.max.toFixed(3)

areaMinRnf.addEventListener("input", () => {
identifyRnfArea(areaMinRnf.value, "min")
})

areaMaxRnf.addEventListener("input", () => {
identifyRnfArea(areaMaxRnf.value, "max")
})
