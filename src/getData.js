import { fetchAPI } from "./fetchAPI";

export async function getData() {
     // For recover data
      let local = []
      if(!localStorage.getItem("dataRnn")){
        local = await fetchAPI()
      } else {
        local = JSON.parse(localStorage.getItem("dataRnn"))
      }
    
      return local.features

}