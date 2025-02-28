const countLeapYears = (date) => {
    let yr = date.getFullYear();
    let leap = 0
    for (let i = 1; i < yr; i++) {
        if (i % 4 == 0) {
            if (i % 100 == 0) {
                if (i % 400 == 0) {
                    leap++
                }
            } else {
                leap++
            }
        }
    }
    // console.log(yr)
    return leap

}

//console.log(countLeapYears(new Date('1664-08-09')));
