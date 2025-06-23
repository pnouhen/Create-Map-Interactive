import { getData } from "./getData";
import { saintBarthelemy, saintMartin, terresAustrales } from "./storeDepartmentsManuel";

  const apiResponse = await getData(
  "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/regions-et-collectivites-doutre-mer-france@toursmetropole/records?limit=20&refine=year%3A%222025%22",
  "region"
);

const regions = apiResponse.results;

regions.push(saintBarthelemy);

regions.push(saintMartin);
regions.push(terresAustrales);

export const storeRegion = regions;