export async function fetchDepartment(dep) {

  try {
    const response = await fetch(`https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/departements-et-collectivites-doutre-mer-france@toursmetropole/records?refine=dep_name%3A%22${dep}%22`);

    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Catch :", error.message);
  }
}
