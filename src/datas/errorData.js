export function errorData() {
  const loader = document.getElementById("loader");
  const message = loader.querySelector("p");
  const points = loader.querySelectorAll("div");
  console.log(message);

  message.textContent = "Le serveur ne répond pas pour le moment.";
  points.forEach((point) => point.remove());
}
