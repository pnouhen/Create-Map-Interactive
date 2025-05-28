import { fetchAPI } from "./fetchAPI";

export async function getData(apiUrl, dataName) {
     // For recover data
      let local = []
      if(!localStorage.getItem(dataName)){
        local = await fetchAPI(apiUrl, dataName)
      } else {
        local = JSON.parse(localStorage.getItem(dataName))
      }
      return local

}