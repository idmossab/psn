const map = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let result = func(arr[i], i, arr)
        res.push(result)
    }
    return res
}

const flatMap = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let result = func(arr[i], i, arr);
        Array.isArray(result) ? res.push(...result) : res.push(result);
    }
    return res;
}