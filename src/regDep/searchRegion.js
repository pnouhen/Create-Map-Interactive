export function searchRegion(storeRegion, regionValue) {
    return storeRegion.filter((reg) => reg.reg_code[0] === regionValue);
}
