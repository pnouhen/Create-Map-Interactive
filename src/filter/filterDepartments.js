import { storeDepartments } from "../datas/storeDepartments";
import { generateListDep } from "../lists/generateListDepartment";
import { filterTerritoires } from "../filterTerritoires/filterTerritoires";
import { generateDepartments } from "../filterTerritoires/generateDepartments";

const searchDepartment = document.getElementById("searchDepartment");
const searchDepartmentButton = searchDepartment.querySelector("button");
const searchDepartmentText = searchDepartment.querySelector(".p");
const searchDepartmentAutoComplete = searchDepartment.querySelector(
  ".searchTerritoireAutoComplete"
);

async function filterDepartments() {

 if (storeDepartments.length > 0) {
generateListDep(searchDepartmentAutoComplete, storeDepartments)

const onClickTerritoire = () => generateDepartments(searchDepartment)

  filterTerritoires(
    storeDepartments,
    searchDepartment,
    searchDepartmentButton,
    searchDepartmentText,
    searchDepartmentAutoComplete,
    onClickTerritoire
  );
} else {
  button.classList.add("button-territoire-inactive");
}
}

filterDepartments()
