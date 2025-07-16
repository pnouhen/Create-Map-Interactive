import { disableList } from "./disableList";

export function handleOutsideClick(autoComplete, state) {
  document.addEventListener("click", () => {
    disableList(autoComplete);
    if (state) {
      state.open = false;
    }
  });
}
