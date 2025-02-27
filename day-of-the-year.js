const dayOfTheYear = (date) => {
    let year = date.getFullYear()
    // console.log(year);
    if (year < 1)
        year = 1;
    //console.log(year);
    year = year.toString().padStart(4, "0") + "-01-01";
    year = new Date(year)
    const difYear = (date - year) / (1000 * 60 * 60 * 24)
    //console.log(difYear);

    return difYear + 1
}