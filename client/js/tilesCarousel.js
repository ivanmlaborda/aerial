// tilesCarousel (Call this function on your map script after layers definition)
// (put the layers variables names as function parameters, first layer will be the default layer shown in the carousel)
const tilesCarousel = (...lyrs) => {
  let activeLayer = lyrs[0]
  activeLayer.addTo(map)
  let layers = {}
  let iCount = 1
  lyrs.forEach(lyr => {
    let layerId = 'layer' + iCount
    iCount++
    layers[layerId] = lyr
  })
  setTimeout(() => $('.carousel').carousel('pause'), 1000)
  $(document).ready(() => {
    $('#carouselTiles').on('slide.bs.carousel', (e) => {
      let tileId = e.relatedTarget.id
      map.removeLayer(activeLayer)
      activeLayer = layers[tileId]
      activeLayer.addTo(map)
    })
  })
}
