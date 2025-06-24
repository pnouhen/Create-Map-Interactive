import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeDepartmentsManuel";
import { searchDepMissing } from "../storeDepartments/searchDepMissing";
import { recoverDepMap } from "../storeDepartments/recoverDepMap";
import { fetchDepartments } from "../storeDepartments/fetchDepartments";

// Limitation of the API to 100 departments and there are 101 of them

export const storeDepartments = await (async () => {
  let store = [];

  store = await fetchDepartments(
    "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/departements-et-collectivites-doutre-mer-france@toursmetropole/records?limit=100"
  );

  const depMissing = searchDepMissing(store);

  const deps = await Promise.all(
    // Filtrer departments whitch aren't in the API
    depMissing
      .filter((dep) => dep.manuel !== true)
      .map(async (dep) => recoverDepMap(dep))
  );

  store.results.push(deps[0]);

  store.results.push(saintBarthelemy);
  store.results.push(saintMartin);
  store.results.push(terresAustrales);

  return store.results;
})();
