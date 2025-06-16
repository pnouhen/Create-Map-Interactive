import { storeDepartments } from "../datas/storeDepartments";


export function searchName(data) {
    data.map((rnf) => {
        storeDepartments.forEach((dep) => {
            if(rnf.properties.nom.includes(dep.dep_name)){
                rnf.dep_code = dep.dep_code[0]
            }
        })
    })
}