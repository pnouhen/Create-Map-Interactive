import { generateClusters } from "./generateClusters";

export function filterNorth(store, dataRnn, map) {
   function filterLatNorth(value) {
    return value >= 46.387255 && value <= 52;
  }

  const RnnNorthMapCheck = document.getElementById("RnnNorthInput");
  const RnnNorthMapLabel = document.getElementById("RnnNorthLabel");

  RnnNorthMapCheck.addEventListener("click", () => {
    RnnNorthMapLabel.classList.toggle("inputActive");
    if(RnnNorthMapCheck.checked){
      store = [];
      store = dataRnn.filter((el) => filterLatNorth(el.bbox[1]))
    } else {
      store= dataRnn
    }
    generateClusters(store, map);
  }); 
}