export function searchWithInput(input, search) {
  if (input._customSearchRnfValue) {
    input.removeEventListener("input", input._customSearchRnfValue);
  }

  input._customSearchRnfValue = search;
  
  input.addEventListener("input", search);
}
