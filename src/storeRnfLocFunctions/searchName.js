import { storeDepartments } from "../datas/storeDepartments";


export function searchName(data) {
    data.map((rnf) => {
        storeDepartments.forEach((dep) => {
            if(rnf.properties.nom.includes(dep.results[0].dep_name[0])){
                rnf.dep_code = dep.results[0].dep_code[0]
            }
        })
    })
}