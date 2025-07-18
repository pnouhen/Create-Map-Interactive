import { navigateList } from "../lists/navigateList";
import { handleOutside } from "../utils/handleOutside";
import { handleButtonAnimation } from "./handleButtonAnimation";
import { handleButtonText } from "./handleButtonText";

let state = { open: false };

export async function filterTerritoires (data, search, button, text, autoComplete, onClickTerritoire) {
    button.classList.add("button-territoire-active");
    handleButtonAnimation(search, state, autoComplete);
    handleOutside(autoComplete, state);

    const arrayLi = autoComplete.querySelectorAll(".li");
    arrayLi.forEach((territoire) => {
      handleButtonAnimation(territoire, state, autoComplete);
      handleButtonText(territoire, text);

      territoire.addEventListener("click", () => {
        onClickTerritoire();
      });
    });

    navigateList(
      button,
      arrayLi,
      autoComplete,
      text,
      data
    );
}