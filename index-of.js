const indexOf = (arr, str, start = 0) => {
    if (start > arr.length || start < 0) return -1
    for (let i = start; i < arr.length; i++) {
        if (arr[i] == str) return i;
    }
    return -1;
};
const lastIndexOf = (arr, str, start = arr.length) => {
    if (start > arr.length || start < 0) return -1
    console.log("start", start);
    for (let i = start; i >= 0; i--) {
        if (arr[i] == str) return i;
    }
    return -1;
};
const includes = (arr, str) => {
    if (indexOf(arr, str) != -1) return true;
    return false;
};


//console.log(indexOf(["hello", "how are you", "word"], "word"));
console.log(lastIndexOf([0, 0, "t", "t"], "t", 3));
console.log(includes(["hello", "how are you", "word"], "hello"));