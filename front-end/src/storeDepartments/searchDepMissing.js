export function searchDepMissing(data, listDep) {
  const codeDepList = data.results.map((depApi) => depApi.dep_code[0]).sort();
  return listDep.filter((depList) => !codeDepList.includes(depList.code));
}
