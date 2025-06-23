import { storeDepartments } from "../datas/storeDepartments";

export function searchName(data) {
  data.map((rnf) => {
    if (rnf.dep_code === undefined) {
      storeDepartments.forEach((dep) => {
        if (rnf.properties.nom.includes(dep.dep_name[0])) {
          rnf.dep_code = dep.dep_code[0];
          rnf.reg_code = dep.reg_code;
        }
      });
    }
    // Bad attribution with associateMarkersInPoint
    if (rnf.properties.nom.includes("Estuaire De La Seine")) {
      rnf.dep_code = "76";
      rnf.reg_code = "28";
    }
    if (rnf.properties.nom.includes("Archipel des Glorieuses")) {
      rnf.dep_code = "1000";
      rnf.reg_code = ["1000"];
    }
  });
}
