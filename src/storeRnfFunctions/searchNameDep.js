import { storeDepartments } from "../datas/storeDepartments";

export function searchNameDep(data) {
  data.map((rnf) => {
    if (rnf.dep_code === undefined) {
      storeDepartments.forEach((dep) => {
        if (rnf.properties.nom.includes(dep.dep_name[0])) {
          rnf.dep_code = dep.dep_code;
          rnf.reg_code = dep.reg_code;
        }
      });
    }
  });
}
