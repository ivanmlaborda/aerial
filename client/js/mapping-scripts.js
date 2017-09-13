// Map
const map = L.map('map', {
  center: [39.6412454049, 2.67271237102],
  zoom: 15,
  minZoom: 3,
  maxZoom: 18
})

const Hydda_Full = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

Hydda_Full.addTo(map)
