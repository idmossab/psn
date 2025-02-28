const citiesOnly = (arr) => {
    return arr.map(element => element.city);
};

const upperCasingStates = (arr) => {
    return arr.map(ele => ele.replace(/(?<=^|\s)([a-z])/g, match => match.toUpperCase()));
};

const fahrenheitToCelsius = (arr) => {
    return arr.map(element => {
        let fahrenheit = parseInt(element.replace('°F', '').trim()); 
        let celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return celsius + "°C"; 
    });
};

const trimTemp = (arr) => {
    let arrMdf = arr.map(element => element.temperature.replaceAll(' ', '')); 
    for (let i = 0; i < arr.length; i++) arr[i].temperature = arrMdf[i];   
    return arr;
};

const tempForecasts = (arr) => {
    return trimTemp(arr).map(element => {
        let celsiusTemp = fahrenheitToCelsius([element.temperature])[0];   
        let state = upperCasingStates([element.state])[0];      
        return `${celsiusTemp}elsius in ${element.city}, ${state}`; 
    });
};