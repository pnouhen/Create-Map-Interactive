import { storeListDep } from "../datas/storeListDep";

export function searchDepMissing(data) {
  const codeDepList = data.results.map((depApi) => depApi.dep_code[0]).sort();
  return storeListDep.filter((depList) => !codeDepList.includes(depList.code));
}
