export function cleanInputList(previousData, data, autoComplete, input) {
  if (data !== previousData) {
    autoComplete.innerHTML = "";
    input.value = "";
    previousData = data;
  }
}
