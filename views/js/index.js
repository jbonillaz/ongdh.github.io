// (function() {

//     "use strict";



//     document.addEventListener('DOMContentLoaded', function() {

var map = L.map('map').setView([4.703851, -74.025074], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.703851, -74.025074]).addTo(map)
    .bindPopup('Bogota D.C.<br> Usaquén.')
    .openPopup();

//     });
// });