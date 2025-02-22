const triangle = (str, nbr) => {
  let res = "";
  for (let i = 0; i < nbr; i++) {
    for (let j = 0; j < i + 1; j++) {
      res += str;
    }
    if (i != nbr - 1) {
      res += "\n";
    }
  }
  return res;
};