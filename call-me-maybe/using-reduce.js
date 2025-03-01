const adder = (arr, nbr = 0) => arr.reduce((sum, item) => sum + item, nbr)
const sumOrMul = (arr, nbr = 0) => arr.reduce((sum, item) => (item % 2 == 0) ? sum * item : sum + item, nbr)
const funcExec = (arr, nbr = 0) => arr.reduce((sum, item) => item(sum), nbr)