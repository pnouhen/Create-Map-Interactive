import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeTerritoiresManuel";
import { searchDepMissing } from "../storeDepartments/searchDepMissing";
import { recoverDepMap } from "../storeDepartments/recoverDepMap";
import { getData } from "./getData";
import { storeListDep } from "./storeListDep";

export let storeDepartments = [];

export async function departmentReady() {
  let store = [];
  store = await getData(
    "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/departements-et-collectivites-doutre-mer-france@toursmetropole/records?limit=100",
    "dep"
  );

  const listDep = await storeListDep();

  if (store && listDep) {
    // Filtrer and add departments whitch aren't in the API
    const depMissing = searchDepMissing(store, listDep);
    const newDep = await recoverDepMap(depMissing);

    if (newDep) {
      store.results.push(newDep.results[0]);

      // Add departments witch aren't in all API
      store.results.push(saintBarthelemy);
      store.results.push(saintMartin);
      store.results.push(terresAustrales);

      storeDepartments = store.results.sort((a, b) =>
        a.dep_code[0].localeCompare(b.dep_code[0])
      );
    }
  }
}

departmentReady();
