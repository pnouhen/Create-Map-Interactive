import { generateMap } from "./generateMap";

let sharedMap = null;

export function getMapInstance() {
  if (!sharedMap) {
    sharedMap = generateMap();
  }
  return sharedMap;
}