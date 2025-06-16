import { getData } from "./getData";
import { addListDep } from "../lists/addListDep";
import { depSaintBarthelemy, depSaintMartin } from "./storeDepartmentsManuel";


 const apiListDep = await getData("https://geo.api.gouv.fr/departements", "listeDep")


   apiListDep.push(
     addListDep(depSaintBarthelemy.results[0].dep_code[0], depSaintBarthelemy.results[0].dep_name_upper),
     addListDep(depSaintMartin.results[0].dep_code[0], depSaintMartin.results[0].dep_name_upper)
   )
   
export const storeListDep = apiListDep