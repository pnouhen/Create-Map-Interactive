import { fetchDepartmentsMissing } from "./fetchDepartmentsMissing";

export async function recoverDepMap(data) {
  let nameDepartement = null;

  nameDepartement = encodeURIComponent(data.nom);

  const departement = await fetchDepartmentsMissing(nameDepartement);

  if (departement.total_count > 0) {
    return departement.results[0];
  }
}
