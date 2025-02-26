const isValid=(d)=>{
    return d instanceof Date && !isNaN(d);
}

console.log(isValid(new Date('0001-01-01')))