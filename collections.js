const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
//const setToArr = (set) => Array.from(set);
const setToArr = (set) => [...set].join(' ').split(' ');
const setToStr = (set) => [...set].join(' ');
//const setToStr=(set)=>Array.from(set).join(' ');
const strToArr = (str) => str.split(' ');
const strToSet = (str) => new Set(str);
// const mapToObj = (map) => Object.fromEntries(map);
const mapToObj1 = (map) => {
    const obj = {};
    map.forEach((value, key) => {
        obj[key] = value; // Add each key-value pair to the new object
    });
    return obj;
};
const objToArr = (obj) => Object.values(obj);
//const objToMap = (obj) => new Map(Object.entries(obj));
const objToMap = (obj) => new Map(Object.entries(obj));
//const arrToObj=(arr)=>;
//const strToObj=(str)=>;

// let map = new Map()
// map.set("user1", "Joe")
// map.set("user2", "Rogan")
// map.set("user3", "Jack")


console.log(objToMap({ name: 'John', age: 30, city: 'New York' }));

//console.log(strToSet("hello how are"));