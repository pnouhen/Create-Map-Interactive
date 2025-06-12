import { storeRegion } from "../data/storeRegion";

const selectedRegion = document.getElementById("selectedRegions");

let regionList = storeRegion.results.sort((a, b) =>
  a.reg_name_upper.localeCompare(b.reg_name_upper)
);

regionList.forEach((region) => {
  const option = document.createElement("option");
  option.textContent = region.reg_name_upper;
  option.value = region.reg_code;
  option.id = region.reg_code;

  selectedRegion.appendChild(option);
});