const loader = document.getElementById("loader");

export function generateLoader() {
  loader.classList.add("opacity-0");
  loader.classList.remove("opacity-100");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 300);
}
