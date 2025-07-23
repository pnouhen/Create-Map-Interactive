import { showAutoComplete } from "../utils/showAutoComplete"

export function returnAutoComplete(input, autoComplete) {
input.addEventListener("click", (e) => {
    e.stopPropagation()

    const selectRnf = autoComplete.querySelectorAll(".li")
    if(selectRnf.length > 0) {
      showAutoComplete(searchRnfAutoComplete)
    }
  })
}