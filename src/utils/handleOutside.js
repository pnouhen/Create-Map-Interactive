import { disableAutoComplete } from "../utils/disableAutoComplete";

export function handleOutside(autoComplete) {
  document.addEventListener("click", () => {
    disableAutoComplete(autoComplete);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Tab") {
    disableAutoComplete(autoComplete);
    }
  });
}
