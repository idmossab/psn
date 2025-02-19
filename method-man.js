const words = (str) => str.split(' ');
const sentence = (arr) => arr.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => "*" + str.toLowerCase() + "*";
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

console.log(words("hello word"));
console.log(sentence(["hello", "word "]));
console.log(yell("Hello word"));
console.log(capitalize("hELLO WORD"));