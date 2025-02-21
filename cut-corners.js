const multiply = (a, b) => {
    let mult = 0;
    let sign = (a < 0 && b > 0 || a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    while (b > 0) {
        mult += a;
        b--;
    }
    return sign ? -mult : mult;
};
const divide = (a, b) => {
    let count = 0;
    let sign = (a < 0 && b > 0 || a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >= b) {
        a -= b;
        count++;
    };
    return sign ? -count : count;
};
const modulo = (a, b) => {
    let div = divide(a, b);
    let mod = multiply(b, div);
    return a - mod;
};

const round = (nbr) => {
    let mod = modulo(nbr, 1);
    if (mod == 0) return nbr;
    let res = 0
    if (nbr > 0) {
        if (mod > 0.5 ? res = divide(nbr, 1) + 1 : res = divide(nbr, 1));
    } else {
        if (mod > -0.5 ? res = divide(nbr, 1) : res = divide(nbr, 1) - 1);
    }
    return res;
};
const ceil = (nbr) => {
    let mod = modulo(nbr, 1);
    if (mod == 0) return nbr;
    let res = divide(nbr, 1);
    return nbr >= 0 ? res + 1 : res;
};
const floor = (nbr) => {
    let mod = modulo(nbr, 1);
    if (mod == 0) return nbr;
    let res = divide(nbr, 1);
    return nbr >= 0 ? res : res - 1;

};
const trunc = (nbr) => {
    let mod = modulo(nbr, 1);
    if (mod == 0) return nbr;
    let res = divide(nbr, 1);
    return res
};

const nums = [0.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(ceil));
console.log(nums.map(floor))
console.log(nums.map(trunc));