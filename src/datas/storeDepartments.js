import { recoverDepMap } from "./recoverDepMap";
import { saintBarthelemy, saintMartin, terresAustrales } from "./storeDepartmentsManuel";
import { storeListDep } from "./storeListDep";

// Limitation of the API to 100 departments and there are 101 of them

export const storeDepartments = await (async () => {
  const deps = await Promise.all(
    storeListDep.slice(0, 101).map(async (dep) => recoverDepMap(dep))
  );
  
  deps.push(saintBarthelemy);
  deps.push(saintMartin);
  deps.push(terresAustrales);

  return deps;
})();
