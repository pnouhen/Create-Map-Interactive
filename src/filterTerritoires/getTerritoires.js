import { searchRnfArea } from "../filter/searchRnfArea";
import { searchRnfName } from "../filter/searchRnfName";
import { generateClusters } from "../markers/generateClusters";


export function getTerritoire(data) {
    generateClusters(data)

    searchRnfName(data)

    searchRnfArea(data)
}