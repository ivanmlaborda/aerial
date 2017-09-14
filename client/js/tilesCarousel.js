// tilesCarousel (Call this function on your map script after layers definition)
const tilesCarousel = () => {
  let layers = {}
  let activeLayer = ''
  layers.layer01 = layer01
  layers.layer02 = layer02
  activeLayer = layer01
  layers.layer01.addTo(map)
  $(document).ready(() => {
    $('#carouselTiles').on('slide.bs.carousel', (e) => {
      let tileId = e.relatedTarget.id
      map.removeLayer(activeLayer)
      activeLayer = layers[tileId]
      activeLayer.addTo(map)
    })
  })
}
