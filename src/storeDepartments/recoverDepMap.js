import { fetchDepartmentsMissing } from "./fetchDepartmentsMissing";

export async function recoverDepMap(dep) {
  const encodedName = encodeURIComponent(dep[0].nom);
  const departement = await fetchDepartmentsMissing(encodedName);

  return departement;
}
