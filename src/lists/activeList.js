export function activeList(autoComplete) {
    const arrayLi = autoComplete.querySelectorAll(".li");
    if (arrayLi.length > 0) {
      autoComplete.classList.remove("ul");
      autoComplete.classList.add("ulActive");
    }
}
