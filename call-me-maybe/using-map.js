const citiesOnly = (arr) => {
    return arr.map(element => element.city);
};

const upperCasingStates = (arr) => {
    const reg = /\b\w/g
    return arr.map(ele => ele.replace(reg, reg => reg.toUpperCase()));
k
};
//console.log(upperCasingStates(['alabama', 'new jersey']))
const fahrenheitToCelsius = (arr) => {
    return arr.map(item => {
        //let fahrenheit = parseInt(item.replace('°F', ''));
        let fahrenheit = parseInt(item);
        //console.log(fahrenheit)//return int dont care if have another thing else numbre
        let celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return celsius + "°C";
    });
};
//console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

const trimTemp = (arr) => {
    return arr.map(item => {
        item.temperature = item.temperature.replaceAll(' ', '');
        return item;
    });
};


const tempForecasts = (arr) => {
    return arr.map(item => {
        let celsiusTemp = fahrenheitToCelsius([item.temperature]);
        let state = upperCasingStates([item.state]);
        return `${celsiusTemp}elsius in ${item.city}, ${state}`;
    });
}
/*console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]))*/