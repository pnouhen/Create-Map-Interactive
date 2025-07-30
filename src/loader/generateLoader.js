import { generateMap } from "../maps/generateMap";
import { storeRnf } from "../datas/storeRnf";

// Lancer la génération de la carte tout de suite
const mapReady = generateMap();

// Attendre que le store soit prêt (vérifie toutes les 300ms max 5s)
const waitForStore = new Promise((resolve) => {
  let waited = 0;
  const maxWait = 5000;
  const interval = setInterval(() => {
    if (storeRnf.length > 0 || waited >= maxWait) {
      clearInterval(interval);
      resolve();
    }
    waited += 300;
  }, 300);
});

// Quand carte + données sont prêtes, lancer l’animation du loader
Promise.all([mapReady, waitForStore]).then(() => {
  requestAnimationFrame(() => {
    loader.classList.add("opacity-0");
    loader.classList.remove("opacity-100");

    setTimeout(() => {
      loader.classList.add("hidden");
    }, 400); // animation plus courte
  });
});
