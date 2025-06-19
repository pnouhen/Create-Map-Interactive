export function navigateNumberArray(input, data){
    const numberArray = data.map((el) => Number(el.surface))

    const ascendingOrder  = [... numberArray].sort((a,b) => a - b)

    const descendingOrder  = [... numberArray].sort((a,b) => b - a)

    input.addEventListener("keydown", (e) => {
        console.log(e)
        if(e.key === "ArrowUp") {
            console.log("Up")
        }

    })
}