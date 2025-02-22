const pyramid = (str, nbr) => {
  let res = "";
  for (let i = 1; i <= nbr; i++) {
    for (let j = nbr - i; j > 0; j--) {
      res += " ".repeat(str.length);
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      res += str;
    }
    if (i != nbr) res += "\n";
  }
  return res;
};
