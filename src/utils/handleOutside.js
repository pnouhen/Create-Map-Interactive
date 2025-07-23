import { disableAutoComplete } from "./disableAutoComplete";

export function handleOutside(autoComplete) {
  const closeAutocomplete = () => {
    disableAutoComplete(autoComplete);
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
