// Initial view
const initialView = {
	center: [103.8157455, 1.3048135],
	zoom: 12,
	bearing: 20
};

// Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibWVyY2Fkb2FubmVtIiwiYSI6ImNtOTF5emdodjA2bDAyam9oeHBmMHpzcmcifQ.Rq1Q0NNdnqalkKmh-0EkhA';

const map = new mapboxgl.Map({
	container: 'map-container',
	...initialView
});

// Return to initial view
map.on('click', function (e) {
	if (!e.originalEvent.target.closest('.custom-marker')) {
		map.flyTo({
			center: initialView.center,
			zoom: initialView.zoom,
			bearing: initialView.bearing,
			speed: 1.2,
			curve: 1
		});
	}
});

// Markers and pop-up
SGItinerary.forEach((record) => {
	const popup = new mapboxgl.Popup({ offset: 25 }).setText(
		`${record.Day} Itinerary: ${record.Destinations}.`
	);

	let daycolor = 'gray';
	if (record.Day === 'Day 1') daycolor = 'maroon';
	else if (record.Day === 'Day 2') daycolor = 'steelblue';
	else if (record.Day === 'Day 3') daycolor = 'orange';

	// Create default marker and tag its element
	const marker = new mapboxgl.Marker({
		color: daycolor,
		scale: 0.75
	})
	.setLngLat([record.Longitude, record.Latitude])
	.setPopup(popup)
	.addTo(map);

	// Add class to marker's DOM element for detection
	marker.getElement().classList.add('custom-marker');

	// Add zoom-on-click
	marker.getElement().addEventListener('click', () => {
		map.flyTo({
			center: [record.Longitude, record.Latitude],
			zoom: 14,
			speed: 1.2,
			curve: 1
		});
	});
});

//Intro popup
document.getElementById('close-popup').addEventListener('click', function () {
	document.getElementById('intro-popup').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
	document.body.classList.remove('popup-active');
});