import { coordinateMarker } from "../elements/coordinateMarker";
import { linkRnnRegion } from "../elements/linkRnnRegion";
import { storeRegion } from "./storeRegion";
import * as turf from "@turf/turf";

const rnf = linkRnnRegion();

let markersN = rnf.filter((el) => el.region.length === 0);

const newTable = markersN.map((rnf) => {
  const rnfCoords = coordinateMarker(rnf);
  const distanceMarker = storeRegion.results
    .map((region) => {
      const regionCoords = region.geo_point_2d;
      const from = turf.point(rnfCoords);
      const lat = regionCoords.lat;
      const lng = regionCoords.lon;
      const to = turf.point([lat, lng]);
      const distance = turf.distance(from, to);
      return { region: region.reg_name_upper, distance: distance };
    })
    .sort((a, b) => a.distance - b.distance)
  return {
    coordinate: rnfCoords,
    id: rnf.id,
    bbox: rnf.bbox,
    properties: rnf.properties,
    geometry: rnf.geometry,
    region: distanceMarker[0].distance < 1500 ? distanceMarker[0].region : null
  };
});

// Corriger avec le département : St barth, Saint martin, Baie de l'aiguillon
// Aucune idée : Archipel des glorieuses

/* A faire :
    Créer un nouveau store avec les département 
    lier dép avec Régions
    Associer chaque Rn a son département via les deux systemes
    refaire les fonctions avec les départements
    Pareil avec les régions en :
    Regler ses beugs pour les régions : 
     Saint-Barthélemy GUADELOUPE  → devrait être "Saint-Barthélemy"
     Saint-Martin GUADELOUPE  → devrait être "Saint-Martin"
     Archipel des Glorieuses MAYOTTE  → devrait être "TAAF"
     Baie De L'Aiguillon (Charente-Maritime) PAYS DE LA LOIRE  → devrait être "NOUVELLE AQUITAINE"
*/