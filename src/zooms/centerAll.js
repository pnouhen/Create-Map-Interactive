import { generateClusters } from "../markers/generateClusters";

export function centerAll(data){
   const newSetview = {
       lat: 3.6446980358673993,
       lng: 3.7168641603516406,
       zoom: 3
     };
   
     generateClusters(data, newSetview) 
}