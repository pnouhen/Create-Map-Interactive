export function showAutoComplete(autoComplete) {
  autoComplete.classList.remove("opacity-0", "pointer-events-none");

  if(autoComplete.classList.contains("js-bottom")) {
    autoComplete.classList.add("border-bottom")
  }

  if(autoComplete.classList.contains("js-top")) {
    autoComplete.classList.add("border-top")
  }
}
