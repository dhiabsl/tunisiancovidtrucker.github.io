window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
	fetch('https://api.covid19api.com/country/tunisia')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let update = data[data.length-1].Date;
		let rec = data[data.length-1].Recovered;
		let confirmedCases = data[data.length-1].Confirmed;
		let deaths = data[data.length-1].Deaths;
		console.log(data[data.length-1])

		document.getElementById('Last-Update').innerHTML = update.substr(0,10);
		document.getElementById('Recovered').innerHTML = rec;
		document.getElementById('cases').innerHTML = confirmedCases;
		document.getElementById('deaths').innerHTML = deaths;
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases)).toFixed(3)*100)+"%";




	})
	.catch(function(e) {
		console.log(e);
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}