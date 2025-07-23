import { navigateList } from "../lists/navigateList";
import { handleButtonText } from "./handleButtonText";

export async function filterTerritoires(
  arrayLi,
  data,
  button,
  text,
  autoComplete,
  onClickTerritoire
) {

  arrayLi.forEach((territoire) => {
    handleButtonText(territoire, text);
    territoire.addEventListener("click", () => {
      onClickTerritoire();
    });
  });

  navigateList(button, arrayLi, autoComplete, text, data, onClickTerritoire);
}
