const first = (arg) => {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        return arg[0];
    }
    return 'arg must be string or array';
};
const last = (arg) => {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        return arg[arg.length - 1];
    }
    return 'arg must be string or array';
};
const kiss = (arg) => {
    if (typeof arg === 'string' || Array.isArray(arg)) {
        return (arg[arg.length - 1] + "" + arg[0]).toString();
    }
    return 'arg must be string or array';
};