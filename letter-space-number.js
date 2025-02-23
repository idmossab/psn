const letterSpaceNumber=(str)=>{
    const reg=/\w\s\d{1}\b/g;
    let result = str.match(reg) || [];
    return result
};
//console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))