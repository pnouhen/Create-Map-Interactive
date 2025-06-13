import { fetchDepartment } from "./fetchDepartment";

export async function recoverDepMap(data) {
let nameDepartement = null

 nameDepartement = encodeURIComponent(data.nom)

 const departement = await fetchDepartment(nameDepartement);

  return departement
}