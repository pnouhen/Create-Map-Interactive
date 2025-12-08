import { disableAutoComplete } from "../utils/disableAutoComplete";
import { showAutoComplete } from "../utils/showAutoComplete";

const arrayList = document.querySelectorAll(".ul");

export function handleButtonAnimation(element, autoComplete) {
  element.addEventListener("click", (e) => {
    e.stopPropagation();

    // Display the autocomplete while hidden others
    arrayList.forEach((ul) => {
      if(ul === autoComplete && ul.classList.contains("opacity-0")) {
        showAutoComplete(ul)
      } else {
        disableAutoComplete(ul)
      }
    })
  });
}
