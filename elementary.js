const multiply = (a, b) => {
    let mult = 0;
    let sign = 1;
    if (a < 0 && b > 0 || a > 0 && b < 0) {
        sign = -1;
    }
    if (b < 0 || a < 0) {
        if (a < 0) {
            a = -a;
        }
        if (b < 0) {
            b = -b;
        }
    };
    //console.log("a:", a, "b:", b);
    while (b > 0) {
        mult += a;
        b--;
    }
    if (sign < 0) {
        mult = -mult
    }
    // console.log("a:", a, "b:", b, "mult", mult);
    return mult;
};
const divide = (a, b) => {
    let count = 0;
    let sign = 1;
    if (b == 0) return undefined;
    if (b < 0 && a < 0) {
        a = -a;
        b = -b;
    } else if (a < 0) {
        a = -a;
        sign = -1;
    } else if (b < 0) {
        b = -b;
        sign = -1;
    };
    while (a >= b) {
        a -= b;
        count++;
    };
    return multiply(sign, count);
};
const modulo = (a, b) => {
    let div = divide(a, b);
    let mod = multiply(b, div);
    return a - mod;
};
console.log(multiply(-22, 123));
console.log(divide(13, 2));
console.log(modulo(13, 2));