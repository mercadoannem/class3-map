mapboxgl.accessToken = 'pk.eyJ1IjoibWVyY2Fkb2FubmVtIiwiYSI6ImNtOTF5emdodjA2bDAyam9oeHBmMHpzcmcifQ.Rq1Q0NNdnqalkKmh-0EkhA';

const map = new mapboxgl.Map({
	container: 'map-container',
	center: [103.8157455, 1.3048135],
	zoom: 12,
	bearing: 20
});

SGItinerary.forEach((record) => {
	const popup = new mapboxgl.Popup({ offset: 25 }).setText(
		`${record.Day} Itinerary: ${record.Destinations}.`
	);

	let daycolor = 'gray';
	if (record.Day === 'Day 1') daycolor = 'maroon';
	else if (record.Day === 'Day 2') daycolor = 'steelblue';
	else if (record.Day === 'Day 3') daycolor = 'orange';

	new mapboxgl.Marker({
		scale: 0.75,
		color: daycolor
	})
		.setLngLat([record.Longitude, record.Latitude])
		.setPopup(popup)
		.addTo(map);
});

document.getElementById('close-popup').addEventListener('click', function () {
	document.getElementById('intro-popup').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
	document.body.classList.remove('popup-active'); // only if you added this class
});