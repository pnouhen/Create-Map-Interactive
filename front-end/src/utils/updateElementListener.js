export function updateElementListener(element, ecoute, functionFix) {
  // Actualisation EventListener
  if (element._attache) {
    element.removeEventListener(ecoute, element._attache);
  }
  element._attache = functionFix;
  element.addEventListener(ecoute, functionFix);
}
