export function showAutoComplete(autoComplete) {
  autoComplete.classList.remove("opacity-0", "pointer-events-none");
  
  if (window.innerWidth >= 1024 || window.innerWidth < 768) {
    autoComplete.classList.add("ul-border-bottom");
  } else {
    autoComplete.classList.add("ul-border-top");
  }
}
