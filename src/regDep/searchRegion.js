import { regionValue } from "../filterTerritoires/generateRegion";

export function searchRegion(storeRegion) {
  if (storeRegion) {
    return storeRegion.filter((reg) => reg.reg_code[0] === regionValue);
  }
}
