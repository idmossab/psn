const isValid=(date)=> date instanceof Date && !isNaN(date);
const isAfter=(date1,date2)=> date1>date2;
const isBefore=(date1,date2)=> date1<date2;
const isFuture=(date)=> (isValid(date) && (isAfter(date,new Date())))?true:false;
const isPast=(date)=>(isValid(date) && (isBefore(date,new Date())))?true:false;