var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
//console.log('Hello from the client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations)

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VwaG9uZTg4IiwiYSI6ImNsa3I3MHhxZjFseXozZ3BsMXYwMjIyOHUifQ.ZblbPZuygLeTQuBsTFhdiw';

var mapboxgl = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/suphone88/clkr7egp400em01phfd2vhbfd',
    center:[-118.113491,34.111745],
    zoom:10
});