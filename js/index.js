var map = L.map('map', { scrollWheelZoom: false }).setView(
  [43.64701, -79.39425],
  15
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
var locationIcon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [20, 30], // size of the icon
});

var marker = L.marker([43.64701, -79.39425], {
  icon: locationIcon,
}).addTo(map);
