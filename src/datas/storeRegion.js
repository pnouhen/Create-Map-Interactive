import { getData } from "./getData";
import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeTerritoiresManuel";

export let storeRegion = [];

export const regionReady = async () => {
  const apiResponse = await getData(
    "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/regions-et-collectivites-doutre-mer-france@toursmetropole/records?limit=20&refine=year%3A%222025%22",
    "region"
  );

  if (apiResponse.results?.length > 0) {
    const regions = apiResponse.results;

    regions.push(saintBarthelemy, saintMartin, terresAustrales);

    storeRegion = regions;
  }
};

regionReady()

