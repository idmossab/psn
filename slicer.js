const slice = (arg, start = 0, end = arg.length) => {
    if (start > arg.length) {
        return []
    }
    if (end >= arg.length) {
        end = arg.length
    }
    if (start < 0) {
        start += arg.length
    }
    if (end < 0) {
        end += arg.length
    }
    let res = [];
    if (typeof arg == 'string') {
        res = "";
    }
    for (let i = start; i < end; i++) {
        if (typeof arg == 'string') {
            res += arg[i];
            continue
        }
        res[res.length] = arg[i];
        // res.push(arg[i])
    }
    return res
};
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let str = "Hello world"
console.log(slice(animals, 2))
console.log(slice(str, 5))