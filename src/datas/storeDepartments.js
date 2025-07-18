import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeTerritoiresManuel";
import { searchDepMissing } from "../storeDepartments/searchDepMissing";
import { recoverDepMap } from "../storeDepartments/recoverDepMap";
import { getData } from "./getData";
import { storeListDep } from "./storeListDep";

async function generateDep() {
  let store = [];
  store = await getData(
    "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/departements-et-collectivites-doutre-mer-france@toursmetropole/records?limit=100",
    "dep"
  );
  if (store) {
    const listDep = await storeListDep();
    const depMissing = searchDepMissing(store, listDep);
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

    return store.results
  }
}

export const storeDepartments = await generateDep();
