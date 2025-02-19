const id = (arg) => id;
const getLength = (arg) => {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        return arg.length;
    }
    return 0;
}

console.log(getLength(5))