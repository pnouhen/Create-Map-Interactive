import { fetchLs } from "./fetchLs";

export async function getData(apiUrl, dataName) {
  let local = []
      if(!localStorage.getItem(dataName)){
        local = await fetchLs(apiUrl, dataName)
      } else {
        local = JSON.parse(localStorage.getItem(dataName))
      }
      return local
}
