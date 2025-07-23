import { handleOutside } from "../utils/handleOutside";
import { handleButtonAnimation } from "./handleButtonAnimation";

export function onButtonClick(button, search, autoComplete) {
  button.classList.add("button-territoire-active");
  handleButtonAnimation(search, autoComplete);
  handleOutside(autoComplete);
}
