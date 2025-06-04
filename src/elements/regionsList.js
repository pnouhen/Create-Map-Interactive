import { storeRegion } from "../data/storeRegion";

// Recovery the name of the region and sort alphabetically
export let regionList = [];

storeRegion.results.map((el) => {
  const regionData = {
    name: el.reg_name_upper,
    id: el.reg_name_upper.replace(/\s+/g, "-"),
    bbox: el.geo_point_2d,
  };
  regionList.push(regionData);
});

regionList.sort((a, b) => a.name.localeCompare(b.name));

const selectedRegion = document.getElementById("selectedRegions");

regionList.forEach((el) => {
  const optionName = document.createElement("option");
  optionName.textContent = el.name;
  optionName.value = el.id;
  selectedRegion.appendChild(optionName);
});
