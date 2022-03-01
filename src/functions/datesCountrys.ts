import { DateCreatedI } from "../types";
import { getCountryTimeOffset } from "./functions";

//get country specif datetiem
export const getCountryDate = (timeOffset: number): number => {
  let date = new Date();
  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  // create new Date object for a different timezone using supplied its GMT offset.
  let countryDate = new Date(utcTime + 3600000 * timeOffset);
  return countryDate.getTime();
};

//function getWeek of date
const getWeekNumber = (dateObj: Date, day: number) => {
  let day1Obj = dateObj.setDate(1);
  let dayWeek = new Date(day1Obj).getDay(); //day 1 of month
  let week = Math.ceil((day + dayWeek) / 7);
  return week;
};

//object date
export const getObjectDate = (country: string | undefined): DateCreatedI => {
  let date = new Date(getCountryDate(getCountryTimeOffset(country)));
  let day = date.getDate();
  let week = getWeekNumber(date, day);
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return {
    day,
    week,
    month,
    year,
  };
};

console.log(getObjectDate("argentina"));
