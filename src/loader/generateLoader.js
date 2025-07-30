import { generateMap } from "../maps/generateMap";
import {storeRnf} from "../datas/storeRnf"

// // Wait until the storeRnf array is not empty
// const waitForStore = new Promise((resolve) => {
//   const interval = setInterval(() => {
//     // Check if storeRnf has data
//     if (storeRnf.length > 0) {
//       clearInterval(interval);
//       resolve();
//     }
//   }, 100); 
// });

// // Wait for both the map and the store to be ready
// Promise.all([generateMap(), waitForStore]).then(() => {
//   loader.classList.add("opacity-0");
//   loader.classList.remove("opacity-100");

//   setTimeout(() => {
//     loader.classList.add("hidden");
//   }, 500);
// });
