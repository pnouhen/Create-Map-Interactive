import { handleOutside } from "../utils/handleOutside";
import { handleButtonAnimation } from "./handleButtonAnimation";

export function onButtonClick(button, search, autoComplete) {
  button.classList.add("cursor-pointer");
  handleButtonAnimation(search, autoComplete);
  handleOutside(autoComplete);
}
