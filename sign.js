const sign=(nbr)=>nbr>0?1:nbr==0?0:-1;
const sameSign=(nbr1,nbr2)=>sign(nbr1)==sign(nbr2);
console.log(sign(-5));
console.log(sameSign(5,5));