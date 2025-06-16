import { getData } from "./getData";
import { depSaintBarthelemy, depSaintMartin } from "./storeDepartmentsManuel";

  const apiResponse = await getData(
  "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/regions-et-collectivites-doutre-mer-france@toursmetropole/records?limit=20&refine=year%3A%222025%22",
  "region"
);

const regions = apiResponse.results;

regions.push(depSaintBarthelemy.results[0]);

regions.push(depSaintMartin.results[0]);

export const storeRegion = regions;