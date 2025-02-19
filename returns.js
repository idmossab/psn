const id = (arg) => arg;
const getLength = (arg) => {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        return arg.length;
    }
    return 0;
};