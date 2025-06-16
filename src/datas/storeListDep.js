import { getData } from "./getData";
import { addListDep } from "../lists/addListDep";
import { saintBarthelemy, saintMartin, terresAustrales } from "./storeDepartmentsManuel";


 const apiListDep = await getData("https://geo.api.gouv.fr/departements", "listeDep")


   apiListDep.push(
     addListDep(saintBarthelemy.results[0].dep_code[0], saintBarthelemy.results[0].dep_name_upper),
     addListDep(saintMartin.results[0].dep_code[0], saintMartin.results[0].dep_name_upper),
     addListDep(terresAustrales.results[0].dep_code[0], terresAustrales.results[0].dep_name_upper)
   )
   
export const storeListDep = apiListDep