// Carousel
let tileId = ''
$(document).ready(() => {
  $('#carouselTiles').on('slide.bs.carousel', (e) => {
    tileId = e.relatedTarget.id
    map.removeLayer(activeLayer)
    activeLayer = layers[tileId]
    activeLayer.addTo(map)
  })
})
