import { fetchData } from "./fetchData";

export async function getData(apiUrl, dataName) {
  let local = []
      if(!sessionStorage.getItem(dataName)){
        local = await fetchData(apiUrl, dataName)
      } else {
        local = JSON.parse(sessionStorage.getItem(dataName))
      }
      return local
}