export function createOptionAll(select, texte, value) {
  const option = document.createElement("option");
  option.textContent = texte;
  option.value = value;

  select.appendChild(option);
}
