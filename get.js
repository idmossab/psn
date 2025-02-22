const get = (src, path) => {
  let splt = path.split(".");
  for (let item of splt) {
    if (src[item] == undefined) {
      return undefined;
    }
    src = src[item];
  }
  return src;
};
