export function searchRegion(data, value) {
    return data.filter((reg) => reg.reg_code[0] === value);
}
