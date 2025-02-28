const citiesOnly = (arr) => arr.map(obj => obj.city)
const upperCasingStates = (arr) => {
    const reg = /\b\w/g
    return arr.map(obj => obj.replace(reg, reg => reg.toUpperCase()))
}
const fahrenheitToCelsius = (arr) => {
    let degree = arr.map(obj => obj = obj.split('°').slice(0, 1)).flat(1)
    let conv = degree.map(c => parseInt(c))
    let dg = conv.map(cv => cv = Math.round((cv - 32) * (5 / 9)).toString())
    return dg.map(item => item.replace(item, item + "°C"))
}
const trimTemp = (arr) => {
    const reg = /[^\s]/g
    return arr.map(obj => obj.temperature.match(reg).join(''))
}
const tempForecasts = (arr) => {
    return arr.map(obj => fahrenheitToCelsius(obj.temperature))
}

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]))