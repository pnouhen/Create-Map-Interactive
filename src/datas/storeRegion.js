import { getData } from "./getData";

export const storeRegion = await getData(
  "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/regions-et-collectivites-doutre-mer-france@toursmetropole/records?limit=20&refine=year%3A%222025%22",
  "region"
);
