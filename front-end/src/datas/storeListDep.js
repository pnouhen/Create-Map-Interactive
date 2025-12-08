import { getData } from "./getData";

export async function storeListDep() {
  const apiListDep = await getData(
    "https://geo.api.gouv.fr/departements",
    "listeDep"
  );
  if (apiListDep) {
    return apiListDep;
  }
}
