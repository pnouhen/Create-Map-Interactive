import { identifyRnfArea } from "../searchRnfArea/identifyRnfArea"

const areaMinRnf = document.getElementById("areaMinRnf")
const areaMaxRnf = document.getElementById("areaMaxRnf")

areaMinRnf.addEventListener("input", () => {
identifyRnfArea(areaMinRnf.value, "min")
})

areaMaxRnf.addEventListener("input", () => {
identifyRnfArea(areaMaxRnf.value, "max")
})
