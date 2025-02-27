const isFriday =(day)=> day.getDay()==5?true:false;
const isWeekend=(day)=>day.getDay()==6||0?true:false;
const isLeapYear=(year) => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
const isLastDayOfMonth=(date) => {
    const yr=date.getFullYear()
    const mth=date.getMonth()
    const endOfMonth = new Date(yr, mth + 1, 0).getDate()
    return date.getDate()==endOfMonth
};