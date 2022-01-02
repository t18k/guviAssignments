var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);

  // printing countries in Asia
  let asiaCountries = [];
  data.filter((item) => {
    if (item.region === "Asia") asiaCountries.push(item.name.common);
  });
  console.log(asiaCountries);

  // printing countries having less than 2 lakh population
  let populationCountries = [];
  data.filter((item) => {
    if (item.population < 200000) populationCountries.push(item.name.common);
  });
  console.log(populationCountries);

  // name, capital, flag in an array
  data.forEach((country) => {
    let arr = [country.name.common, country.capital, country.flag];
    console.log(arr);
  });

  // total population including all countries
  let totalPopulation = data.reduce((acc, item) => {
    return parseInt(acc) + parseInt(item.population);
  }, 0);
  console.log(totalPopulation);

  // countries using US dollars
  let USDUsingCountries = [];
  data.forEach((country) => {
    let countryCurrencies = country.currencies;
    for (let currency in countryCurrencies) {
      if (currency === "USD") USDUsingCountries.push(country.name.common);
    }
  });
  console.log(USDUsingCountries);
};
