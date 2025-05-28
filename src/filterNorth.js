import { generateClusters } from "./generateClusters";

export function filterNorth(store, dataRnn, map) {
  //  The filter
  function filterLatNorth(value) {
    return value >= 46.387255 && value <= 52;
  }
  
  // When the input is checked, the font-weight label increase and the filter activates 
  const RnnNorthMapCheck = document.getElementById("RnnNorthInput");
  const RnnNorthMapLabel = document.getElementById("RnnNorthLabel");
  
  RnnNorthMapCheck.addEventListener("click", () => {
    RnnNorthMapLabel.classList.toggle("inputActive");
    if(RnnNorthMapCheck.checked){
      store = [];
      store = dataRnn.features.filter((el) => filterLatNorth(el.bbox[1]))
    } else {
      store= dataRnn.features
    }
    generateClusters(store, map);
  }); 
}