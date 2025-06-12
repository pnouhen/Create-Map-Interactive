import { storeListDep } from "../../data/storeListDep";
import { generateListDep } from "../generateListDep";

// Generate all the departments using a region

export function generateDepRegion(value) {

  const listRegDep = storeListDep.filter((dep) => dep.codeRegion === value);

  generateListDep(listRegDep);
}
