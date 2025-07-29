export function disableAutoComplete(autoComplete) {
  autoComplete.classList.add("opacity-0", "pointer-events-none");
  autoComplete.classList.remove("ul-border");
}
