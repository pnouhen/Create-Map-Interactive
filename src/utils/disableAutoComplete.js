export function disableAutoComplete(autoComplete) {
  if (autoComplete.classList.contains("js-bottom")) {
    autoComplete.classList.remove("border-bottom");
    autoComplete.classList.add("opacity-0", "pointer-events-none");
  }

  if (autoComplete.classList.contains("js-top")) {
    autoComplete.classList.remove("border-top");
    autoComplete.classList.add("opacity-0", "pointer-events-none");
  }
}
