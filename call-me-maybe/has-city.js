const hasCity = (country, arr) => (city) => arr.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`;

//console.log(hasCity("maroc",["tanger","casa","oujda"])("oujda"))