export function handleOutside(autoComplete) {
  const closeAutocomplete = () => {
    autoComplete.classList.add("hidden")
  };

  document.addEventListener("click", () => {
    closeAutocomplete();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Tab") {
      closeAutocomplete();
    }
  });
}
