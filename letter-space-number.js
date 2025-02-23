const letterSpaceNumber=(str)=>{
    const reg=/\w\s\d{1}/g;
    let result = str.match(reg) || [];
    return result
};
//console.log(letterSpaceNumber('example 1, example 20'))