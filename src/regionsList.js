import { storeRegion } from "./storeRegion";

// Recovery the name of the region and sort alphabetically
const regionList = storeRegion.results
  .map((region) => region.reg_name_upper)
  .sort((a, b) => a.localeCompare(b));

const selectedRegion = document.getElementById("selectedRegions");

regionList.forEach((name) => {
  const optionName = document.createElement("option");
  optionName.textContent = name;
  optionName.value = name.replace(/\s+/g, "-");
  selectedRegion.appendChild(optionName);
});



