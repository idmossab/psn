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

const nums = [-0.5, -3.7, 3.1, -3.1]
console.log(nums.map(round));
console.log(nums.map(ceil));