const letterSpaceNumber=(str)=>{
    const reg=/\w\s\d{1}\b/g;
    return str.match(reg) || [];
};
//console.log(letterSpaceNumber('He is 81 or 91 years old, not 10.'))