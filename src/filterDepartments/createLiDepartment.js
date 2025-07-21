

export function createLiDepartment(department, autoComplete) {
    const li = document.createElement("li");
        li.classList.add("li");
        li.textContent = department.dep_code + " - " + department.dep_name_upper;
        li.id = department.dep_code;

        autoComplete.appendChild(li);
}