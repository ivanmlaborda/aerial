// Map
const map = L.map('map', {
  center: [41.249359, 1.602561],
  zoom: 15,
  minZoom: 3,
  maxZoom: 18
})

const baseHydda = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

const layer01 = L.tileLayer('data/google_tiles_01/{z}/{x}/{y}.png', {
  tms: true,
  opacity: 0.8,
  attribution: "aerial data"
})

const layer02 = L.tileLayer('data/google_tiles_02/{z}/{x}/{y}.png', {
  tms: true,
  opacity: 0.8,
  attribution: "aerial data"
})

const baseMaps = {
  'Base Hydda': baseHydda
}

const overlays = {
  'Layer 01': layer01,
  'Layer 02': layer02
}

const controlLayersOptions = {
  position: 'topright'
}

L.control.layers(baseMaps, overlays, controlLayersOptions).addTo(map)
