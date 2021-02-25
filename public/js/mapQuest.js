function initMap() {
	// add your code here
	L.mapquest.key = 'C5Kxk7ZYFNT80CjZMSkBtzircdIvTTCN';

	var map = L.mapquest.map('map', {
  	center: [32.88, -117.236],
  	layers: L.mapquest.tileLayer('map'),
  	zoom: 12
	});


	L.marker([32.87877256966731, -117.23586454456678]).addTo(map);
}