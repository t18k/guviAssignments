/*
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))

JSON.stringify() works only if order is same
*/

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
	var data = JSON.parse(request.response);

	for (var i in data) {
		var flag = data[i].flag;

		// displaying flag name in console
		console.log(flag);
	}

	for (var i in data) {
		var name = data[i].name.common;
		var region = data[i].region;
		var subregion = data[i].subregion;
		var population = data[i].population;

		// displaying name, region, subregion, population
		console.log(
			`Name: ${name}, Region:${region},
      SubRegion:${subregion},Population:${population}`
		);
	}
};
