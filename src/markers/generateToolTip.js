// Generate ToolTip in generatePoint.js
import L from "leaflet";
import { storeRegion } from "../datas/storeRegion";
import { storeDepartments } from "../datas/storeDepartments";

export function generateToolTip(data, marker, map) {
  // Search marker in data
  const id = marker.target.id;
  const markerSelect = data.find((item) => item.id === id);

  // Search region in storeRegion
  let regionName = "";
  if (storeRegion.length > 0) {
    regionName = storeRegion.filter(
      (region) => region.reg_code[0] === markerSelect.reg_code[0]
    );
  }

  // Search department in storeDepartment
  let departmentName = "";
  if (storeDepartments.length > 0) {
    departmentName = storeDepartments.filter(
      (department) => department.dep_code[0] === markerSelect.dep_code[0]
    );
  }

  // Create ToolTip
  const popup = L.popup();
  popup
    .setLatLng(marker.latlng)
    .setContent(
      `<div class="toolType-content">
      <h3 class="toolType-title">
        ${markerSelect.properties.nom.toString()}
      </h3>

      ${
        regionName
          ? `<div class="toolType-info">
      <p class="toolType-sbTitle">Région :</p>
      <p>${regionName[0].reg_name[0]}</p>
      </div>`
          : ""
      }
       ${
        departmentName
          ? `<div class="toolType-info">
      <p class="toolType-sbTitle">Département :</p>
      <p>${departmentName[0].dep_name[0]}</p>
      </div>`
          : ""
      }

      <div class="toolType-info">
        <p class="toolType-sbTitle">Surface : </p>
        <p>${Number(markerSelect.surface).toLocaleString()} km²</p>
      </div>
      
        <a href="${markerSelect.properties.url.toString()}">Cliquez ici pour plus d'information</a>
        </div>`
    )
    .addTo(map);
}
