import { storeRegion } from "../datas/storeRegion";
import { regionValue } from "../filter/filterRegionSelect";


export function searchRegion(){
    return storeRegion.filter((reg) => reg.reg_code[0] === regionValue);
}