const fold = (arr, func, sum = 0) => {
    for (let i = 0; i < arr.length; i++) {
        //console.log("aa",sum)
        sum = func(sum, arr[i])
        //console.log("bb",sum)
    }
    return sum
}
const foldRight = (arr, func, sum = 0) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        sum = func(sum, arr[i])
    }
    return sum
}
const reduce = (arr, func, sum = 0) => {
    for (let i = 0; i < arr.length; i++) {
        sum = func(sum, arr[i])
    }
    return sum
}
const reduceRight = (arr, func, sum = 0) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        sum = func(sum, arr[i])
    }
    return sum
}
// const adder = (a, b) => a + b
// console.log(fold([1, 2, 3], adder, 2))
// console.log(foldRight([1, 2, 3], adder, 2))
// console.log(reduce([1, 2, 3], adder))
// console.log(reduceRight([1, 2, 3], adder))