export function searchDepartment(data, value) {
    return data.filter((reg) => reg.dep_code[0] === value);
}
