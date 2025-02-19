const isPositive = (nbr) => nbr < 0 ? false : true;
const abs = (nbr) => isPositive(nbr) ? nbr : -nbr;
console.log(abs(-1));