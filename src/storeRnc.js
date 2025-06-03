import { getData } from "./getData";

export const storeRnc = await getData("https://apicarto.ign.fr/api/nature/rnc", "dataRnc")
