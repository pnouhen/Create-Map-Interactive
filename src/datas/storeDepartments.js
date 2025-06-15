import { addStoreDep } from "../storeDepadd/addStoreDep";
import { recoverDepMap } from "./recoverDepMap";
import { storeListDep } from "./storeListDep";

// Limitation of the API to 100 departments and there are 101 of them

export const storeDepartments = await (async () => {
  const deps = await Promise.all(
    storeListDep.map(async (dep) => {
      return recoverDepMap(dep);
    })
  );

  deps.push(
    addStoreDep(
      "977",
      "SAINT-BARTHÉLEMY",
      "Saint-Barthélemy",
      17.8967693,
      -62.825598
    )
  );
  return deps;
})();
