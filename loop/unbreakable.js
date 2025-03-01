const split = (str, sp = "") => {
  let arr = [];
  if (sp == "") return (arr = [...str]);
  let strSp = "";
  for (let j = 0; j < str.length; j++) {
    if (str[j] === sp[0] ) {
      if (str.slice(j, j + sp.length) == sp) {
        arr.push(strSp);
        strSp = "";
        j += sp.length-1;
      }
    } else {
      strSp += str[j];
    }
  }
  arr.push(strSp);

  return arr;
};
const join = (arr, sp = "") => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i != arr.length - 1) {
      str += sp;
    }
  }
  return str;
};
console.log(split('a b c', ' '))