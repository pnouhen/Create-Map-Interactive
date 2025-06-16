import { storeRnF } from "../datas/storeRnF";
import { generateMarkerInput } from "../searchRnf/generateMarkerInput.js";
import { activeSuggestionRnf } from "../searchRnf/activeSuggestionRnf.js";
import { generateListRnf } from "../searchRnf/generateListRnf.js";

const searchRnf = document.getElementById("searchRnf");
const input = searchRnf;

searchRnf.addEventListener("input", () => {
  generateListRnf(input);

  activeSuggestionRnf(input);

  generateMarkerInput(input.value);
});
