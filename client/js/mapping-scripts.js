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
tilesCarousel(layer01, layer02)

// Create vertical control
const verticalCtrl = L.control()
verticalCtrl.setPosition('topleft')
verticalCtrl.onAdd = function () {
  const container = L.DomUtil.create('div', ' leaflet-bar leaflet-bar-vertical ', this._control)
  const animate = L.DomUtil.create('a', 'animate-button', container)
  animate.id = 'animate-button'
  animate.title = 'Start/Stop layers animation'
  animate.role = 'button'
  // animate.href = ' '
  animate.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
  const info = L.DomUtil.create('a', 'info-button', container)
  info.id = 'info-button'
  info.title = 'Info about the autor'
  info.role = 'button'
  // info.href = ' '
  info.innerHTML = '<i class="fa fa-info" aria-hidden="true"></i>'

  return container
}

verticalCtrl.addTo(map)



let animStatus = false
$('#animate-button').on('click', function (e) {
  if (!animStatus) {
    animStatus = true
    console.log('Initiating animation')
    $('.carousel').carousel({
      interval: 5000
    })
    $('.carousel').carousel('cycle')
  } else {
    animStatus = false
    console.log('Pausing animation')
    $('.carousel').carousel({
      interval: false
    })
    $('.carousel').carousel('pause')
  }
  console.log('animate clic')
})

$('#info-button').on('click', function (e) {
  console.log('info clic')
  $('#infoModal').modal()
})
