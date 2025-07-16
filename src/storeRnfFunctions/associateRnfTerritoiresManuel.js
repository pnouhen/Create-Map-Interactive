
export function associateRnfTerritoiresManuel(data) {
   data.map((rnf) => {
       // Bad attribution with associateMarkersInPoint
       if (rnf.properties.nom.includes("Estuaire De La Seine")) {
         rnf.dep_code = "76";
         rnf.reg_code = "28";
       }
       if (rnf.properties.nom.includes("Archipel des Glorieuses")) {
         rnf.dep_code = "984";
         rnf.reg_code = "984";
       }
       if (rnf.properties.nom.includes("Charente-Maritime")) {
         rnf.dep_code = "17";
         rnf.reg_code = "75";
       }
     }); 
}