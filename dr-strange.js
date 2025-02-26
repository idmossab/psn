const addWeek = (date) => {
  //init days of week
  const days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
    7: "secondMonday",
    8: "secondTuesday",
    9: "secondWednesday",
    10: "secondThursday",
    11: "secondFriday",
    12: "secondSaturday",
    13: "secondSunday",
  };
  //datebase
  let dateBase = new Date("0001-01-01");
  console.log(dateBase);
  //convert date
  console.log(date);
  let difDateMs = date - dateBase; //result en ms
  console.log(difDateMs);
  let difDateDays = difDateMs / (1000 * 60 * 60 * 24);
  let getDay = days[difDateDays % 14];

  console.log(getDay);
};

console.log(addWeek(new Date("0001-01-01")));
