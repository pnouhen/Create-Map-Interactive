import { getData } from "./getData";
import { addListDep } from "../lists/addListDep";
import { saintBarthelemy, saintMartin, terresAustrales } from "./storeDepartmentsManuel";


 const apiListDep = await getData("https://geo.api.gouv.fr/departements", "listeDep")


   apiListDep.push(
     addListDep(saintBarthelemy.dep_code[0], saintBarthelemy.dep_name_upper),
     addListDep(saintMartin.dep_code[0], saintMartin.dep_name_upper),
     addListDep(terresAustrales.dep_code[0], terresAustrales.dep_name_upper)
   )
   
export const storeListDep = apiListDep