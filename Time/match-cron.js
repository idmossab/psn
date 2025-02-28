const matchCron = (cron, date) => {
  if (cron.length != 9) return false;
  const cr = cron.split(' ');
  //console.log(date.getMonth())
  if ((cr[0] == date.getMinutes() || cr[0] == '*') && (cr[1] == date.getHours() || cr[1] == '*') && (cr[2] == date.getDate() || cr[2] == '*') && (cr[3] == date.getMonth() + 1 || cr[3] == '*') && (cr[4] == date.getDay() || cr[4] == '*')) return true;
  return false
};
//console.log(matchCron('* * * * *', new Date()))