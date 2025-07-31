export async function fetchDepartmentsMissing(depName) {
  try {
    const url = `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/departements-et-collectivites-doutre-mer-france@toursmetropole/records?refine=dep_name:"${depName}"`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Catch :", error.message);
    return null;
  }
}