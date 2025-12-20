import { getData } from "./getData";
import {
  saintBarthelemy,
  saintMartin,
  terresAustrales,
} from "./storeTerritoiresManuel";

export let storeRegion = [];

export const regionReady = async () => {
  let regions = await getData(
    `${import.meta.env.VITE_BASE_API}/api/regions`,
    "region"
  );
  if (regions !== undefined) {
    // Add regions witch aren't in the API
    regions.push(saintBarthelemy, saintMartin, terresAustrales);

    storeRegion = regions;
  }
};
