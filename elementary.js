const multiply = (a, b) => {
    let mult = 0;
    let sign = (a < 0 && b > 0 || a > 0 && b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    //console.log("a:", a, "b:", b);
    while (b > 0) {
        mult += a;
        b--;
    }
    // console.log("a:", a, "b:", b, "mult", mult);
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
console.log(multiply(-22, 123));
console.log(divide(0, -2));
console.log(modulo(13, 2));