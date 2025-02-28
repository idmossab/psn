const filter = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let check = func(arr[i], i, arr)
        if (check) res.push(current)
    }
    return res
}
const reject = (arr, func) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let check = func(arr[i], i, arr)
        if (!check) res.push(current)
    }
    return res
}
const partition = (arr, func) => [filter(arr, func), reject(arr, func)]