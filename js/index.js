

// let myMap = L.map("map").setView([37.61, -122.011], 10);

// let sfo_marker = L.marker([37.618, -122.375]).addTo(myMap);
// let oak_marker = L.marker([37.710, -122.224]).addTo(myMap);
// let sjc_marker = L.marker([37.361, -121.928]).addTo(myMap);

// L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//     // Attribution is obligatory as per copyright!
// 	maxZoom: 20
// }).addTo(myMap);



let myMap = L.map('map').setView([37.61, -122.011], 10);

let stadiaTileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}?api_key=5a282af8-4138-4d63-b013-1a4410795a2b', {
    minZoom: 0,
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    ext: 'png'
}).addTo(myMap);

let sfo_marker = L.marker([37.618, -122.375]).addTo(myMap);
let oak_marker = L.marker([37.710, -122.224]).addTo(myMap);
let sjc_marker = L.marker([37.361, -121.928]).addTo(myMap);

// accessibility feature 
myMap.eachLayer(function(layer) {
    if (layer.options.icon) {
      var iconElement = layer.getElement();
      if (iconElement) {
        iconElement.removeAttribute('tabindex');
      }
    }
  });