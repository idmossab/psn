const isFriday = (date) => (date.getDay() == 5 ? true : false);
const isWeekend = (date) => (date.getDay() == 6 || 0 ? true : false);
const isLeapYear = (date) =>
  date.getFullYear() % 4 == 0
    ? date.getFullYear() % 100 == 0
      ? date.getFullYear() % 400 == 0
        ? true
        : false
      : true
    : false;
const isLastDayOfMonth = (date) => {
  const yr = date.getFullYear();
  const mth = date.getMonth();
  const endOfMonth = new Date(yr, mth + 1, 0).getDate();
  return date.getDate() == endOfMonth;
};
