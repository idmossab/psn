//Date.now()==>result ms that we do new date for check format
const isValid=(date)=> (new Date(date) instanceof Date && !isNaN(date) && date!="");
const isAfter=(date1,date2)=> (date1>date2);
const isBefore=(date1,date2)=> (date1<date2);
const isFuture=(date)=> (isValid(date) && (isAfter(date,new Date())));
const isPast=(date)=>(isValid(date) && (isBefore(date,new Date())));