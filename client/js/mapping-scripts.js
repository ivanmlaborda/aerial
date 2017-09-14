// Map
const map = L.map('map', {
  center: [41.249359, 1.602561],
  zoom: 16,
  minZoom: 3,
  maxZoom: 18
})

const baseHydda = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: ''
})
baseHydda.addTo(map)

const layer01 = L.tileLayer('data/google_tiles_01/{z}/{x}/{y}.png', {
  tms: true,
  opacity: 0.8,
  attribution: 'aerial data'
})

const layer02 = L.tileLayer('data/google_tiles_02/{z}/{x}/{y}.png', {
  tms: true,
  opacity: 0.8,
  attribution: 'aerial data'
})

// Calling the plugin
tilesCarousel()
