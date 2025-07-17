export function generateLiAll(autoComplete, LiName, LiID) {
  const li = document.createElement("li");
  li.classList.add("li");
  li.textContent = LiName;
  li.id = LiID;
  li.value = 0

  autoComplete.appendChild(li);
}
