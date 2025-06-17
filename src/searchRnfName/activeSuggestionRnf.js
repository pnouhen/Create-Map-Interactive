import { generateMarkerInput } from "./generateMarkerInput"

export function activeSuggestionRnf(input, data){
    const selectRnf = document.querySelectorAll(".selectRnf")
    if(input.value.length > 2){
        selectRnf.forEach((li) => {
            li.addEventListener("click", () => {
            input.value = ""
            input.value = li.textContent

            generateMarkerInput(li.textContent, data) 
        })
        })

    }
}