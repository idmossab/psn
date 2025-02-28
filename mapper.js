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
        Array.isArray(arr[i]) ? res.push(...arr[i]) : res.push(arr[i]);
    }
    return res
}