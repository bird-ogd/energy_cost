var result = [];

function calculate(gas_usage, electric_usage, gas_price, gas_standing, electric_price, electric_standing, months) {
	annual_gas_standing = (gas_standing * 365.25) / 100;
	annual_electric_standing = (electric_standing * 365.25) / 100;
	gas_kwh = cubic_metre_kwh(gas_usage);
	gas_total = ((gas_kwh * gas_price) / 100) + annual_gas_standing;
	electric_total = ((electric_price * electric_usage) / 100) + annual_electric_standing;
	grand_total = gas_total + electric_total;
	monthly = grand_total / months;
	annual = monthly * 12;
	result["gas_usage"] = gas_usage;
	result["gas_kwh"] = gas_kwh.toFixed(0);;
	result["electric_usage"] = electric_usage;
	result["gas_price"] = gas_price;
	result["gas_standing"] = gas_standing;
	result["electric_price"] = electric_price;
	result["electric_standing"] = electric_standing;
	result["months"] = months;
	result["gas_total"] = gas_total.toFixed(2);;
	result["electric_total"] = electric_total.toFixed(2);;
	result["grand_total"] = grand_total.toFixed(2);;
	result["per_month"] = monthly.toFixed(2);;
	result["annual"] = annual.toFixed(2);;
}

function cubic_metre_kwh(gas_usage) {
	var kwh = gas_usage * 39.2;
	kwh = kwh * 1.02264;
	kwh = kwh / 3.6;
	return kwh;
}

function updateResults() {
	var gas_usage = parseInt(document.querySelector("#slider1").value);
	var electric_usage = parseInt(document.querySelector("#slider2").value);
	var gas_price = parseInt(document.querySelector("#slider3").value);
	var gas_standing = parseInt(document.querySelector("#slider4").value);
	var electric_price = parseInt(document.querySelector("#slider5").value);
	var electric_standing = parseInt(document.querySelector("#slider6").value);
	var months = parseInt(document.querySelector("#slider7").value);
	var items = [	"gas_kwh",
					"gas_usage",
					"electric_usage",
					"gas_price",
					"gas_standing",
					"electric_price",
					"electric_standing",
					"months",
					"gas_total",
					"electric_total",
					"grand_total",
					"per_month",
					"annual"
					];

	calculate(gas_usage, electric_usage, gas_price, gas_standing, electric_price, electric_standing, months);

	for(var i = 0; i < items.length; i++) {
		document.getElementById(items[i]).innerHTML = result[items[i]].toLocaleString();
	}
}

var slides = document.querySelectorAll(".slides");
for(i = 0; i < slides.length; i++) {
	slides[i].addEventListener("input", updateResults);
}