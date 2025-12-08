import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeTerritoiresManuel";
import { getData } from "./getData";

export let storeDepartments = [];

export async function departmentReady() {
  let store = [];
  store = await getData(
    `${import.meta.env.VITE_BASE_API}/api/departments`,
    "dep"
  );

  if (store) {
    // Add departments witch aren't in all API
    store.push(saintBarthelemy);
    store.push(saintMartin);
    store.push(terresAustrales);

    storeDepartments = store.sort((a, b) =>
      a.dep_code[0].localeCompare(b.dep_code[0])
    );
  }
}

departmentReady();
