// const pyramid = (str, nbr) => {
//   let res = "";
//   for (let i = 1; i <= nbr; i++) {
//     for (let j = nbr - i; j > 0; j--) {
//       res += " ".repeat(str.length);
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       res += str;
//     }
//     if (i != nbr) res += "\n";
//   }
//   return res;
// };

function pyramid(str, nbr) {
  let res = "";
  for (let i=1;i<=nbr;i++){
    res+=" ".repeat((nbr-i)*str.length)+str.repeat(2*i-1);
    if(i!=nbr)res+="\n"
  }
  return res
}