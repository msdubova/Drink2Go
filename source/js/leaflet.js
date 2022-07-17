var map = L.map('map').setView([59.968415066264214, 30.31763473889605], 17 );


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var mapPin = L.icon({
  iconUrl: "img/map-pin.svg",
  iconSize:     [38, 50],
  iconAnchor:   [0, 25],
  popupAnchor:  [-3, -76]
});

L.marker([59.968415066264214, 30.31763473889605], {icon: mapPin}).addTo(map);
