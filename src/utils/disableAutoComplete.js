export function disableAutoComplete(autoComplete) {
  autoComplete.classList.add("opacity-0", "pointer-events-none");

  if (window.innerWidth >= 1024 || window.innerWidth < 768) {
    autoComplete.classList.remove("ul-border-bottom");
  } else {
    autoComplete.classList.remove("ul-border-top");
  }
}
