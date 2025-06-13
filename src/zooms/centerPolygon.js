
import { newSetview } from "../maps/mapSetviewDefault"
import { calculZoom } from "./calculZoom"

export function centerPolygon(data, map) {
    const lat= data.geo_point_2d.lat
    const lng = data.geo_point_2d.lon
    const zoom = calculZoom(data, map)

  newSetview(lat, lng, zoom)
}