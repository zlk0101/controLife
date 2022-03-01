const getWeekNumber = (dateObj: Date, day: number) => {
  let day1Obj = dateObj.setDate(1);
  let dayWeek = new Date(day1Obj).getDay(); //day 1 of month
  let week = Math.ceil((day + dayWeek) / 7);
  return week;
};

const getDate = () => {
  let date = Date.now();
  let todayObj = new Date(date);
  let day = todayObj.getDate();
  let week = getWeekNumber(todayObj, day);
  let month = todayObj.getMonth() + 1;
  let year = todayObj.getFullYear();
  return [day, week, month, year];
};

let date = getDate();
console.log(date);

// //create date 10 may 2022
// let date1 = new Date(2022, 4, 10);
// console.log(getWeekNumber(date1, 8));
