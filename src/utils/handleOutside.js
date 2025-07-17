import { disableList } from "../lists/disableList";

export function handleOutside(autoComplete, state) {
  const closeAutocomplete = () => {
    disableList(autoComplete);
    if (state) {
      state.open = false;
    }
  };

  document.addEventListener("click", () => {
    closeAutocomplete();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAutocomplete();
    }
  });
}
