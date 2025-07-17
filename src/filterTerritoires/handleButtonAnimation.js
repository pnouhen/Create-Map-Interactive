import { activeList } from "../lists/activeList"
import { disableList } from "../lists/disableList"

export function handleButtonAnimation(input, state, autocomplete) {
input.addEventListener("click", (e) => {
    e.stopPropagation()

    state.open = !state.open
    if(state.open) {
        activeList(autocomplete)
    } else {
        disableList(autocomplete)
    }
})
}