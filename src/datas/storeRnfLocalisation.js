import { searchName } from "../storeRnfLocFunctions/searchName";
import { searchMarkerInPoly } from "../storeRnfLocFunctions/searchMarkerInPoly";
import { storeDepartments } from "./storeDepartments";
import { storeRnF } from "./storeRnF";

console.log(storeRnF[167])

console.log(storeDepartments[27].results[0])

let storeRnfLocalisation = storeRnF

// Le filtre pour les polygon. Il ne faut plus qu'activer la recherche automatique.
const shearch = searchMarkerInPoly(storeRnfLocalisation[167])

console.log(shearch)

storeRnfLocalisation.forEach((rnf) => {
    if(rnf.dep_code > 1){
        console.log(rnf.properties.nom)
    }
})


// A mettre avant le point le plus proche
// searchName(storeRnfLocalisation)

// console.log(storeRnfLocalisation)

