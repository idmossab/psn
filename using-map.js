const citiesOnly = (arr) => {
    return arr.map(element => element.city);
};

const upperCasingStates = (arr) => {
    return arr.map(ele => ele.replace(/\b\w/g, match => match.toUpperCase()));
};
const fahrenheitToCelsius = (arr) => {
    return arr.map(item => {
        let fahrenheit = parseInt(item.replace('°F', ''));
        let celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return celsius + "°C";
    });
};

const trimTemp = (arr) => {
    return arr.map(item => {
        item.temperature = item.temperature.replaceAll(' ', '');
        return item;
    });
};


const tempForecasts = (arr) => {
    return trimTemp(arr).map(item => {
        let celsiusTemp = fahrenheitToCelsius([item.temperature])[0];
        let state = upperCasingStates([item.state])[0];
        return `${celsiusTemp}elsius in ${item.city}, ${state}`;
    });
}
