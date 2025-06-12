import { recoverDepMap } from "./recoverDepMap";
import { storeListDep } from "../data/storeListDep";

// Limitation of the API to 100 departments and there are 101 of them

 export const storeDepartments = await Promise.all(
  storeListDep.map(async (dep) => {
    return recoverDepMap(dep);
  })
);


