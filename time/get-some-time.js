const firstDayWeek = (nbrWeek, year) => {
  if (nbrWeek < 1 || nbrWeek > 53) return;
  let dateBase = new Date(0);
  dateBase.setFullYear(Number(year));
  if (nbrWeek == 1) {
    return `01-01-${year}`;
  }
  const day = new Date(
    dateBase.getTime() + (nbrWeek - 1) * 7 * 24 * 60 * 60 * 1000
  );
  //console.log("before", day);
  while (day.getDay() != 1) {
    day.setDate(day.getDate() - 1);
  }
  //console.log("after", day);
  return day.toISOString().slice(0, 10).split("-").reverse().join("-");
};
