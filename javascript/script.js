// Data

const api_key = "at_KkBMx08SskQJsrTVoFFPWVonoMZqO";
let lat = '';
let lng = '';
let map


const ipAddressInput = document.getElementById('ip-address-input');
const loadMapButton = document.getElementById('load-map-button');

// Search Button
loadMapButton.addEventListener('click', function () {
	const ipAddress = ipAddressInput.value;
	getIpData(ipAddress, loadMap);
});

// Get IP Address
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

// Find Map from IP
function fetchGeolocationData(ipAddress) {
	$.ajax({
		url: "https://geo.ipify.org/api/v1",
		data: {apiKey: api_key, ipAddress: ipAddress},
		success: function (data) {
			lat = data.location.lat;
			lng = data.location.lng;
			loadMap();

			document.getElementById('ip-address').innerHTML = data.ip;
			document.getElementById('location').innerHTML = `${data.location.city}, ${data.location.country}, <br> ${data.location.region}, ${data.location.postcode ? data.location.postcode : ''}`;
			document.getElementById('timezone').innerHTML = data.location.timezone;
			document.getElementById('isp').innerHTML = data.isp;
		},
		error: function () {
			document.getElementById('error').innerHTML = 'Incorrect details added. Please try again';
		}
	});
}

// Load Map
function loadMap() {
	if (map) {
		map.remove()
	}

	let latlng = L.latLng(lat, lng);
	map = L.map('map', {
		Zoom: false
	}).setView(latlng, 15);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker(latlng).addTo(map)
}
