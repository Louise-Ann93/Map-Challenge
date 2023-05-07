# Frontend Mentor - IP Address Tracker

This is a solution to the [IP Address Tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
	- [The challenge](#the-challenge)
	- [Links](#links)
- [My process](#my-process)
	- [Built with](#built-with)
	- [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses and see the key information and location


### Links

- [Solution URL](https://www.frontendmentor.io/solutions/ip-address-tracker-vanilla-html-css-and-jqueryjavascript-x0XYLcWK65)
- [Live Site URL](https://ip-map-challenge.netlify.app/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- JQuery
- Flexbox
- CSS Grid

### What I learned

This was my first frontendmentor challenge with an API call so it was interesting doing this in vanilla with no frameworks.

Still learning CSS Grid, I'm still finding it quite complex but I got there.

I have not built HTML in vanilla JavaScript before so I was really happy to get the dynamic text working.

```js
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
```

## Author

- Website - [Made by Willo](https://madebywillo.co.uk/)
- Frontend Mentor - [@Louise-Ann93](https://www.frontendmentor.io/profile/Louise-Ann93)
- Dev.to - [@louise-ann93](https://dev.to/louiseann93)

