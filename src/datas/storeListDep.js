import { addListDep } from "../filterDepartments/addListDep";
import { getData } from "./getData";
import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeTerritoiresManuel";

export async function storeListDep() {
  const apiListDep = await getData(
    "https://geo.api.gouv.fr/departements",
    "listeDep"
  );
  if (apiListDep) {
    apiListDep.push(
      addListDep(saintBarthelemy.dep_code[0], saintBarthelemy.dep_name_upper),
      addListDep(saintMartin.dep_code[0], saintMartin.dep_name_upper),
      addListDep(terresAustrales.dep_code[0], terresAustrales.dep_name_upper)
    );
    return apiListDep;
  }
}
