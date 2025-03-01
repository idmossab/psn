const repeat = (str, nbr) => {
    let rep = "";
    let i = 0;
    while (i < nbr) {
        rep += str;
        i++
    }
    return rep;
};
console.log(repeat("hello", 1));