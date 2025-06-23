import { fetchDepartment } from "./fetchDepartment";

export async function recoverDepMap(data) {
  let nameDepartement = null;

  nameDepartement = encodeURIComponent(data.nom);

  const departement = await fetchDepartment(nameDepartement);

  if (departement.total_count > 0) {
    return departement.results[0];
  }
}
