const isPositive = (nbr) => nbr > 0 ? true : false;
const abs = (nbr) => (!isPositive(nbr) && nbr != 0) ? -nbr : nbr;
console.log(abs(0));