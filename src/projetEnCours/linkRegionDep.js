import { storeListDep } from "../data/storeListDep";

export function linkRegionDep(data){

    console.log(data)

    const departments = storeListDep.filter((department) => department.codeRegion === data.reg_code[0])

    return departments
}