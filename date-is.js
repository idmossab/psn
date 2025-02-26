const isValid=(date)=> date instanceof Date && !isNaN(date);
const isAfter=(date1,date2)=> date1>date2;
const isBefore=(date1,date2)=> date1<date2;

console.log(isAfter(new Date('0001-01-02'),new Date('0001-01-01')))