import { fetchDepartment } from "../data/fetchDepartment";
import { storeRegion } from "../data/storeRegion";
import { storeListDep } from "../data/storeListDep";
import { recoverDepMap } from "./recoverDepMap";
import { linkRegionDep } from "./linkRegionDep";

export async function data() {
  let data = [];

  console.log(storeListDep[63])
  console.log(storeRegion.results[17])

  const region = linkRegionDep(storeRegion.results[17])

  console.log(region)

  return data;
}

data();

/*
Pour récuperer le polygon via departement
  // const departement = await recoverDepMap(storeListDep[2])
  // console.log(departement)
*/ 
