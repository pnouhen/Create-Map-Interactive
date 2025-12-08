import { disableAutoComplete } from "../utils/disableAutoComplete";

export function handleOutside(autoComplete) {
  document.addEventListener("click", () => {
    if (!autoComplete.classList.contains("opacity-0"))
      disableAutoComplete(autoComplete);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Tab") {
      if (!autoComplete.classList.contains("opacity-0"))
        disableAutoComplete(autoComplete);
    }
  });
}
