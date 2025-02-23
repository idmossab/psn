const DNA = (RNA) => {
  let result = "";
  for (let r of RNA) {
    if (r == "C") {
      result += "G";
    } else if (r == "G") {
      result += "C";
    } else if (r == "A") {
      result += "T";
    } else if (r == "U") {
      result += "A";
    }
  }
  return result;
};

const RNA = (DNA) => {
  let result = "";
  for (let r of DNA) {
    if (r == "G") {
      result += "C";
    } else if (r == "C") {
      result += "G";
    } else if (r == "T") {
      result += "A";
    } else if (r == "A") {
      result += "U";
    }
  }
  return result;
};
