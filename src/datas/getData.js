import { fetchAPI } from "./fetchAPI";

export async function getData(apiUrl, dataName) {
  // For recover data
  const data = await fetchAPI(apiUrl, dataName);
  localStorage.setItem(dataName, JSON.stringify(data));

  let local = [];
  if (!localStorage.getItem(dataName)) {
    local = data
  } else {
    local = JSON.parse(localStorage.getItem(dataName));
  }
  return local;
}
