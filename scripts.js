mapboxgl.accessToken = 'pk.eyJ1IjoibWVyY2Fkb2FubmVtIiwiYSI6ImNtOTF5emdodjA2bDAyam9oeHBmMHpzcmcifQ.Rq1Q0NNdnqalkKmh-0EkhA';

const map = new mapboxgl.Map({
	container: 'map-container', // container ID
	center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
	zoom: 9 // starting zoom
});