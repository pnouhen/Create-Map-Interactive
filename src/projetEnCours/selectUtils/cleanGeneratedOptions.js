export function cleanGeneratedOptions(select) {
  [...select.options].forEach((option) => option.remove());
}
