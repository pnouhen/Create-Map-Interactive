export function removeOptions(select) {
  [...select.options].forEach((option) => option.remove());
}
