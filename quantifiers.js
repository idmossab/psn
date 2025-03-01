const every = (arr, func) => {
    for (let item of arr) {
        if (!func(item)) return false
    }
    return true
}
const some = (arr, func) => {
    for (let item of arr) {
        if (func(item)) return true
    }
    return false
}
const none = (arr, func) => {
    for (let item of arr) {
        if (func(item)) return false
    }
    return true
}