const matchCron = (cron, date) => {
  if (cron.length != 9) return;
  const cr = cron.split(' ');
  //console.log(cr)
  if (cr[0] == date.getMinutes()) return true;
  if (cr[1] == date.getHours()) return true;
  if (cr[2] == date.getDate()) return true
  if (cr[3] == date.getMonth()) return true
  if (cr[4] == date.getDay()) return true
  return false
};
