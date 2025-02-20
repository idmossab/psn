const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
//const setToArr = (set) => Array.from(set);
const setToArr = (set) => [...set];
const setToStr = (set) => [...set].join('');
//const setToStr=(set)=>Array.from(set).join('');
const strToArr = (str) => str.split('');
const strToSet = (str) => new Set(str);
// const mapToObj = (map) => Object.fromEntries(map);
const mapToObj = (map) => {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value; // Add each key-value pair to the new object
    });
    return obj;
};
const objToArr = (obj) => Object.values(obj);
//const objToMap = (obj) => new Map(Object.entries(obj));
const objToMap = (obj) => {
    const map = new Map();
    Object.keys(obj).forEach((key) => {
        map.set(key, obj[key]);
    });
    return map;
};
const arrToObj = (arr) => obj = {...arr };
const strToObj = (str) => obj = Object.assign({}, str);



//console.log(strToArr("hello world"))

console.log(strToObj("hello"));

//console.log(strToSet("hello how are"));