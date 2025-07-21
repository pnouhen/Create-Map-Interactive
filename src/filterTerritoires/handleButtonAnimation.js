const searchTerritoireAutoCompleteAll = document.querySelectorAll(
  ".searchTerritoireAutoComplete"
);

export function handleButtonAnimation(element, autocomplete) {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    searchTerritoireAutoCompleteAll.forEach((searchTerritoireAutoComplete) => {
      if (searchTerritoireAutoComplete === autocomplete) {
        autocomplete.classList.toggle("hidden");
      } else {
        searchTerritoireAutoComplete.classList.add("hidden");
      }
    });
  });
}
