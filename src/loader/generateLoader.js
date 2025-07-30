const loader = document.getElementById("loader");

function generateLoader() {
  setTimeout(() => {
    loader.classList.add("opacity-0");
    loader.classList.remove("opacity-100");
  }, 1500);

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1800);
}

generateLoader();
