const max = (nbr1, nbr2) => nbr1 > nbr2 ? nbr1 : nbr2;
const min = (nbr1, nbr2) => !max(nbr1, nbr2) ? nbr1 : nbr2;

console.log(max(5, 3));
console.log(min(5, 3));