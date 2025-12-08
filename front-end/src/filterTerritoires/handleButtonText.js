export function handleButtonText(li, text) {
  li.addEventListener("click", () => {
    text.textContent = li.textContent
    text.id = li.id
  });
}
