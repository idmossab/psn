const citiesOnly = (arr) => arr.map(obj => obj.city)

const upperCasingStates = (arr) => {
    const reg = /\b\w/g
    return arr.map(obj => obj.replace(reg, reg => reg.toUpperCase()))
}

const fahrenheitToCelsius = (arr) => {
    return arr.map(temp => {
        let fahrenheit = parseInt(temp.replace('°F', ''));
        let celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return celsius + "°C";
    });
}

const trimTemp = (arr) => {
    return arr.map(obj => obj.temperature.trim());
}

const tempForecasts = (arr) => {
    return arr.map(element => {
        let city = element.city;
        let state = upperCasingStates([element.state])[0];
        let temp = fahrenheitToCelsius([element.temperature])[0];
        return `${temp}elsius in ${city}, ${state}`;
    });
}