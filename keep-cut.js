const cutFirst = (arg) => arg.slice(2);
const cutLast = (arg) => arg.slice(0, arg.length - 2);
const cutFirstLast = (arg) => arg.slice(2, arg.length - 2);
const keepFirst = (arg) => arg.slice(0, 2);
const keepLast = (arg) => arg.slice(arg.length - 2);
const keepFirstLast = (arg) => keepFirst(arg) + "" + keepLast(arg);
console.log(keepFirstLast("helllo"));