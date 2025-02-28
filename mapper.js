const map = (arr, fnc) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fnc(arr[i], i, arr))
    }
    return res
}

const flatMap = (arr, fnc) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        var v = arr[i];
        if (v instanceof Array) {
            Array.prototype.push.apply(arr, v.flatten());
        } else {
            res.push(v);
        }
    }
    return res
}