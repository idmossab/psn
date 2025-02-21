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
const floor = (nbr) => {
    let mod = modulo(nbr, 1);
    if (mod == 0) return nbr;
    let res = nbr - mod;
    return nbr >= 0 ? res : res - 1;

};
const ceil = (nbr) => {
    let mod = modulo(nbr, 1);
    if (mod == 0) return nbr;
    let res = nbr - mod;
    return nbr >= 0 ? res + 1 : res;
};
const floatTodecimal = (nbr) => {
    while (nbr >= 1000000) {
        nbr -= 1000000
    }
    while (nbr >= 1000) {
        nbr -= 1000
    }
    while (nbr >= 100) {
        nbr -= 100
    }
    while (nbr >= 10) {
        nbr -= 10
    }
    while (nbr >= 1) {
        nbr -= 1
    }
    return nbr
}
const trunc = (nbr) => {
    let sign = nbr >= 0;
    nbr = Math.abs(nbr);
    let res = nbr - floatTodecimal(nbr);
    return sign ? res : -res;
}
const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))