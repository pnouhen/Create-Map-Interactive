export function createOptionTitle(select, texte) {
  const option = document.createElement("option");
  option.textContent = texte;
  option.value = "";
  option.disabled = true;
  option.selected = true;
  option.hidden = true;

  select.appendChild(option);
}
