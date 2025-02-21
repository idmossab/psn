const indexOf = (arr, str, start = 0) => {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] == str) return i;
    }
    return -1;
};
const lastIndexOf = (arr, str, start = arr.length) => {
    for (let i = start - 1; i >= 0; i--) {
        if (arr[i] == str) return i;
    }
    return -1;
};
const includes = (arr, str) => {
    if (indexOf(arr, str) != -1) return true;
    return false;
};


console.log(indexOf(["hello", "how are you", "word"], "word"));
console.log(lastIndexOf(["hello", "how are you", "word"], "hello", 1));
console.log(includes(["hello", "how are you", "word"], "hello"));