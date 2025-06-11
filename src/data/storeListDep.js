import { getData } from "./getData";


export const storeListDep = await getData("https://geo.api.gouv.fr/departements", "listeDep")