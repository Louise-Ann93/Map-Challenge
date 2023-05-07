const api_key = "at_KkBMx08SskQJsrTVoFFPWVonoMZqO";
let lat = '';
let lng = '';
let map

//note

const ipAddressInput = document.getElementById('ip-address-input');
const loadMapButton = document.getElementById('load-map-button');

loadMapButton.addEventListener('click', function() {
	const ipAddress = ipAddressInput.value;
	console.log(ipAddress); // This should now log the value entered in the input field
	getIpData(ipAddress, loadMap);
});

function getIpData() {
	let ipAddress = document.getElementById("ip-address-input").value;
	if (ipAddress === "") {
		$.getJSON("https://api.ipify.org?format=jsonp&callback=?", function (json) {
			ipAddress = json.ip;
			fetchGeolocationData(ipAddress);
		});
	} else {
		fetchGeolocationData(ipAddress);
	}
}

function fetchGeolocationData(ipAddress) {
	console.log(ipAddress);
	$.ajax({
		url: "https://geo.ipify.org/api/v1",
		data: { apiKey: api_key, ipAddress: ipAddress },
		success: function (data) {
			console.log(data);
			lat = data.location.lat;
			lng = data.location.lng;
			loadMap();
		},
		error: function () {
			alert('Incorrect details added. Please try again')
		}
	});
}

function loadMap() {
	if (map) {
		map.remove()
	}

	let latlng = L.latLng(lat, lng);
	map = L.map('map', {
		keyboard: true,
		dragging: true,
	}).setView(latlng, 15);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker(latlng).addTo(map)
		.bindPopup('You\'re here!')
		.openPopup();
}

function toggleDarkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
