import { activeList } from "../utils/activeList"
import { disableList } from "../utils/disableList"

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